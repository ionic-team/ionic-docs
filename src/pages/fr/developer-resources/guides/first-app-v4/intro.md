---
nextText: 'iOS, Android, et la camera'
nextUrl: '/docs/developer-resources/guides/first-app-v4/ios-android-camera'
---

# Votre première application Ionic: Angular

Ce qu'il y a de bien avec Ionic, c'est qu'avec une seule base de code, vous pouvez construire pour n'importe quelle plateforme en utilisant des outils et des langages web familiers. Suivez-nous dans la création d'une Galerie Photo. Voici l'avant et l'après:

![Avant et après avoir suivi ce tutoriel](/docs/assets/img/guides/first-app-v3/gallery-combined.png)

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

Ce projet de démarrage est fourni avec trois pages pré-construites et les meilleures pratiques pour le développement Ionic. Avec des blocs de construction communs déjà en place, nous pouvons ajouter plus de fonctionnalités facilement!

Ensuite, allez dans le dossier de l'application :

```shell
$ cd photo-gallery
```

C'est fait! Maintenant pour la partie amusante - voyons l'application en action.

## Lancer l'application
Exécutez ensuite cette commande :

```shell
ionic serve
```

Et voilà ! Votre application Ionic est maintenant exécutée dans un navigateur Web. La majeure partie de votre application peut être construite directement dans le navigateur, ce qui augmente considérablement la vitesse de développement.

## Galerie Photo!!!
Il y a trois onglets. Cliquez sur l'onglet "Tab2". C'est une toile vierge, c'est-à-dire l'endroit parfait pour ajouter une fonctionnalité de caméra. Commençons à transformer cette page en galerie de photos. Ionic est doté de la fonction LiveReload. Ainsi, lorsque vous apportez des modifications et les enregistrez, l'application est immédiatement mise à jour !

![Avant et après avoir suivi ce tutoriel](/docs/assets/img/guides/first-app-v3/email-photogallery.gif)

Ouvrez le dossier de l'application photo-gallery dans l'éditeur de code de votre choix, puis naviguez jusqu'à `/src/app/tab2/tab2.page.html`. Nous voyons :

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Tab Two</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding"></ion-content>
```

`ion-header` représente la navigation supérieure et la barre d'outils, avec "Tab 2" comme titre. Nous mettons le code de notre application dans `ion-content`. Dans ce cas, c'est là que nous allons ajouter un bouton qui ouvre l'appareil photo de l'appareil et affiche l'image capturée par l'appareil photo. Mais commençons par quelque chose d'évident : renommer la page de l'onglet deux :

```html
<ion-title>Photo Gallery</ion-title>
```

Ensuite, ouvrez `src/app/tabs/tabs.page.html`. Changez l'étiquette en "Galerie" et le nom de l'icône en "images" :

```html
<ion-tab-button tab="tab2">
  <ion-icon name="images"></ion-icon>
  <ion-label>Gallery</ion-label>
</ion-tab-button>
```

Ce n’est que le début de toutes les choses cool que nous pouvons faire avec Ionic. Ensuite, nous allons déployer l'application sur votre appareil iOS ou Android, puis continuer à construire la galerie de photos.
