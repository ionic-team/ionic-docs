---
title: Troubleshooting
---

<head>
  <title>Ionic Troubleshooting Guide: Common Vue App Development Issues</title>
  <meta
    name="description"
    content="This troubleshooting guide covers some of the more common issues you may run into when developing apps with Ionic Vue. Read to learn more about troubleshooting."
  />
</head>

This guide covers some of the more common issues you may run into when developing with Ionic Vue.

Have an issue that you think should be covered here? <a href="https://github.com/ionic-team/ionic-docs/issues/new?assignees=&labels=content&template=content-issue.md&title=" target="_blank" rel="noopener">Let us know!</a>

## Failed to resolve component

```shell
[Vue warn]: Failed to resolve component: ion-button
```

If you see this warning, then it is likely you did not import your component from `@ionic/vue`. By default, all Ionic Vue components are locally registered, meaning you need to import them each time you want to use them.

Without importing the component, you will only get the underlying Web Component, and Vue-specific features such as `v-model` will not work.

To resolve this issue, you need to import the component from `@ionic/vue` and provide it to your Vue component:

```html
<template>
  <ion-button>Hello World</ion-button>
</template>

<script lang="ts">
  import { IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton },
  });
</script>
```

Prefer to register your components globally once? We have you covered. Our [Optimizing Your Build Guide](quickstart.md#optimizing-your-build) shows you how to register Ionic Vue components globally as well as the potential downsides to be aware of when using this approach.

## Slot attributes are deprecated

```shell
`slot` attributes are deprecated  vue/no-deprecated-slot-attribute
```

The slots that are used in Ionic Vue are <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots" target="_blank" rel="noopener">Web Component slots</a>, which are different than the slots used in Vue 2. Unfortunately, the APIs for both are very similar, and your linter is likely getting the two confused.

All Ionic Vue starters ship with this rule turned off, but you can do it yourself by adding the following to your `.eslintrc.js` file:

```js
module.exports = {
  rules: {
    'vue/no-deprecated-slot-attribute': 'off',
  },
};
```

If you are using VSCode and have the Vetur plugin installed, you are likely getting this warning because of Vetur, not ESLint. By default, Vetur loads the default Vue 3 linting rules and ignores any custom ESLint rules.

To resolve this issue, you will need to turn off Vetur's template validation with `vetur.validation.template: false`. See the <a href="https://vuejs.github.io/vetur/guide/linting-error.html#linting" target="_blank" rel="noopener">Vetur Linting Guide</a> for more information.

## Method on component is not a function

In order to access a method on an Ionic Framework component in Vue, you will need to access the underlying Web Component instance first:

```js
// ✅ This is correct
ionContentRef.value.$el.scrollToBottom();

// ❌ This is incorrect and will result in an error.
ionContentRef.value.scrollToBottom();
```

In other framework integrations such as Ionic React, this is not needed as any `ref` you provide is automatically forwarded to the underlying Web Component instance. We are unable to do the same thing here due to limitations in how Vue manages refs.

See the [Quickstart Guide](quickstart.md#calling-methods-on-components) for more information.

## Page transitions are not working

In order for page transitions to work correctly, each page must have an `ion-page` component at the root:

```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">Hello World</ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
    },
  });
</script>
```

See the [IonPage documentation](navigation.md#ionpage) for more information.
