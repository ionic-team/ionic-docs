---
---

# 热加载

开发Ionic应用时，提高生产力的其中一个办法是使用 **热加载**。 当激活热加载配置时，一旦应用被监测到改变，则浏览器或者[Web View](/docs/core-concepts/webview)将会重载。 尤其对于硬件设备，这种技术非常有用。

## 术语

热加载是一个复合术语。 使用`onic serve`，热加载只是在更改时会重新加载浏览器。 热加载也可以与Capacitor和Cordova一起在虚拟或者真机设备上提供同样的体验，它消除了重新部署二进制的必要性。

## 用法

由于热加载要求Web View从你的电脑托管的URL中加载你的应用程序，而不是只是在设备上读取文件，设置硬件设备的热加载可能是微妙的。

与正常设备部署一致，你需要线缆连接你的设备到计算机。 区别是Ionic CLI配置Web View从你的计算机的dev服务器加载你的应用程序。

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