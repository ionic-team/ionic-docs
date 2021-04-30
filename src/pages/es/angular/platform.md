---
previousText: 'Configuración'
previousUrl: '/docs/angular/config'
nextText: 'Testeo'
nextUrl: '/docs/angular/testing'
contributors:
  - liamdebeasi
meta:
  title: Plataform | Ionic Plataform para personalizar aplicaciones para adaptarse a cualquier dispositivo
  description: El servicio Plataform de Ionic puede utilizarse para obtener información acerca de su dispositivo actual. Con esta información puede personalizar completamente su aplicación para que se ajuste a cualquier dispositivo.
---


# Platform

El servicio Platform se puede utilizar para obtener información acerca de tu dispositivo actual. Puedes obtener todas las plataformas asociadas al dispositivo usando el método `platforms`, incluyendo si la aplicación está siendo vista desde una tableta, si está en un dispositivo móvil o navegador, y la plataforma exacta (iOS, Android, etc). También puede obtener la orientación del dispositivo, si utiliza la dirección del idioma de derecha a izquierda y mucho más. Con esta información puede personalizar completamente su aplicación para que se ajuste a cualquier dispositivo.

## Uso

```typescript
import { Platform } from '@ionic/angular';

@Component({...})
export class MiPagina {
  constructor(public platform: Platform) {

  }
}
```

## Métodos

### `is(platformName: Platforms) => boolean`

Dependiendo de la plataforma en la que esté el usuario, `is(platformName)` devolverá verdadero o falso. Tenga en cuenta que la misma aplicación puede devolver verdadero por más de un nombre de plataforma. Por ejemplo, una aplicación que se ejecuta desde un iPad devolvería verdadero para los nombres de la plataforma: `móvil`, `ios`, `ipad` y `tablet`. Además, si la aplicación se estuviera ejecutando desde Cordova entonces `cordova` sería verdadero.

#### Parámetros

| Nombre         | Tipo        | Descripción                                                                                                                                                          |
| -------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `platformName` | `Platforms` | Es el nombre de la plataforma. Las opciones disponibles son: android, capacitor, cordova, desktop, electron, hybrid, ios, ipad, iphone, mobile, phablet, pwa, tablet |

#### Platafomas

Debajo hay una tabla que muestra todos los valores posibles de plataforma junto con las descripciones correspondientes.

| Nombre de la plataforma | Descripción                                           |
| ----------------------- | ----------------------------------------------------- |
| android                 | un dispositivo corriendo Android                      |
| capacitor               | un dispositivo corriendo Capacitor                    |
| cordova                 | un dispositivo corriendo Cordova                      |
| desktop                 | un dispositivo de escritorio                          |
| electron                | un dispositivo de escritorio corriendo Electron       |
| hybrid                  | un dispositivo corriendo Capacitor o Cordova          |
| ios                     | un dispositivo corriendo iOS                          |
| ipad                    | un dispositivo iPad                                   |
| iphone                  | un dispositivo iPhone                                 |
| mobile                  | un dispositivo móvil                                  |
| mobileweb               | un navegador web ejecutándose en un dispositivo móvil |
| phablet                 | un dispositivo phablet                                |
| pwa                     | una aplicación PWA                                    |
| tablet                  | un dispositivo tablet                                 |

### `platforms() => string[]`

Dependiendo del dispositivo en que estés, `platforms` puede devolver varios valores. Cada valor posible es una jerarquía de plataformas. Por ejemplo, en un iPhone, devolvería `móvil`, `ios` y `iphone`.

### `ready() => Promise<string>`

Devuelve una promesa cuando la plataforma está lista y la funcionalidad nativa puede ser llamada. Si la aplicación se está ejecutando desde un navegador web, la promesa se resolverá cuando el DOM esté listo. When the app is running from an application engine such as Cordova, then the promise will resolve when Cordova triggers the `deviceready` event. The resolved value is the `readySource`, which states the platform that was used.

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
