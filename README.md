# Vue Project 1

A self-learning Vue 3 application built to practise the fundamentals of modern frontend development: component composition, client-side routing, reactive state, CRUD interactions, automated testing, static analysis, formatting, and production builds.

The project is intentionally small, but it follows the workflow expected in a professional frontend codebase. It is a foundation for demonstrating how I learn a framework, make changes safely, and verify the result with repeatable tooling.

## What It Demonstrates

- Vue 3 components using the Composition API and `<script setup>`
- Vue Router navigation between Home, About, and List views
- A list workflow with add, edit, and delete interactions
- Reactive state with Vue refs and a Pinia store
- Route-level lazy loading for the About view
- Component testing with Vitest and Vue Test Utils
- TypeScript support with `vue-tsc` and typed test files
- ESLint rules for JavaScript, TypeScript, and Vue files
- Prettier formatting and generated-file exclusions
- Vite development, testing, and production build configuration

## Technology Stack

### Application

- [Vue 3](https://vuejs.org/) for the user interface
- [Vue Router](https://router.vuejs.org/) for client-side navigation
- [Pinia](https://pinia.vuejs.org/) for shared state management
- [Vite](https://vite.dev/) for development and bundling

### Quality and Testing

- [TypeScript](https://www.typescriptlang.org/) for static typing
- [vue-tsc](https://github.com/vuejs/language-tools) for type-checking Vue single-file components
- [ESLint](https://eslint.org/) with Vue and TypeScript support
- [Prettier](https://prettier.io/) for consistent formatting
- [Vitest](https://vitest.dev/) for fast unit and component tests
- [Vue Test Utils](https://test-utils.vuejs.org/) for mounting Vue components
- [jsdom](https://github.com/jsdom/jsdom) for a browser-like test environment

## Project Structure

```text
src/
├── App.vue                    Root layout and navigation
├── main.js                    Application bootstrap
├── components/                Reusable Vue components and component tests
├── views/                     Route-level pages
├── router/                    Vue Router configuration
├── stores/                    Pinia stores
└── assets/                    Stylesheets and static assets

env.d.ts                       Vue and Vite type declarations
eslint.config.ts               Flat ESLint configuration
vite.config.js                 Vite and Vitest configuration
tsconfig.json                  TypeScript configuration
.prettierrc                    Prettier rules
.prettierignore                Prettier exclusions
```

The application currently contains JavaScript in some existing source and configuration files while using TypeScript for tests and type-aware tooling. This supports a gradual migration: new application logic can be added as `.ts`, and Vue components can opt into TypeScript with `<script setup lang="ts">`.

## Getting Started

### Prerequisites

- Node.js `22.18+` or `24.12+`
- npm

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available Commands

| Command                  | Purpose                                                 |
| ------------------------ | ------------------------------------------------------- |
| `npm run dev`            | Start the Vite development server with hot reload       |
| `npm run build`          | Create a production build in `dist/`                    |
| `npm run preview`        | Preview the production build locally                    |
| `npm run type-check`     | Type-check Vue and TypeScript files with `vue-tsc`      |
| `npm run lint`           | Check JavaScript, TypeScript, and Vue files with ESLint |
| `npm run test`           | Run the Vitest test suite once                          |
| `npm run test:watch`     | Run Vitest in watch mode during development             |
| `npx prettier --check .` | Check project formatting                                |
| `npx prettier --write .` | Format supported project files                          |

Run the main verification checks before sharing a change:

```sh
npm run type-check
npm run lint
npm run test
npm run build
npx prettier --check .
```

## Testing

The sample test at [`src/components/HelloWorld.test.ts`](src/components/HelloWorld.test.ts) mounts the `HelloWorld` component and verifies that its `msg` prop is rendered.

Tests use:

- `vitest` for the test runner and assertions
- `@vue/test-utils` for component mounting
- `jsdom` to provide browser-like DOM APIs

New tests should use the naming pattern `*.test.ts` or `*.spec.ts` and live close to the code they verify. A useful next step is to add tests for the List view's add, edit, delete, and empty-input behavior.

## Engineering Practices

This project is set up to show more than a working screen:

- Type-check changes before they are merged
- Lint Vue, JavaScript, and TypeScript source consistently
- Format code automatically instead of relying on manual style reviews
- Keep generated output and local dependencies out of version control
- Test user-visible component behavior rather than implementation details
- Verify that the production build succeeds
- Prefer small, reviewable changes with a clear validation command

## Learning Roadmap

Planned improvements that would deepen the project while keeping it focused:

1. Convert the remaining application files from `.js` to `.ts` where typing adds value.
2. Add typed props, emits, and composables to the reusable components.
3. Add tests for routing and the List view's CRUD behavior.
4. Move list state into a typed Pinia store and add persistence where appropriate.
5. Add accessibility checks for keyboard interaction, labels, focus states, and empty states.
6. Add a CI workflow that runs type-checking, linting, tests, formatting checks, and the production build.
7. Add a small feature with a clear product requirement, such as filtering and local persistence for list items.

This roadmap makes the project easy to evaluate: it shows a working baseline today and a concrete path toward stronger architecture, accessibility, testing depth, and delivery discipline.

## IDE Setup

[Visual Studio Code](https://code.visualstudio.com/) with the [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension is recommended. Disable Vetur if it is installed, since Vue - Official provides the current language tooling for Vue 3.

Vue Devtools is also enabled through `vite-plugin-vue-devtools` for inspecting components and application state during development.
