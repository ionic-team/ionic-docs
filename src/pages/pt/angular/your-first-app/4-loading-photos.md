---
previousText: 'Salvando fotos no sistema de arquivos'
previousUrl: '/docs/angular/seu-primeiro-app/3-salvando-fotos'
nextText: 'Adicionando pro celular'
nextUrl: 'docs/angular/seu-primeiro-app/5-adicionando-no-mobile'
---

# Carregando fotos do sistema de arquivos

Nós já temos implementado a captura e salvamento de fotos no sistema de arquivos. Falta um último pedaço de funcionalidade: as fotos são armazenadas no sistema de arquivos, mas precisamos de uma forma de salvar ponteiros para cada arquivo para que eles possam ser exibidos novamente na galeria de fotos.

Felizmente, isso é fácil: vamos usar a [API de Armazenamento](https://capacitor.ionicframework.com/docs/apis/storage) do Capacitor para armazenar nossa matriz de Fotos em uma loja chave-valor.

## API de Armazenamento

Comece definindo uma variável constante que atuará como a chave para a loja:

```typescript
export class PhotoService {
  public fotos: Photo[] = [];
  private PHOTO_STORAGE: string = "fotos";

  // outro código
}
```

Em seguida, no final da função `addNewToGallery`, adicione uma chamada para `Storage.set()` para salvar a matriz de Fotos. Ao adicioná-lo aqui, a matriz de Fotos é armazenada cada vez que uma nova foto é tirada. Desta forma, não importa quando o usuário do app fecha ou troca para um app diferente - todos os dados de fotos são salvos.

```typescript
Storage.set({
  key: this.PHOTO_STORAGE,
  value: JSON.stringify(this.photos)
});
```

Com os dados do array de fotos salvos, crie uma função chamada `loadSaved()` que pode recuperar esses dados. Nós usamos a mesma chave para recuperar a matriz de fotos no formato JSON e em seguida, analisá-la em um array:

```typescript
public async loadSaved() {
  // Recuperar dados cache do array de fotos
  const photoList = await Storage. et({ key: this.PHOTO_STORAGE });
  this.fotos = JSON.parse(photoList.value) ├[];

  // mais para vir...
}
```

No celular (chegando a seguir!), podemos definir diretamente a origem de uma tag da imagem - `<img src="x" />` - para cada arquivo de foto no sistema de arquivos, exibindo-os automaticamente. No entanto, na web, temos de ler cada imagem do sistema de arquivos para o formato base64, usando uma nova propriedade `base64` no objeto `Photo`. Isso porque a API do sistema de arquivos usa [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) debaixo do pano. Abaixo está o código que você precisa adicionar na função `loadSaved()` que você acabou de adicionar:

```typescript
// Exibe a foto lendo no formato base64
para (let foto disto. hotos) {
  // Leia os dados de cada foto salva no sistema de arquivos
  const readFile = await Filesystem. eadFile({
      path: photo.filepath,
      directory: FilesystemDirectory.Data
  });

  // Plataforma Web apenas: carregue a foto como dados base64
  da foto. ebviewPath = `data:image/jpeg;base64,${readFile.data}`;
}
```

Depois, chame este novo método em `tab2.page.ts` para que quando o usuário navegar pela primeira vez até o Tab 2 (a Galeria de Fotos), todas as fotos são carregadas e exibidas na tela.

```typescript
async ngOnInit() {
  await isso.photoService.loadSaved();
}
```

É isso! Desenvolvemos um recurso completo de Galeria de Fotos em nosso aplicativo Ionic que funciona na web. Em seguida, iremos transformá-lo em um aplicativo móvel para iOS e Android!
