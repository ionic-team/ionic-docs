---
title: "ionic doctor check"
sidebar_label: "doctor check"
---
<head>
  <title>ionic doctor check: Command to Check Issues on Ionic Projects</title>
  <meta name="description" content="Check the health of your Ionic project using the doctor check command. Read more for usage and how to check issues with examples from Ionic Framework." />
</head>

:::warning
This command has been deprecated and will be removed in an upcoming major release of the Ionic CLI.
:::

Check the health of your Ionic project

```shell
$ ionic doctor check [id]
```

This command detects and prints common issues and suggested steps to fix them.

Some issues can be fixed automatically. See `ionic doctor treat --help`.

Optionally supply the `id` argument to check a single issue. Use `ionic doctor list` to list all known issues.

### id
The issue identifier



## Examples

```shell
$ ionic doctor check 
$ ionic doctor check git-not-used
```
