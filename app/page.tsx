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

const tools = [
  "Claude",
  "Claude Code",
  "Cursor",
  "ChatGPT",
  "v0",
  "Codeck",
  "GitHub",
  "Vercel",
  "AI Workers",
  "Agent workflows",
];

const skills = ["Marketing", "Strategy", "AI", "Content", "Web / Digital"];

const certificates = [
  "AI w biznesie",
  "AI w praktyce",
  "AI w social media marketingu",
  "Employer Branding",
  "Kampanie, które sprzedają",
  "Marketing internetowy — kurs zaawansowany",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FAF7F2] text-[#2A1E18]">
      <div className="fixed inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-[#E8D6CC] blur-3xl opacity-70" />
        <div className="absolute right-[-8%] top-[20%] h-[360px] w-[360px] rounded-full bg-[#D8BFA5] blur-3xl opacity-60" />
        <div className="absolute bottom-[-10%] left-[25%] h-[420px] w-[420px] rounded-full bg-[#F1E4D8] blur-3xl opacity-80" />
      </div>

      <nav className="sticky top-0 z-50 border-b border-[#8A5A3C]/10 bg-[#FAF7F2]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="font-semibold tracking-tight">
            Joanna Kłos
          </a>
          <div className="hidden gap-8 text-sm text-[#7A665A] md:flex">
            <a href="#work" className="hover:text-[#8A5A3C]">How I Work</a>
            <a href="#projects" className="hover:text-[#8A5A3C]">Projects</a>
            <a href="#experience" className="hover:text-[#8A5A3C]">Experience</a>
            <a href="#contact" className="hover:text-[#8A5A3C]">Contact</a>
          </div>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
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
            <a href="#projects" className="rounded-full bg-[#8A5A3C] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#8A5A3C]/20 transition hover:-translate-y-0.5">
              Explore Projects
            </a>
            <a href="#experience" className="rounded-full border border-[#8A5A3C]/20 bg-white/60 px-6 py-3 text-sm font-medium text-[#2A1E18] backdrop-blur transition hover:-translate-y-0.5">
              View Experience
            </a>
            <a href="#" className="rounded-full border border-[#8A5A3C]/20 bg-white/40 px-6 py-3 text-sm font-medium text-[#7A665A] backdrop-blur">
              Download CV
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-[#8A5A3C]/15 bg-white/60 p-6 shadow-2xl shadow-[#8A5A3C]/10 backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-[#F8F3EC] via-white to-[#E8D6CC] p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[#8A5A3C]">AI-native portfolio</p>
              <h2 className="mt-8 text-3xl font-semibold">Communication designed with clarity.</h2>
              <p className="mt-4 leading-7 text-[#7A665A]">
                Strategia, treść, narzędzia AI i prototypowanie — połączone w jeden praktyczny
                workflow dla marek, projektów i komunikacji digital.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <div key={skill} className="rounded-2xl bg-white/70 px-4 py-3 text-sm shadow-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">How I Work</p>
          <h2 className="mt-3 text-4xl font-semibold">Od chaosu informacji do jasnej komunikacji.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {steps.map(([nr, title, desc]) => (
            <div key={title} className="rounded-[1.7rem] border border-[#8A5A3C]/15 bg-white/60 p-6 shadow-xl shadow-[#8A5A3C]/5 backdrop-blur transition hover:-translate-y-1">
              <span className="text-sm font-semibold text-[#8A5A3C]">{nr}</span>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#7A665A]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Projects</p>
            <h2 className="mt-3 text-4xl font-semibold">Wybrane projekty i kierunki rozwoju.</h2>
          </div>
          <a href="#contact" className="text-sm font-medium text-[#8A5A3C]">Let’s talk →</a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group rounded-[2rem] border border-[#8A5A3C]/15 bg-white/65 p-7 shadow-xl shadow-[#8A5A3C]/5 backdrop-blur transition hover:-translate-y-1">
              <span className="rounded-full bg-[#E8D6CC]/70 px-3 py-1 text-xs font-medium text-[#8A5A3C]">
                {project.tag}
              </span>
              <h3 className="mt-8 text-2xl font-semibold">{project.title}</h3>
              <p className="mt-4 leading-7 text-[#7A665A]">{project.desc}</p>
              <div className="mt-8 h-px bg-[#8A5A3C]/10" />
              <p className="mt-5 text-sm text-[#8A5A3C]">View case direction →</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Experience</p>
            <h2 className="mt-3 text-4xl font-semibold">Doświadczenie zawodowe.</h2>
            <p className="mt-5 leading-7 text-[#7A665A]">
              Połączenie marketingu, employer brandingu, koordynacji, pracy operacyjnej
              i rozwijania projektów digital.
            </p>
          </div>

          <div className="space-y-4">
            {experience.map(([company, role, years]) => (
              <div key={company} className="rounded-[1.5rem] border border-[#8A5A3C]/15 bg-white/60 p-6 shadow-lg shadow-[#8A5A3C]/5 backdrop-blur">
                <div className="flex flex-col justify-between gap-2 md:flex-row">
                  <div>
                    <h3 className="text-xl font-semibold">{company}</h3>
                    <p className="mt-1 text-[#7A665A]">{role}</p>
                  </div>
                  <span className="text-sm font-medium text-[#8A5A3C]">{years}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-[#8A5A3C]/15 bg-[#2A1E18] p-8 text-white shadow-2xl shadow-[#8A5A3C]/15 md:p-12">
          <p className="text-sm uppercase tracking-[0.25em] text-[#D8BFA5]">AI-native workflow</p>
          <h2 className="mt-4 text-4xl font-semibold">Research, content, prototyping — szybciej i mądrzej.</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Research & analysis", "Content structuring", "AI agents", "Prompt workflows", "Rapid prototyping", "Landing pages & apps"].map((item) => (
              <span key={item} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-[#F8F3EC]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-2">
        <div className="rounded-[2rem] border border-[#8A5A3C]/15 bg-white/60 p-8 shadow-xl shadow-[#8A5A3C]/5 backdrop-blur">
          <h2 className="text-3xl font-semibold">Tools</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span key={tool} className="rounded-full bg-[#F8F3EC] px-4 py-2 text-sm text-[#7A665A]">
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#8A5A3C]/15 bg-white/60 p-8 shadow-xl shadow-[#8A5A3C]/5 backdrop-blur">
          <h2 className="text-3xl font-semibold">Education & Certifications</h2>
          <div className="mt-6 space-y-4 text-[#7A665A]">
            <p><strong className="text-[#2A1E18]">AGH</strong> — Marketing Internetowy</p>
            <p><strong className="text-[#2A1E18]">Politechnika Rzeszowska</strong> — Marketing i Zarządzanie</p>
          </div>
          <div className="mt-6 grid gap-2">
            {certificates.map((cert) => (
              <p key={cert} className="rounded-2xl bg-[#F8F3EC] px-4 py-3 text-sm text-[#7A665A]">
                {cert}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2.5rem] border border-[#8A5A3C]/15 bg-gradient-to-br from-white/80 via-[#F8F3EC]/90 to-[#E8D6CC]/70 p-10 text-center shadow-2xl shadow-[#8A5A3C]/10 backdrop-blur md:p-16">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Contact</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold md:text-5xl">
            Let’s build better communication & digital experiences.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#7A665A]">
            Portfolio pokazuje kierunek: strategia, komunikacja, AI i projekty webowe
            w jasnej, profesjonalnej formule personal brand.
          </p>
          <div className="mt-8 flex justify-center">
            <a href="mailto:" className="rounded-full bg-[#8A5A3C] px-7 py-3 text-sm font-medium text-white shadow-lg shadow-[#8A5A3C]/20">
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
