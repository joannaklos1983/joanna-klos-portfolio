"use client";

import React from "react";

function keepTogether(text: string) {
  return text.replace(/ ([a-ząćęłńóśźż]) /gi, " $1\u00A0");
}

export default function Home() {
  const steps: [string, string, string[], string[]][] = [
    ["01", "Analiza potrzeb", ["Poznaję projekt, odbiorców i cele, zanim przejdę do działań."], ["analiza potrzeb użytkowników", "research konkurencji", "analiza komunikacji marki", "analiza stron internetowych", "określanie grup docelowych"]],
    ["02", "Uporządkowanie informacji", ["Pomagam uporządkować informacje i materiały, aby łatwiej było planować kolejne działania."], ["tworzenie struktury strony WWW", "planowanie komunikacji", "przygotowanie harmonogramów działań", "organizacja materiałów projektowych", "opracowywanie briefów i wytycznych"]],
    ["03", "Tworzę komunikację i materiały", ["Przygotowuję treści i materiały wspierające marketing oraz komunikację marki."], ["treści na strony WWW", "komunikacja LinkedIn", "prezentacje biznesowe", "grafiki i materiały w Canva", "materiały video i infografiki"]],
    ["04", "Wdrażam rozwiązania", ["Pomagam przejść od planu do realizacji i koordynuję działania projektowe."], ["tworzenie stron WWW i landing page", "projektowanie struktury stron i ścieżek użytkownika", "koordynacja projektów marketingowych", "aplikacje webowe z kontem użytkownika i zapisem danych", "organizacja wydarzeń i inicjatyw marketingowych"]],
    ["05", "Rozwijam i usprawniam", ["Testuję nowe rozwiązania i rozwijam kompetencje wspierające nowoczesny marketing."], ["SEO i widoczność online", "wykorzystanie modeli językowych (LLM)", "tworzenie treści wspierane AI", "generowanie grafik i video", "automatyzacja wybranych procesów"]],
  ];

  const values = [
    {
      title: "Porządek",
      desc: "Pomagam uporządkować informacje, treści i działania, dzięki czemu łatwiej podejmować decyzje, planować kolejne kroki i rozwijać projekty.",
    },
    {
      title: "Spójność",
      desc: "Dbam o to, aby komunikacja, materiały i doświadczenia odbiorców tworzyły jedną, logiczną całość.",
    },
    {
      title: "Realizacja",
      desc: "Łączę planowanie z działaniem. Pomagam przechodzić od pomysłów i koncepcji do gotowych materiałów, wdrożeń i konkretnych rezultatów.",
    },
    {
      title: "Rozwój",
      desc: "Śledzę zmiany w marketingu, komunikacji i nowych technologiach, szukając rozwiązań, które mogą realnie wspierać pracę firm i zespołów.",
    },
  ];

  const miaStopPoints = [
    "opracowanie struktury komunikacji projektu",
    "przygotowanie strony internetowej",
    "tworzenie treści edukacyjnych",
    "identyfikację wizualną projektu",
    "broszury, plakaty i materiały drukowane",
    "prezentacje i materiały konferencyjne",
    "przygotowanie materiałów video",
    "organizację komunikacji online",
    "wykorzystanie modeli językowych do pracy nad treściami i organizacją wiedzy",
  ];

  const aiAreas = [
    "organizacja wiedzy i informacji",
    "modele językowe (LLM) w marketingu",
    "tworzenie treści wspierane nowymi technologiami",
    "automatyzacja wybranych procesów",
    "widoczność marek w wyszukiwarkach i systemach opartych na modelach językowych",
    "komunikacja cyfrowa i doświadczenie użytkownika",
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

  const educationMarketing = [
    "Marketing Internetowy — AGH",
    "Marketing Internetowy — PARP",
    "Kampanie, które sprzedają",
    "Brand Manager",
  ];

  const educationAI = [
    "AI w biznesie",
    "AI w marketingu",
    "AI w social media",
    "AI Marketer",
  ];

  const educationEB = ["Employer Branding"];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FDFCFA] via-[#F8F3EC] to-[#F0E6DC] font-sans text-[#2A1E18] antialiased">

      {/* SEKCJA 1 — HERO */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-24 overflow-hidden">
        <div className="absolute left-5 top-0 h-full w-full pointer-events-none">
          <svg
            className="absolute left-5 top-1/2 -translate-y-1/2 h-[130%] w-[75%] opacity-[0.25]"
            viewBox="0 0 600 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMid meet"
          >
            <path d="M 50 150 Q 150 120, 250 160 T 450 140" stroke="#8A5A3C" strokeWidth="2" fill="none" opacity="0.4"/>
            <path d="M 80 280 Q 180 250, 280 290 T 480 270" stroke="#8A5A3C" strokeWidth="2" fill="none" opacity="0.3"/>
            <path d="M 60 420 Q 160 390, 260 430 T 460 410" stroke="#8A5A3C" strokeWidth="1.5" fill="none" opacity="0.35"/>
            <path d="M 90 560 Q 190 530, 290 570 T 490 550" stroke="#8A5A3C" strokeWidth="1.5" fill="none" opacity="0.25"/>
            <path d="M 250 160 L 280 290" stroke="#8A5A3C" strokeWidth="1" opacity="0.2" strokeDasharray="4 6"/>
            <path d="M 260 430 L 280 290" stroke="#8A5A3C" strokeWidth="1" opacity="0.2" strokeDasharray="4 6"/>
            <path d="M 290 570 L 260 430" stroke="#8A5A3C" strokeWidth="1" opacity="0.15" strokeDasharray="4 6"/>
            <path d="M 150 120 L 120 200 L 180 250" stroke="#8A5A3C" strokeWidth="0.8" opacity="0.2"/>
            <path d="M 350 140 L 380 220 L 320 270" stroke="#8A5A3C" strokeWidth="0.8" opacity="0.2"/>
            <path d="M 160 390 L 130 470 L 190 520" stroke="#8A5A3C" strokeWidth="0.8" opacity="0.15"/>
            <circle cx="250" cy="160" r="8" fill="#8A5A3C" opacity="0.3"/>
            <circle cx="280" cy="290" r="8" fill="#8A5A3C" opacity="0.3"/>
            <circle cx="260" cy="430" r="8" fill="#8A5A3C" opacity="0.25"/>
            <circle cx="290" cy="570" r="7" fill="#8A5A3C" opacity="0.2"/>
            <circle cx="150" cy="120" r="5" fill="#8A5A3C" opacity="0.25"/>
            <circle cx="350" cy="140" r="5" fill="#8A5A3C" opacity="0.25"/>
            <circle cx="180" cy="250" r="4" fill="#8A5A3C" opacity="0.2"/>
            <circle cx="380" cy="220" r="4" fill="#8A5A3C" opacity="0.2"/>
            <circle cx="160" cy="390" r="5" fill="#8A5A3C" opacity="0.2"/>
            <circle cx="360" cy="410" r="4" fill="#8A5A3C" opacity="0.2"/>
            <circle cx="190" cy="530" r="4" fill="#8A5A3C" opacity="0.15"/>
            <path d="M 100 100 L 500 120" stroke="#8A5A3C" strokeWidth="0.5" opacity="0.1" strokeDasharray="2 8"/>
            <path d="M 80 350 L 480 370" stroke="#8A5A3C" strokeWidth="0.5" opacity="0.1" strokeDasharray="2 8"/>
            <path d="M 90 600 L 490 620" stroke="#8A5A3C" strokeWidth="0.5" opacity="0.08" strokeDasharray="2 8"/>
          </svg>
        </div>

        <div className="relative z-10 grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Marketing • komunikacja • projekty cyfrowe</p>
            <h1 className="mt-4 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">Joanna Kłos</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#7A665A]">
              {keepTogether("Marketing, komunikacja i projekty cyfrowe wspierające rozwój biznesu.")}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#7A665A]">
              {keepTogether("Pomagam porządkować komunikację, treści i projekty, żeby łatwiej przechodzić od pomysłu do działania. Łączę doświadczenie marketingowe, organizacyjne i projektowe z nowoczesnymi narzędziami wspierającymi pracę z informacją, treścią i procesami.")}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#mia-stop" className="inline-block rounded-full bg-[#8A5A3C] px-8 py-4 text-sm font-medium text-white shadow-lg transition hover:shadow-xl" style={{backgroundColor: '#8A5A3C'}}>
                Zobacz projekty
              </a>
              <a href="#experience" className="rounded-full border border-[#8A5A3C]/20 bg-white/60 px-8 py-4 text-sm font-medium text-[#7A665A] transition hover:-translate-y-0.5 hover:bg-white">
                Poznaj moje doświadczenie
              </a>
            </div>
          </div>

          <div className="relative min-h-[400px] md:min-h-[500px]">
            <div className="relative z-20 mx-auto max-w-md overflow-hidden rounded-[2.5rem] border border-[#8A5A3C]/10 bg-gradient-to-br from-white/80 to-[#F8F3EC]/80 p-2 shadow-2xl shadow-[#8A5A3C]/10 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:shadow-[#8A5A3C]/20">
              <div className="overflow-hidden rounded-[2rem] bg-[#E8D6CC]/20">
                <img
                  src="/images/Joanna_Klos.png"
                  alt="Joanna Kłos - Marketing i komunikacja"
                  className="h-auto w-full object-cover saturate-[0.92] contrast-[1.02] brightness-[1.01]"
                  loading="eager"
                  onError={(e) => {
                    console.error('Image failed to load');
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 2 — JAK PRACUJĘ */}
      <section id="work" className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Jak pracuję</p>
        <h2 className="mt-3 max-w-2xl text-4xl font-semibold">
          Dobre projekty nie zaczynają się od narzędzi. Zaczynają się od zrozumienia celu.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {steps.map(([nr, title, lead, bullets], index) => {
            const isHighlighted = index === 2;
            const gridClasses = index === 4
              ? 'col-span-1 md:col-span-2 md:max-w-[calc(50%-10px)]'
              : 'col-span-1';

            return (
              <div
                key={`${nr}-${title}`}
                className={`
                  ${gridClasses}
                  group relative overflow-hidden rounded-[1.7rem] border p-6 backdrop-blur transition-all duration-500
                  ${isHighlighted
                    ? 'border-[#5C2E1A]/30 bg-gradient-to-br from-[#4A1F0F] via-[#7A3D25] to-[#6B4430] text-white shadow-2xl shadow-[#4A1F0F]/30 hover:shadow-[#4A1F0F]/40'
                    : 'border-[#8A5A3C]/15 bg-white/60 shadow-xl shadow-[#8A5A3C]/5 hover:-translate-y-1 hover:border-[#8A5A3C]/25 hover:bg-white/75 hover:shadow-2xl hover:shadow-[#8A5A3C]/10'
                  }
                `}
              >
                <span
                  className={`
                    absolute font-bold leading-none transition-all duration-500 pointer-events-none select-none
                    ${isHighlighted
                      ? 'right-3 top-1 text-[8rem] text-white/[0.07] group-hover:text-white/[0.10]'
                      : 'right-3 top-1 text-[8rem] text-[#8A5A3C]/[0.04] group-hover:text-[#8A5A3C]/[0.07]'
                    }
                  `}
                  style={{ fontVariantNumeric: 'tabular-nums', zIndex: 0 }}
                  aria-hidden="true"
                >
                  {nr}
                </span>

                <div className="relative" style={{ zIndex: 10 }}>
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
                        ? 'text-xl text-white group-hover:translate-x-1 md:text-2xl'
                        : 'text-xl group-hover:translate-x-0.5'
                      }
                    `}
                  >
                    {title}
                  </h3>
                  <p
                    className={`
                      mt-3 text-sm leading-6
                      ${isHighlighted ? 'text-white/75' : 'text-[#7A665A]'}
                    `}
                  >
                    {lead[0]}
                  </p>
                  <p className={`mt-4 text-xs font-semibold uppercase tracking-[0.18em] ${isHighlighted ? 'text-white/50' : 'text-[#8A5A3C]/60'}`}>
                    Przykładowe działania
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {bullets.map((b, i) => (
                      <li key={i} className={`flex items-start gap-2 text-sm leading-5 ${isHighlighted ? 'text-white/85' : 'text-[#7A665A]'}`}>
                        <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${isHighlighted ? 'bg-white/50' : 'bg-[#8A5A3C]/50'}`} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SEKCJA 3 — PROJEKT WYRÓŻNIONY: MIA-STOP HD */}
      <section id="mia-stop" className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Projekt wyróżniony</p>
        <h2 className="mt-3 text-4xl font-semibold">MIA-STOP HD</h2>
        <p className="mt-2 text-lg text-[#7A665A]">Komunikacja, edukacja i rozwiązania wspierające pacjentów hemodializowanych.</p>

        <div
          className="mt-10 rounded-[2.5rem] border border-[#8A5A3C]/20 p-8 shadow-2xl shadow-[#8A5A3C]/25 md:p-12 relative overflow-hidden"
          style={{
            backgroundImage: "url('/images/mia-stop-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          {/* Brązowa nakładka */}
          <div className="absolute inset-0 rounded-[2.5rem]" style={{background: "radial-gradient(ellipse at top left, rgba(42,15,5,0.93) 0%, rgba(100,50,20,0.88) 45%, rgba(140,90,50,0.82) 75%, rgba(160,110,70,0.75) 100%)"}} />
          <div className="relative" style={{zIndex: 1}}>
          <div className="grid gap-10 md:grid-cols-2 md:items-start">

            {/* Lewa kolumna */}
            <div className="space-y-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">Wyzwanie</p>
                <p className="mt-4 text-base leading-7 text-white/90 md:text-lg md:leading-8">
                  {keepTogether("Jak przełożyć specjalistyczną wiedzę medyczną na komunikację zrozumiałą dla pacjentów i ich rodzin oraz stworzyć spójny system wspierający edukację i codzienne funkcjonowanie uczestników programu?")}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">Moja rola</p>
                <p className="mt-4 text-base leading-7 text-white/85">
                  {keepTogether("W ramach projektu odpowiadałam za stworzenie spójnego ekosystemu komunikacji obejmującego stronę internetową, treści edukacyjne, materiały informacyjne oraz komunikację online.")}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">Efekt</p>
                <p className="mt-4 text-base leading-7 text-white/85">
                  {keepTogether("Powstał spójny system komunikacji łączący stronę internetową, materiały edukacyjne, komunikację online oraz rozwiązania wspierające pacjentów i personel medyczny.")}
                </p>
                <p className="mt-3 text-base leading-7 text-white/85">
                  {keepTogether("Projekt stał się praktycznym połączeniem komunikacji, marketingu, UX, edukacji zdrowotnej i nowych technologii.")}
                </p>
              </div>
            </div>

            {/* Prawa kolumna — zakres działań + QR */}
            <div className="space-y-5">
              <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">Zakres działań</p>
                <ul className="mt-6 space-y-3">
                  {miaStopPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm leading-6 text-white/85 md:text-base md:leading-7">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* QR kod — link do strony */}
              <a
                href="https://miastophd.pl/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 rounded-[2rem] border border-white/15 bg-white/10 p-5 backdrop-blur transition hover:bg-white/15 group"
              >
                <div className="shrink-0 rounded-xl bg-white p-2">
                  <svg width="80" height="80" viewBox="0 0 27 27" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1,1H2V2H1zM2,1H3V2H2zM3,1H4V2H3zM4,1H5V2H4zM5,1H6V2H5zM6,1H7V2H6zM7,1H8V2H7zM10,1H11V2H10zM11,1H12V2H11zM13,1H14V2H13zM15,1H16V2H15zM17,1H18V2H17zM19,1H20V2H19zM20,1H21V2H20zM21,1H22V2H21zM22,1H23V2H22zM23,1H24V2H23zM24,1H25V2H24zM25,1H26V2H25zM1,2H2V3H1zM7,2H8V3H7zM9,2H10V3H9zM11,2H12V3H11zM14,2H15V3H14zM15,2H16V3H15zM19,2H20V3H19zM25,2H26V3H25zM1,3H2V4H1zM3,3H4V4H3zM4,3H5V4H4zM5,3H6V4H5zM7,3H8V4H7zM9,3H10V4H9zM10,3H11V4H10zM12,3H13V4H12zM13,3H14V4H13zM16,3H17V4H16zM17,3H18V4H17zM19,3H20V4H19zM21,3H22V4H21zM22,3H23V4H22zM23,3H24V4H23zM25,3H26V4H25zM1,4H2V5H1zM3,4H4V5H3zM4,4H5V5H4zM5,4H6V5H5zM7,4H8V5H7zM9,4H10V5H9zM11,4H12V5H11zM13,4H14V5H13zM14,4H15V5H14zM17,4H18V5H17zM19,4H20V5H19zM21,4H22V5H21zM22,4H23V5H22zM23,4H24V5H23zM25,4H26V5H25zM1,5H2V6H1zM3,5H4V6H3zM4,5H5V6H4zM5,5H6V6H5zM7,5H8V6H7zM10,5H11V6H10zM11,5H12V6H11zM12,5H13V6H12zM15,5H16V6H15zM17,5H18V6H17zM19,5H20V6H19zM21,5H22V6H21zM22,5H23V6H22zM23,5H24V6H23zM25,5H26V6H25zM1,6H2V7H1zM7,6H8V7H7zM12,6H13V7H12zM13,6H14V7H13zM19,6H20V7H19zM25,6H26V7H25zM1,7H2V8H1zM2,7H3V8H2zM3,7H4V8H3zM4,7H5V8H4zM5,7H6V8H5zM6,7H7V8H6zM7,7H8V8H7zM9,7H10V8H9zM11,7H12V8H11zM13,7H14V8H13zM15,7H16V8H15zM17,7H18V8H17zM19,7H20V8H19zM20,7H21V8H20zM21,7H22V8H21zM22,7H23V8H22zM23,7H24V8H23zM24,7H25V8H24zM25,7H26V8H25zM9,8H10V9H9zM10,8H11V9H10zM11,8H12V9H11zM1,9H2V10H1zM7,9H8V10H7zM9,9H10V10H9zM12,9H13V10H12zM14,9H15V10H14zM15,9H16V10H15zM18,9H19V10H18zM19,9H20V10H19zM22,9H23V10H22zM23,9H24V10H23zM24,9H25V10H24zM2,10H3V11H2zM3,10H4V11H3zM4,10H5V11H4zM5,10H6V11H5zM6,10H7V11H6zM10,10H11V11H10zM13,10H14V11H13zM14,10H15V11H14zM15,10H16V11H15zM16,10H17V11H16zM20,10H21V11H20zM21,10H22V11H21zM22,10H23V11H22zM23,10H24V11H23zM24,10H25V11H24zM1,11H2V12H1zM4,11H5V12H4zM6,11H7V12H6zM7,11H8V12H7zM9,11H10V12H9zM10,11H11V12H10zM11,11H12V12H11zM15,11H16V12H15zM16,11H17V12H16zM20,11H21V12H20zM22,11H23V12H22zM24,11H25V12H24zM25,11H26V12H25zM1,12H2V13H1zM4,12H5V13H4zM5,12H6V13H5zM6,12H7V13H6zM9,12H10V13H9zM10,12H11V13H10zM11,12H12V13H11zM18,12H19V13H18zM19,12H20V13H19zM20,12H21V13H20zM21,12H22V13H21zM22,12H23V13H22zM25,12H26V13H25zM2,13H3V14H2zM3,13H4V14H3zM4,13H5V14H4zM5,13H6V14H5zM7,13H8V14H7zM9,13H10V14H9zM10,13H11V14H10zM12,13H13V14H12zM13,13H14V14H13zM15,13H16V14H15zM16,13H17V14H16zM19,13H20V14H19zM20,13H21V14H20zM25,13H26V14H25zM1,14H2V15H1zM2,14H3V15H2zM3,14H4V15H3zM4,14H5V15H4zM5,14H6V15H5zM6,14H7V15H6zM9,14H10V15H9zM11,14H12V15H11zM14,14H15V15H14zM16,14H17V15H16zM17,14H18V15H17zM20,14H21V15H20zM24,14H25V15H24zM1,15H2V16H1zM3,15H4V16H3zM4,15H5V16H4zM5,15H6V16H5zM7,15H8V16H7zM11,15H12V16H11zM12,15H13V16H12zM13,15H14V16H13zM14,15H15V16H14zM15,15H16V16H15zM16,15H17V16H16zM17,15H18V16H17zM19,15H20V16H19zM20,15H21V16H20zM21,15H22V16H21zM22,15H23V16H22zM24,15H25V16H24zM25,15H26V16H25zM1,16H2V17H1zM3,16H4V17H3zM8,16H9V17H8zM11,16H12V17H11zM12,16H13V17H12zM16,16H17V17H16zM18,16H19V17H18zM19,16H20V17H19zM20,16H21V17H20zM22,16H23V17H22zM23,16H24V17H23zM25,16H26V17H25zM1,17H2V18H1zM3,17H4V18H3zM4,17H5V18H4zM6,17H7V18H6zM7,17H8V18H7zM8,17H9V18H8zM9,17H10V18H9zM12,17H13V18H12zM17,17H18V18H17zM18,17H19V18H18zM19,17H20V18H19zM20,17H21V18H20zM21,17H22V18H21zM23,17H24V18H23zM9,18H10V19H9zM13,18H14V19H13zM14,18H15V19H14zM17,18H18V19H17zM21,18H22V19H21zM1,19H2V20H1zM2,19H3V20H2zM3,19H4V20H3zM4,19H5V20H4zM5,19H6V20H5zM6,19H7V20H6zM7,19H8V20H7zM12,19H13V20H12zM17,19H18V20H17zM19,19H20V20H19zM21,19H22V20H21zM25,19H26V20H25zM1,20H2V21H1zM7,20H8V21H7zM10,20H11V21H10zM13,20H14V21H13zM14,20H15V21H14zM16,20H17V21H16zM17,20H18V21H17zM21,20H22V21H21zM24,20H25V21H24zM25,20H26V21H25zM1,21H2V22H1zM3,21H4V22H3zM4,21H5V22H4zM5,21H6V22H5zM7,21H8V22H7zM10,21H11V22H10zM11,21H12V22H11zM13,21H14V22H13zM15,21H16V22H15zM16,21H17V22H16zM17,21H18V22H17zM18,21H19V22H18zM19,21H20V22H19zM20,21H21V22H20zM21,21H22V22H21zM23,21H24V22H23zM24,21H25V22H24zM25,21H26V22H25zM1,22H2V23H1zM3,22H4V23H3zM4,22H5V23H4zM5,22H6V23H5zM7,22H8V23H7zM10,22H11V23H10zM15,22H16V23H15zM17,22H18V23H17zM18,22H19V23H18zM19,22H20V23H19zM24,22H25V23H24zM25,22H26V23H25zM1,23H2V24H1zM3,23H4V24H3zM4,23H5V24H4zM5,23H6V24H5zM7,23H8V24H7zM10,23H11V24H10zM12,23H13V24H12zM13,23H14V24H13zM18,23H19V24H18zM22,23H23V24H22zM23,23H24V24H23zM25,23H26V24H25zM1,24H2V25H1zM7,24H8V25H7zM12,24H13V25H12zM15,24H16V25H15zM16,24H17V25H16zM17,24H18V25H17zM19,24H20V25H19zM20,24H21V25H20zM21,24H22V25H21zM25,24H26V25H25zM1,25H2V26H1zM2,25H3V26H2zM3,25H4V26H3zM4,25H5V26H4zM5,25H6V26H5zM6,25H7V26H6zM7,25H8V26H7zM9,25H10V26H9zM11,25H12V26H11zM14,25H15V26H14zM15,25H16V26H15zM17,25H18V26H17zM22,25H23V26H22zM25,25H26V26H25z" fill="#2A1E18" fillRule="nonzero" stroke="none"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-1">Zobacz efekt pracy</p>
                  <p className="text-base font-semibold text-white group-hover:underline">miastophd.pl</p>
                  <p className="text-xs text-white/60 mt-1">Zeskanuj kod QR lub kliknij</p>
                </div>
              </a>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 4 — CO WNOSZĘ DO ZESPOŁÓW I PROJEKTÓW */}
      <section id="values" className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Co wnoszę do zespołów i projektów</p>
        <h2 className="mt-3 text-4xl font-semibold sr-only">Wartości</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <article key={value.title} className="group rounded-[2rem] border border-[#8A5A3C]/15 bg-white/65 p-6 shadow-xl shadow-[#8A5A3C]/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#8A5A3C]/25 hover:bg-white/80 hover:shadow-2xl hover:shadow-[#8A5A3C]/10">
              <h3 className="text-xl font-semibold text-[#2A1E18] transition-all duration-300 group-hover:translate-x-0.5">{value.title}</h3>
              <p className="mt-4 text-sm leading-6 text-[#7A665A]">{keepTogether(value.desc)}</p>
            </article>
          ))}
        </div>
      </section>

      {/* SEKCJA 5 — MARKETING PRZYGOTOWANY NA ZMIANY TECHNOLOGICZNE */}
      <section id="ai-workflow" className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2.5rem] border border-[#8A5A3C]/15 bg-white/55 p-8 shadow-2xl shadow-[#8A5A3C]/5 backdrop-blur md:p-10">
          <div className="grid gap-10 md:grid-cols-[1fr_0.65fr] md:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Marketing przygotowany na zmiany technologiczne</p>
              <h2 className="mt-3 text-4xl font-semibold">
                {keepTogether("Marketing coraz częściej opiera się na modelach językowych, automatyzacji procesów oraz nowych sposobach wyszukiwania informacji.")}
              </h2>
              <p className="mt-5 text-base leading-7 text-[#7A665A]">
                {keepTogether("Rozwijam kompetencje pozwalające wykorzystywać te zmiany do usprawniania komunikacji, organizacji wiedzy, tworzenia treści oraz procesów marketingowych.")}
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#8A5A3C]/15 bg-[#FAF7F2]/70 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8A5A3C]">Obszary rozwoju</p>
              <ul className="mt-5 space-y-3">
                {aiAreas.map((area, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm leading-6 text-[#7A665A]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8A5A3C]" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 6 — DOŚWIADCZENIE */}
      <section id="experience" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Doświadczenie</p>
          <h2 className="mt-3 text-4xl font-semibold">Ponad 15 lat doświadczenia w marketingu, komunikacji i organizacji projektów.</h2>
          <p className="mt-5 leading-7 text-[#7A665A]">
            {keepTogether("Doświadczenie obejmuje zarządzanie zespołami, organizację procesów, employer branding, marketing, komunikację wewnętrzną i zewnętrzną oraz projekty cyfrowe realizowane na styku biznesu, komunikacji i nowych technologii.")}
          </p>
        </div>

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
      </section>

      {/* SEKCJA 7 — ROZWÓJ KOMPETENCJI */}
      <section id="education" className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Rozwój kompetencji</p>
        <h2 className="mt-3 text-4xl font-semibold sr-only">Edukacja</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* Marketing */}
          <div className="rounded-[2rem] border border-[#8A5A3C]/15 bg-white/65 p-6 shadow-xl shadow-[#8A5A3C]/5 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8A5A3C]">Marketing</p>
            <ul className="mt-5 space-y-3">
              {educationMarketing.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm leading-6 text-[#7A665A]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8A5A3C]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Nowe technologie */}
          <div className="rounded-[2rem] border border-[#8A5A3C]/15 bg-white/65 p-6 shadow-xl shadow-[#8A5A3C]/5 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8A5A3C]">Nowe technologie i automatyzacja</p>
            <ul className="mt-5 space-y-3">
              {educationAI.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm leading-6 text-[#7A665A]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8A5A3C]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Employer Branding + Studia */}
          <div className="rounded-[2rem] border border-[#8A5A3C]/15 bg-white/65 p-6 shadow-xl shadow-[#8A5A3C]/5 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8A5A3C]">Employer Branding</p>
            <ul className="mt-5 space-y-3">
              {educationEB.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm leading-6 text-[#7A665A]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8A5A3C]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#8A5A3C]">Studia</p>
            <ul className="mt-3 space-y-4">
              <li className="text-sm leading-6 text-[#7A665A]">
                <span className="block font-medium text-[#2A1E18]">Marketing Internetowy</span>
                Akademia Górniczo-Hutnicza w Krakowie
              </li>
              <li className="text-sm leading-6 text-[#7A665A]">
                <span className="block font-medium text-[#2A1E18]">Marketing i Zarządzanie</span>
                Politechnika Rzeszowska im. I. Łukasiewicza
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SEKCJA 8 — KONTAKT */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2.5rem] border border-[#8A5A3C]/15 bg-gradient-to-br from-white/80 via-[#F8F3EC]/90 to-[#E8D6CC]/70 p-10 shadow-2xl shadow-[#8A5A3C]/10 backdrop-blur md:p-16">
          <div className="grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">Kontakt</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold md:text-5xl">Pomoc w komunikacji i działaniach marketingowych.</h2>
              <p className="mt-5 max-w-2xl leading-7 text-[#7A665A]">
                {keepTogether("Interesują mnie projekty łączące marketing, komunikację, rozwój biznesu i nowe technologie.")}
              </p>
              <p className="mt-3 max-w-2xl leading-7 text-[#7A665A]">
                {keepTogether("Jeżeli szukasz osoby, która potrafi połączyć analizę, organizację, komunikację i realizację działań — zapraszam do kontaktu.")}
              </p>
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
                <a href="mailto:joanna.klos1983@gmail.com" className="inline-block rounded-full bg-[#8A5A3C] px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:shadow-xl" style={{backgroundColor: '#8A5A3C'}}>
                  Napisz do mnie
                </a>
                <a href="https://www.linkedin.com/in/joanna-k%C5%82os-6372a1146/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full border border-[#8A5A3C]/20 bg-white/60 px-6 py-3 text-sm font-medium text-[#7A665A] transition hover:-translate-y-0.5 hover:bg-white">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#8A5A3C]/10 px-6 py-8 text-center text-sm text-[#7A665A]">
        <p>© 2026 Joanna Kłos — Portfolio marketingowe</p>
      </footer>
    </main>
  );
}
