---
previousText: 'Vue d''ensemble'
previousUrl: '/docs/angular/overview'
nextText: 'iOS, Android, et la camera'
nextUrl: '/docs/angular/your-first-app/ios-android-camera'
---

# Votre première application Ionic: Angular

The great thing about Ionic is that with one codebase, you can build for any platform using familiar web tools and languages. Follow along as we create a working Photo Gallery. Here’s the before and after:

![Before and after going through this tutorial](/docs/assets/img/guides/first-app-v3/gallery-combined.png)

C'est facile de commencer. Notez que tous les codes référencés dans ce guide sont [ retrouvables sur GitHub](https://github.com/ionic-team/photo-gallery-tutorial-ionic4/).

## Outils requis

Téléchargez/Installez-les immédiatement afin d'assurer une expérience de développement sur Ionic optimale:

* [Git](https://git-scm.com/downloads) for version control.
* **Client SSH**, comme [PuTTy](https://www.putty.org/), pour une connexion sécurisée à l'Appflow Ionic.
* **Node.js** pour interagir avec l’écosystème Ionic. [Téléchargez la version LTS ici](https://nodejs.org/en/).
* **Un éditeur de code** pour... écrire du code! Nous sommes fans de [Visual Studio Code](https://code.visualstudio.com/).
* **Un terminal de ligne de commande (CLI)**: Utilisateurs de **Windows**, pour une meilleure expérience Ionic, nous vous recommandons le terminal pré-installé (cmd) ou Powershell, lancés en mode Administrateur. Pour les utilisateurs de **Mac/Linux**, pratiquement tous les terminaux fonctionneront.

## Installer Ionic et Cordova

Lancez la commande suivante:

```shell
$ npm install -g ionic cordova
```

> Le `-g` signifie *installer globalement*. When packages are installed globally, permission errors can occur. Consider [setting up npm](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) to operate globally without elevated permissions. Running the command prompt as an Admin (or using `sudo` on Mac & Linux) with npm is not recommended.

## Créer une application

Ensuite, créer une application Ionic Angular en utilisant notre modèle "Tabs":

```shell
$ ionic start photo-gallery tabs
```

This starter project comes complete with three pre-built pages and best practices for Ionic development. With common building blocks already in place, we can add more features easily!

Next, change into the app folder:

```shell
$ cd photo-gallery
```

C'est fait! Maintenant la partie amusante - voyons l'application en action.

## Lancer l'application

Lancez la commande suivante:

```shell
ionic serve
```

Et voilà! Votre application Ionic est maintenant entrain de tourner sur le navigateur web. Most of your app can be built right in the browser, greatly increasing development speed.

## Galerie Photo!!!

Il y a trois onglets. Cliquez sur l'onglet "Tab2". C'est un écran blanc, aka l'endroit parfait pour ajouter la fonctionnalité caméra. Commençons par transformer cette page en Galerie Photo. Ionic dispose de LiveReload, alors lorsque vous faites des changements et les sauvegardez, l'application s'actualise immédiatement!

![Before and after going through this tutorial](/docs/assets/img/guides/first-app-v3/email-photogallery.gif)

Ouvrez le dossier de l'application galerie photo dans votre éditeur de code favori, puis naviguer dans `/src/app/tab2/tab2.page.html`. Nous verrons:

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Tab Two</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding"></ion-content>
```

`ion-header` représente le haut de la navigation et la barre d'outils, avec "Tab2" comme titre. Nous ajoutons à notre code de l'application dans `ion-content`. Dans ce cas, c'est là que nous ajouterons un bouton qui ouvre l'appareil photo de l'appareil et montre l'image capturée par l'appareil. Mais premièrement, commençons avec quelque chose d'évident: renommer la page de l'onglet 2:

```html
<ion-title>Photo Gallery</ion-title>
```

Next, open `src/app/tabs/tabs.page.html`. Change the label to “Gallery” and the icon name to “images”:

```html
<ion-tab-button tab="tab2">
  <ion-icon name="images"></ion-icon>
  <ion-label>Gallery</ion-label>
</ion-tab-button>
```

That’s just the start of all the cool things we can do with Ionic. Up next, we’ll deploy the app to your iOS or Android device, then continue building the photo gallery.

<div style="text-align:right;">
  <docs-button href="/docs/angular/your-first-app/ios-android-camera">Continue <svg viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg></docs-button>
</div>
