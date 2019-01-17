# Working with Git

Ionic Appflow integrates with [Git](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)
version control software in order to manage the versions of your app that you release with Live Deploy
and iOS & Android binaries built on Ionic Appflow.

## Installing Git
If you are on Mac or Linux, git should already be installed and configured properly.

For Windows, download and install [Git for Windows](https://git-scm.com/download/win).
During installation, make sure to select "Use OpenSSH."

If you're using the GitHub integration you can also use GitHub's [Desktop Client](https://desktop.github.com/)
to commit and push versions of your app.

## Sharing your code with Ionic Appflow

Ionic Appflow to needs access to your source code to build native binaries and release live deploys & bug fixes.
Using Git allows you to specify the exact versions of your app which you would like to operate on.
There are two ways in which you can give Ionic Appflow access you your source code and Git versioning history.

* [GitHub & Bitbucket Cloud Integration](#github--bitbucket-cloud-integration)
* [Ionic Git Remote](#ionic-git)


## GitHub & Bitbucket Cloud Integration

If you are already using [GitHub](https://github.com/) or [Bitbucket Cloud](https://bitbucket.org/)
you can link your repository with your Ionic Appflow app to push code automatically.
In order to enable the integration with your Ionic Appflow app you will need an existing repository on
GitHub or Bitbucket Cloud. Navigate to the `Git` section of the app settings tab in your app on the
Ionic Appflow dashboard choose the tab of the correct integration. If this is your first time connecting
you'll need to click the `Connect` button. Then you can choose the repository to link from the list of available repos.

<div style="text-align: center">
  <img style="width: 950px" src="/img/pro/github-connect-app.png?1">
</div>

When you link the repository a webhook will be created for the repository
and events will be sent to Ionic Appflow so that we can automatically trigger builds
for any of the branches you specify during the linking process.
Be sure to specify all the branches you would like to trigger builds for.
By default only pushes to the `master` branch will trigger builds.

## Using Ionic as a git remote

If you are not using GitHub or Bitbucket Cloud you can push your source code directly to Ionic Appflow using Git.
Simply choose `Ionic` as your git remote during `ionic start` or run `ionic link` in the root directory of your existing app
in order to create the `ionic` git remote.
You can learn about git remotes [here](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes).

<div class="alert alert-warning" role="alert">
  <h3>Ionic Appflow is <i>not a replacement</i> for your source code repository service</h3>
  It is recommended that you use a <a href="/docs/appflow/basics/git#using-a-git-hosting-service" style="color: #4a8bfc;">git hosting service</a>
  to manage your primary app source code (GitHub, Bitbucket,  GitLab, etc.)!
  <br />The <code>ionic</code> remote is used only for interacting with the Ionic Appflow services.
</div>

Follow the steps at [Getting Started](/docs/appflow/getting-started.html) to start a new App or
link an existing App to Ionic Appflow.

Once you've created and linked your app to the Ionic remote you can learn about:

* [Pushing New Builds](#pushing-new-builds)
* [Working with Branches](#working-with-branches)
* [Working with Team Members](#working-with-other-team-members)
* [Adding SSH Keys](#adding-ssh-keys)

### Pushing New Builds

Once you have changes locally that you'd like to build and manage on Ionic Appflow,
first commit your code changes, and then push to the `ionic` remote:

```bash
git add .
git commit -m "Million dollar commit"
git push ionic master
```

Don't forget to also periodically push to your `origin` [git hosting service](#using-a-git-hosting-service)
as Ionic Appflow is not a replacement for GitHub, Bitbucket Cloud, GitLab, or a self-hosted git repository.

### Working with Branches

Throughout our documentation and tutorials you'll see referencess to `git push ionic master`.
Because we specified `master` this will always push your master branch up to us.
However, working with other branches is easy!

Here's an example of how you'd push code to a branch.

```bash
git checkout -b my-new-branch
<make a change>
git add -p
git commit -m 'in our new branch'
git push ionic my-new-branch
```

It's also common to set up automatic deployments to deploy channels using specific branches.
For more information on that, please check out our [Ionic Deploy](/docs/appflow/deploy) documentation.

### Working with other Team Members

Git makes it easy to collaborate with other team members using it's built in features. We highly recommend you use a separate git service (such as GitLab, GitHub, etc) in order to accomplish collaborating.

When adding a new member to your project, they should clone the repository from your external git hosting service, then use `ionic link` on the project like so:

```bash
git clone YOUR_PROJECT_URL/your-project.git
cd your-project
ionic link
```

The `ionic link` command will prompt you to choose an existing project that the member
has access to (through your Organization & Teams) and walk them through the required setup.
After they are linked, they can use `git push ionic master` and other related commands like normal.

### Adding SSH Keys

The Ionic CLI automatically detects and adds your public key (or creates new ones) to your
Ionic Appflow account as part of the `link` and `start` commands when you choose Ionic for your git remote.
If you have additional public keys you'd like to link to Ionic Appflow, create them manually using `ssh-keygen`,
log into your Ionic Appflow account, and add the keys manually under "SSH Keys"

## Using a Git Hosting Service

If you used `ionic start` to begin your project, we've already ran `git init` for you.
We recommend that you host your code on a service like [GitHub](https://github.com/),
[Bitbucket Cloud](https://bitbucket.org/), [GitLab](https://gitlab.com), etc.
You can find information on setting up & pushing to each of the above services on their page:

* [GitHub](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/)
* [Bitbucket Cloud](https://confluence.atlassian.com/bitbucket/repository-setup-877174034.html)
* [GitLab](https://docs.gitlab.com/ce/gitlab-basics/create-project.html)

Once you've added your remote origin, you can use plain 'ol `git push` to send commits to your
repository on the hosting service of your choice.