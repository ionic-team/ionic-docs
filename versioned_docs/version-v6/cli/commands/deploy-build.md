---
title: "ionic deploy build"
sidebar_label: "deploy build"
---


:::warning
This command has been deprecated and will be removed in an upcoming major release of the Ionic CLI.
:::

Create a deploy build on Appflow

```shell
$ ionic deploy build [options]
```

This command creates a deploy build on Appflow. While the build is running, it prints the remote build log to the terminal. If the build is successful, it downloads the created web build zip file in the current directory. Downloading build artifacts can be skipped by supplying the flag `skip-download`.

Apart from `--commit`, every option can be specified using the full name setup within the Appflow [Dashboard](https://dashboard.ionicframework.com).

Customizing the build:
- The `--environment` and `--channel` options can be used to customize the groups of values exposed to the build.

### Options

 - `--environment=<name>`: The group of environment variables exposed to your build 
      
 - `--channel=<name>`: The channel you want to auto deploy the build to. This can be repeated multiple times if multiple channels need to be specified. 
      
 - `--skip-download`: Skip downloading build artifacts after command succeeds. 
      


### Advanced Options

 - `--commit=<sha1>`: Commit (defaults to HEAD) 
      

## Examples

```shell
$ ionic deploy build 
$ ionic deploy build --environment="My Custom Environment Name"
$ ionic deploy build --commit=2345cd3305a1cf94de34e93b73a932f25baac77c
$ ionic deploy build --channel="Master"
$ ionic deploy build --channel="Master" --skip-download
$ ionic deploy build --channel="Master" --channel="My Custom Channel"
```
