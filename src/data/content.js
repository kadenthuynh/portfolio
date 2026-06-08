export const meta = {
  name: "Kaden Huynh",
  title: "Political Science & Philosophy @ UCSB",
  location: "San Diego, CA",
  email: "kadenthuynh@gmail.com",
  phone: "(858) 888-3691",
  linkedin: "https://linkedin.com/in/kadenthuynh",
  github: "https://github.com/kadenthuynh",
  bio: "UCSB student studying Political Science and Philosophy with a focus on political theory, law, and public service. Trilingual in English, Spanish, and Vietnamese, shaped by time across San Diego, Colombia, Spain, and Japan.",
};

export const education = [
  {
    school: "University of California, Santa Barbara",
    degree: "B.A. Political Science, Minor in Philosophy",
    period: "Sep 2024 – Jun 2027",
    gpa: "3.87 / 4.0",
    honors: ["Dean's Honor List", "National Political Science Honor Society"],
    coursework: [
      "Classical Political Theory",
      "Modern Political Theory",
      "Contemporary Political Theory",
      "Government & Politics of Japan",
    ],
  },
  {
    school: "Universitat Autònoma de Barcelona (UCEAP)",
    location: "Barcelona & Madrid, Spain",
    degree: "Study Abroad",
    period: "Jun 2026 – Aug 2026",
    coursework: ["Leadership & Negotiation Techniques", "Critical Thinking"],
  },
  {
    school: "International Christian University (UCEAP)",
    location: "Tokyo, Japan",
    degree: "Study Abroad",
    period: "Aug 2026 – Dec 2026",
  },
];

export const experience = [
  {
    role: "Shift Lead",
    company: "Pho Ha Grill & Bar",
    location: "Oceanside, CA",
    period: "Dec 2021 – Present",
    bullets: [
      "Supervised 10+ employees and onboarded 5 new hires across high-volume shifts",
      "Analyzed delivery platform (Grubhub, DoorDash, Uber Eats) metrics and implemented UI optimizations that increased online orders by 25%",
    ],
  },
  {
    role: "Associate",
    company: "In-N-Out Burger",
    location: "San Diego, CA",
    period: "Dec 2023 – Aug 2024",
    bullets: [
      "Collaborated with 30+ employees across high-volume stations",
      "Recognized for cleanliness and attention to detail",
    ],
  },
];

export const leadership = [
  {
    role: "Youth Leader",
    org: "Vietnamese Buddhist Youth Association",
    location: "San Diego, CA",
    period: "May 2019 – Present",
    bullets: [
      "Led fundraising campaigns for Vietnam flood relief",
      "Ran summer camps and weekly meetings for 60+ members",
      "Mentored 30+ youth and taught Vietnamese language",
    ],
  },
  {
    role: "Parliamentary Debater",
    org: "National Speech & Debate Association",
    location: "San Diego, CA",
    period: "Aug 2020 – Jun 2024",
    bullets: [
      "Competed in parliamentary debate across California",
      "Earned SDIVSL Varsity Parliamentary Award",
    ],
  },
  {
    role: "Fundraiser Co-founder",
    org: "Fundación Tiempo de Juego",
    location: "Cundinamarca, Colombia",
    period: "Jan 2023 – Jun 2023",
    bullets: [
      "Co-founded a grassroots fundraiser supporting Colombian youth programs",
      "Organized two San Diego fundraising events",
      "Coordinated bilingual (Spanish/English) communication with the Colombia team",
    ],
  },
];

export const projects = [
  {
    name: "Legal Directory CRM",
    description:
      "Full-featured contact management system for legal professionals. Includes Gmail and Google Calendar integrations, AI-powered email drafting via Claude, PIN-gated encrypted credentials, and Supabase cloud sync.",
    tech: ["Vanilla JS", "HTML/CSS", "Supabase", "Claude API", "Google OAuth", "Vercel"],
    github: "https://github.com/kadenthuynh/legal",
    live: null,
  },
  {
    name: "realtomato",
    description:
      "Time-gated personal gift website delivering 23 date-locked daily entries (photos, notes, and curated songs) to a single recipient over 23 consecutive days.",
    bullets: [
      "Achieved cross-platform audio playback on iOS Safari by managing gesture-token autoplay compliance, bfcache session restoration, and a dual-channel native HTML5 audio engine with per-song seek-to-chorus offsets",
      "Built timezone-aware (PST/PDT) midnight unlock logic with a real-time countdown timer and versioned localStorage caching to eliminate repeat-visit network requests",
      "Designed a trivia-based auth system with 23 daily relationship questions, seeded-shuffle rotation, letter-box UI with hint-reveal mechanics, and a hidden admin bypass",
    ],
    tech: ["Vanilla JS", "HTML5 Audio API", "CSS", "LocalStorage"],
    github: "https://github.com/kadenthuynh/taylor",
    live: null,
  },
  {
    name: "Portfolio Website",
    description:
      "Personal about-me and portfolio built with React + Vite. Single-page, dark, compact-minimal design with all content driven from a structured data file.",
    tech: ["React", "Vite", "CSS", "Vercel"],
    github: "https://github.com/kadenthuynh/portfolio",
    live: null,
  },
];

export const writing = [
  {
    title: "Your Paper Title Here",
    course: "POLS 135",
    term: "Winter 2025",
    description:
      "A brief 2-3 sentence abstract or description of what this paper argues. Replace this with your actual abstract. Add the link field below once you have a Google Doc or PDF link.",
    link: null,
  },
  {
    title: "Your Paper Title Here",
    course: "POLS 187",
    term: "Spring 2025",
    description:
      "A brief 2-3 sentence abstract or description of what this paper argues. Replace this with your actual abstract.",
    link: null,
  },
  {
    title: "Your Paper Title Here",
    course: "POLS 188",
    term: "Fall 2024",
    description:
      "A brief 2-3 sentence abstract or description of what this paper argues. Replace this with your actual abstract.",
    link: null,
  },
];

export const skills = {
  languages: [
    { lang: "English", level: "Fluent" },
    { lang: "Spanish", level: "Fluent" },
    { lang: "Vietnamese", level: "Proficient" },
  ],
  tools: ["Microsoft Word", "Excel", "PowerPoint", "Google Docs", "Sheets", "Slides"],
  awards: [
    "AP Scholar with Distinction",
    "Seal of Biliteracy in Spanish",
    "SDIVSL Varsity Parliamentary Award",
  ],
};

export const interests = [
  "Volunteering",
  "Competitive Boxing",
  "Bouldering",
  "Volleyball",
  "Cultural Lion Dancing",
  "Content Creation",
  "Travelling",
];
