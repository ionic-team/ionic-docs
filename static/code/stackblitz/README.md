# StackBlitz

This directory contains the source files for generating the individual framework targets for a playground examples. The contents of the files will be loaded and injected into the StackBlitz example that is opened from the Playground.

## Structure

The files are organized by Ionic version (`v6`, `v7`, `v8`) and framework (`angular`, `html`, `react`, `vue`):

```
stackblitz/
├── v6/
│   ├── angular/
│   ├── html/
│   ├── react/
│   └── vue/
├── v7/
│   ├── angular/
│   ├── html/
│   ├── react/
│   └── vue/
└── v8/
    ├── angular/
    ├── html/
    ├── react/
    └── vue/
```

## Angular

| File                 | Description                                            |
| -------------------- | ------------------------------------------------------ |
| `angular.json`       | Main configuration file for any Angular application.   |
| `app.component.css`  | App component styles.                              |
| `app.component.html` | App component template.                           |
| `app.component.ts`   | App component class/entry point.                   |
| `app.component.withContent.html` | App component template with `ion-content` wrapper. |
| `app.component.withContent.ts` | App component class/entry point with `ion-content` wrapper. |
| `app.routes.ts`      | Application routing configuration.                 |
| `example.component.ts` | Example component for demos.                     |
| `global.css`         | Global styles.                                     |
| `index.html`         | Main HTML template.                                |
| `main.ts`            | Responsible for bootstrapping the application.     |
| `package.json`       | Project dependencies.                              |
| `package-lock.json`  | Locked dependency versions.                        |
| `styles.css`         | Ionic default styles.                                   |
| `tsconfig.app.json`  | TypeScript configuration for the app.              |
| `tsconfig.json`      | TypeScript configuration.                          |
| `variables.css`      | CSS variables for theming.                         |

## HTML

| File         | Description                                                       |
| ------------ | ----------------------------------------------------------------- |
| `index.html` | Main template file with CDN link to latest `@ionic/core` release. |
| `index.withContent.html` | Main template with `ion-content` wrapper.               |
| `index.ts`   | Defines the Stencil hydrated bundle for Ionic.                    |
| `package.json` | Project dependencies.                                           |
| `package-lock.json` | Locked dependency versions.                                  |
| `tsconfig.json` | TypeScript configuration.                                      |
| `variables.css` | CSS variables for theming.                                     |
| `vite.config.ts` | Vite configuration file.                                      |

## React

| File       | Description                                                                                  |
| ---------- | -------------------------------------------------------------------------------------------- |
| `app.tsx`  | Imports required Ionic styles and `setupIonicReact()` function to initialize web components. |
| `app.withContent.tsx` | App component with `ion-content` wrapper.                                       |
| `browserslistrc` | Browser support configuration.                                                         |
| `eslintrc.js` | ESLint configuration.                                                                   |
| `index.html` | The HTML template to create an element to mount React to.                                |
| `index.tsx` | Boilerplate to render a React app.                                                           |
| `package.json`   | Project dependencies.                                                                  |
| `package-lock.json` | Locked dependency versions.                                                         |
| `tsconfig.json` | TypeScript configuration.                                                               |
| `variables.css` | CSS variables for theming.                                                              |
| `vite.config.js` | Vite configuration file.                                                               |

## Vue

| File             | Description                                                   |
| ---------------- | ------------------------------------------------------------- |
| `App.vue`        | Main Vue component that wraps each example in `ion-app`.      |
| `App.withContent.vue` | Main Vue component with `ion-content` wrapper.           |
| `index.html`     | The HTML template to create an element to mount Vue to.       |
| `main.ts`        | Initializes Ionic Vue and imports global styles.              |
| `package.json`   | Project dependencies.                                         |
| `package-lock.json` | Locked dependency versions.                                |
| `tsconfig.json`  | TypeScript configuration.                                     |
| `tsconfig.node.json` | TypeScript configuration for Node.                        |
| `variables.css`  | CSS variables for theming.                                    |
| `vite.config.ts` | Vite configuration file.                                      |


## Dotfiles

Dotfiles must be saved without the dot otherwise they will not be fetched correctly. However, when creating the StackBlitz project the dot can be used.

For example, if you had an `.eslintrc.js` file you would save it as `eslintrc.js` in this repo. When creating the StackBlitz project the contents of that file can then be saved as `.eslintrc.js`.
