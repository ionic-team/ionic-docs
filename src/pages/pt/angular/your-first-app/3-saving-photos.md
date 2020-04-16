---
previousText: 'Tirando fotos'
previousUrl: '/docs/angular/seu-primeiro-app/salvando-fotos'
nextText: 'Carregando fotos do Filesystem'
nextUrl: '/docs/angular/seu-primeiro-app/salvando-fotos'
---

# Salvando fotos no Filesystem

Agora podemos tirar várias fotos e exibí-las em uma galeria de fotos na segunda guia do nosso aplicativo. No entanto, essas fotos não estão sendo armazenadas permanentemente, portanto, quando o aplicativo for fechado, elas serão excluídas.

## Sistema de arquivos raiz

Felizmente, salvá-los no sistema de arquivos só dá alguns passos. Comece criando uma nova função, `savePicture()`, na classe `PhotoService` (`src/app/services/photo.service.ts`). Passamos no objeto `cameraPhoto` , que representa a foto recém-capturada do dispositivo:

```typescript
salvamento assíncrono privado (imagem de câmera: CameraPhoto) { }
```

Podemos usar esta nova função imediatamente em `addNewToGallery()`:

```typescript
public async addNewToGallery() {
  // Tire uma fotografia
  const capturedPhoto = await Camera. etPhoto({
    resultType: CameraResultType.Uri, // dados baseados em arquivo; fornece a melhor fonte de desempenho
    : CameraSource. munição, // tira automaticamente uma nova foto com a qualidade da câmera
    : 100 // a mais alta qualidade (0 a 100)
  });

  // Salve a imagem e adicione-a à coleção de fotos
  const savedImageFile = aguarda isso. avePicture(capturedPhoto);
  this.photos.unshift(savedImageFile);
}
```

Usaremos a Capacitor [API do sistema de arquivos](https://capacitor.ionicframework.com/docs/apis/filesystem) para salvar a foto no sistema de arquivos. Para começar, converta a foto para o formato base64 e, em seguida, utilize a função `writeFile` para alimentar os dados para a função </code>. As you’ll recall, we display each photo on the screen by setting each image’s source path (`src` attribute) in `tab2.page.html` to the webviewPath property. So, set it then return the new Photo object.

```typescript
private async savePicture(cameraPhoto: CameraPhoto) {
  // Convert photo to base64 format, required by Filesystem API to save
  const base64Data = await this.readAsBase64(cameraPhoto);

  // Write the file to the data directory
  const fileName = new Date().getTime() + '.jpeg';
  const savedFile = await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: FilesystemDirectory.Data
  });

  // Use webPath to display the new image instead of base64 since it's
  // already loaded into memory
  return {
    filepath: fileName,
    webviewPath: cameraPhoto.webPath
  };
}
```

`readAsBase64()` is a helper function we’ll define next. It's useful to organize via a separate method since it requires a small amount of platform-specific (web vs. lógica móvel) - mais sobre isso um pouco. For now, implement the logic for running on the web:

```typescript
private async readAsBase64(cameraPhoto: CameraPhoto) {
  // Buscar a foto, leia como um blob, então converta em formato base64
  const response = await fetch(cameraPhoto. ebPath!);
  const blob = await response.blob();

  return aguarda isso. onvertBlobToBase64(blob) como string;  
}

convertBlobToBase64 = (blob: Blob) => nova Promise((resolve, rejeitar) => {
  const reader = new FileReader; leitor de
  . nerror = rejeitar;
  reader.onload = () => {
      resolve(leitor. esult);
  };
  reader.readAsDataURL(blob);
});
```

Na realidade, estamos apenas usando APIs web embutidas: [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) como uma maneira legal de ler o arquivo no formato blob então o bloco do FileReader [readAsDataURL()](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL) para converter as fotos para base64. Na realidade, estamos apenas usando APIs web embutidas: [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) como uma maneira legal de ler o arquivo no formato blob então o bloco do FileReader [readAsDataURL()](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL) para converter as fotos para base64.

Finally, change the way pictures become visible in the template file `tab2.page.html`.

```html
<ion-img src="{{ photo.base64 ? photo.base64 : photo.webviewPath }}"></ion-img>
```

There we go! Each time a new photo is taken, it’s now automatically saved to the filesystem.
