import { Link } from "wouter-preact";

export function NotFound() {
  return (
    <main class="mx-auto flex min-h-screen w-[min(calc(100%-2rem),48.75rem)] items-center py-14 sm:py-20">
      <section class="w-full max-w-xl border-t border-[#29292c] pt-8">
        <p class="font-mono text-xs font-semibold tracking-[0.16em] text-[#b7f397] uppercase">
          404
        </p>

        <h1 class="mt-3 text-4xl leading-tight font-semibold tracking-[-0.04em] text-[#f5f5f5] sm:text-5xl">
          Page not found.
        </h1>

        <p class="mt-5 max-w-lg text-sm leading-[1.65] text-[#b4b4bb]">
          This route does not exist in the current template.
        </p>

        <Link
          href="/"
          aria-label="Back to home"
          class="mt-7 inline-flex min-h-11 items-center gap-2 rounded-[0.375rem] font-mono text-sm font-semibold text-[#b7f397] no-underline transition-colors duration-150 hover:text-[#d4ffb8] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#b7f397]"
        >
          <span aria-hidden="true">←</span>
          Back home
        </Link>
      </section>
    </main>
  );
}
