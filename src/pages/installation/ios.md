---
previousText: 'Environment Setup'
previousUrl: '/docs/installation/environment'
nextText: 'Android Setup'
nextUrl: '/docs/installation/android'
---

# iOS Setup

To target iOS, some additional environment setup is required. Unfortunately, iOS apps can only be created on macOS.

## Xcode

<a href="https://developer.apple.com/xcode/" target="_blank">Xcode</a> is the IDE for creating native iOS apps. It includes the iOS SDK and Xcode command-line tools. Xcode can be <a href="https://developer.apple.com/download/" target="_blank">downloaded for free</a> with an Apple account. It can also be installed through the App Store.

### Setting up a Development Team

All iOS apps must be code signed, even for development. Luckily, Xcode makes this easy with automatic code signing. The only prerequisite is an Apple ID.

Open Xcode and navigate to **Xcode** &raquo; **Preferences** &raquo; **Accounts**. Add an Apple ID if none are listed. Once logged in, a Personal Team will appear in the team list of the Apple ID.

![Xcode Accounts](/docs/assets/img/installation/ios-xcode-accounts.png)

### Creating an iOS Simulator

The iOS simulator emulates iOS devices on Macs. The following documentation is a quick way to get the iOS simulator set up. For more information, see <a href="https://developer.apple.com/library/content/documentation/IDEs/Conceptual/simulator_help_topics/Chapter/Chapter.html" target="_blank">Apple's documentation</a>.

Open Xcode and navigate to **Window** &raquo; **Devices and Simulators**. Create an **iPhone X** simulator if one does not already exist.

![iOS Simulators](/docs/assets/img/installation/ios-xcode-simulators-setup.png)

## ios-sim & ios-deploy

The <a href="https://github.com/phonegap/ios-sim" target="_blank">`ios-sim`</a> and <a href="https://github.com/phonegap/ios-deploy" target="_blank">`ios-deploy`</a> are utilities that deploy apps to the iOS simulator and iOS devices during development. They can be installed globally with [npm](/docs/faq/glossary#npm).

```shell
$ npm install -g ios-sim
$ npm install -g ios-deploy
```
