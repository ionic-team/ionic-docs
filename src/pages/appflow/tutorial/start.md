---
title: 'Project Creation'
previousText: 'Exploring Appflow Tutorial'
previousUrl: '/docs/appflow/tutorial'
nextText: 'Connect Your Repo'
nextUrl: '/docs/appflow/quickstart/connect'
tableOfContents: false
---

# Exploring Appflow Exercise 1

This part 1 of the exploring Appflow exercise consists of the following topics

1. Tooling for Ionic Starter App
1. Starter App using Ionic
1. Git integration and project creation
1. Preparing a web build and preview
1. Building for native 101(android debug)

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

***Refer [Getting started](https://ionicframework.com/docs/angular/your-first-app#download-required-tools) with tooling for more information***

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

 `NAME:			starter_app`
 `FRAMEWORK:		angular`
 `STARTER TEMPLATE:	blank`

***To know more about all the frameworks and various starter template to available to choose from refer [Starting an Ionic App](https://ionicframework.com/docs/developing/starting)***

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


***To learn more about these platforms, you can refer the docs on [Capacitor vs Cordova](https://ionicframework.com/resources/articles/capacitor-vs-cordova-modern-hybrid-app-development)***





## Project Creation and Git Integration

Appflow works directly with Git version control and uses your code base as the source of truth for Deploy and Package builds. In order for Appflow to access your code, you can choose to integrate directly using a hosting service like **GitHub**, **GitLab\*** or **Bitbucket.**

**To create an app in the Appflow Dashboard and then connect it to your git repo:**

1. Login to the Appflow Dashboard using your credentials and select the Apps tab from the side menu.
2. Next, select the Add App button, as shown below.

![Appflow](images/img1_1.png)


3. From the popup enter your starter Appname in the field and continue.


![Appflow](images/img1_2.png)




4. Select the Git sub menu from the setting menu in the side bar and select integrate as shown below.

![Appflow](images/img1_3.png)

5. You should be able to integrate any of the [Git options](https://ionicframework.com/docs/appflow/quickstart/connect#choose-your-git-integration) available as given with Appflow.

## Preparing a web build and preview

>**Note:** You need to enable web preview in settings for your app before you build to have previews for that particular build.

* To enable web previews go to settings > Web preview > Allow web builds to deploy to the web preview.

![Appflow](images/img1_4.png)

* Once you have enabled web previews for your application and you can toggle for each and every build. (shown below)

**Trigger a new web build**

1. To prepare a web build, There are two ways:
	1. Click the Start build icon from the Commits tab
	![Appflow](images/img1_5.png)
	OR,
	2.  Click the New build button in the top right from the Build > Builds tab
	![Appflow](images/img1_6.png)

2. You will need to make sure you've selected the correct commit to deploy.Then select the Web target platform and destinations as web preview to enable preview for this particular build as shown below.
![Appflow](images/img1_7.png)
3. Click build and the logs for your build instance should show up.
Once, the build is successful you can click the preview button to view the preview of your first Starter Application. <br>
<p align="center">
  <img src="images/img1_8.png">
</p>



* You can also download the artifact for this build by clicking on the build artifact on the left side.


You can use this repository to compare your starter project and make changes if necessary.

If you are facing any issues or need help understanding any of these concepts [contact support](support@ionic.io)
