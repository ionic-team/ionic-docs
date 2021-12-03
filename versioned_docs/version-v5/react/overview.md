# Ionic React Overview

`@ionic/react` combines the core Ionic experience with the tooling and APIs that are tailored to React Developers.

:::note
The first official version of Ionic React is v4.11.
:::

First, install the Ionic CLI:

```shell
$ npm install -g @ionic/cli
```

then run:

```shell
$ ionic start myAppName
```

The CLI will guide you through the setup process by asking a couple of questions, including the framework to use (React, of course!) and the starter code template.

After the app has been created, launch the app:

```shell
ionic serve
```

Now, start building out the app using some of the [Ionic UI components](../components.md).

## React Version Support

Compatible with React version 16.8 and above.

## React Tooling

Ionic React projects are just like React projects, leveraging [react-dom](https://reactjs.org/docs/react-dom.html) and with setup normally found in a [Create React App (CRA)](https://github.com/facebook/create-react-app) app. For [routing and navigation](navigation.md), React Router is used under the hood.

One difference is the usage of [TypeScript](http://www.typescriptlang.org/), which provides a more productive experience. To use plain JavaScript, rename files to use a `.js` extension then remove any of the type annotations with each file.

## Native Tooling

[Capacitor](https://capacitor.ionicframework.com) is the official cross-platform app runtime used to make your `Ionic React` web app run natively on iOS, Android, Electron, and the web.

While there are no known technical limitations to using `Ionic React` with [Cordova](https://cordova.apache.org/) plugins, Capacitor is officially recommended. There are no plans to support a Cordova integration for `Ionic React` in the [Ionic CLI tooling](../cli.md) at this time. For more details, please [see here](https://capacitor.ionicframework.com/docs/cordova).
