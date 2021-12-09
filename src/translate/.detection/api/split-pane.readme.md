# ion-split-pane

A split pane is useful when creating multi-view layouts. It allows UI elements, like menus, to be
displayed as the viewport width increases.

If the device's screen width is below a certain size, the split pane will collapse and the menu will be hidden. This is ideal for creating an app that will be served in a browser and deployed through the app store to phones and tablets.


## Setting Breakpoints

By default, the split pane will expand when the screen is larger than 992px. To customize this, pass a breakpoint in the `when` property. The `when` property can accept a boolean value, any valid media query, or one of Ionic's predefined sizes.


```html
<!-- can be "xs", "sm", "md", "lg", or "xl" -->
<ion-split-pane when="md"></ion-split-pane>

<!-- can be any valid media query https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries -->
<ion-split-pane when="(min-width: 40px)"></ion-split-pane>
```


 | Size | Value                 | Description                                                           |
 |------|-----------------------|-----------------------------------------------------------------------|
 | `xs` | `(min-width: 0px)`    | Show the split-pane when the min-width is 0px (meaning, always)       |
 | `sm` | `(min-width: 576px)`  | Show the split-pane when the min-width is 576px                       |
 | `md` | `(min-width: 768px)`  | Show the split-pane when the min-width is 768px                       |
 | `lg` | `(min-width: 992px)`  | Show the split-pane when the min-width is 992px (default break point) |
 | `xl` | `(min-width: 1200px)` | Show the split-pane when the min-width is 1200px                      |

