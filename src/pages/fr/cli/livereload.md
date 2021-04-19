---
---

# Recharge en direct

Une option qui peut stimuler la productivité lors de la création d'applications Ionic est **Live Reload** (ou **live-reload**). Lorsqu'il est actif, Live Reload recharge le navigateur ou [Web View](/docs/core-concepts/webview) lorsque des changements sont détectés dans l'application. Ceci est particulièrement utile pour le développement à l'aide de dispositifs matériels.

## Modalités

Le Live Reload est un terme confondu. Avec `ionic serve`, Live Reload désigne simplement le rechargement du navigateur lorsque des modifications sont apportées. Live Reload peut également être utilisé avec Capacitor et Cordova pour offrir la même expérience sur les appareils virtuels et matériels, ce qui élimine la nécessité de redéployer un binaire natif.

## Utilisation

Étant donné que le chargement en direct exige que la vue Web charge votre application à partir d'une URL hébergée par votre ordinateur au lieu de lire simplement les fichiers sur le dispositif, la configuration du chargement en direct pour les dispositifs matériels peut être délicate.

Comme pour les déploiements réguliers de dispositifs, vous aurez besoin d'un câble pour connecter votre dispositif à votre ordinateur. La différence est que Ionic CLI configure la vue Web pour charger votre application depuis le serveur de développement sur votre ordinateur.

### Capacitor

Capacitor does not yet have a programmatic build for development (track [this issue](https://github.com/ionic-team/capacitor/issues/324) for progress), so the Ionic CLI does **not** automatically forward ports for iOS and Android.

To use Live Reload with Capacitor, make sure you're either using a virtual device or a hardware device connected to the same Wi-Fi network as your computer. Then, you'll need to specify that you want to use an external address for the dev server using the `--external` flag.

```shell
$ ionic capacitor run ios -l --external
$ ionic capacitor run android -l --external
```

> Remember, with the `--external` option, others on your Wi-Fi network will be able to access your app.

### Cordova

#### Android

For Android devices, the Ionic CLI will automatically forward the dev server port. This means you can use a `localhost` address and it will refer to your computer when loaded in the Web View, not the device.

The following all-in-one command will start a live-reload server on `localhost` and deploy the app to an Android device using Cordova:

```shell
$ ionic cordova run android -l
```

#### iOS

For iOS devices, port forwarding is not yet an option. This means you'll need to connect your device to the same Wi-Fi network as your computer and use an external address for the dev server.

> You can track [this issue](https://github.com/ionic-team/native-run/issues/20) for progress on iOS port forwarding with Ionic.

In some cases, the Ionic CLI won't know the address with which to configure the Web View, so you may be prompted to select one. Be sure to select the address of your computer on your Wi-Fi network.

The following all-in-one command will start a live-reload server on **all addresses** and deploy the app to an iOS device using Cordova:

```shell
$ ionic cordova run ios -l --external
```

> Remember, with the `--external` option, others on your Wi-Fi network will be able to access your app.

## Tips

- With Cordova, use the `--device`, `--emulator`, and `--target` options to narrow down target devices. Use the `--list` option to list all targets. See usage in the [command docs](/docs/cli/commands/cordova-run).
- You can separate the dev server process and the deploy process by using `ionic serve` and the `--livereload-url` option of `ionic cordova run` or `ionic capacitor run`.
- For Android, it is possible to configure [adb](https://developer.android.com/studio/command-line/adb) to always forward ports while the adb server is running (see `adb reverse`). With port forwarding set up, an external address would no longer be required. You can also setup the adb bridge over TCP such that subsequent deploys no longer need a USB cable.