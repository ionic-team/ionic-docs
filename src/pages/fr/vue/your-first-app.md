---
previousText: 'Vue d''ensemble'
previousUrl: '/docs/vue/overview'
nextText: 'Prendre des photos'
nextUrl: '/docs/vue/your-first-app/2-taking-photos'
---

# Votre première application Ionic : Vue

Ce qu'il y a de bien avec Ionic, c'est qu'avec une seule base de code, vous pouvez construire pour n'importe quelle plateforme en utilisant seulement HTML, CSS et JavaScript. Suivez-nous dans notre apprentissage des principes fondamentaux du développement d'applications Ionic en créant une application réaliste, étape par étape.

Voici l'application terminée fonctionnant sur les 3 plateformes : <iframe width="560" height="315" src="https://www.youtube.com/embed/0ASQ13Y1Rk4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe> 

## Ce que nous allons construire

Nous allons créer une application de galerie de photos qui offre la possibilité de prendre des photos avec l'appareil photo de votre appareil, de les afficher dans une grille et de les stocker de façon permanente sur l'appareil.

Les points forts sont les suivants :

* Une base de code basée sur Vue qui fonctionne sur le web, iOS et Android en utilisant Ionic Framework [composants UI](https://ionicframework.com/docs/components).
* Déployé en tant qu'application mobile native iOS et Android à l'aide de [Capacitor](https://capacitor.ionicframework.com), le runtime d'application native officiel de Ionic.
* Fonctionnalité de galerie photo alimentée par les API Capacitor [Camera](https://capacitor.ionicframework.com/docs/apis/camera), [Filesystem](https://capacitor.ionicframework.com/docs/apis/filesystem) et [Storage](https://capacitor.ionicframework.com/docs/apis/storage).

Find the complete app code referenced in this guide [on GitHub](https://github.com/ionic-team/photo-gallery-capacitor-vue).

## Télécharger les outils nécessaires

Téléchargez et installez-les dès maintenant pour garantir une expérience de développement Ionic optimale :

* **Node.js** pour interagir avec l'écosystème Ionic. [Téléchargez la version LTS ici](https://nodejs.org/en/).
* **Un éditeur de code** pour... écrire du code! Nous sommes fans de [Visual Studio Code](https://code.visualstudio.com/).
* **Interface/terminal en ligne de commande (CLI)**: 
 * **Utilisateurs de Windows** : pour une expérience Ionic optimale, nous recommandons la ligne de commande intégrée (cmd) ou la CLI Powershell, exécutée en mode Administrateur.
 * Pour les utilisateurs de **Mac/Linux**, pratiquement tous les terminaux fonctionneront.

## Installer les outils Ionic

Exécutez ce qui suit dans le terminal de ligne de commande pour installer le CLI Ionic (`ionic`), `native-run`, utilisé pour exécuter des binaires natifs sur des appareils et des simulateurs/émulateurs, et `cordova-res`, utilisé pour générer des icônes d'applications natives et des écrans d'accueil :

> To open a terminal in Visual Studio Code, go to Terminal -> New Terminal.

```shell
$ npm install -g @ionic/cli@latest native-run cordova-res
```

> The `-g` option means *install globally*. When packages are installed globally, `EACCES` permission errors can occur.
> 
> Consider setting up npm to operate globally without elevated permissions. See [Resolving Permission Errors](/docs/developing/tips#resolving-permission-errors) for more information.

## Créer une application

Ensuite, créez une application Ionic Vue qui utilise le modèle de démarrage "Tabs" et ajoute Capacitor pour la fonctionnalité native :

```shell
$ ionic start photo-gallery tabs --type vue --capacitor
```

Ce projet de démarrage est fourni avec trois pages pré-construites et les meilleures pratiques pour le développement Ionic. Avec des blocs de construction communs déjà en place, nous pouvons ajouter plus de fonctionnalités facilement!

Ensuite, allez dans le dossier de l'application :

```shell
$ cd photo-gallery
```

Next we'll need to install the necessary Capacitor plugins to make the app's native functionality work:

```shell
npm install @capacitor/camera @capacitor/storage @capacitor/filesystem
```

### Les éléments d'une PWA

Some Capacitor plugins, including the Camera API, provide the web-based functionality and UI via the Ionic [PWA Elements library](https://github.com/ionic-team/pwa-elements).

It's a separate dependency, so install it next:

```shell
$ npm install @ionic/pwa-elements
```

After installation, open up the project in your code editor of choice.

Next, import `@ionic/pwa-elements` by editing `src/main.ts`.

```typescript
// Above the createApp() line
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);
```

That’s it! Now for the fun part - let’s see the app in action.

## Démarrer l'application

Run this command in your shell:

```shell
$ ionic serve
```

And voilà! Your Ionic app is now running in a web browser. Most of your app can be built and tested right in the browser, greatly increasing development and testing speed.

## Galerie de photos !!!

There are three tabs. Click on the Tab2 tab. It’s a blank canvas, aka the perfect spot to transform into a Photo Gallery. The Ionic CLI features Live Reload, so when you make changes and save them, the app is updated immediately!

![Before and after going through this tutorial](/docs/assets/img/guides/vue/first-app/live-reload.gif)

Open `/src/views/Tab2.vue`. We see:

```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Tab 2 page" />
    </ion-content>
  </ion-page>
</template>
```

`ion-header` represents the top navigation and toolbar, with "Tab 2" as the title. Let’s rename it:

```html
<ion-title>Photo Gallery</ion-title>
```

We put the visual aspects of our app into `<ion-content>`. In this case, it’s where we’ll add a button that opens the device’s camera as well as displays the image captured by the camera. But first, remove the `ExploreContainer` component, beginning with the import statement:

```typescript
import ExploreContainer from '@/components/ExploreContainer.vue';
```

Next, remove the component name (`ExploreContainer`) from the `components` list in the Default Export and the HTML:

```html
<ExploreContainer name="Tab 2 page" />
```

We'll replace it with a [floating action button](https://ionicframework.com/docs/api/fab) (FAB). First, update the imports within the `<script>` tag to include the Camera icon as well as some of the Ionic components we'll use shortly:

```typescript
import { camera, trash, close } from 'ionicons/icons';
import { IonPage, IonHeader, IonFab, IonFabButton, IonIcon,
         IonToolbar, IonTitle, IonContent, IonGrid, IonRow,
         IonCol, IonImg } from '@ionic/vue';
```

Next, add the new Ionic components we'll be using to the default export as well as returning the Ionicons in the `setup()` method (part of the [Composition API](https://v3.vuejs.org/api/composition-api.html#setup)):

```typescript
export default  {
  name: 'Tab2',
  components: { IonPage, IonHeader, IonFab, IonFabButton, IonIcon,
         IonToolbar, IonTitle, IonContent, IonGrid, IonRow,
         IonCol, IonImg },
  setup() {
    return {
      camera, trash, close
    }
  }
}
```

Then, add the FAB to the bottom of the page. Use the camera image as the icon, and call the `takePhoto()` function when this button is clicked (to be implemented soon):

```html
<ion-content :fullscreen="true">
  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button @click="takePhoto()">
      <ion-icon :icon="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```

We’ll be creating the `takePhoto` method and the logic to use the Camera and other native features in a moment.

Next, open `src/views/Tabs.vue` then import the `images` icon:

```typescript
import { images, square, triangle } from 'ionicons/icons';
```

Within the tab bar (`<ion-tab-bar>`), change the label to "Photos" and the icon to `images` for the middle tab button:

```html
<ion-tab-button tab="tab2" href="/tabs/tab2">
  <ion-icon :icon="images" />
  <ion-label>Photos</ion-label>
</ion-tab-button>
```

That’s just the start of all the cool things we can do with Ionic. Up next, implementing camera taking functionality on the web, then building for iOS and Android.