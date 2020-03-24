---
previousText: 'Implementación de dispositivos móviles'
previousUrl: '/docs/angular/your-first-app/6-deploying-mobile'
nextText: 'Ciclo de vida'
nextUrl: '/docs/angular/lifecycle'
---

# Desarrollo rápido de aplicaciones con Live Reload

Hasta ahora, hemos visto lo fácil que es desarrollar una aplicación multiplataforma que funcione en todas partes La experiencia de desarrollo es bastante rápida, pero ¿qué pasa si te digo que hay una manera de ir más rápido?

Podemos usar Ionic CLI’s [Funcionalidad de recarga en vivo](https://ionicframework.com/docs/cli/livereload) para aumentar nuestra productividad al crear aplicaciones de Ionic. Cuando está activo, Live Reload volverá a cargar el navegador y / o WebView cuando se detecten cambios en la aplicación.

## Recarga en vivo

¿Recuerdas ionic serve?  Eso fue Live Reload trabajando en el navegador, lo que nos permitió iterar rápidamente.

También podemos usarlo cuando desarrollamos en dispositivos iOS y Android. Esto es particularmente útil cuando se escribe código que interactúa con plugins nativos - debemos ejecutarlo en un dispositivo para verificar que funciona. Por lo tanto, ser capaz de escribir rápidamente, construir, probar y desplegar código es crucial para mantener nuestra velocidad de desarrollo.

Usemos Live Reload para implementar la eliminación de fotos, la pieza que falta de nuestra función Photo Gallery . Seleccione su plataforma de elección (iOS o Android) y conecte un dispositivo a su computadora. A continuación, ejecute cualquiera de los comandos en un terminal, basado en la plataforma elegida:

```shell
$ ionic cap run ios -l --external

$ ionic cap run android -l --external
```

The Live Reload server will start up, and the native IDE of choice will open if not opened already. Within the IDE, click the Play button to launch the app onto your device.

## Deleting Photos

With Live Reload running and the app open on your device, let’s implement photo deletion functionality. Open `tab2.page.html` and add a new click handler to each `<ion-img>` element. When the app user taps on a photo in our gallery, we’ll display an [Action Sheet](https://ionicframework.com/docs/api/action-sheet) dialog with the option to either delete the selected photo or cancel (close) the dialog.

```html
<ion-col size="6" 
    *ngFor="let photo of photoService.photos; index as position">
  <ion-img src="{{ photo.base64 ? photo.base64 : photo.webviewPath }}" 
           (click)="showActionSheet(photo, position)"></ion-img>
</ion-col>
```

Over in `tab2.page.ts`, import Action Sheet and add it to the constructor:

```typescript
import { ActionSheetController } from '@ionic/angular';

constructor(public photoService: PhotoService, 
            public actionSheetController: ActionSheetController) {}
```

Next, implement the `showActionSheet()` function. We add two options: `Delete` that calls PhotoService’s `deletePicture()` function (to be added next) and `Cancel`, which when given the role of “cancel” will automatically close the action sheet:

```typescript
public async showActionSheet(photo, position) {
  const actionSheet = await this.actionSheetController.create({
    header: 'Photos',
    buttons: [{
      text: 'Delete',
      role: 'destructive',
      icon: 'trash',
      handler: () => {
        this.photoService.deletePicture(photo, position);
      }
    }, {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        // Nothing to do, action sheet is automatically closed
        }
    }]
  });
  await actionSheet.present();
}
```

Save both of the files we just edited. The Photo Gallery app will reload automatically, and now when we tap on one of the photos in the gallery, the action sheet displays. Tapping “Delete” doesn’t do anything yet, so head back into your code editor.

In `src/app/services/photo.service.ts`, add the `deletePicture()` function:

```typescript
public async deletePicture(photo: Photo, position: number) {
  // Remove this photo from the Photos reference data array
  this.photos.splice(position, 1);

  // Update photos array cache by overwriting the existing photo array
  Storage.set({
    key: this.PHOTO_STORAGE,
    value: JSON.stringify(this.photos)
  });

  // delete photo file from filesystem
  const filename = photo.filepath
                      .substr(photo.filepath.lastIndexOf('/') + 1);

  await Filesystem.deleteFile({
    path: filename,
    directory: FilesystemDirectory.Data
  });
}
```

The selected photo is removed from the Photos array first. Then, we use the Capacitor Storage API to update the cached version of the Photos array. Finally, we delete the actual photo file itself using the Filesystem API.

Save this file, then tap on a photo again and choose the “Delete” option. This time, the photo is deleted! Implemented much faster using Live Reload. 💪

## What’s Next?

Congratulations! You built a complete cross-platform Photo Gallery app that runs on the web, iOS, and Android. There are many paths to follow from here. Try adding another [Ionic UI component](https://ionicframework.com/docs/components) to the app, or more [native functionality](https://capacitor.ionicframework.com/docs/apis). The sky’s the limit.

Happy app building! 💙
