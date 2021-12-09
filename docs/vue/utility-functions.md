# Utility Functions

Ionic Vue ships with several utility functions that you can use in your application to make certain tasks easier such as managing the on-screen keyboard and the hardware back button.

## Router

The `useIonRouter` function can be used to provide greater control over page navigation beyond what the Vue Router API provides. In particular, it can be used to programmatically navigate within your app while controlling the animations. It can also be used to determine whether or not users can navigate back which is useful when closing the app after the user presses the hardware back button when on the root page.

```js
import { IonPage, useIonRouter } from '@ionic/vue';
import { defineComponent } from 'vue';
import { customAnimation } from '@/animations/customAnimation';

export default defineComponent({
  components: { IonPage },
  setup() {
    const router = useIonRouter();
    const push = () => {
      router.push('/page2', customAnimation);
    };
    const back = () => {
      router.back(customAnimation);
    };

    return { push, back };
  },
});
```

### Interfaces

```ts
import { AnimationBuilder } from '@ionic/vue';
import { RouteLocationRaw } from 'vue-router';

interface UseIonRouterResult {
  canGoBack: (deep?: number) => boolean;
  push: (location: RouteLocationRaw, routerAnimation?: AnimationBuilder) => void;
  replace: (location: RouteLocationRaw, routerAnimation?: AnimationBuilder) => void;
  back: (routerAnimation?: AnimationBuilder) => void;
  forward: (routerAnimation?: AnimationBuilder) => void;
  navigate: (
    location: string | Location,
    routerDirection?: 'forward' | 'back' | 'root' | 'none',
    routerAction?: 'push' | 'pop' | 'replace',
    routerAnimation?: AnimationBuilder
  ) => void;
}

useIonRouter(): UseIonRouterResult;
```

- The `push` method is the equivalent of calling `ionRouter.navigate(location, 'forward', 'push', animation)`.

- The `replace` method is the equivalent of calling `ionRouter.navigate(location, 'root', 'replace', animation)`.

See the [Vue Navigation Documentation](./navigation#navigating-using-useionrouter) for more usage examples.

## Hardware Back Button

The `useBackButton` function can be used to register a callback function to fire whenever the hardware back button on Android is pressed. Additionally it accepts a priority parameter, allowing developers to customize which handler fires first if multiple handlers are registered.

```js
import { useBackButton } from '@ionic/vue';

...

useBackButton(10, () => {
  console.log('Hardware Back Button was called!');
});
```

### Interface

```ts
type Handler = (processNextHandler: () => void) => Promise<any> | void | null;
interface UseBackButtonResult {
  unregister: () => void;
}

useBackButton(priority: number, handler: Handler): UseBackButtonResult;
```

See the [Hardware Back Button Documentation](../developing/hardware-back-button) for more information and usage examples.

:::note
The `useBackButton` callback will only fire when your app is running in Capacitor or Cordova. See [Hardware Back Button in Capacitor and Cordova](../developing/hardware-back-button#hardware-back-button-in-capacitor-and-cordova) for more information.
:::

## Keyboard

The `useKeyboard` function returns an object that contains the state of the on-screen keyboard. This object provides information such as whether or not the on-screen keyboard is presented and what the height of the keyboard is in pixels. This information is provided in a Vue `ref` so it will be reactive in your application.

```js
import { watch } from 'vue';
import { useKeyboard } from '@ionic/vue';

const { isOpen, keyboardHeight } = useKeyboard();

watch(keyboardHeight, () => {
  console.log(`Keyboard height is ${keyboardHeight.value}px`);
});
```

### Interface

```ts
interface UseKeyboardResult {
  isOpen: Ref<boolean>;
  keyboardHeight: Ref<number>;
  unregister: () => void
}

useKeyboard(): UseKeyboardResult;
```

See the [Keyboard Documentation](../developing/keyboard) for more information and usage examples.

## Ionic Lifecycles

Ionic Vue provides several lifecycle hooks for the `setup()` function to tap into the Ionic Framework page lifecycle.

```js
import { IonPage, onIonViewWillEnter, onIonViewDidEnter, onIonViewWillLeave, onIonViewDidLeave } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonPage },
  setup() {
    onIonViewDidEnter(() => {
      console.log('Page did enter');
    });

    onIonViewDidLeave(() => {
      console.log('Page did leave');
    });

    onIonViewWillEnter(() => {
      console.log('Page will enter');
    });

    onIonViewWillLeave(() => {
      console.log('Page will leave');
    });
  },
});
```

:::note
Pages in your app need to be using the `IonPage` component in order for lifecycle methods and hooks to fire properly.
:::

See the [Vue Lifecycle Documentation](./lifecycle) for more information and usage examples.
