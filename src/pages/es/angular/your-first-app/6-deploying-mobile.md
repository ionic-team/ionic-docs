---
previousText: 'Adding Mobile'
previousUrl: '/docs/angular/your-first-app/5-adding-mobile'
nextText: 'Rapid App Dev with Live Reload'
nextUrl: '/docs/angular/your-first-app/7-live-reload'
---

# Desplegando a iOS y Android

Desde que añadimos el Capacitador a nuestro proyecto cuando fue creado por primera vez, solo quedan unos cuantos pasos hasta que la aplicación Galería de Fotos esté en nuestro dispositivo! Recuerda, puedes encontrar el código fuente completo para esta aplicación [aquí](https://github.com/ionic-team/photo-gallery-capacitor-ng).

## Configuración Capacitador

Capacitor es el tiempo de ejecución oficial de la aplicación de Ionic, que facilita el despliegue de aplicaciones web en plataformas nativas como iOS, Android y más. Si has usado Cordova en el pasado, considera leer más sobre las diferencias [aquí](https://capacitor.ionicframework.com/docs/cordova#differences-between-capacitor-and-cordova).

Si todavía estás ejecutando `ionic serve` en el terminal, páralo. Completa una nueva construcción de tu proyecto Ionic, corrigiendo cualquier error que informe:

```shell
<code> $ionic build </code>
```

</code>

A continuación, crear tanto los proyectos iOS como Android:

```shell
<code>
$ ionic cap add ios
$ ionic cap add android
</code>
```

</code>

Se crean carpetas android y iOS en la raíz del proyecto. Estos son proyectos nativos totalmente independientes que deben ser considerados parte de tu aplicación Ionic (Ej. compruébalos en el control de fuente, edítalos usando su herramienta nativa, etc.).

Cada vez que realizas una compilación (p. ej. `build ionic`) que actualiza su directorio web (por defecto: `www`), necesitarás copiar esos cambios en tus proyectos nativos:

```shell
$ ionic cap copy
```

Nota: Después de actualizar la parte nativa del código (como añadir un nuevo plugin), utilice el comando `sync`:

```shell
$ ionic cap sync
```

## Desarrollo iOS

> Para construir una aplicación iOS, necesitarás una computadora Mac.

Las aplicaciones iOS de Capacitor están configuradas y gestionadas a través de Xcode (iOS/Mac IDE), con dependencias administradas por CocoaPods. Antes de ejecutar esta aplicación en un dispositivo iOS, hay un par de pasos para completar.

Primero, ejecuta el comando Capacitor `open` , que abre el proyecto nativo de iOS en Xcode:

```shell
$ ionic cap open ios
```

Para que algunos plugins nativos funcionen, los permisos de usuario deben ser configurados. En nuestra aplicación de galería de fotos, esto incluye el complemento de cámara: iOS muestra un diálogo modal automáticamente después de la primera vez que `Camera.getPhoto()` es llamado, sugiriendo al usuario que permita a la aplicación usar la cámara. El permiso que hace esto está etiquetado como "Privacidad - Uso de la cámara". Para configurarlo, el `Info.plist` archivo debe ser modificado ([más detalles aquí](https://capacitor.ionicframework.com/docs/ios/configuration)). Para acceder a ella, haz clic en "Info," luego expande "Propiedades objetivo personalizadas de iOS."

![Xcode Custom iOS Target Properties](/docs/assets/img/guides/first-app-cap-ng/xcode-info-plist.png)


Cada ajuste en `Info.plist` tiene un nombre de parámetro de nivel bajo y un nombre de alto nivel. Por defecto, el editor de la lista de propiedades muestra los nombres de alto nivel, pero a menudo es útil cambiar a mostrar los nombres crudos y de bajo nivel. To do this, right-click anywhere in the property list editor and toggle "Raw Keys/Values."

Locate the `NSCameraUsageDescription` Key (it should exist already if you followed along with this tutorial) and set the Value to something that describes why the app needs to use the camera, such as "To Take Photos." The Value field is displayed to the app user when the permission prompt opens.

Next, click on `App` in the Project Navigator on the left-hand side, then within the `Signing & Capabilities` section, select your Development Team.

![Xcode - Selecting Development Team](/docs/assets/img/guides/first-app-cap-ng/xcode-signing.png)

With permissions in place and Development Team selected, we are ready to try out the app on a real device! Connect an iOS device to your Mac computer, select it (`App -> Matthew’s iPhone` for me) then click the "Build" button to build, install, and launch the app on your device:

![Xcode build button](/docs/assets/img/guides/first-app-cap-ng/xcode-build-button.png)

Upon tapping the Camera button on the Photo Gallery tab, the permission prompt will display. Tap OK, then take a picture with the Camera. Afterward, the photo shows in the app!

![iOS Camera permissions](/docs/assets/img/guides/first-app-cap-ng/ios-permissions-photo.png)

## Android Deployment

Capacitor Android apps are configured and managed through Android Studio. Before running this app on an Android device, there's a couple of steps to complete.

First, run the Capacitor `open` command, which opens the native Android project in Android Studio:

```shell
$ ionic cap open android
```

Similar to iOS, we must enable the correct permissions to use the Camera. Configure these in the `AndroidManifest.xml` file. Android Studio will likely open this file automatically, but in case it doesn't, locate it under `android/app/src/main/`.

![Android Manifest location](/docs/assets/img/guides/first-app-cap-ng/android-manifest.png)

Scroll to the `Permissions` section and ensure these entries are included:

```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

Save the file. With permissions in place, we are ready to try out the app on a real device! Connect an Android device to your computer. Within Android Studio, click the "Run" button, select the attached Android device, then click OK to build, install, and launch the app on your device.

![Launching app on Android](/docs/assets/img/guides/first-app-cap-ng/android-device.png)

Once again, upon tapping the Camera button on the Photo Gallery tab, the permission prompt should be displayed. Tap OK, then take a picture with the Camera. Afterward, the photo should appear in the app.

![Android Camera permissions](/docs/assets/img/guides/first-app-cap-ng/android-permissions-photo.png)

Our Photo Gallery app has just been deployed to Android and iOS devices. 🎉

In the final portion of this tutorial, we’ll use the Ionic CLI’s Live Reload functionality to quickly implement photo deletion - thus completing our Photo Gallery feature.