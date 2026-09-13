"use client";

import { useCallback, useEffect, useState } from "react";
import { LoadingScreenFilmReel } from "./LoadingScreenFilmReel";

const STORAGE_KEY = "maac-visited";

function removeSiteLoadingClass() {
  document.documentElement.classList.remove("site-loading");
}

export function SiteLoadingScreen() {
  const [state, setState] = useState<"pending" | "show" | "done">("pending");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const force = params.get("loading") === "film";

    if (force || !sessionStorage.getItem(STORAGE_KEY)) {
      setState("show");
    } else {
      removeSiteLoadingClass();
      setState("done");
    }
  }, []);

  const handleComplete = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    removeSiteLoadingClass();
    setState("done");
  }, []);

  if (state === "done") return null;

  return (
    <div data-loading-screen>
      {state === "pending" ? (
        <div className="fixed inset-0 z-[10000] bg-background-1" />
      ) : (
        <LoadingScreenFilmReel onComplete={handleComplete} />
      )}
    </div>
  );
}
