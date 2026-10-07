export type Job = { role: string; org: string; dates: string; place?: string; note?: string; points: string[] };

export const jobs: Job[] = [
  {
    role: "Tech Lead & System Architect",
    org: "Innovation4Albania",
    dates: "Oct 2026 – Present",
    points: [],
  },
  {
    role: "Software Developer",
    org: "Detag",
    dates: "Aug 2024 – Oct 2026",
    place: "Tirana",
    points: [
      "Architected and maintained high-concurrency web platforms using Go, Node.js and Laravel.",
      "Led full-stack architectural overhauls and engineered CI/CD pipelines to scale projects and automate deployments.",
    ],
  },
  {
    role: "Back-End Developer (Contract)",
    org: "RollBet",
    dates: "Jun 2024 – Jan 2025",
    place: "Tirana",
    points: [
      "Stabilised backend infrastructure by resolving critical logic flaws and race conditions.",
      "Engineered a scalable queueing workflow for background tasks and automated payouts.",
      "Integrated secure fiat and crypto payment gateways (API, webhooks).",
    ],
  },
  {
    role: "Junior Web Developer",
    org: "Black Box",
    dates: "Aug 2023 – Oct 2023",
    place: "Tirana",
    points: ["Built full-stack features with Next.js and PostgreSQL in an AWS environment.", "Improved maintainability by introducing standardised unit testing."],
  },
  {
    role: "Web Developer (Contract)",
    org: "Rift Drop",
    dates: "Sep 2022 – Oct 2023",
    place: "Tirana",
    points: ["Built a real-time messaging platform with WebSockets, Express and React.", "Owned end-to-end delivery of multiplayer features and crypto-wallet monetisation."],
  },
  {
    role: "Programming Teacher",
    org: "Albanian ICT Academy",
    dates: "Mar 2022 – Sep 2023",
    place: "Tirana",
    points: ["Mentored students in Python, C++ and React Native, making complex architectural ideas simple."],
  },
  {
    role: "Back-End Developer",
    org: "Detag",
    dates: "Jun 2021 – Oct 2021",
    place: "Tirana",
    points: ["Implemented core backend features across multiple web systems and supported frontend integrations."],
  },
];

export const education: { title: string; where: string; dates: string; note?: string }[] = [
  { title: "Organizing Team Member", where: "EEML Summer School · Cetinje, Montenegro", dates: "2026" },
  {
    title: "Poster Presenter",
    where: "EEML Summer School · Novi Sad, Serbia",
    dates: "2024",
    note: "Bachelor's thesis: user-driven product analysis via web scraping and multi-modal NLP.",
  },
  { title: "B.Sc. Computer Science, Valedictorian", where: "University of New York Tirana", dates: "2021 – 2024" },
  { title: "High School Diploma, Valedictorian", where: "Hermann Gmeiner · software engineering track", dates: "2017 – 2021" },
];

export const languages = [
  { name: "Albanian", level: "Native" },
  { name: "English", level: "C1" },
  { name: "German", level: "B1" },
];
