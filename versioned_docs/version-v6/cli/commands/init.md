---
title: "ionic init"
sidebar_label: "init"
---
<head>
  <title>ionic init: Command to Initialize Existing Ionic App Projects</title>
  <meta name="description" content="The ionic init command will initialize an Ionic app within the current directory. Read our documentation on how to initialize existing projects with Ionic." />
</head>



Initialize existing projects with Ionic

```shell
$ ionic init [name] [options]
```

This command will initialize an Ionic app within the current directory. Usually, this means an `ionic.config.json` file is created. If used within a multi-app project, the app is initialized in the root `ionic.config.json`.

`ionic init` will prompt for a project name and then proceed to determine the type of your project. You can specify the `name` argument and `--type` option to provide these values via command-line.

If the `--multi-app` flag is specified, this command will initialize your project as a multi-app project, allowing for apps within monorepos and unconventional repository structures. See the multi-app [docs](https://ionicframework.com/docs/cli/configuration#multi-app-projects) for details. Once a multi-app project is initialized, you can run `ionic init` again within apps in your project to initialize them.

### name
The name of your project (e.g. `myApp`, `"My App"`)




### Options

 - `--type=<type>`: Type of project (e.g. `angular`, `react`, `vue`, `custom`) 
      
 - `--force`: Initialize even if a project already exists (or `-f`)
      
 - `--multi-app`: Initialize a multi-app project 
      


### Advanced Options

 - `--project-id=<slug>`: Specify a slug for your app 
      
 - `--default`: Mark the initialized app as the default project 
      

## Examples

```shell
$ ionic init 
$ ionic init "My App"
$ ionic init "My App" --type=angular
$ ionic init --multi-app
```
