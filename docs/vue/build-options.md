---
title: Vue Build Options
sidebar_label: Build Options
---

<head>
  <title>Vue Build Options: Component Registration and Build Configuration</title>
  <meta
    name="description"
    content="Learn about Vue build configuration options including component registration strategies, prefetching, and build optimization for Ionic Vue apps."
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

Vue gives you several tools to fine tune your application. This guide covers the build options that are most relevant to Ionic Framework.

## Component Registration Strategies

### Local Component Registration (Recommended)

By default, Ionic Framework components are registered locally. With local registration, these components are imported and provided to each Vue component you want to use them in. This is the recommended approach as it allows lazy loading and treeshaking to work properly with Ionic Framework components.

The one downside to this approach is that it may be tedious to re-import your Ionic Framework components multiple times. However, we feel that the performance benefits you receive in exchange are worth it.

Also note that locally registered components are not available in subcomponents. You will need to re-import the Ionic Framework components you would like to use in your subcomponent.

Let's take a look at how local component registration works:

```vue
<template>
  <ion-page>
    <ion-content>
      <SubComponent></SubComponent>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import SubComponent from '@/components/SubComponent.vue';
</script>
```

In the example above, we are using the `IonPage` and `IonContent` components. To use them, we import them from `@ionic/vue`. From there, we can use the components in our template.

Note that since we are registering these components locally, neither `IonPage` nor `IonContent` will be available in `SubComponent` unless we register them there as well.

For more information, see the [Local Registration Vue Documentation](https://v3.vuejs.org/guide/component-registration.html#local-registration).

### Global Component Registration

The other option for registering components is to use global registration. Global registration involves importing the components you want to use in `main.ts` and calling the `component` method on your Vue app instance.

While this makes it easier to add Ionic Framework components to your Vue app, global registration often is not ideal. To quote the Vue documentation: "If you're using a build system like Webpack, globally registering all components means that even if you stop using a component, it could still be included in your final build. This unnecessarily increases the amount of JavaScript your users have to download".

Let's take a look at how global component registration works:

**main.ts**

```ts
import { IonContent, IonicVue, IonPage } from '@ionic/vue';

const app = createApp(App).use(IonicVue).use(router);

app.component('ion-content', IonContent);
app.component('ion-page', IonPage);
```

**MyComponent.vue**

```vue
<template>
  <ion-page>
    <ion-content>
      <SubComponent></SubComponent>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import SubComponent from '@/components/SubComponent.vue';
</script>
```

In the example above, we are using the `IonPage` and `IonContent` components. To use them, we first import them from `@ionic/vue` in `main.ts`. From there, we call the `component` method on our app instance and pass it the tag name as well as the component definition. After we do that, we can use the components in the rest of our application without having to import them into each Vue component.

For more information, see the [Global Registration Vue Documentation](https://v3.vuejs.org/guide/component-registration.html#global-registration).

## Build Optimization

### Prefetching Application JavaScript

By default, the Vue CLI will automatically generate prefetch hints for the JavaScript in your application. Prefetching utilizes the browser idle time to download documents that the user might visit in the near future. When the user visits a page that requires the prefetched document, it can be served quickly from the browser's cache.

Prefetching consumes bandwidth, so if you have a large app, you may want to disable it. You can do this by modifying or creating your `vue.config.js` file:

**vue.config.js**

```js
module.exports = {
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
  },
};
```

The configuration above will prevent all files from being prefetched and, instead, will be loaded when they are needed. You can also select certain chunks to prefetch. Check out the [Vue CLI Docs on Prefetching](https://cli.vuejs.org/guide/html-and-static-assets.html#prefetch) for more examples.
