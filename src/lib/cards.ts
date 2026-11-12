import { groups, statusLabels, statusHelp, type Project, type TechStack } from "./projects";
import { LINKS } from "./constants";
import type { MediaItem } from "./media";

/** One "calling card": the detail overlay for a project or a media item. */
export type CardItem = {
  id: string;
  /** The card's own URL: a project's page, or /media?p=id. */
  href: string;
  /** Items in the same set are stepped through with ←/→ inside the card. */
  set: string;
  /** Human name of the set, shown in the card counter ("Selected 3/6"). */
  setLabel?: string;
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
  chips: { label: string; hot?: boolean; help?: string }[];
  lines: string[];
  /** "My part" on team projects. */
  part?: string;
  /** mailto for private work: ask for a walkthrough. */
  ask?: string;
  /** A related xkcd strip, linked from the card. */
  aside?: { href: string; label: string };
  /** Licence credit shown under the links (xkcd). */
  credit?: string;
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

export const projectCard = (p: Project, set: string = p.group, setLabel?: string): CardItem => {
  const group = groups.find((g) => g.id === p.group);
  const links: CardItem["links"] = [];
  if (p.site)
    links.push({ href: p.site, label: p.siteLabel ?? "Visit site", primary: true, icon: "ri:arrow-right-up-line", srLabel: `${p.title} (opens in new tab)` });
  if (p.github)
    links.push({ href: p.github, label: "Source", primary: !p.site, icon: "ri:github-fill", srLabel: `${p.title} on GitHub (opens in new tab)` });
  if (p.paper)
    links.push({ href: p.paper, label: "Thesis", icon: "ri:file-pdf-2-line", srLabel: `${p.title} thesis, PDF (opens in new tab)` });
  return {
    id: p.slug,
    href: `/projects/${p.slug}`,
    set,
    setLabel: setLabel ?? group?.short,
    title: p.title,
    images: [...(p.img ? [{ src: p.img, alt: p.alt }] : []), ...(p.shots ?? [])],
    contain: p.contain,
    artBg: p.artBg,
    meta: [group?.title ?? "", p.year],
    role: p.role,
    chips: p.statuses.map((s) => ({ label: statusLabels[s], hot: s === "live", help: statusHelp[s] })),
    lines: [p.blurb],
    stacks: p.stacks,
    links,
    part: p.part,
    privateNote: links.length ? undefined : p.statuses.includes("offline") ? "No longer hosted, and the code is private." : "Private build, no public link.",
    aside: p.xkcd ? { href: `https://xkcd.com/${p.xkcd.num}/`, label: `Relevant xkcd: ${p.xkcd.title}` } : undefined,
    ask: links.length ? undefined : `mailto:${LINKS.email}?subject=${encodeURIComponent(`Walkthrough: ${p.title}`)}&body=${encodeURIComponent(`Hi Gerind,\n\nI saw ${p.title} on gerind.dev and would like a short walkthrough.\n\n`)}`,
  };
};

export const mediaCard = (item: MediaItem, shelf: { id: string; title: string; cta: string }): CardItem => {
  const kind = { books: "Book", movies: "Film", manga: "Manga", xkcd: "Comic" }[shelf.id] ?? shelf.title;
  const where = shelf.cta.replace(/^on /, "");
  const c = item.comic;
  return {
    id: slugify(item.title),
    href: `/media?p=${slugify(item.title)}`,
    set: shelf.id,
    setLabel: shelf.title,
    title: item.title,
    images: [{ src: item.img, alt: c ? `xkcd ${c.num}: ${item.title}` : `Cover of ${item.title}` }],
    portrait: !c,
    contain: Boolean(c),
    artBg: c ? "#ffffff" : undefined,
    meta: [c ? `${kind} #${c.num}` : kind, item.year],
    role: `By ${item.by}`,
    chips: [],
    lines: [],
    stacks: [],
    links: [{ href: item.link, label: `Open on ${where}`, primary: true, icon: "ri:arrow-right-up-line", srLabel: `${item.title} (opens in new tab)` }],
    credit: c ? "xkcd by Randall Munroe, CC BY-NC 2.5" : undefined,
  };
};

