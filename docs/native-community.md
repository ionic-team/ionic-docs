---
title: Cordovaコミュニティプラグイン
sidebar_label: セットアップ
hide_table_of_contents: true
slug: /native/community
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Cordova Plugins | Cordova Community Core Plugins for Ionic Apps</title>
  <meta
    name="description"
    content="For the Cordova user community, our collection of TypeScript wrappers for open source Cordova core plugins easily add native functionality to any Ionic app."
  />
</head>

[Apache Cordova](https://cordova.apache.org/) は、開発者がHTML、CSS、JavaScriptでネイティブモバイルアプリを構築できるようにするオープンソースのネイティブランタイムです。Ionic独自のネイティブランタイムである[Capacitor](https://capacitorjs.com/) と同様に、Cordovaではプラグインシステムを使用して、カメラ、キーボード、ジオロケーションなどのネイティブデバイス機能にアクセスすることができます。プラグインは、ネイティブコンポーネントへの JavaScript インターフェースを提供する少量のアドオンコードです。プラグインを使用すると、純粋なウェブアプリで利用できる機能以上に、アプリでネイティブデバイスの機能を使用できるようになります。

IonicとCordovaを使用する開発者のために、Ionicアプリにネイティブ機能を簡単に追加できる、オープンソースのCordovaプラグイン用のTypeScriptラッパーコレクションを開発しました。 [Ionic Native](https://github.com/ionic-team/ionic-native)を参照してください。

これらのプラグインは、Ionicコミュニティによって投稿され、メンテナンスされています。コミュニティメンバーは通常、問題の発見と修正に迅速に対応していますが、一部のプラグインは正常に機能しない場合があります。

ネイティブプラグインのサポートとSLA、継続的なメンテナンス、セキュリティパッチを必要とするプロの開発者やチームには、一般的なネイティブユースケースのプラグインサポートやビルド済みソリューションなどの [プレミアムオプション](https://ionicframework.com/native) をご検討ください。
<intro-end />

:::note
このドキュメントは、Ionic Framework 4.0.0以降でビルドされたアプリを対象としています。古い Ionic v3 プロジェクトについては、[こちら](https://ionicframework.com/docs/v3/native) を参照してください。
:::

## Capacitor サポート

In addition to Cordova, Ionic Native also works with [Capacitor](https://capacitorjs.com), Ionic's official native runtime. Basic usage below. For complete details, [see the Capacitor documentation](https://capacitorjs.com/docs/cordova/using-cordova-plugins).

## 使い方

すべてのプラグインは、ネイティブコード（Cordova）とTypeScriptコード（Ionic Native）の2つのコンポーネントを持っています。
Cordovaプラグインは、共通のプラグインインターフェースと近代的な開発アプローチを提供するために、`Promise`または`Observable`でラップされています。

[Camera plugin](native/camera.md) を例として、まずインストールします。

````mdx-code-block
<Tabs
  groupId="runtime"
  defaultValue="cordova"
  values={[
    { value: 'cordova', label: 'Cordova' },
    { value: 'capacitor', label: 'Capacitor' },
  ]
}>
<TabItem value="cordova">

```shell
// Install Cordova plugin
$ ionic cordova plugin add cordova-plugin-camera

// Install Ionic Native TypeScript wrapper
$ npm install @awesome-cordova-plugins/camera

// Install Ionic Native core library (once per project)
$ npm install @awesome-cordova-plugins/core
```

</TabItem>
<TabItem value="capacitor">

For complete details, [see the Capacitor documentation](https://capacitorjs.com/docs/cordova/using-cordova-plugins).

```shell
// Install Ionic Native TypeScript wrapper
$ npm install @awesome-cordova-plugins/camera

// Install Cordova plugin
$ npm install cordova-plugin-camera

// Update native platform project(s) to include newly added plugin
$ ionic cap sync
```

</TabItem>
</Tabs>
````

次に、以下の様々なフレームワークの使用方法に従って、プラグインの使用を開始します。FAQについては、[こちら](native-faq.md)を参照してください。

## Angular

AngularアプリはCordovaまたはCapacitorを使用してネイティブモバイルアプリを構築することができます。プラグインを `@NgModule` でインポートして、Providers のリストに追加します。Angularの場合、インポートパスは `/ngx` で終わっている必要があります。Angularの変更検出は自動的に処理されます。

```tsx
// app.module.ts
import { Camera } from '@awesome-cordova-plugins/camera/ngx';

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

プラグインを宣言した後は、他のサービスと同じようにインポートやインジェクションが可能です。

```tsx
// camera.service.ts
import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private camera: Camera) {}

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // Do something with the new photo
      },
      (err) => {
        // Handle error
        console.log('Camera issue: ' + err);
      }
    );
  }
}
```

## React

Reactアプリは、ネイティブモバイルアプリを構築するためにCapacitorを使用する必要があります。ただし、Ionic Native（したがって、Cordovaプラグイン）も引き続き使用可能です。

```shell-session
// Install Core library (once per project)
$ npm install @awesome-cordova-plugins/core

// Install Ionic Native TypeScript wrapper
$ npm install @awesome-cordova-plugins/barcode-scanner

// Install Cordova plugin
$ npm install phonegap-plugin-barcodescanner

// Update native platform project(s) to include newly added plugin
$ ionic cap sync
```

プラグインオブジェクトをインポートし、その静的メソッドを使用します。

```tsx
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner';

const Tab1: React.FC = () => {
  const openScanner = async () => {
    const data = await BarcodeScanner.scan();
    console.log(`Barcode data: ${data.text}`);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={openScanner}>Scan barcode</IonButton>
      </IonContent>
    </IonPage>
  );
};
```

## Vanilla JavaScript

ES2015+ や TypeScript をターゲットとする Vanilla JavaScript アプリは、Cordova や Capacitor を使用してネイティブモバイルアプリを構築することができます。プラグインを使用するには、適切なパッケージからクラスをインポートし、その静的メソッドを使用します。

```js
import { Camera } from '@awesome-cordova-plugins/camera';

document.addEventListener('deviceready', () => {
  Camera.getPicture()
    .then((data) => console.log('Took a picture!', data))
    .catch((e) => console.log('Error occurred while taking a picture', e));
});
```
