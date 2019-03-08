---
previousText: ''
previousUrl: ''
nextText: 'Platform'
nextUrl: '/docs/utilities/platform'
contributors:
  - liamdebeasi
  - mhartington
  - nigelbpeck
---

# Config

The Config service provides a way to change the properties of components. This can be done globally, at a platform level, or at a component level. They can be changed for testing by adding a parameter to the URL. It can set the app mode, tab button layout, animations, and more.

## Usage

Any value can be added to config, and looked up at a later time in any component. A config value can come from anywhere and be anything, but there are default values for each mode (see "Config Options" later in this document). The theming documentation has a chart of the default mode configuration.

### Checking Active Config

The config that is currently in force can be checked using the `Config` API.

```typescript
import { Component } from '@angular/core';
import { Config } from '@ionic/angular';
@Component({...})
export class HomePage {
  constructor(private config: Config) {
    const text = this.config.get('backButtonText', 'Default back button text.');
  }
}
```

Other options include `getBoolean` and `getNumber`. All support an optional fallback value as the second parameter.

### Setting Globally

Here we are passing our settings while importing the `IonicModule` module. This will disable the Material Design ripple effect across the app, as well as forcing the mode to be Material Design.

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

Here we are making the same change using the `Config` API. This can only be used to make changes globally.

```typescript
import { Config } from '@ionic/angular';
...
this.config.set('rippleEffect', false);
this.config.set('mode', 'md');
```

#### Per Platform

Here is an example where settings can be overridden based on platform. This will specify that tabs should be placed at the top for the `ios` platform, and otherwise at the bottom.

```typescript
import { IonicModule } from 'ionic-angular';

@NgModule({
  ...
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      tabsPlacement: 'bottom',
      platforms: {
        ios: {
          tabsPlacement: 'top',
        }
      }
    }),
    AppRoutingModule
  ],
  ...
})
```

Here we are making the same change using the `Config` API. This can only be used to make changes globally. The platform is an optional first parameter on `config.set()`.

```typescript
import { Config } from '@ionic/angular';
...
this.config.set('tabsPlacement', 'bottom');
this.config.set('ios', 'tabsPlacement', 'top');
```

### Setting for Components

We can configure values at a component level. Take `tabsPlacement`, we can configure this as a property on our `ion-tabs`.

```
<ion-tabs tabsPlacement="top">
  <ion-tab tabTitle="Dash" tabIcon="pulse" [root]="tabRoot"></ion-tab>
</ion-tabs>
```

To set dynamically at a component level, `@ViewChild` can be used.

### Testing with URL Parameters

We can configure settings using URL parameters. This is useful for testing while in the browser. Simply add `?ionic<PROPERTYNAME>=<value>` to the url.

```
http://localhost:8100/?ionicTabsPlacement=bottom
```

### Customizing Animations

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

## Config Options

The following chart displays each property with a description of what it controls.
 
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