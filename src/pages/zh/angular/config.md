---
previousText: '导航/路由'
previousUrl: '/docs/angular/navigation'
nextText: '设备平台'
nextUrl: '/docs/angular/platform'
contributors:
  - liamdebeasi
  - mhartington
---

# 配置

Ionic Config提供了应用全局配置的方式。你可以设置应用的模式、tab按钮的布局、动画以及其他选项。

## 使用方法

### 全局

如果要覆盖Ionic默认的全局配置，可以在`app.module.ts`文件中添加`IonicModule.forRoot`。

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

在上面的示例中，我们强制应用使用Material Design风格，并且禁用了他的涟漪效果。


### 通过组件

由于Ionic Config并不是响应式的，所以我们建议当你要覆盖默认配置的时候去通过组件属性更改，而不是全局配置。

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

这些代码会让`ion-back-button`的默认显示文本为`Go Back`。 然而，假如你要将`backButtonText`改为`Do Not Go Back`，你会发现`ion-back-button`的默认显示文本还是`Go Back`，因为组件已经被初始化并且渲染了。 我们建议用`ion-back-button`的`text`属性来替代。

```html
<ion-back-button [text]="getBackButtonText()"></ion-back-button>
```

在示例中，我们使用到了`ion-back-button`的动态更新文本，这个方式在语言或地区改变时十分有用。 The `getBackButtonText` method would be responsible for returning the correct text.


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