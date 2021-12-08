---
---

# Platform

## isPlatform

`isPlatform` メソッドを使用して、アプリが特定のプラットフォームで実行されているかどうかを確認できます:

```typescript
import { isPlatform } from '@ionic/vue';

isPlatform('ios'); // returns true when running on a iOS device
```

ユーザー実行しているプラットフォームに応じて、isPlatform（platformName）は true または false を返します。 同じアプリが複数のプラットフォーム名に対して true を返す場合があることに注意してください。 たとえば、iPadから実行するアプリは、mobile、ios、ipad、およびtabletのプラットフォーム名に対して true を返します。 さらに、アプリが Cordova から実行されている場合、cordovaもtrueになります。

## getPlatforms

`getPlatforms` メソッドを使用して、アプリが現在実行されているプラットフォームを判別できます。

```typescript
import { getPlatforms } from '@ionic/vue';

getPlatforms(); // returns ["iphone", "ios", "mobile", "mobileweb"] from an iPhone
```

使用しているデバイスに応じて、 `getPlatforms` は複数の値を返すことができます。 それぞれの値はプラットフォームに応じて配列で返却されます。たとえば、iPhoneでは、mobile、ios、およびiphoneが返されます。

## Platforms

次の表に、使用可能なすべてのプラットフォーム値とその説明を示します。

| Platform Name | Description                              |
|---------------|------------------------------------------|
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
