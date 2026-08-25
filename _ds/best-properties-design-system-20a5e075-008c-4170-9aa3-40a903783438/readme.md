# Best Properties — Design System

Premium real-estate consultancy brand: deep navy foundation, warm gold typography, selective red/orange accent lighting. Everything here is derived from one source — the **Best Properties Brand Design System** written brief supplied in chat (August 2026). Its verbatim rules (palette, type scale, spacing, elevation, component specs, do's and don'ts) are the ground truth for this system.

## Sources

| Source | Access | Notes |
| --- | --- | --- |
| Brand brief (pasted text, chat) | Provided in this project's first message | Full spec: identity, palette, type, components, collateral, voice |
| Logo file | **Not supplied** | No logo, icon set, photography or font binaries were provided |
| Codebase / Figma / decks | None given | Nothing to import; components are authored from the brief |

**No logo was drawn or reconstructed.** Wherever the mark belongs, the wordmark is set in Montserrat 800 with letter-spacing, and print artwork holds the position with an outlined "LOGO HERE" box. Replace both when the real file arrives.

## Company & product context

Best Properties is a property consultancy in Nanded City, Pune (Shop No. G-97, Ground Floor, Destination Center-1, Nanded City, Pune-411068), operating as **DREAM HOMES CONSULTANT** under the tagline **TRUSTED REAL ESTATE SOLUTIONS**. Two named consultants front the business — Mr. Prashant Kadam (7070535343) and Mr. Nanasaheb Bhuse (9623707172), reachable at bestproperties191@gmail.com. Contact detail is a primary trust element, not a footer afterthought.

Two surfaces are represented here:

1. **Marketing website** — home, listings, property detail, contact (`ui_kits/website/`).
2. **Print & social collateral** — business card (the composition described in the brief), Instagram square, story (`ui_kits/collateral/`).

## Content fundamentals

- **Tone:** professional, confident, helpful, straightforward. Premium without flourish. No exaggerated claims, no hard-sell urgency, nothing casual.
- **Person:** second person for the reader ("Find Your Dream Home", "Your Property Journey Starts Here"), first-person plural for the firm ("We work with a small number of clients at a time"). Never "I".
- **Casing:** uppercase with generous tracking for brand statements and eyebrows — `DREAM HOMES CONSULTANT`, `TRUSTED REAL ESTATE SOLUTIONS`, `PREMIUM PROPERTIES. TRUSTED GUIDANCE.` Headlines are title case in sentence rhythm: "Find a Place You'll Love to Call Home". Labels and metadata are uppercase 11–12px. Body copy is sentence case.
- **Approved phrases:** Find Your Dream Home · Trusted Real Estate Solutions · Premium Properties. Trusted Guidance. · Your Property Journey Starts Here · Helping You Find the Right Address.
- **Length:** short. Headlines under nine words; supporting paragraphs two to three lines. One idea per creative — split extensive property detail across multiple graphics rather than crowding one.
- **Numbers:** prices and phone numbers are written plainly and set bold ("Rs 1.85 Cr", "7070535343"). Never invent statistics; the system's `StatBlock` ships with em-dash placeholders for exactly this reason.
- **Emoji:** never. Not in UI, not in social copy.
- **CTAs:** verb-first and specific — "Find Your Dream Home", "Book a site visit", "Request a callback", "Talk to a consultant".

## Visual foundations

**Colour.** Deep navy `#071225` is the dominant surface; `#0B1730` panels sit on top of it for section rhythm (max two background colours per layout). Gold `#F4C44E` carries headings, prices-adjacent labels, icons and the primary CTA; `#FFD66A` is the hover-lighter step; `#D8B45A` is muted/secondary text. Warm white `#FFF8E7` takes all long-form body copy — gold is never used for paragraphs. Red `#E53935` appears on phone icons and genuine urgency badges only; orange `#FF7A2F` exists to make the gradient warm and to power the single glow value. The gradient `linear-gradient(90deg,#E53935,#FF7A2F 45%,#F4C44E)` is used only on thin 2px rules and short accent lines, typically 64–140px wide, never as a background wash.

**Type.** Montserrat throughout (400/500/600/700/800), fallback Arial, Helvetica, sans-serif. Display 48/800, H1 40/800, H2 32/700, H3 24/700, H4 20/600, body 16/400, small 14/400, caption 12/500, contact 18/700, price 28/800. Uppercase labels carry `.12em`; eyebrows `.22em`; the wordmark `.14–.16em`. Line height 1.2 on headings, 1.6 on body.

**Layout.** 1200px container, 32px desktop side padding (24 tablet, 16–20 mobile). 4px base spacing unit; major sections 80–120px apart, subsections 48–64, content groups 24–32. Generous negative space and consistent left alignment do most of the compositional work. Sticky enquiry rails on detail views; a fixed 72px header.

**Backgrounds & imagery.** Flat navy — no textures, no patterns, no illustration. Real property photography is the only imagery: modern villas, premium apartments, independent houses, exteriors, interiors, surrounding views, warm natural light and believable proportions. Any text over a photo sits on the `--overlay-navy` top-to-bottom navy gradient. **No photography ships with this system**; every image area in the kits is a labelled placeholder saying what belongs there.

**Borders, cards, elevation.** Cards: 12px radius, 24px padding, 1px `rgba(244,196,78,.18)` border, `0 2px 8px rgba(0,0,0,.18)`. Clickable cards brighten their border to solid gold on hover; nothing scales or lifts. Level 2 (`0 8px 24px`) for floating panels, level 3 (`0 16px 40px`) for modals only. Radii stay architectural: 4px small controls, 6px buttons, 8px inputs, 12px cards, 16px feature panels, pill for badges. Glow (`0 0 16px rgba(255,122,47,.35)`) is reserved for gradient rules and active highlights — never on cards or text.

**Motion & states.** Restrained: 150–200ms ease colour and border transitions, nothing else. No bounces, parallax, entrance animations or scroll-driven reveals. Hover lightens (gold → light gold) or fills an outline with gold and flips the label to navy. Active/press states darken to base gold with no scaling. Focus turns the input border gold. Disabled drops to 45% opacity.

**Transparency & blur.** Almost none. Input fills are `rgba(255,248,231,.04)`, tag fills `.05`, modal scrim `rgba(7,18,37,.72)`. No backdrop blur, no glassmorphism.

## Iconography

- **Set:** Lucide (line, 2px stroke, rounded caps) loaded from `unpkg.com/lucide-static@0.441.0`. **This is a substitution** — the brief specifies "simple, modern line icons" but supplied no icon files. Lucide matches the described weight and restraint; swap if you have a house set.
- **Mechanism:** the `Icon` component paints the SVG through a CSS mask so the glyph inherits any brand colour. No icon font, no sprite, no inline hand-drawn SVG.
- **Colour rules:** phone = `--accent-red` (the only strong contrast in the system, and the reason it reads); mail, map-pin, property features and section icons = `--brand-gold`; utility/nav icons = `--warm-white`. Never multi-hue icon sets.
- **Common glyphs:** phone, mail, map-pin, bed-double, ruler, building-2, home, key-round, trees, car, shield-check, search, chevron-down, arrow-right, heart, share-2.
- **Emoji and unicode symbols are never used as icons.** The one non-icon glyph in use is the `•` separator in metadata labels ("Villa • Nanded City").

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | Global entry point — `@import` list only |
| `tokens/` | `fonts.css` (Montserrat via Google Fonts), `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `base.css` |
| `guidelines/` | 19 foundation specimen cards: Colors, Type, Spacing, Brand |
| `components/` | Reusable primitives, grouped below |
| `ui_kits/website/` | Marketing site click-through — see its README |
| `ui_kits/collateral/` | Business card + social creatives — see its README |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent-skill entry point |

### Components

- **core** — `Button`, `IconButton`, `Icon`, `Card`, `Badge`, `Tag`, `Divider`
- **forms** — `Input`, `Select`, `Checkbox`, `Radio`, `Switch`
- **navigation** — `Navbar`, `Tabs`
- **property** — `PropertyCard`, `ContactRow`, `SectionHeading`, `StatBlock`
- **feedback** — `Dialog`, `Toast`, `Tooltip`

Each directory holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and one `@dsCard` HTML showing its states.

**Intentional additions** (no source component inventory existed — the brief describes components in prose):
- `Icon` — wrapper for the Lucide glyph set, so colour rules are enforced in one place.
- `ContactRow` — the brief treats contact detail as a first-class brand element; this encodes the red-phone / gold-mail rules.
- `SectionHeading` — encodes the prescribed eyebrow + heading + gradient-rule hierarchy.
- `StatBlock` — trust figures for about/hero strips; ships with placeholder values.

### Known gaps

- No logo, photography, or font binaries. Montserrat loads from Google Fonts per the brief; no local `@font-face` binaries exist, so the compiler reports zero fonts.
- Property names, prices, localities and service copy in the UI kits are illustrative. Contact details, tagline, service line and address are real.
