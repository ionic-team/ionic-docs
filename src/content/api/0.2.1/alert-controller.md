---
---
# ion-alert-controller

Alert controllers programmatically control the alert component. Alerts can be created and dismissed from the alert controller. View the [Alert](../../alert/Alert) documentation for a full list of options to pass upon creation.


```javascript
async function presentAlert() {
  const alertController = document.querySelector('ion-alert-controller');
  await alertController.componentOnReady();

  const alert = await alertController.create({
    header: 'Alert',
    subHeader: 'Subtitle',
    message: 'This is an alert message.',
    buttons: ['OK']
  });
  return await alert.present();
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


