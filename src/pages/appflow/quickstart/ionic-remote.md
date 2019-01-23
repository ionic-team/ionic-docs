---
title: 'Connect Using Ionic Remote'
previousText: 'Connect your Repo'
previousUrl: '/docs/appflow/quickstart/connect'
nextText: 'Install the Appflow SDK'
nextUrl: '/docs/appflow/quickstart/installation'
---

If you are not using GitHub, Bitbucket Cloud, or Bitbucket Server you can push your source code directly to
Ionic Appflow using Git. 

<blockquote>
  <b>Ionic Appflow is <i>not a replacement</i> for your source code repository service.</b></br>
  It is recommended that you use a git hosting service to manage your primary app source code
  (GitHub, Bitbucket,  GitLab, etc.)!<br />
  The <code>ionic</code> remote is used only for interacting with the Ionic Appflow services.
</blockquote>

## Link your Repo
![Ionic Link Command](/docs/assets/img/appflow/ionic-link.gif)

To link your local repo simply run `ionic link` in the root directory of your existing app
and choose `Ionic Appflow` as your git remote. This will allow you to choose the app you'd like to link to,
create an `ionic` remote in you local git configuration, and present you with the option to create or use
an existing SSH key pair for authentication when pushing changes to Ionic Appflow.

You can learn about git remotes [here](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes).

# SSH keys
When using the Ionic remote authentication is done via public/private SSH key pairs for the most secure authentication possible.
You'll need to upload a public key to Ionic Appflow to authenticate yourself. This can be done during the `ionic link` process or manually.

Once you've selected the correct app and the `Ionic Appflow` remote you will be prompted to create an SSH key pair
or use an existing one. If you're not familiar with SSH keys we suggest letting the CLI automatically create
and add them for you. If you are familiar you can choose to use an existing key and give the CLI the path to where
the public key of the existing key pair is stored. You can also upload an existing public key in the dashboard in
the personal settings area which you can find by clicking your profile icon in the lower left side of the dashboard.
