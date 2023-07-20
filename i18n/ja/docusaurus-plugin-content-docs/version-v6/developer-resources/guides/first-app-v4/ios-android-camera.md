# Android, iOS, and the Camera - Oh My!

以前は、Ionic アプリを立ち上げて、ウェブブラウザでローカルに実行していました。さて、自分の iOS または Android デバイスにインストールして、フォトギャラリー機能の構築を始めましょう。

## Cordova の iOS および Android プラットフォームを追加

Ionic はオープンソースの [Cordova プロジェクト](https://cordova.apache.org/docs/ja/latest/guide/overview/)を活用して、ネイティブなハードウェアサポートを提供しています。まず iOS と Android の _プラットフォーム_ を追加し、その後 Camera のような特定の _プラグイン_ を追加します。

```shell
$ ionic cordova platform add ios
$ ionic cordova platform add android
```

これらのコマンドは `config.xml` ファイルを作成します。これは Cordova iOS と Android の設定を定義するために使われます。Cordova はこのファイルを読み込み、各ネイティブアプリのバイナリをビルドする際に各設定を適用します。

There are more steps to configure [iOS](../../../developing/ios.md) and [Android](../../../developing/android.md) native tooling.

とてもいいよ！これで、カメラ機能を追加できます。ちなみに、このリファレンスコードは [GitHub](https://github.com/ionic-team/photo-gallery-tutorial-ionic4) にあります。

`tab2.page.html` に戻り、以下を追加します:

```html
<ion-content>
  <img />

  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button>
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```

ファイルを保存して監視 - カメラボタンが表示されます！これをタップすると、何も実行されないことに気付きます。次に、これを修正します。

## CLI を介してカメラの依存関係を追加

Camera を使用するためには、その JavaScript とネイティブライブラリの依存関係を取り込む必要があります。ターミナルウィンドウに戻り、次のコマンドを実行して JavaScript ライブラリをプロジェクトに追加し、TypeScript コードに Camera API を公開します:

```shell
npm install @awesome-cordova-plugins/camera
```

`package.json` 内に、次のようなバージョン番号の新しい JavaScript 依存関係が追加されていることがわかります。

`"@awesome-cordova-plugins/camera": "^5.4.0"`

次に、このコマンドを実行して iOS と Android のネイティブコードを追加し、実際にカメラをモバイルデバイスで動作させます。こちらのより詳細な情報は、[Cordova](https://cordova.apache.org/docs/en/latest/guide/overview/) と [Ionic Native](https://cordova.apache.org/docs/en/latest/guide/overview/) を御覧ください。

```shell
ionic cordova plugin add cordova-plugin-camera
```

`config.xml` ファイルが更新され、ネイティブカメラコードに次のようなエントリが追加されます。

```xml
<plugin name="cordova-plugin-camera" spec="^4.0.3" />
```

次のステップは iOS ユーザーのみ必要です。iOS10では、開発者はなぜアプリがデバイスカメラにアクセスしたいのか理由を示さなければなりません。これを section (<platform name="ios"></platform>) の `config.xml` の最後に追加します:

```xml
<!-- iOS 10 で必須: Camera 許可プロンプト -->
<edit-config file="*-Info.plist" mode="merge" target="NSCameraUsageDescription">
    <string>Used to take pictures</string>
</edit-config>
```

## Angular アプリの Module に Camera プラグインを追加

これは Angular プロジェクトなので、もうひとつやるべきことがあります: App Module(`src/app/app.module.ts`) に Camera を登録します。まず、カメラモジュールをインポートします:

```Javascript
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
```

では、これを Provider として追加します:

```Javascript
providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
```

これでアプリ内のどのページでも利用できます。

## ギャラリーページへの Camera の追加

カメラボタンはまだ何もしていません。`tab2.page.html` では、ボタンにクリックハンドラを追加します:

```html
<ion-fab vertical="bottom" horizontal="center" slot="fixed">
  <ion-fab-button (click)="takePicture()">
    <ion-icon name="camera"></ion-icon>
  </ion-fab-button>
</ion-fab>
```

次に、イメージプレースホルダーを更新します。次の例では、"currentImage" 変数(次に取り組んでいきます)がイメージにバインドされ、ユーザに表示されます。

```html
<img [src]="currentImage" *ngIf="currentImage" />
```

次に、`tab2.page.ts` を開き、Camera ライブラリをインポートします:

```Javascript
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
```

次に、"currentImage” 変数を定義し、コンストラクタを使用して Camera をこのクラスに挿入します:

```Javascript
export class Tab2Page {
  currentImage: any;

  constructor(private camera: Camera) { }
}
```

最後に、 `tab2.page.ts` の "takePicture" メソッドを追加します。カメラボタンをタップした後に実行するように既に設定されています。

```Javascript
export class Tab2Page {
  currentImage: any;

  constructor(private camera: Camera) { }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      console.log("Camera issue:" + err);
    });
  }
}
```

注意: iOS や Android には言及されていません！これはプラグインの素晴らしい能力です: ある API(この場合は `camera.getPicture()`)を使い、プラグインがプラットフォームの違いを処理してくれます。一度書けば、どこでも実行できます。😀

このファイルを保存し、DevApp の Camera ボタンをタップします。ほら見て！デバイスでカメラが起動します。撮影した写真は、フォトギャラリーページに表示されます。

Next, we’ll look at how to transform the app into a photo gallery, as well as how to save the photos to your device!
