---
title: Config
---

Ionic Config provides a way to change the properties of components globally across an app. It can set the app mode, tab button layout, animations, and more.

## Global Config

The available config keys can be found in the [`IonicConfig`](#ionicconfig) interface.

The following example disables ripple effects and default the mode to Material Design:

import GlobalExample from '@site/docs/developing/config/global/index.md';

<GlobalExample />

## Per-Component Config

Ionic Config is not reactive. Updating the config's value after the component has rendered will result in the previous value. It is recommended to use a component's properties instead of updating the config, when you require reactive values.

import PerComponentExample from '@site/docs/developing/config/per-component/index.md';

<PerComponentExample />

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
| `backButtonDefaultHref`  | `string`                                                                          | Overrides the default value for the `defaultHref` property in all `<ion-back-button>` components.        |
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
| `toastDuration`          | `number`                                                                          | Overrides the default `duration` for all `ion-toast` components.                                         |
| `toastEnter`             | `AnimationBuilder`                                                                | Provides a custom enter animation for all `ion-toast`, overriding the default "animation".               |
| `toastLeave`             | `AnimationBuilder`                                                                | Provides a custom leave animation for all `ion-toast`, overriding the default "animation".               |
| `toggleOnOffLabels`      | `boolean`                                                                         | Overrides the default `enableOnOffLabels` in all `ion-toggle` components.                                |
