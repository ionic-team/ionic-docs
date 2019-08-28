---
previousText: '用设备储存创建一个图片库'
previousUrl: '/docs/angular/your-first-app/creating-photo-gallery-device-storage'
nextText: '生命周期'
nextUrl: '/docs/angular/lifecycle'
---

# 自定义！ Ionic主题

Previously, we converted our single use Camera app into an epic photo gallery. Now, let’s explore how to make the photo gallery our own with Ionic theming. 视觉设计对一款应用来说是非常重要的——幸运的是，Ionic为我们提供了很多开箱即用的东西。

Ionic有九种定义成CSS变量的默认色调，可以用于改变其UI组件的颜色。

![v4-theming-defaults](/docs/assets/img/guides/first-app-v4/theming-defaults.png)

你可以通过base（基础）、contrast（对比度）、shade（阴影）和tint（色调）属性来进一步定义每种颜色。 这使得样式管理变得更加灵活。

![v4-theming-properties](/docs/assets/img/guides/first-app-v4/theming-properties.png)

你可以在 `src/theme/variables.scss`里面找到这些样式定义。

通过改变各处的这些变量，你可以轻松地修改整个应用的主题。 尝试改变其中的一些以观察开发版应用程序的变化。例如：将Primary的默认蓝色更改为紫色：

```css
/** Ionic CSS 变量 **/
:root {
  /** primary **/
  --ion-color-primary: #b36bff;
  --ion-color-primary-rgb: 179,107,255;
  --ion-color-primary-contrast: #000000;
  --ion-color-primary-contrast-rgb: 0,0,0;
  --ion-color-primary-shade: #9e5ee0;
  --ion-color-primary-tint: #bb7aff;
}
```

Ionic的 [颜色生成器](/docs/theming/color-generator)。是为应用程序的用户界面创建自定义调色板的最简单和最强大的工具。 当您改变颜色的十六进制值时，应用将自动嵌入式地反映出新的颜色。 当您完成更改时，只需复制并直接粘贴生成的代码到您的 Ionic 项目。

等等，还没完呢！ Ionic automatically provides platform specific styles based on the device the application is running on, giving that native look and feel your users are used to:

![ios and android comparison](/docs/assets/img/guides/first-app-v3/ion-lab-comparison.png)

In our app, this is clearly visible in how the header and the icons are styled.

If you want consistency, you can tell Ionic to use the same mode regardless of platform. For example, to apply Material Design (Android’s platform style), set it globally in the App Module class. Open `src/app/app.module.ts`, then set the `mode` property:

```Javascript
imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: "md"
    }),
    IonicStorageModule.forRoot()
  ],
```

Now, the iOS version of our app has a Material Design skin!

![ios and android comparison](/docs/assets/img/guides/first-app-v3/ion-lab-md-styling.png)

Creating gorgeous-looking Ionic apps is easy with CSS variables and platform-specific styling. You now have everything you need to get started with Ionic.

Go forth and build great apps!