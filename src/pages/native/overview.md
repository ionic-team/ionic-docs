---
title: Ionic Native コミュニティエディション
---

Ionic Native Community Edition(CE)はオープンソースのCordovaプラグインのコレクションで、任意のIonicアプリへのネイティブ機能の追加を容易にします。

Ionic Native CEのプラグインは、Ionicコミュニティによってサブミットされ、保守されます。コミュニティメンバーは一般的に問題をすばやく見つけて修正しますが、一部のプラグインは正しく機能しない場合があります。専用のネイティブプラグインのサポートが必要なチームは、Ionic Native Enterprise Editionを試し、無料の試用版をリクエストしてください。

Note: これらのドキュメントはIonic Framework 4.0 .0以降で構築されたアプリ用です。以前のIonic v3プロジェクトについては、こちらをご覧ください。

## 利用方法
すべてのプラグインには、ネイティブコード(Cordova)とJavaScriptコードの2つのコンポーネントがあります。
Cordovaプラグインは、共通のプラグインインタフェースを提供するために、 `Promise` もしくは `Observable` にラップされています。
以下は、Cameraプラグインを使用したさまざまなフレームワークでの使い方です。

## Angular
プラグインを`@NgModule`にインポートし、Providerのリストに追加します。Angularの場合、インポートパスは`/ngx`で終わる必要があります。Angularの変更検出は自動的に処理されます。

```typescript
// app.module.ts
import { Camera } from '@ionic-native/camera/ngx';

...

@NgModule({
  ...

  providers: [
    ...
    Camera
    ...
  ]
  ...
})
export class AppModule { }
```

プラグインを宣言すると、他のサービスと同様にimportおよび注入できます:

```typescript
// camera.service.ts
import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private camera: Camera) { }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // Do something with the new photo

    }, (err) => {
     // Handle error
     console.log("Camera issue: " + err);
    });
  }
}
```

## Vanilla JavaScript
Ionic Nativeは、ES2015+やTypeScriptをターゲットにした普通のJavaScriptアプリでも使うことができます。プラグインを使用するには、適切なパッケージからClassをインポートし、そのstaticメソッドを使用します:

```js
import { Camera } from '@ionic-native/camera';

document.addEventListener('deviceready', () => {
  Camera.getPicture()
    .then(data => console.log('Took a picture!', data))
    .catch(e => console.log('Error occurred while taking a picture', e));
});
```
