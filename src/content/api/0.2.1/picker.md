---
---
# ion-picker

A Picker is a dialog that displays a row of buttons and columns underneath. It appears on top of the app's content, and at the bottom of the viewport.



<h2>Properties</h2> 

<dl>
<dt>
<h3>buttons</h3> 
<strong>Attribute:</strong>  <code>buttons</code>
</dt>
<dd>Array of buttons to be displayed at the top of the picker.</dd>

<dt>
<h3>columns</h3> 
<strong>Attribute:</strong>  <code>columns</code>
</dt>
<dd>Array of columns to be displayed in the picker.</dd>

<dt>
<h3>cssClass</h3> 
<strong>Attribute:</strong>  <code>css-class</code>
</dt>
<dd>Additional classes to apply for custom CSS. If multiple classes are
provided they should be separated by spaces.</dd>

<dt>
<h3>duration</h3> 
<strong>Attribute:</strong>  <code>duration</code>
<strong>Type:</strong> <code>number</code>
</dt>
<dd>Number of milliseconds to wait before dismissing the picker.</dd>

<dt>
<h3>enableBackdropDismiss</h3> 
<strong>Attribute:</strong>  <code>enable-backdrop-dismiss</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the picker will be dismissed when the backdrop is clicked. Defaults to `true`.</dd>

<dt>
<h3>enterAnimation</h3> 
<strong>Attribute:</strong>  <code>enter-animation</code>
</dt>
<dd>Animation to use when the picker is presented.</dd>

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
<dd>Animation to use when the picker is dismissed.</dd>

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
<dd>If true, a backdrop will be displayed behind the picker. Defaults to `true`.</dd>

<dt>
<h3>willAnimate</h3> 
<strong>Attribute:</strong>  <code>will-animate</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the picker will animate. Defaults to `true`.</dd>

</dl>


<h2>Events</h2>

<dl><dt>
<h3>ionPickerDidDismiss</h3></dt>
<dd>Emitted after the picker has dismissed.</dd>

<dt>
<h3>ionPickerDidLoad</h3></dt>
<dd>Emitted after the picker has loaded.</dd>

<dt>
<h3>ionPickerDidPresent</h3></dt>
<dd>Emitted after the picker has presented.</dd>

<dt>
<h3>ionPickerDidUnload</h3></dt>
<dd>Emitted after the picker has unloaded.</dd>

<dt>
<h3>ionPickerWillDismiss</h3></dt>
<dd>Emitted before the picker has dismissed.</dd>

<dt>
<h3>ionPickerWillPresent</h3></dt>
<dd>Emitted before the picker has presented.</dd>

</dl>


<h2>Methods</h2>
<dl>

<dt><h3>addButton()</h3></dt>
<dd></dd>

<dt><h3>addColumn()</h3></dt>
<dd></dd>

<dt><h3>dismiss()</h3></dt>
<dd>Dismiss the picker overlay after it has been presented.</dd>

<dt><h3>getColumn()</h3></dt>
<dd></dd>

<dt><h3>getColumns()</h3></dt>
<dd></dd>

<dt><h3>onDidDismiss()</h3></dt>
<dd>Returns a promise that resolves when the picker did dismiss. It also accepts a callback
that is called in the same circustances.

```
const {data, role} = await picker.onDidDismiss();
```</dd>

<dt><h3>onWillDismiss()</h3></dt>
<dd>Returns a promise that resolves when the picker will dismiss. It also accepts a callback
that is called in the same circustances.

```
const {data, role} = await picker.onWillDismiss();
```</dd>

<dt><h3>present()</h3></dt>
<dd>Present the picker overlay after it has been created.</dd>

</dl>


