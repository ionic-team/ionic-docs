---
title: Ionic Vue
nextText: 'Créez votre première application'
nextUrl: '/docs/vue/your-first-app'
---

# Vue d'ensemble Ionic

`@ionic/vue` combine l'expérience de base de Ionic Framework avec l'outillage et les API qui sont adaptés aux développeurs Vue.

## Support de la version Vue

Ionic Vue est construit au-dessus de Vue 3.0.0. Si vous avez construit une application avec les premières versions de Ionic Vue, vous voudrez passer à la dernière version et mettre à jour vos dépendances Vue.

## Outil de vue

Les projets Ionic Vue sont livrés avec les mêmes outils que les projets Vue CLI ordinaires. Cela signifie que vous allez construire avec le CLI de Vue et toutes ses fonctionnalités. En outre, les projets de démarrage sont également livrés avec quelques fonctionnalités activées par défaut, comme le routage et la prise en charge de TypeScript.

## Outil natif

[Capacitor](https://capacitor.ionicframework.com) est le moteur d'exécution d'applications multiplateforme officiel utilisé pour faire fonctionner votre `Ionic Vue` web app de manière native sur iOS, Android et le web.

Bien qu'il n'y ait aucune limitation technique connue à l'utilisation de `Ionic Vue` avec [Cordova](https://cordova.apache.org/) plugins, Capacitor est officiellement recommandé. Il n'est pas prévu de prendre en charge une intégration Cordova pour `Ionic Vue` dans l'outil [Ionic CLI tooling](/docs/cli) pour le moment. Pour plus de détails, veuillez [voir ici](https://capacitor.ionicframework.com/docs/cordova).

## De la part de la communauté

- [Utiliser Vue.js avec Ionic & Capacitor](https://dev.to/aaronksaunders/using-vue-js-v3-beta-with-ionic-components-capacitor-plugins-2b6f) - Aaron Saunders

## Installation

<command-line> <command-prompt>npm install -g @ionic/cli</command-prompt> <command-prompt>ionic start myApp tabs --type vue</command-prompt>   
<command-prompt>ionic serve <command-cursor blink></command-cursor></command-prompt> </command-line>

## Ressources

<docs-cards> <docs-card header="Getting Started" href="/docs/vue/your-first-app" icon="/docs/assets/icons/feature-component-actionsheet-icon.png"> 

Apprenez les principes fondamentaux que vous devez connaître pour commencer à créer des applications étonnantes avec Ionic Framework.</docs-card>

<docs-card header="Navigation" href="/docs/vue/navigation" icon="/docs/assets/icons/feature-component-navigation-icon.png"> 

Apprenez les bases de la navigation dans votre application avec Ionic et Vue Router.</docs-card>

<docs-card header="Lifecycle" href="/docs/vue/lifecycle" icon="/docs/assets/icons/feature-guide-components-icon.png"> 

Apprenez à utiliser les événements du cycle de vie de Ionic dans les composants de classe et avec les hooks.</docs-card>

</docs-cards>