---
---

# Core Concepts

<p class='intro' markdown='1'>
If you're completely new to Ionic Framework app development, it can be helpful to get a high-level understanding of the core philosophy, concepts, and tools behind the project. Before diving into complex topics, we'll cover the basics here to help you familiarize yourself with what Ionic is and how it works.
</p>


## UI Components

The Ionic Framework is a library of UI Components, which are reusable elements that serve as the building blocks for an application. Components are pre-designed using web-standards, composed of HTML, CSS, and JavaScript. Though the components are pre-built, they're designed from the ground up to be highly customizable so apps can make each component their own, allowing each app to have its own look and feel. More specifically, Ionic components can be easily themed to globally change colors across an entire app. For more information about customizing the look, please see the [Theming docs](/docs/theming/basics).


## Platform Continuity

Platform Continuity is a built-in feature for Ionic apps which allows app developers to use the same codebase for multiple platforms. For example, Apple devices such as the iPhone and iPad use Apple's own design language for their [iOS operating system](https://www.apple.com/ios). Similarly, Android devices use Google's design language called [Material Design](https://material.io/guidelines/). Each design language has its own subtle differences which users of those devices are already familiar with.

Every Ionic component adapts its look to the platform on which the app is running on. By making subtle design changes it provides users an experience with which they’re familiar. An Ionic app downloaded from Apple's App Store will get the iOS theme, and an Ionic app downloaded from Android's Play Store will get the Material Design theme. For the apps that are viewed as a Progressive Web App (PWA) from a browser, Ionic will default to using the Material Design theme. Additionally, deciding which platform to use in certain scenarios is entirely configurable. More information about app theming can be found in the [Theming docs](/docs/theming/basics).


## Navigation

Traditional websites use a linear history, meaning that the user navigates to a page, and can hit the back button to navigate back. For example, this is like clicking around Wikipedia, where the user is simplying going forward and backward on the browser's linear history stack.

Native apps however, commonly use "push/pop" navigation, with multiple history stacks. For example, iOS's App Store has tabs at the bottom such as "Games", "Search", "Updates", etc. Tapping each of the tabs is actually entering into its own history stack, and tapping the "Back" button in the App Store only means "go back in just this tab". Though it sounds pretty familar to a traditional website, it's actually quite different and something users of native apps are already accustomed to.

Ionic is able provide users the "push/pop" navigation they expect, but translate it to the web. This allows develoeprs to create the same native app experience for their users.


### Routing

Depending on which framework you're work with, it's recommended to use the officially-supported router, such as the [Angular Router](https://angular.io/guide/router). Previous versions of Ionic shipped with its own router, but in order to provide app with the best tooling and developer experience Ionic has since moved to always using the framework's recommended router. Uses For more details, see our documentation.


## Native Access

An amazing feature of using web technologies, which is what Ionic is built on top of, is that it can be rendered in virtually any platform. Desktop computers, phones, tablets, cars, refridgerators, etc.! Because of the web-standards and common APIs shared on many platforms, the same codebase for Ionic apps can work in many platforms.

One of the most common use-cases for Ionic is to build an app which can be downloaded from both the [App Store](https://www.apple.com/ios/app-store/) and [Play Store](https://play.google.com/). Both iOS and Android software development kits (SDK) provide "webviews" which renders any Ionic app.

Projects such as [Capacitor](https://capacitor.ionicframework.com/) and [Cordova](https://cordova.apache.org/) are commonly used to give Ionic apps "native access". What this means is that developers can quickly build out an app using common web development tools, and still have access to native features such as the device's accelerometer, camera, GPS, etc. For information please see the publishing docs for the [App Store](/docs/publishing/app-store) and [Play Store](http://ionic-docs.herokuapp.com/docs/publishing/play-store).

