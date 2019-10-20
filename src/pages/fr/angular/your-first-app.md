---
previousText: 'Vue d''ensemble'
previousUrl: '/docs/angular/overview'
nextText: 'iOS, Android, et la camera'
nextUrl: '/docs/angular/your-first-app/ios-android-camera'
---

# Votre première application Ionic: Angular

La meilleure chose à propos de Ionic est qu'avec une base de code, vous pouvez créer sur toutes les plateformes utilisant les outils et languages familier au web. Suivez-nous dans la création d'une Galerie Photo. Voici l'avant et l'après:

![Avant et après avoir suivi ce tutoriel](/docs/assets/img/guides/first-app-v3/gallery-combined.png)

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

> Le `-g` signifie *installer globalement*. Lorsque les paquets sont installés globalement, des erreurs de permission peuvent se produire. [Configurez npm](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) pour fonctionner globalement sans droits élevés. Exécuter l'invite de commande en tant qu'Administrateur (ou utiliser `sudo` sur Mac et Linux) avec npm n'est pas recommandé.

## Créer une application

Ensuite, créer une application Ionic Angular en utilisant notre modèle "Tabs":

```shell
$ ionic start photo-gallery tabs
```

Ce projet de départ est complété par trois pages pré-construites et les meilleures pratiques pour le développement de Ionic. Avec des blocs de construction communs déjà en place, nous pouvons ajouter plus de fonctionnalités facilement!

Ensuite, changeons dans le dossier de l'application:

```shell
$ cd photo-gallery
```

C'est fait! Maintenant la partie amusante - voyons l'application en action.

## Lancer l'application

Lancez la commande suivante:

```shell
ionic serve
```

Et voilà! Votre application Ionic est maintenant entrain de tourner sur le navigateur web. La plupart de votre application peut être construite directement dans le navigateur, ce qui augmente considérablement la vitesse de développement.

## Galerie Photo!!!

Il y a trois onglets. Cliquez sur l'onglet "Tab2". C'est un écran blanc, aka l'endroit parfait pour ajouter la fonctionnalité caméra. Commençons par transformer cette page en Galerie Photo. Ionic dispose de LiveReload, alors lorsque vous faites des changements et les sauvegardez, l'application s'actualise immédiatement!

![Avant et après avoir suivi ce tutoriel](/docs/assets/img/guides/first-app-v3/email-photogallery.gif)

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

Ensuite, ouvrez `src/app/tabs/tabs.page.html`. Changez le nom "Galerie" et le nom de l’icône pour "images":

```html
<ion-tab-button tab="tab2">
  <ion-icon name="images"></ion-icon>
  <ion-label>Gallery</ion-label>
</ion-tab-button>
```

Ce n'est que le début d'un tas de choses cool que nous pouvons faire avec Ionic. Ensuite, nous allons déployer l'application sur votre appareil iOS ou Android, alors continuons à construire notre galerie photo.

<div style="text-align:right;">
  <docs-button href="/docs/angular/your-first-app/ios-android-camera">Continuer <svg viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg></docs-button>
</div>
