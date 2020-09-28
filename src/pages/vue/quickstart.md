---
previousText: 'Overview'
previousUrl: '/docs/vue/overview'
nextText: 'Build Your First App'
nextUrl: '/docs/vue/your-first-app'
---

# Ionic Vue Quickstart

> Ionic Vue is currently in development. Information in this guide is subject to change.

## What is Ionic Framework?

First off, if you're new here, welcome! Ionic Framework is a free and open source component library for building apps that run on iOS, Android, Electron, and the Web. Write your app once using familiar technologies (HTML, CSS, JavaScript) and deploy to any platform.

Along with the UI components, Ionic Framework also provides a command line tool for creating new apps, as well as deploying to the various platforms we support.

In this guide, we will go over the basics of both Vue and Ionic Framework, including any Ionic Framework specific features. If you are familiar with Vue, enjoy the guide and learn something new about Ionic Framework. If you are not familiar with either, no worries! This guide will cover the basics and provide enough information to get an app up and running.

## Creating a project with the Ionic CLI

To begin, let's install a pre-release version of the Ionic CLI.


```shell
npm install -g @ionic/cli@testing
```

From here, the global command `ionic` will allow for the creation of a Vue project with Ionic Framework and any other dependencies. To create a new project, run the following command:

```shell
ionic start myApp blank --type vue --tag vue-beta
cd myApp
```

> Using `--tag` allows you to download the latest beta version of an Ionic Vue starter. This will not be needed once Ionic Vue ships.

From here, we run `ionic serve` and have our project running in the browser.

## A look at a Vue Component

The base of our app will be in the `src` directory, and the main entry point will be our `main.ts` file. If we open our project in a code editor and open `main.ts`, we should see the following:

```ts
import { createApp } from 'vue';
import { IonicVue } from '@ionic/vue';

import App from './App.vue'
import router from './router';

const app = createApp(App)
  .use(IonicVue)
  .use(router);
  
router.isReady().then(() => {
  app.mount('#app');
});
```

So what is going on here? The first four lines are pulling in some dependencies. The `createApp` function lets us initialize our Vue application, while `IonicVue` is a plugin that allows us to use Ionic Framework in a Vue environment.

The third import is the root component for our app, simply named `App`. This is our first Vue component and will be used in the bootstrapping process for our Vue app. 


The fourth import gets our routing configuration. We will look at this more in depth later.

If we open `App.vue` we should see the following: 

```html
<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default {
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
};
</script>
```

Let's break it down, starting with the first group of imports.


```typescript
import { IonApp, IonRouterOutlet } from '@ionic/vue';
```

To use a component in Vue, you must first import it. So for Ionic Framework, this means anytime we want to use a Button or a Card, it must be added to our imports. In the case of our `App` component, we are using `IonApp` and `IonRouterOutlet`.

From there, let's look at the template.

```html
<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>
```

All Vue components must have a `<template>`. Inside of there, we place our `IonApp` and `IonRouterOutlet` components.

Finally, let's look at the component definition:

```typescript
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
});
```

Vue 3 offers a new `defineComponent` function when creating components for improved tooling support, and we are going to use that here. We first define the name of the component, and then we supply the components that we will use in our template.

There are several arguments you can supply here such as `methods`, `setup` and more. This is explained as part of Vue's [Composition API Documentation](https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api).


## Initializing the router

Ionic Vue uses the [vue-router](https://router.vuejs.org/) dependency, so if you are already familiar with Vue Router, you will be able to apply what you know to navigation in Ionic Vue. Let's take a look at the router configuration we mentioned before. In `router/index.ts`, you should see something similar to the following:

```typescript
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
```

> This example is using the Ionic Vue Blank starter application, so your actual routes may look a bit different.

The setup here is the same as if you were using `vue-router` directly, but instead you need to import dependencies such as `createRouter` and `createWebHistory` from the `@ionic/vue-router` package.

After importing our dependencies, we can declare our routes in the `routes` array. From there, we can create a router instance and provide it with our routes and the type of history we want to use.

With Ionic Vue, lazy loading works right out of the box. Instead of importing our `Home` component, we could also do:

```typescript
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  }
]
```

Now, you might be wondering: Why do we use `@` when describing the path to our components? The `@` symbol is a shortcut we can use to describe paths relative to the `src` directory. This is useful if we are trying to reference a component while in a file several folders deep. Instead of doing `'../../../views/Home.vue'`, we could simply do `'@/views/Home.vue'`.

## A component with style

Now the `App` component does not really have a lot to modify here. It is a basic example of a container component. With the router logic set, all it is responsible for is to render a component that matches the given URL route. Since we already have one component/router setup, let's go ahead and modify our `Home` component.

Currently, the `Home` component looks like so:

![Vue home component](/docs/assets/img/guides/vue/first-app/home-route.png)

```html
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <strong>Ready to create an app?</strong>
        <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
```

Much like the `App` component we started with, we have some imports for specific Ionic Framework components, an import from Vue, the Vue component, and styles to go along with our component.

For our styles, notice that we have specified our styles to be `scoped`. This means that the styles we  write here will only apply to this component. This is useful for preventing styles from leaking out of a component and affecting other parts of your application. We strongly recommend using `scoped` styles for Ionic Vue applications.

`IonPage` is the base component for all pages (a component with a route/URL), and includes some common building blocks of a full-screen component, like header, title, and content components.

> When creating your own pages, do not forget to have `IonPage` be the root component for them. Having `IonPage` be the root component is important because it helps ensure transitions work properly as well as provides the base CSS the Ionic Framework components rely on.

`IonHeader` is a component meant to exist at the top of the page. It does not do much by itself, aside from handling some flexbox-based layout. It is meant to hold components, like `IonToolbar` or `IonSearchbar`.

`IonContent` is, as its name suggests, the main content area for our page. It is responsible for providing a scrollable content that users will interact with, plus any scroll events that could be used in an app.

Our current content is relatively simple, but does not contain anything that could be used in a real app, so let's change that.

> Note: For brevity, we are excluding repeating parts of our component, like the function declaration or import statements from other components.

```html
<template>
  <ion-page>
    ...
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-checkbox slot="start"></ion-checkbox>
          <ion-label>
            <h1>Create Idea</h1>
            <ion-note>Run Idea By Brandy</ion-note>
          </ion-label>
          <ion-badge color="success" slot="end">
            5 Days
          </ion-badge>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>
```

Here in our `IonContent`, we are adding an `IonList` and a much more involved `IonItem` component. Let's look at `IonItem` as it is the centerpiece here.

```html
<ion-item>
  <ion-checkbox slot="start"></ion-checkbox>
  <ion-label>
    <h1>Create Idea</h1>
    <ion-note>Run Idea By Brandy</ion-note>
  </ion-label>
  <ion-badge color="success" slot="end">
    5 Days
  </ion-badge>
</ion-item>
```

Looking at our code, we have a special attribute called slot. This is key for letting the `IonItem` know where to place the `IonCheckbox` when it renders. This is not a Vue API, but a web standards API. Additionally, this is different from the slots API you may recall from Vue 2.

Let's look at another component from Ionic Framework, FAB. Floating Action Buttons are a nice way to provide a main action that is elevated from the rest of an app. For this FAB, we will need three components: a FAB, a FAB Button, and an Icon.

```html
<ion-content>
  <ion-list>
  ...
  </ion-list>

  <ion-fab vertical="bottom" horizontal="end" slot="fixed">
    <ion-fab-button>
      <ion-icon :icon="add"></ion-icon>
    </ion-fab-button>
  </ion-fab>

</ion-content>

<script>
import { add } from 'ionicons/icons';

...

export default defineComponent({
  name: 'Home',
  ...,
  setup() {
    return {
      add
    }
  }
})
</script>
```

On our main `IonFab`, we are setting its positioning with the vertical and horizontal attributes. We are also setting the render location to "fixed" with the slot attribute. This will tell `IonFab` to render outside of the scrollable content in `IonContent`.

Now let's wire up a click handler to this. When clicking the FAB button, we want to navigate to a new page (which we will create in a moment). To do this, we will need to get access to Vue Router's navigation API. This can be done by importing `useRouter` from the `vue-router` package.

```html
import { add } from 'ionicons/icons';

<ion-content>
  <ion-list>
  ...
  </ion-list>

  <ion-fab vertical="bottom" horizontal="end" slot="fixed">
    <ion-fab-button @click="() => router.push('/new')">
      <ion-icon :icon="add"></ion-icon>
    </ion-fab-button>
  </ion-fab>

</ion-content>

<script>
import { add } from 'ionicons/icons';

...

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonFab,
    IonFabButton,
    IonHeader,
    IonIcon,
    IonPage,
    IonTitle,
    IonToolbar
  },
  setup() {
    return {
      router: useRouter(),
      add
    }
  }
});
</script>
```

In our component file, we are importing the `useRouter` function. When called, this function injects the router dependency into the component. It gives us access to the history API from Vue Router, allowing us to push a new route onto the navigation stack. On our `IonFabButton`, we can add a click handler, and just call `router.push` and pass in the new route. In this case, we will navigate to `new`.

```html
<ion-fab-button @click="() => router.push('/new')">
  ...
</ion-fab-button>
```

## Creating a new Route

Now that we have the pieces in place to navigate in our app, we need to create a new component and add the new route to our router declaration. Let's open our `router/index.ts` file and add the new route.

```typescript
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue'
import NewItem from '@views/NewItem.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/new',
    name: 'NewItem',
    component: NewItem
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
```
With our router now having an entry for the route `/new`, we will create the component needed, `NewItem`. This will exist in `views/NewItem.vue`.

Let's fill the `NewItem.vue` file with some placeholder content for the moment.

```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>New Item</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content></ion-content>
  </ion-page>
</template>

<script>
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NewItem',
  components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  }
});
</script>
```

The content here should look similar to the `Home` component. What is different here is the `IonBackButton` component. This is used to navigate back to the previous route. Seems easy enough, right? Ok, but what if we reload the page?

In this case, the in-memory history is lost, so the back button disappears. To address this, we can set the `default-href` attribute value to the URL we want to navigate to if there is no history.

```html
<ion-back-button default-href="/home"></ion-back-button>
```

Now, If there is no app history present, we will be able to navigate back to our home route.

## Adding Icons

Ionic Vue comes with [Ionicons](https://ionicons.com/) pre-installed. There are a couple options developers have for using them in their application.

### Dynamic Imports

Dynamic Imports is the recommended approach to using Ionicons. This involves importing the icon of your choice from the `ionicons` package and passing it to your template:

```html
<template>
  <ion-page>
    <ion-content>
      <ion-icon :icon="heart"></ion-icon>
    </ion-content>
  </ion-page>
</template>

<script>
import { heart } from 'ionicons/icons';
import {
  IonContent,
  IonPage,
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Icon',
  components: {
    IonContent,
    IonPage,
  },
  setup() {
    return { heart }
  }
});
</script>
```

Let's break down what we are doing here. First, we are importing the `heart` icon from `ionicons/icons`. This will load the appropriate SVG data for our icon.

Next, we pass the `heart` data to our template in the `setup` method.

Finally, we pass the icon data into the `ion-icon` component via the `icon` property.

Developers also have the option of setting different icons based upon the mode:

```html
<template>
  <ion-page>
    <ion-content>
      <ion-icon :ios="logoApple" :md="logoAndroid"></ion-icon>
    </ion-content>
  </ion-page>
</template>

<script>
import { logoAndroid, logoApple } from 'ionicons/icons';
import {
  IonContent,
  IonPage,
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Icon',
  components: {
    IonContent,
    IonPage,
  },
  setup() {
    return { logoAndroid, logoApple }
  }
});
</script>
```

Note that any icon names that are hyphenated should be written in camel case when importing.

### Global Imports

The other option is to import specific icons globally. This is not typically recommended as it will force icons to be loaded every time your application starts and can increase your application's initial chunk size.

That being said, there may be use cases when it makes sense to load specific icons globally:

**main.ts**
```typescript
import { addIcons } from 'ionicons';
import { heart } from 'ionicons/icons';

addIcons({
  'heart': heart 
});
```

**Home.vue**
```html
<template>
  <ion-page>
    <ion-content>
      <ion-icon icon="heart"></ion-icon>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonPage,
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonPage,
  }
});
</script>
```

In `main.ts`, the `addIcons` function lets us register icons globally and give it a string as a key. We then reference the icon by that key in our `Home` component.
 
## Build a Native App

We now have the basics of an Ionic Vue app down, including some UI components and navigation. The great thing about Ionic Framework’s components is that they work anywhere, including iOS, Android, and PWAs. To deploy to mobile, desktop, and beyond, we use Ionic’s cross-platform app runtime [Capacitor](https://capacitor.ionicframework.com). It provides a consistent, web-focused set of APIs that enable an app to stay as close to web-standards as possible while accessing rich native device features on platforms that support them.

Adding native functionality is easy. First, add Capacitor to your project:

```shell
ionic integrations enable capacitor
```

Next, build the project, then add your platform of choice:

```shell
ionic build
ionic cap add ios
ionic cap add android
```

We use the standard native IDEs (Xcode and Android Studio) to open, build, and run the iOS and Android projects:

```shell
ionic cap open ios
ionic cap open android
```

Additional details can be found [here](https://capacitor.ionicframework.com/docs/getting-started/with-ionic). 

Next, check out [all the APIs](https://capacitor.ionicframework.com/docs/apis) that are available. There is some great features, including the [Camera API](https://capacitor.ionicframework.com/docs/apis/camera). We can implement photo capture functionality in just a few lines of code:

```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Ionic Blank</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <img :src="photo" />
      <ion-button @click="takePhoto()">Take Photo</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle
} from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { Plugins, CameraResultType } from '@capacitor/core';
const { Camera } = Plugins;

export default defineComponent({
  name: 'Home',
  components: {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle
  },
  setup() {
    const imageSrc = ref('');
    const takePhoto = async () => {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });
      
      imageSrc.value = image.webPath;
    }
    
    return {
      photo: imageSrc,
      takePhoto
    }
  }
})
</script>
```

## Where to go from here

This guide covered the basics of creating an Ionic Vue app, adding some basic navigation, and introducing Capacitor as a way of building native apps. To dive deeper into building complete Ionic Framework apps with Vue and Capacitor, follow our [First App guide](/docs/vue/your-first-app).

For a more detailed look at Ionic Frameworks’s components, check out the [component API pages](https://ionicframework.com/docs/components). For more details on Vue, review the [Vue Docs](https://v3.vuejs.org/). To keep building native features, see the [Capacitor docs](https://capacitor.ionicframework.com/docs/).

Happy app building! 🎉
