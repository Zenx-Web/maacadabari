export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center gap-lg px-md py-4xl text-center">
      <p className="font-mono text-caption tracking-buttons uppercase text-text-secondary">
        Design token smoke test
      </p>
      <h1 className="font-sans text-display-lg text-text-primary tracking-display max-w-wide">
        Step Into A New Dimension
        <br />
        <span className="text-brand-red">Of Creativity</span>
      </h1>
      <p className="text-body text-text-secondary max-w-reading">
        Animation, VFX, Game Design, Digital Design, UI/UX, Broadcast and
        Digital Filmmaking & Photography — one AI-first creative institute.
      </p>
      <div className="flex flex-wrap gap-sm justify-center pt-md">
        <button className="rounded-button bg-brand-red px-lg py-sm text-body-sm font-medium tracking-buttons text-text-primary shadow-elevation-md hover:bg-brand-red-hover transition-colors">
          Book Career Counselling
        </button>
        <button className="rounded-button border border-border px-lg py-sm text-body-sm font-medium tracking-buttons text-text-primary hover:bg-surface transition-colors">
          Explore Courses
        </button>
      </div>
      <div className="mt-2xl rounded-card border border-border bg-surface p-lg max-w-reading shadow-elevation-sm">
        <h2 className="text-h4 text-text-primary mb-sm">Token check</h2>
        <p className="text-body-sm text-text-muted">
          Surface #111111, muted text at 60% opacity, card radius 24px, brand
          red #E53935 — all sourced from design-tokens.json via the Tailwind
          v4 @theme block.
        </p>
      </div>
    </main>
  );
}
