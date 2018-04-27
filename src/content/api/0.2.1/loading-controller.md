---
---
# ion-loading-controller

Loading controllers programmatically control the loading component. Loadings can be created and dismissed from the loading controller. View the [Loading](../../loading/Loading) documentation for a full list of options to pass upon creation.


```javascript
async function presentLoading() {
  const loadingController = document.querySelector('ion-loading-controller');
  await loadingController.componentOnReady();

  const loadingElement = await loadingController.create({
    content: 'Please wait...',
    spinner: 'crescent',
    duration: 2000
  });
  return await loadingElement.present();
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


