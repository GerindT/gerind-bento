import { groups, statusLabels, type Project, type TechStack } from "./projects";
import type { MediaItem } from "./media";

/** One "calling card": the detail overlay for a project or a media item. */
export type CardItem = {
  id: string;
  /** Items in the same set are stepped through with ←/→ inside the card. */
  set: string;
  title: string;
  /** Main image, then extra screenshots. Empty: a typographic plate is drawn. */
  images: { src: string; alt: string }[];
  contain?: boolean;
  artBg?: string;
  /** Book/film covers are tall; the card lays out around them. */
  portrait?: boolean;
  /** Group or shelf, then year. */
  meta: string[];
  role?: string;
  chips: { label: string; hot?: boolean }[];
  lines: string[];
  stacks: TechStack[];
  links: { href: string; label: string; primary?: boolean; icon: string; srLabel: string }[];
  /** Shown when nothing can be linked. */
  privateNote?: string;
};

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const projectCard = (p: Project, set = p.group): CardItem => {
  const group = groups.find((g) => g.id === p.group);
  const links: CardItem["links"] = [];
  if (p.site)
    links.push({ href: p.site, label: p.siteLabel ?? "Visit site", primary: true, icon: "ri:arrow-right-up-line", srLabel: `${p.title} (opens in new tab)` });
  if (p.github)
    links.push({ href: p.github, label: "Source", primary: !p.site, icon: "ri:github-fill", srLabel: `${p.title} on GitHub (opens in new tab)` });
  return {
    id: p.slug,
    set,
    title: p.title,
    images: [...(p.img ? [{ src: p.img, alt: p.alt }] : []), ...(p.shots ?? [])],
    contain: p.contain,
    artBg: p.artBg,
    meta: [group?.title ?? "", p.year],
    role: p.role,
    chips: p.statuses.map((s) => ({ label: statusLabels[s], hot: s === "live" })),
    lines: [p.blurb],
    stacks: p.stacks,
    links,
    privateNote: links.length ? undefined : p.statuses.includes("offline") ? "No longer hosted, and the code is private." : "Private build, no public link. Ask me for a walkthrough.",
  };
};

export const mediaCard = (item: MediaItem, shelf: { id: string; title: string; cta: string }): CardItem => {
  const kind = { books: "Book", movies: "Film", manga: "Manga" }[shelf.id] ?? shelf.title;
  const where = shelf.cta.replace(/^on /, "");
  return {
    id: slugify(item.title),
    set: shelf.id,
    title: item.title,
    images: [{ src: item.img, alt: `Cover of ${item.title}` }],
    portrait: true,
    meta: [kind, item.year],
    role: `By ${item.by}`,
    chips: [],
    lines: [],
    stacks: [],
    links: [{ href: item.link, label: `Open on ${where}`, primary: true, icon: "ri:arrow-right-up-line", srLabel: `${item.title} (opens in new tab)` }],
  };
};
