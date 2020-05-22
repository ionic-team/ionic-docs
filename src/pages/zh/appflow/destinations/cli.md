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

- **创建将部署到应用商店的新版本**
    - 命令： `ionic package build <platform> <type> --security-profile=<name> --destination=<name>`
    - `<platform>`
        - `android` 或 `ios`
    - `<type>`
        - `ios`：`app-store` 或 `enterprise`
        - `android`：`release`
    - `--security-profile=<name>`
        - 所选的配置文件必须是发布或应用存储配置文件
    - `--destination=<name>`
        - 为了构建iOS，它必须是苹果应用商店的目标
        - 若要构建Android，它必须是 Google Play 商店的目标

- **部署现有构建到应用商店**
    - 命令： `ionic包部署 <build-id> <destination>`
    - `<build-id>`
        - 在界面中查找的现有版本
    - `<destination>`
        - 构建的适当目标名称
