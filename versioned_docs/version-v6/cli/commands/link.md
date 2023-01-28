---
title: "ionic link"
sidebar_label: "link"
---
<head>
  <title>Link Command: Use Appflow to Connect Local Apps to Ionic</title>
  <meta name="description" content="Link apps on Appflow to local Ionic projects with this command. Learn more about how to connect local apps to Ionic using the link command." />
</head>



Connect local apps to Ionic

```shell
$ ionic link [id]
```

Link apps on Appflow to local Ionic projects with this command.

If the `id` argument is excluded, this command will prompt you to select an app from Appflow.

Appflow uses a git-based workflow to manage app updates. During the linking process, select **GitHub** (recommended) or **Appflow** as a git host. See our [documentation](https://ionicframework.com/docs/appflow/basics/git) for more information.

Ultimately, this command sets the **id** property in **./ionic.config.json**, which marks this app as linked.

If you are having issues linking, please get in touch with our [Support](https://ion.link/support-request).

### id
The Appflow ID of the app to link (e.g. `a1b2c3d4`)



## Examples

```shell
$ ionic link 
$ ionic link a1b2c3d4
```
