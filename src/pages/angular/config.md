---
previousText: 'Navigation/Routing'
previousUrl: '/docs/angular/navigation'
nextText: 'Platform'
nextUrl: '/docs/angular/platform'
contributors:
  - liamdebeasi
  - mhartington
---

# Config

Ionic Config provides a way to change the properties of components globally across an app. It can set the app mode, tab button layout, animations, and more.

## Usage

### Global

To override the initial Ionic config for the app, provide a config in `IonicModule.forRoot` in the `app.module.ts` file.

```typescript
import { IonicModule } from '@ionic/angular';

@NgModule({
  ...
  imports: [
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

In the above example, we are disabling the Material Design ripple effect across the app, as well as forcing the mode to be Material Design.


### By Component

Ionic Config is not reactive, so it is recommended to use a component's properties when you want to override its default behavior rather than set its config globally.

```typescript
import { createAnimation, IonicModule } from '@ionic/angular';

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


## Config Options

Below is a list of config options that Ionic uses.

| Config                   | Type               | Description                                                                                              |
|--------------------------|--------------------|----------------------------------------------------------------------------------------------------------|
| `actionSheetEnter`       | `AnimationBuilder` | Provides a custom enter animation for all `ion-action-sheet`, overriding the default "animation".
| `actionSheetLeave`       | `AnimationBuilder` | Provides a custom leave animation for all `ion-action-sheet`, overriding the default "animation".
| `alertEnter`             | `AnimationBuilder` | Provides a custom enter animation for all `ion-alert`, overriding the default "animation".
| `alertLeave`             | `AnimationBuilder` | Provides a custom leave animation for all `ion-alert`, overriding the default "animation".
| `animated`               | `boolean`          | If `true`, Ionic will enable all animations and transitions across the app.
| `backButtonIcon`         | `string`           | Overrides the default icon in all `<ion-back-button>` components.
| `backButtonText`         | `string`           | Overrides the default text in all `<ion-back-button>` components.
| `hardwareBackButton`     | `boolean`          | If `true`, Ionic will respond to the hardware back button in an Android device.
| `infiniteLoadingSpinner` | `SpinnerTypes`     | Overrides the default spinner type in all `<ion-infinite-scroll-content>` components.
| `loadingEnter`           | `AnimationBuilder` | Provides a custom enter animation for all `ion-loading`, overriding the default "animation".
| `loadingLeave`           | `AnimationBuilder` | Provides a custom leave animation for all `ion-loading`, overriding the default "animation".
| `loadingSpinner`         | `SpinnerTypes`     | Overrides the default spinner for all `ion-loading` overlays.
| `menuIcon`               | `string`           | Overrides the default icon in all `<ion-menu-button>` components.
| `menuType`               | `string`           | Overrides the default menu type for all `<ion-menu>` components.
| `modalEnter`             | `AnimationBuilder` | Provides a custom enter animation for all `ion-modal`, overriding the default "animation".
| `modalLeave`             | `AnimationBuilder` | Provides a custom leave animation for all `ion-modal`, overriding the default "animation".
| `mode`                   | `Mode`             | The mode determines which platform styles to use for the whole application.
| `navAnimation`           | `AnimationBuilder` | Overrides the default "animation" of all `ion-nav` and `ion-router-outlet` across the whole application.
| `pickerEnter`            | `AnimationBuilder` | Provides a custom enter animation for all `ion-picker`, overriding the default "animation".
| `pickerLeave`            | `AnimationBuilder` | Provides a custom leave animation for all `ion-picker`, overriding the default "animation".
| `popoverEnter`           | `AnimationBuilder` | Provides a custom enter animation for all `ion-popover`, overriding the default "animation".
| `popoverLeave`           | `AnimationBuilder` | Provides a custom leave animation for all `ion-popover`, overriding the default "animation".
| `refreshingIcon`         | `string`           | Overrides the default icon in all `<ion-refresh-content>` components.
| `refreshingSpinner`      | `SpinnerTypes`     | Overrides the default spinner type in all `<ion-refresh-content>` components.
| `spinner`                | `SpinnerTypes`     | Overrides the default spinner in all `<ion-spinner>` components.
| `statusTap`              | `boolean`          | If `true`, clicking or tapping the status bar will cause the content to scroll to the top.
| `swipeBackEnabled`       | `boolean`          | If `true`, Ionic will enable the "swipe-to-go-back" gesture across the application.
| `tabButtonLayout`        | `TabButtonLayout`  | Overrides the default "layout" of all `ion-bar-button` across the whole application.
| `toastEnter`             | `AnimationBuilder` | Provides a custom enter animation for all `ion-toast`, overriding the default "animation".
| `toastLeave`             | `AnimationBuilder` | Provides a custom leave animation for all `ion-toast`, overriding the default "animation".