export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f4f0e8] text-[#18221d]">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-7 lg:px-10">
        <a className="font-mono text-sm font-semibold uppercase tracking-[0.18em]" href="#top">
          AM / 2025
        </a>
        <nav className="flex items-center gap-6 text-sm font-medium text-[#526057]" aria-label="Primary navigation">
          <a className="transition-colors hover:text-[#18221d]" href="#about">About</a>
          <a className="transition-colors hover:text-[#18221d]" href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6 pb-16 lg:px-10 lg:pb-24">
        <section className="relative grid min-h-[650px] items-center border-t border-[#b8b8a9] py-16 lg:grid-cols-[1.3fr_0.7fr] lg:py-24">
          <div className="relative z-10 max-w-4xl">
            <p className="mb-7 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#b14d31]">
              Hello, I&apos;m Alex Morgan
            </p>
            <h1 className="max-w-4xl text-[clamp(3.8rem,10vw,9.5rem)] font-semibold leading-[0.86] tracking-[-0.075em]">
              I make digital things feel <em className="font-serif font-normal tracking-[-0.06em] text-[#b14d31]">human.</em>
            </h1>
            <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center">
              <a className="inline-flex items-center justify-center gap-4 rounded-full bg-[#18221d] px-6 py-3 text-sm font-semibold text-[#f4f0e8] transition-transform hover:-translate-y-1" href="#about">
                More about me <span aria-hidden="true" className="text-lg">-&gt;</span>
              </a>
              <p className="max-w-xs text-sm leading-6 text-[#526057]">
                Product designer and front-end developer based in Copenhagen, working with thoughtful teams worldwide.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-32 top-1/2 hidden h-[430px] w-[430px] -translate-y-1/2 rounded-full border border-[#b8b8a9] lg:block">
            <div className="absolute inset-10 rounded-full bg-[#d8dfcf]" />
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#b8b8a9]" />
            <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#b8b8a9]" />
          </div>
        </section>

        <section id="about" className="grid gap-12 border-t border-[#b8b8a9] py-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24 lg:py-24">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#b14d31]">01 / About me</p>
          </div>
          <div>
            <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
              I care about the space between a good idea and the moment it clicks.
            </h2>
            <div className="mt-10 grid gap-8 text-base leading-7 text-[#526057] sm:grid-cols-2">
              <p>For the last 7 years, I&apos;ve helped startups and ambitious brands turn complex problems into clear, useful products.</p>
              <p>My work sits between strategy, visual design, and code. I like asking better questions, finding the sharpest idea, and making it real.</p>
            </div>
          </div>
        </section>

        <section className="grid gap-8 border-y border-[#b8b8a9] py-10 sm:grid-cols-3">
          <div><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#7b857d]">Currently</p><p className="mt-3 font-medium">Designing at Northstar</p></div>
          <div><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#7b857d]">Previously</p><p className="mt-3 font-medium">Studio Form, Mono Lab</p></div>
          <div><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#7b857d]">Available for</p><p className="mt-3 font-medium">Select collaborations</p></div>
        </section>

        <section id="contact" className="flex flex-col gap-8 py-20 sm:flex-row sm:items-end sm:justify-between lg:py-28">
          <div><p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#b14d31]">02 / Say hello</p><h2 className="mt-6 max-w-xl text-5xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-7xl">Have a good one in mind?</h2></div>
          <a className="group text-lg font-medium" href="mailto:hello@alexmorgan.design">hello@alexmorgan.design <span className="ml-2 inline-block transition-transform group-hover:translate-x-2">-&gt;</span></a>
        </section>
      </main>

      <footer className="border-t border-[#b8b8a9] px-6 py-6 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-xs text-[#7b857d] sm:flex-row sm:items-center sm:justify-between">
          <p>Designed &amp; built with care.</p>
          <p className="font-mono uppercase tracking-[0.16em]">Copenhagen / Worldwide</p>
        </div>
      </footer>
    </div>
  );
}
