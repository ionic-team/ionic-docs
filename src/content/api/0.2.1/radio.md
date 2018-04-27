---
previewUrl: "/docs/docs-content/api/0.2.1/radio-demo.html"
---
# ion-radio

Radios are generally used as a set of related options inside of a group, but they can also be used alone. Pressing on a radio will check it. They can also be checked programmatically by setting the `checked` property.

An `ion-radio-group` can be used to group a set of radios. When radios are inside of a [radio group](../radio-group), only one radio in the group will be checked at any time. Pressing a radio will check it and uncheck the previously selected radio, if there is one. If a radio is not in a group with another radio, then both radios will have the ability to be checked at the same time.


```html
<ion-list>
  <ion-radio-group>
    <ion-list-header>
      <ion-label>Name</ion-label>
    </ion-list-header>

    <ion-item>
      <ion-label>Biff</ion-label>
      <ion-radio slot="start" value="biff" checked></ion-radio>
    </ion-item>

    <ion-item>
      <ion-label>Griff</ion-label>
      <ion-radio slot="start" value="griff"></ion-radio>
    </ion-item>

    <ion-item>
      <ion-label>Buford</ion-label>
      <ion-radio slot="start" value="buford"></ion-radio>
    </ion-item>
  </ion-radio-group>
</ion-list>
```


<h2>Properties</h2> 

<dl>
<dt>
<h3>checked</h3> 
<strong>Attribute:</strong>  <code>checked</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the radio is selected. Defaults to `false`.</dd>

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
<dd>the value of the radio.</dd>

</dl>


<h2>Events</h2>

<dl><dt>
<h3>ionBlur</h3></dt>
<dd>Emitted when the radio button loses focus.</dd>

<dt>
<h3>ionFocus</h3></dt>
<dd>Emitted when the radio button has focus.</dd>

<dt>
<h3>ionRadioDidLoad</h3></dt>
<dd>Emitted when the radio loads.</dd>

<dt>
<h3>ionRadioDidUnload</h3></dt>
<dd>Emitted when the radio unloads.</dd>

<dt>
<h3>ionSelect</h3></dt>
<dd>Emitted when the radio button is selected.</dd>

<dt>
<h3>ionStyle</h3></dt>
<dd>Emitted when the styles change.</dd>

</dl>


