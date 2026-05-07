const projects = [
  {
    title: "MIA-STOP HD",
    desc: "Upraszczanie komunikacji specjalistycznej: struktura treści, język korzyści, materiały informacyjne i wsparcie AI.",
    tag: "Specialist communication",
  },
  {
    title: "AI & Web Projects",
    desc: "Proste strony, landing page’e i prototypy aplikacji. Struktura treści, UX komunikacji, GitHub, Vercel i narzędzia AI.",
    tag: "AI / Web / Digital",
  },
  {
    title: "UpRent",
    desc: "Koncepcja strategiczna marketplace’u lokalnego: odbiorcy, propozycja wartości, model komunikacji i kierunek marki.",
    tag: "Strategy concept",
  },
  {
    title: "Internal Communication",
    desc: "Treści do komunikacji wewnętrznej, systemów intranetowych, CMS, materiałów informacyjnych i komunikatów organizacyjnych.",
    tag: "Internal comms",
  },
];

const experience = [
  {
    company: "PPHU Specjał Sp. z o.o.",
    role: "Asystentka w Biurze Zarządu",
    period: "październik 2024 – luty 2026",
    years: "2024–2026",
    focus:
      "Koordynacja administracyjna, wsparcie projektów międzydziałowych oraz organizacja pracy biura zarządu.",
    details: [
      "Koordynacja działań administracyjnych i organizacyjnych biura zarządu: terminy, priorytety i obieg dokumentów.",
      "Wsparcie projektów międzydziałowych oraz organizacja spotkań i wydarzeń wewnętrznych.",
      "Przygotowywanie pism, raportów, zestawień i prezentacji w czytelnym, spójnym standardzie.",
      "Rozliczanie faktur i wsparcie procesów administracyjnych z dbałością o porządek i terminowość.",
    ],
    tags: ["organizacja", "raporty", "prezentacje", "koordynacja"],
  },
  {
    company: "Ideo Sp. z o.o.",
    role: "Specjalistka ds. Wizerunku Pracodawcy",
    period: "czerwiec 2017 – październik 2024",
    years: "2017–2024",
    focus:
      "Marketing operacyjny, komunikacja employer branding, treści online/offline, CMS oraz wydarzenia firmowe.",
    details: [
      "Koordynacja działań marketingowych w obszarze komunikacji i materiałów.",
      "Tworzenie i redakcja materiałów marketingowych online/offline: prezentacje, treści i materiały promocyjne.",
      "Publikacja i aktualizacja treści na stronie w CMS oraz współpraca z zespołami wewnętrznymi i partnerami.",
      "Organizacja eventów, targów pracy i wydarzeń rekrutacyjnych oraz przygotowanie materiałów z wydarzeń firmowych.",
      "Realizacja materiałów video we współpracy z grafikiem oraz tworzenie krótkich formatów video do digitalu.",
      "Raportowanie działań i usprawnianie procesów komunikacyjnych.",
    ],
    tags: ["marketing", "EB", "CMS", "content", "eventy", "video"],
  },
  {
    company: "Grupa Inditex",
    role: "Menedżerka salonu firmowego",
    period: "sierpień 2011 – kwiecień 2014",
    years: "2011–2014",
    focus:
      "Zarządzanie zespołem, standard obsługi, komunikacja operacyjna oraz wdrażanie pracowników.",
    details: [
      "Koordynacja pracy salonu i zespołu: organizacja, standardy i terminowość.",
      "Dbanie o spójny wizerunek oraz standard obsługi zgodny z wymaganiami marki.",
      "Przygotowywanie materiałów komunikacyjnych i wdrożeniowych dla zespołu.",
      "Organizacja szkoleń, wdrażanie nowych pracowników oraz raportowanie wyników.",
    ],
    tags: ["zarządzanie", "zespół", "standardy", "raportowanie"],
  },
  {
    company: "Trend & Fashion Group Sp. z o.o.",
    role: "Koordynator Regionalny",
    period: "grudzień 2007 – sierpień 2011",
    years: "2007–2011",
    focus:
      "Koordynacja regionalna, standardy operacyjne, działania promocyjne oraz raportowanie wyników.",
    details: [
      "Koordynacja działań operacyjnych i standardów w salonach w regionie.",
      "Nadzór nad spójnością działań promocyjnych i jakością obsługi.",
      "Organizacja otwarć i wydarzeń w placówkach: logistyka oraz współpraca z partnerami.",
      "Monitorowanie wyników, przygotowywanie raportów i wdrażanie usprawnień.",
      "Praca samodzielna i częste wyjazdy służbowe wymagające bardzo dobrej organizacji.",
    ],
    tags: ["region", "operacje", "promocje", "logistyka"],
  },
];

const steps = [
  ["01", "Analiza problemu", "Rozumienie odbiorcy, kontekstu i celu biznesowego."],
  ["02", "Struktura komunikacji", "Upraszczanie treści, porządkowanie informacji i UX komunikacji."],
  ["03", "Tworzenie i wdrażanie", "Content, CMS, landing pages, digital assets i materiały komunikacyjne."],
  ["04", "AI workflows", "Research, automatyzacja, prompt workflows, AI agents i prototypowanie."],
];

const process = ["Research", "Structure", "Create", "Publish", "Improve"];

const workflow = [
  ["01", "Research & Analysis", "Analiza rynku, odbiorców, komunikacji i benchmarków."],
  [
    "02",
    "Content Structuring",
    "Porządkowanie informacji, upraszczanie treści oraz projektowanie struktury stron i materiałów.",
  ],
  ["03", "Prompt Workflows", "Budowanie powtarzalnych procesów pracy z AI dla treści, strategii i prototypów."],
  [
    "04",
    "Rapid Prototyping",
    "Tworzenie landing page’y, prostych aplikacji i makiet z użyciem GitHub, Vercel, Claude, Cursor i v0.",
  ],
];

const skills = ["Marketing", "Strategy", "AI", "Content", "Web / Digital"];

const skillGroups = [
  {
    title: "Marketing & Communication",
    items: [
      "marketing operacyjny",
      "employer branding",
      "komunikacja marki",
      "materiały online/offline",
      "eventy i targi",
      "współpraca z partnerami",
    ],
  },
  {
    title: "Content & Digital",
    items: [
      "redakcja treści",
      "struktura informacji",
      "CMS / WordPress",
      "landing pages",
      "krótkie formaty video",
      "prezentacje i materiały promocyjne",
    ],
  },
  {
    title: "Project & Operations",
    items: [
      "koordynacja projektów",
      "organizacja pracy",
      "koordynacja eventów",
      "raportowanie",
      "analiza działań",
      "usprawnianie procesów",
      "praca międzydziałowa",
    ],
  },
  {
    title: "AI & Prototyping",
    items: [
      "AI-assisted research",
      "prompt workflows",
      "AI content support",
      "prototypowanie stron",
      "proste aplikacje",
      "agent workflows",
    ],
  },
];

const tools = [
  "MS Office",
  "Canva",
  "Asana",
  "CMS / WordPress",
  "CapCut",
  "ChatGPT",
  "Claude",
  "Claude Code",
  "Cursor",
  "v0",
  "GitHub",
  "Vercel",
  "Codeck",
  "AI Workers",
];

const education = [
  {
    school: "Politechnika Rzeszowska",
    title: "Marketing i Zarządzanie",
    type: "studia magisterskie",
  },
  {
    school: "AGH",
    title: "Marketing Internetowy",
    type: "studia podyplomowe",
  },
];

const certifications = [
  "Brand Manager",
  "Kampanie, które sprzedają",
  "AI w biznesie",
  "AI w praktyce",
  "AI w social media marketingu",
  "Employer Branding",
  "Marketing internetowy — kurs zaawansowany",
];

const keepTogether = (text: string) => text.replace(/\s([aiouwz])\s/gi, " $1\u00A0");

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
            <a href="#projects" className="transition hover:text-[#8A5A3C]">Work Areas</a>
            <a href="#ai-workflow" className="transition hover:text-[#8A5A3C]">AI Workflow</a>
            <a href="#skills-tools" className="transition hover:text-[#8A5A3C]">Skills</a>
            <a href="#education" className="transition hover:text-[#8A5A3C]">Education</a>
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
            {keepTogether(
              "Łączę doświadczenie w marketingu operacyjnym, komunikacji i koordynacji projektów z praktycznym wykorzystaniem AI oraz narzędzi cyfrowych. Tworzę i porządkuję komunikację, projektuję struktury treści, wspieram działania marketingowe i rozwijam prototypy stron oraz aplikacji."
            )}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-full bg-[#8A5A3C] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#8A5A3C]/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#8A5A3C]/25">
              Explore Work Areas
            </a>
            <a href="#experience" className="rounded-full border border-[#8A5A3C]/20 bg-white/60 px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5 hover:border-[#8A5A3C]/35 hover:bg-white/80">
              View Experience
            </a>
            <a href="/CV_Joanna_Klos.pdf" className="rounded-full border border-[#8A5A3C]/20 bg-white/40 px-6 py-3 text-sm font-medium text-[#7A665A] transition hover:-translate-y-0.5 hover:bg-white/70">
              Download CV
            </a>
          </div>
        </div>

        <div className="relative transition duration-500 hover:-translate-y-1">
          <div className="rounded-[2rem] border border-[#8A5A3C]/15 bg-white/60 p-5 shadow-2xl shadow-[#8A5A3C]/10 backdrop-blur-xl">
            <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#F8F3EC] via-white to-[#E8D6CC]">
              <div className="relative h-[420px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F8F3EC] via-[#E8D6CC] to-[#8A5A3C]" />
                <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-white/30 blur-2xl" />
                <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-[#2A1E18]/20 blur-3xl" />
                <div className="absolute left-1/4 top-1/4 h-56 w-56 rounded-full bg-white/25 blur-3xl" />
                <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-[#8A5A3C]/25 blur-3xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A1E18]/60 via-[#2A1E18]/15 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#F8F3EC]/80">
                    AI-native portfolio
                  </p>

                  <h2 className="mt-3 text-3xl font-semibold">
                    Communication designed with clarity.
                  </h2>

                  <p className="mt-3 max-w-md text-sm leading-6 text-[#F8F3EC]/90">
                    {keepTogether(
                      "Strategia, treść, narzędzia AI i prototypowanie — połączone w jeden praktyczny workflow dla marek, projektów i komunikacji digital."
                    )}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 p-5">
                {skills.map((skill) => (
                  <div key={skill} className="rounded-2xl bg-white/80 px-4 py-3 text-sm shadow-sm transition hover:-translate-y-0.5 hover:bg-white">
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
              <p className="mt-3 text-sm leading-6 text-[#7A665A]">
                {keepTogether(desc)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="animate-fade-up mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-[2rem] border border-[#8A5A3C]/15 bg-white/60 p-5 shadow-xl shadow-[#8A5A3C]/5 backdrop-blur md:p-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">
                Process
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                Od researchu do usprawniania działań.
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {process.map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="rounded-full border border-[#8A5A3C]/15 bg-[#FAF7F2]/80 px-4 py-2 text-sm font-medium text-[#7A665A] shadow-sm">
                    {item}
                  </span>
                  {index < process.length - 1 && (
                    <span className="text-[#8A5A3C]/40">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="animate-fade-up mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">
          Selected Work Areas
        </p>
        <h2 className="mt-3 text-4xl font-semibold">
          Komunikacja, struktura treści i narzędzia digital.
        </h2>
        <p className="mt-5 max-w-3xl leading-7 text-[#7A665A]">
          {keepTogether(
            "Obszary, w których łączę komunikację, strukturę treści, organizację i narzędzia digital."
          )}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-[2rem] border border-[#8A5A3C]/15 bg-white/65 p-6 shadow-xl shadow-[#8A5A3C]/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#8A5A3C]/25 hover:bg-white/80 hover:shadow-2xl hover:shadow-[#8A5A3C]/10"
            >
              <span className="rounded-full bg-[#E8D6CC]/70 px-3 py-1 text-xs font-medium text-[#8A5A3C]">
                {project.tag}
              </span>
              <h3 className="mt-7 text-xl font-semibold">{project.title}</h3>
              <p className="mt-4 text-sm leading-6 text-[#7A665A]">
                {keepTogether(project.desc)}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="ai-workflow" className="animate-fade-up mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2.5rem] border border-[#8A5A3C]/15 bg-white/55 p-8 shadow-2xl shadow-[#8A5A3C]/5 backdrop-blur md:p-10">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">
                AI-Native Workflow
              </p>
              <h2 className="mt-3 text-4xl font-semibold">
                Marketing, treść i prototypowanie wspierane przez AI.
              </h2>
              <p className="mt-5 leading-7 text-[#7A665A]">
                {keepTogether(
                  "Wykorzystuję AI jako praktyczne wsparcie w analizie, strukturze treści, tworzeniu komunikacji, prototypowaniu stron i aplikacji oraz organizacji pracy projektowej."
                )}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {workflow.map(([nr, title, desc]) => (
                <div
                  key={title}
                  className="rounded-[1.7rem] border border-[#8A5A3C]/15 bg-[#FAF7F2]/70 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-[#8A5A3C]/10"
                >
                  <span className="text-sm font-semibold text-[#8A5A3C]">{nr}</span>
                  <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#7A665A]">
                    {keepTogether(desc)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills-tools" className="animate-fade-up mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">
            Skills & Tools
          </p>
          <h2 className="mt-3 text-4xl font-semibold">
            Kompetencje łączące marketing, organizację i digital.
          </h2>
          <p className="mt-5 leading-7 text-[#7A665A]">
            {keepTogether(
              "Zestaw umiejętności Joanny obejmuje praktyczny marketing operacyjny, komunikację, content, koordynację projektów oraz coraz mocniejsze wykorzystanie narzędzi AI w codziennej pracy."
            )}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-[2rem] border border-[#8A5A3C]/15 bg-white/65 p-7 shadow-xl shadow-[#8A5A3C]/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/80 hover:shadow-2xl hover:shadow-[#8A5A3C]/10"
              >
                <h3 className="text-xl font-semibold">{group.title}</h3>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-[#7A665A]">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8A5A3C]/60" />
                      <span>{keepTogether(item)}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <aside className="rounded-[2.2rem] border border-[#8A5A3C]/15 bg-gradient-to-br from-white/80 via-[#F8F3EC]/90 to-[#E8D6CC]/70 p-7 shadow-2xl shadow-[#8A5A3C]/10 backdrop-blur">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">
              Tool stack
            </p>
            <h3 className="mt-3 text-3xl font-semibold">
              Narzędzia w codziennej pracy.
            </h3>

            <div className="mt-7 flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-[#8A5A3C]/15 bg-white/70 px-4 py-2 text-sm text-[#7A665A] shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-[1.5rem] bg-white/55 p-5">
              <p className="text-sm font-semibold text-[#8A5A3C]">
                Najmocniejsze połączenie
              </p>
              <p className="mt-2 leading-7 text-[#7A665A]">
                {keepTogether(
                  "komunikacja + organizacja + content + AI-assisted workflow — czyli praktyczne wsparcie projektów marketingowych od struktury po wdrożenie."
                )}
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section id="education" className="animate-fade-up mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">
            Education & Certifications
          </p>
          <h2 className="mt-3 text-4xl font-semibold">
            Rozwój kompetencji: marketing, AI i digital.
          </h2>
          <p className="mt-5 leading-7 text-[#7A665A]">
            {keepTogether(
              "Edukacja i certyfikaty pokazują połączenie fundamentów marketingu, zarządzania oraz aktualnego kierunku rozwoju w stronę AI, komunikacji i projektów digital."
            )}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2.2rem] border border-[#8A5A3C]/15 bg-gradient-to-br from-white/85 via-[#F8F3EC]/90 to-[#E8D6CC]/70 p-7 shadow-2xl shadow-[#8A5A3C]/10 backdrop-blur">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">
              Education
            </p>

            <div className="mt-7 space-y-4">
              {education.map((item) => (
                <article
                  key={item.school}
                  className="rounded-[1.6rem] border border-[#8A5A3C]/15 bg-white/70 p-5 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-[#8A5A3C]">
                    {item.type}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">{item.school}</h3>
                  <p className="mt-2 text-[#7A665A]">{item.title}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[2.2rem] border border-[#8A5A3C]/15 bg-white/60 p-7 shadow-xl shadow-[#8A5A3C]/5 backdrop-blur">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">
                  Certificates
                </p>
                <h3 className="mt-3 text-3xl font-semibold">Kursy i certyfikaty</h3>
              </div>
              <span className="w-fit rounded-full bg-[#E8D6CC]/70 px-4 py-2 text-sm font-medium text-[#8A5A3C]">
                marketing + AI
              </span>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {certifications.map((certificate, index) => (
                <div
                  key={certificate}
                  className="group rounded-[1.5rem] border border-[#8A5A3C]/15 bg-[#FAF7F2]/75 p-4 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-lg hover:shadow-[#8A5A3C]/10"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#8A5A3C] text-xs font-semibold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="pt-1 text-sm font-medium leading-6 text-[#2A1E18]">
                      {keepTogether(certificate)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="animate-fade-up mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">
          Experience
        </p>
        <h2 className="mt-3 text-4xl font-semibold">Doświadczenie zawodowe.</h2>
        <p className="mt-4 max-w-3xl leading-7 text-[#7A665A]">
          {keepTogether(
            "Timeline pokazuje rozwój od koordynacji operacyjnej i zarządzania zespołem do marketingu, komunikacji, CMS, contentu, eventów oraz wsparcia projektów organizacyjnych."
          )}
        </p>

        <div className="relative mt-12 space-y-8 pl-8 before:absolute before:left-[30px] before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-gradient-to-b before:from-[#8A5A3C]/10 before:via-[#8A5A3C]/45 before:to-[#8A5A3C]/10 md:pl-12">
          {experience.map((item) => (
            <article
              key={item.company}
              className="group relative grid gap-5 rounded-[2rem] border border-[#8A5A3C]/15 bg-white/65 p-5 shadow-xl shadow-[#8A5A3C]/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/80 hover:shadow-2xl hover:shadow-[#8A5A3C]/10 md:grid-cols-[170px_1fr] md:p-7"
            >
              <span className="absolute -left-[42px] top-10 z-10 h-4 w-4 rounded-full border-[5px] border-[#FAF7F2] bg-[#8A5A3C] shadow-lg shadow-[#8A5A3C]/25 md:-left-[50px]" />
              <span className="absolute -left-[51px] top-[46px] hidden h-px w-9 bg-gradient-to-r from-[#8A5A3C]/50 to-transparent md:block" />

              <div className="flex items-start gap-4 md:block">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#8A5A3C] text-sm font-semibold text-white shadow-lg shadow-[#8A5A3C]/20 md:h-16 md:w-16">
                  {item.years.split("–")[0]}
                </div>
                <div className="md:mt-5">
                  <p className="text-sm font-semibold text-[#8A5A3C]">{item.years}</p>
                  <p className="mt-1 text-xs leading-5 text-[#7A665A]">{item.period}</p>
                </div>
              </div>

              <div>
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold">{item.role}</h3>
                    <p className="mt-1 font-medium text-[#8A5A3C]">{item.company}</p>
                  </div>
                  <span className="w-fit rounded-full bg-[#E8D6CC]/70 px-3 py-1 text-xs font-medium text-[#8A5A3C]">
                    career step
                  </span>
                </div>

                <p className="mt-5 max-w-3xl leading-7 text-[#7A665A]">
                  {keepTogether(item.focus)}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#8A5A3C]/15 bg-[#FAF7F2]/70 px-3 py-1 text-xs text-[#7A665A]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <details className="group/details mt-6">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-[#8A5A3C] transition hover:text-[#2A1E18]">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#8A5A3C]/20 bg-white/60 px-4 py-2">
                      Zobacz zakres obowiązków
                      <span className="transition group-open/details:rotate-45">+</span>
                    </span>
                  </summary>

                  <ul className="mt-5 grid gap-3 text-sm leading-6 text-[#7A665A] md:grid-cols-2">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8A5A3C]/60" />
                        <span>{keepTogether(detail)}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="animate-fade-up mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2.5rem] border border-[#8A5A3C]/15 bg-gradient-to-br from-white/80 via-[#F8F3EC]/90 to-[#E8D6CC]/70 p-10 shadow-2xl shadow-[#8A5A3C]/10 backdrop-blur md:p-16">
          <div className="grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">
                Contact
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold md:text-5xl">
                Let’s build better communication & digital experiences.
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-[#7A665A]">
                {keepTogether(
                  "Open to marketing, communication, AI-assisted content, project coordination and event coordination roles."
                )}
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#8A5A3C]/15 bg-white/65 p-6 shadow-xl shadow-[#8A5A3C]/5 backdrop-blur">
              <div className="space-y-4 text-sm">
                <a
                  className="block rounded-2xl bg-[#FAF7F2]/80 p-4 text-[#2A1E18] transition hover:bg-white"
                  href="mailto:joanna.klos1983@gmail.com"
                >
                  <span className="block text-xs uppercase tracking-[0.2em] text-[#8A5A3C]">
                    Email
                  </span>
                  joanna.klos1983@gmail.com
                </a>

                <a
                  className="block rounded-2xl bg-[#FAF7F2]/80 p-4 text-[#2A1E18] transition hover:bg-white"
                  href="tel:+48667166633"
                >
                  <span className="block text-xs uppercase tracking-[0.2em] text-[#8A5A3C]">
                    Phone
                  </span>
                  667 166 633
                </a>

                <a
                  className="block rounded-2xl bg-[#FAF7F2]/80 p-4 text-[#2A1E18] transition hover:bg-white"
                  href="https://www.linkedin.com/in/joanna-k%C5%82os-6372a1146/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="block text-xs uppercase tracking-[0.2em] text-[#8A5A3C]">
                    LinkedIn
                  </span>
                  linkedin.com/in/joanna-kłos-6372a1146
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:joanna.klos1983@gmail.com"
                  className="rounded-full bg-[#8A5A3C] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#8A5A3C]/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#8A5A3C]/25"
                >
                  Contact me
                </a>

                <a
                  href="/CV_Joanna_Klos.pdf"
                  className="rounded-full border border-[#8A5A3C]/20 bg-white/60 px-6 py-3 text-sm font-medium text-[#7A665A] transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Download CV
                </a>

                <a
                  href="https://www.linkedin.com/in/joanna-k%C5%82os-6372a1146/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#8A5A3C]/20 bg-white/60 px-6 py-3 text-sm font-medium text-[#7A665A] transition hover:-translate-y-0.5 hover:bg-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#8A5A3C]/10 px-6 py-8 text-center text-sm text-[#7A665A]">
        © 2026 Joanna Kłos — AI-native marketing & digital portfolio
      </footer>
    </main>
  );
}
