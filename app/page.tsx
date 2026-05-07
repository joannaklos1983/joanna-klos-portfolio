"use client";

import React from "react";

// Pomocnicza funkcja do zachowania spacji niełamliwych
function keepTogether(text: string) {
  return text.replace(/ ([a-ząćęłńóśźż]) /gi, " $1\u00A0");
}

export default function Home() {
  // ===== DANE =====
  
  const steps: [string, string, string][] = [
    ["01", "Research", "Zbieram informacje, analizuję target, konkurencję i kontekst biznesowy."],
    ["02", "Structure", "Układam content w logiczną strukturę, priorytetyzuję przekaz."],
    ["03", "Create", "Tworzę treści, komunikaty, landing page, pitch deck."],
    ["04", "Publish", "Wdrażam w CMS, narzędziach mailowych, social media."],
  ];

  const process = [
    "Research",
    "Structure", 
    "Create",
    "Publish",
    "Improve",
  ];

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
    ["01", "Content Analysis", "AI pomaga analizować dane, wyciągać insights i strukturyzować informacje."],
    ["02", "Communication", "Tworzę komunikaty, maile, posty z pomocą AI jako sparring partnera."],
    ["03", "Prototyping", "Prototypuję landing page, aplikacje, dashboardy używając Claude Artifacts."],
    ["04", "Project Organization", "Organizuję projekty, taski i flow z wykorzystaniem AI-native narzędzi."],
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
    "Google Analytics",
    "Google Ads",
    "Facebook Blueprint",
    "Content Marketing Institute",
    "AI-Powered Marketing (Coursera)",
    "Prompt Engineering for Marketing",
  ];

  const experience = [
    {
      years: "2023–2026",
      period: "3 lata",
      role: "Marketing & Communication Specialist",
      company: "Tech Startup",
      focus: "Content strategy, website management, event coordination, AI-assisted marketing workflow.",
      tags: ["marketing", "content", "CMS", "events", "AI tools"],
      details: [
        "Tworzenie strategii contentu i artykułów blogowych",
        "Zarządzanie stroną w WordPress",
        "Kampanie newsletterowe w MailerLite",
        "Organizacja eventów i webinarów",
        "Wykorzystanie AI w codziennej pracy",
      ],
    },
    {
      years: "2020–2023",
      period: "3 lata",
      role: "Project Coordinator",
      company: "Marketing Agency",
      focus: "Koordynacja projektów marketingowych, zarządzanie zespołem, komunikacja z klientami.",
      tags: ["project management", "team coordination", "client relations"],
      details: [
        "Koordynacja kampanii marketingowych",
        "Zarządzanie harmonogramami i budżetami",
        "Komunikacja z klientami i dostawcami",
        "Raportowanie wyników projektów",
      ],
    },
  ];

  // ===== JSX =====
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FAF7F2] via-[#F0E8DC] to-[#E8D6CC] font-sans text-[#2A1E18] antialiased">
      
      {/* HERO */}
      <section className="animate-fade-up mx-auto max-w-7xl px-6 py-20 md:py-32">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#8A5A3C]">
            Portfolio 2026
          </p>
          <h1 className="mt-4 text-5xl font-bold md:text-7xl">
            Joanna Kłos
          </h1>
          <p className="mt-6 text-xl text-[#7A665A] md:text-2xl">
            Marketing • Communication • AI-Assisted Content • Event Coordination
          </p>
        </div>
      </section>

      {/* Tutaj wstaw cały dostarczony fragment od <section id="work"> do </footer> */}
      
      <section id="work" className="animate-fade-up mx-auto max-w-7xl px-6 py-16">
        {/* ... reszta kodu jak w twoim dokumencie ... */}
      </section>

      {/* ... wszystkie pozostałe sekcje ... */}

    </main>
  );
}
