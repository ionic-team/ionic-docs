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

## 全局配置

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


## Per-Component Config

由于Ionic Config并不是响应式的，所以我们建议当你要覆盖默认配置的时候去通过组件属性更改，而不是全局配置。

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

这些代码会让`ion-back-button`的默认显示文本为`Go Back`。 然而，假如你要将`backButtonText`改为`Do Not Go Back`，你会发现`ion-back-button`的默认显示文本还是`Go Back`，因为组件已经被初始化并且渲染了。 我们建议用`ion-back-button`的`text`属性来替代。

```html
<ion-back-button [text]="getBackButtonText()"></ion-back-button>
```

在示例中，我们使用到了`ion-back-button`的动态更新文本，这个方式在语言或地区改变时十分有用。 `getBackButtonText`方法将负责返回正确的文本内容。

## 平台配置

Ionic 设置也可以基于特定的平台 例如, 如果应用运行在一个可能较慢的设备的浏览器中时, 你可以禁用动画 开发者可以利用平台工具来实现这个目标。

由由于配置是在运行时设置的，因此您将无权访问平台依赖注入。 相反，您可以直接使用程序提供的基础功能或函数方法。

在以下示例中，仅当Ionic应用程序在移动Web浏览器中运行时，我们才禁用该应用程序中的所有动画。 基于对于的平台，isPlatform() 方法返回true或false。 查看 [平台文档](./platform#platforms) 对应的值。


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

下一个示例允许您根据平台设置一个完全不同的配置，如果没有平台匹配，则回退到默认配置：

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

下面的示例是根据不同平台需求进行的配置

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

## 配置选项

下面是 Ionic 使用的配置选项列表。

| 配置                       | 类型                 | 描述                                                |
| ------------------------ | ------------------ | ------------------------------------------------- |
| `actionSheetEnter`       | `AnimationBuilder` | 为所有`ion-action-sheet`提供自定义进场动画。                   |
| `actionSheetLeave`       | `AnimationBuilder` | 为所有`ion-action-sheet`提供自定义离场动画。                   |
| `alertEnter`             | `AnimationBuilder` | 为所有`ion-alert`提供自定义进场动画。                          |
| `alertLeave`             | `AnimationBuilder` | 为所有`ion-alert`提供自定义离场动画。                          |
| `animated`               | `boolean`          | 如果为`true`，Ionic将会为应用启用动画和过渡。                      |
| `backButtonIcon`         | `string`           | 覆盖`<ion-back-button>`默认图标。                  |
| `backButtonText`         | `string`           | 覆盖`<ion-back-button>`默认文本。                  |
| `hardwareBackButton`     | `boolean`          | 如果为`true`，Ionic将会处理Android设备的返回按钮。                |
| `infiniteLoadingSpinner` | `SpinnerTypes`     | 覆盖`<ion-infinite-scroll-content>`的旋转图标类型。   |
| `loadingEnter`           | `AnimationBuilder` | 为所有`ion-loading`提供自定义的进场动画。                       |
| `loadingLeave`           | `AnimationBuilder` | 为所有`ion-loading`提供自定义的离场动画。                       |
| `loadingSpinner`         | `SpinnerTypes`     | 覆盖`<ion-loading>`的旋转图标类型。                   |
| `menuIcon`               | `string`           | 覆盖`<ion-menu-button>`默认图标。                  |
| `menuType`               | `string`           | 覆盖`<ion-menu>`默认菜单类型。                       |
| `modalEnter`             | `AnimationBuilder` | 为所有`ion-modal`提供自定义进场动画。                          |
| `modalLeave`             | `AnimationBuilder` | 为所有`ion-modal`提供自定义离场动画。                          |
| `mode`                   | `Mode`             | 设置使用哪个系统平台的风格样式。                                  |
| `navAnimation`           | `AnimationBuilder` | 覆盖`ion-nav`和`ion-router-outlet`的默认动画。             |
| `pickerEnter`            | `AnimationBuilder` | 为所有`ion-picker`提供自定义进场动画。                         |
| `pickerLeave`            | `AnimationBuilder` | 为所有`ion-picker`提供自定义离场动画。                         |
| `popoverEnter`           | `AnimationBuilder` | 为所有`ion-popover`提供自定义进场动画。                        |
| `popoverLeave`           | `AnimationBuilder` | 为所有`ion-popover`提供自定义离场动画。                        |
| `refreshingIcon`         | `string`           | 覆盖`<ion-refresh-content>`默认图标。              |
| `refreshingSpinner`      | `SpinnerTypes`     | 覆盖`<ion-refresh-content>`的旋转图标类型。           |
| `sanitizerEnabled`       | `boolean`          | 如果 `true`, Ionic将在组件属性上启用一个基本的DOM净化器, 接受自定义 HTML。 |
| `spinner`                | `SpinnerTypes`     | 覆盖所有`<ion-spinner>`组件中的默认微调器。               |
| `statusTap`              | `boolean`          | 如果`true`，则单击或点击状态栏将使内容滚动到顶部。                      |
| `swipeBackEnabled`       | `boolean`          | 如果`true`，则Ionic将在整个应用程序中启用“向后滑动”手势。               |
| `tabButtonLayout`        | `TabButtonLayout`  | 覆盖整个应用程序中所有`ion-bar-button`的默认"layout"。           |
| `toastEnter`             | `AnimationBuilder` | 为所有`ion-toast`提供自定义输入动画，覆盖默认的"animation"。         |
| `toastLeave`             | `AnimationBuilder` | 为所有`ion-toast`提供自定义的假动画，覆盖默认的"animation"。         |
