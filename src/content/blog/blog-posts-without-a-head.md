---
title: "My blog posts had no title tag"
description: "A markdown layout that Astro silently ignores in content collections, and how I found out my posts shipped with no head at all."
pubDate: 2026-10-07
---

I had one blog post and a frontmatter line at the top of it:

```yaml
layout: ../../layouts/LayoutBlogPost.astro
```

It looked right. The file was in `src/content/blog`, the layout existed, the build passed. I assumed the post was being wrapped in my layout, with the title, the description, the canonical link and the JSON-LD I had spent an evening on.

It wasn't. Astro only honours `layout` in frontmatter for markdown files inside `src/pages`. Inside a content collection the key is just ignored. No warning, no error. The post page I had written, `[...slug].astro`, did this:

```astro
const { Content } = await entry.render();
---
<Content />
```

So the output was the rendered markdown and nothing else. No `<html>`, no `<head>`, no `<title>`. Browsers are forgiving enough that the page still displayed, which is exactly why I never noticed. I only caught it when I opened the built HTML and grepped for `<title>`.

## The fix

The page needs to own the layout, and the collection entry should only supply data:

```astro
const { Content, remarkPluginFrontmatter } = await entry.render();
const { title, description, pubDate } = entry.data;
---
<Layout title={`${title} — Gerind Tershana`} description={description}>
  <article>
    <h1>{title}</h1>
    <Content />
  </article>
</Layout>
```

Two details that cost me a few minutes:

- Anything a remark plugin writes to frontmatter, like my reading-time plugin, is not in `entry.data`. It comes back as `remarkPluginFrontmatter` from `render()`.
- `pubDate: 11-11-2024` is not a date format. V8 happens to parse it, other engines may not. ISO (`2024-11-11`) removes the guesswork.

## What I do now

After any change to templates I check the built output rather than the dev server:

```sh
grep -o '<title>[^<]*</title>' dist/blog/*/index.html
```

It takes a second and it would have caught this on day one. Dev servers are forgiving about missing structure in a way search engines are not.
