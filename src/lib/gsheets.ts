const GSHEETS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwazcsptDV2_VNhHZlipFX_ooSq596mOE-jPESYpJqU3OKfOAinVtjj3jJ_uF6CfAxakA/exec";

// ─── Anti-spam: localStorage-based protection ───────────────────────────────

const STORAGE_KEY = "maac_form_submissions";
const COOLDOWN_MS = 10 * 60 * 1000; // 10 minutes between submissions
const DUPLICATE_WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours for same phone
const MAX_PER_DAY = 3;

interface SpamRecords {
  phones: Record<string, number>;
  timestamps: number[];
}

function getRecords(): SpamRecords {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { phones: {}, timestamps: [] };
    const data: SpamRecords = JSON.parse(raw);
    const now = Date.now();

    if (data.phones) {
      for (const phone in data.phones) {
        if (now - data.phones[phone] > DUPLICATE_WINDOW_MS) {
          delete data.phones[phone];
        }
      }
    }

    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    data.timestamps = (data.timestamps || []).filter(
      (t) => t >= todayStart.getTime()
    );

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return data;
  } catch {
    return { phones: {}, timestamps: [] };
  }
}

function saveRecord(phone: string) {
  try {
    const data = getRecords();
    const now = Date.now();
    data.phones[phone] = now;
    data.timestamps.push(now);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    /* localStorage full or unavailable */
  }
}

export function checkSpam(phone: string): {
  allowed: boolean;
  reason: string;
} {
  const data = getRecords();
  const now = Date.now();

  if (phone && data.phones[phone]) {
    const elapsed = now - data.phones[phone];
    if (elapsed < DUPLICATE_WINDOW_MS) {
      const hoursLeft = Math.ceil(
        (DUPLICATE_WINDOW_MS - elapsed) / 3_600_000
      );
      return {
        allowed: false,
        reason: `This phone number was already submitted. Please try again in ${hoursLeft} hour${hoursLeft > 1 ? "s" : ""}.`,
      };
    }
  }

  const lastSubmit = data.timestamps.length
    ? data.timestamps[data.timestamps.length - 1]
    : 0;
  if (lastSubmit && now - lastSubmit < COOLDOWN_MS) {
    const minsLeft = Math.ceil((COOLDOWN_MS - (now - lastSubmit)) / 60_000);
    return {
      allowed: false,
      reason: `Please wait ${minsLeft} minute${minsLeft > 1 ? "s" : ""} before submitting again.`,
    };
  }

  if (data.timestamps.length >= MAX_PER_DAY) {
    return {
      allowed: false,
      reason:
        "You have reached the maximum submissions for today. Please try again tomorrow.",
    };
  }

  return { allowed: true, reason: "" };
}

export function recordSubmission(phone: string) {
  saveRecord(phone);
}

// ─── Phone validation ───────────────────────────────────────────────────────

export function cleanPhone(raw: string): string {
  return raw
    .trim()
    .replace(/^\+?91[-\s]?/, "")
    .replace(/[^0-9]/g, "");
}

export function isValidPhone(cleaned: string): boolean {
  return cleaned.length === 10 && /^[6-9]\d{9}$/.test(cleaned);
}

// ─── Submission ─────────────────────────────────────────────────────────────

async function fetchWithTimeout(
  resource: string,
  options: RequestInit & { timeout?: number } = {}
) {
  const { timeout = 12000, ...fetchOptions } = options;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const res = await fetch(resource, {
      ...fetchOptions,
      signal: controller.signal,
    });
    clearTimeout(id);
    return res;
  } catch (err) {
    clearTimeout(id);
    throw err;
  }
}

export async function submitToSheets(
  data: Record<string, string>
): Promise<{ success: boolean; opaque?: boolean }> {
  try {
    const res = await fetchWithTimeout(GSHEETS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(data),
      timeout: 12000,
    });
    const text = await res.text().catch(() => "");
    if (!res.ok) {
      throw new Error(
        `Submission failed (${res.status}): ${text.slice(0, 200)}`
      );
    }
    let json: { success?: boolean; message?: string } = {};
    try {
      json = text ? JSON.parse(text) : {};
    } catch {
      throw new Error(
        "Unexpected response from server. Please try again later."
      );
    }
    if (json && json.success === false) {
      throw new Error(json.message || "Submission failed");
    }
    return { success: true };
  } catch (err) {
    const fd = new FormData();
    Object.entries(data).forEach(([k, v]) => fd.append(k, String(v ?? "")));
    try {
      await fetchWithTimeout(GSHEETS_ENDPOINT, {
        method: "POST",
        body: fd,
        mode: "no-cors",
        timeout: 12000,
      });
      return { success: true, opaque: true };
    } catch {
      throw err;
    }
  }
}
