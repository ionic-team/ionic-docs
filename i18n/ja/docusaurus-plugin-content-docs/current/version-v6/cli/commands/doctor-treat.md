---
title: "ionic doctor treat"
sidebar_label: "doctor treat"
---


:::warning
This command has been deprecated and will be removed in an upcoming major release of the Ionic CLI.
:::

Attempt to fix issues in your Ionic project

```shell
$ ionic doctor treat [id]
```

This command detects and attempts to fix common issues. Before a fix is attempted, the steps are printed and a confirmation prompt is displayed.

Optionally supply the `id` argument to attempt to fix a single issue. Use `ionic doctor list` to list all known issues.

### id
The issue identifier



## Examples

```shell
$ ionic doctor treat 
$ ionic doctor treat git-not-used
```
