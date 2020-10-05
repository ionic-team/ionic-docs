---
title: 'Project Creation and Git'
previousText: 'Exploring Appflow Tutorial'
previousUrl: '/docs/appflow/tutorial'
nextText: 'Web Build and Web Previews'
nextUrl: '/docs/appflow/tutorial/web-preview'
tableOfContents: false
---

# Exploring Appflow Exercise 1

This part of the exploring Appflow exercise consists of the following topics

1. Tooling for Ionic Starter App
1. Starter App using Ionic
1. Project creation and Git Integration

## Tooling for Ionic Starter App

### Prerequisites
<b> System requirements: </b> <br>
* Node.js for interacting with the Ionic ecosystem. [Download the LTS version here.](https://nodejs.org/en/)
* Command-line interface/terminal (CLI):
  * Windows users: for the best Ionic experience, we recommend the built-in command line (cmd) or the Powershell CLI, running in Administrator mode.
  * Mac/Linux users, virtually any terminal will work.

**Installing Ionic:**<br>
* Run the following in the command line terminal to install the Ionic CLI (ionic), native-run, which is used to run native binaries on devices and simulators/emulators, and cordova-res, used to generate native app icons and splash screens:

```
npm install -g @ionic/cli native-run cordova-res
```

> Refer [Getting started](https://ionicframework.com/docs/angular/your-first-app#download-required-tools) with tooling for more information

## Starter App using Ionic

Starting a new Ionic app is incredibly simple. From the command line, run the command below and then you can select from various options using the CLI

```
ionic start
```

Or, to get started with the basic blank starter that is best for this exercise, you can use
```
ionic start starter_app blank --type=angular
```
Here, with the above we are initiating an Ionic starter app with

 `NAME:starter_app`
 `FRAMEWORK:angular`
 `STARTER TEMPLATE:blank`

> To know more about all the frameworks and various starter templates available to choose from refer [Starting an Ionic App](https://ionicframework.com/docs/developing/starting)

**Integrating with Capacitor**

You will be prompted with an option to integrate with Capacitor. You can choose either Capacitor or Cordova later. Ionic recommends using Capacitor.

```
Integrate your new app with Capacitor to target native iOS and Android? (y/N)
```

* To integrate with Capacitor enter y and return.

`[OK] Integration capacitor added!`

* **NOTE:** **Ionic highly recommends using Capacitor for best experience with Appflow**. If you would like to integrate your starter app with cordova, you can use the below command and docs to get started. More information on getting started with Cordova [here](https://cordova.apache.org/#getstarted)

```
ionic integrations add cordova
```


> To learn more about these platforms, you can refer the docs on [Capacitor vs Cordova](https://ionicframework.com/resources/articles/capacitor-vs-cordova-modern-hybrid-app-development)





## Project Creation and Git Integration

Appflow works directly with Git version control and uses your code base as the source of truth for Deploy and Package builds. In order for Appflow to access your code, you can choose to integrate directly using a hosting service like **GitHub**, **GitLab\*** or **Bitbucket.**

**To create an app in the Appflow Dashboard and then connect it to your git repo:**

1. Login to the Appflow Dashboard using your credentials and select the Apps tab from the side menu.
2. Next, select the Add App button, as shown below.

![Appflow-create-new-app](/docs/assets/img/appflow/tutorial/create-new-app.png)


3. From the popup enter your starter Appname in the field and enable [web-previews](https://ionicframework.com/docs/appflow/web-previews)


![Appflow-add-app-name](/docs/assets/img/appflow/tutorial/add-app-name.png)




4. Select the Git sub menu from the settings menu in the side bar and select integrate as shown below.

![Appflow-git-integration](/docs/assets/img/appflow/tutorial/git-integration.png)

5. You should be able to integrate with any of the [Git options](https://ionicframework.com/docs/appflow/quickstart/connect#choose-your-git-integration) available in Appflow.


<hr>

You can use this [repository](https://github.com/ionic-team/tutorial-appflow/tree/part-1_web_builds) to compare your starter project and make changes if necessary.

If you are facing any issues or need help understanding any of these concepts [contact support](https://ionic.zendesk.com/hc/en-us)
