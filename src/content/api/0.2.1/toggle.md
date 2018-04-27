---
previewUrl: "/docs/docs-content/api/0.2.1/toggle-demo.html"
---
# ion-toggle

Toggles change the state of a single option. Toggles can be switched on or off by pressing or swiping them. They can also be checked programmatically by setting the `checked` property.


```html
<!-- Default Toggle -->
<ion-toggle></ion-toggle>

<!-- Disabled Toggle -->
<ion-toggle disabled></ion-toggle>

<!-- Checked Toggle -->
<ion-toggle checked></ion-toggle>

<!-- Toggle Colors -->
<ion-toggle color="primary"></ion-toggle>
<ion-toggle color="secondary"></ion-toggle>
<ion-toggle color="danger"></ion-toggle>
<ion-toggle color="light"></ion-toggle>
<ion-toggle color="dark"></ion-toggle>

<!-- Toggles in a List -->
<ion-list>
  <ion-item>
    <ion-label>Pepperoni</ion-label>
    <ion-toggle slot="end" value="pepperoni" checked></ion-toggle>
  </ion-item>

  <ion-item>
    <ion-label>Sausage</ion-label>
    <ion-toggle slot="end" value="sausage" disabled></ion-toggle>
  </ion-item>

  <ion-item>
    <ion-label>Mushrooms</ion-label>
    <ion-toggle slot="end" value="mushrooms"></ion-toggle>
  </ion-item>
</ion-list>
```


<h2>Properties</h2> 

<dl>
<dt>
<h3>checked</h3> 
<strong>Attribute:</strong>  <code>checked</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the toggle is selected. Defaults to `false`.</dd>

<dt>
<h3>color</h3> 
<strong>Attribute:</strong>  <code>color</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The color to use from your Sass `$colors` map.
Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
For more information, see [Theming your App](/docs/theming/theming-your-app).</dd>

<dt>
<h3>disabled</h3> 
<strong>Attribute:</strong>  <code>disabled</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>Indicates that the user cannot interact with the control.</dd>

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
<dd>The name of the control, which is submitted with the form data.</dd>

<dt>
<h3>value</h3> 
<strong>Attribute:</strong>  <code>value</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>the value of the toggle.</dd>

</dl>


<h2>Events</h2>

<dl><dt>
<h3>ionBlur</h3></dt>
<dd>Emitted when the toggle loses focus.</dd>

<dt>
<h3>ionChange</h3></dt>
<dd>Emitted when the value property has changed.</dd>

<dt>
<h3>ionFocus</h3></dt>
<dd>Emitted when the toggle has focus.</dd>

<dt>
<h3>ionStyle</h3></dt>
<dd>Emitted when the styles change.</dd>

</dl>


