"use client";

import React from "react";

function keepTogether(text: string) {
  return text.replace(/ ([a-ząćęłńóśźż]) /gi, " $1\u00A0");
}

export default function Home() {
  const steps: [string, string, string][] = [
    ["01", "Research", "Zbieram informacje, analizuję target, konkurencję i kontekst biznesowy."],
    ["02", "Structure", "Układam content w logiczną strukturę, priorytetyzuję przekaz."],
    ["03", "Create", "Tworzę treści, komunikaty, landing page, materiały promocyjne i video."],
    ["04", "Publish", "Wdrażam w CMS, realizuję eventy, dbam o spójność komunikacji marki."],
  ];

  const process = ["Research", "Structure", "Create", "Publish", "Improve"];

  const projects = [
    {
      tag: "Marketing & Communication",
      title: "Marketing operacyjny i koordynacja",
      desc: "Planuję i koordynuję działania marketingowe, dbam o spójność komunikacji, tworzę i redaguję materiały online/offline.",
    },
    {
      tag: "Content & CMS",
      title: "Treści i zarządzanie CMS",
      desc: "Publikacja i aktualizacja treści na stronie w WordPress, tworzenie krótkich formatów video do digitalu.",
    },
    {
      tag: "Events & Organization",
      title: "Eventy i organizacja",
      desc: "Organizacja eventów firmowych, targów pracy, wydarzeń rekrutacyjnych. Logistyka, materiały promocyjne.",
    },
    {
      tag: "AI-Assisted Workflow",
      title: "Wsparcie AI w pracy",
      desc: "Wykorzystanie narzędzi AI do tworzenia i redakcji treści/grafik jako wspomaganie codziennej pracy.",
    },
  ];

  const workflow: [string, string, string][] = [
    ["01", "Analiza i planowanie", "Wykorzystuję AI do analizy danych, strukturyzowania informacji i planowania działań marketingowych."],
    ["02", "Tworzenie treści", "AI wspiera mnie w tworzeniu i redakcji materiałów marketingowych, komunikatów i treści wizualnych."],
    ["03", "Optymalizacja procesów", "Usprawnianie workflow i procesów komunikacyjnych z wykorzystaniem narzędzi AI."],
    ["04", "Raportowanie", "Analizuję wyniki działań i wyciągam wnioski wspierane narzędziami AI."],
  ];

  const skillGroups = [
    {
      title: "Marketing & Komunikacja",
      items: [
        "Marketing operacyjny i koordynacja projektów",
        "Tworzenie i redakcja materiałów marketingowych",
        "Współpraca z agencjami i partnerami",
        "Raportowanie i usprawnianie procesów",
        "Wyczucie estetyki i dbałość o detale",
      ],
    },
    {
      title: "Digital & Narzędzia",
      items: [
        "CMS / WordPress (publikacja treści)",
        "Canva (grafika i materiały)",
        "CapCut (montaż video do digital)",
        "Asana (zarządzanie projektami)",
        "MS Office (prezentacje, raporty)",
      ],
    },
    {
      title: "Eventy & Organizacja",
      items: [
        "Organizacja eventów i targów pracy",
        "Logistyka i materiały promocyjne",
        "Komunikatywność i praca zespołowa",
        "Dokładność i terminowość",
        "Praca samodzielna",
      ],
    },
    {
      title: "AI & Wsparcie technologiczne",
      items: [
        "Narzędzia AI do tworzenia treści",
        "AI do redakcji grafik",
        "Wspomaganie workflow narzędziami AI",
        "Uczenie się nowych technologii",
        "Adaptacja do zmian",
      ],
    },
  ];

  const tools = ["WordPress", "Canva", "CapCut", "Asana", "MS Office", "Narzędzia AI", "Google Workspace"];

  const education = [
    { type: "Studia podyplomowe", school: "Akademia Górniczo-Hutnicza w Krakowie", title: "Marketing Internetowy" },
    { type: "Studia magisterskie", school: "Politechnika Rzeszowska im. I. Łukasiewicza", title: "Marketing i Zarządzanie" },
  ];

  const certifications = [
    "Marketing Internetowy (AGH)",
    "Marketing operacyjny",
    "CMS / WordPress",
    "Canva - projektowanie graficzne",
    "Montaż video - CapCut",
    "Zarządzanie projektami - Asana",
    "Narzędzia AI w marketingu",
    "Event management",
  ];

  const experience = [
    {
      years: "2024–2026",
      period: "1,5 roku",
      role: "Asystentka w Biurze Zarządu",
      company: "PPHU Specjał Sp. z o.o.",
      focus: "Koordynacja działań administracyjnych i organizacyjnych biura zarządu, wsparcie projektów międzydziałowych, organizacja spotkań i wydarzeń wewnętrznych.",
      tags: ["administracja", "koordynacja", "organizacja", "eventy", "dokumentacja"],
      details: [
        "Koordynacja działań administracyjnych i organizacyjnych biura zarządu (terminy, priorytety, obieg dokumentów)",
        "Wsparcie projektów międzydziałowych",
        "Organizacja spotkań i wydarzeń wewnętrznych (logistyka, materiały, przygotowanie sali/agenda)",
        "Przygotowywanie pism, raportów, zestawień i prezentacji (czytelność, spójny standard)",
        "Rozliczanie faktur i wsparcie procesów administracyjnych (porządek w dokumentacji, terminowość)",
      ],
    },
    {
      years: "2017–2024",
      period: "7 lat",
      role: "Specjalistka ds. Wizerunku Pracodawcy",
      company: "Ideo Sp. z o.o.",
      focus: "Marketing operacyjny i koordynacja projektów. Tworzenie materiałów marketingowych, zarządzanie CMS, organizacja eventów i targów pracy, raportowanie działań.",
      tags: ["marketing", "komunikacja", "CMS", "video", "eventy", "employer branding"],
      details: [
        "Koordynacja działań marketingowych w obszarze komunikacji i materiałów",
        "Współpraca z zespołami wewnętrznymi i partnerami",
        "Tworzenie i redakcja materiałów marketingowych online/offline (prezentacje, treści, materiały promocyjne)",
        "Publikacja i aktualizacja treści na stronie w CMS / WordPress",
        "Realizacja materiałów video we współpracy z grafikiem (zbieranie ujęć, przygotowanie materiału, dopasowanie do standardów wizualnych)",
        "Tworzenie krótkich formatów video do digitalu (CapCut)",
        "Materiały z wydarzeń firmowych wspierające komunikację marki",
        "Organizacja eventów i targów pracy / wydarzeń rekrutacyjnych",
        "Raportowanie działań i usprawnianie procesów komunikacyjnych",
      ],
    },
    {
      years: "2011–2014",
      period: "3 lata",
      role: "Menedżerka salonu firmowego",
      company: "Grupa Inditex",
      focus: "Koordynacja pracy salonu i zespołu, dbanie o spójny wizerunek i standard obsługi zgodny z wymaganiami marki, raportowanie wyników.",
      tags: ["zarządzanie zespołem", "standardy", "wizerunek marki", "szkolenia", "raportowanie"],
      details: [
        "Koordynacja pracy salonu i zespołu (organizacja, standardy, terminowość)",
        "Dbanie o spójny wizerunek i standard obsługi zgodny z wymaganiami marki",
        "Przygotowywanie materiałów komunikacyjnych i wdrożeniowych dla zespołu",
        "Organizacja szkoleń i wdrażanie nowych pracowników",
        "Raportowanie wyników oraz bieżąca analiza działań operacyjnych",
      ],
    },
    {
      years: "2007–2011",
      period: "4 lata",
      role: "Koordynator Regionalny",
      company: "Trend & Fashion Group Sp. z o.o.",
      focus: "Koordynacja działań operacyjnych i standardów w salonach w regionie. Organizacja otwarć i wydarzeń, monitorowanie wyników, wdrażanie usprawnień.",
      tags: ["koordynacja regionalna", "standardy", "eventy", "raporty", "samodzielność"],
      details: [
        "Koordynacja działań operacyjnych i standardów w salonach w regionie",
        "Nadzór nad spójnością działań promocyjnych i jakości obsługi",
        "Organizacja otwarć i wydarzeń w placówkach (logistyka, współpraca z partnerami)",
        "Monitorowanie wyników, przygotowywanie raportów i wdrażanie usprawnień",
        "Praca samodzielna i częste wyjazdy służbowe (wysoka organizacja i odpowiedzialność)",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FAF7F2] via-[#F0E8DC] to-[#E8D6CC] font-sans text-[#2A1E18] antialiased">
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-32">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Portfolio 2026</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight md:text-7xl">Joanna Kłos</h1>
          <p className="mt-6 text-xl text-[#7A665A] md:text-2xl">
            Marketing • Komunikacja • CMS & Content • Event Coordination
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#contact" className="inline-block rounded-full bg-[#8A5A3C] px-8 py-4 text-sm font-medium text-white shadow-lg transition hover:shadow-xl" style={{backgroundColor: '#8A5A3C'}}>
              Kontakt
            </a>
            <a href="#experience" className="rounded-full border border-[#8A5A3C]/20 bg-white/60 px-8 py-4 text-sm font-medium text-[#7A665A] transition hover:-translate-y-0.5 hover:bg-white">
              Doświadczenie
            </a>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Jak pracuję</p>
        <h2 className="mt-3 max-w-2xl text-4xl font-semibold">Od chaosu informacji do jasnej komunikacji.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {steps.map(([nr, title, desc]) => (
            <div key={title} className="rounded-[1.7rem] border border-[#8A5A3C]/15 bg-white/60 p-6 shadow-xl shadow-[#8A5A3C]/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#8A5A3C]/25 hover:bg-white/75 hover:shadow-2xl hover:shadow-[#8A5A3C]/10">
              <span className="text-sm font-semibold text-[#8A5A3C]">{nr}</span>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#7A665A]">{keepTogether(desc)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-[2rem] border border-[#8A5A3C]/15 bg-white/60 p-5 shadow-xl shadow-[#8A5A3C]/5 backdrop-blur md:p-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Proces</p>
              <h2 className="mt-2 text-2xl font-semibold">Od researchu do usprawniania działań.</h2>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {process.map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="rounded-full border border-[#8A5A3C]/15 bg-[#FAF7F2]/80 px-4 py-2 text-sm font-medium text-[#7A665A] shadow-sm">{item}</span>
                  {index < process.length - 1 && <span className="text-[#8A5A3C]/40">→</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Obszary kompetencji</p>
        <h2 className="mt-3 text-4xl font-semibold">Marketing, komunikacja i organizacja.</h2>
        <p className="mt-5 max-w-3xl leading-7 text-[#7A665A]">{keepTogether("Obszary, w których łączę marketing operacyjny, komunikację, content, CMS i organizację eventów.")}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
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
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">AI w pracy</p>
              <h2 className="mt-3 text-4xl font-semibold">Wsparcie AI w codziennej pracy marketingowej.</h2>
              <p className="mt-5 leading-7 text-[#7A665A]">{keepTogether("Wykorzystuję narzędzia AI jako praktyczne wspomaganie w tworzeniu treści, redakcji grafik i usprawnianiu procesów marketingowych.")}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {workflow.map(([nr, title, desc]) => (
                <div key={title} className="rounded-[1.7rem] border border-[#8A5A3C]/15 bg-[#FAF7F2]/70 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-[#8A5A3C]/10">
                  <span className="text-sm font-semibold text-[#8A5A3C]">{nr}</span>
                  <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#7A665A]">{keepTogether(desc)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills-tools" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Umiejętności</p>
          <h2 className="mt-3 text-4xl font-semibold">Kompetencje łączące marketing, organizację i digital.</h2>
          <p className="mt-5 leading-7 text-[#7A665A]">{keepTogether("Wieloletnie doświadczenie w marketingu operacyjnym, komunikacji, tworzeniu treści i organizacji eventów.")}</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <article key={group.title} className="rounded-[2rem] border border-[#8A5A3C]/15 bg-white/65 p-7 shadow-xl shadow-[#8A5A3C]/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/80 hover:shadow-2xl hover:shadow-[#8A5A3C]/10">
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
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Narzędzia</p>
            <h3 className="mt-3 text-3xl font-semibold">Narzędzia w codziennej pracy.</h3>
            <div className="mt-7 flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span key={tool} className="rounded-full border border-[#8A5A3C]/15 bg-white/70 px-4 py-2 text-sm text-[#7A665A] shadow-sm transition hover:-translate-y-0.5 hover:bg-white">{tool}</span>
              ))}
            </div>
            <div className="mt-8 rounded-[1.5rem] bg-white/55 p-5">
              <p className="text-sm font-semibold text-[#8A5A3C]">Najmocniejsze połączenie</p>
              <p className="mt-2 leading-7 text-[#7A665A]">{keepTogether("Marketing operacyjny + komunikacja + CMS + eventy + wsparcie AI — czyli praktyczne wsparcie projektów od pomysłu po realizację.")}</p>
            </div>
          </aside>
        </div>
      </section>

      <section id="education" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Edukacja i certyfikaty</p>
          <h2 className="mt-3 text-4xl font-semibold">Rozwój kompetencji: marketing i digital.</h2>
          <p className="mt-5 leading-7 text-[#7A665A]">{keepTogether("Solidne fundamenty marketingu i zarządzania uzupełnione o specjalizację w marketingu internetowym.")}</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2.2rem] border border-[#8A5A3C]/15 bg-gradient-to-br from-white/85 via-[#F8F3EC]/90 to-[#E8D6CC]/70 p-7 shadow-2xl shadow-[#8A5A3C]/10 backdrop-blur">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Edukacja</p>
            <div className="mt-7 space-y-4">
              {education.map((item) => (
                <article key={item.school} className="rounded-[1.6rem] border border-[#8A5A3C]/15 bg-white/70 p-5 shadow-sm transition hover:-translate-y-0.5 hover:bg-white">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#8A5A3C]">{item.type}</p>
                  <h3 className="mt-2 text-xl font-semibold">{item.school}</h3>
                  <p className="mt-2 text-[#7A665A]">{item.title}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="rounded-[2.2rem] border border-[#8A5A3C]/15 bg-white/60 p-7 shadow-xl shadow-[#8A5A3C]/5 backdrop-blur">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Kompetencje</p>
                <h3 className="mt-3 text-3xl font-semibold">Umiejętności i narzędzia</h3>
              </div>
              <span className="w-fit rounded-full bg-[#E8D6CC]/70 px-4 py-2 text-sm font-medium text-[#8A5A3C]">praktyczne</span>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {certifications.map((certificate, index) => (
                <div key={certificate} className="group rounded-[1.5rem] border border-[#8A5A3C]/15 bg-[#FAF7F2]/75 p-4 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-lg hover:shadow-[#8A5A3C]/10">
                  <div className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#8A5A3C] text-xs font-semibold text-white">{String(index + 1).padStart(2, "0")}</span>
                    <p className="pt-1 text-sm font-medium leading-6 text-[#2A1E18]">{keepTogether(certificate)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Doświadczenie</p>
        <h2 className="mt-3 text-4xl font-semibold">Doświadczenie zawodowe.</h2>
        <p className="mt-4 max-w-3xl leading-7 text-[#7A665A]">{keepTogether("Ponad 15 lat doświadczenia w marketingu, komunikacji, zarządzaniu zespołem i organizacji eventów.")}</p>
        <div className="relative mt-12 space-y-8 pl-8 before:absolute before:left-[30px] before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-gradient-to-b before:from-[#8A5A3C]/10 before:via-[#8A5A3C]/45 before:to-[#8A5A3C]/10 md:pl-12">
          {experience.map((item) => (
            <article key={item.company} className="group relative grid gap-5 rounded-[2rem] border border-[#8A5A3C]/15 bg-white/65 p-5 shadow-xl shadow-[#8A5A3C]/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/80 hover:shadow-2xl hover:shadow-[#8A5A3C]/10 md:grid-cols-[170px_1fr] md:p-7">
              <span className="absolute -left-[42px] top-10 z-10 h-4 w-4 rounded-full border-[5px] border-[#FAF7F2] bg-[#8A5A3C] shadow-lg shadow-[#8A5A3C]/25 md:-left-[50px]" />
              <span className="absolute -left-[51px] top-[46px] hidden h-px w-9 bg-gradient-to-r from-[#8A5A3C]/50 to-transparent md:block" />
              <div className="flex items-start gap-4 md:block">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#8A5A3C] text-sm font-semibold text-white shadow-lg shadow-[#8A5A3C]/20 md:h-16 md:w-16">{item.years.split("–")[0]}</div>
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
                  <span className="w-fit rounded-full bg-[#E8D6CC]/70 px-3 py-1 text-xs font-medium text-[#8A5A3C]">doświadczenie</span>
                </div>
                <p className="mt-5 max-w-3xl leading-7 text-[#7A665A]">{keepTogether(item.focus)}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[#8A5A3C]/15 bg-[#FAF7F2]/70 px-3 py-1 text-xs text-[#7A665A]">{tag}</span>
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
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Kontakt</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold md:text-5xl">Współpraca w marketingu operacyjnym i komunikacji.</h2>
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
                <a href="/CV_Joanna_Kłos_Junior_Marketing_Specialist.pdf" className="rounded-full border border-[#8A5A3C]/20 bg-white/60 px-6 py-3 text-sm font-medium text-[#7A665A] transition hover:-translate-y-0.5 hover:bg-white">Pobierz CV</a>
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
