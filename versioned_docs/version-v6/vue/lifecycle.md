---
sidebar_label: Lifecycle
---

# Vue Lifecycle

This guide discusses how to use the Ionic Framework Lifecycle events in an Ionic Vue application.

## Ionic Framework Lifecycle Methods

Ionic Framework provides a few lifecycle methods that you can use in your apps:

| Event Name         | Description                                                        |
| ------------------ | ------------------------------------------------------------------ |
| `ionViewWillEnter` | Fired when the component routing to is about to animate into view. |
| `ionViewDidEnter`  | Fired when the component routing to has finished animating.        |
| `ionViewWillLeave` | Fired when the component routing from is about to animate.         |
| `ionViewDidLeave`  | Fired when the component routing to has finished animating.        |

The lifecycles are defined the same way Vue lifecycle methods are - as functions at the root of your Vue component:

```tsx
import { IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  ionViewDidEnter() {
    console.log('Home page did enter');
  },
  ionViewDidLeave() {
    console.log('Home page did leave');
  },
  ionViewWillEnter() {
    console.log('Home page will enter');
  },
  ionViewWillLeave() {
    console.log('Home page will leave');
  },
  components: {
    IonPage,
  },
});
```

### Composition API Hooks

These lifecycles can also be expressed using Vue 3's Composition API:

```tsx
import { IonPage, onIonViewWillEnter, onIonViewDidEnter, onIonViewWillLeave, onIonViewDidLeave } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonPage,
  },
  setup() {
    onIonViewDidEnter(() => {
      console.log('Home page did enter');
    });

    onIonViewDidLeave(() => {
      console.log('Home page did leave');
    });

    onIonViewWillEnter(() => {
      console.log('Home page will enter');
    });

    onIonViewWillLeave(() => {
      console.log('Home page will leave');
    });
  },
});
```

:::note
Pages in your app need to be using the `IonPage` component in order for lifecycle methods and hooks to fire properly.
:::

## How Ionic Framework Handles the Life of a Page

Ionic Framework has its router outlet, called `<ion-router-outlet>`. This outlet extends Vue Router's `<router-view>` with some additional functionality to enable better experiences for mobile devices.

When an app is wrapped in `<ion-router-outlet>`, Ionic Framework treats navigation a bit differently. When you navigate to a new page, Ionic Framework will keep the old page in the existing DOM, but hide it from your view and transition the new page. The reason we do this is two-fold:

1. We can maintain the state of the old page (data on the screen, scroll position, etc...).
2. We can provide a smoother transition back to the page since it is already there and does not need to be created.

Pages are only removed from the DOM when they are "popped", for instance, by pressing the back button in the UI or the browsers back button.

Because of this special handling, certain Vue Router components such as `<keep-alive>`, `<transition>`, and `<router-view>` should not be used in Ionic Vue applications. Additionally, Vue Router's Scroll Behavior API is not needed here as each page's scroll position is preserved automatically.

All the lifecycle methods in Vue (`mounted`, `beforeUnmount`, etc..) are available for you to use as well. However, since Ionic Vue manages the lifetime of a page, certain events might not fire when you expect them to. For instance, `mounted` fires the first time a page is displayed, but if you navigate away from the page Ionic Framework might keep the page around in the DOM, and a subsequent visit to the page might not call `mounted` again. This scenario is the main reason the Ionic Framework lifecycle methods exist, to still give you a way to call logic when views enter and exit when the native framework's events might not fire.

## Guidance for Each Lifecycle Method

Below are some tips on use cases for each of the life cycle events.

- `ionViewWillEnter` - Since `ionViewWillEnter` is called every time the view is navigated to (regardless if initialized or not), it is a good method to load data from services.
- `ionViewDidEnter` - If you see performance problems from using `ionViewWillEnter` when loading data, you can do your data calls in `ionViewDidEnter` instead. However, this event will not fire until after the page is visible to the user, so you might want to use either a loading indicator or a skeleton screen such as [ion-skeleton-text](../api/skeleton-text), so content does not flash in un-naturally after the transition is complete.
- `ionViewWillLeave` - Can be used for cleanup, like unsubscribing from data sources. Since `beforeUnmount` might not fire when you navigate from the current page, put your cleanup code here if you do not want it active while the screen is not in view.
- `ionViewDidLeave` - When this event fires, you know the new page has fully transitioned in, so any logic you might not normally do when the view is visible can go here.
