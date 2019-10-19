---
previousText: 'Tutorials and Videos'
previousUrl: '/docs/appflow/deploy/tutorials'
nextText: 'Package'
nextUrl: '/docs/appflow/package/intro'
---

# Deploy builds on Appflow using the Ionic CLI

<blockquote>
  <p><b>Note:</b> This feature is only available on our <b>Scale</b> plan. Please <a href="/sales">contact us</a> to enable this feature.</p>
</blockquote>

It is possible to trigger Deploy builds on Appflow directly from the CLI. This is extremely useful if you need to integrate the Deploy build step inside an existing external CI/CD process.

### Prerequisites

Upgrade the Ionic CLI to at least version `4.8.0`.

To use environments, a proper Appflow subscription that allows the usage of Automations is needed.

### Authentication

The Ionic CLI has to be authenticated on Appflow to be able to trigger a Deploy build.

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

### Trigger a deploy build

Currently, a Deploy build can be triggered only from the root project directory:

```bash
$ cd /path/to/your/app
```

Assuming the CLI is authenticated, to trigger a Deploy build, run:

```bash
$ ionic deploy build
```

Once the build is successfully triggered, the CLI will automatically start tailing the logs from Appflow.

### Customize the Deploy build with Options

The Options available to customize the build include:

* `--environment=<name>` to specify the group of environment variables to be exposed to the build (available only with Automation; more info about environments are available [here](/docs/appflow/environments/))
* `--channel=<name>` to specify the channel you want to auto deploy the build to. This can be repeated multiple times if multiple channels need to be specified; more infos about channels are available [here](/docs/appflow/deploy/channels/)

### Customize the Deploy build with Advanced Options

The Advanced Options available to customize the build include:

* `--commit=<sha1>` The commit defaults to HEAD; to use a different commit you can use this option with the full SHA1 of the commit.

### Note about referencing Options values by name

Names are case sensitive and need to be specified including spaces, for instance:

```bash
$ ionic deploy build --channel="My Custom Channel"
```

Apart from the `--commit` option, all others require the full name setup within the Appflow Dashboard.

Look for the name on the Environments and Channels pages in Appflow:

![CLI Environments List](/docs/assets/img/appflow/cli-environments-list.png) ![CLI Channels List](/docs/assets/img/appflow/cli-channels-list.png)