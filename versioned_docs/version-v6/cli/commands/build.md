---
title: "ionic build"
sidebar_label: "build"
---
<head>
  <title>Angular NG Build Configuration to Build Ionic Apps | ionic build</title>
  <meta name="description" content="Build web assets and prepare your Ionic app for any platform targets. Ionic build uses the Angular CLI—see the ng build docs for how to use the configuration." />
</head>



Build web assets and prepare your app for any platform targets

```shell
$ ionic build [options]
```

`ionic build` will perform an Ionic build, which compiles web assets and prepares them for deployment.

`ionic build` uses the Angular CLI. Use `ng build --help` to list all Angular CLI options for building your app. See the `ng build` [docs](https://angular.io/cli/build) for explanations. Options not listed below are considered advanced and can be passed to the `ng` CLI using the `--` separator after the Ionic CLI arguments. See the examples.

### Options

 - `--prod`: Flag to use the `production` configuration 
      


### Advanced Options

 - `--configuration=<conf>`: Specify the configuration to use (or `-c`)
      
 - `--source-map`: Output source maps 
      
 - `--watch`: Rebuild when files change 
      
 - `--engine=<engine>`: Target engine (e.g. `browser`, `cordova`) 
      
 - `--platform=<platform>`: Target platform on chosen engine (e.g. `ios`, `android`) 
      

## Examples

```shell
$ ionic build 
$ ionic build --prod
$ ionic build --watch
```
