---
previousText: 'Vue d''ensemble'
previousUrl: '/docs/angular/overview'
nextText: 'Prendre des photos'
nextUrl: '/docs/angular/your-first-app/2-saving-photos'
---

# Votre première application Ionic: Angular

La grande chose à propos d'Ionic est qu'avec une base de code, vous pouvez construire pour n'importe quelle plate-forme en utilisant uniquement HTML, CSS et JavaScript. Suivez-nous pendant que nous apprenons les principes fondamentaux du développement d'applications ioniques en créant une application réaliste étape par étape.

Voici l'application terminée fonctionnant sur les 3 plates-formes: <iframe width="560" height="315" src="https://www.youtube.com/embed/0ASQ13Y1Rk4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe> 

> Vous recherchez la version précédente de ce guide qui couvrait Ionic 4 et Cordova ? [Voir ici.](/docs/developer-resources/guides/first-app-v4/intro)

## Ce que nous allons construire

Nous allons créer une application Galerie de photos qui offre la possibilité de prendre des photos avec l'appareil photo de votre appareil, de les afficher dans une grille et de les stocker en permanence sur l'appareil.

Les points saillants comprennent:

* Une base de code angulaire qui s'exécute sur le Web, iOS et Android à l'aide de Ionic Framework.
* Déployé en tant qu'application mobile native iOS et Android en utilisant [Capacitor](https://capacitor.ionicframework.com), le runtime d'application native officiel de Ionic.
* Fonctionnalité de galerie photo alimentée par les API Capacitor [Camera](https://capacitor.ionicframework.com/docs/apis/camera), [Filesystem](https://capacitor.ionicframework.com/docs/apis/filesystem) et [Storage](https://capacitor.ionicframework.com/docs/apis/storage).

C'est facile de commencer. Retrouvez le code complet de l'application référencée dans ce guide [sur GitHub](https://github.com/ionic-team/photo-gallery-capacitor-ng).

## Télécharger les outils nécessaires

Téléchargez et installez-les dès maintenant pour garantir une expérience de développement Ionic optimale :

* **Node.js** pour interagir avec l’écosystème Ionic. [Téléchargez la version LTS ici](https://nodejs.org/en/).
* **Un éditeur de code** pour... écrire du code! Nous sommes fans de [Visual Studio Code](https://code.visualstudio.com/).
* **Interface/terminal en ligne de commande (CLI)**: 
 * Les utilisateurs de **Windows** : pour une expérience Ionic optimale, nous recommandons la ligne de commande intégrée (cmd) ou la CLI Powershell, exécutée en mode Administrateur.
 * Pour les utilisateurs de **Mac/Linux**, pratiquement tous les terminaux fonctionneront.

## Installer l'outillage ionic

Exécutez ce qui suit dans le terminal de ligne de commande pour installer l'Ionic CLI (`ionic`), `native-run`, utilisé pour exécuter des binaires natifs sur les appareils et les simulateurs / émulateurs, et `cordova-res`, utilisé pour générer des icônes d'applications natives et des écrans de démarrage:

> Pour ouvrir un terminal dans Visual Studio Code, accédez à Terminal -> Nouveau Terminal.

```shell
$ npm install -g @ionic/cli native-run cordova-res
```

> L'option ` -g ` signifie * installer globalement *. Lorsque les packages sont installés globalement, des erreurs d'autorisation ` EACCES ` peuvent se produire.
> 
> Pensez à configurer npm pour qu'il fonctionne globalement sans autorisations élevées. Voir [Résolution des erreurs de permission](/docs/developing/tips#resolving-permission-errors) pour plus d'informations.

## Créer une application

Ensuite, créez une application Ionic Angular qui utilise le modèle de démarrage "Tabs" et ajoute Capacitor pour la fonctionnalité native :

```shell
$ ionic start photo-gallery tabs --type=angular --capacitor
```

Ce projet de démarrage est fourni avec trois pages pré-construites et les meilleures pratiques pour le développement Ionic. Avec des blocs de construction communs déjà en place, nous pouvons ajouter plus de fonctionnalités facilement!

Ensuite, allez dans le dossier de l'application :

```shell
$ cd photo-gallery
```

### PWA Elements

Some Capacitor plugins, including the Camera API, provide the web-based functionality and UI via the Ionic [PWA Elements library](https://github.com/ionic-team/ionic-pwa-elements).

It's a separate dependency, so install it next:

```shell
$ npm install @ionic/pwa-elements
```

Next, import `@ionic/pwa-elements` by editing `src/main.ts`.

```typescript
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);
```

That’s it! Now for the fun part - let’s see the app in action.

## Run the App

Run this command next:

```shell
$ ionic serve
```

And voilà! Your Ionic app is now running in a web browser. Most of your app can be built and tested right in the browser, greatly increasing development and testing speed.

## Photo Gallery!!!

There are three tabs. Click on the Tab2 tab. It’s a blank canvas, aka the perfect spot to transform into a Photo Gallery. The Ionic CLI features Live Reload, so when you make changes and save them, the app is updated immediately!

![Before and after going through this tutorial](/docs/assets/img/guides/first-app-cap-ng/email-photogallery.gif)

Open the photo-gallery app folder in your code editor of choice, then navigate to `/src/app/tab2/tab2.page.html`. We see:

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Tab 2</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Tab 2</ion-title>
    </ion-toolbar>
  </ion-header>
</ion-content>
```

`ion-header` represents the top navigation and toolbar, with "Tab 2" as the title (there are two of them due to iOS [Collapsible Large Title](https://ionicframework.com/docs/api/title#collapsible-large-titles) support). Rename both `ion-title` elements to:

```html
<ion-title>Photo Gallery</ion-title>
```

We put the visual aspects of our app into `<ion-content>`. In this case, it’s where we’ll add a button that opens the device’s camera as well as displays the image captured by the camera. Start by adding a [floating action button](https://ionicframework.com/docs/api/fab) (FAB) to the bottom of the page and set the camera image as the icon.

```html
<ion-content>
<ion-fab vertical="bottom" horizontal="center" slot="fixed">

    <ion-fab-button>
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```

Next, open `src/app/tabs/tabs.page.html`. Change the label to “Photos” and the icon name to “images”:

```html
<ion-tab-button tab="tab2">
  <ion-icon name="images"></ion-icon>
  <ion-label>Photos</ion-label>
</ion-tab-button>
```

Save all changes to see them automatically applied in the browser. That’s just the start of all the cool things we can do with Ionic. Up next, implement camera taking functionality on the web, then build it for iOS and Android.