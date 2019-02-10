# Ionic Native
Ionic Nativeは、あらゆるIonicアプリに簡単にNative機能を追加できるCordovaプラグインのcuratedセットです。

これらのドキュメントは、Ionic Framework 4.0.0以降で構築されたアプリケーション用です。 Ionic v3 プロジェクトは [please see here](http://ionicframework.com/docs/v3/native/) をご覧ください。

Ionic Nativeには、Community EditionとEnterprise Editionの2つのエディションがあります。

## Community Edition
Ionic Native CEは、コミュニティの貢献者によって管理されているオープンソースプラグインのセットです。
Ionicはこれらのプラグインが機能することを維持、修正、改善、保証するものではありません。

## Enterprise Edition
専用のネイティブプラグインサポート、修正、改善、または実装ガイダンスが必要なチームには、Ionic Native EEが利用できます。

<div class="native-ee-pricing">
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <td>
            <span class="native-ee-pricing-table">特徴</span>
          </td>
          <th>
            <div class="plan-wrap"> 
              <span class="native-ee-pricing-table">Community Edition</span>
              <div class="price">$0/月 </div>
            </div>
          </th>
          <th>
            <div class="plan-wrap">
              <span class="native-ee-pricing-table">Enterprise Edition</span>
              <div class="price" data-toggle="billing-team">
                連絡ください</div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="stripe">
          <th>
            Maintainer
          </th>
          <td>OSS Community</td>
          <td>Ionic</td>
        </tr>
        <tr>
          <th>
            通常のリリースサイクルとアップデート
          </th>
          <td>No</td>
          <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"/></svg></td>
        </tr>
        <tr class="stripe">
          <th>
            サービス品質保証とチケットシステム
          </th>
          <td>No</td>
          <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"/></svg></td>
        </tr>
        <tr>
          <th>
            アドバイザリ＆サポート
          </th>
          <td>No</td>
          <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"/></svg></td>
        </tr>
        <tr class="stripe">
          <th>
            セキュリティとバグ修正
          </th>
          <td>OSS Community</td>
          <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"/></svg></td>
        </tr>
        <tr>
          <th>
            ガイダンスの実施
          </th>
          <td>No</td>
          <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"/></svg></td>
        </tr>
        <tr class="stripe">
          <th>
            サービス品質保証
          </th>
          <td>No</td>
          <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"/></svg></td>
        </tr>
        <tr>
          <th>
            <a href="native/native-core">Native Core</a>
          </th>
          <td>No</td>
          <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"/></svg></td>
        </tr>
        <tr>
          <th></th>
          <td></td>
          <td><a class="btn"
                href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">Contact Us</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

## Usage
すべてのプラグインには、ネイティブコード（Cordova）とJavaScriptコードという2つのコンポーネントがあります。
Cordovaプラグインは、共通のプラグインインターフェースを提供するために `Promise` か `Observable` にラップされています。
以下はCameraプラグインを例にしたさまざまなフレームワークオプションです。

## Angular
`@NgModule` にプラグインをインポートし、Providersに追加します。Angularでは、import pathは `/ngx` で終わる必要があります。Angularの変更検知は自動的に処理されます。

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

プラグインの宣言後は、他のServiceと同様にimportとinjectすることができます:

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
Ionic Nativeは、ES2015 +やTypeScriptをターゲットとした一般的なJavaScriptアプリケーションでも使用できます。プラグインを使用するには、適切なパッケージからClassをimportしてその静的メソッドを使用します:

```js
import { Camera } from '@ionic-native/camera';

document.addEventListener('deviceready', () => {
  Camera.getPicture()
    .then(data => console.log('Took a picture!', data))
    .catch(e => console.log('Error occurred while taking a picture', e));
});
```