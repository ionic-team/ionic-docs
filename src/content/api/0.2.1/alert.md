---
previewUrl: "/docs/docs-content/api/0.2.1/alert-demo.html"
---
# ion-alert

An Alert is a dialog that presents users with information or collects information from the user using inputs. An alert appears on top of the app's content, and must be manually dismissed by the user before they can resume interaction with the app. It can also optionally have a `title`, `subTitle` and `message`.


### Creating

Alerts can be created using a [Alert Controller](../../alert-controller/AlertController). They can be customized by passing alert options in the alert controller's create method.


### Buttons

In the array of `buttons`, each button includes properties for its `text`, and optionally a `handler`. If a handler returns `false` then the alert will not automatically be dismissed when the button is clicked. All buttons will show up in the order they have been added to the `buttons` array from left to right. Note: The right most button (the last one in the array) is the main button.

Optionally, a `role` property can be added to a button, such as `cancel`. If a `cancel` role is on one of the buttons, then if the alert is dismissed by tapping the backdrop, then it will fire the handler from the button with a cancel role.


### Inputs

Alerts can also include several different inputs whose data can be passed back to the app. Inputs can be used as a simple way to prompt users for information. Radios, checkboxes and text inputs are all accepted, but they cannot be mixed. For example, an alert could have all radio button inputs, or all checkbox inputs, but the same alert cannot mix radio and checkbox inputs. Do note however, different types of "text"" inputs can be mixed, such as `url`, `email`, `text`, etc. If you require a complex form UI which doesn't fit within the guidelines of an alert then we recommend building the form within a modal instead.


<h2>Properties</h2> 

<dl>
<dt>
<h3>buttons</h3> 
<strong>Attribute:</strong>  <code>buttons</code>
</dt>
<dd>Array of buttons to be added to the alert.</dd>

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
<dd>If true, the alert will be dismissed when the backdrop is clicked. Defaults to `true`.</dd>

<dt>
<h3>enterAnimation</h3> 
<strong>Attribute:</strong>  <code>enter-animation</code>
</dt>
<dd>Animation to use when the alert is presented.</dd>

<dt>
<h3>header</h3> 
<strong>Attribute:</strong>  <code>header</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The main title in the heading of the alert.</dd>

<dt>
<h3>inputs</h3> 
<strong>Attribute:</strong>  <code>inputs</code>
</dt>
<dd>Array of input to show in the alert.</dd>

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
<dd>Animation to use when the alert is dismissed.</dd>

<dt>
<h3>message</h3> 
<strong>Attribute:</strong>  <code>message</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The main message to be displayed in the alert.</dd>

<dt>
<h3>mode</h3> 
<strong>Attribute:</strong>  <code>mode</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd></dd>

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
<dd>The subtitle in the heading of the alert. Displayed under the title.</dd>

<dt>
<h3>translucent</h3> 
<strong>Attribute:</strong>  <code>translucent</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the alert will be translucent. Defaults to `false`.</dd>

<dt>
<h3>willAnimate</h3> 
<strong>Attribute:</strong>  <code>will-animate</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the alert will animate. Defaults to `true`.</dd>

</dl>


<h2>Events</h2>

<dl><dt>
<h3>ionAlertDidDismiss</h3></dt>
<dd>Emitted after the alert has dismissed.</dd>

<dt>
<h3>ionAlertDidLoad</h3></dt>
<dd>Emitted after the alert has presented.</dd>

<dt>
<h3>ionAlertDidPresent</h3></dt>
<dd>Emitted after the alert has presented.</dd>

<dt>
<h3>ionAlertDidUnload</h3></dt>
<dd>Emitted before the alert has presented.</dd>

<dt>
<h3>ionAlertWillDismiss</h3></dt>
<dd>Emitted before the alert has dismissed.</dd>

<dt>
<h3>ionAlertWillPresent</h3></dt>
<dd>Emitted before the alert has presented.</dd>

</dl>


<h2>Methods</h2>
<dl>

<dt><h3>dismiss()</h3></dt>
<dd>Dismiss the alert overlay after it has been presented.</dd>

<dt><h3>onDidDismiss()</h3></dt>
<dd>Returns a promise that resolves when the alert did dismiss. It also accepts a callback
that is called in the same circustances.

```
const {data, role} = await alert.onDidDismiss();
```</dd>

<dt><h3>onWillDismiss()</h3></dt>
<dd>Returns a promise that resolves when the alert will dismiss. It also accepts a callback
that is called in the same circustances.

```
const {data, role} = await alert.onWillDismiss();
```</dd>

<dt><h3>present()</h3></dt>
<dd>Present the alert overlay after it has been created.</dd>

</dl>


