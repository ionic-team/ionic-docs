---
previousText: "Configuration de l'environnement"
previousUrl: "/docs/intro/environment"
nextText: "Paquets & CDN"
nextUrl: "/docs/intro/cdn"
contributors:
  - rtpHarry
  - dwieeb
---

# Installer Ionic

Les applications Ionic sont créées et développées principalement par l'utilitaire Ionic [ligne de commande](/docs/reference/glossary#cli). Le CLI Ionic est la méthode d'installation préférée, car elle offre un large éventail d'outils de développement et d'options d'aide en cours de route. C'est également le principal outil permettant d'exécuter l'application et de la connecter à d'autres services, tels que Appflow.

<aside id="ionic-wizard">
  <div class="heading-group">
    <header>Essayez notre assistant d'application</header>
    <p>Utilisez notre assistant d'application pour générer visuellement un projet Ionic. Choisissez un modèle, des couleurs personnalisées, une icône d'application et un cadre JavaScript pour commencer à construire plus rapidement.</p>
  </div>
  <div>
    <a href="/start" class="wizard-button">Ouvrir l'assistant <ion-icon name="arrow-forward-outline"/></a>
  </div>
</aside>

## Installer le CLI Ionic

Avant de continuer, assurez-vous que votre ordinateur a [Node.js](/docs/reference/glossary#node) installé. Voir [ces instructions](/docs/intro/environment) pour mettre en place un environnement pour Ionic.

Installez le CLI Ionic avec npm :

```shell
$ npm install -g @ionic/cli
```

S'il y avait une installation précédente de Ionic CLI, elle devra être désinstallée en raison d'un changement de nom de paquet.

```shell
$ npm uninstall -g ionic
$ npm install -g @ionic/cli

```

> L'option `-g` signifie _installer globalement_. Lorsque des paquets sont installés globalement, des erreurs de permission `EACCES` peuvent se produire. Envisagez de configurer npm pour qu'il fonctionne globalement sans autorisations élevées. Voir [Resolving Permission Errors](/docs/developing/tips#resolving-permission-errors) pour plus d'informations.

## Démarrer une application

Créez une application Ionic en utilisant l'un des modèles d'application préétablis, ou un modèle vierge pour commencer à zéro. Les trois starters les plus courants sont le starter `blank`, le starter `tabs` et le starter `sidemenu`. Commencez avec la commande `ionic start` :

```shell
$ ionic start myApp tabs
```

![démarrer les vignettes de l'application](/docs/assets/img/installation/start-app-thumbnails.png)

Pour en savoir plus sur le démarrage des applications Ionic, consultez le [Guide de démarrage](/docs/developing/starting).

## Démarrer l'application

La majorité du développement d'une application Ionic peut être passée directement dans le navigateur en utilisant la commande `ionic serve` :

```shell
$ cd myApp
$ ionic serve
```

Il existe un certain nombre d'autres façons d'exécuter une application, il est recommandé de commencer par ce flux de travail. Pour développer et tester des apps sur des appareils et des émulateurs, consultez le [Guide d'exécution d'une app](/docs/developing/previewing).

<style scoped>
  #ionic-wizard {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0;
    float: none;
    
    border-radius: 16px;
    padding: 32px 64px 32px 64px;!!crwd_CB_20_BC_dwrc!!  }

  #ionic-wizard .heading-group {
    flex-basis: 420px;
  }

  #ionic-wizard .heading-group header {
    font-weight: bold;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    color: #fff;
  }
  #ionic-wizard .heading-group p {
    color: #fff;
    max-width: 620px;
    opacity: .8;
    margin-block-start: .5rem;
    line-height: 160%;
  }

  #ionic-wizard .wizard-button {
    display: inline-flex;
    align-items: center;
    border-radius: 8px;
    padding: 8px 12px;
    border: none;
    background: #6c9dff;!!crwd_CB_21_BC_dwrc!!  }

  #ionic-wizard .wizard-button:hover,
  #ionic-wizard .wizard-button:focus {
    background: #80aaff;
    transition: all 0.3s;
    text-decoration: none;
  }

  #ionic-wizard .wizard-button ion-icon {
    font-size: 16px;
    margin-left: 4px;
  }

</style>
