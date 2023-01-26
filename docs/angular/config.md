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