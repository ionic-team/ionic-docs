---
title: '命令行部署'
previousText: '编译/自动化'
previousUrl: '/docs/appflow/destinations/builds'
nextText: '手动'
nextUrl: '/docs/appflow/destinations/manual'
---

> **注意：** 若要部署构建，您需要运行 `@ionic/cli` 至少版本 6.8

您也可以创建一个将会部署到应用商店或同时部署一个已完成的构建。

> **注意：** 要部署构建，您需要有权限才能部署cli的构建。

## Deploy a new build to an app store

```bash
$ ionic package build <platform> <type> --security-profile=<name> --destination=<name>
```

- `<platform>`
  - `android` or `ios`
- `<type>`
  - `app-store` or `enterprise` for `ios`
  - `release` for `android`
- `--security-profile=<name>`
  - The selected profile must be a release or app store profile
- `--destination=<name>`
  - For an iOS build it must be a Apple App store destination
  - For an Android build it must be a Google Play Store destination


For more information about other `ionic package build` options, please refer to the [package build documentation](/docs/cli/commands/package-build).

## Deploy an existing build to an app store

```bash
$ ionic package deploy <build-id> <destination>
```

- `<build-id>`
  - An existing build that has been looked up in the UI
- `<destination>`
  - The name of an appropriate destination for the build
