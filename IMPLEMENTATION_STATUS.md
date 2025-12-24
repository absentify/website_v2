# absentify.com Landingpage - Implementierungsstand

## Projekt-Übersicht
**Ziel:** Pixel-perfekter Nachbau von absentify.com mit Next.js 14 + Tailwind CSS
**Workflow:** Claude Code mit Chrome Extension für visuellen Vergleich

---

## Aktueller Stand

### Phase 1: Foundation ✅ ABGESCHLOSSEN

| Task | Status | Datei |
|------|--------|-------|
| Tailwind Config | ✅ | `tailwind.config.ts` |
| globals.css | ✅ | `src/app/globals.css` |
| Types | ✅ | `src/types.ts` |
| UI: Button | ✅ | `src/components/ui/Button.tsx` |
| UI: Badge | ✅ | `src/components/ui/Badge.tsx` |
| UI: Card | ✅ | `src/components/ui/Card.tsx` |
| UI: Index | ✅ | `src/components/ui/index.ts` |

### Phase 2: Navigation + Hero ⏳ NÄCHSTER SCHRITT

| Task | Status |
|------|--------|
| Logo Komponente | ⏳ Pending |
| Navbar mit Dropdowns | ⏳ Pending |
| Mobile Menu | ⏳ Pending |
| Hero Section | ⏳ Pending |
| Trust Badges | ⏳ Pending |

### Phase 3-7: Restliche Sektionen ⏳

- Logo Marquee
- Testimonial Section
- Security Section
- Feature Cards
- Product Tabs
- Comparison Table
- Why Absentify
- Integrations Grid
- Onboarding Guide
- Testimonial Carousel
- Security Badges
- FAQ Accordion
- Final CTA
- Footer

---

## Was bereits gemacht wurde

### 1. Tailwind Config (`tailwind.config.ts`)
- Fluid Typography (display-xl bis body-sm)
- Custom Spacing (nav-height, section-sm/md/lg)
- Box Shadows (card, card-hover, nav)
- Animationen (marquee, fade-in, slide-up, slide-down)
- Custom Colors (primary, secondary, muted, border, card)

### 2. CSS Variables (`src/app/globals.css`)
- absentify Farbpalette:
  - Primary: #2563eb (Blau)
  - Primary-hover: #1d4ed8
  - Foreground: #1a1a2e
  - Muted: #f8fafc
  - Border: #e2e8f0
- Button Utility Classes (.btn, .btn-primary, etc.)
- Section Spacing (.section-padding)
- Card Hover Effect (.card-hover)

### 3. Types (`src/types.ts`)
Alle Interfaces für:
- Navigation (INavItem, INavDropdownItem, INavCTA)
- Hero (IHero, ICTAButton, ITrustBadge)
- Client Logos (IClientLogo)
- Feature Cards (IFeatureCard)
- Product Tabs (IProductTab)
- Comparison (IComparisonRow, ICompetitor)
- Differentiators (IDifferentiator)
- Integrations (IIntegration)
- Onboarding (IOnboardingStep)
- Testimonials (ITestimonial)
- Security Badges (ISecurityBadge)
- FAQ (IFAQ)
- Footer (IFooterColumn, IFooterLink)

### 4. UI Komponenten
- **Button.tsx**: Primary/Secondary/Outline/Ghost, Sizes sm/md/lg
- **Badge.tsx**: Default/Primary/Secondary/Success/Warning
- **Card.tsx**: Mit optionalem Hover-Effekt und Padding-Varianten

---

## Nächste Schritte für neue Session

### 1. Dev Server starten
```bash
cd /Users/marc/Dev/website_v2
npm run dev
```

### 2. Chrome Extension aktivieren
```
/chrome
```

### 3. Navigation bauen
Erstelle in `src/components/navigation/`:
- `Logo.tsx`
- `Navbar.tsx`
- `NavDropdown.tsx`
- `MobileMenu.tsx`

### 4. Hero Section bauen
Datei: `src/components/sections/Hero.tsx`
- Headline + Subheadline
- CTA Buttons
- Product Screenshots
- Trust Badges

### 5. Visueller Vergleich
- Tab 1: https://absentify.com
- Tab 2: http://localhost:3000
- Vergleichen und iterieren

---

## Komponenten-Struktur (Ziel)

```
src/components/
├── ui/
│   ├── Button.tsx ✅
│   ├── Badge.tsx ✅
│   ├── Card.tsx ✅
│   ├── Accordion.tsx
│   ├── Tabs.tsx
│   └── Marquee.tsx
├── navigation/
│   ├── Logo.tsx
│   ├── Navbar.tsx
│   ├── NavDropdown.tsx
│   └── MobileMenu.tsx
├── sections/
│   ├── Hero.tsx
│   ├── TrustBadges.tsx
│   ├── LogoMarquee.tsx
│   ├── Testimonial.tsx
│   ├── SecuritySection.tsx
│   ├── FeatureCards.tsx
│   ├── ProductTabs.tsx
│   ├── ComparisonTable.tsx
│   ├── WhyAbsentify.tsx
│   ├── Integrations.tsx
│   ├── OnboardingGuide.tsx
│   ├── TestimonialCarousel.tsx
│   ├── SecurityBadges.tsx
│   ├── FAQ.tsx
│   ├── FinalCTA.tsx
│   └── Footer.tsx
└── layout/
    ├── Container.tsx (existiert)
    └── Section.tsx (existiert)
```

---

## Daten-Dateien (zu erstellen)

```
src/data/
├── navigation.ts     # Nav Items + Dropdowns
├── hero.ts           # (anpassen)
├── clientLogos.ts    # Marquee Logos
├── featureCards.ts
├── productTabs.ts
├── comparison.ts
├── differentiators.ts
├── integrations.ts
├── onboarding.ts
├── testimonials.ts   # (erweitern)
├── securityBadges.ts
├── faq.ts            # (erweitern)
└── footer.ts         # (anpassen)
```

---

## Wichtige Befehle

```bash
# Dev Server
npm run dev

# Chrome aktivieren (in Claude Code Session)
/chrome

# Build testen
npm run build
```

---

## Breakpoints für Testing

| Breakpoint | Breite | Gerät |
|------------|--------|-------|
| Mobile | 375px | iPhone |
| Tablet | 768px | iPad |
| Desktop | 1280px | Laptop |
| Large | 1536px | Monitor |

---

## Plan-Datei
Der vollständige Plan liegt auch unter:
`/Users/marc/.claude/plans/shimmering-sniffing-puppy.md`
