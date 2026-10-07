import type { ImageMetadata } from "astro";

/**
 * Drop photos into src/assets/photos/ (jpg, png or webp). Astro resizes and
 * converts them at build time. Describe them below, keyed by file name; any
 * field you skip falls back to something sensible. With no photos in the
 * folder, the /photos page, the home teaser and the nav link all disappear.
 */
type PhotoMeta = {
  title?: string;
  /** What is in the picture, for screen readers and search. */
  alt?: string;
  place?: string;
  /** ISO date, e.g. "2026-09-14". Newest first. */
  date?: string;
  camera?: string;
};

const meta: Record<string, PhotoMeta> = {
  // "tirana-sunrise.jpg": { title: "Sunrise over Tirana", alt: "Orange sunrise behind apartment blocks", place: "Tirana", date: "2026-09-14", camera: "Sony A7 IV" },
};

const files = import.meta.glob<{ default: ImageMetadata }>("/src/assets/photos/*.{jpg,jpeg,JPG,JPEG,png,webp}", { eager: true });

export type Photo = PhotoMeta & { file: string; src: ImageMetadata; title: string; alt: string };

export const photos: Photo[] = Object.entries(files)
  .map(([path, mod]) => {
    const file = path.split("/").pop()!;
    const m = meta[file] ?? {};
    const fallback = file.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ");
    return { ...m, file, src: mod.default, title: m.title ?? fallback, alt: m.alt ?? m.title ?? `Photograph by Gerind Tershana (${fallback})` };
  })
  .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? "") || a.file.localeCompare(b.file));

export const hasPhotos = photos.length > 0;
