---
initialTab: '预览'
inlineHtmlPreviews: true
previousText: '主题'
previousUrl: '/docs/theming/themes'
nextText: 'Color Generator'
nextUrl: '/docs/theming/color-generator'
contributors:
  - brandyscarney
  - marcjulian
---

# 高级主题

基于 CSS 的主题可以通过加载一个 CSS 文件或更改少数 CSS 属性值来快速自定义颜色。

## 全局设定

主题部分中的应用程序变量和分变量对于更改应用程序的颜色非常有用，这些变量常常会在多个组件中使用。 以下变量在组件之间共享以更改全局填充设置。

### 应用变量

| 名称                        | 说明                                                          |
| ------------------------- | ----------------------------------------------------------- |
| `--ion-font-family`       | 应用程序的字体类                                                    |
| `--ion-statusbar-padding` | 应用顶部的状态栏填充                                                  |
| `--ion-safe-area-top`     | 调整应用顶部的安全区域                                                 |
| `--ion-safe-area-right`   | 调整应用右侧的安全区域                                                 |
| `--ion-safe-area-bottom`  | 调整应用底部的安全区域                                                 |
| `--ion-safe-area-left`    | 调整应用左侧的安全区域                                                 |
| `--ion-margin`            | 调整 [Margin 属性](/docs/layout/css-utilities#element-margin)   |
| `--ion-padding`           | 调整 [Padding 属性](/docs/layout/css-utilities#element-padding) |


### 网格变量

| 名称                             | 说明                                             |
| ------------------------------ | ---------------------------------------------- |
| `--ion-grid-columns`           | 网格列数                                           |
| `--ion-grid-padding-xs`        | xs 断点的网格 padding                               |
| `--ion-grid-padding-sm`        | sm 断点的网格 padding                               |
| `--ion-grid-padding-md`        | Padding of the grid for md breakpoints         |
| `--ion-grid-padding-lg`        | Padding of the grid for lg breakpoints         |
| `--ion-grid-padding-xl`        | Padding of the grid for xl breakpoints         |
| `--ion-grid-column-padding-xs` | Padding of the grid columns for xs breakpoints |
| `--ion-grid-column-padding-sm` | Padding of the grid columns for sm breakpoints |
| `--ion-grid-column-padding-md` | Padding of the grid columns for md breakpoints |
| `--ion-grid-column-padding-lg` | Padding of the grid columns for lg breakpoints |
| `--ion-grid-column-padding-xl` | Padding of the grid columns for xl breakpoints |


## Known Limitations

### The Alpha Problem

There is not yet full <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#Browser_compatibility" target="_blank">browser support</a> for alpha use of a hex color. The <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba()" target="_blank">rgba()</a> function only accepts a value in `R, G, B, A` (Red, Green, Blue, Alpha) format. The following code shows examples of correct and incorrect values passed to `rgba()`.

```css
/* These examples use the same color: blueviolet. */
.broken {
  --violet: #8a2be2;

  /* rgba(#8a2be2, .5) */
  color: rgba(var(--violet), .5) /* ERROR! Doesn't support hex. */
}

.working {
  --violet-rgb: 138, 43, 226;

  /* rgba(138, 43, 226, .5) */
  color: rgba(var(--violet-rgb), .5) /* WORKS! */
}
```

> See the [CSS Variables](/docs/theming/css-variables) section for more information on how to get and set CSS variables.

Ionic uses colors with an opacity (alpha) in several components. In order for this to work, those properties must be provided in RGB format. When changing any of the properties that have a variation ending in `-rgb`, it is important they are also provided in a comma separated format **without parentheses**. Below are some examples for changing text and background color.

```css
:root {
  /* These examples use the same color: sienna. */
  --ion-text-color:             #a0522d;
  --ion-text-color-rgb:         160, 82, 45;

  /* These examples use the same color: lightsteelblue. */
  --ion-background-color:       #b0c4de;
  --ion-background-color-rgb:   176, 196, 222;
}
```

Note that the RGB formatted colors are the exact same color as the hex properties, but can now be used with `rgba()`. For example, `--ion-text-color-rgb` can now be used in the following way

```css
body {
  color: rgba(var(--ion-text-color-rgb), 0.25);
}
```

### Variables in Media Queries

CSS variables in [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries) are not currently supported, but there are open drafts to add [custom media queries](https://drafts.csswg.org/mediaqueries-5/#custom-mq) and [custom environment variables](https://drafts.csswg.org/css-env-1/) that would solve this problem! However, with the current state of support, the following will **not** work:

```css
:root {
  --breakpoint: 600px;
}

@media (min-width: var(--breakpoint)) {
  /* Doesn't work :( */
}
```

### Modifying CSS Color Variables

While it is possible to easily alter a color in Sass using its built-in functions, it is currently not as easy to modify colors set in CSS Variables. This can be accomplished in CSS by splitting the [RGB](https://developer.mozilla.org/en-US/docs/Glossary/RGB) or [HSL](https://en.wikipedia.org/wiki/HSL_and_HSV) channels and modifying each value, but it is complex and has missing functionality.

What exactly does this mean? Basically, using a CSS preprocessor, such as Sass, allows us to use functions to manipulate a single color. For example, we can create the following colors in Sass:

```scss
// Background color, shade, and tint
$background: #3880ff;
$background-shade: mix(#000, $background, 12%);
$background-tint: mix(#fff, $background, 10%);

// Text color, darker and lighter
$text: #444;
$text-darker: darken($text, 15);
$text-lighter: lighten($text, 15);
```

After running through the Sass compiler, the colors will have the following values:

<code-color mode="md" value="#6a6a6a"></code-color></td>
</tr>
</tbody>
</table>

<p>However, because CSS variables can be set at runtime and are more dynamic, it is not currently possible to manipulate them using a simple function.</p>

<p>This is normally not a problem, but when an application needs to have dynamic theming it presents issues. In Ionic, this is the reason that there are <a href="./colors#layered-colors">variations to each color</a>, and it is also why <a href="./themes/#stepped-colors">stepped colors</a> are necessary for theming.</p>

<p>There are drafts and issues discussing <a href="https://github.com/w3c/csswg-drafts/issues/3187">color modification proposals</a> that would make this possible.</p>