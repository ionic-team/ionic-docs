---
previousText: "Ajout de mobile"
previousUrl: "/docs/angular/your-first-app/5-adding-mobile"
nextText: "Développement rapide d'applications avec Live Reload"
nextUrl: "/docs/angular/your-first-app/7-live-reload"
---

# Déploiement sur iOS et Android

Depuis que nous avons ajouté Capacitor à notre projet lorsqu'il a été créé pour la première fois, il ne reste qu'une poignée d'étapes jusqu'à ce que l'application Photo Gallery soit sur notre appareil! N'oubliez pas que vous pouvez trouver le code source complet pour cette application [ici](https://github.com/ionic-team/photo-gallery-capacitor-ng).

## Changement de mode

Capacitor est le runtime officiel de l'application Ionic qui facilite le déploiement d'applications web sur des plates-formes natives comme iOS, Android, et plus encore. Si vous avez utilisé Cordova dans le passé, pensez à en savoir plus sur les différences [ici](https://capacitor.ionicframework.com/docs/cordova#differences-between-capacitor-and-cordova).

Si vous utilisez toujours `ionic serve` dans le terminal, annulez-le. Complétez une nouvelle version de votre projet Ionic en corrigeant les erreurs rapportées :

```shell
$ ionic build
```

Ensuite, créez les projets iOS et Android :

```shell
$ ionic cap add ios
$ ionic cap add android
```

Les dossiers android et ios à la racine du projet sont créés. Ce sont des projets natifs entièrement autonomes qui devraient être considérés comme faisant partie de votre application Ionic (i. ., les vérifier dans le contrôle source, les éditer en utilisant leur outillage natif, etc.).

Chaque fois que vous effectuez une compilation (par ex. `Version ionic`) qui met à jour votre répertoire web (par défaut: `www`), vous devrez copier ces modifications dans vos projets natifs :

```shell
$ ionic cap copy
```

Note : Après avoir fait des mises à jour de la partie native du code (comme l'ajout d'un nouveau plugin), utilisez la commande `sync`:

```shell
$ ionic cap sync
```

## déploiement iOS

> Pour construire une application iOS, vous aurez besoin d'un ordinateur Mac.

Les applications iOS de Capacitor sont configurées et gérées par Xcode (l'IDE iOS/Mac d'Apple), les dépendances étant gérées par [CocoaPods](https://cocoapods.org/). Avant d'exécuter cette application sur un appareil iOS, il y a quelques étapes à accomplir.

Tout d'abord, exécutez la commande Capacitor `open` , qui ouvre le projet natif iOS en Xcode :

```shell
$ ionic cap open ios
```

Pour que certains plugins natifs puissent fonctionner, les permissions de l'utilisateur doivent être configurées. Dans notre application de galerie de photos, cela inclut le plugin Camera : iOS affiche automatiquement une boîte de dialogue modale après la première fois que `Caméra. etPhoto()` est appelée, invitant l'utilisateur à autoriser l'application à utiliser la caméra. La permission que les lecteurs sont marqués « Confidentialité - Utilisation de la caméra ». Pour le définir, les infos `. liste` le fichier doit être modifié ([plus de détails ici](https://capacitor.ionicframework.com/docs/ios/configuration)). Pour y accéder, cliquez sur « Infos », puis développez « Propriétés de la cible iOS »

![Propriétés de la cible iOS personnalisée dans Xcode](/docs/assets/img/guides/first-app-cap-ng/xcode-info-plist.png)

Chaque paramètre dans `Info.plist` a un nom de paramètre de bas niveau et un nom de haut niveau. Par défaut, l'éditeur de liste de propriétés affiche les noms de haut niveau, mais il est souvent utile de changer pour montrer les noms bruts de bas niveau. Pour cela, faites un clic droit n'importe où dans l'éditeur de liste de propriétés et activez/désactivez "Clés brutes/Valeurs"

Add the `NSCameraUsageDescription` Key and set the Value to something that describes why the app needs to use the camera, such as "To Take Photos." The Value field is displayed to the app user when the permission prompt opens.

Follow the same process to add the other two Keys required of the Camera plugin: `NSPhotoLibraryAddUsageDescription` and `NSPhotoLibraryUsageDescription`.

Next, click on `App` in the Project Navigator on the left-hand side, then within the `Signing & Capabilities` section, select your Development Team.

![Xcode - Selecting Development Team](/docs/assets/img/guides/first-app-cap-ng/xcode-signing.png)

With permissions in place and Development Team selected, we are ready to try out the app on a real device! Connect an iOS device to your Mac computer, select it (`App -> Matthew’s iPhone` for me) then click the "Build" button to build, install, and launch the app on your device:

![Xcode build button](/docs/assets/img/guides/first-app-cap-ng/xcode-build-button.png)

Upon tapping the Camera button on the Photo Gallery tab, the permission prompt will display. Tap OK, then take a picture with the Camera. Afterward, the photo shows in the app!

![iOS Camera permissions](/docs/assets/img/guides/first-app-cap-ng/ios-permissions-photo.png)

## Développement sur Android

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
