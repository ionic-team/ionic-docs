---
previousText: 'iOS App Store'
previousUrl: 'docs/publishing/app-store'
nextText: 'Progressive Web App (PWA)'
nextUrl: '/docs/deployment/progressive-web-app'
---

# Déploiement du Play Store Android


## Génération d'une version d'une application

Pour générer un build de version pour Android, exécutez la commande cli suivante :

```shell
$ ionic cordova build android --prod --release
```

Cela va générer un build de version basé sur les paramètres du `config.xml` dans le répertoire `plates-formes/android/app/build/outputs/apk` d'une app. Une application Ionic aura des valeurs par défaut prédéfinies dans ce fichier, mais elles peuvent être modifiées pour personnaliser les constructions.

## Signature d'un APK

D'abord, l'APK non signé doit être signé. Si une clé de signature a déjà été générée, sautez ces étapes et utilisez celle-ci à la place. Générez une clé privée à l'aide de la commande keytool fournie avec le SDK Android :

```shell
$ keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
```

Une fois que cette commande a été exécutée et que l'on a répondu à ses invites, un fichier appelé `my-release-key.keystore` sera créé dans le répertoire courant.

> AVERTISSEMENT : Enregistrez ce fichier et gardez-le dans un endroit sûr. S'il est perdu, le Google Play Store n'acceptera pas les mises à jour pour cette application !

Pour signer l'APK non signé, exécutez l'outil jarsigner qui est également inclus dans le SDK Android :

```shell
$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore HelloWorld-release-unsigned.apk alias_name
```

Enfin, l’outil d’alignement zip doit être exécuté pour optimiser l’APK. L'outil `zipalign` se trouve dans `/path/to/Android/sdk/build-tools/VERSION/zipalign`. Par exemple, sur macOS avec Android Studio installé, `zipalign` se trouve dans `~/Library/Android/sdk/build-tools/VERSION/zipalign` :

```shell
$ zipalign -v 4 HelloWorld-release-unsigned.apk HelloWorld.apk
```

Cela génère un binaire de version finale appelé HelloWorld.apk qui peut être accepté dans le Google Play Store.

## Soumettre une application sur le Google Play Store

Maintenant qu'une version APK a été générée, une liste Play Store peut être écrite et l'APK peut être téléchargée.

Pour commencer, visitez la [console de développement Google Play](https://play.google.com/apps/publish) et créez un nouveau compte développeur.

> Créer un compte développeur avec Google Play coûte $25 USD.

Une fois qu'un compte de développeur a été créé, allez-y et cliquez sur le `Créer une application`

![Créer un bouton d'application](/docs/assets/img/publishing/newAppGPlay.png)

Assurez-vous de remplir la description de l'application, en fournissant des captures d'écran et des informations supplémentaires. Une fois prêt, téléchargez l'APK de la version signée qui a été générée et publiez l'application.


## Mise à jour d'une application

À mesure qu'une application évolue, elle doit être mise à jour avec de nouvelles fonctionnalités et des corrections. Une application peut être mise à jour soit en soumettant une nouvelle version au Google Play Store, soit en utilisant un service de mise à jour en direct tel que la fonction Live Update d'Appflow. Grâce aux mises à jour en direct, les changements peuvent être directement transmis aux utilisateurs à partir du tableau de bord Appflow, sans avoir à les soumettre au Play Store. En savoir plus sur les mises à jour en direct <a href="https://ionic.io/docs/appflow/deploy/intro" target="_blank">ici</a>.

> Pour que le Google Play Store accepte les APK mis à jour, le fichier config.xml devra être modifié pour incrémenter la valeur de la version, puis reconstruire l'application en suivant les instructions ci-dessus.
