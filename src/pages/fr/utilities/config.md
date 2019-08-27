---
previousText: ''
previousUrl: ''
nextText: 'Platform'
nextUrl: '/docs/utilities/platform'
contributors:
  - liamdebeasi
  - mhartington
---

# Config

The Config service provides a way to change the properties of components globally across an app. It can set the app mode, tab button layout, animations, and more.

## Usage

### Global

#### Basic example

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

#### Customizing Animations

```typescript
import { IonicModule } from '@ionic/angular';

@NgModule({
  ...
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      toastEnter: (AnimationC: Animation, baseEl: ShadowRoot, position: string): Promise<Animation> => {
        const baseAnimation = new AnimationC();

        const wrapperAnimation = new AnimationC();

        const hostEl = (baseEl.host || baseEl) as HTMLElement;
        const wrapperEl = baseEl.querySelector('.toast-wrapper') as HTMLElement;

        wrapperAnimation.addElement(wrapperEl);

        const bottom = `calc(8px + var(--ion-safe-area-bottom, 0px))`;
        const top = `calc(8px + var(--ion-safe-area-top, 0px))`;

        switch (position) {
          case 'top':
            wrapperEl.style.top = top;
            wrapperEl.style.opacity = 1;
            wrapperAnimation.fromTo('transform', `translateY(-${hostEl.clientHeight}px)`, 'translateY(10px)')
            break;
          case 'middle':
            const topPosition = Math.floor(
              hostEl.clientHeight / 2 - wrapperEl.clientHeight / 2
            );
            wrapperEl.style.top = `${topPosition}px`;
            wrapperAnimation.fromTo('opacity', 0.01, 1);
            break;
          default:
            wrapperEl.style.bottom = bottom;
            wrapperAnimation.fromTo('opacity', 0.01, 1);
            break;
        }
        return Promise.resolve(baseAnimation
          .addElement(hostEl)
          .easing('cubic-bezier(.36,.66,.04,1)')
          .duration(400)
          .add(wrapperAnimation));
      },
    }),
    AppRoutingModule
  ],
  ...
})
```

In the above example, we are customizing the "enter" animation for the `ion-toast` component. When an `ion-toast` component is presented from the top, it will slide down instead of fading in.

### By Component

#### Basic Example

```typescript
import { Component } from '@angular/core';
import { Config } from '@ionic/angular';
@Component({...})
export class HomePage {
  constructor(private config: Config) {
    const text = this.config.get('backButtonText');
    this.config.set('backButtonIcon', 'home');
  }
}
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
| `spinner`                | `SpinnerTypes`     | Overrides the default spinner in all `<ion-spinner>` components.                                   |
| `statusTap`              | `boolean`          | If `true`, clicking or tapping the status bar will cause the content to scroll to the top.               |
| `swipeBackEnabled`       | `boolean`          | If `true`, Ionic will enable the "swipe-to-go-back" gesture across the application.                      |
| `tabButtonLayout`        | `TabButtonLayout`  | Overrides the default "layout" of all `ion-bar-button` across the whole application.                     |
| `toastEnter`             | `AnimationBuilder` | Provides a custom enter animation for all `ion-toast`, overriding the default "animation".               |
| `toastLeave`             | `AnimationBuilder` | Provides a custom leave animation for all `ion-toast`, overriding the default "animation".               |