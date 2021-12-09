This command reads and prints configuration values from the project's **./ionic.config.json** file. It can also operate on the global CLI configuration (**~/.ionic/config.json**) using the `--global` option.

For nested properties, separate nest levels with dots. For example, the property name `integrations.cordova` will look in the **integrations** object for the **cordova** property.

Without a `property` argument, this command prints out the entire config.

For multi-app projects, this command is scoped to the current project by default. To operate at the root of the project configuration file instead, use the `--root` option.

If you are using this command programmatically, you can use the `--json` option.

This command will sanitize config output for known sensitive fields (disabled when using `--json`).