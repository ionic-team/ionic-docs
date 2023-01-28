---
title: "ionic start"
sidebar_label: "start"
---
<head>
  <title>How to Create A New Application with Ionic Start for New Projects</title>
  <meta name="description" content="Learn how to create a new app project with Ionic Start. This command creates a working Ionic app that installs dependencies for you and sets up your project." />
</head>



Create a new project

```shell
$ ionic start [name] [template] [options]
```

This command creates a working Ionic app. It installs dependencies for you and sets up your project.

Running `ionic start` without any arguments will prompt you for information about your new project.

The first argument is your app's `name`. Don't worry--you can always change this later. The `--project-id` is generated from `name` unless explicitly specified.

The second argument is the `template` from which to generate your app. You can list all templates with the `--list` option. You can also specify a git repository URL for `template`, in which case the existing project will be cloned.

Use the `--type` option to start projects using older versions of Ionic. For example, you can start an Ionic 3 project with `--type=ionic-angular`. Use `--list` to see all project types and templates.

### name
The name of your new project (e.g. `myApp`, `"My App"`)


### template
The starter template to use (e.g. `blank`, `tabs`; use `--list` to see all)




### Options

 - `--list`: List available starter templates (or `-l`)
      
 - `--type=<type>`: Type of project to start (e.g. `vue`, `angular`, `react`, `ionic-angular`, `ionic1`) 
      
 - `--cordova`: Include Cordova integration 
      
 - `--capacitor`: Include Capacitor integration 
      
 - `--id=<id>`: Specify an Ionic App ID to link 
      


### Advanced Options

 - `--no-deps`: Do not install npm/yarn dependencies 
      
 - `--no-git`: Do not initialize a git repo 
      
 - `--link`: Connect your new app to Ionic 
      
 - `--project-id=<slug>`: Specify a slug for your app (used for the directory name and package name) 
      
 - `--package-id=<id>`: Specify the bundle ID/application ID for your app (reverse-DNS notation) 
      

## Examples

```shell
$ ionic start 
$ ionic start --list
$ ionic start myApp
$ ionic start myApp blank
$ ionic start myApp tabs --cordova
$ ionic start myApp tabs --capacitor
$ ionic start myApp super --type=ionic-angular
$ ionic start myApp blank --type=ionic1
$ ionic start cordovaApp tabs --cordova
$ ionic start "My App" blank
$ ionic start "Conference App" https://github.com/ionic-team/ionic-conference-app
```
