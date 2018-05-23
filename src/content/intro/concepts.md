---
previousText: 'What is Ionic Framework'
previousUrl: '/docs/intro'
nextText: 'Browser Support'
nextUrl: '/docs/intro/browser-support'
---

# Core Concepts

<p class="intro" markdown="1">
For those completely new to Ionic Framework app development, it can be helpful to get a high-level understanding of the core philosophy, concepts, and tools behind the project. Before diving into complex topics, we’ll cover the basics of what Ionic is, and how it works.
</p>


## UI Components

The Ionic Framework is a library of UI Components, which are reusable elements that serve as the building blocks for an application. Components are pre-designed using web-standards, composed of HTML, CSS, and JavaScript. Though the components are pre-built, they're designed from the ground up to be highly customizable so apps can make each component their own, allowing each app to have its own look and feel. More specifically, Ionic components can be easily themed to globally change colors across an entire app. For more information about customizing the look, please see [Theming](/docs/theming/basics).


## Platform Continuity

Platform Continuity is a built-in feature of Ionic Framework which allows app developers to use the same codebase for multiple platforms. Every Ionic component adapts its look to the platform on which the app is running on. For example, Apple devices, such as the iPhone and iPad, use Apple's own design language for their [iOS operating system](https://www.apple.com/ios). Similarly, Android devices use Google's design language called [Material Design](https://material.io/guidelines/).

By making subtle design changes between the platforms, users are provided with a familiar app experience. An Ionic app downloaded from Apple's App Store will get the iOS theme, while an Ionic app downloaded from Android's Play Store will get the Material Design theme. For the apps that are viewed as a Progressive Web App (PWA) from a browser, Ionic will default to using the Material Design theme. Additionally, deciding which platform to use in certain scenarios is entirely configurable. More information about app theming can be found in [Theming](/docs/theming/basics).


## Navigation

Traditional websites use a linear history, meaning that the user navigates to a page and can hit the back button to navigate back. An example of this is clicking around Wikipedia where the user is going forward and backward on the browser's linear history stack.

### Push / Pop

Native apps, however, commonly use "push/pop" navigation, with multiple history stacks. For example, iOS's App Store has tabs at the bottom such as "Games", "Search", "Updates", etc. Tapping each of the tabs enters into its own history stack, and tapping the "Back" button in one of these stacks means "go back in just this tab". Though it sounds pretty familiar to a traditional website, it's actually quite different and something users of native apps are already accustomed to.

Ionic is able to provide users the "push/pop" navigation they expect, but translate it to the web. This allows developers to create the same native app experience for their users.


### Routing

We recommend using the officially supported router based on the framework used, such as the [Angular Router](https://angular.io/guide/router). Previous versions of Ionic shipped with our own custom router, but in order to provide the best tooling and developer experience we have since moved to always using the framework's recommended router.


## Native Access

An amazing feature of using web technologies, which is what Ionic is built on top of, is that it can be rendered in virtually any platform: desktop computers, phones, tablets, cars, refrigerators, and more! The same codebase for Ionic apps can work in many platforms because it is based on web standards and common APIs that are shared across many platforms.

One of the most common use cases for Ionic is to build an app which can be downloaded from both the [App Store](https://www.apple.com/ios/app-store/) and [Play Store](https://play.google.com/). Both iOS and Android software development kits (SDKs) provide "[web views](/docs/building/webview)" which render any Ionic app.

Projects such as <a href="https://capacitor.ionicframework.com/" target="_blank">Capacitor</a> and <a href="https://cordova.apache.org/" target="_blank">Cordova</a> are commonly used to give Ionic apps "native access". This means developers can quickly build out an app using common web development tools, and still have access to native features such as the device's accelerometer, camera, GPS, etc. For more information please see the publishing docs for the [App Store](/docs/publishing/app-store) and [Play Store](http://ionic-docs.herokuapp.com/docs/publishing/play-store).


## Architecture

Ionic Apps are structured around the idea of Components. Utilizing the developers framework of choice, app's are built from the ground up with components being the key building block. Top level "views" are just components that are accessible through a URL. More detailed guides on how apps should be structured and built are available from the particular framework developers choose to use, such as [Angular's Style Guide](https://angular.io/guide/styleguide)


## Theming

Talk about the overall theming capabilities of Ionic apps.
