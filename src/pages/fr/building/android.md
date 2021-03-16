---
previousText: 'Exécution sur iOS'
previousUrl: '/docs/building/ios'
nextText: 'Réaliser des tests'
nextUrl: '/docs/building/testing'
---

# Développement sur Android

This guide covers how to run and debug Ionic apps on Android emulators and devices using [Capacitor](/docs/faq/glossary#capacitor) or [Cordova](/docs/faq/glossary#cordova).

> To develop for Android, make sure you have followed the [Android Environment Setup](/docs/installation/android).

## Configuration du projet

Avant que les applications puissent être déployées sur les simulateurs et les appareils Android, le projet natif doit être configuré.

1. **Générer le projet natif, si il n'existe pas déjà.**
    
    Pour Capacitor, exécutez :

    ```shell
    $ ionic capacitor add android
    ```

     Pour Cordova, exécutez :
    

    ```shell
    $ ionic cordova prepare android
    ```

2. **Définir l'[ID du package](/docs/faq/glossary#package-id).**
    
    For Capacitor, open the `capacitor.config.json` file and modify the `appId` property.
    
    For Cordova, open the `config.xml` file and modify the `id` attribute of the root element, `<widget>`. See [the Cordova documentation](https://cordova.apache.org/docs/en/latest/config_ref/#widget) for more information.

## Running with Capacitor

Capacitor uses Android Studio to build and run apps to simulators and devices.

1. **Develop the Ionic app and sync it to the native project.**
    
    With each meaningful change, Ionic apps must be built into web assets before the change can appear on Android simulators and devices. The web assets then must be copied into the native project. Luckily, this process is made easy with a single Ionic CLI command.

    ```shell
    $ ionic capacitor copy android
    ```

2. **In Android Studio, click the Run button and then select the target simulator or device.**

![Android Studio Run Button Area](/docs/assets/img/running/android-studio-run-button-area.png)

### Live reload

To start a live-reload server run the following command.

```shell
$ ionic capacitor run android -l --host=YOUR_IP_ADDRESS
```

When running on a device make sure the device and your development machine are connected to the same network.

## Running with Cordova

The Ionic CLI can build, copy, and deploy Ionic apps to Android simulators and devices with a single command. It can also spin up a development server, like the one used in `ionic serve`, to provide [live-reload](/docs/faq/glossary#livereload) functionality.

Run the following to start a long-running CLI process that boots up a live-reload server:

```shell
$ ionic cordova run android -l
```

Now, when changes are made to the app's source files, web assets are rebuilt and the changes are reflected on the simulator or device without having to deploy again.

## Debugging Android Apps

Once an app is running on an Android device or emulator, it can be debugged with Chrome DevTools.

### Using Chrome DevTools

Chrome has web developer tool support for Android simulators and devices. Go to `chrome://inspect` in Chrome while the simulator is running or a device is connected to the computer and **Inspect** the app that needs to be debugged.

> Make sure your application is running on the device or simulator, or it will not show up in the list.

![Android Chrome DevTools](/docs/assets/img/running/android-chrome-devtools.png)

### Viewing Native Logs

If running with Android Studio, native logs can be found in **Logcat**.

> If the **Logcat** window is hidden, you can enable it in **View** &raquo; **Tool Windows** &raquo; **Logcat**.

![Android Studio Logcat](/docs/assets/img/running/android-studio-logcat.png)

You can also access **Logcat** with [ADB](https://developer.android.com/studio/command-line/adb).

```shell
$ adb logcat
```