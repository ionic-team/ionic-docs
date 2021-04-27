---
previousText: ''
previousUrl: ''
nextText: 'Android Play Store'
nextUrl: '/docs/deployment/play-store'
contributors:
  - zaarheed
---

# Déploiement de l'App Store iOS

## Pré-requis

La soumission d'une application à l'App Store d'iOS nécessite quelques éléments :

* Xcode
* Un compte payant pour les développeurs Apple
* Un profil d'approvisionnement valide
* Certificats de développement et de distribution d'applications

Pour vous inscrire à l'Apple Developer Program, suivez les instructions [listées ici](https://developer.apple.com/programs/).

## Génération d'un release build

Si la plateforme iOS n'est pas déjà ajoutée, assurez-vous de l'ajouter :

```shell
$ ionic cordova platform add ios
```

Avec la plateforme ajoutée, exécutez la commande build avec le drapeau `--prod` :

```shell
$ ionic cordova build ios --prod
```

Cette opération permet de générer le code minifié de la partie web d'une application et de le copier sur la base de code iOS.

À partir de là, ouvrez le fichier `.xcworkspace` dans `./platforms/ios/` pour lancer Xcode.

## Générer des certificats de signature

La génération de certificats pour iOS est un processus un peu complexe, alors assurez-vous de consulter [la documentation officielle d'Apple](https://help.apple.com/xcode/mac/current/#/dev3a05256b8) sur ce que sont les certificats et comment les générer.

Pour créer les certificats et les profils nécessaires, visitez [le centre des membres d'Apple](https://developer.apple.com/membercenter) et suivez les liens décrits dans la documentation d'Apple.

There are two types of certificates that matter here, Development, and Distribution. Development Certificates are just that, meant for development time. They are meant to sign an app and deploy it to devices that the certificate has access to.

Distribution certs are meant for distributing an app to the store. When an app is signed with a Distribution cert, it can be installed on any device.

## Signing the App in Xcode.

After generating the correct certificates, there are options to either have Xcode automatically manage certificates or manually manage them. It's suggested to let Xcode automatically manage certificates. This will make sure that the correct Development and Distribution certs are used, based on the build type selected.

With this option selected, select `Archive` from the `Product > Archive` menu. This will build a version of the app that is ready for distribution in the app stores. After archive has been created, Xcode Organizer is opened.

Xcode Organizer displays a list with builds of the current app. Pick the last build and click 'Upload to App Store'. There should be a place to select the team followed by some more information on the app and a "Upload" button to click.

If the upload successfully, the app should be listed on [iTunes Connect](https://itunesconnect.apple.com) and listed in 'Activities'. From there, TestFlight can be enabled for beta testing, or the App can be sent for approval from Apple.

## Updating an app

As an app grows, it will need to be updated with new features and fixes. An app can be updated by either submitting a new version to Apple, or by using a live update service like Appflow's <a href="https://ionic.io/docs/appflow/deploy/intro" target="_blank">live update feature</a>.

With <strong>Live Updates</strong>, app changes can be pushed in realtime directly to users from the Appflow dashboard, without waiting for App Store approvals.

> In order for the iOS App Store to accept the updated build, the config.xml file will need to be edited to increment the version value, then rebuild the app for release following the same instructions above.
