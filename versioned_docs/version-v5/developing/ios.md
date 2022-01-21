---
sidebar_label: Developing for iOS
skipIntros: true
---

# iOS Development

This guide covers how to run and debug Ionic apps on iOS simulators and devices using [Capacitor](../reference/glossary.md#capacitor) or [Cordova](../reference/glossary.md#cordova). iOS apps can only be developed on macOS with Xcode installed.

There are two workflows for running Ionic apps on iOS:

- [Running with Xcode](#running-with-xcode)
- [Running with the Ionic CLI](#running-with-the-ionic-cli)

The Xcode approach is generally more stable, but the Ionic CLI approach offers [live-reload](../reference/glossary.md#livereload) functionality.

## Xcode Setup

[Xcode](https://developer.apple.com/xcode/) is the IDE for creating native iOS apps. It includes the iOS SDK and Xcode command-line tools. Xcode can be [downloaded for free](https://developer.apple.com/download/) with an Apple account or it can be installed through the App Store.

Once Xcode is installed, make sure the command-line tools are selected for use:

```shell
$ xcode-select --install
```

### Setting up a Development Team

All iOS apps must be code signed, even for development. Luckily, Xcode makes this easy with automatic code signing. The only prerequisite is an Apple ID.

Open Xcode and navigate to **Xcode** &raquo; **Preferences** &raquo; **Accounts**. Add an Apple ID if none are listed. Once logged in, a Personal Team will appear in the team list of the Apple ID.

![Xcode Accounts](/img/installation/ios-xcode-accounts.png)

### Creating an iOS Simulator

The iOS simulator emulates iOS devices on Macs. The following documentation is a quick way to get the iOS simulator set up. For more information, see [Apple's documentation](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/simulator_help_topics/Chapter/Chapter.html).

Open Xcode and navigate to **Window** &raquo; **Devices and Simulators**. Create an **iPhone 11** simulator if one does not already exist.

![iOS Simulators](/img/installation/ios-xcode-simulators-setup.png)

## Cordova Setup

Additional setup is required for Cordova to support programmatic builds. This section is not necessary for Capacitor.

### ios-sim & ios-deploy

The [`ios-sim`](https://github.com/ios-control/ios-sim) and [`ios-deploy`](https://github.com/ios-control/ios-deploy) are utilities that deploy apps to the iOS simulator and iOS devices during development. They can be installed globally with [npm](../reference/glossary.md#npm).

```shell
$ npm install -g ios-sim
$ brew install ios-deploy
```

## Project Setup

Before apps can be deployed to iOS simulators and devices, the native project must be configured.

1. <strong>Generate the native project, if it does not already exist.</strong>

   For Capacitor, run the following:

   ```shell
   $ ionic capacitor add ios
   ```

   For Cordova, run the following:

   ```shell
   $ ionic cordova prepare ios
   ```

1. <strong>Set the [Package ID](../reference/glossary.md#package-id).</strong>

   For Capacitor, open the `capacitor.config.json` file and modify the `appId` property.

   For Cordova, open the `config.xml` file and modify the `id` attribute of the root element, `<widget>`. See [the Cordova documentation](https://cordova.apache.org/docs/en/latest/config_ref/#widget) for more information.

1. <strong>
     Open the project in <b>Xcode</b>.
   </strong>

   For Capacitor, run the following to open the app in Xcode:

   ```shell
   $ ionic capacitor open ios
   ```

   For Cordova, open Xcode. Use **File** &raquo; **Open** and locate the app. Open the app's `platforms/ios` directory.

1. <strong>
     In <b>Project navigator</b>, select the project root to open the project editor. Under the **Identity** section,
     verify that the Package ID that was set matches the Bundle Identifier.
   </strong>

   ![Xcode Identity Setup](/img/running/ios-xcode-identity-setup.png)

1. <strong>
     In the same project editor, under the <b>Signing</b> section, ensure <b>Automatically manage signing</b> is
     enabled.
   </strong> Then, select a Development Team. Given a Development Team, Xcode will attempt to automatically prepare provisioning
   and signing.

   ![Xcode Signing Setup](/img/running/ios-xcode-signing-setup.png)

## Running with Xcode

In this workflow, Xcode can automatically fix common compilation and signing issues that can occur.

1. <strong>Develop the Ionic app and sync it to the native project.</strong>

   With each meaningful change, Ionic apps must be built into web assets before the change can appear on iOS simulators and devices. The web assets then must be copied into the native project. Luckily, this process is made easy with a single Ionic CLI command.

   For Capacitor, run the following:

   ```shell
   $ ionic capacitor copy ios
   ```

   For Cordova, run the following:

   ```shell
   $ ionic cordova prepare ios
   ```

1. <strong>In Xcode, select a target simulator or device and click the play button.</strong>

   ![Xcode Play Button Area](/img/running/ios-xcode-play-button-area.png)

## Running with the Ionic CLI

The Ionic CLI can build, copy, and deploy Ionic apps to iOS simulators and devices with a single command. It can also spin up a development server, like the one used in `ionic serve`, to provide [live-reload](../reference/glossary.md#livereload) functionality.

With live-reload, changes made to the app's source files trigger a rebuild of web assets and the changes are reflected on the simulator or device without having to deploy again.

:::caution
For iOS devices, the device and the computer need to be on the same Wi-Fi network. An external URL for the dev server is also required so the device can connect to it. Use `--external` (or `--host=0.0.0.0`) to bind to external addresses.
:::

### Live-reload with Capacitor

Capacitor does not yet have a way to build native projects. It relies on Xcode to build and deploy app binaries. However, the Ionic CLI can boot up a live-reload server and configure Capacitor to use it with a single command.

Run the following, then select a target simulator or device and click the play button in Xcode:

```shell
$ ionic capacitor run ios -l --external
```

### Live-reload with Cordova

Cordova can build and deploy native projects programmatically.

To boot up a live-reload server, build, and deploy the app, run the following:

```shell
$ ionic cordova run ios -l --external
```

## Debugging iOS Apps

Once an app is running on an iOS device or simulator, it can be debugged in Safari.

### Using Safari Web Inspector

Safari has Web Inspector support for iOS simulators and devices. Open the **Develop** menu and select the simulator or device, then select the Ionic App to open Web Inspector.

:::note
If the **Develop** menu is hidden, enable it in **Safari** &raquo; **Preferences** &raquo; **Advanced** &raquo; **Show Develop menu in menu bar**.

If the app isn't listed, the Web Inspector may need to be enabled on the device in **Settings** &raquo; **Safari** &raquo; **Advanced** &raquo; **Web Inspector**.
:::

![Safari Web Inspector](/img/running/ios-safari-web-inspector-timelines.png)

### Viewing Native Logs

If running with Xcode, native logs can be found in the Xcode **Console**.

:::note
If the **Console** is hidden, enable it in **View** &raquo; **Debug Area** &raquo; **Activate Console**.
:::

![Xcode Console](/img/running/ios-xcode-console.png)
