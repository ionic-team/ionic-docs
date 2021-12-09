Authenticate with Ionic and retrieve a user token, which is stored in the CLI config. The most secure way to log in is running `ionic login` without arguments, which will open a browser where you can submit your credentials.

If the `IONIC_TOKEN` environment variable is set, the CLI will automatically authenticate you. To retrieve your user token, first use `ionic login <email> <password>` to log in, then use `ionic config get -g tokens.user` to print the token. (**Note**: Tokens retrieved from the browser login are short-lived and not recommended for use with `IONIC_TOKEN`.)

`ionic login` will also accept `password` through stdin, e.g.: `echo "<password>" | ionic login <email>`.

If you need to create an Ionic account, use `ionic signup` or the Ionic [Website](https://ionicframework.com/signup).

You can reset your password in the [Dashboard](https://dashboard.ionicframework.com/reset-password).

If you are having issues logging in, please get in touch with our [Support](https://ion.link/support-request).