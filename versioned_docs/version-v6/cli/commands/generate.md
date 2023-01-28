---
title: "ionic generate"
sidebar_label: "generate"
---
<head>
  <title>Ionic Generate: Create Pages, Components, & Angular Features</title>
  <meta name="description" content="Automatically create framework features with Ionic Generate. This command uses the Angular CLI to generate pages, components, directives, services, and more." />
</head>



Create Pages, Components, & Angular Features

```shell
$ ionic generate [type] [name]
```

Automatically create framework features with Ionic Generate. This command uses the Angular CLI to generate features such as `pages`, `components`, `directives`, `services`, and more.

 - For a full list of available types, use `npx ng g --help`
 - For a list of options for a types, use `npx ng g <type> --help`

You can specify a path to nest your feature within any number of subdirectories. For example, specify a name of `"pages/New Page"` to generate page files at **src/app/pages/new-page/**.

To test a generator before file modifications are made, use the `--dry-run` option.

### type
The type of feature (e.g. `page`, `component`, `directive`, `service`)


### name
The name/path of the feature being generated



## Examples

```shell
$ ionic generate 
$ ionic generate page
$ ionic generate page contact
$ ionic generate component contact/form
$ ionic generate component login-form --change-detection=OnPush
$ ionic generate directive ripple --skip-import
$ ionic generate service api/user
```
