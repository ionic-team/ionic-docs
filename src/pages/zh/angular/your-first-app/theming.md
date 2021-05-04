---
previousText: '用设备储存创建一个图片库'
previousUrl: '/docs/angular/your-first-app/creating-photo-gallery-device-storage'
nextText: '生命周期'
nextUrl: '/docs/angular/lifecycle'
---

# 自定义！ Ionic主题

之前，我们将一次性相机应用转变成了一个史诗级的图片库。 现在，让我们来探索怎样使用Ionic主题来制作这样的图片库。 视觉设计对一款应用来说是非常重要的——幸运的是，Ionic为我们提供了很多开箱即用的东西。

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

等等，还没完呢！ Ionic会自动地提供基于应用所运行的设备平台特定的样式，给用户以自然亲切的观感。

![ios和android差异对照](/docs/assets/img/guides/first-app-v3/ion-lab-comparison.png)

这一点在应用中的页眉和图标设计方式中表现得尤其突出。

如果你要求一致性，你可以利用Ionic在无论任何平台中使用统一的模式。 例如，想要应用Material Design（安卓平台风格），尽管在APP的组件类中设置它好了。 打开 `src/app/app.module.ts`，然后设置`mode`的属性：

```Javascript
imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: "md"
    }),
    IonicStorageModule.forRoot()
  ],
```

现在，iOS版的应用就拥有Material Design皮肤了。

![ios和android差异对照](/docs/assets/img/guides/first-app-v3/ion-lab-md-styling.png)

使用CSS变量和平台指定的样式来创建华丽无比的Ionic应用是非常容易实现的。 现在你已经有了开始使用Ionic所需的一切。

开发伟大的应用程序，冲鸭！