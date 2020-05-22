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

在示例中，我们使用到了`ion-back-button`的动态更新文本，这个方式在语言或地区改变时十分有用。 `getBackButtonText`方法将负责返回正确的文本内容。


## 配置选项

以下是使用ionic的配置列表。

| 配置                       | 类型                 | 描述                                                                                         |
| ------------------------ | ------------------ | ------------------------------------------------------------------------------------------ |
| `actionSheetEnter`       | `AnimationBuilder` | 为所有`ion-action-sheet`提供自定义进场动画。                                                            |
| `actionSheetLeave`       | `AnimationBuilder` | 为所有`ion-action-sheet`提供自定义离场动画。                                                            |
| `alertEnter`             | `AnimationBuilder` | 为所有`ion-alert`提供自定义进场动画。                                                                   |
| `alertLeave`             | `AnimationBuilder` | 为所有`ion-alert`提供自定义离场动画。                                                                   |
| `animated`               | `boolean`          | 如果为`true`，Ionic将会为应用启用动画和过渡。                                                               |
| `backButtonIcon`         | `string`           | 覆盖`<ion-back-button>`默认图标。                                                           |
| `backButtonText`         | `string`           | 覆盖`<ion-back-button>`默认文本。                                                           |
| `hardwareBackButton`     | `boolean`          | 如果为`true`，Ionic将会处理Android设备的返回按钮。                                                         |
| `infiniteLoadingSpinner` | `SpinnerTypes`     | 覆盖`<ion-infinite-scroll-content>`的旋转图标类型。                                            |
| `loadingEnter`           | `AnimationBuilder` | 为所有`ion-loading`提供自定义的进场动画。                                                                |
| `loadingLeave`           | `AnimationBuilder` | 为所有`ion-loading`提供自定义的离场动画。                                                                |
| `loadingSpinner`         | `SpinnerTypes`     | 覆盖`<ion-loading>`的旋转图标类型。                                                            |
| `menuIcon`               | `string`           | 覆盖`<ion-menu-button>`默认图标。                                                           |
| `menuType`               | `string`           | 覆盖`<ion-menu>`默认菜单类型。                                                                |
| `modalEnter`             | `AnimationBuilder` | 为所有`ion-modal`提供自定义进场动画。                                                                   |
| `modalLeave`             | `AnimationBuilder` | 为所有`ion-modal`提供自定义离场动画。                                                                   |
| `mode`                   | `Mode`             | 设置使用哪个系统平台的风格样式。                                                                           |
| `navAnimation`           | `AnimationBuilder` | 覆盖`ion-nav`和`ion-router-outlet`的默认动画。                                                      |
| `pickerEnter`            | `AnimationBuilder` | 为所有`ion-picker`提供自定义进场动画。                                                                  |
| `pickerLeave`            | `AnimationBuilder` | 为所有`ion-picker`提供自定义离场动画。                                                                  |
| `popoverEnter`           | `AnimationBuilder` | 为所有`ion-popover`提供自定义进场动画。                                                                 |
| `popoverLeave`           | `AnimationBuilder` | 为所有`ion-popover`提供自定义离场动画。                                                                 |
| `refreshingIcon`         | `string`           | 覆盖`<ion-refresh-content>`默认图标。                                                       |
| `refreshingSpinner`      | `SpinnerTypes`     | 覆盖`<ion-refresh-content>`的旋转图标类型。                                                    |
| `sanitizerEnabled`       | `boolean`          | 如果 `true`, Ionic将在组件属性上启用一个基本的DOM净化器, 接受自定义 HTML。                                          |
| `spinner`                | `SpinnerTypes`     | Overrides the default spinner in all `<ion-spinner>` components.                     |
| `statusTap`              | `boolean`          | If `true`, clicking or tapping the status bar will cause the content to scroll to the top. |
| `swipeBackEnabled`       | `boolean`          | If `true`, Ionic will enable the "swipe-to-go-back" gesture across the application.        |
| `tabButtonLayout`        | `TabButtonLayout`  | Overrides the default "layout" of all `ion-bar-button` across the whole application.       |
| `toastEnter`             | `AnimationBuilder` | Provides a custom enter animation for all `ion-toast`, overriding the default "animation". |
| `toastLeave`             | `AnimationBuilder` | Provides a custom leave animation for all `ion-toast`, overriding the default "animation". |