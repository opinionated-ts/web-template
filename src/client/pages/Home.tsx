export function Home() {
  return (
    <main class="mx-auto min-h-screen w-[min(calc(100%-2rem),48.75rem)] py-14 sm:py-20">
      <section class="max-w-2xl pb-14 sm:pb-18">
        <div aria-hidden="true" class="mb-8 flex gap-1">
          <span class="size-1.5 rounded-[1px] bg-[#b7f397]" />
          <span class="size-1.5 rounded-[1px] bg-[#b7f397]/60" />
          <span class="size-1.5 rounded-[1px] bg-[#b7f397]/25" />
        </div>

        <p class="mb-3 font-mono text-xs font-semibold tracking-[0.16em] text-[#b7f397] uppercase">
          OPINIONATED TS — ECOSYSTEM
        </p>

        <h1 class="mb-6 max-w-2xl text-[clamp(2.5rem,8vw,4.375rem)] leading-none font-semibold tracking-[-0.06em] text-[#f5f5f5]">
          A minimal foundation for web projects.
        </h1>

        <p class="max-w-xl text-lg leading-[1.65] text-[#b4b4bb]">
          A small Preact, Vite, and TypeScript starting point for building web projects without
          starting from scratch.
        </p>

        <a
          href="https://github.com/opinionated-ts"
          target="_blank"
          rel="noreferrer"
          class="mt-8 inline-flex min-h-11 items-center gap-2 rounded-[0.375rem] font-mono text-sm font-semibold text-[#b7f397] no-underline transition-colors duration-150 hover:text-[#d4ffb8] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#b7f397]"
        >
          Explore the ecosystem
          <span aria-hidden="true" class="text-[#b7f397]">
            ↗
          </span>
        </a>
      </section>

      <section aria-labelledby="foundation-title" class="border-t border-[#29292c] pt-8">
        <p class="mb-2 font-mono text-xs font-semibold tracking-[0.16em] text-[#92939a] uppercase">
          THE FOUNDATION
        </p>

        <h2 id="foundation-title" class="text-xl font-semibold tracking-[-0.03em] text-[#f5f5f5]">
          Start small. Build from here.
        </h2>

        <p class="mt-4 max-w-2xl text-sm leading-[1.65] text-[#b4b4bb]">
          Everything you need to start a web project with a ready-to-use development setup.
        </p>
      </section>

      <footer class="mt-16 border-t border-[#29292c] pt-5 font-mono text-xs font-medium text-[#92939a]">
        Preact · Vite · TypeScript
      </footer>
    </main>
  );
}
