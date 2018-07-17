---

---

# CLI Overview

## Config Files

Configuration values are stored in JSON files.

* Global config file (`~/.ionic/config.json`): for global CLI config and auth
* Project config files (`ionic.config.json`): for Ionic project config

The CLI provides commands for setting and printing config values from project config files and the global CLI config file. See `ionic config set --help` and `ionic config get --help` for usage.

## Environment Variables

The CLI will look for the following environment variables:

* `IONIC_CONFIG_DIRECTORY`: The directory of the global CLI config. Defaults to `~/.ionic`.
* `IONIC_HTTP_PROXY`: Set a URL for proxying all CLI requests through. See [Using a Proxy](#using-a-proxy).
* `IONIC_TOKEN`: Automatically authenticates with Ionic Pro.

## Flags

CLI flags are global options that alter the behavior of a CLI command.

* `--help`: Instead of running the command, view its help page.
* `--verbose`: Show all log messages for debugging purposes.
* `--quiet`: Only show `WARN` and `ERROR` log messages.
* `--no-interactive`: Turn off interactive prompts and fancy outputs. If CI or a non-TTY terminal is detected, the CLI is automatically non-interactive.
* `--confirm`: Turn on auto-confirmation of confirmation prompts. Careful: the CLI prompts before doing something potentially harmful. Auto-confirming may have unintended results.

## Using a Proxy

Proxy support is built-in to the Ionic CLI. Proxy settings can be configured via the config file or an environment variable.

To configure proxy settings via the config file, run the following with the URL of the proxy server:

```shell
$ ionic config set -g proxy http://proxy.example.com:8888
```

To configure proxy settings via an environment variable, use one of the following:

```shell
$ export HTTP_PROXY="http://proxy.example.com:8888" # also used by npm
$ export HTTPS_PROXY="https://proxy.example.com:8888" # also used by npm
$ export IONIC_HTTP_PROXY="http://proxy.example.com:8888"
```

### Other CLIs

Each CLI that you use must be configured separately to proxy network requests.

#### npm

```shell
$ npm config set proxy http://proxy.company.com:8888
```

#### git

```shell
$ git config --global http.proxy http://proxy.example.com:8888
```

### SSL Configuration

The Ionic CLI can be configured to use various SSL settings for HTTP requests.

```shell
$ ionic config set -g ssl.cafile /path/to/cafile # file path to your CA root certificate
$ ionic config set -g ssl.certfile /path/to/certfile # file path to a client certificate
$ ionic config set -g ssl.keyfile /path/to/keyfile # file path to a client key file
```

The `cafile`, `certfile`, and `keyfile` entries can be manually edited as arrays of strings in `~/.ionic/config.json` to include multiple files.

## Advanced Configuration

### Command Options

You can express command options (normally set with `--opt=value` syntax) with environment variables. The naming of these environment variables follows a pattern: start with `IONIC_CMDOPTS_`, add the command name (replacing any spaces with underscores), add the option name (replacing any hyphens with underscores), and then uppercase everything. Boolean flags (command-line options that don't take a value) can be set to `1` or `0`. Strip the `--no-` prefix in boolean flags, if it exists (`--no-open` in ionic serve can be expressed with `IONIC_CMDOPTS_SERVE_OPEN=0`, for example).

For example, the command options in `ionic cordova run ios -lc --livereload-port=1234 --address=localhost` can also be expressed with this series of environment variables:

```shell
$ export IONIC_CMDOPTS_CORDOVA_RUN_LIVERELOAD=1
$ export IONIC_CMDOPTS_CORDOVA_RUN_CONSOLELOGS=1
$ export IONIC_CMDOPTS_CORDOVA_RUN_LIVERELOAD_PORT=1234
$ export IONIC_CMDOPTS_CORDOVA_RUN_ADDRESS=localhost
```

If these variables are set in your environment, `ionic cordova build ios` will use new defaults for its options.
