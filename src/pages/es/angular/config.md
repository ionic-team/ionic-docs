---
previousText: 'Navigation/Routing'
previousUrl: '/docs/angular/navigation'
nextText: 'Platform'
nextUrl: '/docs/angular/platform'
contributors:
  - liamdebeasi
  - mhartington
---

# Configuración

Ionic Config proporciona una manera de cambiar las propiedades de los componentes globalmente a través de una aplicación. Puede configurar el modo de aplicación, diseño de botones de pestaña, animaciones y más.

## Configuración global

Para sobreescribir la configuración Ionic inicial de la aplicación, proporcione una configuración en `IonicModule.forRoot` en el archivo `app.module.ts`.

```typescript
importar { IonicModule } de '@ionic/angular';

@NgModule({
...
  importación: [
    BrowserModule,
    IonicModule.forRoot({
      rippleEffect: false,
      mode: 'md'
    }),
    AppRoutingModule
  ],
...
})
```

En el ejemplo anterior, estamos desactivando el efecto de riple de Material Design a través de la aplicación, así como forzando el modo a ser Material Design.


## Per-Component Config

Ionic Config is not reactive, so it is recommended to use a component's properties when you want to override its default behavior rather than set its config globally.

```typescript
import { IonicModule } from '@ionic/angular';

@NgModule({
  ...
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      backButtonText: 'Go Back'
    }),
    AppRoutingModule
  ],
  ...
})
```

This will set the default text for `ion-back-button` to `Go Back`. However, if you were to change the value of the `backButtonText` config to `Do Not Go Back`, the `ion-back-button` default text would still default to `Go Back` as the component has already been initialized and rendered. Instead, it is recommended to use the `text` property on `ion-back-button`.

```html
<ion-back-button [text]="getBackButtonText()"></ion-back-button>
```

In this example we have used our `ion-back-button` in such a way that the text can be dynamically updated if there were to be a change that warranted it, such as a language or locale change. The `getBackButtonText` method would be responsible for returning the correct text.

## Per-Platform Config

Ionic Config can also be set on a per-platform basis. For example, this allows you to disable animations if the app is being run in a browser on a potentially slower device. Developers can take advantage of the Platform utilities to accomplish this.

Since the config is set at runtime, you will not have access to the Platform Dependency Injection. Instead, you can use the underlying functions that the provider uses directly.

In the following example, we are disabling all animations in our Ionic app only if the app is running in a mobile web browser. The `isPlatform()` call returns `true` or `false` based upon the platform that is passed in. See the [Platform Documentation](./platform#platforms) for a list of possible values.


```typescript
import { isPlatform, IonicModule } from '@ionic/angular';

@NgModule({
  ...
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      animated: !isPlatform('mobileweb')
    }),
    AppRoutingModule
  ],
  ...
})
```

The next example allows you to set an entirely different configuration based upon the platform, falling back to a default config if no platforms match:

```typescript
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
    BrowserModule,
    IonicModule.forRoot(getConfig()),
    AppRoutingModule
  ],
  ...
})
```

Finally, this example allows you to accumulate a config object based upon different platform requirements:

```typescript
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
    BrowserModule,
    IonicModule.forRoot(getConfig()),
    AppRoutingModule
  ],
  ...
})
```

## Config Options

Below is a list of config options that Ionic uses.

| Config                   | Type               | Description                                                                                              |
| ------------------------ | ------------------ | -------------------------------------------------------------------------------------------------------- |
| `actionSheetEnter`       | `AnimationBuilder` | Provides a custom enter animation for all `ion-action-sheet`, overriding the default "animation".        |
| `actionSheetLeave`       | `AnimationBuilder` | Provides a custom leave animation for all `ion-action-sheet`, overriding the default "animation".        |
| `alertEnter`             | `AnimationBuilder` | Provides a custom enter animation for all `ion-alert`, overriding the default "animation".               |
| `alertLeave`             | `AnimationBuilder` | Provides a custom leave animation for all `ion-alert`, overriding the default "animation".               |
| `animated`               | `boolean`          | If `true`, Ionic will enable all animations and transitions across the app.                              |
| `backButtonIcon`         | `string`           | Overrides the default icon in all `<ion-back-button>` components.                                  |
| `backButtonText`         | `string`           | Overrides the default text in all `<ion-back-button>` components.                                  |
| `hardwareBackButton`     | `boolean`          | If `true`, Ionic will respond to the hardware back button in an Android device.                          |
| `infiniteLoadingSpinner` | `SpinnerTypes`     | Overrides the default spinner type in all `<ion-infinite-scroll-content>` components.              |
| `loadingEnter`           | `AnimationBuilder` | Provides a custom enter animation for all `ion-loading`, overriding the default "animation".             |
| `loadingLeave`           | `AnimationBuilder` | Provides a custom leave animation for all `ion-loading`, overriding the default "animation".             |
| `loadingSpinner`         | `SpinnerTypes`     | Overrides the default spinner for all `ion-loading` overlays.                                            |
| `menuIcon`               | `string`           | Overrides the default icon in all `<ion-menu-button>` components.                                  |
| `menuType`               | `string`           | Overrides the default menu type for all `<ion-menu>` components.                                   |
| `modalEnter`             | `AnimationBuilder` | Provides a custom enter animation for all `ion-modal`, overriding the default "animation".               |
| `modalLeave`             | `AnimationBuilder` | Provides a custom leave animation for all `ion-modal`, overriding the default "animation".               |
| `mode`                   | `Mode`             | The mode determines which platform styles to use for the whole application.                              |
| `navAnimation`           | `AnimationBuilder` | Overrides the default "animation" of all `ion-nav` and `ion-router-outlet` across the whole application. |
| `pickerEnter`            | `AnimationBuilder` | Provides a custom enter animation for all `ion-picker`, overriding the default "animation".              |
| `pickerLeave`            | `AnimationBuilder` | Provides a custom leave animation for all `ion-picker`, overriding the default "animation".              |
| `popoverEnter`           | `AnimationBuilder` | Provides a custom enter animation for all `ion-popover`, overriding the default "animation".             |
| `popoverLeave`           | `AnimationBuilder` | Provides a custom leave animation for all `ion-popover`, overriding the default "animation".             |
| `refreshingIcon`         | `string`           | Overrides the default icon in all `<ion-refresh-content>` components.                              |
| `refreshingSpinner`      | `SpinnerTypes`     | Overrides the default spinner type in all `<ion-refresh-content>` components.                      |
| `sanitizerEnabled`       | `boolean`          | If `true`, Ionic will enable a basic DOM sanitizer on component properties that accept custom HTML.      |
| `spinner`                | `SpinnerTypes`     | Overrides the default spinner in all `<ion-spinner>` components.                                   |
| `statusTap`              | `boolean`          | If `true`, clicking or tapping the status bar will cause the content to scroll to the top.               |
| `swipeBackEnabled`       | `boolean`          | If `true`, Ionic will enable the "swipe-to-go-back" gesture across the application.                      |
| `tabButtonLayout`        | `TabButtonLayout`  | Overrides the default "layout" of all `ion-bar-button` across the whole application.                     |
| `toastEnter`             | `AnimationBuilder` | Provides a custom enter animation for all `ion-toast`, overriding the default "animation".               |
| `toastLeave`             | `AnimationBuilder` | Provides a custom leave animation for all `ion-toast`, overriding the default "animation".               |
