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

C'est facile de commencer.

> Retrouvez le code complet de l'application référencée dans ce guide [sur GitHub](https://github.com/ionic-team/photo-gallery-capacitor-vue).

## Télécharger les outils nécessaires

Téléchargez et installez-les dès maintenant pour garantir une expérience de développement Ionic optimale :

* **Node.js** pour interagir avec l'écosystème Ionic. [Téléchargez la version LTS ici](https://nodejs.org/en/).
* **Un éditeur de code** pour... écrire du code! Nous sommes fans de [Visual Studio Code](https://code.visualstudio.com/).
* **Interface/terminal en ligne de commande (CLI)**: 
 * **Utilisateurs de Windows** : pour une expérience Ionic optimale, nous recommandons la ligne de commande intégrée (cmd) ou la CLI Powershell, exécutée en mode Administrateur.
 * Pour les utilisateurs de **Mac/Linux**, pratiquement tous les terminaux fonctionneront.

## Installer les outils Ionic

Exécutez ce qui suit dans le terminal de ligne de commande pour installer le CLI Ionic (`ionic`), `native-run`, utilisé pour exécuter des binaires natifs sur des appareils et des simulateurs/émulateurs, et `cordova-res`, utilisé pour générer des icônes d'applications natives et des écrans d'accueil :

> Pour ouvrir un terminal dans Visual Studio Code, accédez à Terminal -> Nouveau Terminal.

```shell
$ npm install -g @ionic/cli@latest native-run cordova-res
```

> L'option `-g` signifie *installer globalement*. Lorsque des paquets sont installés globalement, des erreurs de permission `EACCES` peuvent se produire.
> 
> Pensez à configurer npm pour qu'il fonctionne globalement sans autorisations élevées. Voir [Résolution des erreurs de permission](/docs/developing/tips#resolving-permission-errors) pour plus d'informations.

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

### Les éléments d'une PWA

Certains plugins Capacitor, dont l'API caméra, fournissent la fonctionnalité et l'interface utilisateur web via la bibliothèque Ionic [PWA Elements](https://github.com/ionic-team/pwa-elements).

C'est une dépendance séparée, alors installez-la ensuite:

```shell
$ npm install @ionic/pwa-elements
```

Après l'installation, ouvrez le projet dans l'éditeur de code de votre choix.

Ensuite, importez `@ionic/pwa-elements` en éditant `src/main.ts`.

```typescript
// Au-dessus de la ligne createApp()
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// Appeler le chargeur d'éléments après l'amorçage de la plate-forme.
defineCustomElements(window);
```

C'est fait! Maintenant pour la partie amusante - voyons l'application en action.

## Démarrer l'application

Exécutez cette commande dans votre shell:

```shell
$ ionic serve
```

Et voilà ! Votre application Ionic est maintenant exécutée dans un navigateur Web. La majeure partie de votre application peut être construite et testée directement dans le navigateur, ce qui augmente considérablement la vitesse de développement et de test.

## Galerie de photos !!!

Il y a trois onglets. Cliquez sur l'onglet "Tab2". C'est une toile vierge, c'est-à-dire l'endroit parfait à transformer en galerie de photos. L'interface CLI de Ionic est dotée de la fonction Live Reload. Ainsi, lorsque vous apportez des modifications et les enregistrez, l'application est mise à jour immédiatement !

![Avant et après avoir suivi ce tutoriel](/docs/assets/img/guides/vue/first-app/live-reload.gif)

Ouvrez `/src/views/Tab2.vue`. Nous voyons :

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

`ion-header` représente la navigation supérieure et la barre d'outils, avec "Tab 2" comme titre. Renommons le :

```html
<ion-title>Photo Gallery</ion-title>
```

Nous mettons les aspects visuels de notre application dans `<ion-content>`. Dans ce cas, c'est là que nous ajouterons un bouton qui ouvre l'appareil photo de l'appareil et affiche l'image capturée par l'appareil. Mais d'abord, supprimez le composant `ExploreContainer`, en commençant par l'instruction import :

```typescript
import ExploreContainer from '@/components/ExploreContainer.vue';
```

Ensuite, supprimez le nom du composant (`ExploreContainer`) de la liste `composants` dans l'exportation par défaut et le HTML :

```html
<ExploreContainer name="Tab 2 page" />
```

Nous allons le remplacer par un [bouton d'action flottant](https://ionicframework.com/docs/api/fab) (FAB). Tout d'abord, mettez à jour les importations dans la balise `<script>` pour inclure l'icône de la caméra ainsi que certains des composants Ionic que nous utiliserons prochainement :

```typescript
import { camera, trash, close } from 'ionicons/icons';
import { IonPage, IonHeader, IonFab, IonFabButton, IonIcon, 
         IonToolbar, IonTitle, IonContent, IonGrid, IonRow, 
         IonCol, IonImg } from '@ionic/vue';
```

Ensuite, ajoutez les nouveaux composants Ionic que nous utiliserons à l'exportation par défaut ainsi que le retour des Ionicons dans la méthode `setup()` (faisant partie de [Composition API](https://v3.vuejs.org/api/composition-api.html#setup)) :

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

Ensuite, ajoutez le FAB au bas de la page. Utilisez l'image de la caméra comme icône, et appelez la fonction `takePhoto()` lorsque ce bouton est cliqué (pour être implémenté bientôt):

```html
<ion-content :fullscreen="true">
  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button @click="takePhoto()">
      <ion-icon :icon="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```

Nous allons créer la méthode `takePhoto` et la logique pour utiliser l'appareil photo et d'autres fonctionnalités natives dans un moment.

Ensuite, ouvrez `src/views/Tabs.vue` puis importez l'icône `images` :

```typescript
import { images, square, triangle } from 'ionicons/icons';
```

Dans la barre d'onglets (`<ion-tab-bar>`), changez le libellé en "Photos" et l'icône en `images` pour le bouton d'onglet du milieu :

```html
<ion-tab-button tab="tab2" href="/tabs/tab2">
  <ion-icon :icon="images" />
  <ion-label>Photos</ion-label>
</ion-tab-button>
```

Ce n'est que le début de toutes les choses cool que nous pouvons faire avec Ionic. Ensuite, il s'agira d'implémenter la fonctionnalité de prise de vue sur le web, puis de la développer pour iOS et Android.