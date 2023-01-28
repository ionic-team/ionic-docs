---
title: "ionic cordova plugin"
sidebar_label: "cordova plugin"
---
<head>
  <title>Install Ionic Cordova Plugin to Manage Updates and Plugin List</title>
  <meta name="description" content="Install the Ionic Cordova plugin to manage your list of Cordova plugins and all inputs, updates, and more. Read to learn more about the Ionic Cordova plugin." />
</head>



Manage Cordova plugins

```shell
$ ionic cordova plugin [action] [plugin] [options]
```

Like running `cordova plugin` directly, but provides friendly checks.

### action
`add` or `remove` a plugin; `ls` or `save` all project plugins


### plugin
The name of the plugin (corresponds to `add` and `remove`)




### Options

 - `--variable=<KEY=VALUE>`: Specify plugin variables 
      


### Advanced Options

 - `--force`: Force overwrite the plugin if it exists (corresponds to `add`) 
      

## Examples

```shell
$ ionic cordova plugin 
$ ionic cordova plugin add cordova-plugin-inappbrowser@latest
$ ionic cordova plugin add phonegap-plugin-push --variable SENDER_ID=XXXXX
$ ionic cordova plugin rm cordova-plugin-camera
```
