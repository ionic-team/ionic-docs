---
title: Platform
---

<head>
  <title>Platform | Ionic Platform to Customize Apps to Fit Any Device</title>
  <meta
    name="description"
    content="Ionic Platform service can be used to get information about your current device. With this information you can completely customize your app to fit any device."
  />
</head>

プラットフォームサービスは、現在のデバイスに関する情報を取得するために使用できます。`platforms` メソッドを利用することでデバイスに関連付けられているすべてのプラットフォームを取得できます。例えば、アプリがタブレットから表示されているかどうか（モバイルデバイスまたはブラウザ上にある場合）、および正確なプラットフォーム（iOS、Androidなど）などです。右から左への言語の向きなどを使用すれば、デバイスの向きもわかります。この情報を使用して、あらゆるデバイスに合わせてアプリを完全にカスタマイズできます。

## Usage

```tsx
import { Platform } from '@ionic/angular';

@Component({...})
export class MyPage {
  constructor(public platform: Platform) {

  }
}
```

## Methods

### `is`

|                 |                                                                                                                                                                                                                                                                                                                                                                           |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Depending on the platform the user is on, `is(platformName)` will return true or false. Note that the same app can return true for more than one platform name. For example, an app running from an iPad would return true for the platform names: `mobile`, `ios`, `ipad`, and `tablet`. Additionally, if the app was running from Cordova then `cordova` would be true. |
| **Signature**   | `is(platformName: Platforms) => boolean`                                                                                                                                                                                                                                                                                                                                  |

#### Parameters

| Name           | Type        | Description                                                                                                                                         |
| -------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `platformName` | `Platforms` | Name of the platform. Available options are android, capacitor, cordova, desktop, electron, hybrid, ios, ipad, iphone, mobile, phablet, pwa, tablet |

#### Platforms

以下は、利用可能なすべての platform の値とそれに対応する説明をまとめた表です。

| Platform Name | Description                              |
| ------------- | ---------------------------------------- |
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

#### Customizing Platform Detection Functions

The function used to detect a specific platform can be overridden by providing an alternative function in the global [Ionic config](../developing/config). Each function takes `window` as a parameter and returns a boolean.

```tsx
import { IonicModule } from '@ionic/angular';

@NgModule({
  ...
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      platform: {
        /** The default `desktop` function returns false for devices with a touchscreen.
        * This is not always wanted, so this function tests the User Agent instead.
        **/
        'desktop': (win) => {
          const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(win.navigator.userAgent);
          return !isMobile;
        }
      },
    }),
    AppRoutingModule
  ],
  ...
})
```

```ts
type PlatformConfig = {
  android?: ((win: Window) => boolean) | undefined;
  capacitor?: ((win: Window) => boolean) | undefined;
  cordova?: ((win: Window) => boolean) | undefined;
  desktop?: ((win: Window) => boolean) | undefined;
  electron?: ((win: Window) => boolean) | undefined;
  hybrid?: ((win: Window) => boolean) | undefined;
  ios?: ((win: Window) => boolean) | undefined;
  ipad?: ((win: Window) => boolean) | undefined;
  iphone?: ((win: Window) => boolean) | undefined;
  mobile?: ((win: Window) => boolean) | undefined;
  mobileweb?: ((win: Window) => boolean) | undefined;
  phablet?: ((win: Window) => boolean) | undefined;
  pwa?: ((win: Window) => boolean) | undefined;
  tablet?: ((win: Window) => boolean) | undefined;
};
```

### `platforms`

|                 |                                                                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Depending on what device you are on, `platforms` can return multiple values. Each possible value is a hierarchy of platforms. For example, on an iPhone, it would return `mobile`, `ios`, and `iphone`. |
| **Signature**   | `platforms() => string[]`                                                                                                                                                                               |

### `ready`

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Returns a promise when the platform is ready and native functionality can be called. If the app is running from within a web browser, then the promise will resolve when the DOM is ready. When the app is running from an application engine such as Cordova, then the promise will resolve when Cordova triggers the `deviceready` event. The resolved value is the `readySource`, which states the platform that was used. <br /><br />For example, when Cordova is ready, the resolved ready source is `cordova`. The default ready source value will be `dom`. The `readySource` is useful if different logic should run depending on the platform the app is running from. For example, only Capacitor and Cordova can execute the status bar plugin, so the web should not run status bar plugin logic. |
| **Signature**   | `ready() => Promise<string>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### `isRTL`

|                 |                                                                                                                                                                                                                                                                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Returns if this app is using right-to-left language direction or not. We recommend the app's `index.html` file already has the correct `dir` attribute value set, such as `<html dir="ltr">` or `<html dir="rtl">`. [W3C: Structural markup and right-to-left text in HTML](http://www.w3.org/International/questions/qa-html-dir) |
| **Signature**   | `isRTL() => boolean`                                                                                                                                                                                                                                                                                                               |

### `isLandscape`

|                 |                                                 |
| --------------- | ----------------------------------------------- |
| **Description** | Returns `true` if the app is in landscape mode. |
| **Signature**   | `isLandscape() => boolean`                      |

### `isPortrait`

|                 |                                                |
| --------------- | ---------------------------------------------- |
| **Description** | Returns `true` if the app is in portrait mode. |
| **Signature**   | `isPortrait() => boolean`                      |

### `width`

|                 |                                                                      |
| --------------- | -------------------------------------------------------------------- |
| **Description** | Gets the width of the platform's viewport using `window.innerWidth`. |
| **Signature**   | `width() => number`                                                  |

### `height`

|                 |                                                                        |
| --------------- | ---------------------------------------------------------------------- |
| **Description** | Gets the height of the platform's viewport using `window.innerHeight`. |
| **Signature**   | `height() => number`                                                   |

### `url`

|                 |                      |
| --------------- | -------------------- |
| **Description** | Get the current url. |
| **Signature**   | `url() => string`    |

### `testUserAgent`

|                 |                                                                        |
| --------------- | ---------------------------------------------------------------------- |
| **Description** | Returns `true` if the expression is included in the user agent string. |
| **Signature**   | `testUserAgent(expression: string) => boolean`                         |

#### Parameters

| Name       | Type   | Description                           |
| ---------- | ------ | ------------------------------------- |
| expression | string | The string to check in the user agent |

## Events

### `pause`

`pause` イベントは、ネイティブ・プラットフォームがアプリケーションをバックグラウンドに置いたとき、通常はユーザーが別のアプリケーションに切り替えたときに発生します。このイベントは、Cordova/Capacitorアプリケーションがバックグラウンドに置かれたときに発生しますが、標準的なWebブラウザでは発生しません。

#### Examples

```tsx
this.platform.pause.subscribe(async () => {
  alert('Pause event detected');
});
```

### `resize`

`resize` イベントは、ブラウザウィンドウの寸法が変更されたときに発生します。これは、ブラウザーウィンドウが物理的にサイズ変更されている場合や、デバイスの向きが変わっている場合に発生します。

#### Examples

```tsx
this.platform.resize.subscribe(async () => {
  alert('Resize event detected');
});
```

### `resume`

`resume` イベントは、ネイティブプラットフォームがバックグラウンドからアプリケーションを引き出したときに発生します。このイベントは、Cordova/Capacitorアプリがバックグラウンドから出てきても、標準的なWebブラウザで起動しない場合に発生します。

#### Examples

```tsx
this.platform.resume.subscribe(async () => {
  alert('Resume event detected');
});
```
