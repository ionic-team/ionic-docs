---
title: "ionic integrations enable"
sidebar_label: "integrations enable"
---




Add & enable integrations to your app

```shell
$ ionic integrations enable [name] [options]
```

Integrations, such as Cordova, can be enabled with this command. If the integration has never been added to the project, `ionic integrations enable` will download and add the integration.

Integrations can be re-added with the `--add` option.

### name
The integration to enable (e.g. `capacitor`, `cordova`, `enterprise`)




### Options

 - `--add`: Download and add the integration even if enabled 
      
 - `--root=<path>`: Specify an alternative destination to download into when adding 
      
 - `--quiet`: Less verbose output, ignore integration errors 
      
