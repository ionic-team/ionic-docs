---
title: 'Command-line Deploy'
previousText: 'Builds/Automations'
previousUrl: '/docs/appflow/destinations/builds'
nextText: 'Manual'
nextUrl: '/docs/appflow/destinations/manual'
---
> **NOTE:** To deploy a build you will need to be running `@ionic/cli` of at least version 6.8

You can also create a build that will be deployed to an app store or deploy an already completed build as well.

> **NOTE:** To deploy a build you will need to have permissions to be able to deploy builds from cli.

## Create new build that will be deployed to an app store

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

The build can be customized further via the following options:

- `--environment=<name>` to specify the group of environment variables to be exposed to the build
(available only with Automation; more info about environments are available [here](/docs/appflow/environments/))
- `--native-config=<name>` to specify the group of native config variables to be exposed to your
build (more info about native configs are available [here](/docs/appflow/package/intro/#native-configs))
- `--commit=<sha1>` The commit defaults to HEAD; to use a different commit you can use this option
with the full SHA1 of the commit
- `--target-platform=<name>` This option is mostly useful for iOS builds if for any reason a package build with a
specific version of Xcode is needed. If this is omitted the preferred version is used

## Deploy an existing build to an app store

```bash
$ ionic package deploy <build-id> <destination>
```

- `<build-id>`
  - An existing build that has been looked up in the UI
- `<destination>`
  - The name of an appropriate destination for the build
