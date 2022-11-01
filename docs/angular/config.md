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

To override the default Ionic configurations for your app, provide your own custom config to `IonicModule.forRoot(...)`. The available config keys can be found in the [`IonicConfig`](#ionicconfig) interface.

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

Ionic Config is not reactive. Updating the config's value after the component has rendered will result in the previous value. It is recommended to use a component's properties instead of updating the config, when you require reactive values.

**Not recommended**

```ts
import { IonicModule } from '@ionic/angular';

@NgModule({
  ...
  imports: [
    IonicModule.forRoot({
      // Not recommended when your app requires reactive values
      backButtonText: 'Go Back'
    })
  ],
  ...
})
```

**Recommended**

```html
<ion-back-button [text]="backButtonText"></ion-back-button>
```

```ts
@Component(...)
class MyComponent {
  backButtonText = this.config.get('backButtonText');

  constructor(private config: Config) { }

  localeChanged(locale: string) {
    if (locale === 'es_ES') {
      this.backButtonText = 'Devolver';
    }
  }

}
```

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

## Methods

### get

|                 |                                                                                  |
| --------------- | -------------------------------------------------------------------------------- |
| **Description** | Returns a config value as an `any`. Returns `null` if the config is not defined. |
| **Signature**   | `get(key: string, fallback?: any) => any`                                          |

#### Examples

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

|                 |                                                                                      |
| --------------- | ------------------------------------------------------------------------------------ |
| **Description** | Returns a config value as a `boolean`. Returns `false` if the config is not defined. |
| **Signature**   | `getBoolean(key: string, fallback?: boolean) => boolean`                               |

#### Examples

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

|                 |                                                                                 |
| --------------- | ------------------------------------------------------------------------------- |
| **Description** | Returns a config value as a `number`. Returns `0` if the config is not defined. |
| **Signature**   | `getNumber(key: string, fallback?: number) => number`                             |

#### Examples

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

Below are the config options that Ionic uses.

| Config                   | Type                                                                              | Description                                                                                              |
| ------------------------ | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `actionSheetEnter`       | `AnimationBuilder`                                                                | Provides a custom enter animation for all `ion-action-sheet`, overriding the default "animation".        |
| `actionSheetLeave`       | `AnimationBuilder`                                                                | Provides a custom leave animation for all `ion-action-sheet`, overriding the default "animation".        |
| `alertEnter`             | `AnimationBuilder`                                                                | Provides a custom enter animation for all `ion-alert`, overriding the default "animation".               |
| `alertLeave`             | `AnimationBuilder`                                                                | Provides a custom leave animation for all `ion-alert`, overriding the default "animation".               |
| `animated`               | `boolean`                                                                         | If `true`, Ionic will enable all animations and transitions across the app.                              |
| `backButtonIcon`         | `string`                                                                          | Overrides the default icon in all `<ion-back-button>` components.                                        |
| `backButtonText`         | `string`                                                                          | Overrides the default text in all `<ion-back-button>` components.                                        |
| `hardwareBackButton`     | `boolean`                                                                         | If `true`, Ionic will respond to the hardware back button in an Android device.                          |
| `infiniteLoadingSpinner` | `SpinnerTypes`                                                                    | Overrides the default spinner type in all `<ion-infinite-scroll-content>` components.                    |
| `loadingEnter`           | `AnimationBuilder`                                                                | Provides a custom enter animation for all `ion-loading`, overriding the default "animation".             |
| `loadingLeave`           | `AnimationBuilder`                                                                | Provides a custom leave animation for all `ion-loading`, overriding the default "animation".             |
| `loadingSpinner`         | `SpinnerTypes`                                                                    | Overrides the default spinner for all `ion-loading` overlays.                                            |
| `menuIcon`               | `string`                                                                          | Overrides the default icon in all `<ion-menu-button>` components.                                        |
| `menuType`               | `string`                                                                          | Overrides the default menu type for all `<ion-menu>` components.                                         |
| `modalEnter`             | `AnimationBuilder`                                                                | Provides a custom enter animation for all `ion-modal`, overriding the default "animation".               |
| `modalLeave`             | `AnimationBuilder`                                                                | Provides a custom leave animation for all `ion-modal`, overriding the default "animation".               |
| `mode`                   | `Mode`                                                                            | The mode determines which platform styles to use for the whole application.                              |
| `navAnimation`           | `AnimationBuilder`                                                                | Overrides the default "animation" of all `ion-nav` and `ion-router-outlet` across the whole application. |
| `pickerEnter`            | `AnimationBuilder`                                                                | Provides a custom enter animation for all `ion-picker`, overriding the default "animation".              |
| `pickerLeave`            | `AnimationBuilder`                                                                | Provides a custom leave animation for all `ion-picker`, overriding the default "animation".              |
| `platform`               | [`PlatformConfig`](/docs/angular/platform#customizing-platform-detection-methods) | Overrides the default platform detection methods.                                                        |
| `popoverEnter`           | `AnimationBuilder`                                                                | Provides a custom enter animation for all `ion-popover`, overriding the default "animation".             |
| `popoverLeave`           | `AnimationBuilder`                                                                | Provides a custom leave animation for all `ion-popover`, overriding the default "animation".             |
| `refreshingIcon`         | `string`                                                                          | Overrides the default icon in all `<ion-refresh-content>` components.                                    |
| `refreshingSpinner`      | `SpinnerTypes`                                                                    | Overrides the default spinner type in all `<ion-refresh-content>` components.                            |
| `sanitizerEnabled`       | `boolean`                                                                         | If `true`, Ionic will enable a basic DOM sanitizer on component properties that accept custom HTML.      |
| `spinner`                | `SpinnerTypes`                                                                    | Overrides the default spinner in all `<ion-spinner>` components.                                         |
| `statusTap`              | `boolean`                                                                         | If `true`, clicking or tapping the status bar will cause the content to scroll to the top.               |
| `swipeBackEnabled`       | `boolean`                                                                         | If `true`, Ionic will enable the "swipe-to-go-back" gesture across the application.                      |
| `tabButtonLayout`        | `TabButtonLayout`                                                                 | Overrides the default "layout" of all `ion-bar-button` across the whole application.                     |
| `toastEnter`             | `AnimationBuilder`                                                                | Provides a custom enter animation for all `ion-toast`, overriding the default "animation".               |
| `toastLeave`             | `AnimationBuilder`                                                                | Provides a custom leave animation for all `ion-toast`, overriding the default "animation".               |
