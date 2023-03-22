# Platform

## isPlatform

`isPlatform` メソッドを使用して、アプリが特定のプラットフォームで実行されているかどうかを確認できます:

```tsx
import { isPlatform } from '@ionic/vue';

isPlatform('ios'); // returns true when running on a iOS device
```

ユーザー実行しているプラットフォームに応じて、isPlatform（platformName）は true または false を返します。 同じアプリが複数のプラットフォーム名に対して true を返す場合があることに注意してください。 たとえば、iPadから実行するアプリは、mobile、ios、ipad、およびtabletのプラットフォーム名に対して true を返します。 さらに、アプリが Cordova から実行されている場合、cordovaもtrueになります。

## getPlatforms

`getPlatforms` メソッドを使用して、アプリが現在実行されているプラットフォームを判別できます。

```tsx
import { getPlatforms } from '@ionic/vue';

getPlatforms(); // returns ["iphone", "ios", "mobile", "mobileweb"] from an iPhone
```

使用しているデバイスに応じて、 `getPlatforms` は複数の値を返すことができます。 それぞれの値はプラットフォームに応じて配列で返却されます。たとえば、iPhoneでは、mobile、ios、およびiphoneが返されます。

## Platforms

次の表に、使用可能なすべてのプラットフォーム値とその説明を示します。

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

## Customizing Platform Detection Functions

The function used to detect a specific platform can be overridden by providing an alternative function in the global [Ionic config](../developing/config). Each function takes `window` as a parameter and returns a boolean.

```tsx
createApp(App).use(IonicVue, {
  platform: {
    /** The default `desktop` function returns false for devices with a touchscreen.
     * This is not always wanted, so this function tests the User Agent instead.
     **/
    desktop: (win) => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(win.navigator.userAgent);
      return !isMobile;
    },
  },
});
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

```

```
