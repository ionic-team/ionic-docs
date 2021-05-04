---
nextText: 'Core concepts'
nextUrl: '/docs/intro/concepts'
---

# What is Ionic Framework?

<!-- TOC goes here -->

Ionic Framework is an open source UI toolkit for building performant, high-quality mobile and desktop apps using web technologies (HTML, CSS, and JavaScript).

Ionic Framework is focused on the frontend user experience, or UI interaction of an app (controls, interactions, gestures, animations). It’s easy to learn, and integrates nicely with other libraries or frameworks, such as Angular, or can be used standalone without a frontend framework using a simple script include.

Currently, Ionic Framework has official integrations with [Angular](/docs/angular/overview) and [React](/docs/react), and support for [Vue](/docs/vue/overview) is in development. If you’d like to learn more about Ionic Framework before diving in, we <a href="https://youtu.be/p3AN3igqiRc" target="_blank">created a video</a> to walk you through the basics.

## Goals

### Cross-platform

Build and deploy apps that work across multiple platforms, such as native iOS, Android, desktop, and the web as a Progressive Web App - all with one code base. Write once, run anywhere.

### Web Standards-based

Ionic Framework is built on top of reliable, [standardized web technologies](/docs/faq/glossary#web-standards): HTML, CSS, and JavaScript, using modern Web APIs such as Custom Elements and Shadow DOM. Because of this, Ionic components have a stable API, and aren't at the whim of a single platform vendor.

### Beautiful Design

Clean, simple, and functional. Ionic Framework is designed to work and display beautifully out-of-the-box across all platforms. Start with pre-designed components, typography, interactive paradigms, and a gorgeous (yet extensible) base theme.

### Simplicity

Ionic Framework is built with simplicity in mind, so that creating Ionic apps is enjoyable, easy to learn, and accessible to just about anyone with web development skills.

## License

Ionic Framework is a free and open source project, released under the permissable <a href="https://opensource.org/licenses/MIT" target="_blank">MIT license</a>. This means it can be used in personal or commercial projects for free. MIT is the same license used by such popular projects as jQuery and Ruby on Rails.

This documentation content (found in the <a href="https://github.com/ionic-team/ionic-docs" target="_blank">ionic-docs</a> repo) is licensed under the <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2 license</a>.

## Ionic CLI

The official [Ionic CLI](/docs/cli), or Command Line Interface, is a tool that quickly scaffolds Ionic apps and provides a number of helpful commands to Ionic developers. In addition to installing and updating Ionic, the CLI comes with a built-in development server, build and debugging tools, and much more. If you are an [Appflow](#ionic-appflow) member, the CLI can be used to perform cloud builds and deployments, and administer your account.

## Framework Compatibility

While past releases of Ionic were tightly coupled to Angular, V4 of the framework was re-engineered to work as a standalone Web Component library, with integrations for the latest JavaScript frameworks, like Angular. Ionic can be used in most frontend frameworks with success, including React and Vue, though some frameworks need a shim for full Web Component support.

### JavaScript

One of the main goals with Ionic 4 was to remove any hard requirement on a single framework to host the components. This means the core components can work standalone with just a script tag in a web page. While working with frameworks can be great for larger teams and larger apps, it is now possible to use Ionic as a standalone library in a single page even in a context like WordPress.

### Angular

Angular has always been at the center of what makes Ionic great. While the core components have been written to work as a standalone Web Component library, the `@ionic/angular` package makes integration with the Angular ecosystem a breeze. `@ionic/angular` includes all the functionality that Angular developers would expect coming from Ionic 2/3, and integrates with core Angular libraries, like the Angular router.

### React

Ionic now has official support for the popular React library. Ionic React lets React developers use their existing web skills to build apps that target iOS, Android, the web, and the desktop. With `@ionic/react`, you can use all the core Ionic components, but in a way that feels like using native React components.

### Future Support

Support for other frameworks are expected in future release. Currently official bindings for Vue are being developed, though some components just work out of the box in those frameworks.

## Ionic Framework V4+

Ionic Framework V4 is a major advance in the underlying technology and capabilities of the project, with a focus on performance, compatibility, and overall extensibility. Although V4 still integrates deeply with Angular through the `@ionic/angular` package, it is now also framework-agnostic, meaning it can work with any other JavaScript framework (Vue, React, Preact, etc), or with no framework at all.

By moving to web standards, V4 allows the core of Ionic to rely on the standard component model supported in modern browsers, rather than a framework-specific model. This can mean faster load time, better performance, and less overall code.

## Appflow

To help manage Ionic apps throughout their lifecycle, we also offer a commercial app platform for production apps called <a href="https://ionic.io/appflow" target="_blank">Appflow</a>, which is **separate from the open source Framework.**

Appflow helps developers and teams compile native app builds and deploy live code updates to Ionic apps from a centralized dashboard. Optional paid upgrades are available for more advanced capabilities like workflow automation, single sign-on (SSO) and access to connected services and integrations.

Appflow requires an <a href="https://dashboard.ionicframework.com/signup" target="_blank">Ionic Account</a> and comes with a free “Starter” plan for those interested in playing around with some of its features.

## Ecosystem

Ionic Framework is actively developed and maintained full-time by a core team, and its ecosystem is guided by an international community of developers and contributors fueling its growth and adoption. Developers and companies small and large use Ionic to build and ship amazing apps that run everywhere.

### Join the Community

There are millions of Ionic developers in over 200 countries worldwide. Here are some ways to join:

* <a href="https://forum.ionicframework.com/" target="_blank">Forum:</a> A great place for asking questions and sharing ideas.
* <a href="https://ionicworldwide.herokuapp.com/" target="_blank">Slack:</a> A lively place for devs to meet and chat in real time.
* <a href="https://twitter.com/Ionicframework" target="_blank">Twitter:</a> Where we post updates and share content from the Ionic community.
* <a href="https://github.com/ionic-team/ionic" target="_blank">GitHub:</a> For reporting bugs or requesting new features, create an issue here. PRs welcome!
* <a href="https://ionicframework.com/contributors" target="_blank">Content authoring:</a> Write a technical blog or share your story with the Ionic community.