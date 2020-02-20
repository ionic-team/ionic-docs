---
previousText: 'Environment Setup'
previousUrl: '/docs/installation/environment'
nextText: 'Android Setup'
nextUrl: '/docs/installation/android'
---

# iOS Setup

To target iOS, some additional environment setup is required. Unfortunately, iOS apps can only be created on macOS.

## Xcode

[Xcode](https://developer.apple.com/xcode/) is the IDE for creating native iOS apps. It includes the iOS SDK and Xcode command-line tools. Xcode can be [downloaded for free](https://developer.apple.com/download/) with an Apple account. It can also be installed through the App Store.

Once Xcode is installed, make sure the command-line tools are selected for use:

```shell
$ xcode-select --install
```

### Setting up a Development Team

All iOS apps must be code signed, even for development. Luckily, Xcode makes this easy with automatic code signing. The only prerequisite is an Apple ID.

Open Xcode and navigate to **Xcode** &raquo; **Preferences** &raquo; **Accounts**. Add an Apple ID if none are listed. Once logged in, a Personal Team will appear in the team list of the Apple ID.

![Xcode Accounts](/docs/assets/img/installation/ios-xcode-accounts.png)

### Creating an iOS Simulator

The iOS simulator emulates iOS devices on Macs. The following documentation is a quick way to get the iOS simulator set up. For more information, see [Apple's documentation](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/simulator_help_topics/Chapter/Chapter.html).

Open Xcode and navigate to **Window** &raquo; **Devices and Simulators**. Cree un simulador **iPhone 11** si no existe.

![iOS Simulators](/docs/assets/img/installation/ios-xcode-simulators-setup.png)

## Cordova Setup

Additional setup is required for Cordova to support programmatic builds. This section is not necessary for Capacitor.

### ios-sim & ios-deploy

The [`ios-sim`](https://github.com/ios-control/ios-sim) and [`ios-deploy`](https://github.com/ios-control/ios-deploy) are utilities that deploy apps to the iOS simulator and iOS devices during development. They can be installed globally with [npm](/docs/faq/glossary#npm).

```shell
$ npm install -g ios-sim
$ brew install ios-deploy
```