---
previousText: 'Ajouter un mobile'
previousUrl: '/docs/vue/your-first-app/5-adding-mobile'
nextText: 'Développement rapide d''applications avec Live Reload'
nextUrl: '/docs/vue/your-first-app/7-live-reload'
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

Localisez la clé `NSCameraUsageDescription` (si elle devrait déjà exister si vous avez suivi ce tutoriel) et définissez la valeur sur quelque chose qui décrit pourquoi l'application doit utiliser l'appareil photo, par exemple " Pour prendre des photos ". Le champ Valeur est affiché à l'utilisateur de l'application lorsque l'invite d'autorisation s'ouvre.

Ensuite, cliquez sur `App` dans le navigateur du projet sur le côté gauche, puis dans la section `Signing & Capabilities`, sélectionnez votre équipe de développement.

![Xcode - Sélection de l'équipe de développement](/docs/assets/img/guides/first-app-cap-ng/xcode-signing.png)

Une fois les autorisations en place et l'équipe de développement sélectionnée, nous sommes prêts à essayer l'application sur un appareil réel ! Connectez un appareil iOS à votre ordinateur Mac, sélectionnez-le (`App -> Matthew's iPhone` pour moi) puis cliquez sur le bouton "Build" pour construire, installer et lancer l'application sur votre appareil :

![Bouton de construction Xcode](/docs/assets/img/guides/first-app-cap-ng/xcode-build-button.png)

Lorsque vous appuyez sur le bouton Appareil photo dans l'onglet Galerie de photos, l'invite d'autorisation s'affiche. Appuyez sur OK, puis prenez une photo avec la Caméra. Ensuite, la photo apparaît dans l'application!

![Autorisations de l'appareil photo dans iOS](/docs/assets/img/guides/first-app-cap-ng/ios-permissions-photo.png)

## Android

Les applications Android Capacitor sont configurées et gérées via Android Studio. Avant d'exécuter cette application sur un appareil Android, il y a quelques étapes à franchir.

Tout d'abord, exécutez la commande Capacitor `open`, qui ouvre le projet Android natif dans Android Studio :

```shell
$ ionic cap open android
```

Similaire à iOS, nous devons activer les autorisations appropriées pour utiliser la Caméra. Configurez-les dans le fichier `AndroidManifest.xml`. Android Studio ouvrira probablement ce fichier automatiquement, mais au cas où il ne le ferait pas, localisez-le sous `android/app/src/main/`.

![Emplacement du manifeste Android](/docs/assets/img/guides/first-app-cap-ng/android-manifest.png)


Faites défiler la section `Autorisations` et assurez-vous que ces entrées sont inclus:

```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

Enregistrez le fichier. Les autorisations étant en place, nous sommes prêts à essayer l'application sur un appareil réel ! Connectez un appareil Android à votre ordinateur. Dans Android Studio, cliquez sur le bouton "Run", sélectionnez le périphérique Android joint, puis cliquez sur OK pour construire, installer et lancer l'application sur votre périphérique.

![Lancement de l'application sur Android](/docs/assets/img/guides/first-app-cap-ng/android-device.png)

Une fois encore, lorsque vous appuyez sur le bouton Appareil photo dans l'onglet Galerie de photos, l'invite d'autorisation doit s'afficher. Appuyez sur OK, puis prenez une photo avec la Caméra. Ensuite, la photo devrait apparaître dans l'application.

![Autorisations pour les appareils photo Android](/docs/assets/img/guides/first-app-cap-ng/android-permissions-photo.png)

Notre application de galerie de photos vient d'être déployée sur les appareils Android et iOS. 🎉

Dans la dernière partie de ce tutoriel, nous utiliserons la fonctionnalité Live Reload de Ionic CLI pour mettre en œuvre rapidement la suppression des photos, complétant ainsi notre fonctionnalité de galerie de photos.
