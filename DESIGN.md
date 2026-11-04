---
name: Gerind Tershana
description: A calling card that unfolds into a pause menu. Ink, one accent, paper-white cut-out plates.
colors:
  ink: "#0a0a0d"
  ink-2: "#131318"
  ink-3: "#1f1f27"
  line: "#34343f"
  paper: "#f4f4f7"
  muted: "#b4b4c0"
  accent: "#e4112a"
  accent-text: "#ff5468"
  on-accent: "#ffffff"
typography:
  display:
    fontFamily: "Cabinet Grotesk, Satoshi, system-ui, sans-serif"
    fontSize: "clamp(2.9rem, 14.5vw, 8rem)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Cabinet Grotesk, Satoshi, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 4rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Cabinet Grotesk, Satoshi, system-ui, sans-serif"
    fontSize: "1.7rem"
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Satoshi, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Cabinet Grotesk, Satoshi, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "0.05em"
rounded:
  none: "0"
spacing:
  gutter: "clamp(1rem, 4vw, 3rem)"
  max: "76rem"
  section: "clamp(4rem, 9vw, 7rem)"
  touch: "2.75rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.7rem 0.85rem 1.4rem"
    height: "3rem"
  button-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.7rem 0.85rem 1.4rem"
    height: "3rem"
  button-paper-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
  button-ghost:
    backgroundColor: "{colors.ink-3}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.7rem 0.85rem 1.4rem"
    height: "3rem"
  button-ghost-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  strip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "0.35em 1.4em 0.35em 0.9em"
  strip-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
  nav-link:
    backgroundColor: "{colors.ink-2}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    padding: "0.55rem 0.9rem"
    height: "2.75rem"
  nav-link-active:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
  menu-item:
    backgroundColor: "{colors.ink-2}"
    textColor: "{colors.paper}"
    padding: "0.9rem 1.6rem 0.9rem 1.2rem"
  menu-item-active:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
  tab:
    backgroundColor: "{colors.ink-2}"
    textColor: "{colors.paper}"
    padding: "0.6rem 1.5rem 0.6rem 1.1rem"
    height: "3.25rem"
  tab-selected:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
  chip:
    backgroundColor: "{colors.ink-3}"
    textColor: "{colors.paper}"
    padding: "0.25em 0.8em 0.25em 0.6em"
  chip-live:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
  poster:
    backgroundColor: "{colors.ink-2}"
    textColor: "{colors.paper}"
    padding: "0.75rem 1.25rem 1.25rem"
  project-row:
    backgroundColor: "{colors.ink-2}"
    textColor: "{colors.paper}"
    padding: "1.1rem 1.75rem 1.1rem 1.25rem"
  career-plate:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "1.4rem 2rem 1.5rem 1.5rem"
  career-plate-now:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
  contact-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "clamp(1.5rem, 4vw, 3rem)"
    width: "54rem"
---

# Design System: Gerind Tershana

## Overview

**Creative North Star: "The Calling Card"**

The site is a calling card that unfolds into a pause menu. Everything is built from three materials: an ink-black field, one saturated accent (red by default, swappable by the visitor), and paper-white cut-out plates carrying heavy, skewed Cabinet Grotesk caps. Panels are never boxes; they are polygons with one cut end, a slanted edge or a torn bottom, laid at a few degrees off true so the page reads like a collage of slapped-down cards rather than a grid.

Density is high at the top and loud by intent: one giant slanted name over an accent slash, a menu of oversized destinations, a rotated ticker. Below the fold the rhythm alternates full-bleed fields (ink, paper, accent) joined by diagonal slash seams. Halftone dot fields soften the corners of hard plates. Motion is short, fast-out and directional: things slam in from the left and cut in through slanted masks.

The world is Persona 5-inspired but owns its own vocabulary. It reproduces no game logos, characters, artwork or radial rays.

**Key Characteristics:**
- Ink, one accent, paper. The accent is a token, never a hard-coded red.
- Every plate is a clip-path polygon with a cut or slanted edge; corner radius is always zero.
- Heavy uppercase display caps, skewed at the system slant (-7deg).
- White label strips with ink text, cut on the right end.
- Halftone dot fields masked to fade from one corner.
- Directional motion on one easing curve (cubic-bezier(0.16, 1, 0.3, 1)).

## Colors

A three-material palette: near-black ink in three tonal steps, cool paper white, and a single accent field the visitor can re-theme.

### Primary
- **Calling-Card Red** (accent): the accent field. Hero shard, name slash, primary buttons, active menu entry, active nav, selected tab, current career plate, accent sections, load wipe, header scroll bar, selection, scrollbar thumb.
- **Signal Red Text** (accent-text): the accent when it must be read as text or a thin mark on ink (counts, years, text links, menu triangles). Lighter than the field so it passes AA on ink.
- **On-Accent White** (on-accent): text and glyphs set on the accent field.

### Neutral
- **Ink** (ink): page ground, header, dark plates on paper sections.
- **Ink Raised** (ink-2): resting menu items, nav links, tabs, posters, project rows, skill plates.
- **Ink Plate** (ink-3): ghost buttons, chips, kbd keys, hover state of tabs and rows, image wells.
- **Rule Line** (line): hairline dividers (light use).
- **Paper** (paper): cut-out plates, strips, section titles, paper sections, contact card, focus ring on ink.
- **Muted** (muted): secondary copy, hints, footer text, section ledes on ink.

### Theme and mode variants
Accent is themed through `data-theme` on `<html>`; every component reads `--accent`, `--accent-text`, `--on-accent`, never a literal.

| Theme | accent | accent-text (dark) | on-accent | accent-text (light mode) |
|---|---|---|---|---|
| red (default) | #e4112a | #ff5468 | #ffffff | #c40f22 |
| yellow | #ffd400 | #ffd400 | #0a0a0d | #7a5e00 |
| blue | #1f6bff | #6aa2ff | #ffffff | #1a54d6 |
| purple | #8b3cf7 | #b98aff | #ffffff | #7226d9 |
| green | #1fbf78 | #3fe09a | #0a0a0d | #0c7a4a |
| white | #f4f4f7 | #f4f4f7 | #0a0a0d | accent and text #0a0a0d, on-accent #f4f4f7 |

`data-mode="light"` inverts the neutrals rather than restyling components: ink #f4f4f7, ink-2 #e8e8ee, ink-3 #d9d9e2, line #c3c3cf, paper #0a0a0d, muted #4a4a57. Components stay token-bound, so "paper plates on ink" become "ink plates on paper" automatically.

### Named Rules
**The One Accent Rule.** There is exactly one chromatic voice per theme. Secondary emphasis is carried by paper-vs-ink inversion, not by a second hue.

**The Two Accents Rule.** Use `accent` for fields and fills, `accent-text` for anything read as text or a thin mark on ink. Never set small text in the raw field accent on ink.

**The Inversion Rule.** On a paper section, plates swap roles: section titles become ink-on-paper inverted (ink plate, paper text), poster hover shards turn ink. Do not introduce new colors for paper contexts.

## Typography

**Display Font:** Cabinet Grotesk variable (100-900), self-hosted woff2, fallback Satoshi, system-ui
**Body Font:** Satoshi variable (300-900), self-hosted woff2, fallback system-ui

**Character:** Cabinet Grotesk at 900 in uppercase does the shouting, skewed and tight; Satoshi carries calm, readable prose underneath. Both are self-hosted with `font-display: swap`.

### Hierarchy
- **Display** (900, clamp(2.9rem, 14.5vw, 8rem), container-capped to min(7.5rem, 15-17cqi), line-height 0.92, -0.035em, uppercase): the hero name only, set as two skewed plates. Inner-page titles use the same voice at clamp(3rem, 11vw, 7rem); the 404 title goes to clamp(5rem, 24vw, 14rem).
- **Headline** (900, clamp(2.25rem, 6vw, 4rem), line-height 1, -0.02em, uppercase): section titles on paper/ink plates; contact headline clamp(2.2rem, 7vw, 4.6rem); menu items clamp(1.9rem, 5.2vw, 3.6rem).
- **Title** (900, 1.7rem, line-height 1.05, uppercase): poster titles (feature: clamp(2.2rem, 3.4vw, 3.2rem)), row titles 1.45rem, career titles clamp(1.3rem, 2.6vw, 1.7rem).
- **Body** (Satoshi 400, 1.0625rem, line-height 1.6): prose, with `text-wrap: pretty`. Measure capped at 28-44rem / 40-62ch. Ledes run 1.15-1.25rem.
- **Label** (Cabinet 800-900, 0.75-1.05rem, 0.04-0.08em tracking, uppercase): buttons, nav, strips, chips, tabs, HUD, kbd. Numbers in counts, years and dates use `font-variant-numeric: tabular-nums`.

### Named Rules
**The Caps Plate Rule.** Display type is uppercase, weight 800-900, and sits on or beside a plate. Lowercase display headings do not exist in this system.

**The Slant Rule.** Display plates skew at the system slant (`--slant: -7deg`). Larger skews (-10 to -20deg) are reserved for motion start states and small accent marks.

## Layout

A centered column (`--max: 76rem`) with fluid gutters (`clamp(1rem, 4vw, 3rem)`) inside full-bleed section fields. Sections pad at `clamp(4rem, 9vw, 7rem)`. Slashed sections clip top and bottom on a 3vw diagonal and overlap their neighbors by -3vw so seams read as cuts, not bands. Inner pages start at 7rem top padding to clear the fixed header; `scroll-padding-top: 5rem`.

Grids:
- Hero: single column on phones; at 62rem, 1.25fr / 0.75fr with the menu spanning beneath. On phones the portrait moves after the menu (order 3).
- Menu: list 1.4fr / sticky preview stage 1fr at 62rem; below that the stage collapses to a compact teaser without thumbnail.
- Posters: auto-fill minmax(20rem, 1fr), dense; at 62rem a fixed 3 columns, feature posters span 2 (and 2 rows on home).
- Project rows: stacked; at 48rem, 4.5rem year / 1fr main / 16rem side.
- Career plates: stacked; at 40rem, 11.5rem date / 1fr. Alternate plates indent by clamp(0rem, 6vw, 5rem) and mirror their cut.

Breakpoints actually used: 30rem (hide HUD, compact skills), 40rem (compact nav, hide extra nav links), 48rem (row grid), 52rem (hide HUD time), 62rem (two-column layouts, sticky stage). Touch targets are at least 2.75rem tall throughout. `@media (hover: none)` hides keyboard hints.

## Elevation & Depth

Depth comes from layering and rotation, not shadow. Plates overlap, sit 1-3deg off axis, and stack paper over ink over accent. Halftone dot fields (radial-gradient dots on an 11-13px grid, masked by a corner-to-corner linear gradient) add texture behind plates.

### Shadow Vocabulary
- **Poster lift** (`box-shadow: 0 18px 40px -24px rgb(0 0 0 / 0.55)`): home posters on the paper section only, to lift dark plates off light paper.
- **Focus halo** (`box-shadow: 0 0 0 5px var(--ink)`): the contrasting collar of the focus ring. See Components.

### Named Rules
**The Collage Rule.** Depth is overlap, tilt and inversion. Resting surfaces carry no offset shadows; the poster's accent shard appears behind it only on hover/focus as a state response.

## Shapes

Zero radius everywhere. Form is defined by clip-path polygons:
- **Cut end:** strips, chips, section titles, brand, menu items, rows, career plates. Rectangle with the bottom-right corner pulled in (0.4em to 1.2rem).
- **Parallelogram:** buttons, nav links, tabs, kbd, year tags. Both short sides slanted (0.3em to 0.6rem).
- **Dog-ear:** theme panel, shortcuts dialog, menu preview. Bottom-left corner cut on a diagonal.
- **Torn edge:** poster art and the contact card have multi-point jagged bottom edges.
- **Slash seam:** slashed sections, the header's bottom edge, the hero accent shard.
- **Skewed tokens:** small squares (theme dot, swatches, pulse, ticker separators) skewed -12 to -20deg instead of circles.

**The No-Circle Rule.** Nothing is round except halftone dots. Status markers, separators and swatches are skewed squares.

## Components

### Buttons
Slanted parallelograms that lean forward on hover.
- **Shape:** parallelogram clip, 0.6rem slant; min-height 3rem; label type 1.05rem.
- **Primary:** accent field, on-accent text.
- **Paper:** paper plate, ink text; hovers to accent.
- **Ghost:** ink-3 plate; hovers to paper.
- **Hover / Active:** `translateX(4px) skewX(-4deg)` on hover, `translateX(2px) scale(0.98)` on press, 0.25s on the system ease.
- **Text link:** accent-text uppercase label with an arrow icon; a 3px bottom border appears and the gap widens on hover. The stretch variant makes the whole poster clickable.

### Strips and Chips
- **Strip:** paper plate with a cut right end, ink label caps. Used for role lines, career dates, education dates and fact-sheet terms. `strip--accent` for poster roles.
- **Chip:** small ink-3 cut-end plate for project status; `live` takes the accent.

### Navigation (header)
Fixed ink bar with a slanted bottom edge. An accent bar along that edge scales in from the left once scrolled; the header hides on scroll down (translateY(-110%)). The left cluster holds the brand plate (paper, hovers to accent) and the HUD date block; on the right, parallelogram nav links on ink-2 turn to accent on hover and on `aria-current="page"`. Under 40rem, extra links hide and padding tightens.

### HUD Date Block
A skewed run of three plates: weekday on accent, date on paper, time (Europe/Tirane) as paper text with a muted zone label. Tabular numerals. Time hides under 52rem; the whole block hides under 30rem.

### Theme Picker
A `<details>` nav control with a skewed accent dot. Its paper dog-ear panel holds skewed 2.5rem swatches (3px ink border; the pressed one gets a paper/ink inset double ring) and dark/light segmented buttons (parallelogram, 2px ink border, pressed state filled ink).

### Menu and Preview Plate (signature)
The pause menu. Oversized cut-end entries on ink-2, each led by a CSS triangle in accent-text. Hover, focus or `.is-active` turns an entry to accent and pushes it `translateX(0.9rem) skewX(-3deg)`. Arrow keys move focus. The paired preview plate is a rotated (1deg) paper dog-ear with a thumbnail clipped on a slanted bottom, a heading, a line of copy, an accent meta strip, and a huge outlined ghost word behind (2px stroke at 16% ink). On change, the preview cuts in from the travel direction: translate 2.5rem, rotate 3deg, clip from a zero-width polygon, 380ms. The ghost word slides in over 520ms.

### Tabs (projects)
Parallelogram tabs on ink-2 with a skewed ink count badge. Selected: accent, lifted `translateY(-3px) skewX(-6deg)`, count badge inverts to paper.

### Poster / Feature Poster
The project card. An ink-2 column with art on top. The art has a torn bottom edge, a halftone corner and a parallelogram year tag; projects without an image show a type plate (accent field with a skewed ink initial plate). The body holds the title, role strip, blurb, status chips, stack icons and text links. Hover/focus lifts and tilts the poster (`translateY(-4px) rotate(-0.6deg)`), the image scales to 1.04, and an accent shard slides out behind it (ink on paper sections). Feature posters span two columns at 16/8.2 art and take a larger title.

### Project Row
Compact cut-end ink-2 plate for work without pictures: accent-text year, title with chips, blurb, side links. Hover/focus: ink-3 and `translateX(0.5rem)`.

### Career Plates
Ink plates with a cut right end. The date sits on a strip. The org name inside the title sits on a skewed accent highlight. Bullets are small accent-text triangles. The current role (`--now`) is an accent plate with ink highlights. Alternate plates indent and mirror the cut to the left. Education plates tilt ±0.6deg alternately.

### Contact Card
A paper calling card rotated -1.2deg with a torn bottom edge and an accent halftone corner. The skewed headline carries one accent `mark`. Email links are large display type with a 4px accent underline that fills to accent on hover. Below sit CV buttons and uppercase social links with a 3px accent underline on hover.

### Ticker
A paper band rotated -2deg (scaled 1.06) between 4px accent borders, scrolling uppercase display caps separated by skewed accent squares. 38s linear loop; pauses on hover.

### Dialogs
The shortcuts dialog is a paper dog-ear with parallelogram ink kbd keys over a 70% black backdrop. The photo lightbox is an ink panel over an 82% black backdrop.

### Focus
- Default: 3px paper outline at 2px offset with a 5px ink collar (`box-shadow: 0 0 0 5px var(--ink)`).
- On paper contexts (paper sections, contact card, theme panel, dialog, strips) the colors swap: ink outline, paper collar.
- Clipped controls (buttons, nav, brand, menu items, tabs, segments, group links, swatches) would lose an outer outline to clip-path, so they draw a 3px `currentColor` outline inset at -6px.

**The Inset Ring Rule.** Any new clip-path control must get the inset currentColor ring; an outer outline on a clipped element is invisible.

### Motion grammar
One curve for everything: `--ease: cubic-bezier(0.16, 1, 0.3, 1)`.
- **Load wipe:** a full-screen accent plate clips away to the right over 0.85s while an ink diagonal slides off. This is the one authored entrance. It is skipped when view transitions handle navigation.
- **Slam:** first-viewport elements enter from `translateX(-3rem) skewX(-14deg)` at 0 opacity, 0.7s, staggered 70ms by `--i`.
- **Scroll reveal:** `.js .reveal` content starts offset `translateX(-2.5rem) skewX(-10deg)` behind a slanted sliver mask and opens to a full slanted polygon over 0.7s, staggered 70ms. Alternate career plates enter from the right. Content is visible without JS.
- **Preview cut-in:** see Menu.
- **View transitions:** cross-document. The old page fades to 0.4 and shifts -4% (0.32s). The new page cuts in through a sweeping slanted polygon (0.55s). The clicked menu label morphs into the next page title (`page-title`). Browsers without native support get the accent `wipe-in` sweep (0.32s) before navigating.
- **Micro:** click shards (three accent slashes, 450ms), portrait swap flash and stamp, a halftone drift loop, the availability ping, the active menu arrow nudge.
- **Reduced motion:** wipes, shards, slams, the ticker, drift, the nudge, the ping and parallax are off. Reveals become a 0.3s opacity fade with no clip or transform. Transitions collapse to 0.01ms. The header stops animating. View transitions only register under `no-preference`.

## Do's and Don'ts

### Do:
- **Do** read every color through `--ink*`, `--paper`, `--muted`, `--accent`, `--accent-text`, `--on-accent` so all six themes and light mode keep working.
- **Do** cut every new plate with a clip-path polygon (cut end, parallelogram, dog-ear or torn edge) and keep radius at 0.
- **Do** set display text in Cabinet Grotesk 900 uppercase on a plate, skewed at `--slant` (-7deg).
- **Do** use `accent-text`, not `accent`, for small accent text on ink.
- **Do** give clipped controls the inset 3px currentColor focus ring, and keep touch targets at 2.75rem or taller.
- **Do** animate on `--ease` with a directional entry (from the left, through a slanted mask), and provide the reduced-motion fallback.
- **Do** use halftone dot fields masked from a corner as the texture layer.

### Don't:
- **Don't** add a second accent hue; emphasis comes from paper/ink inversion.
- **Don't** round corners or use circles for markers; use skewed squares.
- **Don't** put resting offset shadows under plates; depth is overlap and tilt.
- **Don't** reproduce Persona 5 logos, characters, artwork or radial ray backgrounds.
- **Don't** gate content behind motion: reveals must leave content visible without JS and under reduced motion.
- **Don't** set display headings in lowercase or in the body face.
