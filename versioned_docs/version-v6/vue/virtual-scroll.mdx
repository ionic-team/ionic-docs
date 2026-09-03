# Virtual Scroll

One virtual scrolling solution to consider for your Ionic Vue app is [vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller/blob/next/packages/vue-virtual-scroller/README.md). This guide will go over how to install `vue-virtual-scroller` into your Ionic Vue application and use it with other Ionic components.

## Installation

To setup the virtual scroller, first install `vue-virtual-scroller`:

```shell
npm install vue-virtual-scroller@next
```

:::note
Be sure to use the `next` tag otherwise you will get a version of `vue-virtual-scroll` that is only compatible with Vue 2.
:::
From here, we need to import the virtual scroller's CSS into our app. In `main.ts`, add the following line:

```js
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
```

## Registering Virtual Scroll Components

Now that we have the package installed and the CSS imported, we can either import all virtual scroll components or only import the components we want to use. This guide will show how to do both.

### Installing all Components

To install all virtual scroll components for use your app, add the following import to `main.ts`:

```js
import VueVirtualScroller from 'vue-virtual-scroller';
```

Next, we need to install this in our Vue application:

```js
app.use(VueVirtualScroller);
```

After doing this, all virtual scroll components will be available for use in our app.

:::note
Installing all components may result in unused virtual scroll components being added to your application bundle. See the [Installing Specific Components](#installing-specific-components) section below for an approach that works better with treeshaking.
:::

### Installing Specific Components

To install specific virtual scroll components for use in your app, import the component you want to use in `main.ts`. In this example, we will be using the `RecycleScroller` component:

```js
import { RecycleScroller } from 'vue-virtual-scroller';
```

Next, we need to add the component to our Vue application:

```js
app.component('RecycleScroller', RecycleScroller);
```

After doing this, we will be able to use the `RecycleScroller` component in our app.

## Usage

This example will use the `RecycleScroller` component which only renders the visible items in your list. Other components such as `DynamicScroller` can be used when you do not know the size of the items in advance.

The `RecycleScroller` component should be added inside of your `ion-content` component:

```html
<template>
  <ion-page>
    <ion-content>
      <ion-list>
        <RecycleScroller class="scroller" :items="list" :item-size="56">
          <template #default="{ item }">
            <ion-item>
              <ion-avatar slot="start">
                <img src="https://picsum.photos/seed/picsum/40/40" />
              </ion-avatar>
              <ion-label>{{ item }}</ion-label>
            </ion-item>
          </template>
        </RecycleScroller>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
  import { defineComponent, ref } from 'vue';
  import { IonAvatar, IonContent, IonItem, IonLabel, IonPage } from '@ionic/vue';

  export default defineComponent({
    components: {
      IonAvatar,
      IonContent,
      IonItem,
      IonLabel,
      IonPage,
    },
    setup() {
      const list = ref([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

      return { list };
    },
  });
</script>
```

There are two important pieces we need to account for in order for `RecycleScroller` to work. First, we need to provide it with an array of data to iterate over via the `items` property. In this case, we have an array called `list` which provides our data. Second, we need to provide the size of each node via the `item-size` property. If you do not know the size of the node ahead of time, you should use the `DynamicScroller` component instead.

Now that our template is setup, we need to add some CSS to size the virtual scrolling viewport correctly. In a `style` tag in your component, add the following:

```css
.scroller {
  height: 100%;
}
```

## Usage with Ionic Components

Ionic Framework requires that features such as collapsible large titles, `ion-infinite-scroll`, `ion-refresher`, and `ion-reorder-group` be used within an `ion-content`. To use these experiences with virtual scrolling, you must add the `.ion-content-scroll-host` class to the virtual scroll viewport.

For example:

```html
<template>
  <ion-page>
    <ion-content :scroll-y="false">
      <RecycleScroller class="ion-content-scroll-host scroller">
        <!-- Your existing content and configurations -->
      </RecycleScroller>
    </ion-content>
  </ion-page>
</template>
```

## Further Reading

This guide only covers a small portion of what `vue-virtual-scroller` is capable of. For more details, please see the [vue-virtual-scroller documentation](https://github.com/Akryum/vue-virtual-scroller/blob/next/packages/vue-virtual-scroller/README.md).
