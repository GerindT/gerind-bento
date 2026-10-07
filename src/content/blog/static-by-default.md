---
title: "Why this site is static now"
description: "I had a portfolio on SSR with an edge middleware flag and no middleware. Notes on what I removed and why."
pubDate: 2026-10-07
---

For a while this site was configured like this:

```js
output: "server",
adapter: netlify({ edgeMiddleware: true }),
```

That means every request to the home page ran on a server, and an edge function was switched on to run middleware. I had no middleware. The only dynamic thing on the whole site is a clock, and that runs in the browser.

I could not remember choosing it on purpose. The adapter was probably there from a starter, and the blog route had `export const prerender = true` added later when something misbehaved. Two settings quietly disagreeing with each other.

## What changed

```js
output: "static",
```

and the adapter import is gone. Every page is HTML in `dist/` before it is deployed. The consequences are boring in the best way:

- A cached file from a CDN instead of a function invocation on each visit.
- No cold start on a page whose whole job is to load fast for a recruiter on a phone.
- One less thing to go wrong on deploy.

The `_redirects` file in `public/` keeps working, since Netlify reads it for static sites too.

## When I would go back

If I added something per-request, like a contact form that writes to a database, or pages that depend on cookies, I would reach for a server again. Even then I would keep the portfolio pages static and add a single endpoint rather than flipping the whole site.

The rule I am trying to follow: start static and make each page earn its way to dynamic. It is much easier than doing it the other way round and wondering why a personal site needs a runtime.
