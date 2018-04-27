---
previewUrl: "/docs/docs-content/api/0.2.1/spinner-demo.html"
---
# ion-spinner

The Spinner component provides a variety of animated SVG spinners. Spinners are visual indicators that the app is loading content or performing another process that the user needs to wait on.

The default spinner to use is based on the platform. The default spinner for `ios` is `"lines"`, and the default for `android` is `"crescent"`. If the platform is not `ios` or `android`, the spinner will default to `crescent`. If the `name` property is set, then that spinner will be used instead of the platform specific spinner.

```html
<!-- Default Spinner -->
<ion-spinner></ion-spinner>

<!-- Lines -->
<ion-spinner name="lines"></ion-spinner>

<!-- Lines Small -->
<ion-spinner name="lines-small"></ion-spinner>

<!-- Dots -->
<ion-spinner name="dots"></ion-spinner>

<!-- Bubbles -->
<ion-spinner name="bubbles"></ion-spinner>

<!-- Circles -->
<ion-spinner name="circles"></ion-spinner>

<!-- Crescent -->
<ion-spinner name="crescent"></ion-spinner>

<!-- Paused Default Spinner -->
<ion-spinner paused></ion-spinner>
```


<h2>Properties</h2> 

<dl>
<dt>
<h3>color</h3> 
<strong>Attribute:</strong>  <code>color</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The color to use from your Sass `$colors` map.
Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
For more information, see [Theming your App](/docs/theming/theming-your-app).</dd>

<dt>
<h3>duration</h3> 
<strong>Attribute:</strong>  <code>duration</code>
<strong>Type:</strong> <code>number</code>
</dt>
<dd>Duration of the spinner animation in milliseconds. The default varies based on the spinner.</dd>

<dt>
<h3>mode</h3> 
<strong>Attribute:</strong>  <code>mode</code>
</dt>
<dd>The mode determines which platform styles to use.
Possible values are: `"ios"` or `"md"`.
For more information, see [Platform Styles](/docs/theming/platform-specific-styles).</dd>

<dt>
<h3>name</h3> 
<strong>Attribute:</strong>  <code>name</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The name of the SVG spinner to use. If a name is not provided, the platform's default
spinner will be used. Possible values are: `"lines"`, `"lines-small"`, `"dots"`, `"bubbles"`,
`"circles"`, `"crescent"`.</dd>

<dt>
<h3>paused</h3> 
<strong>Attribute:</strong>  <code>paused</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the spinner's animation will be paused. Defaults to `false`.</dd>

</dl>


