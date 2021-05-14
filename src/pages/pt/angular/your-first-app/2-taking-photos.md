---
previousText: 'Seu Primeiro App'
previousUrl: '/docs/angular/your-first-app'
nextText: 'Salvando fotos no Sistema de arquivos'
nextUrl: '/docs/angular/your-first-app/3-saving-photos'
---

# Tirando fotos com a câmera

Agora vamos para a parte divertida - adicione permissão para tirar fotos com a câmera do seu dispositivo usando o Capacitor [Camera API](https://capacitor.ionicframework.com/docs/apis/camera). De início iremos começar com a criação para Web, porém em seguida faremos pequenos ajustes para que funcionem no celular (IOS e Android).

## Serviço de Fotos

Toda a lógica usando o Capacitor (uso da câmera e outros recursos nativos) será encapsulada em uma classe de serviço. Crie um `PhotoService` usando o comando `Ionic generate`:

```bash
$ ionic g service services/photo
```

Abra o novo arquivo criado `services/photo.service.ts` e agora adicione a lógica que irá ativar a funcionalidade da câmera. Primeiro, importe as dependências do Capacitor e obtenha as referências para os plugins de Câmera, Sistema de Arquivos e Armazenamento:

```typescript
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, 
         CameraPhoto, CameraSource } from '@capacitor/core';

const { Camera, Filesystem, Storage } = Plugins;
```

Depois, defina uma nova função, `addNewToGallery`, que conterá a lógica central para tirar uma foto com o dispositivo e salvá-la no sistema de arquivos. Vamos iniciar abrindo a câmera do dispositivo:

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

Veja a mágica aqui: não há nenhum código específico para plataforma (Web, IOS ou Android)!  O Capacitor Camera plugin abstrai isso para nós, deixando uma chamada ao método `Camera.getPhoto()` para abrir a câmera do dispositivo e permitir que seja tirado fotos.

Em seguida, abra `tab2.page.ts` e importe a classe PhotoService e adicione um método que chama o método `addNewToGallery` no serviço importado:

```typescript
import { PhotoService } from '../services/photo.service';

constructor(public photoService: PhotoService) { }

addPhotoToGallery() {
  this.photoService.addNewToGallery();
}
```

Após, abra o arquivo `tab2.page.html` e chame a função `addPhotoToGallery()` quando o FAB for acionado/clicado:

```html
<ion-content>
  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button (click)="addPhotoToGallery()">
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```

Salve o arquivo e, se ele ainda não estiver executando, reinicie o servidor de desenvolvimento digitando `ionic serve` no seu navegador ou terminal. Na aba Galeria de Fotos, clique no botão câmera. Se o seu computador possui webcam, uma janela de alerta aparece pedindo permissão. Agora tire seu selfie!

![API da câmera na web](/docs/assets/img/guides/first-app-cap-ng/camera-web.png)

_(Sua selfie provavelmente é muito melhor que a minha)_

Depois de tirar uma foto, ela desaparece imediatamente. Precisamos exibi-lo em nosso app e salvá-lo para um acesso futuro.

## Mostrando Fotos

Abaixo da classe `PhotoService` (porém fora dela), crie uma nova interface, chamada `Photo`, para guardar nossos metadados da foto:

```typescript
exportar foto da interface {
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

No começo da função `addNewToGallery`, adicione a foto capturada à matriz que armazena as fotos.

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

Em seguida, mova para a `tab2.page.html` para que possamos exibir a imagem na tela. Adicione um [Grid Component](https://ionicframework.com/docs/api/grid) para que cada foto seja exibida de forma agradável enquanto as fotos são adicionadas à galeria, e percorra cada foto na matriz de fotos de `PhotoServices `, adicionando um componente de imagem (`<ion-img>`) para cada um. Aponte a `src` (fonte) para o caminho da foto:

```html
<ion-content>
  <ion-grid>
    <ion-row>
    <ion-col size="6" 
      *ngFor="let photo of photoService.photos; index as position">
        <ion-img [src]="photo.webviewPath"></ion-img>
    </ion-col>
    </ion-row>
  </ion-grid>

  <!-- ion-fab markup  -->
</ion-content>
```

Salve todos os arquivos. No navegador da Web, clique no botão Câmera e tire outra foto. Desta vez, a foto é exibida na Galeria de Fotos!

Em seguida, adicionaremos suporte para salvar as fotos no sistema de arquivos, para que possam ser recuperadas e exibidas em nosso aplicativo mais tarde.
