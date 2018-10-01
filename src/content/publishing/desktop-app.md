---
previousText: 'Android Play Store'
previousUrl: 'docs/publishing/play-store'
---

# Desktop App

<p class="intro" markdown="1">
Building a desktop app with Ionic allows developers to reuse 100% of their code and ship a traditional desktop app while still having access to all the native device features, like push notifications. This guide assumes familiarity with Electron, and does not go into "how" to build an electron app. For that, check out the official <a href="https://electronjs.org/docs/tutorial/first-app" target="_blank">Electron guide</a>.
</p>

## macOS App

### Requirements

There are two hard requirements for publishing an app on the macOS app store

* Latest version of [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
* An active developer account ($100 through Apple's developer portal)

### Publishing

The Electron team has a detailed guide on how to publish an app for macOS. Please review [the docs here.](https://electronjs.org/docs/tutorial/mac-app-store-submission-guide)

## Windows App

### Requirements

There are two hard requirements for publishing an app on the Windows app store

* Windows 10 with Anniversary Update (released August 2nd, 2016)
* The Windows 10 SDK, [download here](https://developer.microsoft.com/en-us/windows/downloads/windows-10-sdk)
* Node
* electron-windows-store CLI

`electron-windows-store` can be installed via npm:

```shell
$ npm install -g electron-windows-store
```

### Publishing

Like macOS, Electron has a detailed guide on how to publish an app for Windows. Please review [the docs here](https://electronjs.org/docs/tutorial/windows-store-guide)

## Electron Build + Express
electron-builder is touted as "A complete solution to package and build a ready for distribution Electron app for macOS, Windows and Linux with “auto update” support out of the box." and it works just like that. The official Electron docs  force converting the base href value from '/' to './' which breaks the ionic app in other enviroments like iOS, Android, Web etc. Also the ionic app can support page reloads only when the wildcard route is also routed to the index.html file. So express.js is needed, but any nodejs server package can be used. Express is suggested merely due to it popularity.

### Requirements
- Install `electron-builder` and `electron` as dev dependencies
- Optionally, install `electron-updater` as dependency
- Optionally, install `get-port` as dependancy

### Express (Serving the App)
```
var express = require('express')
var e_app = express()
var path = require('path');
const getPort = require('get-port');


  getPort({port: [8000, 8080, 8888]}).then((port) => {
    e_app.use(express.static(__dirname + '/../www'));
    e_app.get('*', function(req, res){
      res.sendFile(path.join(__dirname + '/../www/index.html'));
    });
    e_app.listen(port)
```
### electron.js 
```
    let win
    autoUpdater.checkForUpdatesAndNotify()

    function createWindow () {
      win = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
          webSecurity: false
        }
      })
      win.loadURL('http://127.0.0.1:' + port)
      win.on('closed', () => {
        win = null
      })
    }

    app.on('ready', createWindow)

    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit()
      }
    })

    app.on('activate', () => {
      if (win === null) {
        createWindow()
      }
    })
```
### Building
This is a 3 step configuration with a lot of variables that are detailed in the [official electron-builder site](https://electron.build).
- Build the Ionic App to get the production output
```
ionic build --aot --minifyjs --minifycss --optimizejs --prod
```
- Confiure the package.json file's build variable
```
"build": {
    "appId": "com.ionic.demoapp.platform",
    "asar": true,
    "compression": "store",
    "win": {
      "target": "nsis",
      "icon": "resources/icon.png",
      "legalTrademarks": "Copyright © 2018 XYZ Company"
    }
  }
```
- Execute electron-builder
```
node_modules/.bin/electron-builder build -w
node_modules/.bin/electron-builder build -m
node_modules/.bin/electron-builder build -l
```

This guide is just an intro. Please refer to the electron-builder docs for more detailed info.
