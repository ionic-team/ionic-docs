---
previewUrl: "/docs/docs-content/api/0.2.1/range-demo.html"
---
# ion-range

The Range slider lets users select from a range of values by moving
the slider knob. It can accept dual knobs, but by default one knob
controls the value of the range.

### Range Labels

Labels can be placed on either side of the range by adding the
`slot="start"` or `slot="end"` to the element. The element doesn't have to
be an `ion-label`, it can be added to any element to place it to the
left or right of the range. See [usage](#usage) below for examples.

### Usage

```html
<ion-list>
  <ion-item>
    <ion-range color="danger" pin="true"></ion-range>
  </ion-item>

  <ion-item>
    <ion-range min="-200" max="200" color="secondary">
      <ion-label slot="start">-200</ion-label>
      <ion-label slot="end">200</ion-label>
    </ion-range>
  </ion-item>

 <ion-item>
   <ion-range min="20" max="80" step="2" >
     <ion-icon small slot="start" name="sunny"></ion-icon>
     <ion-icon slot="end" name="sunny"></ion-icon>
   </ion-range>
 </ion-item>

  <ion-item>
    <ion-range min="1000" max="2000" step="100" snaps="true" color="secondary" ></ion-range>
  </ion-item>

  <ion-item>
    <ion-range dualKnobs="true" min="21" max="72" step="3" snaps="true"></ion-range>
  </ion-item>
</ion-list>
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
<h3>debounce</h3> 
<strong>Attribute:</strong>  <code>debounce</code>
<strong>Type:</strong> <code>number</code>
</dt>
<dd>How long, in milliseconds, to wait to trigger the
`ionChange` event after each change in the range value. Default `0`.</dd>

<dt>
<h3>disabled</h3> 
<strong>Attribute:</strong>  <code>disabled</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd></dd>

<dt>
<h3>dualKnobs</h3> 
<strong>Attribute:</strong>  <code>dual-knobs</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>Show two knobs. Defaults to `false`.</dd>

<dt>
<h3>max</h3> 
<strong>Attribute:</strong>  <code>max</code>
<strong>Type:</strong> <code>number</code>
</dt>
<dd>Maximum integer value of the range. Defaults to `100`.</dd>

<dt>
<h3>min</h3> 
<strong>Attribute:</strong>  <code>min</code>
<strong>Type:</strong> <code>number</code>
</dt>
<dd>Minimum integer value of the range. Defaults to `0`.</dd>

<dt>
<h3>mode</h3> 
<strong>Attribute:</strong>  <code>mode</code>
</dt>
<dd>The mode determines which platform styles to use.
Possible values are: `"ios"` or `"md"`.
For more information, see [Platform Styles](/docs/theming/platform-specific-styles).</dd>

<dt>
<h3>pin</h3> 
<strong>Attribute:</strong>  <code>pin</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, a pin with integer value is shown when the knob
is pressed. Defaults to `false`.</dd>

<dt>
<h3>snaps</h3> 
<strong>Attribute:</strong>  <code>snaps</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the knob snaps to tick marks evenly spaced based
on the step property value. Defaults to `false`.</dd>

<dt>
<h3>step</h3> 
<strong>Attribute:</strong>  <code>step</code>
<strong>Type:</strong> <code>number</code>
</dt>
<dd>Specifies the value granularity. Defaults to `1`.</dd>

<dt>
<h3>value</h3> 
<strong>Attribute:</strong>  <code>value</code>
<strong>Type:</strong> <code>any</code>
</dt>
<dd>the value of the range.</dd>

</dl>


<h2>Events</h2>

<dl><dt>
<h3>ionBlur</h3></dt>
<dd>Emitted when the range loses focus.</dd>

<dt>
<h3>ionChange</h3></dt>
<dd>Emitted when the value property has changed.</dd>

<dt>
<h3>ionFocus</h3></dt>
<dd>Emitted when the range has focus.</dd>

<dt>
<h3>ionStyle</h3></dt>
<dd>Emitted when the styles change.</dd>

</dl>


<h2>Methods</h2>
<dl>

<dt><h3>ratio()</h3></dt>
<dd>Returns the ratio of the knob's is current location, which is a number
between `0` and `1`. If two knobs are used, this property represents
the lower value.</dd>

<dt><h3>ratioUpper()</h3></dt>
<dd>Returns the ratio of the upper value's is current location, which is
a number between `0` and `1`. If there is only one knob, then this
will return `null`.</dd>

</dl>


