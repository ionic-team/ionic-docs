* * *

table-contenido: falso

* * *

# Hoja de acción

Una hoja de acción es un cuadro de diálogo que muestra un conjunto de opciones. Aparece en la parte superior del contenido de la aplicación, y el usuario debe descartar manualmente antes de que pueda reanudar la interacción con la aplicación. Hay varias maneras de descartar la hoja de acción, incluyendo tocar el fondo o pulsar la tecla de escape en el escritorio. <mark>Las hojas de acción no deben utilizarse para la navegación.</mark>

## Uso básico

El complemento ActionSheet muestra una lista nativa de opciones entre las que el usuario puede elegir. Integer sed lacus eu purus viverra egestas. Nunc porta, elit ut finibus gravida, dui orci feugiat leo, tincidunt fermentum urna eros vel elit. Phasellus convallis, tellus eu volutpat facilisis, ipsum mauris luctus diam, sodales tincidunt quam turpis at leo.

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

Muestra un conjunto de opciones con la capacidad de confirmar o cancelar una acción.</docs-card> <docs-card header="ion-action-sheet-controller" href="/docs/api/action-sheet-controller"> 

Utilizado para gestionar la creación, descarte y destrucción de hojas de acción.</docs-card> </docs-cards>