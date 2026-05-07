"use client";

import React from "react";

// Pomocnicza funkcja do zachowania spacji niełamliwych
function keepTogether(text: string) {
  return text.replace(/ ([a-ząćęłńóśźż]) /gi, " $1\u00A0");
}

export default function Home() {
  // ===== DANE =====

  const steps: [string, string, string][] = [
    [
      "01",
      "Research",
      "Zbieram informacje, analizuję target, konkurencję i kontekst biznesowy.",
    ],
    [
      "02",
      "Structure",
      "Układam content w logiczną strukturę, priorytetyzuję przekaz.",
    ],
    [
      "03",
      "Create",
      "Tworzę treści, komunikaty, landing page, pitch deck lub strategię komunikacji.",
    ],
    [
      "04",
      "Publish",
      "Wdrażam w CMS, narzędziach mailowych, social media lub organizuję event.",
    ],
  ];

  const process = ["Research", "Structure", "Create", "Publish", "Improve"];

  const projects = [
    {
      tag: "Marketing Communication",
      title: "Content Strategy & Creation",
      desc: "Tworzenie strategii contentu, artykułów blogowych, newsletterów i komunikacji marki.",
    },
    {
      tag: "Digital Tools",
      title: "CMS & Website Management",
      desc: "Zarządzanie treścią w WordPress, aktualizacje stron, struktura informacji.",
    },
    {
      tag: "Event Coordination",
      title: "Event Planning & Execution",
      desc: "Organizacja konferencji, webinarów i eventów firmowych od A do Z.",
    },
    {
      tag: "AI-Assisted Work",
      title: "AI-Powered Content & Prototyping",
      desc: "Wykorzystanie Claude i ChatGPT do analizy, struktury treści i prototypowania.",
    },
  ];

  const workflow: [string, string, string][] = [
    [
      "01",
      "Content Analysis",
      "AI pomaga analizować dane, wyciągać insights i strukturyzować informacje.",
    ],
    [
      "02",
      "Communication",
      "Tworzę komunikaty, maile, posty z pomocą AI jako sparring partnera.",
    ],
    [
      "03",
      "Prototyping",
      "Prototypuję landing page, aplikacje, dashboardy używając Claude Artifacts.",
    ],
    [
      "04",
      "Project Organization",
      "Organizuję projekty, taski i flow z wykorzystaniem AI-native narzędzi.",
    ],
  ];

  const skillGroups = [
    {
      title: "Marketing & Communication",
      items: [
        "Content strategy & creation",
        "Marketing communication",
        "Newsletter campaigns",
        "Social media content",
        "Brand messaging",
      ],
    },
    {
      title: "Digital & Tools",
      items: [
        "WordPress CMS management",
        "Website content updates",
        "MailerLite campaigns",
        "Canva graphic design",
        "Basic HTML/CSS",
      ],
    },
    {
      title: "Project Coordination",
      items: [
        "Event planning & execution",
        "Team coordination",
        "Budget management",
        "Vendor relations",
        "Timeline management",
      ],
    },
    {
      title: "AI-Assisted Workflow",
      items: [
        "Claude for content & prototyping",
        "ChatGPT for research & analysis",
        "AI-powered communication",
        "Prompt engineering",
        "AI tools integration",
      ],
    },
  ];

  const tools = [
    "Claude",
    "ChatGPT",
    "WordPress",
    "MailerLite",
    "Canva",
    "Google Workspace",
    "Slack",
    "Notion",
    "Figma",
  ];

  const education = [
    {
      type: "Podyplomowe",
      school: "Kozminski University",
      title: "Marketing i Zarządzanie",
    },
    {
      type: "Magisterskie",
      school: "Politechnika Warszawska",
      title: "Zarządzanie i Marketing",
    },
  ];

  const certifications = [
    "Google Analytics Certification",
    "Google Ads Fundamentals",
    "Facebook Blueprint Certification",
    "Content Marketing Institute Course",
    "AI-Powered Marketing (Coursera)",
    "Prompt Engineering for Marketers",
    "Event Management Professional",
    "Digital Marketing Specialist",
  ];

  const experience = [
    {
      years: "2023–2026",
      period: "3 lata",
      role: "Marketing & Communication Specialist",
      company: "Tech Startup",
      focus:
        "Content strategy, website management, event coordination, AI-assisted marketing workflow.",
      tags: ["marketing", "content", "CMS", "events", "AI tools"],
      details: [
        "Tworzenie strategii contentu i artykułów blogowych",
        "Zarządzanie stroną firmową w WordPress",
        "Kampanie newsletterowe w MailerLite",
        "Organizacja eventów branżowych i webinarów",
        "Wykorzystanie AI w codziennej pracy marketingowej",
        "Koordynacja projektów komunikacyjnych",
        "Analiza wyników kampanii i raportowanie",
        "Współpraca z zespołem produktowym i sprzedażowym",
      ],
    },
    {
      years: "2020–2023",
      period: "3 lata",
      role: "Project Coordinator",
      company: "Marketing Agency",
      focus:
        "Koordynacja projektów marketingowych, zarządzanie zespołem, komunikacja z klientami.",
      tags: ["project management", "team coordination", "client relations"],
      details: [
        "Koordynacja kampanii marketingowych dla klientów B2B",
        "Zarządzanie harmonogramami i budżetami projektów",
        "Komunikacja z klientami i raportowanie postępów",
        "Współpraca z dostawcami i wykonawcami",
        "Organizacja spotkań i prezentacji dla klientów",
        "Nadzór nad jakością realizowanych projektów",
      ],
    },
    {
      years: "2017–2020",
      period: "3 lata",
      role: "Marketing Assistant",
      company: "E-commerce Company",
      focus:
        "Wsparcie operacyjne w marketingu, tworzenie contentu, zarządzanie social media.",
      tags: ["content creation", "social media", "e-commerce"],
      details: [
        "Tworzenie opisów produktów i treści na stronę",
        "Zarządzanie profilami social media",
        "Przygotowanie grafik i materiałów promocyjnych",
        "Wsparcie w kampaniach email marketingowych",
        "Analiza konkurencji i trendów rynkowych",
        "Współpraca z działem sprzedaży",
      ],
    },
  ];

  // ===== JSX =====

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FAF7F2] via-[#F0E8DC] to-[#E8D6CC] font-sans text-[#2A1E18] antialiased">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-32">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">
            Portfolio 2026
          </p>
          <h1 className="mt-4 text-5xl font-bold leading-tight md:text-7xl">
            Joanna Kłos
          </h1>
          <p className="mt-6 text-xl text-[#7A665A] md:text-2xl">
            Marketing • Communication • AI-Assisted Content • Event Coordination
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            
              href="#contact"
              className="rounded-full bg-[#8A5A3C] px-8 py-4 text-sm font-medium text-white shadow-lg shadow-[#8A5A3C]/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#8A5A3C]/25"
            >
              Get in touch
            </a>
            
              href="#experience"
              className="rounded-full border border-[#8A5A3C]/20 bg-white/60 px-8 py-4 text-sm font-medium text-[#7A665A] transition hover:-translate-y-0.5 hover:bg-white"
            >
              View experience
            </a>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-16">
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

      <section className="mx-auto max-w-7xl px-6 py-10">
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

      <section id="projects" className="mx-auto max-w-7xl px-6 py-16">
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

      <section id="ai-workflow" className="mx-auto max-w-7xl px-6 py-16">
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

      <section id="skills-tools" className="mx-auto max-w-7xl px-6 py-16">
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

      <section id="education" className="mx-auto max-w-7xl px-6 py-16">
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

      <section id="experience" className="mx-auto max-w-7xl px-6 py-16">
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

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2.5rem] border border-[#8A5A3C]/15 bg-gradient-to-br from-white/80 via-[#F8F3EC]/90 to-[#E8D6CC]/70 p-10 shadow-2xl shadow-[#8A5A3C]/10 backdrop-blur md:p-16">
          <div className="grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">
                Contact
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold md:text-5xl">
                Let's build better communication & digital experiences.
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-[#7A665A]">
                {keepTogether(
                  "Open to marketing, communication, AI-assisted content, project coordination and event coordination roles."
                )}
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#8A5A3C]/15 bg-white/65 p-6 shadow-xl shadow-[#8A5A3C]/5 backdrop-blur">
              <div className="space-y-4 text-sm">
                
                  className="block rounded-2xl bg-[#FAF7F2]/80 p-4 text-[#2A1E18] transition hover:bg-white"
                  href="mailto:joanna.klos1983@gmail.com"
                >
                  <span className="block text-xs uppercase tracking-[0.2em] text-[#8A5A3C]">
                    Email
                  </span>
                  joanna.klos1983@gmail.com
                </a>

                
                  className="block rounded-2xl bg-[#FAF7F2]/80 p-4 text-[#2A1E18] transition hover:bg-white"
                  href="tel:+48667166633"
                >
                  <span className="block text-xs uppercase tracking-[0.2em] text-[#8A5A3C]">
                    Phone
                  </span>
                  667 166 633
                </a>

                
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
                
                  href="mailto:joanna.klos1983@gmail.com"
                  className="rounded-full bg-[#8A5A3C] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#8A5A3C]/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#8A5A3C]/25"
                >
                  Contact me
                </a>

                
                  href="/CV_Joanna_Klos.pdf"
                  className="rounded-full border border-[#8A5A3C]/20 bg-white/60 px-6 py-3 text-sm font-medium text-[#7A665A] transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Download CV
                </a>

                
                  href="https://www.linkedin.com/in/joanna-k%C5%81os-6372a1146/"
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
