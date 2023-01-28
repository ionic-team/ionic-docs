---
title: "ionic config unset"
sidebar_label: "config unset"
---




Delete config values

```shell
$ ionic config unset [property] [options]
```

This command deletes configuration values from the project's **./ionic.config.json** file. It can also operate on the global CLI configuration (**~/.ionic/config.json**) using the `--global` option.

For nested properties, separate nest levels with dots. For example, the property name `integrations.cordova` will look in the **integrations** object for the **cordova** property.

For multi-app projects, this command is scoped to the current project by default. To operate at the root of the project configuration file instead, use the `--root` option.

### property
The property name you wish to delete




### Options

 - `--global`: Use global CLI config (or `-g`)
      


### Advanced Options

 - `--root`: Operate on root of **./ionic.config.json** 
      

## Examples

```shell
$ ionic config unset 
$ ionic config unset type
$ ionic config unset --global git.setup
$ ionic config unset -g interactive
```
