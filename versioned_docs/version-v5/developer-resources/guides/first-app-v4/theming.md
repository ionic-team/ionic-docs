# Make It Your Own! Ionic Theming

Previously, we converted our single use Camera app into an epic photo gallery. Now, let’s explore how to make the photo gallery our own with Ionic theming. The visual design of the app is incredibly important - fortunately, Ionic provides a lot for us out-of-the-box.

Ionic has nine default colors, defined as CSS variables, that can be used to change the color of its UI components:

![v4-theming-defaults](/img/guides/first-app-v4/theming-defaults.png)

You can customize each color further by supplying a base, contrast, shade, and tint properties. These provide flexible control over your styles:

![v4-theming-properties](/img/guides/first-app-v4/theming-properties.png)

You can find these colors defined in `src/theme/variables.scss`.

By changing these variables here and there, you can easily update the entire theme of the application! Try changing a few of them and watch the app update in DevApp. For example, change the default blue color for Primary to purple:

```css
/** Ionic CSS Variables **/
:root {
  /** primary **/
  --ion-color-primary: #b36bff;
  --ion-color-primary-rgb: 179, 107, 255;
  --ion-color-primary-contrast: #000000;
  --ion-color-primary-contrast-rgb: 0, 0, 0;
  --ion-color-primary-shade: #9e5ee0;
  --ion-color-primary-tint: #bb7aff;
}
```

The easiest and most powerful way to create custom color palettes for your app’s UI is Ionic's [Color Generator tool](../../../theming/color-generator.md). As you change a color’s hex values, the embedded demo app automatically reflects the new colors. When you've finished making changes, simply copy and paste the generated code directly into your Ionic project.

But wait, there’s more! Ionic automatically provides platform specific styles based on the device the application is running on, giving that native look and feel your users are used to:

![ios and android comparison](/img/guides/first-app-v3/ion-lab-comparison.png)

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

![ios and android comparison](/img/guides/first-app-v3/ion-lab-md-styling.png)

Creating gorgeous-looking Ionic apps is easy with CSS variables and platform-specific styling. You now have everything you need to get started with Ionic.

Go forth and build great apps!
