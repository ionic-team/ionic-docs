---
---
# ion-action-sheet-controller

Action Sheet controllers programmatically control the action sheet component. Action Sheets can be created and dismissed from the action sheet controller. View the [Action Sheet](../../action-sheet/ActionSheet) documentation for a full list of options to pass upon creation.

```javascript
async function presentBasic() {
  const actionSheetController = document.querySelector('ion-action-sheet-controller');
  await actionSheetController.componentOnReady();

  const actionSheetElement = await actionSheetController.create({
    header: "Albums",
    buttons: [{
      text: 'Delete',
      role: 'destructive',
      icon: 'trash',
      handler: () => {
        console.log('Delete clicked');
      }
    }, {
      text: 'Share',
      icon: 'share',
      handler: () => {
        console.log('Share clicked');
      }
    }, {
      text: 'Play (open modal)',
      icon: 'arrow-dropright-circle',
      handler: () => {
        console.log('Play clicked');
      }
    }, {
      text: 'Favorite',
      icon: 'heart',
      handler: () => {
        console.log('Favorite clicked');
      }
    }, {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }]
  });
  await actionSheetElement.present();
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


