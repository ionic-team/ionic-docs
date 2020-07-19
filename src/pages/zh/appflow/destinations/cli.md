---
title: '命令行部署'
previousText: '构建/自动化'
previousUrl: '/docs/appflow/destinations/builds'
nextText: '手动'
nextUrl: '/docs/appflow/destinations/manual'
---

> **注意：** 若要部署构建，您需要运行 `@ionic/cli` 至少版本 6.8

您也可以创建一个将会部署到应用商店或同时部署一个已完成的构建。

> **注意：** 要部署构建，您需要有权限才能部署cli的构建。

## 部署一个新构建到应用商店

```bash
$ ionic package build <platform> <type> --security-profile=<name> --destination=<name>
```

- `<platform>`
  - `android` or `ios`
- `<type>`
  - `app-store` or `enterprise` 面向 `iOS`
  - `release` 面向 `Android`
- `--security-profile=<name>`
  - 所选的配置文件必须是发布或应用商店配置文件
- `--destination=<name>`
  - 面向iOS构建，必须是一个Apple App商店地址
  - 面向Android构建，必须是一个Google Play商店地址


想了解更多有关 `ionic package build` 配置信息，请参阅 [构建打包文档](/docs/cli/commands/package-build).

## 部署当前构建到商店

```bash
$ ionic package deploy <build-id> <destination>
```

- `<build-id>`
  - An existing build that has been looked up in the UI
- `<destination>`
  - The name of an appropriate destination for the build
