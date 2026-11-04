export type ProjectStatus = "live" | "ui_only" | "wip" | "concept" | "dev_only" | "private";

export const statusLabels: Record<ProjectStatus, string> = {
  live: "Live",
  ui_only: "UI only",
  wip: "In progress",
  concept: "Concept",
  dev_only: "Dev only",
  private: "Private",
};

export const techIcons = {
  vue: { label: "Vue", icon: "logos:vue" },
  react: { label: "React", icon: "logos:react" },
  nuxt: { label: "Nuxt", icon: "logos:nuxt-icon" },
  nextjs: { label: "Next.js", icon: "logos:nextjs-icon" },
  astro: { label: "Astro", icon: "logos:astro-icon" },
  golang: { label: "Go", icon: "logos:go" },
  laravel: { label: "Laravel", icon: "logos:laravel" },
  php: { label: "PHP", icon: "logos:php" },
  wordpress: { label: "WordPress", icon: "logos:wordpress-icon" },
  nodejs: { label: "Node.js", icon: "logos:nodejs-icon" },
  dotnet: { label: ".NET", icon: "logos:dotnet" },
  python: { label: "Python", icon: "logos:python" },
  fastapi: { label: "FastAPI", icon: "logos:fastapi-icon" },
  mysql: { label: "MySQL", icon: "logos:mysql" },
  mongodb: { label: "MongoDB", icon: "logos:mongodb-icon" },
  postgresql: { label: "PostgreSQL", icon: "logos:postgresql" },
  supabase: { label: "Supabase", icon: "logos:supabase-icon" },
  firebase: { label: "Firebase", icon: "logos:firebase" },
  redis: { label: "Redis", icon: "logos:redis" },
  socketio: { label: "Socket.IO", icon: "logos:socket-io" },
  vectordb: { label: "Vector DB", icon: "ri:database-2-line" },
  k8s: { label: "K8s", icon: "logos:kubernetes" },
  flutter: { label: "Flutter", icon: "logos:flutter" },
  expo: { label: "Expo", icon: "logos:expo-icon" },
  godot: { label: "Godot", icon: "logos:godot-icon" },
  cloudflare: { label: "Cloudflare", icon: "logos:cloudflare-icon" },
} as const;

export type TechStack = keyof typeof techIcons;

export type ProjectGroup = "personal" | "i4a" | "detag" | "friends" | "early";

export const groups: { id: ProjectGroup; title: string; short: string; note: string }[] = [
  { id: "personal", title: "Personal & freelance", short: "Personal", note: "Products, experiments and contracts I built on my own time or for my own clients." },
  { id: "i4a", title: "Innovation4Albania", short: "I4A", note: "Public-sector platforms, as Tech Lead & System Architect. Government work, so no public links." },
  { id: "detag", title: "Detag", short: "Detag", note: "Client platforms built as a developer at Detag. Linked only where the product is already public." },
  { id: "friends", title: "Friends' sites", short: "Friends", note: "Portfolio sites I built for friends." },
  { id: "early", title: "Early days", short: "Early days", note: "Where it started: school and bootcamp projects from 2021." },
];

export type Project = {
  slug: string;
  title: string;
  year: string;
  group: ProjectGroup;
  /** Screenshot path. Omit when there is no real image yet: a typographic plate is drawn instead. */
  img?: string;
  alt: string;
  /** Screenshot is a logo-like or portrait artwork that should be contained rather than cropped. */
  contain?: boolean;
  /** Backdrop behind contained artwork, sampled from the artwork's own ground. */
  artBg?: string;
  github?: string;
  site?: string;
  /** Link text for `site` when it is not the full product, e.g. "UI demo". */
  siteLabel?: string;
  statuses: ProjectStatus[];
  stacks: TechStack[];
  /** Shown on the home page. */
  featured?: boolean;
  /** My part in it, when it was not simply "built it". */
  role?: string;
  /** One factual line: only what is confirmed. */
  blurb: string;
};

const projects: Project[] = [
  // ---------- personal & freelance ----------
  {
    slug: "vanspot",
    title: "Vanspot",
    year: "2026",
    group: "personal",
    img: "/illustrations/projects/vanspot.webp",
    alt: "Vanspot artwork: a camper van inside a map pin, with the line 'Vanlife maps, routes and community for Albania'",
    contain: true,
    artBg: "#7a8465",
    statuses: ["wip", "private"],
    stacks: ["flutter", "golang", "postgresql"],
    featured: true,
    blurb: "Travel app for vanlifers and motorhomes in Albania: maps, vehicle-aware routing, community spots and an AI guide.",
  },
  {
    slug: "after-hours",
    title: "After Hours",
    year: "2026",
    group: "personal",
    img: "/illustrations/projects/after-hours.webp",
    alt: "After Hours key art: a pixel-art janitor in a dark school corridor",
    contain: true,
    artBg: "#0c0c0c",
    statuses: ["wip", "private"],
    stacks: ["godot"],
    featured: true,
    blurb: "Portrait mobile horror dungeon crawler with a VHS look. The bell rang; the school kept you.",
  },
  {
    slug: "pragma",
    title: "Pyramid × Pragma",
    year: "2026",
    group: "personal",
    img: "/illustrations/projects/pragma.webp",
    alt: "Pyramid × Pragma booking portal home page",
    github: "https://github.com/GerindT/pragma",
    site: "https://piramida.pragma.ltd",
    statuses: ["live"],
    stacks: ["golang", "vue"],
    featured: true,
    blurb: "Event operations for the Pyramid of Tirana: a public booking portal and a staff admin panel that runs events end to end.",
  },
  {
    slug: "goflight",
    title: "Goflight",
    year: "2026",
    group: "personal",
    img: "/illustrations/projects/goflight.webp",
    alt: "Goflight terminal-style dashboard",
    github: "https://github.com/GerindT/GoFlight",
    site: "https://go-flight.vercel.app/",
    statuses: ["live"],
    stacks: ["golang", "vue", "redis", "k8s"],
    blurb: "Terminal-style flight dashboard. A Go service aggregates flight and weather data with caching, circuit breakers and metrics.",
  },
  {
    slug: "prompt-arena",
    title: "Prompt Arena",
    year: "2026",
    group: "personal",
    img: "/illustrations/projects/prompt-arena.webp",
    alt: "Prompt Arena voting page titled 'Rank the Best'",
    github: "https://github.com/GerindT/prompt-arena",
    site: "https://prompt-arena-teal.vercel.app",
    statuses: ["live"],
    stacks: ["nuxt", "supabase", "postgresql"],
    blurb: "Head-to-head voting on AI image generations. Elo ratings update through a Postgres function and the winners climb a live leaderboard.",
  },
  {
    slug: "kean",
    title: "Kean Visual Creations",
    year: "2026",
    group: "personal",
    img: "/illustrations/projects/kean.webp",
    alt: "Kean Visual Creations home page with the headline 'Every shoot, edited down to the one frame'",
    site: "https://kean-eight.vercel.app",
    statuses: ["live"],
    stacks: ["astro", "cloudflare"],
    blurb: "Website for Kean, a photo and video studio in Tirana working with hospitality, food and drink brands.",
  },
  {
    slug: "audire",
    title: "Audire",
    year: "2026",
    group: "personal",
    img: "/illustrations/projects/audire.webp",
    alt: "Audire audio restoration upload screen",
    site: "https://audire.vercel.app/",
    statuses: ["concept", "private"],
    stacks: ["python", "fastapi", "vue"],
    blurb: "Audio restoration lab that compares DSP, evolutionary, deep-learning and hybrid methods on the same recording.",
  },
  {
    slug: "pixel-party",
    title: "Pixel Party",
    year: "2025",
    group: "personal",
    img: "/illustrations/projects/pixel-party.webp",
    alt: "Pixel Party shared pixel canvas",
    github: "https://github.com/GerindT/pixel-party",
    site: "https://pixel-party-tau.vercel.app/",
    statuses: ["live"],
    stacks: ["nuxt", "supabase"],
    blurb: "Real-time collaborative pixel canvas: paint together on a shared board with live updates, ghost cursors and PNG/SVG export.",
  },
  {
    slug: "007-drop",
    title: "007-drop",
    year: "2026",
    group: "personal",
    img: "/illustrations/projects/007-drop.webp",
    alt: "007-Drop upload screen",
    github: "https://github.com/GerindT/007-drop",
    site: "https://007-drop.vercel.app/",
    statuses: ["live"],
    stacks: ["nuxt", "supabase"],
    blurb: "Self-destructing file sharing with in-browser encryption, optional passwords and automatic clean-up.",
  },
  {
    slug: "ai-albania",
    title: "AI Albania",
    year: "2025",
    group: "personal",
    img: "/illustrations/projects/ai-albania.webp",
    alt: "AI Albania website home page",
    site: "https://aialbania.org",
    statuses: ["live", "private"],
    stacks: ["vue", "nuxt"],
    blurb: "Website for AI Albania, an initiative shaping a responsible AI ecosystem in Albania.",
  },
  {
    slug: "scamless",
    title: "Scamless",
    year: "2024",
    group: "personal",
    img: "/illustrations/projects/scamless.webp",
    alt: "Scamless welcome page",
    github: "https://github.com/GerindT/webScraping",
    site: "https://scamless-frontend.netlify.app/",
    siteLabel: "UI demo",
    statuses: ["ui_only"],
    stacks: ["react", "nodejs", "python"],
    featured: true,
    role: "Bachelor's thesis",
    blurb: "Rates the credibility of Amazon products from their reviews, using web scraping and multi-modal NLP: sentiment, feature extraction and recommendations. Presented as a poster at EEML 2024. The demo is the front end only; the scraping backend isn't hosted.",
  },
  {
    slug: "rollbet",
    title: "Rollbet",
    year: "2024",
    group: "personal",
    img: "/illustrations/projects/rollbet.webp",
    alt: "Rollbet logo",
    contain: true,
    site: "https://rollbet.gg/",
    statuses: ["live", "private"],
    stacks: ["vue", "nodejs", "socketio", "redis"],
    featured: true,
    role: "Backend contract",
    blurb: "Fixed race conditions, built queued payouts and integrated fiat and crypto payment gateways.",
  },
  {
    slug: "sose-al",
    title: "Sose Al",
    year: "2024",
    group: "personal",
    img: "/illustrations/projects/sose-al.webp",
    alt: "Sose.al landing page",
    site: "https://sose-al.netlify.app",
    statuses: ["concept"],
    stacks: ["react", "nodejs", "mongodb", "python", "vectordb"],
    featured: true,
    blurb: "Hiring platform concept with AI candidate search over a vector database.",
  },
  {
    slug: "research",
    title: "reSearch",
    year: "2024",
    group: "personal",
    img: "/illustrations/projects/reSearch.webp",
    alt: "reSearch interface screenshot",
    github: "https://github.com/GerindT/reSearch",
    site: "https://re-search.netlify.app",
    statuses: ["live"],
    stacks: ["react", "php", "mysql"],
    blurb: "A home for AI research papers, inspired by ResearchGate and arXiv.",
  },
  {
    slug: "lolcases",
    title: "LolCases",
    year: "2022",
    group: "personal",
    statuses: ["private"],
    stacks: ["react", "nodejs", "socketio", "mysql"],
    alt: "",
    featured: true,
    role: "Team lead",
    blurb: "Led the team building it: a React front end, an Express API and Socket.IO services for live battles, with Steam sign-in and crypto checkout.",
  },
  {
    slug: "off-road",
    title: "Off Road",
    year: "2021",
    group: "personal",
    img: "/illustrations/projects/offRoad.webp",
    alt: "Off Road campground app screenshot",
    contain: true,
    github: "https://github.com/GerindT/offroad",
    statuses: ["dev_only"],
    featured: true,
    stacks: ["nodejs", "mongodb"],
    blurb: "Campground web app grown out of the YelpCamp course, with tighter security and Google Maps integration.",
  },

  // ---------- Innovation4Albania ----------
  {
    slug: "pasqyra",
    title: "Pasqyra e Çmimeve",
    year: "2026",
    group: "i4a",
    alt: "",
    statuses: ["private"],
    stacks: ["nextjs", "postgresql", "expo"],
    blurb: "National price-transparency platform, with a web app and an Expo mobile app.",
  },
  {
    slug: "mip",
    title: "MIP",
    year: "2026",
    group: "i4a",
    alt: "",
    statuses: ["private"],
    stacks: ["react", "fastapi", "postgresql"],
    blurb: "Menaxhimi i Investimeve Publike: monitoring for Albania's public investment portfolio.",
  },
  {
    slug: "i4a-dashboard",
    title: "I4A Dashboard",
    year: "2025",
    group: "i4a",
    alt: "",
    statuses: ["private"],
    stacks: ["dotnet", "react", "postgresql"],
    blurb: "Internal dashboard for projects, OKRs, risks and the calendar, with an AI assistant.",
  },
  {
    slug: "ishmt",
    title: "ISHMT Registry",
    year: "2026",
    group: "i4a",
    alt: "",
    statuses: ["private"],
    stacks: ["nextjs", "postgresql"],
    blurb: "Digital elevator registry.",
  },
  {
    slug: "etransport",
    title: "eTransport",
    year: "2026",
    group: "i4a",
    alt: "",
    statuses: ["private"],
    stacks: ["wordpress", "react", "expo"],
    blurb: "MVP with a WordPress back end, a React web app and an Expo mobile app.",
  },
  {
    slug: "i4a-generator",
    title: "i4a-generator",
    year: "2026",
    group: "i4a",
    alt: "",
    statuses: ["private"],
    stacks: ["python"],
    blurb: "CLI that scaffolds new projects from the team's templates.",
  },

  // ---------- Detag ----------
  {
    slug: "mycredit",
    title: "MyCredit",
    year: "2024",
    group: "detag",
    img: "/illustrations/projects/mycredit.webp",
    alt: "MyCredit interface screenshot",
    contain: true,
    site: "https://mycred.it/",
    statuses: ["live", "private"],
    stacks: ["golang", "laravel", "vue", "redis", "mysql"],
    blurb: "Event management and cashless payments: ticketing, an embeddable widget and white-label sites.",
  },
  {
    slug: "muse-x",
    title: "Muse-x",
    year: "2026",
    group: "detag",
    img: "/illustrations/projects/muse-x.webp",
    alt: "MUSE-X festival site with the headline 'Step up the beat'",
    site: "https://muse-x.al/",
    statuses: ["live", "private"],
    stacks: ["nuxt", "golang", "mysql"],
    blurb: "Site for the MUSE-X expo-festival at the Pyramid of Tirana, running on the MyCredit platform.",
  },
  {
    slug: "gobe",
    title: "Gobe System",
    year: "2022",
    group: "detag",
    alt: "",
    statuses: ["private"],
    stacks: ["laravel", "vue"],
    blurb: "Business platform with product, stock and pricing modules.",
  },
  {
    slug: "tetris",
    title: "Tetris Planner",
    year: "2023",
    group: "detag",
    alt: "",
    statuses: ["private"],
    stacks: ["laravel", "vue"],
    blurb: "Material logistics planning, including a warehouse module.",
  },
  {
    slug: "hotel",
    title: "Hotel platform",
    year: "2025",
    group: "detag",
    alt: "",
    statuses: ["private"],
    stacks: ["golang", "nuxt"],
    blurb: "Multi-hotel platform: a Go back end and a multilingual Nuxt front end.",
  },
  {
    slug: "eventmatch",
    title: "EventMatch",
    year: "2026",
    group: "detag",
    alt: "",
    statuses: ["wip", "private"],
    stacks: ["nuxt", "golang", "mysql", "redis"],
    blurb: "B2B matching platform for the events industry.",
  },
  {
    slug: "gse",
    title: "GSE Security",
    year: "2025",
    group: "detag",
    alt: "",
    statuses: ["private"],
    stacks: ["react"],
    blurb: "Website for GSE, a private security company in Albania.",
  },

  // ---------- friends ----------
  {
    slug: "florian-hiso",
    title: "Florian Hiso",
    year: "2024",
    group: "friends",
    img: "/illustrations/projects/florian-hiso.webp",
    alt: "Florian Hiso portfolio home page",
    github: "https://github.com/GerindT/florianHiso",
    site: "https://florian-hiso.netlify.app",
    statuses: ["live"],
    stacks: ["react", "supabase"],
    blurb: "Portfolio for a software developer and AI researcher.",
  },
  {
    slug: "enri",
    title: "Enri Tershana",
    year: "2026",
    group: "friends",
    img: "/illustrations/projects/enri.webp",
    alt: "Enri Tershana portfolio home page",
    site: "https://enri-tershana-portofolio.vercel.app",
    statuses: ["live"],
    stacks: ["nuxt"],
    blurb: "Portfolio for a DevOps engineer.",
  },
  {
    slug: "rejon",
    title: "Rejon Hakrama",
    year: "2026",
    group: "friends",
    img: "/illustrations/projects/rejon.webp",
    alt: "Rejon Hakrama terminal-style portfolio",
    site: "https://rejon-hakrama.vercel.app",
    statuses: ["live"],
    stacks: ["nuxt"],
    blurb: "Terminal-style portfolio for a technical support engineer.",
  },
  {
    slug: "aleks-lipo",
    title: "Aleks Lipo",
    year: "2023",
    group: "friends",
    img: "/illustrations/projects/aleks-lipo.webp",
    alt: "Aleks Lipo's bilingual site: a photo carousel above a Bible-school timeline",
    site: "https://aleks-lipo.netlify.app",
    github: "https://github.com/GerindT/aleksLipo",
    statuses: ["live"],
    stacks: ["react"],
    blurb: "Bilingual (Albanian / English) personal site with a photo carousel and a timeline of his Bible-school year. Vite, React, Flowbite and Tailwind.",
  },

  // ---------- early days ----------
  {
    slug: "react-color",
    title: "React Color",
    year: "2021",
    group: "early",
    img: "/illustrations/projects/react-color.webp",
    alt: "React Colors palette gallery",
    github: "https://github.com/GerindT/react-color",
    site: "https://react-cl.netlify.app/",
    statuses: ["live"],
    stacks: ["react"],
    blurb: "Palette maker: create and tweak colour palettes, saved in the browser, with Material UI transitions.",
  },
  {
    slug: "offroad-app",
    title: "Off Road mobile",
    year: "2021",
    group: "early",
    alt: "",
    github: "https://github.com/GerindT/offRoad-App",
    statuses: ["dev_only"],
    stacks: ["expo", "firebase"],
    blurb: "React Native app to create, edit and share campgrounds, with Firebase auth and storage.",
  },
  {
    slug: "web-school",
    title: "Hermann Gmeiner web app",
    year: "2021",
    group: "early",
    alt: "",
    github: "https://github.com/GerindT/web-school-herrman",
    statuses: ["dev_only"],
    stacks: ["nodejs", "mongodb"],
    blurb: "Web app built for my high school as a class project.",
  },
  {
    slug: "portfolio-v1",
    title: "Portfolio v1",
    year: "2021",
    group: "early",
    alt: "",
    github: "https://github.com/GerindT/portfolio-site",
    statuses: ["dev_only"],
    stacks: ["react"],
    blurb: "My first portfolio: multilingual, with switchable themes.",
  },
  {
    slug: "color-game",
    title: "Color Game",
    year: "2021",
    group: "early",
    alt: "",
    github: "https://github.com/GerindT/color-game",
    statuses: ["dev_only"],
    stacks: [],
    blurb: "Colour-guessing game in plain JavaScript, HTML and CSS: my first time moving the DOM around.",
  },
];

// Stable sort: newest first, source order kept within a year.
export const allProjects: Project[] = projects
  .map((p, i) => ({ p, i }))
  .sort((a, b) => Number(b.p.year) - Number(a.p.year) || a.i - b.i)
  .map(({ p }) => p);

/** Per group, in hand-curated order (source order), with pictured work first. */
export const projectsByGroup = groups.map((g) => {
  const list = projects.filter((p) => p.group === g.id);
  // Pictured or flagged-important work gets a poster; the rest a compact row.
  const big = (p: Project) => Boolean(p.img || p.featured);
  // Interleave two-column features with single posters so every grid row fills.
  const features = list.filter((p) => p.featured);
  const singles = list.filter((p) => big(p) && !p.featured);
  const pictured: Project[] = [];
  while (features.length || singles.length) {
    if (features.length) pictured.push(features.shift()!);
    if (singles.length) pictured.push(singles.shift()!);
  }
  return { ...g, pictured, listed: list.filter((p) => !big(p)) };
});

export const featuredProjects = projects.filter((p) => p.featured && p.img);
export const liveCount = allProjects.filter((p) => p.statuses.includes("live")).length;
