# Úspora FVE — Technical Specification

## Component Inventory

### shadcn/ui Components (built-in)
| Component | Usage |
|---|---|
| `button` | CTA buttons throughout |
| `input` | Contact form fields |
| `textarea` | Contact form message field |
| `card` | Package cards, spec cards, contact info cards |
| `badge` | "DOPORUČUJEME" badge, eyebrow labels |
| `separator` | Footer dividers |

### Custom Components

| Component | Description |
|---|---|
| `Navbar` | Fixed header with logo, nav links, CTA, mobile hamburger + slide-out |
| `MobileMenu` | Slide-out panel from right for mobile navigation |
| `SectionHeading` | Reusable eyebrow + title + subtitle pattern |
| `ScrollReveal` | Wrapper component using IntersectionObserver for scroll-triggered animations |
| `PackageCard` | Featured package card with accent bar, checklist, price display |
| `SpecCard` | Technical spec card with icon, title, value, detail |
| `ContactInfoCard` | Icon + text card for contact info |
| `BenefitItem` | Icon + title + description for benefits strip |
| `StepItem` | Numbered step with icon, title, description for How It Works |
| `Footer` | Multi-column footer with brand, links, contact, bottom bar |

---

## Animation Implementation

| Animation | Library | Implementation | Complexity |
|---|---|---|---|
| Page load fade-in | CSS + React state | `opacity` transition on body mount | Low |
| Scroll reveal (fade + slide up) | IntersectionObserver + CSS | Custom `ScrollReveal` component, `translateY(30px)` → `0`, `opacity` transition | Medium |
| Scroll reveal stagger | IntersectionObserver + CSS | Parent triggers children with `transition-delay` based on index | Medium |
| Hero entrance sequence | CSS keyframes | Staggered `animation-delay` on hero children | Low |
| Header background transition | CSS transition | `scroll` listener toggles class, `transition` on `background`, `box-shadow` | Low |
| Button hover effects | CSS transition | `transform: translateY(-2px)`, `box-shadow` increase | Low |
| Card hover lift | CSS transition | `transform: translateY(-4px)`, shadow increase | Low |
| Mobile menu slide-in | CSS transition | `transform: translateX(100%)` → `translateX(0)` on panel | Low |

### No heavy animation libraries needed
- All animations achievable with CSS transitions + IntersectionObserver
- No GSAP, no Framer Motion required
- This keeps bundle size minimal and performance high

---

## State & Logic Plan

### Header scroll detection
- `useScrollPosition` custom hook: tracks `window.scrollY`
- When `scrollY > 50px`: add `scrolled` class to header (solid background + blur)

### Mobile menu toggle
- `useState(false)` for `menuOpen`
- Toggle on hamburger click
- Close on: link click, overlay click, Escape key
- Prevent body scroll when open (`overflow: hidden` on body)

### Form submission
- Static site — no backend
- On submit: show success message inline (replace form with "Děkujeme! Odpovíme vám do 24 hodin.")
- Basic validation: required fields, email format (HTML5 `type="email"` handles this)

### Scroll to section
- All nav links and CTA buttons use `scrollIntoView({ behavior: 'smooth', block: 'start' })`
- Offset for fixed header: `scrollIntoView` with `block: 'start'` then manual offset, OR use `scroll-margin-top: 80px` CSS on each section

### Active nav section (optional enhancement)
- IntersectionObserver on each section
- Update URL hash / active nav indicator based on visible section

---

## Other Key Decisions

### Routing
- Single page application, no routing library needed
- All navigation is smooth-scroll to section anchors (`#balicky`, `#jak-to-funguje`, etc.)

### Images
- 4 AI-generated images stored in `/public/images/`
- Hero background: `object-fit: cover`, `object-position: center`
- Detail/house images: `object-fit: cover`, with `border-radius` and `shadow`
- All images lazy-loaded except hero (`loading="lazy"`)

### Responsive Strategy
- Mobile-first Tailwind classes
- Key breakpoints: `sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px`
- Navigation: horizontal on `lg+`, hamburger below
- Grids: 1 col mobile → 2 col `md` → 3-4 col `lg`
- Typography: `clamp()` for fluid scaling, no breakpoint jumps
- Touch targets: minimum 44px for all interactive elements

### Performance
- No external fonts (use system-ui / Inter via system font stack)
- Minimal JS bundle (no animation libraries)
- CSS transitions only (GPU-composited properties: `transform`, `opacity`)
- Hero background image: `priority` load, others lazy

---

## Dependencies

```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "lucide-react": "^0.x",
  "tailwindcss": "^3.4.19",
  "class-variance-authority": "^0.x",
  "clsx": "^2.x",
  "tailwind-merge": "^2.x"
}
```

No additional animation libraries. No routing library. No state management beyond React `useState`/`useEffect`.
