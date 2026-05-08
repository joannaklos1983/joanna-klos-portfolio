"use client";

import React from "react";

function keepTogether(text: string) {
  return text.replace(/ ([a-ząćęłńóśźż]) /gi, " $1\u00A0");
}

export default function Home() {
  const steps: [string, string, string][] = [
    ["01", "Analizuję i porządkuję", "Poznaję markę, ofertę i sposób komunikacji, żeby znaleźć miejsca, w których przekaz staje się niespójny lub nieczytelny."],
    ["02", "Buduję strukturę komunikacji", "Układam komunikację tak, aby marka była bardziej zrozumiała, spójna i łatwiejsza do rozwijania w różnych kanałach."],
    ["03", "Tworzę i wdrażam", "Przygotowuję strony, treści, materiały i elementy komunikacji wspierające codzienne działania marketingowe."],
    ["04", "Usprawniam procesy", "Łączę marketing z organizacją pracy, szukając prostszych rozwiązań i bardziej uporządkowanego sposobu działania."],
  ];

  const process = ["Poznaję", "Upraszczam", "Tworzę", "Wdrażam", "Usprawniam"];

  const projects = [
    {
      tag: "Strategia komunikacji",
      title: "Strategia komunikacji",
      desc: "Porządkowanie przekazu marki, kierunku komunikacji oraz struktury działań marketingowych.",
    },
    {
      tag: "Strony WWW i treści",
      title: "Strony WWW i treści",
      desc: "Tworzenie i rozwijanie stron, treści oraz materiałów wspierających obecność marki online.",
    },
    {
      tag: "Marketing operacyjny",
      title: "Marketing operacyjny",
      desc: "Koordynacja działań marketingowych, organizacja procesów i wsparcie codziennej komunikacji marki.",
    },
    {
      tag: "Komunikacja EB",
      title: "Komunikacja employer brandingowa",
      desc: "Wsparcie komunikacji wewnętrznej i wizerunkowej, obsługa systemów kafeteryjnych, materiałów employer brandingowych oraz działań wspierających doświadczenie pracowników.",
    },
    {
      tag: "Materiały i identyfikacja",
      title: "Materiały i identyfikacja wizualna",
      desc: "Dbanie o spójność komunikacji wizualnej oraz przygotowanie materiałów wspierających markę online i offline.",
    },
    {
      tag: "Projekty specjalne",
      title: "Projekty i działania specjalne",
      desc: "Wsparcie projektów wymagających połączenia komunikacji, organizacji i strategicznego podejścia.",
    },
  ];

  const workflow: [string, string, string][] = [
    ["01", "Organizacja i analiza informacji", "Wykorzystuję AI do porządkowania informacji, researchu oraz analizy komunikacji i materiałów marketingowych."],
    ["02", "Tworzenie struktur i prototypów", "Buduję szkice stron, koncepcje komunikacji, struktury treści i pierwsze wersje rozwiązań projektowych."],
    ["03", "Automatyzacja i usprawnianie pracy", "Testuję rozwiązania usprawniające codzienną pracę marketingową, organizację treści i zarządzanie informacją."],
    ["04", "Interaktywne projekty i narzędzia", "Rozwijam interaktywne portfolio oraz eksperymentuję z rozwiązaniami łączącymi komunikację, UX i AI."],
    ["05", "AI jako element procesu projektowego", "Traktuję AI jako narzędzie wspierające analizę, organizację i tworzenie rozwiązań — nie jako zamiennik myślenia strategicznego."],
  ];

  const selectedProjects = [
    {
      title: "MIA-STOP HD",
      desc: "Komunikacja i struktura treści dla projektu wspierającego pacjentów hemodializowanych.",
      points: [
        "analiza potrzeb użytkowników",
        "uproszczenie komunikacji medycznej",
        "struktura komunikacji i treści",
        "organizacja materiałów edukacyjnych",
        "wykorzystanie AI do pracy nad treściami i komunikacją",
      ],
    },
    {
      title: "UpRent",
      desc: "Strategia komunikacji i model marketingowy dla lokalnej platformy marketplace.",
      points: [
        "strategia marki i komunikacji",
        "pozycjonowanie projektu",
        "struktura przekazu i komunikacji",
        "marketing launch thinking",
        "projektowanie doświadczenia użytkownika",
      ],
    },
    {
      title: "Komunikacja employer brandingowa",
      desc: "Wsparcie działań employer brandingowych i komunikacji wewnętrznej.",
      points: [
        "organizacja materiałów komunikacyjnych",
        "obsługa systemów kafeteryjnych",
        "komunikacja wydarzeń i inicjatyw firmowych",
        "współpraca przy działaniach wspierających doświadczenie pracowników",
        "koordynacja treści i materiałów marketingowych",
      ],
    },
  ];

  const education = [
    { type: "Studia podyplomowe", school: "Akademia Górniczo-Hutnicza w Krakowie", title: "Marketing Internetowy" },
    { type: "Studia magisterskie", school: "Politechnika Rzeszowska im. I. Łukasiewicza", title: "Marketing i Zarządzanie" },
  ];

  const experience = [
    {
      years: "2024–2026",
      period: "1,5 roku",
      role: "Asystentka w Biurze Zarządu",
      company: "PPHU Specjał Sp. z o.o.",
      focus: "Koordynacja działań biura zarządu, wsparcie projektów między działami, organizacja spotkań i wydarzeń.",
    },
    {
      years: "2017–2024",
      period: "7 lat",
      role: "Specjalistka ds. Wizerunku Pracodawcy",
      company: "Ideo Sp. z o.o.",
      focus: "Marketing operacyjny, materiały komunikacyjne, zarządzanie treścią w CMS, organizacja eventów i targów pracy.",
    },
    {
      years: "2011–2014",
      period: "3 lata",
      role: "Menedżerka salonu firmowego",
      company: "Grupa Inditex",
      focus: "Koordynacja pracy zespołu, dbanie o standardy marki i obsługi, szkolenia pracowników.",
    },
    {
      years: "2007–2011",
      period: "4 lata",
      role: "Koordynator Regionalny",
      company: "Trend & Fashion Group Sp. z o.o.",
      focus: "Koordynacja salonów w regionie, organizacja wydarzeń, monitorowanie wyników i wdrażanie usprawnień.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FAF7F2] via-[#F0E8DC] to-[#E8D6CC] font-sans text-[#2A1E18] antialiased">
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
          {/* Left Column - Content */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Strategia • komunikacja • projekty cyfrowe</p>
            <h1 className="mt-4 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">Joanna Kłos</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#7A665A]">
              Łączę strategię, komunikację i wykonanie, pomagając firmom budować spójną obecność marki —
              od struktury przekazu po materiały, strony i działania marketingowe.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#services" className="inline-block rounded-full bg-[#8A5A3C] px-8 py-4 text-sm font-medium text-white shadow-lg transition hover:shadow-xl" style={{backgroundColor: '#8A5A3C'}}>
                Zobacz obszary współpracy
              </a>
              <a href="#contact" className="rounded-full border border-[#8A5A3C]/20 bg-white/60 px-8 py-4 text-sm font-medium text-[#7A665A] transition hover:-translate-y-0.5 hover:bg-white">
                Kontakt
              </a>
            </div>
          </div>

          {/* Right Column - Photo with Abstract Background */}
          <div className="relative min-h-[400px] md:min-h-[500px]">
            {/* Abstract Background Graphic */}
            <svg 
              className="absolute left-0 top-0 h-full w-full opacity-[0.06] pointer-events-none" 
              viewBox="0 0 400 500" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
            >
              <path d="M50 100 L150 50 L250 100 L350 80" stroke="#8A5A3C" strokeWidth="1" opacity="0.4"/>
              <path d="M50 200 L150 180 L250 220 L350 200" stroke="#8A5A3C" strokeWidth="1" opacity="0.3"/>
              <path d="M50 300 L150 320 L250 280 L350 320" stroke="#8A5A3C" strokeWidth="1" opacity="0.4"/>
              <path d="M150 50 L150 180 L150 320" stroke="#8A5A3C" strokeWidth="0.5" opacity="0.2"/>
              <path d="M250 100 L250 220 L250 280" stroke="#8A5A3C" strokeWidth="0.5" opacity="0.2"/>
              <circle cx="150" cy="50" r="4" fill="#8A5A3C" opacity="0.3"/>
              <circle cx="250" cy="100" r="4" fill="#8A5A3C" opacity="0.3"/>
              <circle cx="150" cy="180" r="4" fill="#8A5A3C" opacity="0.3"/>
              <circle cx="250" cy="220" r="4" fill="#8A5A3C" opacity="0.3"/>
              <circle cx="150" cy="320" r="4" fill="#8A5A3C" opacity="0.3"/>
              <circle cx="250" cy="280" r="4" fill="#8A5A3C" opacity="0.3"/>
            </svg>

            {/* Profile Photo */}
            <div className="relative z-20 mx-auto max-w-md overflow-hidden rounded-[2.5rem] border border-[#8A5A3C]/10 bg-gradient-to-br from-white/80 to-[#F8F3EC]/80 p-2 shadow-2xl shadow-[#8A5A3C]/10 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:shadow-[#8A5A3C]/20">
              <div className="overflow-hidden rounded-[2rem]">
                <img 
                  src="/joanna-profile.png" 
                  alt="Joanna Kłos - Marketing i komunikacja" 
                  className="h-auto w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Jak pracuję</p>
        <h2 className="mt-3 max-w-2xl text-4xl font-semibold">
          Marketing i komunikacja oparte na strukturze, spójności
          i realnych potrzebach biznesu.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-6 md:grid-rows-2">
          {steps.map(([nr, title, desc], index) => {
            const isHighlighted = index === 1; // "Buduję strukturę komunikacji"
            const gridClasses = isHighlighted 
              ? 'col-span-1 md:col-span-3 md:row-span-2' 
              : 'col-span-1 md:col-span-2';
            
            return (
              <div 
                key={`${nr}-${title}`}
                className={`
                  ${gridClasses}
                  group relative overflow-hidden rounded-[1.7rem] border p-6 backdrop-blur transition-all duration-500
                  ${isHighlighted 
                    ? 'border-[#8A5A3C]/25 bg-gradient-to-br from-[#8A5A3C]/95 to-[#6B4430]/95 text-white shadow-2xl shadow-[#8A5A3C]/20 hover:shadow-[#8A5A3C]/30' 
                    : 'border-[#8A5A3C]/15 bg-white/60 shadow-xl shadow-[#8A5A3C]/5 hover:-translate-y-1 hover:border-[#8A5A3C]/25 hover:bg-white/75 hover:shadow-2xl hover:shadow-[#8A5A3C]/10'
                  }
                `}
              >
                {/* Large background number */}
                <span 
                  className={`
                    absolute font-bold leading-none transition-all duration-500
                    ${isHighlighted 
                      ? 'right-4 top-2 text-[12rem] text-white/8 group-hover:text-white/12 md:right-6 md:top-4 md:text-[18rem]' 
                      : 'right-3 top-1 text-[8rem] text-[#8A5A3C]/5 group-hover:text-[#8A5A3C]/8'
                    }
                  `}
                  style={{ fontVariantNumeric: 'tabular-nums' }}
                >
                  {nr}
                </span>

                {/* Content */}
                <div className="relative z-10">
                  <span 
                    className={`
                      text-sm font-semibold transition-all duration-300
                      ${isHighlighted 
                        ? 'text-white/90 group-hover:translate-x-0.5' 
                        : 'text-[#8A5A3C] group-hover:translate-x-0.5'
                      }
                    `}
                  >
                    {nr}
                  </span>
                  <h3 
                    className={`
                      mt-5 font-semibold transition-all duration-300
                      ${isHighlighted 
                        ? 'text-2xl text-white group-hover:translate-x-1 md:text-3xl' 
                        : 'text-xl group-hover:translate-x-0.5'
                      }
                    `}
                  >
                    {title}
                  </h3>
                  <p 
                    className={`
                      mt-3 text-sm leading-6 transition-opacity duration-300
                      ${isHighlighted 
                        ? 'text-white/85 md:text-base md:leading-7' 
                        : 'text-[#7A665A]'
                      }
                    `}
                  >
                    {keepTogether(desc)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Obszary współpracy</p>
        <h2 className="mt-3 text-4xl font-semibold">Obszary, w których wspieram marki i projekty.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="rounded-[2rem] border border-[#8A5A3C]/15 bg-white/65 p-6 shadow-xl shadow-[#8A5A3C]/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#8A5A3C]/25 hover:bg-white/80 hover:shadow-2xl hover:shadow-[#8A5A3C]/10">
              <span className="rounded-full bg-[#E8D6CC]/70 px-3 py-1 text-xs font-medium text-[#8A5A3C]">{project.tag}</span>
              <h3 className="mt-7 text-xl font-semibold">{project.title}</h3>
              <p className="mt-4 text-sm leading-6 text-[#7A665A]">{keepTogether(project.desc)}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="ai-workflow" className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2.5rem] border border-[#8A5A3C]/15 bg-white/55 p-8 shadow-2xl shadow-[#8A5A3C]/5 backdrop-blur md:p-10">
          <div className="mb-10">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">AI w pracy</p>
            <h2 className="mt-3 text-4xl font-semibold">AI jako wsparcie procesów, komunikacji i projektów cyfrowych.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workflow.map(([nr, title, desc]) => (
              <div key={title} className="rounded-[1.7rem] border border-[#8A5A3C]/15 bg-[#FAF7F2]/70 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-[#8A5A3C]/10">
                <span className="text-sm font-semibold text-[#8A5A3C]">{nr}</span>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#7A665A]">{keepTogether(desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Wybrane projekty</p>
        <h2 className="mt-3 text-4xl font-semibold">Projekty łączące komunikację, strategię i działania cyfrowe.</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {selectedProjects.map((project) => (
            <article key={project.title} className="rounded-[2rem] border border-[#8A5A3C]/15 bg-white/65 p-6 shadow-xl shadow-[#8A5A3C]/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#8A5A3C]/25 hover:bg-white/80 hover:shadow-2xl hover:shadow-[#8A5A3C]/10">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#7A665A]">{keepTogether(project.desc)}</p>
              <ul className="mt-5 space-y-2">
                {project.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-[#7A665A]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8A5A3C]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Doświadczenie i edukacja</p>
          <h2 className="mt-3 text-4xl font-semibold">Ponad 15 lat w marketingu, komunikacji i organizacji.</h2>
          <p className="mt-5 leading-7 text-[#7A665A]">
            {keepTogether("Od zarządzania zespołem i standardów w retail, przez marketing operacyjny i employer branding, po komunikację cyfrową i wsparcie projektów.")}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.45fr]">
          <div className="relative space-y-6 pl-8 before:absolute before:left-[30px] before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-gradient-to-b before:from-[#8A5A3C]/10 before:via-[#8A5A3C]/45 before:to-[#8A5A3C]/10 md:pl-12">
            {experience.map((item) => (
              <article key={item.company} className="group relative rounded-[2rem] border border-[#8A5A3C]/15 bg-white/65 p-6 shadow-xl shadow-[#8A5A3C]/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/80 hover:shadow-2xl hover:shadow-[#8A5A3C]/10">
                <span className="absolute -left-[42px] top-8 z-10 h-4 w-4 rounded-full border-[5px] border-[#FAF7F2] bg-[#8A5A3C] shadow-lg shadow-[#8A5A3C]/25 md:-left-[50px]" />
                <span className="absolute -left-[51px] top-[40px] hidden h-px w-9 bg-gradient-to-r from-[#8A5A3C]/50 to-transparent md:block" />
                
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-[#8A5A3C]">{item.years}</p>
                    <h3 className="mt-2 text-xl font-semibold">{item.role}</h3>
                    <p className="mt-1 font-medium text-[#8A5A3C]">{item.company}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-[#E8D6CC]/70 px-3 py-1 text-xs font-medium text-[#8A5A3C]">{item.period}</span>
                </div>

                <p className="mt-4 text-sm leading-6 text-[#7A665A]">{keepTogether(item.focus)}</p>
              </article>
            ))}
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2.2rem] border border-[#8A5A3C]/15 bg-gradient-to-br from-white/85 via-[#F8F3EC]/90 to-[#E8D6CC]/70 p-7 shadow-2xl shadow-[#8A5A3C]/10 backdrop-blur">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Edukacja</p>
              <div className="mt-6 space-y-4">
                {education.map((item) => (
                  <article key={item.school} className="rounded-[1.6rem] border border-[#8A5A3C]/15 bg-white/70 p-5 shadow-sm transition hover:-translate-y-0.5 hover:bg-white">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#8A5A3C]">{item.type}</p>
                    <h3 className="mt-2 text-base font-semibold">{item.school}</h3>
                    <p className="mt-1 text-sm text-[#7A665A]">{item.title}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-[2.2rem] border border-[#8A5A3C]/15 bg-white/60 p-7 shadow-xl shadow-[#8A5A3C]/5 backdrop-blur">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Narzędzia</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["WordPress", "Canva", "CapCut", "Asana", "MS Office", "Narzędzia AI"].map((tool) => (
                  <span key={tool} className="rounded-full border border-[#8A5A3C]/15 bg-white/70 px-3 py-2 text-xs text-[#7A665A] shadow-sm transition hover:-translate-y-0.5 hover:bg-white">{tool}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2.5rem] border border-[#8A5A3C]/15 bg-gradient-to-br from-white/80 via-[#F8F3EC]/90 to-[#E8D6CC]/70 p-10 shadow-2xl shadow-[#8A5A3C]/10 backdrop-blur md:p-16">
          <div className="grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Kontakt</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold md:text-5xl">Pomoc w komunikacji i działaniach marketingowych.</h2>
              <p className="mt-5 max-w-2xl leading-7 text-[#7A665A]">{keepTogether("Szukam roli w marketingu operacyjnym, komunikacji, CMS, event management lub projektach łączących te obszary.")}</p>
            </div>
            <div className="rounded-[2rem] border border-[#8A5A3C]/15 bg-white/65 p-6 shadow-xl shadow-[#8A5A3C]/5 backdrop-blur">
              <div className="space-y-4 text-sm">
                <a className="block rounded-2xl bg-[#FAF7F2]/80 p-4 text-[#2A1E18] transition hover:bg-white" href="mailto:joanna.klos1983@gmail.com">
                  <span className="block text-xs uppercase tracking-[0.2em] text-[#8A5A3C]">Email</span>
                  joanna.klos1983@gmail.com
                </a>
                <a className="block rounded-2xl bg-[#FAF7F2]/80 p-4 text-[#2A1E18] transition hover:bg-white" href="tel:+48667166633">
                  <span className="block text-xs uppercase tracking-[0.2em] text-[#8A5A3C]">Telefon</span>
                  667 166 633
                </a>
                <div className="block rounded-2xl bg-[#FAF7F2]/80 p-4 text-[#2A1E18]">
                  <span className="block text-xs uppercase tracking-[0.2em] text-[#8A5A3C]">Lokalizacja</span>
                  Jasionka, woj. podkarpackie
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:joanna.klos1983@gmail.com" className="inline-block rounded-full bg-[#8A5A3C] px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:shadow-xl" style={{backgroundColor: '#8A5A3C'}}>Napisz do mnie</a>
                <a href="/CV_Joanna_Klos.pdf" className="rounded-full border border-[#8A5A3C]/20 bg-white/60 px-6 py-3 text-sm font-medium text-[#7A665A] transition hover:-translate-y-0.5 hover:bg-white">Pobierz CV</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#8A5A3C]/10 px-6 py-8 text-center text-sm text-[#7A665A]">
        © 2026 Joanna Kłos — Portfolio marketingowe
      </footer>
    </main>
  );
}
