---
title: 'Project Creation and Git'
previousText: 'Exploring Appflow Tutorial'
previousUrl: '/docs/appflow/tutorial'
nextText: 'Web Build and Web Previews'
nextUrl: '/docs/appflow/tutorial/web-preview'
tableOfContents: true
---

This tutorial uses [Ionic Angular](https://ionicframework.com/docs/angular/overview) as the app framework/UI components and [Capacitor](https://capacitorjs.com) to deploy the app to iOS and Android. However, given the focus on Appflow's mobile CI/CD features, you can follow along with any web framework or native runtime.

In this first step, you'll install the tooling required to use Appflow, create an Ionic app, and create a project on Appflow.

> Check out [this branch](https://github.com/ionic-team/tutorial-appflow/tree/part-1_web_builds) from this tutorial's companion app to compare with your starter project. If you run into any issues or need help understanding any of these concepts, please [contact Ionic Support](https://ionic.zendesk.com/hc/en-us).

## Required Ionic Tooling

In order to use Appflow, you'll need to install a few tools and create an Ionic app first.

### System requirements:
* Node.js for interacting with the Ionic ecosystem. [Download the LTS version here.](https://nodejs.org/en/)
* Command-line interface/terminal (CLI):
  * Windows users: For the best Ionic experience, we recommend the built-in command line (cmd) or the Powershell CLI, running in Administrator mode.
  * Mac/Linux users, virtually any terminal will work.

### Git Permissions:
  * To integrate Appflow with Git, you must log into your Git service of choice as a user that meets the following requirements:
      * Has full read, write, and admin privileges on any repos you'd like to connect with Appflow.
      * Has the ability to create a webhook in all repos you'd like to connect with Appflow.

### Install Ionic CLI:
* Run the following in the command line terminal to install the Ionic CLI (`ionic`), `native-run`, which is used to run native binaries on devices and simulators/emulators, and `cordova-res`, used to generate native app icons and splash screens:

```bash
npm install -g @ionic/cli native-run cordova-res
```

> The -g option means install globally. When packages are installed globally, EACCES permission errors can occur. Consider setting up npm to operate globally without elevated permissions. See [Resolving Permission Errors](https://ionicframework.com/docs/developing/tips#resolving-permission-errors) for more information.

## Create a new Ionic app

From the command line, run the following to create an Ionic Angular app named "starter_app" that uses the "blank" starter template:

```bash
ionic start starter_app blank --type=angular
```

**Integrating Capacitor**

You will be prompted with an option to integrate with Capacitor. You can choose either Capacitor or Cordova later. Ionic recommends using Capacitor.

```bash
Integrate your new app with Capacitor to target native iOS and Android? (y/N)
```

* To integrate with Capacitor enter "y" and press return.

`[OK] Integration capacitor added!`

* To integrate with Cordova, use the command below. More information on getting started with Cordova is [here](https://cordova.apache.org/#getstarted).

> Ionic strongly recommends using Capacitor for the best Appflow experience. To learn more about these platforms, review the [Capacitor vs Cordova](https://ionicframework.com/resources/articles/capacitor-vs-cordova-modern-hybrid-app-development) article.

```bash
ionic integrations add cordova
```

### Create a Git repository

Next, head over to your [Git host of choice](/docs/appflow/quickstart/connect) and create a new repository (`starter_app`) for this app (these steps will vary based on the host).

## Project Creation and Git Integration

Appflow works directly with Git version control, using your codebase as the source of truth for Deploy and Package builds. In order for Appflow to access your code, you can choose one of these hosting services: **GitHub**, **GitLab** or **Bitbucket.**

**To create an app in the Appflow Dashboard and then connect it to your git repo:**

1. Log into the [Appflow Dashboard](https://dashboard.ionicframework.com) using your credentials and select the Apps tab from the side menu.
2. Next, click the Add App button:

![Appflow-create-new-app](/docs/assets/img/appflow/tutorial/create-new-app.png)


3. From the pop-up dialog, enter "Starter App" for the name then enable "Allow web builds" toggle (we'll [see what that does](https://ionicframework.com/docs/appflow/web-previews) very soon).


![Appflow-add-app-name](/docs/assets/img/appflow/tutorial/add-app-name.png)

4. Select Git from the Settings sub-menu in the side bar, then connect to your [Git host of choice](https://ionicframework.com/docs/appflow/quickstart/connect#choose-your-git-integration):

![Appflow-git-integration](/docs/assets/img/appflow/tutorial/git-integration.png)

5. Select the `starter_app` repository.

6. Back in the command line, link the newly created Appflow app with your local repository using `ionic link`. Choose "Link an existing app on Ionic Appflow", then select `starter_app`.

7. Push a commit.

```bash
git add .   # stage all changes
git commit -m "initial commit"   # commit staged changes
git push origin main   # push changes from main branch to the git host
```

That's it! You're ready to start enabling some cool Appflow features.
