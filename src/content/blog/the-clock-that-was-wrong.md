---
title: "The clock on my site was wrong, and nobody could tell"
description: "Re-parsing a localised date string is a classic way to get the wrong time, and a fallback made the bug invisible."
pubDate: 2026-10-07
---

My portfolio had a small card showing the local time. I live in Albania, but the code used the Italy time zone because it is the same offset and I had copied the idea from somewhere. The helper looked like this:

```ts
export function getCurrentTimeInItaly(): Date {
  const nowInItaly = new Date().toLocaleString("it-IT", {
    timeZone: "Europe/Rome",
  });
  return new Date(nowInItaly);
}
```

The idea: format "now" in the target zone as a string, then turn the string back into a `Date`, so the clock shows the right wall time. It is a trick you see a lot, and it is broken in two ways.

## Problem one: the string is not meant to be parsed

`toLocaleString("it-IT")` gives something like `07/10/2026, 14:30:00`. That is day/month/year. `new Date()` does not know about your locale and reads it as month/day/year, so you get July 10th, not October 7th. On the 13th of any month it becomes `13/10/2026`, which is not a valid date at all.

The hour and minute usually survive, which is why the clock looked fine.

## Problem two: a fallback hid it

The formatting function that consumed the result started with this:

```ts
const validDate = date instanceof Date && !isNaN(date.getTime()) ? date : new Date();
```

If parsing failed, it quietly used the visitor's own clock. So on the days the bug fired, the card displayed the visitor's local time with an Albanian label on it. Nothing crashed and nothing logged. I only found it by reading the code, not by seeing it fail.

## The fix is to not round-trip

A `Date` is a moment. The time zone only matters when you display it, so give the zone to the formatter and leave the date alone:

```ts
new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
  timeZone: "Europe/Tirane",
}).format(new Date());
```

I also switched the zone to `Europe/Tirane`, since that is where I actually am.

The general lesson I take from it: when a defensive fallback produces plausible output, it turns a loud bug into a silent one. I would rather the card showed nothing than show the wrong time.
