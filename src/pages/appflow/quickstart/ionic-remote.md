---
title: 'Connect Using Ionic Remote'
previousText: 'Connect your Repo'
previousUrl: '/docs/appflow/quickstart/connect'
nextText: 'Install the Appflow SDK'
nextUrl: '/docs/appflow/quickstart/installation'
---

If you are not using one of the supported git repo integrations, you can push your source code directly to
Ionic Appflow using Git. 

<blockquote>
  <b>Ionic Appflow is <i>not a replacement</i> for a git hosting service.</b></br>
  It is recommended that you use a git hosting service to manage your primary app source code
  (GitHub, Bitbucket, etc.)!<br /><br />
  The <code>ionic</code> remote is used only for interacting with the Ionic Appflow services.
</blockquote>

## Link your Repository
![Ionic Link Command](/docs/assets/img/appflow/ionic-link.gif)

To link your local repo, simply run `ionic link` in the root directory of your existing project
and choose `Ionic Appflow` as your git remote. This will allow you to select the Dashboard app you'd like to link to,
create an `ionic` remote in your local git configuration, and create or use
an existing SSH key pair for authentication when pushing changes to Ionic Appflow.

You can learn more about git remotes [here](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes).

## Establishing Ionic Remote Connection to an  Appflow-Linked Repository

If your repository has previously been linked to Appflow using the Ionic Remote and you simply need to re-establish the connection on a new machine or as a team member for an app, you can run the following command:

```bash
$ ionic git remote
```

## Configure your SSH keys
Ionic remote authentication is done via public/private SSH key pairs for the most secure authentication possible.
You'll need to upload a public key to Ionic Appflow to authenticate yourself. This can be automatically done during the `ionic link` process or manually.

Once you've selected the correct app and the `Ionic Appflow` remote, you will be prompted to create an SSH key pair
or use an existing one. If you're not familiar with SSH keys we suggest letting the CLI automatically create
and add them for you. Otherwise, you can choose to use an existing key and provide the CLI with a path to
the public key on your local machine. You can also upload an existing public key in the Appflow Dashboard in
the personal Settings area, which you can find by clicking your profile icon on the lower left side of the Dashboard.
