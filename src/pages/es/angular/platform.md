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

Devuelve una promesa cuando la plataforma está lista y la funcionalidad nativa puede ser llamada. Si la aplicación se está ejecutando desde un navegador web, la promesa se resolverá cuando el DOM esté listo. Cuando la aplicación se está ejecutando desde un motor de aplicación como Cordova, entonces la promesa se resolverá cuando Cordova active el evento `deviceready`. El valor resuelto es el `readySource`, que indica la plataforma que fue usada.

Por ejemplo, cuando Cordova está listo, la fuente resuelta es `cordova`. El valor predeterminado de origen será `dom`. El `readySource` es útil si se debe ejecutar una lógica diferente dependiendo de la plataforma desde la que se esté ejecutando la aplicación. Por ejemplo, sólo el Capacitor y Cordova pueden ejecutar el plugin de barra de estado, por lo que la web no debe ejecutar la lógica del plugin de la barra de estado.

### `isRTL() => boolean`

Devuelve si esta aplicación está usando la dirección de idioma derecha a izquierda o no. Recomendamos que el archivo de aplicación `index.html` ya tenga el valor correcto `dir` del atributo establecido tales como `<html dir="ltr">` o `<html dir="rtl">`. [W3C: Marco estructural y texto derecha a izquierda en HTML](http://www.w3.org/International/questions/qa-html-dir)

### `isLandscape() => boolean`

Devuelve `true` si la aplicación está en modo horizontal.

### `isPortrait() => boolean`

Devuelve `true` si la aplicación está en modo retrato.

### `width() => number`

Obtiene el ancho de la vista de la plataforma usando `window.innerWidth`.

### `height() => number`

Obtiene la altura de la vista de la plataforma usando `window.innerHeight`.

### `url() => string`

Obtiene la dirección url actual.

### `testUserAgent(expression: string) => boolean`

Devuelve `true` si la expresión está incluida en la cadena del agente de usuario.

### Parámetros
| Nombre     | Tipo   | Descripción                                   |
| ---------- | ------ | --------------------------------------------- |
| expression | string | La cadena para comprobar el agente de usuario |

## Eventos

### `pause`

El evento `pause` se desencadena cuando la plataforma nativa pone la aplicación en el fondo, normalmente cuando el usuario cambia a otra aplicación. Este evento se emite cuando una aplicación Cordova/Capacitor se pone en segundo plano pero no se dispara en un navegador web estándar.

#### Uso

```typescript
this.platform.pause.subscribe(async () => {
  alert('Evento de pausa detectada');
});
```

### `resize`

El evento `resize` se emite cuando la ventana del navegador ha cambiado de dimensión. Esto podría ser desde una ventana del navegador siendo físicamente redimensionada, o desde un dispositivo cambiando de orientación.

#### Uso

```typescript
this.platform.resize.subscribe(async () => {
  alert('Evento de redimensión detectado');
});
```

### `resume`

El evento `resume` se dispara cuando la plataforma nativa trae la aplicación al frente. Este evento se emite cuando una aplicación Cordova/Capacitor sale del fondo pero no se dispara en un navegador web estándar.

#### Uso

```typescript
this.platform.resume.subscribe(async () => {
  alert('Evento de reanudación detectado');
});
```
