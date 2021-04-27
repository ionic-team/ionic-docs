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

Il y a deux types de certificats qui comptent ici, le développement et la distribution. Les certificats de développement ne sont que cela, ils sont destinés à la période de développement. Ils sont destinés à signer une application et à la déployer sur les appareils auxquels le certificat a accès.

Les certificats de distribution sont destinés à la distribution d'une application dans le magasin. Lorsqu'une application est signée avec un certificat de distribution, elle peut être installée sur n'importe quel appareil.

## Signature de l'application dans Xcode.

Après avoir généré les bons certificats, il y a des options pour que Xcode gère automatiquement les certificats ou les gère manuellement. Il est suggéré de laisser Xcode gérer automatiquement les certificats. Cela permettra de s'assurer que les bons certificats de développement et de distribution sont utilisés, en fonction du type de construction sélectionné.

Avec cette option sélectionnée, choisissez `Archive` dans le menu `Produit > Archive`. Cela permettra de créer une version de l'application prête à être distribuée dans les magasins d'applications. Après que l'archive ait été créée, Xcode Organizer est ouvert.

Xcode Organizer affiche une liste avec les builds de l'application actuelle. Choisissez la dernière version et cliquez sur "Upload to App Store". Il devrait y avoir un endroit pour sélectionner l'équipe, suivi de quelques informations supplémentaires sur l'application et d'un bouton "Télécharger" à cliquer.

Si le téléchargement a réussi, l'application devrait être répertoriée sur [iTunes Connect](https://itunesconnect.apple.com) et répertoriée dans 'Activités'. À partir de là, TestFlight peut être activé pour les tests bêta, ou l'application peut être envoyée pour approbation par Apple.

## Mise à jour d'une application

À mesure qu'une application se développe, elle doit être mise à jour avec de nouvelles fonctionnalités et des corrections. Une application peut être mise à jour soit en soumettant une nouvelle version à Apple, soit en utilisant un service de mise à jour en direct comme la fonctionnalité de mise à jour en direct d'Appflow <a href="https://ionic.io/docs/appflow/deploy/intro" target="_blank">mise à jour en direct</a>.

Avec <strong>Live Updates</strong>, les modifications des applications peuvent être poussées en temps réel directement vers les utilisateurs depuis le tableau de bord Appflow, sans attendre les approbations de l'App Store.

> Pour que l'App Store d'iOS accepte la version mise à jour, le fichier config.xml devra être modifié pour incrémenter la valeur de la version, puis reconstruire l'application en suivant les mêmes instructions que ci-dessus.
