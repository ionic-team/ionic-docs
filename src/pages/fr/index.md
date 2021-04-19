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

### Native and Web optimized

Ionic emulates native app UI guidelines and uses native SDKs, bringing the UI standards and device features of native apps together with the full power and flexibility of the open web. Ionic uses Capacitor (or Cordova) to deploy natively, or runs in the browser as a Progressive Web App.

## Goals

### Cross-platform

Build and deploy apps that work across multiple platforms, such as native iOS, Android, desktop, and the web as a Progressive Web App - all with one code base. Write once, run anywhere.

### Web Standards-based

Ionic Framework is built on top of reliable, [standardized web technologies](/docs/reference/glossary#web-standards): HTML, CSS, and JavaScript, using modern Web APIs such as Custom Elements and Shadow DOM. Because of this, Ionic components have a stable API, and aren't at the whim of a single platform vendor.

### Beautiful Design

Clean, simple, and functional. Ionic Framework is designed to work and display beautifully out-of-the-box across all platforms. Start with pre-designed components, typography, interactive paradigms, and a gorgeous (yet extensible) base theme.

### Simplicity

Ionic Framework is built with simplicity in mind, so that creating Ionic apps is enjoyable, easy to learn, and accessible to just about anyone with web development skills.

## Framework Compatibility

While past releases of Ionic were tightly coupled to Angular, version 4.x of the framework was re-engineered to work as a standalone <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web Component</a> library, with integrations for the latest JavaScript frameworks, like Angular. Ionic can be used in most frontend frameworks with success, including React and Vue, though some frameworks need a shim for full Web Component support.

### JavaScript

One of the main goals with moving Ionic Framework to <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web Components</a> was to remove any hard requirement on a single framework to host the components. This made it possible for the core components to work standalone in a web page with just a script tag. While working with frameworks can be great for larger teams and larger apps, it is now possible to use Ionic as a standalone library in a single page even in a context like WordPress.

### Angular

Angular has always been at the center of what makes Ionic great. While the core components have been written to work as a standalone Web Component library, the `@ionic/angular` package makes integration with the Angular ecosystem a breeze. `@ionic/angular` includes all the functionality that Angular developers would expect coming from Ionic 2/3, and integrates with core Angular libraries, like the Angular router.

### React

Ionic now has official support for the popular React library. Ionic React lets React developers use their existing web skills to build apps that target iOS, Android, the web, and the desktop. With `@ionic/react`, you can use all the core Ionic components, but in a way that feels like using native React components.

### Vue

Ionic now has official support for the popular Vue 3 library. Ionic Vue lets Vue developers use their existing web skills to build apps that target iOS, Android, the web, and the desktop. With `@ionic/vue`, you can use all the core Ionic components, but in a way that feels like using native Vue components.

### Future Support

Support for other frameworks will be considered in future releases.

## Ionic CLI

The official [Ionic CLI](/docs/cli), or Command Line Interface, is a tool that quickly scaffolds Ionic apps and provides a number of helpful commands to Ionic developers. In addition to installing and updating Ionic, the CLI comes with a built-in development server, build and debugging tools, and much more. If you are an [Appflow](#ionic-appflow) member, the CLI can be used to perform cloud builds and deployments, and administer your account.

## Appflow

To help build, deploy, and manage Ionic apps throughout their lifecycle, we offer a commercial service for production apps called <a href="https://ionic.io/appflow" target="_blank">Appflow</a>, which is **separate from the open source Framework.**

Appflow helps developers and teams compile native app builds and deploy live code updates to Ionic apps from a centralized dashboard. Optional paid upgrades are available for more advanced capabilities like publishing directly to app stores, workflow automation, single sign-on (SSO) and access to connected services and integrations.

Appflow requires an <a href="https://dashboard.ionicframework.com/signup" target="_blank">Ionic Account</a> and comes with a free “Hobby” plan for those interested in playing around with some of its features.

## Ecosystem

Ionic Framework is actively developed and maintained full-time by a core team, and its ecosystem is guided by an international community of developers and contributors fueling its growth and adoption. Developers and companies small and large use Ionic to build and ship amazing apps that run everywhere.

### Join the Community

There are millions of Ionic developers in over 200 countries worldwide. Here are some ways to join:

* <a href="https://forum.ionicframework.com/" target="_blank">Forum:</a> A great place for asking questions and sharing ideas.
* <a href="https://ionicworldwide.herokuapp.com/" target="_blank">Slack:</a> A lively place for devs to meet and chat in real time.
* <a href="https://twitter.com/ionicframework" target="_blank">Twitter:</a> Where we post updates and share content from the Ionic community.
* <a href="https://github.com/ionic-team/ionic" target="_blank">GitHub:</a> For reporting bugs or requesting new features, create an issue here. PRs welcome!
* <a href="https://ionicframework.com/contributors" target="_blank">Content authoring:</a> Write a technical blog or share your story with the Ionic community.

## License

Ionic Framework is a free and open source project, released under the permissable <a href="https://opensource.org/licenses/MIT" target="_blank">MIT license</a>. This means it can be used in personal or commercial projects for free. MIT is the same license used by such popular projects as jQuery and Ruby on Rails.

This documentation content (found in the <a href="https://github.com/ionic-team/ionic-docs" target="_blank">ionic-docs</a> repo) is licensed under the <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2 license</a>.