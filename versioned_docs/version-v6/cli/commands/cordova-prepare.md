---
title: "ionic cordova prepare"
sidebar_label: "cordova prepare"
---
<head>
  <title>Cordova Prepare: Copy iOS/Android Assets for Native Builds</title>
  <meta name="description" content="Ionic Cordova Prepare copies iOS and Android assets to Cordova platforms, preparing them for native builds. Read for examples and to learn more about usage." />
</head>



Copies assets to Cordova platforms, preparing them for native builds

```shell
$ ionic cordova prepare [platform] [options]
```

`ionic cordova prepare` will do the following:

- Perform an Ionic build, which compiles web assets to **www/**.
- Copy the **www/** directory into your Cordova platforms.
- Transform **config.xml** into platform-specific manifest files.
- Copy icons and splash screens from **resources/** to into your Cordova platforms.
- Copy plugin files into specified platforms.

You may wish to use `ionic cordova prepare` if you run your project with Android Studio or Xcode.

### platform
The platform you would like to prepare (e.g. `android`, `ios`)




### Options

 - `--no-build`: Do not invoke an Ionic build 
      
 - `--prod`: Flag to use the `production` configuration 
      


### Advanced Options

 - `--configuration=<conf>`: Specify the configuration to use (or `-c`)
      
 - `--source-map`: Output source maps 
      
 - `--watch`: Rebuild when files change 
      

## Examples

```shell
$ ionic cordova prepare 
$ ionic cordova prepare ios
$ ionic cordova prepare android
```
