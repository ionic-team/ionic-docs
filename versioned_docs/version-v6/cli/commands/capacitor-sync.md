---
title: "ionic capacitor sync"
sidebar_label: "capacitor sync"
---
<head>
  <title>Ionic Capacitor Sync Command: Copy + Update Android/iOS Projects</title>
  <meta name="description" content="Sync (copy + update) an Android or iOS device project with Ionic Capacitor Sync. Read our documentation to learn more about this command on Ionic apps." />
</head>



Sync (copy + update) an Ionic project

```shell
$ ionic capacitor sync [platform] [options]
```

`ionic capacitor sync` will do the following:
- Perform an Ionic build, which compiles web assets
- Copy web assets to Capacitor native platform(s)
- Update Capacitor native platform(s) and dependencies
- Install any discovered Capacitor or Cordova plugins

### platform
The platform to sync (e.g. `android`, `ios`)




### Options

 - `--no-build`: Do not invoke an Ionic build 
      
 - `--prod`: Flag to use the `production` configuration 
      


### Advanced Options

 - `--configuration=<conf>`: Specify the configuration to use (or `-c`)
      
 - `--source-map`: Output source maps 
      
 - `--watch`: Rebuild when files change 
      
