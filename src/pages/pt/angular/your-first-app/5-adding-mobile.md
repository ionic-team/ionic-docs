---
previousText: 'Carregando fotos do Sistema de Ficheiros'
previousUrl: '/docs/angular/your-first-app/4-loading-photos'
nextText: 'Lançando para dispositivo móvel'
nextUrl: '/docs/angular/your-first-app/6-deploying-mobile'
---

# Adicionando dispositivos móveis

A nossa galeria de fotos não estará concluída até que seja executada em iOS, Android e web - todos usando um único código. Basta algumas pequenas mudanças lógicas para suportar plataformas móveis, instalar algumas ferramentas nativas e, em seguida, executar o aplicativo num dispositivo. Vamos lá!

## Importar API da plataforma

Vamos começar a fazer algumas pequenas alterações de código - depois a nossa aplicação vai "apenas funcionar" quando nós o publicarmos num dispositivo.

Importa a [API da Plataforma Iônica](https://ionicframework.com/docs/angular/platform) para a `photo.service.ts`, que é usada para recuperar informações sobre o dispositivo atual. Neste caso, é útil selecionar em qual código será executado com base na plataforma em que o aplicativo está a ser executado (web ou móvel):

```typescript
import { Platform } from '@ionic/angular';

export class PhotoService {
  public fotos: Foto[] = [];
  private ARMAZENAMENTO_FOTOS: string = "fotos";
  private platforma: Platform;

  constructor(platforma: Platform) {
    this.platforma = platforma;
  }

  // resto do código
}
```

## Lógica específica da plataforma

Primeiro, vamos atualizar a funcionalidade de salvar fotos para dar suporte a dispositivos móveis. Na função `readAsBase64()`, verifica em qual plataforma a aplicação está a ser executada. Se for "híbrido" (Capacitor ou Cordova, dois runtimes nativos), então lê o arquivo de fotos no formato base64 usando o método de arquivo `readFile()`. Caso contrário, usa a mesma lógica como antes ao executar o aplicativo na web:

```typescript
private async readAsBase64(cameraPhoto: CameraPhoto) {
  // "hybrid" vai detetar Cordova ou Capacitor
  if (this.platform.is('hybrid')) {
    // Ler o ficheiro em formato base64 
    const file = await Filesystem.readFile({
      path: cameraPhoto.path
    });

    return file.data;
  }
  else {
    // Buscar a foto, ler como um "blob" e depois converter para formato base64
    const response = await fetch(cameraPhoto.webPath);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }
}
```

A seguir, atualiza o método `savePicture()`. Quando executres em dispositivos móveis, define `filepath` para o resultado da operação `writeFile()` - `savedFile.uri`. Ao definires o método `webviewPath`, usa o método especial `Capacitor.convertFileSrc()` ([detalhes aqui](https://ionicframework.com/docs/core-concepts/webview#file-protocol)).

```typescript
// Guarda o fcheiro da imagem no dispositivo
  private async savePicture(cameraPhoto: CameraPhoto) {
    // Converte a foto para formato base64, requerido para guardar pela Filesystem API
    const base64Data = await this.readAsBase64(cameraPhoto);

    // Guarda o ficheiro no diretório de dados
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: FilesystemDirectory.Data
    });

    if (this.platform.is('hybrid')) {
      // Mostra a nova imagem reescrevendo o caminho 'file: //' para HTTP
      // Detalhes: https://ionicframework.com/docs/building/webview#file-protocol
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    }
    else {
      // Usa webPath para mostrar a nova imagem em vez de base64 desde
      // que esta já está gravada na memória
      return {
        filepath: fileName,
        webviewPath: cameraPhoto.webPath
      };
    }
  }
```

A seguir, volta para a função `loadSaved()` que implementamos anteriormente. Em dispositivos móveis podemos definir diretamente a origem de uma tag da imagem - `<img src="x" />` - para cada arquivo de foto no sistema de arquivos, exibindo-os automaticamente. Assim, apenas a web requer a leitura de cada imagem do sistema de arquivos no formato base64. Atualiza esta função para adicionar um _if statement_ acima do código do sistema de arquivos:

```typescript
public async loadSaved() {
  // Recupera os dados da matriz de fotos em cache
  const photoList = await Storage.get({ key: this.PHOTO_STORAGE });
  this.photos = JSON.parse(photoList.value) || [];

  // Maneira mais fácil de detectar quando estiver a executar na web:
  // “quando a platagorma NÃO é híbrida, executa isto”
  if (!this.platform.is('hybrid')) {
    // Mostra a foto a ler em formato base64
    for (let photo of this.photos) {
      // Ler dados de cada foto guardada no Filesystem (Sistema de ficheiros)
      const readFile = await Filesystem.readFile({
          path: photo.filepath,
          directory: FilesystemDirectory.Data
      });

      // Apenas para plataforma web: Carrega a foto em data base64
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }
  }
}
```

A Nossa Galeria de Fotos agora consiste em uma base de código que é executada na web, Android e iOS. A seguir, a parte que tens estado à espera - implantar a aplicação num dispositivo.
