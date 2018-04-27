---
---
# ion-popover-controller

Popover controllers programmatically control the popover component. Popovers can be created and dismissed from the popover controller. View the [Popover](../../popover/Popover) documentation for a full list of options to pass upon creation.

```javascript
async function presentPopover() {
  const popoverController = document.querySelector('ion-popover-controller');
  await popoverController.componentOnReady();

  const popoverElement = await popoverController.create({
    component: 'profile-page',
    ev: event
  });
  return await popoverElement.present();
}
```

<h2>Methods</h2>
<dl>

<dt><h3>create()</h3></dt>
<dd></dd>

<dt><h3>dismiss()</h3></dt>
<dd></dd>

<dt><h3>getTop()</h3></dt>
<dd></dd>

</dl>


