---
title: "ionic login"
sidebar_label: "login"
---
<head>
  <title>Ionic Secure App Login: Authenticate and Retrieve a User Token</title>
  <meta name="description" content="For a secure login, authenticate with Ionic and retrieve a user token — stored in the CLI config. Learn the most secure way to log in to Ionic Framework apps." />
</head>



Log in to Ionic

```shell
$ ionic login [email] [password]
```

Authenticate with Ionic and retrieve a user token, which is stored in the CLI config. Running `ionic login` will open a browser where you can submit your credentials.

If the `IONIC_TOKEN` environment variable is set, the CLI will automatically authenticate you. Use the Dashboard to generate a Personal Access Token.

If you need to create an Ionic account, use `ionic signup` or the Ionic [Website](https://ionicframework.com/signup).

If you are having issues logging in, please get in touch with our [Support](https://ion.link/support-request).

### email
Your email address (deprecated)


### password
Your password (deprecated)



## Examples

```shell
$ ionic login 
```
