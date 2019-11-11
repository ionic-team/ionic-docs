---
previousText: '导航'
previousUrl: '/docs/react/navigation'
nextText: '平台'
nextUrl: '/docs/react/platform'
---

# 配置

Ionic 提供了一种全局配置组件属性的方法。可以设置app的模式、选项卡、按钮布局、动画等。

## 使用方法

要覆盖应用的初始Ionic 配置， 从 `@ionic/action` 导入 `setupConfig` 方法并在您渲染任何Ionic 组件之前调用它：

```typescript
setupConfig({
  rippleEffect: false,
  mode: 'md'
});

<IonApp>
  // more components
</IonApp>
```

在上面的例子中，我们正在禁用整个应用的Material Design的波纹效果，并设置模式成为Material Design。

## 配置选项

下面是 Ionic 使用的配置选项列表。

| 配置项（Config）              | 类型（Type）           | 描述                                                                                                       |
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