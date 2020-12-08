* * *

tableOfContents: false

* * *

# Action Sheet

An Action Sheet is a dialog that displays a set of options. It appears on top of the app's content, and must be manually dismissed by the user before they can resume interaction with the app. There are multiple ways to dismiss the action sheet, including tapping the backdrop or hitting the escape key on desktop. <mark>Action Sheets should not be used for navigation.</mark>

## Basic Usage

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lacus eu purus viverra egestas. Nunc porta, elit ut finibus gravida, dui orci feugiat leo, tincidunt fermentum urna eros vel elit. Phasellus convallis, tellus eu volutpat facilisis, ipsum mauris luctus diam, sodales tincidunt quam turpis at leo.

```typescript
async function presentActionSheet() {
  const actionSheetController = document.querySelector('ion-action-sheet-controller');
  await actionSheetController.componentOnReady();

  const actionSheet = await actionSheetController.create({
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
  await actionSheet.present();
}
```

### Cancel Button

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lacus eu purus viverra egestas. Nunc porta, elit ut finibus gravida, dui orci feugiat leo, tincidunt fermentum urna eros vel elit. Phasellus convallis, tellus eu volutpat facilisis, ipsum mauris luctus diam, sodales tincidunt quam turpis at leo.

* * *

## Destructive

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lacus eu purus viverra egestas. Nunc porta, elit ut finibus gravida, dui orci feugiat leo, tincidunt fermentum urna eros vel elit. Phasellus convallis, tellus eu volutpat facilisis, ipsum mauris luctus diam, sodales tincidunt quam turpis at leo.

* * *

## Headers

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lacus eu purus viverra egestas. Nunc porta, elit ut finibus gravida, dui orci feugiat leo, tincidunt fermentum urna eros vel elit. Phasellus convallis, tellus eu volutpat facilisis, ipsum mauris luctus diam, sodales tincidunt quam turpis at leo.

### Adding Subheaders

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lacus eu purus viverra egestas. Nunc porta, elit ut finibus gravida, dui orci feugiat leo, tincidunt fermentum urna eros vel elit. Phasellus convallis, tellus eu volutpat facilisis, ipsum mauris luctus diam, sodales tincidunt quam turpis at leo.

* * *

## Scrollable

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lacus eu purus viverra egestas. Nunc porta, elit ut finibus gravida, dui orci feugiat leo, tincidunt fermentum urna eros vel elit. Phasellus convallis, tellus eu volutpat facilisis, ipsum mauris luctus diam, sodales tincidunt quam turpis at leo.

* * *

## Translucent

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lacus eu purus viverra egestas. Nunc porta, elit ut finibus gravida, dui orci feugiat leo, tincidunt fermentum urna eros vel elit. Phasellus convallis, tellus eu volutpat facilisis, ipsum mauris luctus diam, sodales tincidunt quam turpis at leo.

* * *

## Icons

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lacus eu purus viverra egestas. Nunc porta, elit ut finibus gravida, dui orci feugiat leo, tincidunt fermentum urna eros vel elit. Phasellus convallis, tellus eu volutpat facilisis, ipsum mauris luctus diam, sodales tincidunt quam turpis at leo.

* * *

## API

<docs-cards> <docs-card header="ion-action-sheet" href="/docs/api/action-sheet"> 

Display a set of options with the ability to confirm or cancel an action.</docs-card> <docs-card header="ion-action-sheet-controller" href="/docs/api/action-sheet-controller"> 

Used to manage the creation, dismissal, and destruction of action sheets.</docs-card> </docs-cards>