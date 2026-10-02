# Quiet Form
## Soft Neumorphic Wellness + Productivity React UI Kit
**Common Orbit Studio · Foundation Edition · v1.0.0**

Quiet Form is a small, polished React UI kit built around a warm soft-neumorphic visual language for wellness and productivity products. It includes three finished mobile screens, reusable components, editable design tokens, local fonts, documentation, and an interactive component showcase.

**Foundation Edition** is the compact React UI Kit release: three complete screens plus the reusable React component system used to build them.

This is a **front-end source kit**. It is not a backend service, React Native app, or finished production application.

## Included

### Screens
- Home
- Focus / Wellness
- Insights / Profile

### Reusable UI
- Bottom navigation
- Focus dial
- Focus chart
- Mood selector
- Mood widget
- Task list
- Reflection dialog
- Buttons, chips, panels, metrics and text area primitives
- Phone frame and status display for the demo

### Project structure

| Folder | Purpose |
| --- | --- |
| `src/components/` | Reusable controls, cards, navigation, dial and dialog |
| `src/screens/` | Home, Focus / Wellness, Insights / Profile |
| `src/styles/` | Component, screen, demo and reset styles |
| `src/tokens/` | Editable colors, material shadows, radii and spacing |
| `src/assets/` | Local fonts and license notices |
| `src/hooks/` | Sample state and timer behavior |
| `src/data/` | Fictional demo task data |
| `src/demo/` | Interactive showcase |
| `docs/` | Component API and editing guide |
| `src/index.ts` | Public component exports |

## Quick start

Requirements:
- Node.js `>=22.13.0`
- npm

Install and start the demo:

~~~sh
npm ci
npm run dev
~~~

Open the local URL printed in the terminal. Use the **Screens** and **Components** views to review the kit.

Quality checks:

~~~sh
npm run typecheck
npm run build
npm run preview
~~~

Release verification completed on **Node.js 24.19.0** with `npm ci`, `npm run typecheck`, and `npm run build` completing successfully.

## Use in another React project

Copy the kit source into your project, install `lucide-react`, and import the stylesheet once:

~~~tsx
import { Button, Panel } from './quiet-form';
import './quiet-form/styles/index.css';

export function Example() {
  return (
    <div className="qf-kit theme-b">
      <Panel>
        <Button onClick={() => console.log('Begin')}>
          Begin session
        </Button>
      </Panel>
    </div>
  );
}
~~~

This example assumes the copied `src` folder is renamed to `quiet-form`. Use a CSS-capable bundler such as Vite. These are **React DOM components**, not React Native components.

## Customize the kit

- Colors, material shadows and typography: `src/tokens/tokens.css`
- Component styling: `src/styles/components.css`
- Screen copy and composition: `src/screens/`
- Demo tasks: `src/data/sampleData.ts`
- Sample state and focus timer: `src/hooks/useCompanion.ts`
- Showcase presentation: `src/demo/Showcase.tsx`

See `docs/EDITING.md` and `docs/COMPONENTS.md` for details.

## Preview and development

The standard way to review and edit the kit is to run it locally in a JavaScript development environment. After installing the dependencies, start the Vite development server:

~~~sh
npm ci
npm run dev
~~~

Open the local URL printed in the terminal in your browser. Use the **Screens** and **Components** views to inspect the included UI, then edit the source files in your preferred code editor.

For a production-style preview, run:

~~~sh
npm run build
npm run preview
~~~

## Scope

Quiet Form Foundation Edition intentionally stays compact. It contains three complete demonstration screens and a reusable component set rather than a large multi-screen app template.

The included interactions are local front-end demonstrations. There is no authentication, backend, external service integration, health-data integration, payment flow, database, or durable persistence. Mood, tasks and reflection data reset when the demo reloads. Chart data is fictional.

## License

Your purchase includes the **Quiet Form Commercial Use License** in `LICENSE.txt`.

In short, you may customize the kit and use it in personal or commercial end products. You may not redistribute, resell, sublicense, share, or repackage the source kit itself as a competing UI kit, template, component library, or stock asset.

Third-party materials keep their original licenses. See `THIRD_PARTY_NOTICES.md`.

## Version

**1.0.0 — Commercial Foundation Release**

© 2026 Common Orbit Studio. All rights reserved except where third-party licenses apply.
