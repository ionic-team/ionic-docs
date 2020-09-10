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

Next, define a new class method, `addNewToGallery`, that will contain the core logic to take a device photo and save it to the filesystem. Vamos iniciar abrindo a câmera do dispositivo:

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

Next, open up `tab2.page.ts` and import the PhotoService class and add a method that calls the `addNewToGallery` method on the imported servce:

```typescript
import { PhotoService } from '../services/photo.service';

constructor(public photoService: PhotoService) { }

addPhotoToGallery() {
  this.photoService.addNewToGallery();
}
```

Then, open `tab2.page.html` and call the `addPhotoToGallery()` function when the FAB is tapped/clicked:

```html
<ion-content>
  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button (click)="addPhotoToGallery()">
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```

Salve o arquivo e, se ele ainda não estiver executando, reinicie o servidor de desenvolvimento digitando `ionic serve` no seu navegador ou terminal. Na aba Galeria de Fotos, clique no botão câmera. Se o seu pc/notebook possui webcam, uma janela de alerta aparece pedindo permissão. Agora tire seu selfie!

![API da câmera na web.](/docs/assets/img/guides/first-app-cap-ng/camera-web.png)

_(Sua selfie provavelmente é muito melhor que a minha)_

Depois de tirar uma foto, ela desaparece imediatamente. Por isso, precisamos exibi-lo em nosso app e salvá-lo para um acesso futuro.

## Mostrando uma foto (Displaying Photos)

Abaixo da classe `PhotoService` (porém fora dela), crie uma nova interface, chamada `Photo`, para guardar nossos metadados da foto:

```typescript
interface Photo {
  filepath: string;
  webviewPath: string;
}
```

Vá ao topo do arquivo e defina uma matriz de Fotos, que conterá uma referência a cada foto capturada com a Câmera.

```typescript
export class PhotoService {
  public photos: Photo[] = [];

  // outro código
}
```

No começo da função `AddFotoNaGaleria()`, adicione a foto capturada à matriz que armazena as fotos.

```typescript
  const capturarFoto = await Camera.getPhoto({
    resultType: CameraResultType.Uri, 
    source: CameraSource.Camera, 
    quality: 100 
  });

  this.photos.unshift({
    filepath: "soon...",
    webviewPath: capturarPhoto.webPath
  });
}
```

Next, move over to `tab2.page.html` so we can display the image on the screen. Add a [Grid component](https://ionicframework.com/docs/api/grid) so that each photo will display nicely as photos are added to the gallery, and loop through each photo in the `PhotoServices`'s Photos array, adding an Image component (`<ion-img>`) for each. Point the `src` (source) at the photo’s path:

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
