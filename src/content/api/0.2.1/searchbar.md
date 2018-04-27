---
previewUrl: "/docs/docs-content/api/0.2.1/searchbar-demo.html"
---
# ion-searchbar

Searchbars represent a text field that can be used to search through a collection. They can be displayed inside of a toolbar or the main content.

A searchbar should be used instead of an input to search lists. A clear button is displayed on input in the searchbar's text field. Clicking on the clear button will erase the text field and remain focused in the input. A cancel button can be enabled which will clear the input and remove focus.


```html
<!-- Default Searchbar -->
<ion-searchbar></ion-searchbar>

<!-- Searchbar with danger color -->
<ion-searchbar color="danger"></ion-searchbar>

<!-- Searchbar with value -->
<ion-searchbar value="Ionic"></ion-searchbar>

<!-- Searchbar with telephone type -->
<ion-searchbar type="tel"></ion-searchbar>

<!-- Searchbar with a cancel button and custom cancel button text -->
<ion-searchbar show-cancel-button cancel-button-text="Custom Cancel"></ion-searchbar>

<!-- Searchbar with a custom debounce -->
<ion-searchbar debounce="500"></ion-searchbar>

<!-- Animated Searchbar -->
<ion-searchbar animated></ion-searchbar>

<!-- Searchbar with a placeholder -->
<ion-searchbar placeholder="Filter Schedules"></ion-searchbar>

<!-- Searchbar in a Toolbar -->
<ion-toolbar>
  <ion-searchbar></ion-searchbar>
</ion-toolbar>
```

<h2>Properties</h2> 

<dl>
<dt>
<h3>animated</h3> 
<strong>Attribute:</strong>  <code>animated</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, enable searchbar animation. Default `false`.</dd>

<dt>
<h3>autocomplete</h3> 
<strong>Attribute:</strong>  <code>autocomplete</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>Set the input's autocomplete property. Values: `"on"`, `"off"`. Default `"off"`.</dd>

<dt>
<h3>autocorrect</h3> 
<strong>Attribute:</strong>  <code>autocorrect</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>Set the input's autocorrect property. Values: `"on"`, `"off"`. Default `"off"`.</dd>

<dt>
<h3>cancelButtonText</h3> 
<strong>Attribute:</strong>  <code>cancel-button-text</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>Set the the cancel button text. Default: `"Cancel"`.</dd>

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
<dd>Set the amount of time, in milliseconds, to wait to trigger the `ionInput` event after each keystroke. Default `250`.</dd>

<dt>
<h3>mode</h3> 
<strong>Attribute:</strong>  <code>mode</code>
</dt>
<dd>The mode determines which platform styles to use.
Possible values are: `"ios"` or `"md"`.
For more information, see [Platform Styles](/docs/theming/platform-specific-styles).</dd>

<dt>
<h3>placeholder</h3> 
<strong>Attribute:</strong>  <code>placeholder</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>Set the input's placeholder. Default `"Search"`.</dd>

<dt>
<h3>showCancelButton</h3> 
<strong>Attribute:</strong>  <code>show-cancel-button</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, show the cancel button. Default `false`.</dd>

<dt>
<h3>spellcheck</h3> 
<strong>Attribute:</strong>  <code>spellcheck</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, enable spellcheck on the input. Default `false`.</dd>

<dt>
<h3>type</h3> 
<strong>Attribute:</strong>  <code>type</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>Set the type of the input. Values: `"text"`, `"password"`, `"email"`, `"number"`, `"search"`, `"tel"`, `"url"`. Default `"search"`.</dd>

<dt>
<h3>value</h3> 
<strong>Attribute:</strong>  <code>value</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>the value of the searchbar.</dd>

</dl>


<h2>Events</h2>

<dl><dt>
<h3>ionBlur</h3></dt>
<dd>Emitted when the input loses focus.</dd>

<dt>
<h3>ionCancel</h3></dt>
<dd>Emitted when the cancel button is clicked.</dd>

<dt>
<h3>ionClear</h3></dt>
<dd>Emitted when the clear input button is clicked.</dd>

<dt>
<h3>ionFocus</h3></dt>
<dd>Emitted when the input has focus.</dd>

<dt>
<h3>ionInput</h3></dt>
<dd>Emitted when the Searchbar input has changed, including when it's cleared.</dd>

</dl>


