---
title: アプリをはじめよう
sidebar_label: はじめ方
---

<head>
  <title>Starting an App: How to Guide | Ionic Documentation</title>
  <meta
    name="description"
    content="Starting a new Ionic app is incredibly simple. Learn how to run the ionic start command from the command line and let the CLI handle the rest."
  />
</head>

Starting a new Ionic app is incredibly simple. From the command line, run the `ionic start` command and the CLI will handle the rest.

```shell-session
$ ionic start

Every great app needs a name! 😍

Please enter the full name of your app. You can change this at any time.
To bypass this prompt next time, supply name,
the first argument to ionic start.

? Project name: █
```

The Ionic CLI will display prompts asking for the new project's name and which template to use. These details can be provided as command arguments:

```shell-session
$ ionic start myApp tabs
```

Here, `myApp` is the name of the project, `tabs` is the starter template, and the project type is `angular`.

`tabs` is not the only project template available. Between all project types, there are three templates available:

- `tabs`: A tabs based layout
- `sidemenu`: A sidemenu based layout
- `blank`: An empty project with a single page

See all available templates with the following command:

```shell-session
$ ionic start --list
```

These templates provide a great starting point for any app and include all the best practices for making a code base scale.
