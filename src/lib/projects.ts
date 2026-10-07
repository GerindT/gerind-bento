export type ProjectStatus = "live" | "concept" | "dev_only" | "private";

export const statusLabels: Record<ProjectStatus, string> = {
  live: "Live",
  concept: "Concept",
  dev_only: "Dev only",
  private: "Private",
};

export const techIcons = {
  vue: { label: "Vue", icon: "logos:vue" },
  react: { label: "React", icon: "logos:react" },
  nuxt: { label: "Nuxt", icon: "logos:nuxt-icon" },
  golang: { label: "Go", icon: "logos:go" },
  laravel: { label: "Laravel", icon: "logos:laravel" },
  php: { label: "PHP", icon: "logos:php" },
  nodejs: { label: "Node.js", icon: "logos:nodejs-icon" },
  mysql: { label: "MySQL", icon: "logos:mysql" },
  mongodb: { label: "MongoDB", icon: "logos:mongodb-icon" },
  postgresql: { label: "PostgreSQL", icon: "logos:postgresql" },
  supabase: { label: "Supabase", icon: "logos:supabase-icon" },
  redis: { label: "Redis", icon: "logos:redis" },
  python: { label: "Python", icon: "logos:python" },
  vectordb: { label: "Vector DB", icon: "ri:database-2-line" },
  k8s: { label: "K8s", icon: "logos:kubernetes" },
} as const;

export type TechStack = keyof typeof techIcons;

export type Project = {
  slug: string;
  title: string;
  year: string;
  /** Screenshot path. Omit when there is no real image yet: a typographic plate is drawn instead. */
  img?: string;
  alt: string;
  /** Screenshot is a logo-like artwork that should be contained rather than cropped. */
  contain?: boolean;
  github?: string;
  site?: string;
  statuses: ProjectStatus[];
  stacks: TechStack[];
  featured?: boolean;
  /** One factual line: only what is confirmed. */
  blurb?: string;
};

const projects: Project[] = [
  {
    slug: "goflight",
    title: "Goflight",
    year: "2026",
    alt: "",
    github: "https://github.com/GerindT/GoFlight",
    site: "https://go-flight.vercel.app/",
    statuses: ["live"],
    stacks: ["golang", "vue", "redis", "k8s"],
  },
  {
    slug: "muse-x",
    title: "Muse-x",
    year: "2026",
    alt: "",
    site: "https://muse-x.al/",
    statuses: ["live", "private"],
    stacks: ["nuxt", "golang", "mysql"],
  },
  {
    slug: "audire",
    title: "Audire",
    year: "2026",
    alt: "",
    site: "https://audire.vercel.app/",
    statuses: ["concept", "private"],
    stacks: ["python", "nuxt"],
  },
  {
    slug: "pixel-party",
    title: "Pixel Party",
    year: "2026",
    img: "/illustrations/projects/pixel-party.png",
    alt: "Pixel Party interface screenshot",
    github: "https://github.com/GerindT/pixel-party",
    site: "https://pixel-party-tau.vercel.app/",
    statuses: ["live"],
    stacks: ["nuxt", "supabase"],
    featured: true,
  },
  {
    slug: "007-drop",
    title: "007-drop",
    year: "2026",
    img: "/illustrations/projects/007-drop.png",
    alt: "007-drop interface screenshot",
    github: "https://github.com/GerindT/007-drop",
    site: "https://007-drop.vercel.app/",
    statuses: ["live"],
    stacks: ["nuxt", "supabase"],
    featured: true,
  },
  {
    slug: "ai-albania",
    title: "AI Albania",
    year: "2025",
    img: "/illustrations/projects/ai_albania.webp",
    alt: "AI Albania website screenshot",
    site: "https://aialbania.org",
    statuses: ["live", "private"],
    stacks: ["vue"],
    featured: true,
  },
  {
    slug: "reSearch",
    title: "reSearch",
    year: "2024",
    img: "/illustrations/projects/reSearch.webp",
    alt: "reSearch interface screenshot",
    github: "https://github.com/GerindT/reSearch",
    site: "https://re-search.netlify.app",
    statuses: ["live"],
    stacks: ["react", "php", "mysql"],
  },
  {
    slug: "mycredit",
    title: "MyCredit",
    year: "2024",
    img: "/illustrations/projects/mycredit.webp",
    alt: "MyCredit interface screenshot",
    contain: true,
    site: "https://mycred.it/",
    statuses: ["private", "live"],
    stacks: ["laravel", "redis", "golang", "vue", "mysql"],
    featured: true,
  },
  {
    slug: "florian-hiso",
    title: "Florian Hiso",
    year: "2024",
    img: "/illustrations/projects/flori.webp",
    alt: "Florian Hiso personal page screenshot",
    github: "https://github.com/GerindT/florianHiso",
    site: "https://florian-hiso.netlify.app",
    statuses: ["live"],
    stacks: ["supabase", "react"],
  },
  {
    slug: "sose-al",
    title: "Sose Al",
    year: "2024",
    img: "/illustrations/projects/sose.webp",
    alt: "Sose Al concept screenshot",
    contain: true,
    site: "https://sose-al.netlify.app",
    statuses: ["concept"],
    stacks: ["python", "nodejs", "vectordb", "react", "mysql"],
  },
  {
    slug: "web-scraping",
    title: "Web Scraping",
    year: "2024",
    img: "/illustrations/projects/webscraping.webp",
    alt: "Web scraping tool screenshot",
    github: "https://github.com/GerindT/webScraping",
    statuses: ["dev_only"],
    stacks: ["nodejs", "react", "python"],
  },
  {
    slug: "rollbet",
    title: "Rollbet",
    year: "2024",
    img: "/illustrations/projects/rollbet.webp",
    alt: "Rollbet screenshot",
    contain: true,
    site: "https://rollbet.gg/",
    statuses: ["private"],
    stacks: ["vue", "golang", "redis"],
    blurb: "Backend contract: fixed race conditions, built queued payouts and integrated fiat and crypto payment gateways.",
  },
  {
    slug: "off-road",
    title: "Off Road",
    year: "2021",
    img: "/illustrations/projects/offRoad.webp",
    alt: "Off Road screenshot",
    github: "https://github.com/GerindT/offroad",
    statuses: ["dev_only"],
    stacks: ["mongodb", "nodejs"],
  },
];

// Stable sort: newest first, source order kept within a year.
export const allProjects: Project[] = projects
  .map((p, i) => ({ p, i }))
  .sort((a, b) => Number(b.p.year) - Number(a.p.year) || a.i - b.i)
  .map(({ p }) => p);

export const featuredProjects = allProjects.filter((p) => p.featured);
export const liveCount = allProjects.filter((p) => p.statuses.includes("live")).length;
