---
previewUrl: "/docs/docs-content/api/0.2.1/action-sheet-demo.html"
---
# ion-action-sheet

An Action Sheet is a dialog that displays a set of options. It appears on top of the app's content, and must be manually dismissed by the user before they can resume interaction with the app. Destructive options are made obvious in `ios` mode. There are multiple ways to dismiss the action sheet, including tapping the backdrop or hitting the escape key on desktop.

### Creating

An action sheet can be created by the [Action Sheet Controller](../../action-sheet-controller/ActionSheetController) from an array of `buttons`, with each button including properties for its `text`, and optionally a `handler` and `role`. If a handler returns `false` then the action sheet will not be dismissed. An action sheet can also optionally have a `title`, `subTitle` and an `icon`.

### Buttons

A button's `role` property can either be `destructive` or `cancel`. Buttons without a role property will have the default look for the platform. Buttons with the `cancel` role will always load as the bottom button, no matter where they are in the array. All other buttons will be displayed in the order they have been added to the `buttons` array. Note: We recommend that `destructive` buttons are always the first button in the array, making them the top button. Additionally, if the action sheet is dismissed by tapping the backdrop, then it will fire the handler from the button with the cancel role.


<h2>Properties</h2> 

<dl>
<dt>
<h3>buttons</h3> 
<strong>Attribute:</strong>  <code>buttons</code>
</dt>
<dd>An array of buttons for the action sheet.</dd>

<dt>
<h3>cssClass</h3> 
<strong>Attribute:</strong>  <code>css-class</code>
</dt>
<dd>Additional classes to apply for custom CSS. If multiple classes are
provided they should be separated by spaces.</dd>

<dt>
<h3>enableBackdropDismiss</h3> 
<strong>Attribute:</strong>  <code>enable-backdrop-dismiss</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the action sheet will be dismissed when the backdrop is clicked. Defaults to `true`.</dd>

<dt>
<h3>enterAnimation</h3> 
<strong>Attribute:</strong>  <code>enter-animation</code>
</dt>
<dd>Animation to use when the action sheet is presented.</dd>

<dt>
<h3>header</h3> 
<strong>Attribute:</strong>  <code>header</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>Title for the action sheet.</dd>

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
<dd>Animation to use when the action sheet is dismissed.</dd>

<dt>
<h3>overlayId</h3> 
<strong>Attribute:</strong>  <code>overlay-id</code>
<strong>Type:</strong> <code>number</code>
</dt>
<dd></dd>

<dt>
<h3>subHeader</h3> 
<strong>Attribute:</strong>  <code>sub-header</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>Subtitle for the action sheet.</dd>

<dt>
<h3>translucent</h3> 
<strong>Attribute:</strong>  <code>translucent</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the action sheet will be translucent. Defaults to `false`.</dd>

<dt>
<h3>willAnimate</h3> 
<strong>Attribute:</strong>  <code>will-animate</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the action sheet will animate. Defaults to `true`.</dd>

</dl>


<h2>Events</h2>

<dl><dt>
<h3>ionActionSheetDidDismiss</h3></dt>
<dd>Emitted after the alert has dismissed.</dd>

<dt>
<h3>ionActionSheetDidLoad</h3></dt>
<dd>Emitted after the alert has loaded.</dd>

<dt>
<h3>ionActionSheetDidPresent</h3></dt>
<dd>Emitted after the alert has presented.</dd>

<dt>
<h3>ionActionSheetDidUnload</h3></dt>
<dd>Emitted after the alert has unloaded.</dd>

<dt>
<h3>ionActionSheetWillDismiss</h3></dt>
<dd>Emitted before the alert has dismissed.</dd>

<dt>
<h3>ionActionSheetWillPresent</h3></dt>
<dd>Emitted before the alert has presented.</dd>

</dl>


<h2>Methods</h2>
<dl>

<dt><h3>dismiss()</h3></dt>
<dd>Dismiss the action sheet overlay after it has been presented.</dd>

<dt><h3>onDidDismiss()</h3></dt>
<dd>Returns a promise that resolves when the action-sheet did dismiss. It also accepts a callback
that is called in the same circustances.

```
const {data, role} = await actionSheet.onDidDismiss();
```</dd>

<dt><h3>onWillDismiss()</h3></dt>
<dd>Returns a promise that resolves when the action-sheet will dismiss. It also accepts a callback
that is called in the same circustances.

```
const {data, role} = await actionSheet.onWillDismiss();
```</dd>

<dt><h3>present()</h3></dt>
<dd>Present the action sheet overlay after it has been created.</dd>

</dl>


