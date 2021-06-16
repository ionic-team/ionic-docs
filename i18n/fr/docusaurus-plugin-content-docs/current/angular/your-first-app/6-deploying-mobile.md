---
previousText: 'Adding Mobile'
previousUrl: '/docs/angular/your-first-app/5-adding-mobile'
nextText: 'Rapid App Dev with Live Reload'
nextUrl: '/docs/angular/your-first-app/7-live-reload'
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

Capacitor iOS apps are configured and managed through Xcode (Apple’s iOS/Mac IDE), with dependencies managed by [CocoaPods](https://cocoapods.org/). Avant d'exécuter cette application sur un appareil iOS, il y a quelques étapes à accomplir.

Tout d'abord, exécutez la commande Capacitor `open` , qui ouvre le projet natif iOS en Xcode :

```shell
$ ionic cap open ios
```

Pour que certains plugins natifs puissent fonctionner, les permissions de l'utilisateur doivent être configurées. Dans notre application de galerie de photos, cela inclut le plugin Camera : iOS affiche automatiquement une boîte de dialogue modale après la première fois que `Caméra. etPhoto()` est appelée, invitant l'utilisateur à autoriser l'application à utiliser la caméra. La permission que les lecteurs sont marqués « Confidentialité - Utilisation de la caméra ». Pour le définir, les infos `. liste` le fichier doit être modifié ([plus de détails ici](https://capacitor.ionicframework.com/docs/ios/configuration)). Pour y accéder, cliquez sur « Infos », puis développez « Propriétés de la cible iOS »

![Xcode Custom iOS Target Properties](/docs/assets/img/guides/first-app-cap-ng/xcode-info-plist.png)


Chaque paramètre dans `Info.plist` a un nom de paramètre de bas niveau et un nom de haut niveau. Par défaut, l'éditeur de liste de propriétés affiche les noms de haut niveau, mais il est souvent utile de changer pour montrer les noms bruts de bas niveau. Pour cela, faites un clic droit n'importe où dans l'éditeur de liste de propriétés et activez/désactivez "Clés brutes/Valeurs"

Localisez la clé `NSCameraUsageDescription` (elle devrait exister déjà si vous avez suivi ce tutoriel) et définissez la valeur à quelque chose qui décrit pourquoi l'application a besoin d'utiliser la caméra, comme « Prendre des photos ». Le champ Valeur est affiché à l'utilisateur de l'application lorsque l'invite d'autorisation s'ouvre.

Ensuite, cliquez sur `App` dans le navigateur de projet sur le côté gauche, puis dans la section `Signature & Capacités` , sélectionnez votre équipe de développement.

![Xcode - Selecting Development Team](/docs/assets/img/guides/first-app-cap-ng/xcode-signing.png)

Avec les autorisations en place et l'équipe de développement sélectionnée, nous sommes prêts à essayer l'application sur un appareil réel ! Connectez un appareil iOS à votre ordinateur Mac, sélectionnez-le (`App -> iPhone de Matthew` pour moi) puis cliquez sur le bouton « Bâtir » pour construire, installez et lancez l'application sur votre appareil:

![Xcode build button](/docs/assets/img/guides/first-app-cap-ng/xcode-build-button.png)

En appuyant sur le bouton Appareil photo de l’onglet Galerie de photos, l’invite d’autorisation s’affiche. Appuyez sur OK, puis prenez une photo avec la Caméra. Ensuite, la photo apparaît dans l'application!

![iOS Camera permissions](/docs/assets/img/guides/first-app-cap-ng/ios-permissions-photo.png)

## Développement sur Android

Les applications Android Capacitor sont configurées et gérées via Android Studio. Avant d'exécuter cette application sur un appareil iOS, il y a quelques étapes à accomplir.

Tout d'abord, exécutez la commande Capacitor `open` , qui ouvre le projet natif iOS en Xcode :

```shell
$ ionic cap open android
```

Similaire à iOS, nous devons activer les autorisations appropriées pour utiliser la Caméra. Configurez-les dans le fichier `AndroidManifest.xml`. Android Studio ouvrira probablement ce fichier automatiquement, mais dans le cas contraire, localisez-le sous `android/app/src/main/`.

![Android Manifest location](/docs/assets/img/guides/first-app-cap-ng/android-manifest.png)

Faites défiler la section `Autorisations` et assurez-vous que ces entrées sont inclus:

```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

Save the file. Avec les autorisations en place et l'équipe de développement sélectionnée, nous sommes prêts à essayer l'application sur un appareil réel ! Connectez un appareil Android à votre ordinateur. Dans Android Studio, cliquez sur le bouton « Exécuter », sélectionnez l'appareil Android attaché, puis cliquez sur OK pour construire, installer et lancer l'application sur votre appareil.

![Launching app on Android](/docs/assets/img/guides/first-app-cap-ng/android-device.png)

En appuyant sur le bouton Appareil photo de l’onglet Galerie de photos, l’invite d’autorisation s’affiche. Appuyez sur OK, puis prenez une photo avec la Caméra. Ensuite, la photo apparaît dans l'application.

![Android Camera permissions](/docs/assets/img/guides/first-app-cap-ng/android-permissions-photo.png)

Notre application Photo Gallery vient d'être déployée sur les appareils Android et iOS. 🎉

Dans la dernière partie de ce tutoriel, Nous utiliserons la fonctionnalité Live Reload de la CLI pour implémenter rapidement la suppression de photos - complétant ainsi notre fonction Galerie de photos.