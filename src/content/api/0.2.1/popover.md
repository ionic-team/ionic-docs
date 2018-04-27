---
previewUrl: "/docs/docs-content/api/0.2.1/popover-demo.html"
---
# ion-popover

A Popover is a dialog that appears on top of the current page. It can be used for anything, but generally it is used for overflow actions that don't fit in the navigation bar.

### Creating

Popovers can be created using a [Popover Controller](../../popover-controller/PopoverController). They can be customized by passing popover options in the popover controller's create method.

### Presenting

To present a popover, call the `present` method on a popover instance. In order to position the popover relative to the element clicked, a click event needs to be passed into the options of the the `present` method. If the event is not passed, the popover will be positioned in the center of the viewport.


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
<h3>component</h3> 
<strong>Attribute:</strong>  <code>component</code>
</dt>
<dd>The component to display inside of the popover.</dd>

<dt>
<h3>componentProps</h3> 
<strong>Attribute:</strong>  <code>component-props</code>
</dt>
<dd>The data to pass to the popover component.</dd>

<dt>
<h3>cssClass</h3> 
<strong>Attribute:</strong>  <code>css-class</code>
</dt>
<dd>Additional classes to apply for custom CSS. If multiple classes are
provided they should be separated by spaces.</dd>

<dt>
<h3>delegate</h3> 
<strong>Attribute:</strong>  <code>delegate</code>
</dt>
<dd></dd>

<dt>
<h3>enableBackdropDismiss</h3> 
<strong>Attribute:</strong>  <code>enable-backdrop-dismiss</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the popover will be dismissed when the backdrop is clicked. Defaults to `true`.</dd>

<dt>
<h3>enterAnimation</h3> 
<strong>Attribute:</strong>  <code>enter-animation</code>
</dt>
<dd>Animation to use when the popover is presented.</dd>

<dt>
<h3>ev</h3> 
<strong>Attribute:</strong>  <code>ev</code>
<strong>Type:</strong> <code>any</code>
</dt>
<dd>The event to pass to the popover animation.</dd>

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
<dd>Animation to use when the popover is dismissed.</dd>

<dt>
<h3>mode</h3> 
<strong>Attribute:</strong>  <code>mode</code>
</dt>
<dd>The mode determines which platform styles to use.
Possible values are: `"ios"` or `"md"`.
For more information, see [Platform Styles](/docs/theming/platform-specific-styles).</dd>

<dt>
<h3>overlayId</h3> 
<strong>Attribute:</strong>  <code>overlay-id</code>
<strong>Type:</strong> <code>number</code>
</dt>
<dd></dd>

<dt>
<h3>showBackdrop</h3> 
<strong>Attribute:</strong>  <code>show-backdrop</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, a backdrop will be displayed behind the popover. Defaults to `true`.</dd>

<dt>
<h3>translucent</h3> 
<strong>Attribute:</strong>  <code>translucent</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the popover will be translucent. Defaults to `false`.</dd>

<dt>
<h3>willAnimate</h3> 
<strong>Attribute:</strong>  <code>will-animate</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the popover will animate. Defaults to `true`.</dd>

</dl>


<h2>Events</h2>

<dl><dt>
<h3>ionPopoverDidDismiss</h3></dt>
<dd>Emitted after the popover has dismissed.</dd>

<dt>
<h3>ionPopoverDidLoad</h3></dt>
<dd>Emitted after the popover has loaded.</dd>

<dt>
<h3>ionPopoverDidPresent</h3></dt>
<dd>Emitted after the popover has presented.</dd>

<dt>
<h3>ionPopoverDidUnload</h3></dt>
<dd>Emitted after the popover has unloaded.</dd>

<dt>
<h3>ionPopoverWillDismiss</h3></dt>
<dd>Emitted before the popover has dismissed.</dd>

<dt>
<h3>ionPopoverWillPresent</h3></dt>
<dd>Emitted before the popover has presented.</dd>

</dl>


<h2>Methods</h2>
<dl>

<dt><h3>dismiss()</h3></dt>
<dd>Dismiss the popover overlay after it has been presented.</dd>

<dt><h3>onDidDismiss()</h3></dt>
<dd>Returns a promise that resolves when the popover did dismiss. It also accepts a callback
that is called in the same circustances.

```
const {data, role} = await popover.onDidDismiss();
```</dd>

<dt><h3>onWillDismiss()</h3></dt>
<dd>Returns a promise that resolves when the popover will dismiss. It also accepts a callback
that is called in the same circustances.

```
const {data, role} = await popover.onWillDismiss();
```</dd>

<dt><h3>present()</h3></dt>
<dd>Present the popover overlay after it has been created.</dd>

</dl>


