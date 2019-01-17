# Deploy builds on Appflow using the Ionic CLI


It is possible to trigger deploy builds on Appflow directly from the CLI.
This is extremely useful if you need to integrate the deploy build step inside an existing external CI/CD process.

### Prerequisites
Upgrade the Ionic CLI to at least version `4.8.0`.

To use environments, a proper subscription that allows the usage of Automations is needed.

### Authentication

The Ionic CLI has to be authenticated on Appflow to be able to trigger a deploy build.

To login type
```bash
$ ionic login <email> <password>
```

this will prompt for the Appflow username/password.

The CLI can be authenticated also via environment variable (for example if it is used during a CI/CD task).

To set up the authentication via environment variable, first login with an user who has access to the app you want to trigger
deploy builds for for

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


### Trigger a deploy build

Currently deploy build can be triggered only from the app project directory.

```bash
$ cd /path/to/your/app
```

Assuming the CLI is authenticated, to trigger a deploy build run

```bash
$ ionic deploy build
```

Once the build is successfully triggered, the CLI will automatically start tailing the logs from Appflow.

### Customize the deploy build with Options

The Options available to customize the build:

* `--environment=<name>` to specify the group of environment variables to be exposed to the build
(available only with Automation; more info about environments are available [here](/docs/appflow/environments/))
* `--channel=<name>` to specify the channel you want to auto deploy the build to. This can be repeated multiple times if
multiple channels need to be specified; more infos about channels are available [here](/docs/appflow/deploy/channels/)


### Customize the deploy build with Advanced Options

The Advanced Options available to customize the build:

* `--commit=<sha1>` The commit defaults to HEAD; to use a different commit you can use this option
with the full SHA1 of the commit

### Note about referencing Options values by name

Names are case sensitive and need to be specified including spaces, for instance

```bash
$ ionic deploy build --channel="My Custom Channel"
```

Apart from the `--commit` options, all the others require the full name setup within the Appflow Dashboard.

For the Environments and Channels it is the Name

<img src="/img/pro/cli/cli-environments-list.png" class="browser" />
<img src="/img/pro/cli/cli-channels-list.png" class="browser" />