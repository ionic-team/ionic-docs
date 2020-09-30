---
previousText: 'Tirando fotos'
previousUrl: '/docs/angular/seu-primeiro-app/salvando-fotos'
nextText: 'Carregando fotos do Sistema de Ficheiros'
nextUrl: '/docs/angular/seu-primeiro-app/4-carregando-fotos'
---

# Salvando fotos no Sistema de Ficheiros

Agora podemos tirar várias fotos e exibí-las em uma galeria de fotos na segunda guia do nosso aplicativo. No entanto, essas fotos não estão a ser armazenadas permanentemente, portanto, quando o aplicativo for fechado, elas serão excluídas.

## Sistema de arquivos raiz

Felizmente, salvá-los no sistema de arquivos só dá alguns passos. Comece criando uma nova função, `savePicture()`, na classe `PhotoService` (`src/app/services/photo.service.ts`). Passamos no objeto `cameraPhoto` , que representa a foto recém-capturada do dispositivo:

```typescript
salvamento assíncrono privado (imagem de câmera: CameraPhoto) { }
```

Podemos usar esta nova função imediatamente em `addNewToGallery()`:

```typescript
public async addNewToGallery() {
  // Tire uma fotografia
  const capturedPhoto = await Camera. getPhoto({
    resultType: CameraResultType.Uri, // dados baseados em arquivo; fornece a melhor fonte de desempenho
    source: CameraSource.Camera, // tira automaticamente uma nova foto com a qualidade da câmera
    quality: 100 // a mais alta qualidade (0 a 100)
  });

  // Salvar a imagem e adicione-a à coleção de fotos
  const savedImageFile = aguarda isso. avePicture(capturedPhoto);
  this.photos.unshift(savedImageFile);
}
```

Usaremos a Capacitor [API do sistema de arquivos](https://capacitor.ionicframework.com/docs/apis/filesystem) para salvar a foto no sistema de arquivos. Para começar, converta a foto para o formato base64 e, em seguida, utilize a função `writeFile` para alimentar os dados para a função </code>. Como deve se lembrar, nós exibimos cada foto na tela, definindo o caminho de origem de cada imagem (atributo`src` de imagem) em `tab2.page.html` para a propriedade webviewPath. Então, defina-o e retorne o novo objeto Foto.

```typescript
private async savePicture(cameraPhoto: CameraPhoto) {
  // Converter a foto para formato base64, Necessário pela API do sistema de arquivos para salvar
  const base64Data = await this.readAsBase64(cameraPhoto);

  // Escreva o arquivo para o diretório de dados
  const fileName = new Date().getTime() + '.jpeg';
  const savedFile = await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: FilesystemDirectory.Data
  });

// Use webPath para exibir a nova imagem em vez de base64, pois
   // já carregada na memória
  return {
    filepath: fileName,
    webviewPath: cameraPhoto.webPath
  };
}
```

`readAsBase64()` é uma função que vamos definir em seguida. É útil organizar através de um método separado, já que ele requer uma pequena quantidade de plataforma específica (web vs. móvel) - mais sobre isso um pouco. Por enquanto, implemente-os para serem executados na web:

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

Obter a foto da câmera no formato base64 na web parece um pouco mais complicado do que no celular. Na realidade, estamos apenas usando APIs web embutidas: [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) como uma maneira legal de ler o arquivo no formato blob então o bloco do FileReader [readAsDataURL()](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL) para converter as fotos para base64.

Aqui vamos nós! Cada vez que uma nova foto for tirada, ela agora é salva automaticamente no sistema de arquivos.
