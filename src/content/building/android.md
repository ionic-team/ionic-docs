---
previousText: 'Running on iOS'
previousUrl: '/docs/building/ios'
nextText: 'Testing'
nextUrl: '/docs/building/testing'
---

# Android Development

<p class="intro">
This guide covers how to deploy Ionic apps to Android simulators and devices using [Capacitor](/docs/faq/glossary#capacitor) or [Cordova](/docs/faq/glossary#cordova).
</p>

> To deploy apps to an Android device and debug them, developer mode must be enabled and allow for USB debugging turned on. Check out <a href="https://developer.android.com/studio/debug/dev-options#enable" target="_blank">these instructions</a> to do this on a device.

## Project Setup

Before apps can be deployed to Android simulators and devices, the native project must be configured.

1. Generate the native project, if it does not already exist.

    For Capacitor, run the following:

    ```shell
    $ ionic capacitor add android
    ```

    For Cordova, run the following:

    ```shell
    $ ionic cordova prepare android
    ```

2. Set the [Package ID](/docs/faq/glossary#package-id).

    For Capacitor, open the `capacitor.config.json` file and modify the `appId` property.

    For Cordova, open the `config.xml` file and modify the `id` attribute of the root element, `<widget>`. See [the Cordova documentation](https://cordova.apache.org/docs/en/latest/config_ref/#widget) for more information.


## Running with Capacitor

Capacitor uses Android Studio to build and run apps to simulators and devices.

1. Develop the Ionic app and sync it to the native project.

    With each meaningful change, Ionic apps must be built into web assets before the change can appear on Android simulators and devices. The web assets then must be copied into the native project. Luckily, this process is made easy with a single Ionic CLI command.

    ```shell
    $ ionic capacitor copy android
    ```

2. In Android Studio, select a target simulator or device and click the run button.

## Running with Cordova

The Ionic CLI can build, copy, and deploy Ionic apps to Android simulators and devices with a single command. It can also spin up a development server, like the one used in `ionic serve`, to provide [live-reload](/docs/faq/glossary#livereload) functionality.

Run the following to start a long-running CLI process that boots up a live-reload server:

```shell
$ ionic cordova run android -l
```

Now, when changes are made to the app's source files, web assets are rebuilt and the changes are reflected on the simulator or device without having to deploy again.

## Using Chrome DevTools to debug

Chrome has devtools support for Android simulators and devices. Go to `chrome://inspect` in Chrome while the simulator is running or a device is connected to the computer and select the app that needs to be debugged.

## Viewing Native Logs

Native logs can be found in Android Studio in the **Console**.
