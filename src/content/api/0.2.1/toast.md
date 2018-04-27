---
previewUrl: "/docs/docs-content/api/0.2.1/toast-demo.html"
---
# ion-toast

A Toast is a subtle notification commonly used in modern applications. It can be used to provide feedback about an operation or to display a system message. The toast appears on top of the app's content, and can be dismissed by the app to resume user interaction with the app.

### Creating

All of the toast options should be passed in the create method. The message to display should be passed in the `message` property. The `showCloseButton` option can be set to true in order to display a close button on the toast. See the properties below for all available options.

### Positioning

Toasts can be positioned at the top, bottom or middle of the viewport. The position can be passed upon creation. The possible values are `top`, `bottom` and `middle`. If the position is not specified, the toast will be displayed at the bottom of the viewport.

### Dismissing

The toast can be dismissed automatically after a specific amount of time by passing the number of milliseconds to display it in the `duration` of the toast options. If `showCloseButton` is set to true, then the close button will dismiss the toast. To dismiss the toast after creation, call the `dismiss()` method on the instance.


<h2>Properties</h2> 

<dl>
<dt>
<h3>closeButtonText</h3> 
<strong>Attribute:</strong>  <code>close-button-text</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>Text to display in the close button.</dd>

<dt>
<h3>cssClass</h3> 
<strong>Attribute:</strong>  <code>css-class</code>
</dt>
<dd>Additional classes to apply for custom CSS. If multiple classes are
provided they should be separated by spaces.</dd>

<dt>
<h3>dismissOnPageChange</h3> 
<strong>Attribute:</strong>  <code>dismiss-on-page-change</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the toast will dismiss when the page changes. Defaults to `false`.</dd>

<dt>
<h3>duration</h3> 
<strong>Attribute:</strong>  <code>duration</code>
<strong>Type:</strong> <code>number</code>
</dt>
<dd>How many milliseconds to wait before hiding the toast. By default, it will show
until `dismiss()` is called.</dd>

<dt>
<h3>enterAnimation</h3> 
<strong>Attribute:</strong>  <code>enter-animation</code>
</dt>
<dd>Animation to use when the toast is presented.</dd>

<dt>
<h3>keyboardClose</h3> 
<strong>Attribute:</strong>  <code>keyboard-close</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd></dd>

<dt>
<h3>leaveAnimation</h3> 
<strong>Attribute:</strong>  <code>leave-animation</code>
</dt>
<dd>Animation to use when the toast is dismissed.</dd>

<dt>
<h3>message</h3> 
<strong>Attribute:</strong>  <code>message</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>Message to be shown in the toast.</dd>

<dt>
<h3>overlayId</h3> 
<strong>Attribute:</strong>  <code>overlay-id</code>
<strong>Type:</strong> <code>number</code>
</dt>
<dd></dd>

<dt>
<h3>position</h3> 
<strong>Attribute:</strong>  <code>position</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The position of the toast on the screen. Possible values: "top", "middle", "bottom".</dd>

<dt>
<h3>showCloseButton</h3> 
<strong>Attribute:</strong>  <code>show-close-button</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the close button will be displayed. Defaults to `false`.</dd>

<dt>
<h3>translucent</h3> 
<strong>Attribute:</strong>  <code>translucent</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the toast will be translucent. Defaults to `false`.</dd>

<dt>
<h3>willAnimate</h3> 
<strong>Attribute:</strong>  <code>will-animate</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the toast will animate. Defaults to `true`.</dd>

</dl>


<h2>Events</h2>

<dl><dt>
<h3>ionToastDidDismiss</h3></dt>
<dd>Emitted after the toast has dismissed.</dd>

<dt>
<h3>ionToastDidLoad</h3></dt>
<dd>Emitted after the toast has loaded.</dd>

<dt>
<h3>ionToastDidPresent</h3></dt>
<dd>Emitted after the toast has presented.</dd>

<dt>
<h3>ionToastDidUnload</h3></dt>
<dd>Emitted after the toast has unloaded.</dd>

<dt>
<h3>ionToastWillDismiss</h3></dt>
<dd>Emitted before the toast has dismissed.</dd>

<dt>
<h3>ionToastWillPresent</h3></dt>
<dd>Emitted before the toast has presented.</dd>

</dl>


<h2>Methods</h2>
<dl>

<dt><h3>dismiss()</h3></dt>
<dd>Dismiss the toast overlay after it has been presented.</dd>

<dt><h3>onDidDismiss()</h3></dt>
<dd>Returns a promise that resolves when the toast did dismiss. It also accepts a callback
that is called in the same circustances.

```
const {data, role} = await toast.onDidDismiss();
```</dd>

<dt><h3>onWillDismiss()</h3></dt>
<dd>Returns a promise that resolves when the toast will dismiss. It also accepts a callback
that is called in the same circustances.

```
const {data, role} = await toast.onWillDismiss();
```</dd>

<dt><h3>present()</h3></dt>
<dd>Present the toast overlay after it has been created.</dd>

</dl>


