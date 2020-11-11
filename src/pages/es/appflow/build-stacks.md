---
title: "Build Stacks"
previousText: "Use different Node in builds"
previousUrl: "/docs/appflow/cookbook/switch_node_version"
nextText: "Web Previews"
nextUrl: "/docs/appflow/web-previews"
---

In Appflow, build stacks are how we represent the set of software used to build an app on a given platform. This includes the version of npm, Cordova, Ionic, Xcode, and what OS it is all installed on.

In general, the latest build stack is the best choice for most apps. Though, we do have other build stacks available for scenarios where they are needed. A non-default build stack might be needed when a specific version of a build tool is required, for example, an older version of Xcode or the Android build tools are needed to support some configuration.

Build stacks are available for use with all Appflow plans.

After a new build stack becomes available older build stacks for that platform may be retired. Stacks that will be retired will be labeled with the date when they will no longer be available for use and customers will be notified.

Below are the versions used in Appflow for each build type...

### Active Stack Versions

#### Active macOS Versions (Used for iOS builds)

| Software    | macOS - 2019.07 | macOS - 2020.06 | macOS - 2020.08 | macOS - 2020.09 | macOS - 2020.11 |
| ----------- | --------------- | --------------- | --------------- | --------------- | --------------- |
| Cordova CLI | 9.0.3           | 9.0.3           | 9.0.3           | 10.0.0          | 10.0.0          |
| Ionic CLI   | 6.2.2           | 6.9.2           | 6.10.1          | 6.11.8          | 6.12.1          |
| Node.js     | 12.16.1         | 12.17.0         | 12.18.3         | 12.18.3         | 14.15.0         |
| npm         | 6.13.4          | 6.14.4          | 6.14.6          | 6.14.6          | 6.14.8          |
| Yarn        | 1.22.0          | 1.22.4          | 1.22.4          | 1.22.5          | 1.22.10         |
| macOS       | 10.14.5         | 10.14.6         | 10.15.6         | 10.15.6         | 10.15.7         |
| Carthage    | 0.34.0          | 0.34.0          | 0.35.0          | 0.36.0          | 0.36.0          |
| CocoaPods   | 1.8.4           | 1.7.5           | 1.9.3           | 1.9.3           | 1.10.0          |
| Xcode       | 10.2.1          | 11.5            | 11.6            | 12.0            | 12.1            |

#### Active Linux Versions (Used for Android and Web builds)

| Software    | Linux - 2020.06 | Linux - 2020.09 | Linux - 2020.11 |
| ----------- | --------------- | --------------- | --------------- |
| Cordova CLI | 9.0.3           | 10.0.0          | 10.0.0          |
| Ionic CLI   | 6.2.2           | 6.12.1          | 6.12.1          |
| Node.js     | 12.19.0         | 12.19.0         | 14.15.0         |
| npm         | 6.14.8          | 6.14.6          | 6.14.8          |
| Yarn        | 1.22.5          | 1.22.5          | 1.22.5          |
| Debian      | 9.12            | 9.12            | 9.12            |
| Gradle      | 4.3.1           | 4.3.1           | 4.3.1           |
| OpenJDK     | 1.8.0_265       | 1.8.0_265       | 1.8.0_265       |
