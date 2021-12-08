---
contributors:
  - liamdebeasi
meta:
  title: Platform | Ionic Platform to Customize Apps to Fit Any Device
  description: Ionic Platform service can be used to get information about your current device. With this information you can completely customize your app to fit any device.
---


# Platform

プラットフォームサービスは、現在のデバイスに関する情報を取得するために使用できます。`platforms` メソッドを利用することでデバイスに関連付けられているすべてのプラットフォームを取得できます。例えば、アプリがタブレットから表示されているかどうか（モバイルデバイスまたはブラウザ上にある場合）、および正確なプラットフォーム（iOS、Androidなど）などです。右から左への言語の向きなどを使用すれば、デバイスの向きもわかります。この情報を使用して、あらゆるデバイスに合わせてアプリを完全にカスタマイズできます。

## Usage

```typescript
import { Platform } from '@ionic/angular';

@Component({...})
export class MyPage {
  constructor(public platform: Platform) {

  }
}
```

## Methods

### `is(platformName: Platforms) => boolean`

ユーザーの利用しているプラットフォームに応じて、`is(platformName)` によってtrueまたはfalseが返されます。同じアプリが複数のプラットフォーム名に対してtrueを返す可能性があることに注意してください。たとえば、iPadから実行しているアプリは、これらのプラットフォーム名に対してtrueを返します：`mobile`, `ios`, `ipad`, and `tablet`。さらに、アプリがCordovaから実行されているのであれば、`cordova`に対してもtrueを返します。

#### Parameters

| Name                | Type                | Description                                                                                                                                  |
|---------------------|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| `platformName`      | `Platforms`         | Name of the platform. Available options are android, capacitor, cordova, desktop, electron, hybrid, ios, ipad, iphone, mobile, phablet, pwa, tablet |

#### Platforms

以下は、利用可能なすべての platform の値とそれに対応する説明をまとめた表です。

| Platform Name | Description                              |
| ------------- | -------------------------------------    |
| android       | a device running Android                 |
| capacitor     | a device running Capacitor               |
| cordova       | a device running Cordova                 |
| desktop       | a desktop device                         |
| electron      | a desktop device running Electron        |
| hybrid        | a device running Capacitor or Cordova    |
| ios           | a device running iOS                     |
| ipad          | an iPad device                           |
| iphone        | an iPhone device                         |
| mobile        | a mobile device                          |
| mobileweb     | a web browser running in a mobile device |
| phablet       | a phablet device                         |
| pwa           | a PWA app                                |
| tablet        | a tablet device                          |

### `platforms() => string[]`

利用しているデバイスによっては、 `platforms` は複数の値を返します。Each possible value is a hierarchy of platforms. 例えば、iPhoneを利用している場合は、`mobile`, `ios`, と `iphone`が返ってきます。

### `ready() => Promise<string>`

プラットフォームの準備が整い、ネイティブ機能を呼び出せるようになったときにPromiseを返します。アプリがWebブラウザ内から実行されている場合は、DOMの準備が整った時点でPromiseは解決されます。アプリがCordovaなどのアプリケーションエンジンから実行されている場合、Cordovaが `deviceready` イベントをトリガーした時点でPromiseは解決されます。解決された時に返ってくる値は `readySource` で、これは利用しているプラットフォームが利用できる状態になったことを示します。

たとえば、Cordovaの準備ができている場合、解決されるべき準備ソースは `cordova` です。デフォルトの準備ソースは `dom` になります。`readySource` は、異なるロジックをアプリが実行されているプラットフォームに応じて実行する必要がある場合に便利です。たとえば、status bar pluginを実行できるのはCapacitorとCordovaだけなので、Webではstatus bar pluginを実行しないでください。

### `isRTL() => boolean`

このアプリが右から左への言語の方向を使用しているかどうかを返します。アプリの `index.html` ファイルには、 `dir` に正しい属性値が設定されていることをお勧めします。`<html dir="ltr">` or `<html dir="rtl">`. [W3C: Structural markup and right-to-left text in HTML](http://www.w3.org/International/questions/qa-html-dir)

### `isLandscape() => boolean`

アプリが横向きである時に、 `true` を返します。

### `isPortrait() => boolean`

アプリがポートレートモードである時に、 `true` を返します。

### `width() => number`

`window.innerWidth` を使用してプラットフォームのビューポートの幅を取得します。

### `height() => number`

`window.innerHeight` を使用してプラットフォームのビューポートの高さを取得します

### `url() => string`

現在のURLを取得します。

### `testUserAgent(expression: string) => boolean`

ユーザエージェント文字列に含まれている時に `true`  を返します。

### Parameters
| Name       | Type   | Description                           |
|------------|--------|---------------------------------------|
| expression | string | The string to check in the user agent |

## Events

### `pause`

`pause` イベントは、ネイティブ・プラットフォームがアプリケーションをバックグラウンドに置いたとき、通常はユーザーが別のアプリケーションに切り替えたときに発生します。このイベントは、Cordova/Capacitorアプリケーションがバックグラウンドに置かれたときに発生しますが、標準的なWebブラウザでは発生しません。

#### Usage

```typescript
this.platform.pause.subscribe(async () => {
  alert('Pause event detected');
});
```

### `resize`

`resize` イベントは、ブラウザウィンドウの寸法が変更されたときに発生します。これは、ブラウザーウィンドウが物理的にサイズ変更されている場合や、デバイスの向きが変わっている場合に発生します。

#### Usage

```typescript
this.platform.resize.subscribe(async () => {
  alert('Resize event detected');
});
```

### `resume`

`resume` イベントは、ネイティブプラットフォームがバックグラウンドからアプリケーションを引き出したときに発生します。このイベントは、Cordova/Capacitorアプリがバックグラウンドから出てきても、標準的なWebブラウザで起動しない場合に発生します。

#### Usage

```typescript
this.platform.resume.subscribe(async () => {
  alert('Resume event detected');
});
```
