import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } from "next/constants";

// Velite integration: velite.js.org's documented next.config snippet
// detects dev/build mode via `process.argv.includes('dev'/'build')`.
// That check is broken by Next.js 16's config-loading change (the
// upgrade guide confirms `next dev` no longer puts 'dev' in argv when
// the config file loads - only NODE_ENV or the phase param are
// reliable now). Use Next's own phase constants instead, which are
// unaffected by that change.
export default async function config(phase: string): Promise<NextConfig> {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isBuild = phase === PHASE_PRODUCTION_BUILD;

  if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
    process.env.VELITE_STARTED = "1";
    const { build } = await import("velite");
    await build({ watch: isDev, clean: !isDev });
  }

  const nextConfig: NextConfig = {
    /* config options here */
  };

  return nextConfig;
}
