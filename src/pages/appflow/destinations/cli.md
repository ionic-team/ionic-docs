---
title: 'Command-line Deploy'
previousText: 'Builds/Automations'
previousUrl: '/docs/appflow/destinations/builds'
nextText: 'Manual'
nextUrl: '/docs/appflow/destinations/manual'
---

You can also create a build that will be deployed to an app store or deploy an already completed build as well.

> **NOTE:** To deploy a build you will need to have permissions to be able to deploy builds from cli.

- **Create new build that will be deployed to an app store**
    - Command: `ionic package deploy <platform> <type> --security-profile=<name> --destination=<name>`
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

- **Deploy an existing build to an app store**
    - Command: `ionic package deploy <build-id> <destination>`
    - `<build-id>`
        - An existing build that has been looked up in the UI
    - `<destination>`
        - The name of an appropriate destination for the build
