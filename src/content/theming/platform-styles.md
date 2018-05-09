---
disableHtmlPreviews: true
previousText: 'Theming Basics'
previousUrl: '/docs/theming/basics'
nextText: 'CSS Variables'
nextUrl: '/docs/theming/css-variables'
---

# Platform Styles

<p class="intro" markdown="1">
Ionic provides platform specific styles based on the device the application is running on. Styling the components to match the device guidelines allows the application to be written once but look and feel native to the user depending on where it is accessed.
</p>


## Ionic Modes

Ionic uses **modes** to customize the look of components. Each **platform** has a default **mode**, but this can be overridden. The following chart displays the default **mode** that is added to each **platform**:

| Platform  | Mode  | Description                                                                                                                       |
|-----------|-------|-----------------------------------------------------------------------------------------------------------------------------------|
| `ios`     | `ios` | Viewing on an `iphone`, `ipad`, or `ipod` will use the [iOS styles](https://www.apple.com/ios).                                   |
| `android` | `md`  | Viewing on any android device will use the [Material Design styles](https://material.io/guidelines/).                             |
| `core`    | `md`  | Any platform that doesn't fit any of the above platforms will use the [Material Design styles](https://material.io/guidelines/).  |

For example, an app being viewed on an Android platform will use the `md` (Material Design) mode by default. The `<ion-app>` will have `class="md"` added to it and all of the components will use Material Design styles:

```html
<ion-app class="md">
```

_Note: The **platform** and the **mode** are not the same. The platform can be set to use any mode in the [config](../../api/config/Config) of an app._

## Overriding Mode Styles

Each Ionic component has up to three stylesheets used to style it. Here's an example of the theming structure for the `badge` component:


```bash
badge
├── badge.ios.scss                  # ios mode styles
├── badge.ios.vars.scss             # ios mode variables
├── badge.md.scss                   # md mode styles
├── badge.md.vars.scss              # md mode variables
├── badge.scss                      # shared styles for the badge
└── badge.vars.scss                 # shared variables for the badge
```

_Note: Not all components are styled differently for each mode, so some will only have some of the above stylesheets._

The class that is applied to the `ion-app` can be used to override styles for any component. For example, to override all badges in `ios` mode to have capitalized text, the following can be written:

```css
.ios .badge {
  text-transform: capitalize;
}
```

The mode is also combined with the component name and then added as a class to each component. The above can be simplified to only target `ios` badges by using:

```css
.badge-ios {
  text-transform: capitalize;
}
```

There are also many CSS variables that can be used to override the styles. Using the same example above, we can change the `ios` badge using the `--badge-ios-text-transform` variable:

```css
:root {
  --badge-ios-text-transform: capitalize;
}
```

For a list of all CSS variables to override, see [CSS Variables](./css-variables).