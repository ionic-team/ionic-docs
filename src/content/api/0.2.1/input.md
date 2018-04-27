---
previewUrl: "/docs/docs-content/api/0.2.1/input-demo.html"
---
# ion-input



<h2>Properties</h2> 

<dl>
<dt>
<h3>accept</h3> 
<strong>Attribute:</strong>  <code>accept</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>If the value of the type attribute is `"file"`, then this attribute will indicate the types of files that the server accepts, otherwise it will be ignored. The value must be a comma-separated list of unique content type specifiers.</dd>

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
<h3>autocorrect</h3> 
<strong>Attribute:</strong>  <code>autocorrect</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>Whether autocorrection should be enabled when the user is entering/editing the text value. Defaults to `"off"`.</dd>

<dt>
<h3>autofocus</h3> 
<strong>Attribute:</strong>  <code>autofocus</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>This Boolean attribute lets you specify that a form control should have input focus when the page loads. Defaults to `false`.</dd>

<dt>
<h3>checked</h3> 
<strong>Attribute:</strong>  <code>checked</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true and the type is `checkbox` or `radio`, the control is selected by default. Defaults to `false`.</dd>

<dt>
<h3>clearInput</h3> 
<strong>Attribute:</strong>  <code>clear-input</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, a clear icon will appear in the input when there is a value. Clicking it clears the input. Defaults to `false`.</dd>

<dt>
<h3>clearOnEdit</h3> 
<strong>Attribute:</strong>  <code>clear-on-edit</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `"password"`, `false` for all other types.</dd>

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
<dd>If true, the user cannot interact with the input. Defaults to `false`.</dd>

<dt>
<h3>inputmode</h3> 
<strong>Attribute:</strong>  <code>inputmode</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>A hint to the browser for which keyboard to display. This attribute applies when the value of the type attribute is `"text"`, `"password"`, `"email"`, or `"url"`. Possible values are: `"verbatim"`, `"latin"`, `"latin-name"`, `"latin-prose"`, `"full-width-latin"`, `"kana"`, `"katakana"`, `"numeric"`, `"tel"`, `"email"`, `"url"`.</dd>

<dt>
<h3>max</h3> 
<strong>Attribute:</strong>  <code>max</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The maximum value, which must not be less than its minimum (min attribute) value.</dd>

<dt>
<h3>maxlength</h3> 
<strong>Attribute:</strong>  <code>maxlength</code>
<strong>Type:</strong> <code>number</code>
</dt>
<dd>If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.</dd>

<dt>
<h3>min</h3> 
<strong>Attribute:</strong>  <code>min</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The minimum value, which must not be greater than its maximum (max attribute) value.</dd>

<dt>
<h3>minlength</h3> 
<strong>Attribute:</strong>  <code>minlength</code>
<strong>Type:</strong> <code>number</code>
</dt>
<dd>If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.</dd>

<dt>
<h3>multiple</h3> 
<strong>Attribute:</strong>  <code>multiple</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"` or `"file"`, otherwise it is ignored.</dd>

<dt>
<h3>name</h3> 
<strong>Attribute:</strong>  <code>name</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The name of the control, which is submitted with the form data.</dd>

<dt>
<h3>pattern</h3> 
<strong>Attribute:</strong>  <code>pattern</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.</dd>

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
<h3>results</h3> 
<strong>Attribute:</strong>  <code>results</code>
<strong>Type:</strong> <code>number</code>
</dt>
<dd>This is a nonstandard attribute supported by Safari that only applies when the type is `"search"`. Its value should be a nonnegative decimal integer.</dd>

<dt>
<h3>size</h3> 
<strong>Attribute:</strong>  <code>size</code>
<strong>Type:</strong> <code>number</code>
</dt>
<dd>The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.</dd>

<dt>
<h3>spellcheck</h3> 
<strong>Attribute:</strong>  <code>spellcheck</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the element will have its spelling and grammar checked. Defaults to `false`.</dd>

<dt>
<h3>step</h3> 
<strong>Attribute:</strong>  <code>step</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>Works with the min and max attributes to limit the increments at which a value can be set. Possible values are: `"any"` or a positive floating point number.</dd>

<dt>
<h3>type</h3> 
<strong>Attribute:</strong>  <code>type</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The type of control to display. The default type is text. Possible values are: `"text"`, `"password"`, `"email"`, `"number"`, `"search"`, `"tel"`, or `"url"`.</dd>

<dt>
<h3>value</h3> 
<strong>Attribute:</strong>  <code>value</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The value of the input.</dd>

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
<h3>ionInputDidLoad</h3></dt>
<dd>Emitted when the input has been created.</dd>

<dt>
<h3>ionInputDidUnload</h3></dt>
<dd>Emitted when the input has been removed.</dd>

<dt>
<h3>ionStyle</h3></dt>
<dd>Emitted when the styles change.</dd>

</dl>


