---
previousText: 'Seu primeiro App'
previousUrl: '/docs/angular/seu-primeiro-app'
nextText: 'Salvando fotos no Sistema de arquivos'
nextUrl: '/docs/angular/seu-primeiro-app/salvando-fotos'
---

# Tirando fotos com a câmera

Agora vamos para a parte divertida - adicione permissão para tirar fotos com a câmera do seu dispositivo usando o Capacitor [Camera API](https://capacitor.ionicframework.com/docs/apis/camera). De início iremos começar com a criação para Web, porém em seguida faremos pequenos ajustes para que funcionem no celular (IOS e Android).

## Serviço de Fotos (Photo Service)

Toda a lógica usando o Capacitor (uso da câmera e outros recursos nativos) será encapsulada em uma classe de serviços. Crie um  `Photo Service` usando o comando `Ionic Generate`:

```bash
$ ionic g service services/photo 
ou
$ ionic generate service services/photo
```

Abra o novo arquivo criado `services/photo.service.ts` e agora adicione a lógica que irá ativar a funcionalidade da câmera. Primeiro, importe as dependências do Capacitor e obtenha as referências para os plugins de Câmera, Sistema de Arquivos e Armazenamento:

```typescript
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, 
         CameraPhoto, CameraSource } from '@capacitor/core';

const { Camera, Filesystem, Storage } = Plugins;
```

Depois, defina uma nova função, `addFotoNaGaleria`, que conterá a lógica central para tirar uma foto com o dispositivo e salvá-la no sistema de arquivos. Vamos iniciar abrindo a câmera do dispositivo:

```typescript
public async addFotoNaGaleria() {
  // Tira uma foto
  const capturaFoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri, 
    source: CameraSource.Camera, 
    quality: 100 
  });
}
```

Veja a mágica aqui: não há nenhum código específico para plataforma (Web, IOS ou Android)!  O `Capacitor Camera plugin` abstrai isso para nós, ofertando o método `Camera.getPhoto()` para abrir a câmera do dispositivo e permitir que seja tirado fotos.

Next, open up `tab2.page.ts` and import the PhotoService class:

```typescript
import { PhotoService } from '../services/photo.service';

constructor(public photoService: PhotoService) { }
```

Then, open `tab2.page.html` and call the `addNewToGallery()` function when the FAB is tapped/clicked:

```html
<ion-content>
  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button (click)="photoService.addNewToGallery()">
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```

Save the file, and if it's not running already, restart the development server in your browser by running `ionic serve`. On the Photo Gallery tab, click the Camera button. If your computer has a webcam of any sort, a modal window appears. Take a selfie!

![Camera API on the web](/docs/assets/img/guides/first-app-cap-ng/camera-web.png)

_(Your selfie is probably much better than mine)_

After taking a photo, it disappears right away. We need to display it within our app and save it for future access.

## Displaying Photos

Outside of the `PhotoService` class definition (the very bottom of the file), create a new interface, `Photo`, to hold our photo metadata:

```typescript
interface Photo {
  filepath: string;
  webviewPath: string;
  base64?: string;
}
```

Back at the top of the file, define an array of Photos, which will contain a reference to each photo captured with the Camera.

```typescript
export class PhotoService {
  public photos: Photo[] = [];

  // other code
}
```

Over in the `addNewToGallery` function, add the newly captured photo to the beginning of the Photos array.

```typescript
  const capturedPhoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri, 
    source: CameraSource.Camera, 
    quality: 100 
  });

  this.photos.unshift({
    filepath: "soon...",
    webviewPath: capturedPhoto.webPath
  });
}
```

With the photo(s) stored into the main array, move over to `tab2.page.html` so we can display the image on the screen. Add a [Grid component](https://ionicframework.com/docs/api/grid) so that each photo will display nicely as photos are added to the gallery, and loop through each photo in the Photos array, adding an Image component (`<ion-img>`) for each. Point the `src` (source) at the photo’s path:

```html
<ion-content>
  <ion-grid>
    <ion-row>
    <ion-col size="6" 
      *ngFor="let photo of photoService.photos; index as position">
        <ion-img src="{{ photo.webviewPath }}"></ion-img>
    </ion-col>
    </ion-row>
  </ion-grid>

  <!-- ion-fab markup  -->
</ion-content>
```

Save all files. Within the web browser, click the Camera button and take another photo. This time, the photo is displayed in the Photo Gallery!

Up next, we’ll add support for saving the photos to the filesystem, so they can be retrieved and displayed in our app at a later time.
