* * *

tableOfContents: false

* * *

# Feuille d'action

Une feuille d'action est une boîte de dialogue qui affiche un ensemble d'options. Elle s'affiche au-dessus du contenu de l'application et doit être rejetée manuellement par l'utilisateur avant de pouvoir reprendre l'interaction avec l'application. Il existe plusieurs façons de faire disparaître la feuille d'action, notamment en tapant sur la toile de fond ou en appuyant sur la touche Echap sur le bureau. <mark>Les feuilles d'action ne doivent pas être utilisées pour la navigation.</mark>

## Usage de base

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

### Bouton d'annulation

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lacus eu purus viverra egestas. Nunc porta, elit ut finibus gravida, dui orci feugiat leo, tincidunt fermentum urna eros vel elit. Phasellus convallis, tellus eu volutpat facilisis, ipsum mauris luctus diam, sodales tincidunt quam turpis at leo.

* * *

## Destructeur

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lacus eu purus viverra egestas. Nunc porta, elit ut finibus gravida, dui orci feugiat leo, tincidunt fermentum urna eros vel elit. Phasellus convallis, tellus eu volutpat facilisis, ipsum mauris luctus diam, sodales tincidunt quam turpis at leo.

* * *

## En-têtes

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lacus eu purus viverra egestas. Nunc porta, elit ut finibus gravida, dui orci feugiat leo, tincidunt fermentum urna eros vel elit. Phasellus convallis, tellus eu volutpat facilisis, ipsum mauris luctus diam, sodales tincidunt quam turpis at leo.

### Ajout de sous-titres

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lacus eu purus viverra egestas. Nunc porta, elit ut finibus gravida, dui orci feugiat leo, tincidunt fermentum urna eros vel elit. Phasellus convallis, tellus eu volutpat facilisis, ipsum mauris luctus diam, sodales tincidunt quam turpis at leo.

* * *

## Défilement

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lacus eu purus viverra egestas. Nunc porta, elit ut finibus gravida, dui orci feugiat leo, tincidunt fermentum urna eros vel elit. Phasellus convallis, tellus eu volutpat facilisis, ipsum mauris luctus diam, sodales tincidunt quam turpis at leo.

* * *

## Translucide

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lacus eu purus viverra egestas. Nunc porta, elit ut finibus gravida, dui orci feugiat leo, tincidunt fermentum urna eros vel elit. Phasellus convallis, tellus eu volutpat facilisis, ipsum mauris luctus diam, sodales tincidunt quam turpis at leo.

* * *

## Icônes

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lacus eu purus viverra egestas. Nunc porta, elit ut finibus gravida, dui orci feugiat leo, tincidunt fermentum urna eros vel elit. Phasellus convallis, tellus eu volutpat facilisis, ipsum mauris luctus diam, sodales tincidunt quam turpis at leo.

* * *

## API

<docs-cards> <docs-card header="ion-action-sheet" href="/docs/api/action-sheet"> 

Affiche un ensemble d'options avec la possibilité de confirmer ou d'annuler une action.</docs-card> <docs-card header="ion-action-sheet-controller" href="/docs/api/action-sheet-controller"> 

Utilisé pour gérer la création, le renvoi et la destruction des fiches d'action.</docs-card> </docs-cards>