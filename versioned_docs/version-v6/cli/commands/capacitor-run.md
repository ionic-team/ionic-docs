---
title: "ionic capacitor run"
sidebar_label: "capacitor run"
---




Run an Ionic project on a connected device

```shell
$ ionic capacitor run [platform] [options]
```

`ionic capacitor run` will do the following:
- Perform `ionic build` (or run the dev server from `ionic serve` with the `--livereload` option)
- Run `capacitor run` (or open IDE for your native project with the `--open` option)

When using `--livereload` with hardware devices, remember that livereload needs an active connection between device and computer. In some scenarios, you may need to host the dev server on an external address using the `--external` option. See these [docs](https://ionicframework.com/docs/cli/livereload) for more information.

If you have multiple devices and emulators, you can target a specific one by ID with the `--target` option. You can list targets with `--list`.

For Android and iOS, you can setup Remote Debugging on your device with browser development tools using these [docs](https://ionicframework.com/docs/developer-resources/developer-tips).

### platform
The platform to run (e.g. `android`, `ios`)




### Options

 - `--list`: List all available targets 
      
 - `--target=<target>`: Deploy to a specific device by its ID (use `--list` to see all) 
      
 - `--open`: Open native IDE instead of using `capacitor run` 
      
 - `--no-build`: Do not invoke Ionic build 
      
 - `--external`: Host dev server on all network interfaces (i.e. `--host=0.0.0.0`) 
      
 - `--livereload`: Spin up dev server to live-reload www files (or `-l`)
      
 - `--livereload-url=<url>`: Provide a custom URL to the dev server 
      
 - `--prod`: Flag to use the `production` configuration 
      


### Advanced Options

 - `--host=<host>`: Use specific host for the dev server 
      
 - `--port=<port>`: Use specific port for the dev server (or `-p`)
      
 - `--public-host=<host>`: The host used for the browser or web view 
      
 - `--configuration=<conf>`: Specify the configuration to use (or `-c`)
      
 - `--source-map`: Output source maps 
      
 - `--watch`: Rebuild when files change 
      

## Examples

```shell
$ ionic capacitor run 
$ ionic capacitor run android
$ ionic capacitor run android -l --external
$ ionic capacitor run ios --livereload --external
$ ionic capacitor run ios --livereload-url=http://localhost:8100
```
