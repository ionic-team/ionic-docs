---
title: "ionic capacitor build"
sidebar_label: "capacitor build"
---
<head>
  <title>Ionic Capacitor Build for Apps - Documentation</title>
  <meta name="description" content="Build an Ionic project for a given platform. Once Ionic Capacitor Build copies web assets into the native platform, you can build your app using the native IDE." />
</head>



Build an Ionic project for a given platform

```shell
$ ionic capacitor build [platform] [options]
```

`ionic capacitor build` will do the following:
- Perform `ionic build`
- Copy web assets into the specified native platform
- Open the IDE for your native project (Xcode for iOS, Android Studio for Android)

Once the web assets and configuration are copied into your native project, you can build your app using the native IDE. Unfortunately, programmatically building the native project is not yet supported.

To configure your native project, see the common configuration [docs](https://capacitorjs.com/docs/basics/configuring-your-app) as well as low-level configuration for [iOS](https://capacitorjs.com/docs/ios/configuration) and [Android](https://capacitorjs.com/docs/android/configuration).

### platform
The platform to build for (e.g. `android`, `ios`)




### Options

 - `--no-build`: Do not invoke Ionic build 
      
 - `--no-open`: Do not invoke Capacitor open 
      
 - `--prod`: Flag to use the `production` configuration 
      


### Advanced Options

 - `--configuration=<conf>`: Specify the configuration to use (or `-c`)
      
 - `--source-map`: Output source maps 
      
 - `--watch`: Rebuild when files change 
      

## Examples

```shell
$ ionic capacitor build 
$ ionic capacitor build android
$ ionic capacitor build ios
```
