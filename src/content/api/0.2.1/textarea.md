---
previewUrl: "/docs/docs-content/api/0.2.1/textarea-demo.html"
---
# ion-textarea

The textarea component is used for multi-line text input. A native textarea element is rendered inside of the component. The user experience and interactivity of the textarea component is improved by having control over the native textarea.

Unlike the native textarea element, the Ionic textarea does not support loading its value from the inner content. The textarea value should be set in the `value` attribute.

The textarea component accepts the [native textarea attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) in addition to the Ionic properties.

```html
<!-- Default textarea -->
<ion-textarea></ion-textarea>

<!-- Textarea in an item with a placeholder -->
<ion-item>
  <ion-textarea placeholder="Enter more information here..."></ion-textarea>
</ion-item>

<!-- Textarea in an item with a floating label -->
<ion-item>
  <ion-label floating>Description</ion-label>
  <ion-textarea></ion-textarea>
</ion-item>

<!-- Disabled and readonly textarea in an item with a stacked label -->
<ion-item>
  <ion-label stacked>Summary</ion-label>
  <ion-textarea
    disabled
    readonly
    value="Ionic enables developers to build performant, high-quality mobile apps.">
  </ion-textarea>
</ion-item>

<!-- Textarea that clears the value on edit -->
<ion-item>
  <ion-label>Comment</ion-label>
  <ion-textarea clear-on-edit="true"></ion-textarea>
</ion-item>

<!-- Textarea with custom number of rows and cols -->
<ion-item>
  <ion-label>Notes</ion-label>
  <ion-textarea rows="6" cols="20" placeholder="Enter any notes here..."></ion-textarea>
</ion-item>
```


<h2>Properties</h2> 

<dl>
<dt>
<h3>autocapitalize</h3> 
<strong>Attribute:</strong>  <code>autocapitalize</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user. Defaults to `"none"`.</dd>

<dt>
<h3>autocomplete</h3> 
<strong>Attribute:</strong>  <code>autocomplete</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>Indicates whether the value of the control can be automatically completed by the browser. Defaults to `"off"`.</dd>

<dt>
<h3>autofocus</h3> 
<strong>Attribute:</strong>  <code>autofocus</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>This Boolean attribute lets you specify that a form control should have input focus when the page loads. Defaults to `false`.</dd>

<dt>
<h3>clearOnEdit</h3> 
<strong>Attribute:</strong>  <code>clear-on-edit</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.</dd>

<dt>
<h3>cols</h3> 
<strong>Attribute:</strong>  <code>cols</code>
<strong>Type:</strong> <code>number</code>
</dt>
<dd>The visible width of the text control, in average character widths. If it is specified, it must be a positive integer.</dd>

<dt>
<h3>debounce</h3> 
<strong>Attribute:</strong>  <code>debounce</code>
<strong>Type:</strong> <code>number</code>
</dt>
<dd>Set the amount of time, in milliseconds, to wait to trigger the `ionInput` event after each keystroke. Default `0`.</dd>

<dt>
<h3>disabled</h3> 
<strong>Attribute:</strong>  <code>disabled</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the user cannot interact with the textarea. Defaults to `false`.</dd>

<dt>
<h3>maxlength</h3> 
<strong>Attribute:</strong>  <code>maxlength</code>
<strong>Type:</strong> <code>number</code>
</dt>
<dd>If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.</dd>

<dt>
<h3>minlength</h3> 
<strong>Attribute:</strong>  <code>minlength</code>
<strong>Type:</strong> <code>number</code>
</dt>
<dd>If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.</dd>

<dt>
<h3>name</h3> 
<strong>Attribute:</strong>  <code>name</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The name of the control, which is submitted with the form data.</dd>

<dt>
<h3>placeholder</h3> 
<strong>Attribute:</strong>  <code>placeholder</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>Instructional text that shows before the input has a value.</dd>

<dt>
<h3>readonly</h3> 
<strong>Attribute:</strong>  <code>readonly</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the user cannot modify the value. Defaults to `false`.</dd>

<dt>
<h3>required</h3> 
<strong>Attribute:</strong>  <code>required</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the user must fill in a value before submitting a form.</dd>

<dt>
<h3>rows</h3> 
<strong>Attribute:</strong>  <code>rows</code>
<strong>Type:</strong> <code>number</code>
</dt>
<dd>The number of visible text lines for the control.</dd>

<dt>
<h3>spellcheck</h3> 
<strong>Attribute:</strong>  <code>spellcheck</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the element will have its spelling and grammar checked. Defaults to `false`.</dd>

<dt>
<h3>value</h3> 
<strong>Attribute:</strong>  <code>value</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The value of the textarea.</dd>

<dt>
<h3>wrap</h3> 
<strong>Attribute:</strong>  <code>wrap</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>Indicates how the control wraps text. Possible values are: `"hard"`, `"soft"`, `"off"`.</dd>

</dl>


<h2>Events</h2>

<dl><dt>
<h3>ionBlur</h3></dt>
<dd>Emitted when the input loses focus.</dd>

<dt>
<h3>ionFocus</h3></dt>
<dd>Emitted when the input has focus.</dd>

<dt>
<h3>ionInput</h3></dt>
<dd>Emitted when the input value has changed.</dd>

<dt>
<h3>ionStyle</h3></dt>
<dd>Emitted when the styles change.</dd>

</dl>


