---
previewUrl: "/docs/docs-content/api/0.2.1/loading-demo.html"
---
# ion-loading

An overlay that can be used to indicate activity while blocking user interaction. The loading indicator appears on top of the app's content, and can be dismissed by the app to resume user interaction with the app. It includes an optional backdrop, which can be disabled by setting `showBackdrop: false` upon creation.


### Creating

Loading indicators can be created using a [Loading Controller](../../loading-controller/LoadingController). They can be customized by passing loading options in the loading controller's create method. The spinner name should be passed in the `spinner` property, and any optional HTML can be passed in the `content` property. If a value is not passed to `spinner` the loading indicator will use the spinner specified by the platform.


### Dismissing

The loading indicator can be dismissed automatically after a specific amount of time by passing the number of milliseconds to display it in the `duration` of the loading options. By default the loading indicator will show even during page changes, but this can be disabled by setting `dismissOnPageChange` to `true`. To dismiss the loading indicator after creation, call the `dismiss()` method on the loading instance. The `onDidDismiss` function can be called to perform an action after the loading indicator is dismissed.


<h2>Properties</h2> 

<dl>
<dt>
<h3>content</h3> 
<strong>Attribute:</strong>  <code>content</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>Optional text content to display in the loading indicator.</dd>

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
<dd>If true, the loading indicator will dismiss when the page changes. Defaults to `false`.</dd>

<dt>
<h3>duration</h3> 
<strong>Attribute:</strong>  <code>duration</code>
<strong>Type:</strong> <code>number</code>
</dt>
<dd>Number of milliseconds to wait before dismissing the loading indicator.</dd>

<dt>
<h3>enableBackdropDismiss</h3> 
<strong>Attribute:</strong>  <code>enable-backdrop-dismiss</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the loading indicator will be dismissed when the backdrop is clicked. Defaults to `false`.</dd>

<dt>
<h3>enterAnimation</h3> 
<strong>Attribute:</strong>  <code>enter-animation</code>
</dt>
<dd>Animation to use when the loading indicator is presented.</dd>

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
<dd>Animation to use when the loading indicator is dismissed.</dd>

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
<dd>If true, a backdrop will be displayed behind the loading indicator. Defaults to `true`.</dd>

<dt>
<h3>spinner</h3> 
<strong>Attribute:</strong>  <code>spinner</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The name of the spinner to display. Possible values are: `"lines"`, `"lines-small"`, `"dots"`,
`"bubbles"`, `"circles"`, `"crescent"`.</dd>

<dt>
<h3>translucent</h3> 
<strong>Attribute:</strong>  <code>translucent</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the loading indicator will be translucent. Defaults to `false`.</dd>

<dt>
<h3>willAnimate</h3> 
<strong>Attribute:</strong>  <code>will-animate</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the loading indicator will animate. Defaults to `true`.</dd>

</dl>


<h2>Events</h2>

<dl><dt>
<h3>ionLoadingDidDismiss</h3></dt>
<dd>Emitted after the loading has dismissed.</dd>

<dt>
<h3>ionLoadingDidLoad</h3></dt>
<dd>Emitted after the loading has loaded.</dd>

<dt>
<h3>ionLoadingDidPresent</h3></dt>
<dd>Emitted after the loading has presented.</dd>

<dt>
<h3>ionLoadingDidUnload</h3></dt>
<dd>Emitted after the loading has unloaded.</dd>

<dt>
<h3>ionLoadingWillDismiss</h3></dt>
<dd>Emitted before the loading has dismissed.</dd>

<dt>
<h3>ionLoadingWillPresent</h3></dt>
<dd>Emitted before the loading has presented.</dd>

</dl>


<h2>Methods</h2>
<dl>

<dt><h3>dismiss()</h3></dt>
<dd>Dismiss the loading overlay after it has been presented.</dd>

<dt><h3>onDidDismiss()</h3></dt>
<dd>Returns a promise that resolves when the loading did dismiss. It also accepts a callback
that is called in the same circustances.

```
const {data, role} = await loading.onDidDismiss();
```</dd>

<dt><h3>onWillDismiss()</h3></dt>
<dd>Returns a promise that resolves when the loading will dismiss. It also accepts a callback
that is called in the same circustances.

```
const {data, role} = await loading.onWillDismiss();
```</dd>

<dt><h3>present()</h3></dt>
<dd>Present the loading overlay after it has been created.</dd>

</dl>


