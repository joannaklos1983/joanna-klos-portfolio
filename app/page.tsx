const projects = [
  {
    title: "MIA-STOP HD",
    desc: "UX komunikacji, upraszczanie treści, AI-assisted workflows.",
    tag: "Health / Communication",
  },
  {
    title: "UpRent",
    desc: "Strategia marketplace, analiza rynku, model biznesowy, KPI, UX komunikacji.",
    tag: "Marketplace Strategy",
  },
  {
    title: "AI & Web Projects",
    desc: "Landing page’e, proste aplikacje, GitHub, Vercel, Claude Code, Cursor, v0, AI agents.",
    tag: "AI / Web",
  },
];

const experience = [
  ["IDEO SP. Z O.O.", "Specjalistka ds. Wizerunku Pracodawcy", "2017–2024"],
  ["PPHU SPECJAŁ", "Asystentka Biura Zarządu", "2024–2026"],
  ["GRUPA INDITEX", "Menedżerka salonu", "2011–2014"],
];

const steps = [
  ["01", "Analiza problemu", "Rozumienie odbiorcy, kontekstu i celu biznesowego."],
  ["02", "Struktura komunikacji", "Upraszczanie treści, porządkowanie informacji i UX komunikacji."],
  ["03", "Tworzenie i wdrażanie", "Content, CMS, landing pages, digital assets i materiały komunikacyjne."],
  ["04", "AI workflows", "Research, automatyzacja, prompt workflows, AI agents i prototypowanie."],
];

const skills = ["Marketing", "Strategy", "AI", "Content", "Web / Digital"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FAF7F2] text-[#2A1E18]">
      <div className="fixed inset-0 -z-10">
        <div className="animate-float-soft absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-[#E8D6CC] blur-3xl opacity-70" />
        <div className="animate-float-soft absolute right-[-8%] top-[20%] h-[360px] w-[360px] rounded-full bg-[#D8BFA5] blur-3xl opacity-60 [animation-delay:2s]" />
      </div>

      <nav className="sticky top-0 z-50 border-b border-[#8A5A3C]/10 bg-[#FAF7F2]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="font-semibold tracking-tight transition hover:text-[#8A5A3C]">
            Joanna Kłos
          </a>
          <div className="hidden gap-8 text-sm text-[#7A665A] md:flex">
            <a href="#work" className="transition hover:text-[#8A5A3C]">How I Work</a>
            <a href="#projects" className="transition hover:text-[#8A5A3C]">Projects</a>
            <a href="#experience" className="transition hover:text-[#8A5A3C]">Experience</a>
            <a href="#contact" className="transition hover:text-[#8A5A3C]">Contact</a>
          </div>
        </div>
      </nav>

      <section className="animate-fade-up mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-[#8A5A3C]/15 bg-white/55 px-4 py-2 text-sm text-[#8A5A3C] shadow-sm backdrop-blur">
            Marketing • Strategia • AI • Web Projects
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
            Joanna Kłos
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#7A665A]">
            Łączę doświadczenie w marketingu operacyjnym, komunikacji i koordynacji projektów
            z praktycznym wykorzystaniem AI oraz narzędzi cyfrowych. Tworzę i porządkuję
            komunikację, projektuję struktury treści, wspieram działania marketingowe i rozwijam
            prototypy stron oraz aplikacji.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-full bg-[#8A5A3C] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#8A5A3C]/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#8A5A3C]/25">
              Explore Projects
            </a>
            <a href="#experience" className="rounded-full border border-[#8A5A3C]/20 bg-white/60 px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:border-[#8A5A3C]/35 hover:bg-white/80">
              View Experience
            </a>
            <a href="#" className="rounded-full border border-[#8A5A3C]/20 bg-white/40 px-6 py-3 text-sm font-medium text-[#7A665A] transition hover:-translate-y-0.5 hover:bg-white/70">
              Download CV
            </a>
          </div>
        </div>

        <div className="relative transition duration-500 hover:-translate-y-1">
          <div className="rounded-[2rem] border border-[#8A5A3C]/15 bg-white/60 p-5 shadow-2xl shadow-[#8A5A3C]/10 backdrop-blur-xl">
            <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#F8F3EC] via-white to-[#E8D6CC]">
              <div className="relative h-[420px]">
                <img
                 src="https://raw.githubusercontent.com/joannaklos1983/joanna-klos-portfolio/main/joanna-profile.jpg"
                  alt="Joanna Kłos"
                 className="h-full w-full object-cover object-[center_28%] transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#2A1E18]/60 via-[#2A1E18]/15 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#F8F3EC]/80">
                    AI-native portfolio
                  </p>

                  <h2 className="mt-3 text-3xl font-semibold">
                    Communication designed with clarity.
                  </h2>

                  <p className="mt-3 max-w-md text-sm leading-6 text-[#F8F3EC]/90">
                    Strategia, treść, narzędzia AI i prototypowanie — połączone w jeden
                    praktyczny workflow dla marek, projektów i komunikacji digital.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 p-5">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="rounded-2xl bg-white/80 px-4 py-3 text-sm shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="animate-fade-up mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">
          How I Work
        </p>
        <h2 className="mt-3 max-w-2xl text-4xl font-semibold">
          Od chaosu informacji do jasnej komunikacji.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {steps.map(([nr, title, desc]) => (
            <div
              key={title}
              className="rounded-[1.7rem] border border-[#8A5A3C]/15 bg-white/60 p-6 shadow-xl shadow-[#8A5A3C]/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#8A5A3C]/25 hover:bg-white/75 hover:shadow-2xl hover:shadow-[#8A5A3C]/10"
            >
              <span className="text-sm font-semibold text-[#8A5A3C]">{nr}</span>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#7A665A]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="animate-fade-up mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">
          Projects
        </p>
        <h2 className="mt-3 text-4xl font-semibold">
          Wybrane projekty i kierunki rozwoju.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-[2rem] border border-[#8A5A3C]/15 bg-white/65 p-7 shadow-xl shadow-[#8A5A3C]/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#8A5A3C]/25 hover:bg-white/80 hover:shadow-2xl hover:shadow-[#8A5A3C]/10"
            >
              <span className="rounded-full bg-[#E8D6CC]/70 px-3 py-1 text-xs font-medium text-[#8A5A3C]">
                {project.tag}
              </span>
              <h3 className="mt-8 text-2xl font-semibold">{project.title}</h3>
              <p className="mt-4 leading-7 text-[#7A665A]">{project.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="animate-fade-up mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">
          Experience
        </p>
        <h2 className="mt-3 text-4xl font-semibold">Doświadczenie zawodowe.</h2>

        <div className="mt-10 space-y-4">
          {experience.map(([company, role, years]) => (
            <div
              key={company}
              className="rounded-[1.5rem] border border-[#8A5A3C]/15 bg-white/60 p-6 shadow-lg shadow-[#8A5A3C]/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/75 hover:shadow-xl hover:shadow-[#8A5A3C]/10"
            >
              <h3 className="text-xl font-semibold">{company}</h3>
              <p className="mt-1 text-[#7A665A]">{role}</p>
              <p className="mt-2 text-sm font-medium text-[#8A5A3C]">{years}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="animate-fade-up mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2.5rem] border border-[#8A5A3C]/15 bg-gradient-to-br from-white/80 via-[#F8F3EC]/90 to-[#E8D6CC]/70 p-10 text-center shadow-2xl shadow-[#8A5A3C]/10 backdrop-blur md:p-16">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">
            Contact
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold md:text-5xl">
            Let’s build better communication & digital experiences.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#7A665A]">
            Strategia, komunikacja, AI i projekty webowe w jasnej, profesjonalnej formule personal brand.
          </p>
          <div className="mt-8">
            <a
              href="mailto:"
              className="rounded-full bg-[#8A5A3C] px-7 py-3 text-sm font-medium text-white shadow-lg shadow-[#8A5A3C]/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#8A5A3C]/25"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#8A5A3C]/10 px-6 py-8 text-center text-sm text-[#7A665A]">
        © 2026 Joanna Kłos — AI-native marketing & digital portfolio
      </footer>
    </main>
  );
}
