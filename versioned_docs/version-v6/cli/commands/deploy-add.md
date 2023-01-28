---
title: "ionic deploy add"
sidebar_label: "deploy add"
---




Adds Appflow Deploy to the project

```shell
$ ionic deploy add [options]
```

This command adds the Appflow Deploy plugin (`cordova-plugin-ionic`) for both Capacitor and Cordova projects.

For Capacitor projects it runs all the steps necessary to install the plugin, sync with the native projects and add the configuration to the proper iOS and Android configuration files.

For Cordova projects it just takes care of running the proper Cordova CLI command with the submitted parameters.

### Options

 - `--app-id=<id>`: Your Appflow app ID 
      
 - `--channel-name=<name>`: The channel to check for updates from 
      
 - `--update-method=<name>`: The update method that dictates the behavior of the plugin 
      


### Advanced Options

 - `--max-store=<quantity>`: The maximum number of downloaded versions to store on the device 
      
 - `--min-background-duration=<seconds>`: The minimum duration after which the app checks for an update in the background 
      

## Examples

```shell
$ ionic deploy add 
$ ionic deploy add --app-id=abcd1234 --channel-name="Master" --update-method=background
$ ionic deploy add --max-store=2 --min-background-duration=30
$ ionic deploy add --app-id=abcd1234 --channel-name="Master" --update-method=background --max-store=2 --min-background-duration=30
```
