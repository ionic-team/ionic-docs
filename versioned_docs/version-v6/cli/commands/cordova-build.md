---
title: "ionic cordova build"
sidebar_label: "cordova build"
---
<head>
  <title>Ionic Cordova Build for Android and iOS Platform Builds</title>
  <meta name="description" content="Like running Cordova Build directly, Ionic Cordova Build also builds web assets from Ionic Build and provides friendly checks for Android and iOS platforms." />
</head>



Use Cordova to build for Android and iOS platform targets

```shell
$ ionic cordova build [platform] [options]
```

Like running `cordova build` directly, `ionic cordova build` also builds web assets from `ionic build` and provides friendly checks for Android and iOS platforms.

To pass additional options to the Cordova CLI, use the `--` separator after the Ionic CLI arguments.

The Cordova CLI requires a separator for platform-specific arguments for Android [builds](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#using-flags), so an additional separator is required for the Ionic CLI, but it is not required for iOS [builds](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html#using-flags). See the example commands for usage with separators. To avoid using flags, consider using `--buildConfig` with a **build.json** file.

### platform
The platform to build (e.g. `android`, `ios`)




### Options

 - `--no-build`: Do not invoke an Ionic build 
      
 - `--debug`: Mark as a debug build 
      
 - `--release`: Mark as a release build 
      
 - `--device`: Deploy build to a device 
      
 - `--emulator`: Deploy build to an emulator 
      
 - `--prod`: Flag to use the `production` configuration 
      


### Advanced Options

 - `--buildConfig=<file>`: Use the specified build configuration 
      
 - `--configuration=<conf>`: Specify the configuration to use (or `-c`)
      
 - `--source-map`: Output source maps 
      

## Examples

```shell
$ ionic cordova build android
$ ionic cordova build android --buildConfig=build.json
$ ionic cordova build android --prod --release -- -- --gradleArg=-PcdvBuildMultipleApks=true
$ ionic cordova build android --prod --release -- -- --keystore=filename.keystore --alias=myalias
$ ionic cordova build android --prod --release -- -- --minSdkVersion=21
$ ionic cordova build android --prod --release -- -- --versionCode=55
$ ionic cordova build android --prod --release --buildConfig=build.json
$ ionic cordova build ios
$ ionic cordova build ios --buildConfig=build.json
$ ionic cordova build ios --prod --release
$ ionic cordova build ios --prod --release -- --developmentTeam="ABCD" --codeSignIdentity="iPhone Developer" --packageType="app-store"
$ ionic cordova build ios --prod --release --buildConfig=build.json
```
