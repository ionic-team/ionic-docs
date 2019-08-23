---
previousText: 'Native Configurations'
previousUrl: '/docs/appflow/package/native-configs'
nextText: 'Automations'
nextUrl: '/docs/appflow/automation/intro'
---

# Package builds on Appflow using the Ionic CLI

<blockquote>
  <p><b>Note:</b> This feature is only available on our <b>Scale</b> plan. Please <a href="/sales">contact us</a> to enable this feature.</p>
</blockquote>

It is possible to trigger Package builds on Appflow directly from the CLI.
This is extremely useful if you need to integrate the Package build step as part of an existing external CI/CD process.

### Prerequisites
Upgrade the Ionic CLI to at least version `4.7.0`.

To trigger Package builds on Appflow from the Ionic CLI, a proper subscription to run Package builds is needed.

To use Environments, a proper subscription that allows the usage of Automations is needed.

### Authentication

The Ionic CLI has to be authenticated on Appflow to be able to trigger a Package build.

To login type:
```bash
$ ionic login <email> <password>
```

This will prompt for the Appflow username/password.

The CLI can also be authenticated via an environment variable (for example, if it is used during a CI/CD task).

To set up the authentication via environment variable, first login via the CLI with an Appflow user who has access to the app you want to trigger Deploy builds for:

```bash
$ ionic login <email> <password>
```

Then, export the authentication token:

```bash
$ ionic config get -g tokens.user
```

Finally, export the token in an environment variable of your shell or your CI/CD service.

```bash
$ export IONIC_TOKEN=<your token>
```

### Link the app

Your app must be linked to the remote app on Appflow. If the app is not linked yet, run:

```bash
$ ionic link <app id>
```

and commit the changes to `ionic.config.json`.


### Trigger a package build

Currently, Package builds can only be triggered from the root project directory:

```bash
$ cd /path/to/your/app
```

Assuming the CLI is authenticated, to trigger a Package build, run:

```bash
$ ionic package build
```

This will prompt for the desired platform (`ios`/`android`) and build type for the platform.

For iOS or Android `release` builds, a valid security profile is required and can be specified using the `--security-profile=<name>` option.

For information on setting up security profiles, see [here](/docs/appflow/package/credentials).

The previous commands can be executed in a single step:

```bash
$ ionic package build ios development --security-profile="My Security Profile"
```

Once the build is successfully triggered, the CLI will automatically start tailing the logs from Appflow and, if the build is successful, download the `apk`/`ipa` file in the current directory.


### Customize the package build with Options

The Options available to customize the build include:

* `--environment=<name>` to specify the group of environment variables to be exposed to the build
(available only with Automation; more info about environments are available [here](/docs/appflow/environments/))
* `--native-config=<name>` to specify the group of native config variables to be exposed to your
build (more info about native configs are available [here](/docs/appflow/package/intro/#native-configs))


### Customize the package build with Advanced Options

The Advanced Options available to customize the build include:

* `--commit=<sha1>` The commit defaults to HEAD; to use a different commit you can use this option
with the full SHA1 of the commit
* `--target-platform=<name>` This option is mostly useful for iOS builds if for any reason a package build with a
specific version of Xcode is needed. If this is omitted the preferred version is used.
* `--build-file-name=<name>` To override the downloaded file name use this option. This might be useful, for instance, in in a CI
build to have a consistent name for the produced artifact.

### Note about referencing Options values by name

Names are case sensitive and need to be specified including spaces, for instance:

```bash
$ ionic package build ios development --security-profile="iOS Dev"
```

Apart from the `--commit` option, all others require the full name setup within the Appflow Dashboard.

Look for the name on the Security Profiles, Environments and Native Configs pages in Appflow:

![Security Profiles](/docs/assets/img/appflow/cli-security-profile-list.png)
![Environments](/docs/assets/img/appflow/cli-environments-list.png)
![Native Configs](/docs/assets/img/appflow/cli-native-config-list.png)

For the Target Platform, use one of the strings identifying the platform in the Applflow Package Build form:

![Target Platform](/docs/assets/img/appflow/cli-target-platform.png)
