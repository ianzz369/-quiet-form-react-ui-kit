# Editing Quiet Form

## Preserve the approved style

The foundation keeps the approved warm pearl, soft molded cards, recessed controls, muted green accent and Manrope typography. The original A/C directions and botanical image are not included.

Start with CSS custom properties in src/tokens/tokens.css. Core colors, panel/input material shadows and the main font are connected to component styling. Fine-grained component details remain in src/styles/components.css; not every value is represented as a token.

The stylesheet includes layout defaults for the standalone demo. When integrating into an existing app, review reset and root styles first; this foundation is not a fully isolated drop-in CSS package.

## Change content

Edit the JSX in the matching screen file. Keep “check-in” wrapped in .keep-together so it cannot split at the hyphen. The modal mood selector uses equal-width columns.

## Add a component later

Create the component under src/components/, export it from src/index.ts, and add an example under src/demo/Showcase.tsx. Keep screen composition separate from state and presentation.

## Assets

Fonts are bundled locally. Preserve their SIL Open Font License notices. Lucide icons are rendered as SVG by lucide-react; their notices are included. No reference screenshots or unrelated photography are included.

## Accessibility and responsiveness

Buttons have accessible labels and pressed/disabled states. The reflection dialog traps keyboard focus, closes with Escape and returns focus. Page navigation remains available through keyboard and touch. Reduced-motion settings disable the breathing scale animation.

The palette and small editorial labels intentionally preserve the approved exploration. A formal WCAG audit, additional text sizing variants and a complete production accessibility review are outside this foundation release.

## Repackage

Exclude node_modules/, dist/, caches, environment files and version-control directories. Ship this folder's source, package files, documentation, fonts and notices. The hosting wrapper used for the review URL is not part of this portable project.

After any edit, run npm run typecheck and npm run build, then check the three screens and component showcase at mobile and desktop widths.
