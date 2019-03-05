---
previousText: 'Core concepts'
previousUrl: '/docs/intro/concepts'
nextText: 'Browser Support'
nextUrl: '/docs/intro/browser-support'
contributors:
  - dotNetkow
---

# Technology Ecosystem

You're likely wondering what technologies you'll encounter in the Ionic ecosystem, as well as how to get started based on your development background. 

## How to Get Started With Ionic

If you are **new to web development** (including a backend developer learning the frontend), start with the basics. Learning the foundational technologies (**HTML, CSS, JavaScript**) first is crucial — not only for creating Ionic apps but also since knowing them will serve you well throughout your software development career. There are many high quality free and paid learning materials available online.

If you are a **web developer with some experience**, we recommend learning [Angular](https://angular.io) before diving into Ionic. Ionic 4 embraces your framework of choice’s tooling (such as the CLI and routing), so you’ll be working with both of these technologies constantly while developing an app.

Lastly, if you’re a **seasoned web veteran**, you'll be comfortable jumping right into Ionic Framework and creating an app.

Next, let's take a look at the key technologies found in the Ionic Ecosystem.

## Web Foundations

At its core, an Ionic app is just a web app coupled with a variety of tooling used to deploy apps to different platforms (including desktop, web, and native mobile). This means that apps are built on the foundations of the web: **HTML, CSS, and JavaScript**.

**ECMAScript 6 (ES6)** defines new language features that JavaScript and Ionic apps alike take advantage of. These features make JavaScript an easier language to work with. In the context of Ionic apps, look out for classes, modules, promises, block scoping, arrow functions, and scope changes. The best part? ES6 results in cleaner, easier-to-read code:

```javascript
// ES6 string functions result in cleaner code
"hello".startsWith("ello", 1) // true
"hello".includes("ell")       // true

// ES 5
"hello".indexOf("ello") === 1;    // true
"hello".indexOf("ell") !== -1;    // true
```

Consider reviewing as needed when building your Ionic app.

## Adding Types to JavaScript

Ionic apps leverage **TypeScript**, “a [typed superset of JavaScript](https://www.typescriptlang.org/) that compiles to plain JavaScript.” That’s quite a mouthful!

“Superset” means that it contains all existing JavaScript functionality, but with additional features. Among the most powerful features is “type annotation,” which allows you to write JavaScript code in a stricter, more object-oriented way. Following an example is the best way to understand them:

```javascript
// Defining a greeter function with a single string parameter.
// Example borrowed from https://www.typescriptlang.org/.

function greeter(person: string) {
    return "Hello, " + person;
}

let user = [0, 1, 2];

document.body.innerHTML = greeter(user);

// Result: error TS2345: Argument of type 'number[]' is 
// not assignable to parameter of type 'string'.
```

The Greeter function’s single parameter, person, must be a string. If we execute this code while passing in an array, an error will be generated. While this example is very simple, this built-in error checking feature is incredibly useful for complex web applications because they prevent a lot of bugs over the lifetime of a software project.

How about the last part of the TypeScript definition, “compiles to JavaScript”? Web browsers do not understand TypeScript code, and some ES6 features aren’t supported in all browsers. Therefore, during the Ionic build process, the TypeScript code is transformed into JavaScript and bundled into a single file.

Fortunately, Ionic does all of this for us, but it’s useful to understand this concept to know what is happening behind the scenes.

## The Ionic Framework

The Ionic Framework is a library of reusable UI components that serve as building blocks for an application. Although pre-built, they’re designed from the ground up to be highly customizable, allowing each app to have its own look and feel. [See here](/docs/intro) for more info.

## Framework Tooling

Ionic is first and foremost a UI framework. While you can [build an app without one](/docs/installation/cdn#using-ionic-from-a-cdn), most Ionic developers pair their app with another web development framework such as Angular. By doing so, they get the best possible app development experience: a beautiful UI toolkit coupled with tooling for building, bundling, routing, and business logic.

Ionic 4 UI components are built on open web standards, so they generally work out of the box with all major frontend frameworks (official support for **Vue and React** is coming soon).

## Environment Tooling

In order to work within the Ionic ecosystem, you need to [install the long-term support](https://nodejs.org/en/download/) (LTS) version of **Node.js**. Node is a JavaScript runtime, initially built to bring JavaScript from the frontend to the backend. Today, it’s used all over the place, including desktop applications like the Ionic command line interface (CLI).

The Node.js install will include **node package manager (npm)**, a free online repository of JavaScript software libraries. The majority of modern JavaScript projects use npm to install, share, and distribute third-party code. This includes Ionic, Angular, Vue, React, Bootstrap, and the list goes on.

When developing your Ionic app, you’ll want to use a **version control system (VCS)**, the most popular being **Git**. These systems record changes to files over time, allowing for the retrieval of specific versions later. As you can imagine, there are many key benefits to this, including the ability to revert selected files (or projects) back to a specific state, compare changes over time, and easily recover a project if files are lost.

In the past, programmers might have used a simpler strategy such as copying files into another directory or timestamping them. But, given the complexities of modern web app development, this is a tedious and error-prone process—making a VCS a must-have.

## Build Tooling

Installing the Ionic Framework doesn’t give you a traditional desktop application to run. Instead, we install the Ionic CLI via npm, then use it to generate a new Ionic project.

```shell
$ npm install -g ionic
$ ionic start myApp tabs
```
[CLI tools are small programs](https://blog.ionicframework.com/new-to-the-command-line/) that perform various tasks in a way that makes them easy to use together, all without the complexities of having to build visual desktop apps. To use CLI tools, we need to use a **Terminal**. A Terminal lets us run CLI tools by typing commands and is a popular way developers build web and mobile apps today.

Windows, Mac, and Linux all have different ways to use the Terminal. On Mac and Linux, there’s one installed by default called **Terminal**. Windows includes **cmd.exe and PowerShell**, but we recommend [Git for Windows](https://git-scm.com/download/win) for the most modern approach.

The next tool we need may seem obvious, but our recommendation may not be. Use **a text editor or integrated development environment (IDE)**. We recommend [Visual Studio Code](https://code.visualstudio.com/), whose focus on web development makes it perfect for coding Ionic apps. Among the many useful features it contains, favorites include support for TypeScript and code auto-completion.

The final build tools we need, required if you wish to build iOS and Android apps, are **Xcode** and **Android Studio**. [Xcode](https://developer.apple.com/xcode/) is available only on the Mac platform from the Apple App Store. A Mac is required to run Ionic apps on an iOS device and submit them to the App Store. In contrast, [Android Studio](https://developer.android.com/studio) is available on Windows, Mac, and Linux. Use it to build native Android apps and submit them to Google Play.

Teams managing multiple Ionic apps will find the [Appflow Package service](https://ionicframework.com/docs/appflow/package/intro/) useful. It’s designed to help Ionic developers build their app in a stable, cloud-based environment. It works particularly well for teams that are working on an app at the same time and integrates directly with your git repo, including GitHub and Bitbucket.

## Native Mobile Apps

One of the major reasons web developers get excited about building Ionic apps is the ability to create native iOS and Android apps from their web code.

Traditionally, Ionic has leveraged the open source [Cordova project](https://cordova.apache.org/) to bring Ionic apps to multiple platforms beyond the web browser. In order to get an Ionic app running “natively,” the web code runs inside of a WebView (an embedded browser) inside of a native app shell. End users can’t tell the difference, as it will look, feel, and act like an app built with native technologies.

By bringing our Ionic apps onto mobile platforms with Cordova, an incredibly powerful feature is unlocked: the ability to access native device functionality via **plugins**. Plugins provide an interface for Cordova and native components to communicate with each other, allowing Ionic developers to invoke native code from JavaScript.

With hundreds of free, open source plugins available (such as Camera, Bluetooth, and GPS), web developers don’t need to learn native programming languages to succeed in building a great app. Instead, the native side is abstracted away via a defined JavaScript API. The Camera plugin example demonstrates how powerful this is:

```typescript
// Set camera options such as high/low-quality image capture and 
// JPEG or PNG encodings
const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

// Call the Camera JavaScript API: getPicture( ) function
this.camera.getPicture(options).then((imageData) => {
  // do something with new picture
  
  }, (err) => {
   // Handle error
   console.log("Camera issue:" + err);
});
```

The most exciting line above is the reference to `this.camera.getPicture()`. Notice something? There is no reference to iOS, Android, or the web! The Cordova plugin identifies the platform this code is running on and executes the corresponding native code to open the camera hardware on the mobile device.

When beginning to incorporate your first Cordova plugin in your Ionic app, take a look at **Ionic Native**. [Ionic Native](https://ionicframework.com/docs/native/) “wraps” Cordova plugins in a “promise” or “observable,” thus providing a common interface for all plugins and better support for Angular’s change detection. This doesn’t change the overall functionality but rather makes them easier to work with.

To install an Ionic Native plugin, first add the Cordova plugin (native code) to your project:

```shell
$ ionic cordova plugin add cordova-plugin-camera
```

Then add the Ionic Native portion (JavaScript code):

```shell
$ npm install @ionic-native/camera
```

Finally, implement the functionality, as seen in the camera code snippet above, as needed.

Worth a special mention is **Capacitor**, Ionic’s “spiritual successor” to Cordova. It fulfills a similar role as Cordova but [extends it in new and unique ways](https://capacitor.ionicframework.com), including:

* **Progressive Web App (PWA) Support**: PWAs are simply web apps focused on features such as offline support, excellent performance, and more. Unfortunately, Cordova only supports iOS and Android apps, meaning native device plugin functionality doesn’t work in web browsers. This makes it difficult to maintain a project with a single codebase that can be distributed both as a native application and as a web app. Fortunately, web browsers are increasingly adding support for [device functionality APIs](https://whatwebcando.today/), which Capacitor integrates into [its APIs](https://capacitor.ionicframework.com/docs/apis/).
* **Redesigned Plugins**: The Capacitor team has taken a fresh approach to all of the core Cordova plugins by simplifying their APIs, making them easier than ever to use.
* **Native Code Projects as First-Class Citizens**: Native iOS and Android projects now sit alongside your Ionic app (they are destroyed and recreated in Cordova projects, making it difficult to make changes to or add your own custom native code). This has several benefits, including easier integration of native controls and the ability for your native mobile developers to work alongside your web developers.

Capacitor supports the majority of existing Cordova plugins, so we recommend using it when starting a new Ionic project.

## Web Components and Stencil

You will encounter additional technology tools when developing Ionic apps. It’s good to be aware of them, but understanding them in-depth isn’t necessary.

The first one is **web components**, a suite of browser technologies used to create custom reusable UI elements. Complex HTML, CSS, and JavaScript is encapsulated within custom markup tags, allowing for maximum code reuse across web applications. The exciting thing about Ionic 4 is that its components are now web components, but you wouldn’t necessarily know that as an Ionic developer because their HTML markup looks the same as previous versions of Ionic:

```html
<ion-header>
    <ion-toolbar color="secondary">
        <ion-title>My Great App</ion-title>
    </ion-toolbar>
</ion-header>
```

By building Ionic 4 on top of web component technology, Ionic is no longer tightly tied to Angular, which means virtually any JavaScript framework is supported. The Ionic team can now innovate faster, and Ionic developers can rest assured knowing that Ionic will be a great long-term investment.

Next up, the [Stencil web component compiler](https://stenciljs.com/) helps make the process of creating Ionic 4 web components faster and easier for the Ionic team. It’s open-source, so other developers are welcome to use it to create their own web components, whether used in an Ionic app or not. To be perfectly clear though, Ionic developers do not need to know Stencil to build Ionic apps.

Using **Stencil** and web components together, the Ionic team packages up the Ionic Framework into a core set of UI library controls (buttons, tabs, sliders, etc.) called Ionic Core (aka `@ionic/core` on npm). This bundle can be used with or without a JavaScript framework.

Most developers, however, will leverage one of several web framework-specific building blocks. Right now, this is Ionic/Angular (aka `@ionic/angular` on npm) with additional options such as `@ionic/vue` and `@ionic/react` coming soon.

## Beyond Mobile Apps

Native mobile apps are still compelling to build these days, but Ionic has several other platform targets including PWAs and Electron.

**Progressive web apps** use modern web capabilities to deliver an app-like user experience. While appearing to some as merely a technology buzzword, their benefits should be taken seriously. PWAs bring features that are common to native apps to the mobile-web browser in a secure, standards-based manner. Among their exciting functionality is push notifications, improved offline support, native app look and feel, and the ability to save them to the home screen.

Unsurprisingly, we are [big fans of PWAs](/docs/publishing/progressive-web-app). Ionic starter apps created from the Ionic CLI come PWA-ready with best practices already built in. Additionally, [our PWA toolkit](https://ionicframework.com/pwa/toolkit) offers an opinionated starter app perfect for developers needing to squeeze in as much performance as possible.

If mobile-web, desktop-web, and native-mobile apps aren’t enough, you can deploy an Ionic app as a native-desktop app on MacOS or Windows using **Electron**. An [Electron app](/docs/publishing/desktop-app) is essentially a Node.js application embedded in a native shell. As Cordova does for mobile apps, Electron apps have access to native device features like the camera and push notifications. And it’s a more popular solution than you may think with Visual Studio Code, Slack, and Microsoft Teams being well-known, native-desktop apps built with web technologies.

## Backends?

 The Ionic Framework is **backend agnostic**! It works with any backend, typically communicating over HTTP with application programming interfaces (APIs) to retrieve, create, update, and delete data.