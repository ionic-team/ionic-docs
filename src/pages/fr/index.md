---
title: Le Framework Ionic
meta:
  image: /docs/assets/img/meta/open-graph.png
  title: Outils d'interface utilisateur Open-Source pour créer vos propres applications mobiles ou de bureau
  description: Ionic Framework est un ensemble d'outils de l'interface utilisateur open-source pour créer vos propres applications mobiles et de bureau en utilisant des technologies web avec des intégrations pour les frameworks populaires.
tableOfContents: false
demoUrl: https://ionic-docs-demo.herokuapp.com/
demoSourceUrl: https://github.com/ionic-team/docs-demo
nextText: 'Configuration de l''environnement'
nextUrl: '/docs/intro/environment'
---

Le Framework Ionic est une boîte à outils UI open source permettant de créer des applications mobiles et de bureau performantes et de haute qualité à l'aide de technologies web - HTML, CSS et JavaScript - avec des intégrations pour des frameworks populaires comme [Angular](/docs/angular/overview), [React](/docs/react/overview) et [Vue](/docs/vue/overview).

Commencez à construire en [installant Ionic](/docs/intro/cli) ou en suivant notre [Tutoriel de la première application](/docs/intro/next#build-your-first-app) pour apprendre les principaux concepts.

<docs-cards> <docs-card header="Installation Guide" href="/docs/intro/cli" icon="/docs/assets/icons/guide-installation-icon.svg" hover-icon="/docs/assets/icons/guide-installation-icon-hover.svg"> 

Des guides étape par étape pour configurer votre système et installer le framework.</docs-card>

<docs-card header="UI Components" href="/docs/components" icon="/docs/assets/icons/guide-components-icon.svg" hover-icon="/docs/assets/icons/guide-components-icon-hover.svg"> 

Plongez dans la bibliothèque de composants d'interface utilisateur magnifiquement conçue de le framework Ionic.</docs-card>

<docs-card header="Native Functionality" href="/docs/native" icon="/docs/assets/icons/guide-native-icon.svg" hover-icon="/docs/assets/icons/guide-native-icon-hover.svg"> 

Intégrez des plugins natifs tels que Bluetooth, Maps, HealthKit, et plus encore.</docs-card>

<docs-card header="Theming" href="/docs/theming/basics" icon="/docs/assets/icons/guide-theming-icon.svg" hover-icon="/docs/assets/icons/guide-theming-icon-hover.svg"> 

Apprenez à personnaliser et modifier facilement le design visuel de votre application Ionic pour s'adapter à votre marque.</docs-card> </docs-cards>

## Vue d'ensemble

Le framework Ionic se concentre sur le frontend UX et l'interaction UI d'une application - contrôles UI, interactions, gestes, animations. Il est facile à apprendre et s'intègre à d'autres bibliothèques ou frameworks, comme [Angular](/docs/angular/overview), [React](/docs/react/overview), ou [Vue](/docs/vue/overview). Il peut également être utilisé de manière autonome, sans framework frontend, à l'aide d'un simple [script include](/docs/intro/cdn). Si vous souhaitez en savoir plus sur le framework Ionic avant de vous y plonger, nous avons <a href="https://youtu.be/p3AN3igqiRc" target="_blank">créé une vidéo</a> pour vous présenter les bases.

### Une seule base de code, en cours d'exécution partout

Ionic est la seule pile d'applications mobiles qui permet aux développeurs web de créer des applications pour tous les principaux magasins d'applications et le web mobile à partir d'une seule base de code. Et avec [Adaptive Styling](/docs/theming/platform-styles), les applications Ionic ont l'air et se sentent à l'aise sur chaque appareil.

### Une focalisation sur les performances

Ionic est conçu pour fonctionner et se comporter de manière optimale sur les derniers appareils mobiles grâce à des pratiques d'excellence telles que des transitions accélérées par le matériel et des gestes optimisés pour le toucher.

### Un design propre, simple et fonctionnel

Ionic est conçu pour fonctionner et s'afficher magnifiquement sur tous les appareils et plateformes mobiles actuels. Grâce aux composants prêts à l'emploi, à la typographie et à un superbe thème de base (extensible) qui s'adapte à chaque plateforme, vous construirez avec style.

### Native et optimisée pour le Web

Ionic émule les directives d'interface utilisateur des applications natives et utilise des SDK natifs, ce qui permet de combiner les normes d'interface utilisateur et les caractéristiques des appareils des applications natives avec toute la puissance et la flexibilité du web ouvert. Ionic utilise Capacitor (ou Cordova) pour un déploiement natif, ou s'exécute dans le navigateur en tant que Progressive Web App.

## Les Objectifs

### Multi-Plateformes

Créez et déployez des applications qui fonctionnent sur plusieurs plates-formes, telles que les applications natives iOS, Android, les ordinateurs de bureau et le Web en tant qu'application Web progressive, le tout avec une seule base de code. Écrivez une fois, utilisez partout.

### Basé sur les standards Web

Le framework Ionic est construit au-dessus de technologies web fiables, [standardisées](/docs/reference/glossary#web-standards) : HTML, CSS et JavaScript, en utilisant des API web modernes telles que Custom Elements et Shadow DOM. De ce fait, les composants Ionic disposent d'une API stable et ne sont pas soumis aux caprices d'un seul fournisseur de plateforme.

### Belle conception

Propre, simple et fonctionnel. Le framework Ionic est conçu pour fonctionner et s'afficher magnifiquement sur toutes les plateformes. Commencez par des composants préconçus, une typographie, des paradigmes interactifs et un thème de base magnifique (mais extensible).

### Simplicité

Le framework Ionic est conçu dans un souci de simplicité, afin que la création d'applications Ionic soit agréable, facile à apprendre et accessible à toute personne ayant des compétences en développement web.

## Compatibilité du framework

Alors que les versions précédentes de Ionic étaient étroitement couplées à Angular, la version 4.x du framework a été remaniée pour fonctionner comme une bibliothèque autonome <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">composant Web</a>, avec des intégrations pour les derniers frameworks JavaScript, comme Angular. Ionic peut être utilisé avec succès dans la plupart des frameworks frontaux, y compris React et Vue, bien que certains frameworks nécessitent un shim pour un support complet des composants Web.

### JavaScript

L'un des principaux objectifs du passage du Framework Ionic à <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web Components</a> était de supprimer toute exigence stricte sur un seul framework pour héberger les composants. Cela a permis aux composants de base de fonctionner de manière autonome dans une page Web avec une simple balise de script. Si travailler avec des frameworks peut être formidable pour les équipes et les applications plus importantes, il est désormais possible d'utiliser Ionic comme une bibliothèque autonome dans une page unique, même dans un contexte comme WordPress.

### Angular

Angular a toujours été au centre de ce qui rend Ionic génial. Bien que les composants de base aient été écrits pour fonctionner comme une bibliothèque autonome de composants Web, le paquet `@ionic/angular` facilite l'intégration à l'écosystème Angular. `@ionic/angular` comprend toutes les fonctionnalités que les développeurs Angular attendent venant de Ionic 2/3, et s'intègre aux bibliothèques Angular de base, comme le routeur Angular.

### React

Ionic a maintenant un support officiel pour la populaire bibliothèque React. Ionic React permet aux développeurs React d'utiliser leurs compétences web existantes pour créer des applications qui ciblent iOS, Android, le web et le bureau. Avec `@ionic/react`, vous pouvez utiliser tous les composants de base de Ionic, mais d'une manière qui donne l'impression d'utiliser des composants React natifs.

### Vue

Ionic a maintenant un support officiel pour la populaire bibliothèque Vue 3. Ionic Vue permet aux développeurs Vue d'utiliser leurs compétences web existantes pour construire des applications qui ciblent iOS, Android, le web et le bureau. Avec `@ionic/vue`, vous pouvez utiliser tous les composants de base de Ionic, mais d'une manière qui donne l'impression d'utiliser des composants Vue natifs.

### Support futur

La prise en charge d'autres cadres sera envisagée dans les prochaines versions.

## Le CLI de IONIC

L'interface officielle [Ionic CLI](/docs/cli), ou interface en ligne de commande, est un outil qui permet d'échafauder rapidement des applications Ionic et fournit un certain nombre de commandes utiles aux développeurs Ionic. Outre l'installation et la mise à jour de Ionic, le CLI est livré avec un serveur de développement intégré, des outils de construction et de débogage, et bien plus encore. Si vous êtes un [Appflow](#ionic-appflow) membre, le CLI peut être utilisé pour effectuer des constructions et des déploiements dans le cloud, et administrer votre compte.

## Appflow

Pour aider à construire, déployer et gérer les apps Ionic tout au long de leur cycle de vie, nous proposons un service commercial pour les apps de production appelé <a href="https://ionic.io/appflow" target="_blank">Appflow</a>, qui est **séparé du Framework open source.**

Appflow aide les développeurs et les équipes à compiler des applications natives et à déployer des mises à jour de code en direct pour les applications Ionic à partir d'un tableau de bord centralisé. Des mises à niveau payantes sont disponibles en option pour des fonctionnalités plus avancées telles que la publication directe sur les app stores, l'automatisation des flux de travail, l'authentification unique (SSO) et l'accès aux services et intégrations connectés.

Appflow nécessite un <a href="https://dashboard.ionicframework.com/signup" target="_blank">compte Ionic</a> et est livré avec un plan gratuit "Hobby" pour ceux qui souhaitent jouer avec certaines de ses fonctionnalités.

## L' Écosystème

Le framework Ionic est activement développé et maintenu à plein temps par une équipe centrale, et son écosystème est guidé par une communauté internationale de développeurs et de contributeurs qui alimentent sa croissance et son adoption. Les développeurs et les entreprises, petites et grandes, utilisent Ionic pour construire et expédier des applications étonnantes qui fonctionnent partout.

### Rejoignez la communauté

Il y a des millions de développeurs Ionic dans plus de 200 pays dans le monde. Voici quelques façons de participer :

* <a href="https://forum.ionicframework.com/" target="_blank">Forum:</a> Un endroit idéal pour poser des questions et partager des idées.
* <a href="https://ionicworldwide.herokuapp.com/" target="_blank">Slack:</a> Un lieu vivant où les développeurs peuvent se rencontrer et discuter en temps réel.
* <a href="https://twitter.com/ionicframework" target="_blank">Twitter:</a> Où nous publions des mises à jour et partageons du contenu de la communauté Ionic.
* <a href="https://github.com/ionic-team/ionic" target="_blank">GitHub:</a> Pour signaler des bogues ou demander de nouvelles fonctionnalités, créez un problème ici. Les PRs sont les bienvenus !
* <a href="https://ionicframework.com/contributors" target="_blank">Création de contenu:</a> Rédigez un blog technique ou partagez votre histoire avec la communauté Ionic.

## License

Ionic Framework est un projet libre et open source, publié sous la licence permissable <a href="https://opensource.org/licenses/MIT" target="_blank">MIT license</a>. Cela signifie qu'il peut être utilisé gratuitement dans des projets personnels ou commerciaux. MIT est la même licence que celle utilisée par des projets aussi populaires que jQuery et Ruby on Rails.

Ce contenu de documentation (qui se trouve dans le repo <a href="https://github.com/ionic-team/ionic-docs" target="_blank">ionic-docs</a>) est sous licence <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Licence Apache 2</a>.