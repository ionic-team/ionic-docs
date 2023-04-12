# Virtual Scroll

:::caution Looking for `ion-virtual-scroll`?

`ion-virtual-scroll` was deprecated in v6.0.0 and removed in v7.0.0. We recommend using the Virtuoso package detailed below.

:::

One virtual scrolling solution to consider for your Ionic React app is [Virtuoso](https://virtuoso.dev/). This guide will go over how to install `Virtuoso` into your Ionic React application and use it with other Ionic components.

## Installation

To setup the virtual scroller, first install `react-virtuoso`:

```shell
npm install react-virtuoso
```

## Usage

There are a few components that Virtuoso includes, but this example will use the `Virtuoso` component. This component should be added inside of your `IonContent` component:

```tsx
import React from 'react';
import { Virtuoso } from 'react-virtuoso';
import { IonAvatar, IonContent, IonItem, IonLabel, IonPage } from '@ionic/react';
const Home: React.FC = () => (
  <IonPage>
    <IonContent>
      <Virtuoso
        style={{ height: '100%' }}
        totalCount={100}
        itemContent={(index) => {
          return (
            <div style={{ height: '56px' }}>
              <IonItem>
                <IonAvatar slot="start">
                  <img src="https://picsum.photos/seed/picsum/40/40" />
                </IonAvatar>
                <IonLabel>{index}</IonLabel>
              </IonItem>
            </div>
          );
        }}
      />
    </IonContent>
  </IonPage>
);
export default Home;
```

After adding the `Virtuoso` component to our page, we need to define the size of the virtual scroll container. In this case, we want the container to take up the full height of the screen which we can do by adding `style={{ height: '100%' }}`.

Next, we want to define the total number of items to render via the `totalCount` property.

From there, we can use the `itemContent` property to pass a function that will be called to render each item in our virtual scroll content.

An important thing to note here is the `div` that wraps our `IonItem` component. When lazy loading Ionic components, there may be a few frames where the component is loaded but the styles have not loaded in. When this happens, the component's dimension will be `0`, and Virtuoso may throw an error. This is because Virtuoso needs distinct positions for each item it renders, and it cannot determine that when a component's dimension is `0`.

## Usage with Ionic Components

Ionic Framework requires that features such as collapsible large titles, `ion-infinite-scroll`, `ion-refresher`, and `ion-reorder-group` be used within an `ion-content`. To use these experiences with virtual scrolling, you must add the `.ion-content-scroll-host` class to the virtual scroll viewport.

For example:

```tsx
<IonPage>
  <IonContent scrollY={false}>
    <Virtuoso className="ion-content-scroll-host">{/* Your existing content and configurations */}</Virtuoso>
  </IonContent>
</IonPage>
```

## Further Reading

This guide only covers a small portion of what `Virtuoso` is capable of. For more details, please see the [Virtuoso documentation](https://virtuoso.dev/).
