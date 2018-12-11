---
previousText: 'Running Overview'
previousUrl: '/docs/building/running'
nextText: 'Running on Android'
nextUrl: '/docs/building/android'
---

# iOS Development

<p class="intro">
This guide covers how to deploy Ionic apps to iOS simulators and devices using [Capacitor](/docs/faq/glossary#capacitor) or [Cordova](/docs/faq/glossary#cordova).
</p>

<p class="intro">
There are two workflows for running Ionic apps on iOS: [Running with Xcode](#running-with-xcode) and [Running with the Ionic CLI](#running-with-the-ionic-cli). The Xcode approach is generally more stable, but the Ionic CLI approach offers [live-reload](/docs/faq/glossary#livereload) functionality.
</p>

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

1. <strong>Set the [Package ID](/docs/faq/glossary#package-id).</strong>

    For Capacitor, open the `capacitor.config.json` file and modify the `appId` property.

    For Cordova, open the `config.xml` file and modify the `id` attribute of the root element, `<widget>`. See [the Cordova documentation](https://cordova.apache.org/docs/en/latest/config_ref/#widget) for more information.

1. <strong>Open the project in <b>Xcode</b>.</strong>

    For Capacitor, run the following to open the app in Xcode:

    ```shell
    $ ionic capacitor open ios
    ```

    For Cordova, open Xcode. Use **File** &raquo; **Open** and locate the app. Open the app's `platforms/ios` directory.

1. <strong>In <b>Project navigator</b>, select the project root to open the project editor. Under the **Identity** section, verify that the Package ID that was set matches the Bundle Identifier.</strong>

    ![Xcode Identity Setup](/docs/assets/img/running/ios-xcode-identity-setup.png)

1. <strong>In the same project editor, under the <b>Signing</b> section, ensure <b>Automatically manage signing</b> is enabled.</strong> Then, select a Development Team. Given a Development Team, Xcode will attempt to automatically prepare provisioning and signing.

    ![Xcode Signing Setup](/docs/assets/img/running/ios-xcode-signing-setup.png)

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

## Running with the Ionic CLI

The Ionic CLI can build, copy, and deploy Ionic apps to iOS simulators and devices with a single command. It can also spin up a development server, like the one used in `ionic serve`, to provide [live-reload](/docs/faq/glossary#livereload) functionality.

For Cordova, run the following to start a long-running CLI process that boots up a live-reload server:

```shell
$ ionic cordova run ios -l
```

Now, when changes are made to the app's source files, web assets are rebuilt and the changes are reflected on the simulator or device without having to deploy again.

## Using Safari Web Inspector

Safari has Web Inspector support for iOS simulators and devices. Open the **Develop** menu and select the simulator or device, then select the Ionic App to open Web Inspector. If the **Develop** menu is hidden, enable it in **Safari** &raquo; **Preferences** &raquo; **Advanced**.

![Safari Web Inspector](/docs/assets/img/running/ios-safari-web-inspector-timelines.png)

## Viewing Native Logs

Native logs can be found in Xcode in the **Console**. If hidden, enable the Console in **View** &raquo; **Debug Area** &raquo; **Activate Console**.

![Xcode Console](/docs/assets/img/running/ios-xcode-console.png)
