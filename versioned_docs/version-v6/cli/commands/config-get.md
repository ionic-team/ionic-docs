---
title: "ionic config get"
sidebar_label: "config get"
---




Print config values

```shell
$ ionic config get [property] [options]
```

This command reads and prints configuration values from the project's **./ionic.config.json** file. It can also operate on the global CLI configuration (**~/.ionic/config.json**) using the `--global` option.

For nested properties, separate nest levels with dots. For example, the property name `integrations.cordova` will look in the **integrations** object for the **cordova** property.

Without a `property` argument, this command prints out the entire config.

For multi-app projects, this command is scoped to the current project by default. To operate at the root of the project configuration file instead, use the `--root` option.

If you are using this command programmatically, you can use the `--json` option.

This command will sanitize config output for known sensitive fields (disabled when using `--json`).

### property
The property name you wish to get




### Options

 - `--global`: Use global CLI config (or `-g`)
      


### Advanced Options

 - `--json`: Output config values in JSON 
      
 - `--root`: Operate on root of **./ionic.config.json** 
      

## Examples

```shell
$ ionic config get 
$ ionic config get id
$ ionic config get --global user.email
$ ionic config get -g npmClient
```
