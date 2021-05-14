---
previousText: 'Despliegue en Android Play Store'
previousUrl: 'docs/publishing/app-store'
nextText: 'Progressive Web App (PWA)'
nextUrl: '/docs/deployment/progressive-web-app'
---

# Despliegue en Android Play Store


## Generando la Aplicacion en version de Lanzamiento

Para generar una compilación de lanzamiento para Android, ejecute el siguiente comando cli:

```shell
$ ionic cordova build android --prod --release
```

Esto generará una versión de compilación basada en la configuración del config.xml en el directorio de la aplicacion:  plataform/android/app/build /outputs /apk. Una aplicación de Ionic tendrá valores predeterminados y preestablecidos en este archivo, pero esto se puede cambiar para personalizar las compilaciones.

## Firmando un APK

First, the unsigned APK must be signed. If a signing key has already been generated, skip these steps and use that one instead. Generate a private key using the keytool command that comes with the Android SDK:

```shell
$ keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
```

Once that command has been ran and its prompts have been answered a file called `my-release-key.keystore` will be created in the current directory.

> WARNING: Save this file and keep it somewhere safe. If it is lost the Google Play Store will not accept updates for this app!

To sign the unsigned APK, run the jarsigner tool which is also included in the Android SDK:

```shell
$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore HelloWorld-release-unsigned.apk alias_name
```

Finally, the zip align tool must be ran to optimize the APK. The `zipalign` tool can be found in `/path/to/Android/sdk/build-tools/VERSION/zipalign`. For example, on macOS with Android Studio installed, `zipalign` is in `~/Library/Android/sdk/build-tools/VERSION/zipalign`:

```shell
$ zipalign -v 4 HelloWorld-release-unsigned.apk HelloWorld.apk
```

This generates a final release binary called HelloWorld.apk that can be accepted into the Google Play Store.

## Enviando una aplicación a Google Play Store

Now that a release APK has been generated, a Play Store listing can be written and the APK can be uploaded.

To start, visit the [Google Play Store Developer Console](https://play.google.com/apps/publish) and create a new developer account.

> Making a developer account with Google Play costs $25 USD.

Once a developer account has been created, go ahead and click the `Create an Application`

![Create an App button](/docs/assets/img/publishing/newAppGPlay.png)

Be sure to fill out the description for the app along with providing screenshots and additional info. When ready, upload the signed release APK that was generated and publish the app.


## Updating an app

As an app evolves, it will need to be updated with new features and fixes. An app can be updated by either submitting a new version to the Google Play Store, or by using a live update service like Appflow's Live Update feature. Using Live Updates, changes can be pushed directly to users from the Appflow dashboard, without submitting changes to the Play Store. Learn more about Live Updates <a href="https://ionic.io/docs/appflow/deploy/intro" target="_blank">here</a>.

> Para que Google Play Store acepte el APK actualizado, será necesario editar el archivo config.xml para incrementar el valor de la versión y luego reconstruir la aplicación para su lanzamiento siguiendo las instrucciones anteriores.
