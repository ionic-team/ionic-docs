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

### Les éléments d'une PWA

Certains plugins Capacitor, dont l'API caméra, fournissent la fonctionnalité et l'interface utilisateur web via la bibliothèque Ionic [PWA Elements](https://github.com/ionic-team/ionic-pwa-elements).

C'est une dépendance séparée, donc installez-la ensuite :

```shell
$ npm install @ionic/pwa-elements
```

Ensuite, importez `@ionic/pwa-elements` en éditant `src/main.ts`.

```typescript
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// Appeler le chargeur d'éléments après l'amorçage de la plateforme defineCustomElements(window) ;
```

C'est fait! Maintenant pour la partie amusante - voyons l'application en action.

## Démarrer l'application

Exécutez cette commande ensuite :

```shell
$ ionic serve
```

Et voilà ! Votre application Ionic est maintenant exécutée dans un navigateur Web. La majeure partie de votre application peut être construite et testée directement dans le navigateur, ce qui augmente considérablement la vitesse de développement et de test.

## Galerie Photo!!!

Il y a trois onglets. Cliquez sur l'onglet "Tab2". C'est une toile vierge, c'est-à-dire l'endroit parfait à transformer en galerie de photos. L'interface CLI de Ionic est dotée de la fonction Live Reload. Ainsi, lorsque vous apportez des modifications et les enregistrez, l'application est mise à jour immédiatement !

![Avant et après avoir suivi ce tutoriel](/docs/assets/img/guides/first-app-cap-ng/email-photogallery.gif)

Ouvrez le dossier de l'application photo-gallery dans l'éditeur de code de votre choix, puis naviguez jusqu'à `/src/app/tab2/tab2.page.html`. Nous voyons :

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

`ion-header` représente la navigation supérieure et la barre d'outils, avec "Tab 2" comme titre (il y en a deux en raison du support iOS [Collapsible Large Title](https://ionicframework.com/docs/api/title#collapsible-large-titles)). Renommer les deux éléments `ion-title` en :

```html
<ion-title>Photo Gallery</ion-title>
```

Nous mettons les aspects visuels de notre application dans `<ion-content>`. Dans ce cas, c'est là que nous ajouterons un bouton qui ouvre l'appareil photo de l'appareil et affiche l'image capturée par l'appareil. Commencez par ajouter un [bouton d'action flottant](https://ionicframework.com/docs/api/fab) (FAB) au bas de la page et définissez l'image de la caméra comme icône.

```html
<ion-content>
<ion-fab vertical="bottom" horizontal="center" slot="fixed">

    <ion-fab-button>
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```

Ensuite, ouvrez `src/app/tabs/tabs.page.html`. Changez l'étiquette en "Photos" et le nom de l'icône en "images" :

```html
<ion-tab-button tab="tab2">
  <ion-icon name="images"></ion-icon>
  <ion-label>Photos</ion-label>
</ion-tab-button>
```

Enregistrez toutes les modifications pour qu'elles soient automatiquement appliquées dans le navigateur. Ce n'est que le début de toutes les choses cool que nous pouvons faire avec Ionic. Ensuite, il s'agit d'implémenter la fonctionnalité de prise de vue sur le web, puis de la développer pour iOS et Android.