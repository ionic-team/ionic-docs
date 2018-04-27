---
previewUrl: "/docs/docs-content/api/0.2.1/modal-demo.html"
---
# ion-modal

A Modal is a dialog that appears on top of the app's content, and must be dismissed by the app before interaction can resume. It is useful as a select component when there are a lot of options to choose from, or when filtering items in a list, as well as many other use cases.


### Creating

Modals can be created using a [Modal Controller](../../modal-controller/ModalController). They can be customized by passing modal options in the modal controller's create method.


```javascript
async function presentModal() {
  // initialize controller
  const modalController = document.querySelector('ion-modal-controller');
  await modalController.componentOnReady();

  // create component to open
  const element = document.createElement('div');
  element.innerHTML = `
  <ion-header>
    <ion-toolbar>
      <ion-title>Super Modal</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <h1>Content of doom</h1>
    <div>Here's some more content</div>
    <ion-button class="dismiss">Dismiss Modal</ion-button>
  </ion-content>
  `;

  // listen for close event
  const button = element.querySelector('ion-button');
  button.addEventListener('click', () => {
    modalController.dismiss();
  });

  // present the modal
  const modalElement = await modalController.create({
    component: element
  });
  modalElement.present();
}
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
<h3>component</h3> 
<strong>Attribute:</strong>  <code>component</code>
</dt>
<dd>The component to display inside of the modal.</dd>

<dt>
<h3>componentProps</h3> 
<strong>Attribute:</strong>  <code>component-props</code>
</dt>
<dd>The data to pass to the modal component.</dd>

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
<dd>If true, the modal will be dismissed when the backdrop is clicked. Defaults to `true`.</dd>

<dt>
<h3>enterAnimation</h3> 
<strong>Attribute:</strong>  <code>enter-animation</code>
</dt>
<dd>Animation to use when the modal is presented.</dd>

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
<dd>Animation to use when the modal is dismissed.</dd>

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
<dd>If true, a backdrop will be displayed behind the modal. Defaults to `true`.</dd>

<dt>
<h3>willAnimate</h3> 
<strong>Attribute:</strong>  <code>will-animate</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the modal will animate. Defaults to `true`.</dd>

</dl>


<h2>Events</h2>

<dl><dt>
<h3>ionModalDidDismiss</h3></dt>
<dd>Emitted after the modal has dismissed.</dd>

<dt>
<h3>ionModalDidLoad</h3></dt>
<dd>Emitted after the modal has loaded.</dd>

<dt>
<h3>ionModalDidPresent</h3></dt>
<dd>Emitted after the modal has presented.</dd>

<dt>
<h3>ionModalDidUnload</h3></dt>
<dd>Emitted after the modal has unloaded.</dd>

<dt>
<h3>ionModalWillDismiss</h3></dt>
<dd>Emitted before the modal has dismissed.</dd>

<dt>
<h3>ionModalWillPresent</h3></dt>
<dd>Emitted before the modal has presented.</dd>

</dl>


<h2>Methods</h2>
<dl>

<dt><h3>dismiss()</h3></dt>
<dd>Dismiss the modal overlay after it has been presented.</dd>

<dt><h3>onDidDismiss()</h3></dt>
<dd>Returns a promise that resolves when the modal did dismiss. It also accepts a callback
that is called in the same circustances.

```
const {data, role} = await modal.onDidDismiss();
```</dd>

<dt><h3>onWillDismiss()</h3></dt>
<dd>Returns a promise that resolves when the modal will dismiss. It also accepts a callback
that is called in the same circustances.

```
const {data, role} = await modal.onWillDismiss();
```</dd>

<dt><h3>present()</h3></dt>
<dd>Present the modal overlay after it has been created.</dd>

</dl>


