Authenticate with Ionic Appflow and retrieve a user token, which is stored in the CLI config.

If the `IONIC_TOKEN` environment variable is set, the CLI will automatically authenticate you. To retrieve your user token, first use `ionic login`, then print the token by running the `ionic config get -g tokens.user` command.

You can also use `IONIC_EMAIL` and `IONIC_PASSWORD` environment variables for automatic authentication, but it is not recommended to store your password in plain text.

If you need to create an Ionic Appflow account, use `ionic signup`.

If you are having issues logging in, please get in touch with our [Support](https://ion.link/support-request).