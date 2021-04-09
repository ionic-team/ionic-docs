---
nextText: 'iOS, Android, et la camera'
nextUrl: '/docs/developer-resources/guides/first-app-v4/ios-android-camera'
---

# Votre première application Ionic: Angular

Ce qu'il y a de bien avec Ionic, c'est qu'avec une seule base de code, vous pouvez construire pour n'importe quelle plateforme en utilisant des outils et des langages web familiers. Suivez-nous dans la création d'une Galerie Photo. Voici l'avant et l'après:

![Before and after going through this tutorial](/docs/assets/img/guides/first-app-v3/gallery-combined.png)

C'est facile de commencer. Notez que tout le code référencé dans ce guide peut être [trouvé sur GitHub](https://github.com/ionic-team/photo-gallery-tutorial-ionic4/).

## Outils requis
Téléchargez/installez-les dès maintenant pour garantir une expérience de développement Ionic optimale :
* [Git](https://git-scm.com/downloads) pour le contrôle de version.
* <strong>Client SSH</strong>, comme [PuTTy](https://www.putty.org/), pour une connexion sécurisée à l'Appflow Ionic.
* <strong>Node.js</strong> pour interagir avec l'écosystème Ionic. [Téléchargez la version LTS ici](https://nodejs.org/en/).
* <strong>Un éditeur de code</strong> pour... écrire du code! Nous sommes fans de [Visual Studio Code](https://code.visualstudio.com/).
* <strong>Un terminal de ligne de commande (CLI)</strong>: Utilisateurs de <strong>Windows</strong>, pour une meilleure expérience Ionic, nous vous recommandons le terminal pré-installé (cmd) ou Powershell, lancés en mode Administrateur. Pour les utilisateurs de <strong>Mac/Linux</strong>, pratiquement tous les terminaux fonctionneront.

## Installer Ionic et Cordova
Lancez la commande suivante:

```shell
$ npm install -g @ionic/cli cordova
```

> Le `-g` signifie _installer globalement_. Lorsque les packages sont installés globalement, des erreurs d'autorisation ` EACCES ` peuvent se produire.
> 
> Envisagez de configurer npm pour qu'il fonctionne globalement sans autorisations élevées. Voir [Resolving Permission Errors](/docs/developing/tips#resolving-permission-errors) pour plus d'informations.

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

That’s it! Now for the fun part - let’s see the app in action.

## Run the App
Run this command next:

```shell
ionic serve
```

And voilà! Your Ionic app is now running in a web browser. Most of your app can be built right in the browser, greatly increasing development speed.

## Photo Gallery!!!
There are three tabs. Click on the Tab2 tab. It’s a blank canvas, aka the perfect spot to add camera functionality. Let’s begin to transform this page into a Photo Gallery. Ionic features LiveReload, so when you make changes and save them, the app is updated immediately!

![Before and after going through this tutorial](/docs/assets/img/guides/first-app-v3/email-photogallery.gif)

Open the photo-gallery app folder in your favorite code editor of choice, then navigate to `/src/app/tab2/tab2.page.html`. We see:

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Tab Two</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding"></ion-content>
```

`ion-header` represents the top navigation and toolbar, with "Tab 2" as the title. We put our app code into `ion-content`. In this case, it’s where we’ll add a button that opens the device’s camera and shows the image captured by the camera. But first, let’s start with something obvious: renaming the Tab Two page:

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
