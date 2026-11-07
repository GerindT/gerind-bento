import type { APIRoute } from "astro";
import { SITE, LINKS } from "../lib/constants";
import { jobs, education, languages } from "../lib/career";
import { groups, projectsByGroup, series, statusLabels } from "../lib/projects";

// /llms.txt: a plain-text summary for AI assistants and answer engines (llmstxt.org).
export const GET: APIRoute = () => {
  const link = (p: { site?: string; github?: string }) =>
    [p.site && `site: ${p.site}`, p.github && `code: ${p.github}`].filter(Boolean).join(", ");

  const projectLines = projectsByGroup
    .map((g) => {
      const all = [...g.pictured, ...g.listed];
      const lines = all.map(
        (p) => `- [${p.title}](${SITE.url}/projects/${p.slug}) (${p.year}${p.role ? `, ${p.role}` : ""}; ${p.statuses.map((s) => statusLabels[s]).join(", ")}): ${p.blurb}${link(p) ? ` (${link(p)})` : ""}`
      );
      const side = g.side.length
        ? [`\n### ${series["project-a-day"].title}\n\n${series["project-a-day"].note}\n`, ...g.side.map((p) => `- [${p.title}](${SITE.url}/projects/${p.slug}) (${p.year}): ${p.blurb}${link(p) ? ` (${link(p)})` : ""}`)]
        : [];
      return `## Projects: ${g.title}\n\n${g.note}\n\n${[...lines, ...side].join("\n")}`;
    })
    .join("\n\n");

  const body = `# ${SITE.name}

> ${SITE.name} is a software engineer in Tirana, Albania: ${jobs[0].role} at ${jobs[0].org}, previously a developer at Detag. 5+ years building scalable web applications, high-concurrency APIs and CI/CD pipelines with Go, Node.js, Laravel, Vue/Nuxt and React. Open to freelance projects and part-time roles.

- Website: ${SITE.url}
- Email: ${LINKS.email}
- LinkedIn: ${LINKS.linkedin}
- GitHub: ${LINKS.github}
- CV (English, PDF): ${SITE.url}/Gerind_Tershana_EN.pdf
- CV (Albanian, PDF): ${SITE.url}/Gerind_Tershana_AL.pdf

## Pages

- [Home](${SITE.url}/): profile, selected work and contact
- [Projects](${SITE.url}/projects): all projects, grouped by where they were built
- [About](${SITE.url}/about): career, education, tools and countries visited
- [Media](${SITE.url}/media): favourite books, films and manga

## Experience

${jobs.map((j) => `- ${j.role}, ${j.org} (${j.dates})${j.points.length ? `: ${j.points.join(" ")}` : ""}`).join("\n")}

## Education and community

${education.map((e) => `- ${e.title}, ${e.where} (${e.dates})${e.note ? `. ${e.note}` : ""}`).join("\n")}

Languages: ${languages.map((l) => `${l.name} (${l.level})`).join(", ")}.

${projectLines}

Groups: ${groups.map((g) => g.title).join(", ")}. Government and client work is linked only where the product is already public.
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
