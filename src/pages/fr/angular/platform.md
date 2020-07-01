---
previousText: 'Configuration'
previousUrl: '/fr/docs/angular/config'
nextText: 'Test'
nextUrl: '/fr/docs/angular/testing'
contributors:
  - liamdebeasi
---


# Plateforme

The Platform service can be used to get information about your current device. You can get all of the platforms associated with the device using the `platforms` method, including whether the app is being viewed from a tablet, if it's on a mobile device or browser, and the exact platform (iOS, Android, etc). You can also get the orientation of the device, if it uses right-to-left language direction, and much much more. With this information you can completely customize your app to fit any device.

## Utilisation

```typescript
import { Platform } from '@ionic/angular';

@Component({...})
export class MyPage {
  constructor(public platform: Platform) {

  }
}
```

## Méthodes

### `is(platformName: Platforms) => boolean`

Depending on the platform the user is on, `is(platformName)` will return true or false. Note that the same app can return true for more than one platform name. For example, an app running from an iPad would return true for the platform names: `mobile`, `ios`, `ipad`, and `tablet`. Additionally, if the app was running from Cordova then `cordova` would be true.

#### Parameters

| Nom            | Type        | Description                                                                                                                                                  |
| -------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `platformName` | `Platforms` | Nom de la plateforme. Les options disponibles sont : android, capacitor, cordova, desktop, electron, hybrid, ios, ipad, iphone, mobile, phablet, pwa, tablet |

#### Platformes

Vous trouverez ci-dessous une liste de toutes les valeurs possibles pour la plateforme ainsi que les descriptions correspondantes.

| Nom de la plateforme | Description                                  |
| -------------------- | -------------------------------------------- |
| android              | un appareil fonctionnant sous Android        |
| capacitor            | un appareil exécutant Capacitor              |
| cordova              | un appareil exécutant Cordova                |
| desktop              | un appareil de bureau                        |
| electron             | un périphérique de bureau exécutant Electron |
| hybrid               | a device running Capacitor or Cordova        |
| ios                  | a device running iOS                         |
| ipad                 | an iPad device                               |
| iphone               | an iPhone device                             |
| mobile               | a mobile device                              |
| mobileweb            | a web browser running in a mobile device     |
| phablet              | a phablet device                             |
| pwa                  | a PWA app                                    |
| tablet               | a tablet device                              |

### `platforms() => string[]`

Depending on what device you are on, `platforms` can return multiple values. Each possible value is a hierarchy of platforms. For example, on an iPhone, it would return `mobile`, `ios`, and `iphone`.

### `ready() => Promise<string>`

Returns a promise when the platform is ready and native functionality can be called. If the app is running from within a web browser, then the promise will resolve when the DOM is ready. When the app is running from an application engine such as Cordova, then the promise will resolve when Cordova triggers the `deviceready` event. The resolved value is the `readySource`, which states the platform that was used.

For example, when Cordova is ready, the resolved ready source is `cordova`. The default ready source value will be `dom`. The `readySource` is useful if different logic should run depending on the platform the app is running from. For example, only Capacitor and Cordova can execute the status bar plugin, so the web should not run status bar plugin logic.

### `isRTL() => boolean`

Returns if this app is using right-to-left language direction or not. We recommend the app's `index.html` file already has the correct `dir` attribute value set, such as `<html dir="ltr">` or `<html dir="rtl">`. [W3C: Structural markup and right-to-left text in HTML](http://www.w3.org/International/questions/qa-html-dir)

### `isLandscape() => boolean`

Returns `true` if the app is in landscape mode.

### `isPortrait() => boolean`

Returns `true` if the app is in portrait mode.

### `width() => number`

Gets the width of the platform's viewport using `window.innerWidth`.

### `height() => number`

Gets the height of the platform's viewport using `window.innerHeight`.

### `url() => string`

Get the current url.

### `testUserAgent(expression: string) => boolean`

Returns `true` if the expression is included in the user agent string.

### Parameters
| Name       | Type   | Description                           |
| ---------- | ------ | ------------------------------------- |
| expression | string | The string to check in the user agent |

## Events

### `pause`

The `pause` event emits when the native platform puts the application into the background, typically when the user switches to a different application. This event emits when a Cordova/Capacitor app is put into the background but doesn't fire in a standard web browser.

#### Usage

```typescript
this.platform.pause.subscribe(async () => {
  alert('Pause event detected');
});
```

### `resize`

The `resize` event emits when the browser window has changed dimensions. This could be from a browser window being physically resized, or from a device changing orientation.

#### Usage

```typescript
this.platform.resize.subscribe(async () => {
  alert('Resize event detected');
});
```

### `resume`

The `resume` event fires when the native platform pulls the application out from the background. This event emits when a Cordova/Capacitor app comes out from the background but doesn't fire in a standard web browser.

#### Usage

```typescript
this.platform.resume.subscribe(async () => {
  alert('Resume event detected');
});
```
