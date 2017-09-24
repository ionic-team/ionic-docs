# Working with Git

Ionic Pro uses a git-based workflow to manage updates and to push new builds through Ionic View, Live Deploy, and more. If you're familiar with how Heroku works, then you'll find Ionic Pro's git workflow similar to use.

<div class="alert alert-warning" role="alert"><h3>Ionic Pro is <i>not a replacement</i> for your source code repository service</h3>It is recommended that you use a separate service to manage your primary app source code (GitHub, GitLab, etc.)!<br />The <code>ionic</code> remote is used only for interacting with the Ionic Pro suite of services.</div>

## Installing Git

On Mac and Linux, git should already be installed and configured properly.

For Windows, download and install [Git for Windows](https://git-scm.com/download/win). During installation, make sure to select "Use OpenSSH."

That should be it, git will be installed and ready to use!

## Getting Started

Follow the steps at [Getting Started](/docs/pro/getting-started.html) to start a new App or link an existing App to Ionic Pro.

## Adding your Existing Repository

If you used `ionic start` to begin your project, we've already ran `git init` for you. In order to add your existing repository (GitLab, GitHub, etc) you should run the following commands:

```bash
git remote add origin [YOUR_REPOSITORY_URL]
git push --set-upstream origin master
```

This will add your remote origin, as well as set the default behavior for a plain 'ol `git push` to send commits to your repository.

## Pushing New Builds

Once you have changes locally that you'd like to build and manage on Ionic Pro, first commit your code changes, and then push to the `ionic` remote:

```bash
git add -p
git commit -m "Million dollar commit"
git push ionic master
```

Don't forget to also periodically push to your existing `origin` (you can use `git push` if you added your existing repository as the default like above), as Ionic Pro is not a replacement for GitHub, GitLab, or a self-hosted git repository.

## Working with Branches

Throughout our documentation and tutorials you'll see referencess to `git push ionic master`. Because we specified `master` this will always push your master branch up to us. However, working with other branches is easy!

Here's an example of how you'd push code to a branch.

```bash
git checkout -b my-new-branch
<make a change>
git add -p
git commit -m 'in our new branch'
git push ionic my-new-branch
```

It's also common to set up automatic deployments (for Deploy and Ionic View to use) to channels using specific branches. For more information on that, please check out our [Ionic Deploy]() documentation.

## Working with other Team Members

Git makes it easy to collaborate with other team members using it's built in features. We highly recommend you use a separate git service (such as GitLab, GitHub, etc) in order to accomplish collaborating.

When adding a new member to your project, they should clone the repository from your external git hosting service, then use `ionic link` on the project like so:

```bash
git clone YOUR_PROJECT_URL/your-project.git
cd your-project
ionic link
```

The `ionic link` command will prompt you to choose an existing project that the member has access to (through your Organization & Teams) and walk them through the required setup. After they are linked, they can use `git push ionic master` and other related commands like normal.

## Adding SSH Keys

The Ionic CLI automatically detects and adds your public key (or creates new ones) to your Ionic Pro account as part of the `link` and `start` commands. If you have additional public keys you'd like to link to Ionic Pro, create them manually using `ssh-keygen`, log into your Ionic Pro account, and add the keys manually under "SSH Keys"
