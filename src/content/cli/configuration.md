---

---

# Configuration

## Files

Configuration values are stored in JSON files.

* Global config file (`~/.ionic/config.json`): for global CLI config and auth
* Project config files (`ionic.config.json`): for Ionic project config

The CLI provides commands for setting and printing config values from project config files and the global CLI config file. See `ionic config set --help` and `ionic config get --help` for usage.

## Environment Variables

The CLI will look for the following environment variables:

* `IONIC_CONFIG_DIRECTORY`: The directory of the global CLI config. Defaults to `~/.ionic`.
* `IONIC_HTTP_PROXY`: Set a URL for proxying all CLI requests through. See [Using a Proxy](./using-a-proxy).
* `IONIC_TOKEN`: Automatically authenticates with Ionic Pro.

## Flags

CLI flags are global options that alter the behavior of a CLI command.

* `--help`: Instead of running the command, view its help page.
* `--verbose`: Show all log messages for debugging purposes.
* `--quiet`: Only show `WARN` and `ERROR` log messages.
* `--no-interactive`: Turn off interactive prompts and fancy outputs. If CI or a non-TTY terminal is detected, the CLI is automatically non-interactive.
* `--confirm`: Turn on auto-confirmation of confirmation prompts. Careful: the CLI prompts before doing something potentially harmful. Auto-confirming may have unintended results.

## Multi-app Projects

<small>_Available in CLI 4.3.0+_</small>

The Ionic CLI supports a multi-app configuration setup, which involves multiple Ionic apps and shared code within a single repository, or [monorepo](/docs/faq/glossary#monorepo).

### Setup Steps

Multi-app projects are a new feature in the Ionic CLI. The setup is still partly manual.

1. Create a directory and initialize your monorepo (see [Project Structure](#project-structure) for full details).
1. Create an `ionic.config.json` file at the root of the repository with the following contents (see [Config File](#config-file) for full details):

    ```json
    {
      "projects": {}
    }
    ```

1. Use `ionic start` within the monorepo to create Ionic apps in a multi-app project (see [Adding an App](#adding-an-app) for full details).

### Project Structure

In a multi-app project, project structure is flexible. The only requirement is a multi-app `ionic.config.json` file at the root of the repository.

Below is an example setup, where apps in the `apps/` directory are separated from the shared code in the `lib/` directory. Notice the root `ionic.config.json` file and the monorepo's `package.json` file.

 <file-tree>
     <file-tree-directory name="apps">
         <file-tree-directory name="myApp" collapsed></file-tree-directory>
         <file-tree-directory name="myOtherApp" collapsed></file-tree-directory>
     </file-tree-directory>
     <file-tree-directory name="lib" collapsed></file-tree-directory>
     <file-tree-file name="ionic.config.json"></file-tree-file>
     <file-tree-file name="package.json"></file-tree-file>
 </file-tree>

### Config File

In a multi-app project, apps share a single `ionic.config.json` file at the root of the repository instead of each app having their own. The multi-app config file contains the configuration for each app by nesting configuration objects in a `projects` object. A default app can be specified using `defaultProject`.

Below is an example file, which corresponds to the file structure above.

```json
{
  "defaultProject": "myApp",
  "projects": {
    "myApp": {
      "name": "My App",
      "integrations": {},
      "type": "angular",
      "root": "apps/myApp"
    },
    "myOtherApp": {
      "name": "My Other App",
      "integrations": {},
      "type": "angular",
      "root": "apps/myOtherApp"
    }
  }
}
```

When a multi-app project is detected, the Ionic CLI will operate under the context of an app configured in the root `ionic.config.json`. Project selection criteria is as follows:

1. If the global CLI option `--project` is specified, the project is looked up by key in the `projects` object. For example, `--project=myApp` will select the `myApp` project.
1. If the CLI detects it is being run within a project path, configured with the `root` key, it will select the matched project. For example, using the CLI within the `apps/myOtherApp/src` directory will select the `myOtherApp` project.
1. If a `defaultProject` is specified in `ionic.config.json`, it will select the specified project when the above criteria is not met.

### Adding an App

If a multi-app project is detected during `ionic start`, the CLI will add the app configuration to the root `ionic.config.json` file instead of creating a project-specific one.

You may wish to skip dependency installation using `--no-deps` if your dependencies are hoisted to the root of your monorepo.

```shell
$ cd apps/
$ ionic start "My New App" --no-deps
```

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
