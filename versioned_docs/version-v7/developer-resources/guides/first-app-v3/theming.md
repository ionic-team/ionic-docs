# Make It Your Own! Ionic Theming

Previously, we converted our single use Camera app into an epic photo gallery. Now, let’s explore how to make the photo gallery our own with Ionic theming. The visual design of the app is incredibly important - fortunately, Ionic provides a lot for us out-of-the-box. You can find the code for this in [the “part 3” folder](https://github.com/ionic-team/photo-gallery-tutorial-ionic3/tree/master/part3) on GitHub.

Ionic has five default colors, defined as Sass variables, that can be used to change the color of its UI components:

![Ionic's five default Sass color variables for theming: primary, secondary, danger, light, and dark.](/img/guides/first-app-v3/v3-theming.png 'Default Ionic Sass Variables')

You can customize each color further by supplying a base and contract property. Base acts as the background color and contrast acts as the text color for most components. This provides much more flexible control over your styles:

![Code snippet showing customized Sass variables with base and contrast properties.](/img/guides/first-app-v3/v3-themeColors.png 'Customized Ionic Sass Variables')

You can find these colors defined in `src/theme/variables.scss`.

By changing these variables here and there, you can easily update the entire theme of the application! Try changing a few of them and watch the app update in DevApp. For example, change the default blue color for Primary to purple:

```Css
$colors: (
  primary:    #7044ff,
)
```

But wait, there’s more! Ionic automatically provides platform specific styles based on the device the application is running on, giving that native look and feel your users are used to:

![Comparing the native look of an Ionic app on iOS and Android platforms.](/img/guides/first-app-v3/ion-lab-comparison.png 'Ionic Platform Specific Styles Comparison')

In our app, this is clearly visible in how the header and the icons are styled.

If you want consistency, you can tell Ionic to use the same mode regardless of platform. For example, to apply Material Design (Android’s platform style), set it globally in the App Module class. Open `src/app/app.module.ts`, then set the `mode` property:

```Javascript
imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: "md"
    }, null),
    IonicStorageModule.forRoot()
  ],
```

Now, the iOS version of our app has a Material Design skin!

![An Ionic app with Material Design styling applied on an iOS device.](/img/guides/first-app-v3/ion-lab-md-styling.png 'Ionic Material Design Styling on iOS')

Creating gorgeous-looking Ionic apps is easy with Sass variables and platform-specific styling. You now have everything you need to get started with Ionic. Go forth and build great apps!

If you're interested in taking your Ionic apps to the next level, continue on with our exploration of Appflow next.
