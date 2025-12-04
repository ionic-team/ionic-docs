---
title: Managing Focus
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Managing Focus</title>
  <meta
    name="description"
    content="Learn how to manage focus in Ionic applications using the setFocus API instead of the autofocus attribute."
  />
</head>

## Manual Focus Management

Ionic provides a `setFocus` API on components such as [Input](../api/input), [Searchbar](../api/searchbar), and [Textarea](../api/textarea) that allows developers to manually set focus to an element. This API should be used in place of the `autofocus` attribute and called within:

- The `ionViewDidEnter` lifecycle event for routing applications when a page is entered.
- The `didPresent` lifecycle event for overlays when an overlay is presented.
- The `appload` event for vanilla JavaScript applications when the application loads.
- The result of a user gesture or interaction.

### Why not autofocus?

The `autofocus` attribute is a standard HTML attribute that allows developers to set focus to an element when a page loads. This attribute is commonly used to set focus to the first input element on a page. However, the `autofocus` attribute can cause issues in routing applications when navigating between pages. This is because the `autofocus` attribute will set focus to the element when the page loads, but will not set focus to the element when the page is revisited. Learn more about the `autofocus` attribute in the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus).

### Platform Restrictions

There are platform restrictions you should be aware of when using the `setFocus` API, including:

1. Android requires user interaction before setting focus to an element. This can be as simple as a user tapping on the screen.
2. Interactive elements can only focused a result of a user gesture on Mobile Safari (iOS), such as calling `setFocus` as the result of a button click.

### Basic Usage

The example below demonstrates how to use the `setFocus` API to request focus on an input when the user clicks a button.

import Basic from '@site/static/usage/v8/input/set-focus/index.md';

<Basic />

### Routing

Developers can use the `ionViewDidEnter` lifecycle event to set focus to an element when a page is entered.

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="angular"
  values={[
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>

<TabItem value="angular">

```ts
/* example.component.ts */
import { Component, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
})
export class ExampleComponent {
  @ViewChild('input') input!: IonInput;

  ionViewDidEnter() {
    this.input.setFocus();
  }
}
```
</TabItem>
<TabItem value="react">

```tsx
import React, { useRef } from 'react';
import { IonInput, IonPage, useIonViewDidEnter } from '@ionic/react';

const Home = () => {
  const input = useRef<HTMLIonInputElement>(null);

  useIonViewDidEnter(() => {
    input.current?.setFocus();
  });

  return (
    <IonPage>
      <IonInput ref={input} label="setFocus" labelPlacement="floating"></IonInput>
    </IonPage>
  );
};

export default Home;
```

</TabItem>
<TabItem value="vue">

```html
<template>
  <ion-page>
    <ion-input ref="input" label="setFocus" label-placement="floating"></ion-input>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonInput, IonPage, onIonViewDidEnter } from '@ionic/vue';
  import { ref } from 'vue';

  const input = ref();
  onIonViewDidEnter(() => {
    requestAnimationFrame(() => {
      // requestAnimationFrame is currently required due to:
      // https://github.com/ionic-team/ionic-framework/issues/24434
      input.value.$el.setFocus();
    });
  });
</script>
```

</TabItem>
</Tabs>
````

### Overlays

Developers can use the `didPresent` lifecycle event to set focus to an element when an overlay is presented.

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'Javascript' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>

<TabItem value="javascript">

```html
<ion-modal>
  <ion-input></ion-input>
</ion-modal>

<script>
  const modal = document.querySelector('ion-modal');
  modal.addEventListener('didPresent', () => {
    const input = modal.querySelector('ion-input');
    input.setFocus();
  });
</script>
```

</TabItem>

<TabItem value="angular">

```ts
/* example.component.ts */
import { Component, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
})
export class ExampleComponent {
  @ViewChild('input') input!: IonInput;

  onDidPresent() {
    this.input.setFocus();
  }
}
```

```html
<!-- example.component.html -->
<ion-modal (didPresent)="onDidPresent()">
  <ion-input #input></ion-input>
</ion-modal>
```

</TabItem>
<TabItem value="react">

```tsx
import React, { useRef } from 'react';
import { IonInput, IonModal } from '@ionic/react';

const Home = () => {
  const input = useRef<HTMLIonInputElement>(null);

  const onDidPresent = () => {
    input.current?.setFocus();
  };

  return (
    <IonModal onDidPresent={onDidPresent}>
      <IonInput ref={input}></IonInput>
    </IonModal>
  );
};

export default Home;
```

</TabItem>
<TabItem value="vue">

```html
<template>
  <ion-modal @didPresent="onDidPresent">
    <ion-input ref="input"></ion-input>
  </ion-modal>
</template>

<script setup lang="ts">
  import { IonInput, IonModal } from '@ionic/vue';
  import { ref } from 'vue';

  const input = ref();

  function onDidPresent() {
    input.value.$el.setFocus();
  }
</script>
```

</TabItem>
</Tabs>
````

## Assistive Technology Focus Management

By default, Single Page Applications have no built-in way of informing screen readers that the active view has changed in a browser or webview. This means that users who rely on assistive technology do not always know if a navigation event occurred.

Developers who enable the [focusManagerPriority config](./config#ionicconfig) can delegate focus management to Ionic during page transitions. When enabled, Ionic will move focus to the correct element as specified in the config option. This will inform screen readers that a navigation event occurred.

### Types

```typescript
type FocusManagerPriority = 'content' | 'heading' | 'banner';
```

### Content Types

The following table explains what each content type represents:

| Type      | Description                   | Ionic Component           | Semantic HTML Equivalent                                                     | Landmark Equivalent                                                                                                                                                                                                   |
| --------- | ----------------------------- | ------------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `content` | The main portion of the view. | [Content](../api/content) | [`main`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main)     | [`role="main"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Main_role)                                                                                                                      |
| `heading` | The title of the view.        | [Title](../api/title)     | [`h1`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1)         | [`role="heading"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/heading_role) with [`aria-level="1"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level) |
| `banner`  | The header of the view.       | [Header](../api/header)   | [`header`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) | [`role="banner"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Banner_Role)                                                                                                                  |

:::important
Developers should assign `role="heading"` and `aria-level="1"` to the primary [Title](../api/title) on each view. Since multiple [Title](../api/title) components can be used in a single view, Ionic does not automatically assign these attributes.
:::

### Specifying Priority

The config should be specified in order of decreasing priority. In the following example, Ionic will always focus headings to start. Ionic only proceeds to the next focus priority, banner, if a view does not have a heading:

```js
focusManagerPriority: ['heading', 'banner'];
```

### Implementation Notes

- When specifying a focus priority, browsers may still move focus within that focus priority. For example, when specifying a `'content'` focus priority, Ionic will move focus to the content. However, the browser may then move focus within that content to the first focusable element such as a button.
- If none of the focus priorities are found in a view, Ionic will instead focus the view itself to ensure focus generally moves to the correct place. Browsers may then adjust focus within the view.
- When navigating from the current view to the previous view, Ionic will move focus back to the element that presented the current view.
- The focus manager can be overridden on a per-view basis as shown in [Manual Focus Management with Routing](#routing).
