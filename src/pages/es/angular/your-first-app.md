---
previousText: 'Vista General'
previousUrl: '/docs/angular/overview'
nextText: 'iOS, Android, y la Cámara'
nextUrl: '/docs/angular/your-first-app/ios-android-camera'
---

# Tu primera App Ionic: Angular

Una de las mejores cosas de Ionic es que con una sola fuente de código, puedes desarrollar para cualquier plataforma, utilizando el lenguaje y herramientas web que ya conoces. Síguenos en este tutorial para crear una galería de fotos completamente funcional. Aquí está el antes y el después:

![Antes y después de seguir este tutorial](/docs/assets/img/guides/first-app-v3/gallery-combined.png)

Es fácil de empezar. Te recordamos que todo el código utilizado en esta guía lo puedes encontrar en [Github](https://github.com/ionic-team/photo-gallery-tutorial-ionic4/).

## Herramientas necesarias

Descarga e instala las siguientes herramientas para asegurar que tengas un ambiente óptimo para el desarrollo con Ionic:

* [Git](https://git-scm.com/downloads) para el control de versiones.
* Un **cliente de SSH**, como [Putty](https://www.putty.org/), para poder autenticarte de manera segura a Ionic Appflow.
* **Node.js** para interactuar con el ecosistema de Ionic. [Descarga la versión LTS (soporte a largo plazo) aquí](https://nodejs.org/en/).
* **Un editor de código** para... escribir código! Somos fans de [Visual Studio Code](https://code.visualstudio.com/).
* **Terminal de líneas de comando**: Usuarios **Windows**, para la mejor experiencia de Ionic, recomendamos la terminal de comandos incorporada (CMD) o PowerShell CLI, iniciados en modo Administrador. Usuarios **Mac/Linux**, prácticamente cualquier terminal funcionará.

## Instalar Ionic y Cordova

Ejecute las siguientes líneas en el terminal de comandos:

```shell
$ npm install -g ionic cordova
```

> La opción `-g` significa *instalar globalmente*. Cuando los paquetes se instalan globalmente, pueden ocurrir errores de permisos. Considera [configurar npm](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) para operar globalmente sin permisos elevados. Ejecutar la terminal de comandos como administrador (o usando `sudo` en Mac & Linux) con npm, no es recomendado.

## Crear una App

A continuación, crea una aplicación Ionic Angular usando nuestra plantilla "Tabs":

```shell
$ ionic start photo-gallery tabs
```

Este proyecto inicial se completa con tres páginas preconstruidas y las mejores prácticas para el desarrollo de Ionic. ¡Con los bloques de construcción comunes ya en su lugar, podemos agregar más funciones fácilmente!

A continuación, cambiar en la carpeta de la aplicación:

```shell
$ cd photo-gallery
```

¡Eso es! Ahora, para la parte divertida, veamos la aplicación en acción.

## Ejecute la aplicación

Ejecuta el siguiente comando:

```shell
ionic serve
```

¡Y voilà! Tu aplicación Ionic está ejecutando en un navegador web. La mayor parte de tus aplicación se puede construir directamente en el navegador, lo que aumenta considerablemente la velocidad de desarrollo.

## Galería de fotos!!!

Hay tres pestañas. Haz clic en la pestaña Tab2. Es un canvas en blanco, este es un punto perfecto para añadir funcionalidad e cámara. Empecemos a transformar esta página en una Galería de Fotos. Ionic posee características LiveReload, así que cuando se realizan cambios y se guardan, la aplicación se actualiza inmediatamente!

![Antes y después de seguir este tutorial](/docs/assets/img/guides/first-app-v3/email-photogallery.gif)

Abre la carpeta de la aplicación de galería de fotos en tu editor de código favorito, y luego navega a `/src/app/tab2/tab2.page.html`. Vemos:

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Tab Two</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding"></ion-content>
```

`ion-header` representa la barra de herramientas y la navegación superior, con "Tab 2" como título. Ponemos nuestro código de aplicación en `ion-content`. En este caso, es donde añadiremos un botón que abre la cámara del dispositivo y muestra la imagen capturada por la cámara. Pero primero, empecemos con algo obvio: renombrar la pestaña Tab Two:

```html
<ion-title>Galería de fotos</ion-title>
```

A continuación, abre `src/app/tabs/tabs.page.html`. Cambia la etiqueta a “Galería” y el nombre de icono a “images”:

```html
<ion-tab-button tab="tab2">
  <ion-icon name="images"></ion-icon>
  <ion-label>Galería</ion-label>
</ion-tab-button>
```

Es sólo el comienzo de todas las cosas geniales que podemos hacer con Ionic. A continuación, desplegaremos la aplicación a tu dispositivo iOS o Android, y luego continuaremos construyendo la galería de fotos.

<div style="text-align:right;">
  <docs-button href="/docs/angular/your-first-app/ios-android-camera">Continuar <svg viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg></docs-button>
</div>
