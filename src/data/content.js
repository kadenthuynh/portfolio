export const meta = {
  name: "Kaden Huynh",
  first: "Kaden",
  last: "Huynh",
  title: "Political Science & Philosophy @ UCSB",
  role: "Political Science & Philosophy\nUniversity of California, Santa Barbara",
  tagline: "About Me",
  credentials: [
    { value: "UC Santa Barbara", label: "B.A. of Political Science\nPhilosophy" },
  ],
  location: "San Diego, CA",
  email: "kadenthuynh@gmail.com",
  phone: "(858) 888-3691",
  linkedin: "https://linkedin.com/in/kadenthuynh",
  github: "https://github.com/kadenthuynh",
  bio: "UCSB student studying Political Science and Philosophy with a focus on political theory, law, and public service. Trilingual in English, Spanish, and Vietnamese, shaped by time across San Diego, Colombia, Spain, and Japan.",
  intro: [
    "Hello! My name is Kaden and I'm currently pursuing a B.A. in Political Science at the University of California, Santa Barbara. I'm also minoring in Philosophy and deeply intrigued by morals and ethics. After I graduate, I plan to attend law school and pursue a career in corporate law.",
    "Campus life has been a big part of my UCSB experience. I'm a member of the Pre-Law Society and Phi Alpha Delta law fraternity, and I find a lot of community in the Vietnamese Student Association and Chinese Student Union. When I'm not studying, I stay active on the volleyball court, in the weight room, at the rock climbing gym, or boxing with the Strikers Club.",
    "Outside the classroom I've led youth organizations, competed in parliamentary debate across California, and led a cross-border fundraiser for Colombian youth programs. I'm passionate about community volunteering and have extensive experience in customer service.",
  ],
};

export const stats = [];

export const education = [
  {
    school: "University of California, Santa Barbara",
    degree: "Bachelor of Arts in Political Science, Minor in Philosophy",
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
    location: "Barcelona, Spain",
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
    role: "Writing Tutor",
    company: "UCSB Campus Learning Assistance Services (CLAS)",
    location: "Santa Barbara, CA",
    period: "Sep 2026 – Jun 2027",
    bullets: [
      "Will provide one-on-one writing support to students, assisting at every stage from prompt analysis and drafting to structure, argumentation, and final revision",
      "Will assess individual student needs and develop targeted strategies to strengthen clarity, organization, and academic writing conventions",
    ],
  },
  {
    role: "Shift Lead",
    company: "Pho Ha Grill & Bar",
    location: "Oceanside, CA",
    period: "Dec 2021 – Dec 2025",
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
    description: [
      "Relationship management tool for professionals who need to track connections. Centralizes important contacts, relevant email threads, and follow-up events with a single organized dashboard.",
      "Built in vanilla JavaScript with Supabase for cross-device cloud sync. Credentials are secured client-side using PBKDF2 key derivation and AES-GCM encryption. Google Calendar and Gmail API integrations run through Vercel serverless functions, and AI email drafting uses a detailed writing style guide embedded in the system prompt.",
    ],
    tech: ["Vanilla JS", "HTML/CSS", "Supabase", "Claude API", "Vercel"],
    github: "https://github.com/kadenthuynh/legal",
    live: null,
  },
  {
    name: "Portfolio Website",
    description: [
      "Built to present academic work, professional experience, and projects to others. Highlights writing samples, leadership roles, and technical projects in a clean, navigable format.",
      "Built with React and Vite, the site keeps all content in a single structured data file so updates never touch component logic. UI components include a 3D perspective tilt card driven by Framer Motion spring physics and a character-staggered text reveal. Tailwind CSS powers the dark, minimal design and the project deploys to Vercel on every push.",
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Vercel"],
    github: "https://github.com/kadenthuynh/portfolio",
    live: null,
  },
];

export const writing = [
  {
    title: "Equality",
    course: "Modern Political Theory",
    term: "Spring 2026",
    description:
      "Analyzes the divergent roles of equality in the political thought of Hobbes and Rousseau.",
    link: "/equality.pdf",
  },
  {
    title: "Limits of Government",
    course: "Contemporary Political Theory",
    term: "Winter 2026",
    description:
      "Argues that market freedom produces not genuine liberty but structural inequality and economic domination.",
    link: "/limits-of-government.pdf",
  },
  {
    title: "Japan's Political Reinvention",
    course: "Government and Politics of Japan",
    term: "Winter 2026",
    description:
      "Argues that Japan's Meiji and postwar reinventions were responses to crisis, not ideological revolutions.",
    link: "/japans-political-reinvention.pdf",
  },
  {
    title: "Japan's Framing of Atrocity",
    course: "Government and Politics of Japan",
    term: "Winter 2026",
    description:
      "Examines how Japan and the U.S. have managed public narratives around wartime atrocities.",
    link: "/japans-framing-of-atrocity.pdf",
  },
  {
    title: "Against Betting on God",
    course: "Intro to Philosophy",
    term: "Fall 2024",
    description:
      "Challenges Pascal's Wager by contesting the premise that rational decision-making always demands choosing the option with the greatest expected utility.",
    link: "/against-betting-on-god.pdf",
  },
  {
    title: "We Are Awake",
    course: "Intro to Philosophy",
    term: "Fall 2024",
    description:
      "Challenges the Dreaming Argument's first premise by arguing that active perception of one's actions provides sufficient grounds for knowledge.",
    link: "/we-are-awake.pdf",
  },
  {
    title: "Morals",
    course: "Intro to Philosophy",
    term: "Fall 2024",
    description:
      "Argues that intent and means are morally distinct, and that not all actions with identical outcomes carry equal ethical weight.",
    link: "/morals.pdf",
  },
  {
    title: "In Defense of the Modern State",
    course: "Intro to Political Philosophy",
    term: "Fall 2024",
    description:
      "Argues that the modern state, grounded in Locke's social contract, is the most effective framework for achieving political equality.",
    link: "/the-modern-state.pdf",
  },
];

export const skills = {
  languages: [
    { lang: "English", level: "Fluent" },
    { lang: "Spanish", level: "Fluent" },
    { lang: "Vietnamese", level: "Proficient" },
  ],
  tools: [
    { label: "Microsoft Office", items: ["Microsoft Word", "Excel", "PowerPoint"] },
    { label: "Google Workspace", items: ["Google Docs", "Sheets", "Slides"] },
    { label: "Developer Tools", items: ["VS Code", "GitHub", "Vercel", "Supabase"] },
  ],
  awards: [
    "AP Scholar with Distinction",
    "Seal of Biliteracy in Spanish",
    "SDIVSL Varsity Parliamentary Award",
  ],
};

export const contact = {
  body: "I'm always glad to connect with attorneys, recruiters, or fellow students. Feel free to reach out!",
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
