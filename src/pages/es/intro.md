---
nextText: 'Conceptos básicos'
nextUrl: '/docs/intro/concepts'
---

# ¿Que es Ionic Framework?

<!-- TOC goes here -->

Ionic Framework es un conjunto de herramientas de interfaz de usuario de código abierto para crear aplicaciones móviles y de escritorio de alta calidad utilizando tecnologías web (HTML, CSS y JavaScript).

Ionic Framework se enfoca en la experiencia frontend del usuario, o la interacción de la interfaz de usuario de una aplicación (controles, interacciones, gestos, animaciones). Es fácil de aprender, y se integra bien con otras bibliotecas o frameworks, tales como Angular, o puede ser usado sin un framework frontend utilizando un simple script incluido.

Actualmente, Ionic Framework tiene integración oficial con [Angular](/docs/angular/overview), sin embargo el soporte para [Vue](/docs/react) y [React](/docs/vue/overview) ya está en desarrollo. Si quieres aprender más sobre Ionic Framework antes de sumergirte en él, hemos <a href="https://youtu.be/p3AN3igqiRc" target="_blank">creado un vídeo</a> para que des un paseo por los conceptos básicos.

## Objetivos

### Multiplataforma (Cross-platform)

Construye y despliega aplicaciones que funcionen a través de múltiples plataformas, como iOS nativo, Android, escritorio y la web como una Aplicación Web Progresiva - todo con un único código base. Escriba una vez, ejecute en cualquier lugar.

### Basado en Estándares Web

Ionic Framework está construido sobre la base de [tecnologías web estandarizadas](/docs/faq/glossary#web-standards) y confiables: HTML, CSS y JavaScript, utilizando modernas API Web tales como Custom Elements y Shadow DOM. Debido a ello, los componentes Ionic tienen una API estable, y no están al servicio de un único proveedor de plataforma.

### Diseño hermoso

Limpio, simple y funcional. Ionic Framework está diseñado para trabajar y mostrar bellamente fuera de la caja a través de todas las plataformas. Comience con componentes predefinidos, tipografía, paradigmas interactivos y un vistoso (aunque extensible) tema básico.

### Simplicidad

Ionic Framework is built with simplicity in mind, so that creating Ionic apps is enjoyable, easy to learn, and accessible to just about anyone with web development skills.

## Licencia

Ionic Framework is a free and open source project, released under the permissable <a href="https://opensource.org/licenses/MIT" target="_blank">MIT license</a>. This means it can be used in personal or commercial projects for free. MIT is the same license used by such popular projects as jQuery and Ruby on Rails.

This documentation content (found in the <a href="https://github.com/ionic-team/ionic-docs" target="_blank">ionic-docs</a> repo) is licensed under the <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2 license</a>.

## Ionic CLI

The official [Ionic CLI](/docs/cli), or Command Line Interface, is a tool that quickly scaffolds Ionic apps and provides a number of helpful commands to Ionic developers. In addition to installing and updating Ionic, the CLI comes with a built-in development server, build and debugging tools, and much more. If you are an [Appflow](#ionic-appflow) member, the CLI can be used to perform cloud builds and deployments, and administer your account.

## Compatibilidad de Framework

While past releases of Ionic were tightly coupled to Angular, V4 of the framework was re-engineered to work as a standalone Web Component library, with integrations for the latest JavaScript frameworks, like Angular. Ionic can be used in most frontend frameworks with success, including React and Vue, though some frameworks need a shim for full Web Component support.

### JavaScript

One of the main goals with Ionic 4 was to remove any hard requirement on a single framework to host the components. This means the core components can work standalone with just a script tag in a web page. While working with frameworks can be great for larger teams and larger apps, it is now possible to use Ionic as a standalone library in a single page even in a context like WordPress.

### Angular

Angular has always been at the center of what makes Ionic great. While the core components have been written to work as a standalone Web Component library, the `@ionic/angular` package makes integration with the Angular ecosystem a breeze. `@ionic/angular` includes all the functionality that Angular developers would expect coming from Ionic 2/3, and integrates with core Angular libraries, like the Angular router.

### React

Ionic now has official support for the popular React library. Ionic React lets React developers use their existing web skills to build apps that target iOS, Android, the web, and the desktop. With `@ionic/react`, you can use all the core Ionic components, but in a way that feels like using native React components.

### Future Support

Se espera soporte para otros frameworks en futuras versiones. Currently official bindings for Vue are being developed, though some components just work out of the box in those frameworks.

## Ionic Framework V4+

Ionic Framework V4 is a major advance in the underlying technology and capabilities of the project, with a focus on performance, compatibility, and overall extensibility. Although V4 still integrates deeply with Angular through the `@ionic/angular` package, it is now also framework-agnostic, meaning it can work with any other JavaScript framework (Vue, React, Preact, etc), or with no framework at all.

By moving to web standards, V4 allows the core of Ionic to rely on the standard component model supported in modern browsers, rather than a framework-specific model. This can mean faster load time, better performance, and less overall code.

## Appflow

To help manage Ionic apps throughout their lifecycle, we also offer a commercial app platform for production apps called <a href="https://ionic.io/appflow" target="_blank">Appflow</a>, which is **separate from the open source Framework.**

Appflow helps developers and teams compile native app builds and deploy live code updates to Ionic apps from a centralized dashboard. Optional paid upgrades are available for more advanced capabilities like workflow automation, single sign-on (SSO) and access to connected services and integrations.

Appflow requires an <a href="https://dashboard.ionicframework.com/signup" target="_blank">Ionic Account</a> and comes with a free “Starter” plan for those interested in playing around with some of its features.

## Ecosistema

Ionic Framework is actively developed and maintained full-time by a core team, and its ecosystem is guided by an international community of developers and contributors fueling its growth and adoption. Developers and companies small and large use Ionic to build and ship amazing apps that run everywhere.

### Únete a la Comunidad

There are millions of Ionic developers in over 200 countries worldwide. Here are some ways to join:

* <a href="https://forum.ionicframework.com/" target="_blank">Forum:</a> A great place for asking questions and sharing ideas.
* <a href="https://ionicworldwide.herokuapp.com/" target="_blank">Slack:</a> A lively place for devs to meet and chat in real time.
* <a href="https://twitter.com/Ionicframework" target="_blank">Twitter:</a> Where we post updates and share content from the Ionic community.
* <a href="https://github.com/ionic-team/ionic" target="_blank">GitHub:</a> For reporting bugs or requesting new features, create an issue here. PRs welcome!
* <a href="https://ionicframework.com/contributors" target="_blank">Content authoring:</a> Write a technical blog or share your story with the Ionic community.