---
title: "ionic package deploy"
sidebar_label: "package deploy"
---


:::warning
This command has been deprecated and will be removed in an upcoming major release of the Ionic CLI.
:::

Deploys a binary to a destination, such as an app store using Appflow

```shell
$ ionic package deploy [build-id] [destination]
```

This command deploys a binary to a destination using Appflow. While running, the remote log is printed to the terminal.

The command takes two parameters: the numeric ID of the package build that previously created the binary and the name of the destination where the binary is going to be deployed.
Both can be retrieved from the [Dashboard](https://dashboard.ionicframework.com).

### build-id
The build id of the desired successful package build


### destination
The destination to deploy the build artifact to the app store



## Examples

```shell
$ ionic package deploy 123456789 "My app store destination"
```
