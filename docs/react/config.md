# Config

Ionic Config provides a way to change the properties of components globally across an app. It can set the app mode, tab button layout, animations, and more.

## Global Config

To override the initial Ionic config for the app, import the `setupIonicReact` function from `@ionic/react`, and call it before you render any Ionic components (including `IonApp`).

```tsx
setupIonicReact({
  rippleEffect: false,
  mode: 'md',
});
```

In the above example, we are disabling the Material Design ripple effect across the app, as well as forcing the mode to be Material Design.

## Per-Platform Config

Ionic Config can also be set on a per-platform basis. For example, this allows you to disable animations if the app is being run in a browser on a potentially slower device. Developers can take advantage of the Platform utilities to accomplish this.

In the following example, we are disabling all animations in our Ionic app only if the app is running in a mobile web browser.
The `isPlatform()` call returns `true` or `false` based upon the platform that is passed in. See the [Platform Documentation](platform.md#platforms) for a list of possible values.

```tsx
import { isPlatform, setupIonicReact } from '@ionic/react';

setupIonicReact({
  animated: !isPlatform('mobileweb'),
});
```

The next example allows you to set an entirely different configuration based upon the platform, falling back to a default config if no platforms match:

```tsx
import { isPlatform, setupIonicReact } from '@ionic/react';

const getConfig = () => {
  if (isPlatform('hybrid')) {
    return {
      backButtonText: 'Previous',
      tabButtonLayout: 'label-hide',
    };
  }

  return {
    menuIcon: 'ellipsis-vertical',
  };
};

setupIonicReact(getConfig());
```

Finally, this example allows you to accumulate a config object based upon different platform requirements:

```tsx
import { isPlatform, setupIonicReact } from '@ionic/react';

const getConfig = () => {
  let config = {
    animated: false,
  };

  if (isPlatform('iphone')) {
    config = {
      ...config,
      backButtonText: 'Previous',
    };
  }

  return config;
};
setupIonicReact(getConfig());
```

## Config Options

Below is a list of config options that Ionic uses.

| Config                   | Type                                                                            | Description                                                                                              |
| ------------------------ | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `actionSheetEnter`       | `AnimationBuilder`                                                              | Provides a custom enter animation for all `ion-action-sheet`, overriding the default "animation".        |
| `actionSheetLeave`       | `AnimationBuilder`                                                              | Provides a custom leave animation for all `ion-action-sheet`, overriding the default "animation".        |
| `alertEnter`             | `AnimationBuilder`                                                              | Provides a custom enter animation for all `ion-alert`, overriding the default "animation".               |
| `alertLeave`             | `AnimationBuilder`                                                              | Provides a custom leave animation for all `ion-alert`, overriding the default "animation".               |
| `animated`               | `boolean`                                                                       | If `true`, Ionic will enable all animations and transitions across the app.                              |
| `backButtonIcon`         | `string`                                                                        | Overrides the default icon in all `<ion-back-button>` components.                                        |
| `backButtonText`         | `string`                                                                        | Overrides the default text in all `<ion-back-button>` components.                                        |
| `hardwareBackButton`     | `boolean`                                                                       | If `true`, Ionic will respond to the hardware back button in an Android device.                          |
| `infiniteLoadingSpinner` | `SpinnerTypes`                                                                  | Overrides the default spinner type in all `<ion-infinite-scroll-content>` components.                    |
| `loadingEnter`           | `AnimationBuilder`                                                              | Provides a custom enter animation for all `ion-loading`, overriding the default "animation".             |
| `loadingLeave`           | `AnimationBuilder`                                                              | Provides a custom leave animation for all `ion-loading`, overriding the default "animation".             |
| `loadingSpinner`         | `SpinnerTypes`                                                                  | Overrides the default spinner for all `ion-loading` overlays.                                            |
| `menuIcon`               | `string`                                                                        | Overrides the default icon in all `<ion-menu-button>` components.                                        |
| `menuType`               | `string`                                                                        | Overrides the default menu type for all `<ion-menu>` components.                                         |
| `modalEnter`             | `AnimationBuilder`                                                              | Provides a custom enter animation for all `ion-modal`, overriding the default "animation".               |
| `modalLeave`             | `AnimationBuilder`                                                              | Provides a custom leave animation for all `ion-modal`, overriding the default "animation".               |
| `mode`                   | `Mode`                                                                          | The mode determines which platform styles to use for the whole application.                              |
| `navAnimation`           | `AnimationBuilder`                                                              | Overrides the default "animation" of all `ion-nav` and `ion-router-outlet` across the whole application. |
| `pickerEnter`            | `AnimationBuilder`                                                              | Provides a custom enter animation for all `ion-picker`, overriding the default "animation".              |
| `pickerLeave`            | `AnimationBuilder`                                                              | Provides a custom leave animation for all `ion-picker`, overriding the default "animation".              |
| `platform`               | [`PlatformConfig`](/docs/react/platform#customizing-platform-detection-methods) | Overrides the default platform detection methods.                                                        |
| `popoverEnter`           | `AnimationBuilder`                                                              | Provides a custom enter animation for all `ion-popover`, overriding the default "animation".             |
| `popoverLeave`           | `AnimationBuilder`                                                              | Provides a custom leave animation for all `ion-popover`, overriding the default "animation".             |
| `refreshingIcon`         | `string`                                                                        | Overrides the default icon in all `<ion-refresh-content>` components.                                    |
| `refreshingSpinner`      | `SpinnerTypes`                                                                  | Overrides the default spinner type in all `<ion-refresh-content>` components.                            |
| `sanitizerEnabled`       | `boolean`                                                                       | If `true`, Ionic will enable a basic DOM sanitizer on component properties that accept custom HTML.      |
| `spinner`                | `SpinnerTypes`                                                                  | Overrides the default spinner in all `<ion-spinner>` components.                                         |
| `statusTap`              | `boolean`                                                                       | If `true`, clicking or tapping the status bar will cause the content to scroll to the top.               |
| `swipeBackEnabled`       | `boolean`                                                                       | If `true`, Ionic will enable the "swipe-to-go-back" gesture across the application.                      |
| `tabButtonLayout`        | `TabButtonLayout`                                                               | Overrides the default "layout" of all `ion-bar-button` across the whole application.                     |
| `toastEnter`             | `AnimationBuilder`                                                              | Provides a custom enter animation for all `ion-toast`, overriding the default "animation".               |
| `toastLeave`             | `AnimationBuilder`                                                              | Provides a custom leave animation for all `ion-toast`, overriding the default "animation".               |
