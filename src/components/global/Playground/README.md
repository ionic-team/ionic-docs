# Playground

The Playground component renders a demo preview of a component experience with code snippets available for each supported framework.

The Playground can be customized per example, to meet the requirements of the component or experience that you are trying to showcase.

## Basic Usage

Every playground needs `code` with a snippet for each framework, `src` pointing at its demo page, and `version` for the major version of Ionic the example uses. Without `version`, the playground renders nothing.

```tsx
import Playground from '@site/src/components/global/Playground';

import javascript from './javascript.md';
import react from './react.md';
import vue from './vue.md';

import angular_example_component_html from './angular/example_component_html.md';
import angular_example_component_ts from './angular/example_component_ts.md';

<Playground
  version="9"
  code={{
    javascript,
    react,
    vue,
    angular: {
      files: {
        'src/app/example.component.html': angular_example_component_html,
        'src/app/example.component.ts': angular_example_component_ts,
      },
    },
  }}
  src="usage/v9/button/basic/demo.html"
/>;
```

## Options

| Option              | Description                                                                                                                                        |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `size`              | Height of the demo: `xsmall`, `small` (default), `medium`, `large`, `xlarge`, or any CSS height such as `300px`.                                   |
| `mode`              | Locks the demo to `ios` or `md` and disables the button for the other mode.                                                                        |
| `devicePreview`     | Renders the demo inside a device frame. Refer to [Device Frame](#show-example-within-a-device-frame-iphonepixel-5).                                |
| `showConsole`       | Shows a console below the demo with anything the demo logs through `console.log`, `console.warn`, or `console.error`.                              |
| `includeIonContent` | Wraps the StackBlitz example in `ion-app` and `ion-content`. Defaults to `true`. Refer to [Ejecting](#ejecting-from-ionappioncontent-boilerplate). |
| `defaultFramework`  | Framework tab to select when the reader has not picked one. Defaults to Angular when available.                                                    |
| `title`             | Title of the generated StackBlitz project.                                                                                                         |
| `description`       | Description of the generated StackBlitz project.                                                                                                   |

## Show example within a device frame (iPhone/Pixel 5)

By default, Playground examples will render in an empty container and fill the available space. Using the `devicePreview` flag, the Playground will render the demo experience within an iPhone device frame when on iOS mode and within a Pixel device frame when on MD.

```tsx
<Playground devicePreview />
```

## Multiple File Examples

Playground supports single file and multi-file examples to show the required code to create a sample. To include multiple file examples for a single framework target, pass an object with a `files` option that maps each file location (in the StackBlitz generated project) to its contents.

You can mix multi-file and single file examples together in a single example:

```tsx
import angular_example_component_html from './angular/example_component_html.md';
import angular_example_component_ts from './angular/example_component_ts.md';

import react_main_tsx from './react/main_tsx.md';
import react_main_css from './react/main_css.md';

import vue from './vue.md';
import javascript from './javascript.md';

<Playground
  version="9"
  code={{
    angular: {
      files: {
        'src/app/example.component.html': angular_example_component_html,
        'src/app/example.component.ts': angular_example_component_ts,
      },
    },
    react: {
      files: {
        'src/main.tsx': react_main_tsx,
        'src/main.css': react_main_css,
      },
    },
    javascript,
    vue,
  }}
  src="usage/v9/component/feature/demo.html"
/>;
```

The file location is relative to the StackBlitz demo project. If you are unsure of the exact path, refer to the `files` object in the `open*Editor` function for each target in [`stackblitz.utils.ts`](./stackblitz.utils.ts).

## Adding Dependencies

To add npm packages to the StackBlitz project, pass `dependencies` alongside `files` for each framework that needs them. The key is the package name and the value is a semver range:

```tsx
<Playground
  version="9"
  code={{
    react: {
      files: {
        'src/main.tsx': react_main_tsx,
      },
      dependencies: {
        '@maskito/react': '^3.0.0',
        '@maskito/core': '^3.0.0',
      },
    },
  }}
  src="usage/v9/input/mask/demo.html"
/>
```

The live demo does not install these packages, so `demo.html` has to load them itself, such as from a CDN.

## Creating a New Playground

You can [generate a new playground](../../../../_templates/README.md#new-playground-template) by running `npm run playground:new`.

## Ejecting from IonApp/IonContent Boilerplate

By default, Playground examples will automatically include the following template wrapper for each component example when opened in StackBlitz.

```html
<ion-app>
  <ion-content class="ion-padding">
    <!-- Demo code injected here -->
  </ion-content>
</ion-app>
```

Note: The above code is just a sample. The code will be slightly different based on each framework target.

To opt-out of this behavior, set `includeIonContent={false}` to disable this wrapper. You will be responsible for manually including `ion-content` in your code snippets.

```tsx
<Playground includeIonContent={false} />
```
