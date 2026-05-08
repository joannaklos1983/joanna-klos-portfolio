"use client";

import React from "react";

function keepTogether(text: string) {
  return text.replace(/ ([a-ząćęłńóśźż]) /gi, " $1\u00A0");
}

export default function Home() {
  const steps: [string, string, string][] = [
    ["01", "Poznaję biznes", "Sprawdzam, co firma chce komunikować i gdzie pojawia się chaos lub brak spójności."],
    ["02", "Upraszczam przekaz", "Porządkuję treści i komunikację tak, żeby klient szybciej rozumiał ofertę."],
    ["03", "Tworzę materiały", "Przygotowuję treści, strony i materiały wspierające komunikację marki."],
    ["04", "Wdrażam i usprawniam", "Publikuję treści, organizuję działania i szukam prostszych rozwiązań usprawniających komunikację."],
  ];


  const projects = [
    {
      tag: "Marketing & Communication",
      title: "Marketing i komunikacja",
      desc: "Pomagam planować i porządkować działania marketingowe oraz komunikację marki — od treści po organizację działań.",
    },
    {
      tag: "Content & WWW",
      title: "Treści i strony WWW",
      desc: "Tworzę i aktualizuję treści na strony WWW, dbając o ich czytelność, spójność i prosty przekaz.",
    },
    {
      tag: "Events & Organization",
      title: "Organizacja działań i eventów",
      desc: "Organizuję wydarzenia, wspieram działania promocyjne i dbam o sprawny przebieg projektów.",
    },
    {
      tag: "AI & Tools",
      title: "AI i nowoczesne narzędzia",
      desc: "Korzystam z AI do porządkowania treści, researchu i usprawniania codziennej pracy marketingowej.",
    },
  ];

  const workflow: [string, string, string][] = [
    ["01", "Organizacja informacji", "Korzystam z AI do porządkowania informacji i organizacji pracy."],
    ["02", "Tworzenie treści", "AI pomaga mi szybciej tworzyć i porządkować treści."],
    ["03", "Usprawnianie pracy", "Korzystam z AI, żeby znajdować prostsze rozwiązania i usprawniać codzienne zadania."],
    ["04", "Wnioski i organizacja", "AI wspiera mnie w wyciąganiu wniosków i organizacji działań."],
  ];

  const helpItems = [
    "Uporządkowanie komunikacji marki i oferty",
    "Treści na strony WWW i materiały promocyjne",
    "Prostsze przedstawienie usług i produktów",
    "Organizacja działań marketingowych",
    "Wsparcie komunikacji przy starcie biznesu",
    "Content i materiały do social media",
    "Wykorzystanie AI do usprawnienia codziennej pracy",
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
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Portfolio 2026</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight md:text-7xl">Joanna Kłos</h1>
          <p className="mt-6 text-xl text-[#7A665A] md:text-2xl">
            Strategia komunikacji • Marketing • Treści • Projekty cyfrowe
          </p>
          <p className="mt-6 mx-auto max-w-3xl text-base leading-relaxed text-[#7A665A]">
            Pomagam uporządkować treści, komunikację i podstawy marketingu tak, żeby oferta była prostsza, bardziej czytelna i łatwiejsza do pokazania klientom.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#services" className="inline-block rounded-full bg-[#8A5A3C] px-8 py-4 text-sm font-medium text-white shadow-lg transition hover:shadow-xl" style={{backgroundColor: '#8A5A3C'}}>
              Czym się zajmuję
            </a>
            <a href="#work" className="rounded-full border border-[#8A5A3C]/20 bg-white/60 px-8 py-4 text-sm font-medium text-[#7A665A] transition hover:-translate-y-0.5 hover:bg-white">
              Jak pracuję
            </a>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Jak pracuję</p>
        <h2 className="mt-3 max-w-2xl text-4xl font-semibold">Marketing i komunikacja, które pomagają klientowi szybciej zrozumieć biznes.</h2>
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

      <section id="services" className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Obszary kompetencji</p>
        <h2 className="mt-3 text-4xl font-semibold">Marketing, komunikacja i organizacja.</h2>
        <p className="mt-5 max-w-3xl leading-7 text-[#7A665A]">{keepTogether("Pomagam uporządkować komunikację, treści i działania marketingowe tak, żeby były bardziej zrozumiałe i łatwiejsze do wdrożenia.")}</p>
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
              <h2 className="mt-3 text-4xl font-semibold">AI jako praktyczne wsparcie w marketingu i komunikacji.</h2>
              <p className="mt-5 leading-7 text-[#7A665A]">{keepTogether("Korzystam z AI, żeby szybciej organizować informacje, tworzyć treści i usprawniać codzienną pracę.")}</p>
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

      <section id="help" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">W czym mogę pomóc</p>
          <h2 className="mt-3 text-4xl font-semibold">Prostsza komunikacja i bardziej uporządkowany marketing.</h2>
          <p className="mt-5 leading-7 text-[#7A665A]">{keepTogether("Pomagam uporządkować komunikację i działania marketingowe tak, żeby były prostsze, bardziej zrozumiałe i łatwiejsze do wdrożenia.")}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {helpItems.map((item, index) => (
            <div key={item} className="flex items-start gap-4 rounded-[1.5rem] border border-[#8A5A3C]/15 bg-white/65 p-5 shadow-lg shadow-[#8A5A3C]/5 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/80 hover:shadow-xl hover:shadow-[#8A5A3C]/10">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#8A5A3C] text-xs font-semibold text-white">{String(index + 1).padStart(2, "0")}</span>
              <p className="pt-1 text-sm leading-6 text-[#2A1E18]">{keepTogether(item)}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Doświadczenie i edukacja</p>
          <h2 className="mt-3 text-4xl font-semibold">Ponad 15 lat w marketingu, komunikacji i organizacji.</h2>
          <p className="mt-5 leading-7 text-[#7A665A]">{keepTogether("Od zarządzania zespołem i standardów w retail, przez marketing operacyjny i employer branding, po komunikację cyfrową i wsparcie projektów.")}</p>
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
