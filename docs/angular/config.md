---
title: Config
---

<head>
  <title>Config | Ionic Config to Change Component Properties Globally</title>
  <meta
    name="description"
    content="Ionic Config provides a way to change the properties of components globally across an app. Config can set the app mode, tab button layout, animations, and more."
  />
</head>

Ionic Config provides a way to change the properties of components globally across an app. It can set the app mode, tab button layout, animations, and more.

## Global Config

To override the default Ionic configurations for your application, provide your own custom config to `IonicModule.forRoot(...)`. The available config keys can be found in the [`IonicConfig`](#ionicconfig) interface.

For example, to disable ripple effects and default the mode to Material Design:

```tsx title="app.module.ts"
import { IonicModule } from '@ionic/angular';

@NgModule({
  ...
  imports: [
    IonicModule.forRoot({
      rippleEffect: false,
      mode: 'md'
    })
  ],
  ...
})
```

## Per-Component Config

Ionic Config is not reactive. It is recommended to use a component's properties or a directive when you want to override its default behavior.

```tsx
import { IonicModule } from '@ionic/angular';

@NgModule({
  ...
  imports: [
    IonicModule.forRoot({
      // Not recommended when you require reactive values
      backButtonText: 'Go Back'
    })
  ],
  ...
})
```

This will set the default text for `ion-back-button` to `Go Back`. However, if you were to change the value of the `backButtonText` config to `Do Not Go Back`, the `ion-back-button` default text would still default to `Go Back` as the component has already been initialized and rendered. Instead, it is recommended to use the `text` property on `ion-back-button`.

```html
<ion-back-button [text]="getBackButtonText()"></ion-back-button>
```

In this example we have used our `ion-back-button` in such a way that the text can be dynamically updated if there were to be a change that warranted it, such as a language or locale change. The `getBackButtonText` method would be responsible for returning the correct text.

:::note

When binding a function to a property, it is recommended to use `ChangeDetectionStrategy.OnPush`.

:::

## Per-Platform Config

Ionic Config can also be set on a per-platform basis. For example, this allows you to disable animations if the app is being run in a browser on a potentially slower device. Developers can take advantage of the Platform utilities to accomplish this.

Since the config is set at runtime, you will not have access to the Platform Dependency Injection. Instead, you can use the underlying functions that the provider uses directly.

In the following example, we are disabling all animations in our Ionic app only if the app is running in a mobile web browser.
The `isPlatform()` call returns `true` or `false` based upon the platform that is passed in. See the [Platform Documentation](platform.md#platforms) for a list of possible values.

```tsx
import { isPlatform, IonicModule } from '@ionic/angular';

@NgModule({
  ...
  imports: [
    IonicModule.forRoot({
      animated: !isPlatform('mobileweb')
    })
  ],
  ...
})
```

**Per-platform config with fallback for unmatched platforms:**

```tsx
import { isPlatform, IonicModule } from '@ionic/angular';

const getConfig = () => {
  if (isPlatform('hybrid')) {
    return {
      backButtonText: 'Previous',
      tabButtonLayout: 'label-hide'
    }
  }

  return {
    menuIcon: 'ellipsis-vertical'
  }
}
@NgModule({
  ...
  imports: [
    IonicModule.forRoot(getConfig())
  ],
  ...
})
```

**Per-platform config overrides:**

```tsx
import { isPlatform, IonicModule } from '@ionic/angular';

const getConfig = () => {
  let config = {
    animated: false
  };

  if (isPlatform('iphone')) {
    config = {
      ...config,
      backButtonText: 'Previous'
    }
  }

  return config;
}
@NgModule({
  ...
  imports: [
    IonicModule.forRoot(getConfig())
  ],
  ...
})
```

## API Reference

### get

▸ **get**(key: string, fallback?: any): `any`

Returns a config value as an `any`. Returns `null` if the config is not defined.

```ts
import { Config } from '@ionic/angular';

@Component(...)
class AppComponent {
  constructor(config: Config) {
    const mode = config.get('mode');
  }
}
```

### getBoolean

▸ **getBoolean**(key: string, fallback?: boolean): `boolean`

Returns a config value as a `boolean`. Returns `false` if the config is not defined.

```ts
import { Config } from '@ionic/angular';

@Component(...)
class AppComponent {
  constructor(config: Config) {
    const swipeBackEnabled = config.getBoolean('swipeBackEnabled');
  }
}
```

### getNumber

▸ **getNumber**(key: string, fallback?: number): `number`

Returns a config value as a `number`. Returns `0` if the config is not defined.

```ts
import { Config } from '@ionic/angular';

@Component(...)
class AppComponent {
  constructor(config: Config) {
    const keyboardHeight = config.getNumber('keyboardHeight');
  }
}
```

## Interfaces

### IonicConfig

Below is the config options that Ionic uses.

```ts
interface IonicConfig {
  /**
   * When it's set to `false`, disables all animation and transition across the app.
   * Can be useful to make ionic smoother in slow devices, when animations can't run smoothly.
   */
  animated?: boolean;
  /**
   * When it's set to `false`, it disables all material-design ripple-effects across the app.
   * Defaults to `true`.
   */
  rippleEffect?: boolean;
  /**
   * The mode determines which platform styles to use for the whole application.
   */
  mode?: Mode;
  /**
   * Wherever ionic will respond to hardware go back buttons in an Android device.
   * Defaults to `true` when ionic runs in a mobile device.
   */
  hardwareBackButton?: boolean;
  /**
   * Whenever clicking the top status bar should cause the scroll to top in an application.
   * Defaults to `true` when ionic runs in a mobile device.
   */
  statusTap?: boolean;
  /**
   * Overrides the default icon in all `<ion-back-button>` components.
   */
  backButtonIcon?: string;
  /**
   * Overrides the default text in all `<ion-back-button>` components.
   */
  backButtonText?: string;
  /**
   * Overrides the default defaultHref in all `<ion-back-button>` components.
   */
  backButtonDefaultHref?: string;
  /**
   * Overrides the default icon in all `<ion-menu-button>` components.
   */
  menuIcon?: string;
  /**
   * Overrides the default menu type for all `<ion-menu>` components.
   * By default the menu type is chosen based in the app's mode.
   */
  menuType?: string;
  /**
   * Overrides the default spinner in all `<ion-spinner>` components.
   * By default the spinner type is chosen based in the mode (ios or md).
   */
  spinner?: SpinnerTypes;
  /**
   * Overrides the default spinner for all `ion-loading` overlays, ie. the ones
   * created with `ion-loading-controller`.
   */
  loadingSpinner?: SpinnerTypes | null;
  /**
   * Overrides the default icon in all `<ion-refresh-content>` components.
   */
  refreshingIcon?: string;
  /**
   * Overrides the default spinner type in all `<ion-refresh-content>` components.
   */
  refreshingSpinner?: SpinnerTypes | null;
  /**
   * Overrides the default spinner type in all `<ion-infinite-scroll-content>` components.
   */
  infiniteLoadingSpinner?: SpinnerTypes | null;
  /**
   * Global switch that disables or enables "swipe-to-go-back" gesture across all
   * `ion-nav` in your application.
   */
  swipeBackEnabled?: boolean;
  /**
   * Overrides the default "layout" of all `ion-bar-button` across the whole application.
   */
  tabButtonLayout?: TabButtonLayout;
  /**
   * Overrides the default "animation" of all `ion-nav` and `ion-router-outlet` across the whole application.
   * This prop allows to replace the default transition and provide a custom one that applies to all navigation outlets.
   */
  navAnimation?: AnimationBuilder;
  /**
   * Provides a custom enter animation for all `ion-action-sheet`, overriding the default "animation".
   */
  actionSheetEnter?: AnimationBuilder;
  /**
   * Provides a custom enter animation for all `ion-alert`, overriding the default "animation".
   */
  alertEnter?: AnimationBuilder;
  /**
   * Provides a custom enter animation for all `ion-loading`, overriding the default "animation".
   */
  loadingEnter?: AnimationBuilder;
  /**
   * Provides a custom enter animation for all `ion-modal`, overriding the default "animation".
   */
  modalEnter?: AnimationBuilder;
  /**
   * Provides a custom enter animation for all `ion-popover`, overriding the default "animation".
   */
  popoverEnter?: AnimationBuilder;
  /**
   * Provides a custom enter animation for all `ion-toast`, overriding the default "animation".
   */
  toastEnter?: AnimationBuilder;
  /**
   * Provides a custom enter animation for all `ion-picker`, overriding the default "animation".
   */
  pickerEnter?: AnimationBuilder;
  /**
   * Provides a custom leave animation for all `ion-action-sheet`, overriding the default "animation".
   */
  actionSheetLeave?: AnimationBuilder;
  /**
   * Provides a custom leave animation for all `ion-alert`, overriding the default "animation".
   */
  alertLeave?: AnimationBuilder;
  /**
   * Provides a custom leave animation for all `ion-loading`, overriding the default "animation".
   */
  loadingLeave?: AnimationBuilder;
  /**
   * Provides a custom leave animation for all `ion-modal`, overriding the default "animation".
   */
  modalLeave?: AnimationBuilder;
  /**
   * Provides a custom leave animation for all `ion-popover`, overriding the default "animation".
   */
  popoverLeave?: AnimationBuilder;
  /**
   * Provides a custom leave animation for all `ion-toast`, overriding the default "animation".
   */
  toastLeave?: AnimationBuilder;
  /**
   * Provides a custom leave animation for all `ion-picker`, overriding the default "animation".
   */
  pickerLeave?: AnimationBuilder;
  /**
   * If `true`, Ionic will enable a basic DOM sanitizer on component properties that accept custom HTML.
   */
  sanitizerEnabled?: boolean;
  /**
   * Overrides the default platform detection methods.
   */
  platform?: PlatformConfig;
}
```
