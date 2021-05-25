---
previousText: "Ajouter un mobile"
previousUrl: "/docs/vue/your-first-app/5-adding-mobile"
nextText: "Développement rapide d'applications avec Live Reload"
nextUrl: "/docs/vue/your-first-app/7-live-reload"
---

# Déploiement sur iOS et Android

Depuis que nous avons ajouté Capacitor à notre projet lorsqu'il a été créé pour la première fois, il ne reste qu'une poignée d'étapes jusqu'à ce que l'application Photo Gallery soit sur notre appareil!

> N'oubliez pas que vous pouvez trouver le code source complet pour cette application [ici](https://github.com/ionic-team/photo-gallery-capacitor-vue).

## Configuration de Capacitor

Capacitor est le runtime d'application officiel de Ionic qui facilite le déploiement d'applications web sur des plateformes natives comme iOS, Android, etc. Si vous avez utilisé Cordova dans le passé, pensez à lire plus en détail les différences [ici](https://capacitor.ionicframework.com/docs/cordova#differences-between-capacitor-and-cordova).

Si vous êtes toujours en train de lancer `ionic serve` dans le terminal, annulez-le. Effectuez une nouvelle construction du projet Ionic, en corrigeant toutes les erreurs qu'il signale :

```shell
$ ionic build
```

Ensuite, créez les projets iOS et Android :

```shell
$ ionic cap add ios
$ ionic cap add android
```

Les dossiers android et ios à la racine du projet sont créés. Il s'agit de projets natifs entièrement autonomes qui doivent être considérés comme faisant partie de votre application Ionic (c'est-à-dire que vous devez les enregistrer dans le contrôle de la source, les éditer en utilisant leurs outils natifs, etc.).

Chaque fois que vous effectuez une construction (par exemple `ionic build`) qui met à jour votre répertoire web (par défaut : `build`), vous devrez copier ces changements dans vos projets natifs :

```shell
$ ionic cap copy
```

Remarque : après avoir effectué des mises à jour de la partie native du code (comme l'ajout d'un nouveau plugin), utilisez la commande `sync` :

```shell
$ ionic cap sync
```

## iOS

> Pour construire une application iOS, vous aurez besoin d'un ordinateur Mac.

Les applications iOS de Capacitor sont configurées et gérées par Xcode (l'IDE iOS/Mac d'Apple), les dépendances étant gérées par CocoaPods. Avant d'exécuter cette application sur un appareil iOS, il y a quelques étapes à franchir.

Tout d'abord, exécutez la commande Capacitor `open`, qui ouvre le projet iOS natif dans Xcode :

```shell
$ ionic cap open ios
```

Pour que certains plugins natifs fonctionnent, les autorisations d'utilisateur doivent être configurées. Dans notre application de galerie photo, cela inclut le plugin Appareil photo : iOS affiche automatiquement une boîte de dialogue modale après le premier appel de `Camera.getPhoto()`, invitant l'utilisateur à autoriser l'application à utiliser l'Appareil photo. L'autorisation qui permet cela est intitulée "Confidentialité - Utilisation de la caméra". Pour le définir, il faut modifier le fichier `Info.plist` ([plus de détails ici](https://capacitor.ionicframework.com/docs/ios/configuration)). Pour y accéder, cliquez sur "Info", puis développez "Propriétés de la cible iOS personnalisée".

![Propriétés de la cible iOS personnalisée dans Xcode](/docs/assets/img/guides/first-app-cap-ng/xcode-info-plist.png)

Chaque paramètre dans `Info.plist` a un nom de paramètre de bas niveau et un nom de haut niveau. Par défaut, l'éditeur de liste de propriétés affiche les noms de haut niveau, mais il est souvent utile de passer à l'affichage des noms bruts de bas niveau. Pour ce faire, cliquez avec le bouton droit de la souris n'importe où dans l'éditeur de liste de propriétés et basculez sur "Raw Keys/Values".

Add the `NSCameraUsageDescription` Key and set the Value to something that describes why the app needs to use the camera, such as "To Take Photos." Le champ Valeur est affiché à l'utilisateur de l'application lorsque l'invite d'autorisation s'ouvre.

Follow the same process to add the other two Keys required of the Camera plugin: `NSPhotoLibraryAddUsageDescription` and `NSPhotoLibraryUsageDescription`.

Next, click on `App` in the Project Navigator on the left-hand side, then within the `Signing & Capabilities` section, select your Development Team.

![Xcode - Selecting Development Team](/docs/assets/img/guides/first-app-cap-ng/xcode-signing.png)

With permissions in place and Development Team selected, we are ready to try out the app on a real device! Connect an iOS device to your Mac computer, select it (`App -> Matthew’s iPhone` for me) then click the "Build" button to build, install, and launch the app on your device:

![Xcode build button](/docs/assets/img/guides/first-app-cap-ng/xcode-build-button.png)

Upon tapping the Camera button on the Photo Gallery tab, the permission prompt will display. Tap OK, then take a picture with the Camera. Afterward, the photo shows in the app!

![iOS Camera permissions](/docs/assets/img/guides/first-app-cap-ng/ios-permissions-photo.png)

## Android

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
