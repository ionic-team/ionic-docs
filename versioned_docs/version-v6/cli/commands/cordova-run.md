---
title: "ionic cordova run"
sidebar_label: "cordova run"
---
<head>
  <title>ionic cordova run: native-run Android and iOS Apps in Browsers</title>
  <meta name="description" content="Build your app and deploy it to devices and emulators using ionic cordova run. Use the native-run utility to run your app in an Android or iOS device browser." />
</head>



Run an Ionic project on a connected device

```shell
$ ionic cordova run [platform] [options]
```

Build your app and deploy it to devices and emulators using this command. Optionally specify the `--livereload` option to use the dev server from `ionic serve` for livereload functionality.

This command will first use `ionic build` to build web assets (or `ionic serve` with the `--livereload` option). Then, `cordova build` is used to compile and prepare your app. Finally, the `native-run` [utility](https://github.com/ionic-team/native-run) is used to run your app on a device. To use Cordova for this process instead, use the `--no-native-run` option.

If you have multiple devices and emulators, you can target a specific one with the `--target` option. You can list targets with `--list`.

For Android and iOS, you can setup Remote Debugging on your device with browser development tools using these [docs](https://ionicframework.com/docs/developer-resources/developer-tips).

When using `--livereload` with hardware devices, remember that livereload needs an active connection between device and computer. In some scenarios, you may need to host the dev server on an external address using the `--external` option. See these [docs](https://ionicframework.com/docs/cli/livereload) for more information.

Just like with `ionic cordova build`, you can pass additional options to the Cordova CLI using the `--` separator. To pass additional options to the dev server, consider using `ionic serve` separately and using the `--livereload-url` option.

### platform
The platform to run (e.g. `android`, `ios`)




### Options

 - `--ssl`: Use HTTPS for the dev server 
      
 - `--list`: List all available targets 
      
 - `--no-build`: Do not invoke Ionic build 
      
 - `--external`: Host dev server on all network interfaces (i.e. `--host=0.0.0.0`) 
      
 - `--livereload`: Spin up dev server to live-reload www files (or `-l`)
      
 - `--livereload-url=<url>`: Provide a custom URL to the dev server 
      
 - `--prod`: Flag to use the `production` configuration 
      
 - `--debug`: Mark as a debug build 
      
 - `--release`: Mark as a release build 
      
 - `--device`: Deploy build to a device 
      
 - `--emulator`: Deploy build to an emulator 
      
 - `--no-native-run`: Do not use `native-run` to run the app; use Cordova instead 
      
 - `--connect`: Tie the running app to the process 
      


### Advanced Options

 - `--consolelogs`: Print app console logs to the terminal 
      
 - `--consolelogs-port=<port>`: Use specific port for console logs server 
      
 - `--host=<host>`: Use specific host for the dev server 
      
 - `--port=<port>`: Use specific port for the dev server (or `-p`)
      
 - `--public-host=<host>`: The host used for the browser or web view 
      
 - `--configuration=<conf>`: Specify the configuration to use (or `-c`)
      
 - `--source-map`: Output source maps 
      
 - `--buildConfig=<file>`: Use the specified build configuration 
      
 - `--target=<target>`: Deploy build to a device (use `--list` to see all) 
      
 - `--json`: Output targets in JSON 
      

## Examples

```shell
$ ionic cordova run android
$ ionic cordova run android --buildConfig=build.json
$ ionic cordova run android --prod --release -- -- --gradleArg=-PcdvBuildMultipleApks=true
$ ionic cordova run android --prod --release -- -- --keystore=filename.keystore --alias=myalias
$ ionic cordova run android --prod --release -- -- --minSdkVersion=21
$ ionic cordova run android --prod --release -- -- --versionCode=55
$ ionic cordova run android --prod --release --buildConfig=build.json
$ ionic cordova run android -l
$ ionic cordova run ios
$ ionic cordova run ios --buildConfig=build.json
$ ionic cordova run ios --livereload --external
$ ionic cordova run ios --livereload-url=http://localhost:8100
$ ionic cordova run ios --prod --release
$ ionic cordova run ios --prod --release -- --developmentTeam="ABCD" --codeSignIdentity="iPhone Developer" --packageType="app-store"
$ ionic cordova run ios --prod --release --buildConfig=build.json
```
