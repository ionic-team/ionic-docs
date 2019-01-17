# Package builds on Appflow using the Ionic CLI

It is possible to trigger package builds on Appflow directly from the CLI.
This is extremely useful if you need to integrate the package build step inside an existing external CI/CD process.

### Prerequisites
Upgrade the Ionic CLI to at least version `4.7.0`.

To trigger package builds on Appflow from the Ionic CLI, a proper subscription to run package builds is needed.

To use environments, a proper subscription that allows the usage of Automations is needed.

### Authentication

The Ionic CLI has to be authenticated on Appflow to be able to trigger a package build.

To login type
```bash
$ ionic login <email> <password>
```

this will prompt for the Appflow username/password.

The CLI can be authenticated also via environment variable (for example if it is used during a CI/CD task).

To set up the authentication via environment variable, first login with an user who has access to the app you want to trigger
package builds for for

```bash
$ ionic login <email> <password>
```

then export the authentication token

```bash
$ ionic config get -g tokens.user
```

finally export the token in an environment variable of your shell or your CI/CD service.

```bash
$ export IONIC_TOKEN=<your token>
```

### Link the app

Your app must be linked to the remote app on Appflow. If the app is not linked yet, just run

```bash
$ ionic link <app id>
```

and commit the changes to `ionic.config.json`.


### Trigger a package build

Currently package build can be triggered only from the app project directory.

```bash
$ cd /path/to/your/app
```

Assuming the CLI is authenticated, to trigger a package build run

```bash
$ ionic package build
```

this will prompt for the desired platform (`ios`/`android`) and build type specific for the platform.

For iOS or Android `release` builds, a valid security profile is required and can be specified
using the `--security-profile=<name>` option.

To setup valid security profiles see [here](/docs/appflow/package/profiles.html).

The previous command can be execute in one single step, for instance

```bash
$ ionic package build ios development --security-profile="My Security Profile"
```

Once the build is successfully triggered, the CLI will automatically start tailing the logs from Appflow and,
if the build is successful, download the `apk`/`ipa` file in the current directory.


### Customize the package build with Options

The Options available to customize the build:

* `--environment=<name>` to specify the group of environment variables to be exposed to the build
(available only with Automation; more info about environments are available [here](/docs/appflow/environments/))
* `--native-config=<name>` to specify the group of native config variables to be exposed to your
build (more info about native configs are available [here](/docs/appflow/package/#native-configs))


### Customize the package build with Advanced Options

The Advanced Options available to customize the build:

* `--commit=<sha1>` The commit defaults to HEAD; to use a different commit you can use this option
with the full SHA1 of the commit
* `--target-platform=<name>` This option is mostly useful for iOS builds if for any reason a package build with a
specific version of Xcode is needed. If this is omitted the preferred version is used.
* `--build-file-name=<name>` To override the downloaded file name use this option. This might be useful, for instance, in in a CI
build to have a consistent name for the produced artifact.

### Note about referencing Options values by name

Names are case sensitive and need to be specified including spaces, for instance

```bash
$ ionic package build ios development --security-profile="iOS dev"
```

Apart from the `--commit` options, all the others require the full name setup within the Appflow Dashboard.

For the Security Profiles, Environments and Native Configs it is the Name

<img src="/img/pro/cli/cli-security-profile-list.png" class="browser" />
<img src="/img/pro/cli/cli-environments-list.png" class="browser" />
<img src="/img/pro/cli/cli-native-config-list.png" class="browser" />


For the Target Platform, it is one of the strings identifying the platform in the Applflow Package Build Form.

<img src="/img/pro/cli/cli-target-platform.png" class="browser" />