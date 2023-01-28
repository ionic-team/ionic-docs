---
title: "ionic config set"
sidebar_label: "config set"
---
<head>
  <title>ionic config set: App Command to Write Configuration Values</title>
  <meta name="description" content="ionic config sets config values on Ionic apps. This command writes configuration values to the project's ./ionic.config.json file. Read to learn more." />
</head>



Set config values

```shell
$ ionic config set [property] [value] [options]
```

This command writes configuration values to the project's **./ionic.config.json** file. It can also operate on the global CLI configuration (**~/.ionic/config.json**) using the `--global` option.

For nested properties, separate nest levels with dots. For example, the property name `integrations.cordova` will look in the **integrations** object for the **cordova** property.

For multi-app projects, this command is scoped to the current project by default. To operate at the root of the project configuration file instead, use the `--root` option.

This command will attempt to coerce `value` into a suitable JSON type. If it is JSON-parsable, such as `123`, `true`, `[]`, etc., then it takes the parsed result. Otherwise, the value is interpreted as a string. For stricter input, use `--json`, which will error with non-JSON values.

By default, if `property` exists and is an object or an array, the value is not overwritten. To disable this check and always overwrite the property, use `--force`.

### property
The property name you wish to set


### value
The new value of the given property




### Options

 - `--global`: Use global CLI config (or `-g`)
      


### Advanced Options

 - `--json`: Always interpret `value` as JSON 
      
 - `--force`: Always overwrite existing values 
      
 - `--root`: Operate on root of **./ionic.config.json** 
      

## Examples

```shell
$ ionic config set name newAppName
$ ionic config set name "\"newAppName\"" --json
$ ionic config set -g interactive false
```
