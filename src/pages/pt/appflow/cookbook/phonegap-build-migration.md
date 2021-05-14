---
title: Migrating from PhoneGap Build to Ionic Appflow
sidebar_label: PhoneGap Build Migration
previousText: "Introduction"
previousUrl: "/docs/appflow/cookbook/intro"
nextText: "Apflow + Jenkins/GitLab/GitHub"
nextUrl: "/docs/appflow/cookbook/integrate-ci"
contributors:
  - chrisgriffith
meta:
  image: /docs/assets/img/appflow/cookbook/meta-pgb.png
  description: Migrating from PhoneGap Build to Ionic Appflow involves a few simple steps.
---

Migrating from Adobe’s [PhoneGap Build](https://build.phonegap.com) to Ionic Appflow involves just a few simple steps. In this guide, we’ll walk through the complete migration process from start to finish. Optionally, you can migrate the app to Ionic Framework as well.

> Apple now requires all iOS apps to be built with iOS 13 SDK or later (error ITMS-90725). Unfortunately, PhoneGap Build still uses version 12.1, meaning you can no longer submit to the App Store. Ionic Appflow is constantly updated with the latest iOS and Android SDKs, security patches, and tooling, ensuring that you'll never face app store delivery disruptions.

## Migration Summary

- Appflow is Ionic’s mobile DevOps service that helps development teams build, ship, and manage their iOS, Android and web apps. Featuring continuous native builds, live app deploys, 1-click deploy to App Stores, and CI/CD automation.
- PhoneGap/Cordova apps written in jQuery Mobile, Framework 7, Sencha, KendoUI, or even your own custom solution can be migrated. <strong>An existing Ionic app is not required.</strong>
- Ionic has [Advisory services](https://ionicframework.com/advisory) available if you need migration assistance.

> Building your app in the cloud with Ionic Appflow requires a subscription to the Launch plan and above. [Sign up here](https://ionicframework.com/pricing/compare).

## About PhoneGap Build

One of the challenges when developing a PhoneGap/Cordova based application is that in order for you to create native applications for iOS and Android using your web application, you also need to install all the same tooling that traditional mobile developers need. For example, if you want to create an iOS application, you have to download and install Xcode, assuming you have a Macintosh to run it on. If you are also planning to create an Android version of your application, then not only are you installing Android Studio but the Java SDK, as well as other tools. The challenge of learning and using these complex IDEs, making sure they are properly configured (and updated) can be daunting.

This challenge of installation, configuration and running these tools was one of the reasons back in 2012 that Adobe introduced a new service known as PhoneGap Build. This cloud-hosted platform allows users to simply zip their web application, include an xml file that defines various application elements, like icons and splash screens, and have it compile and create native applications. While it did not give the same level of controls as building locally, for many this was a great solution, especially for those developers without a Mac that want to compile native iOS applications. It also meant that no longer did you have a special build machine, but rather use a service that allowed for any authorized team member the ability to create their apps.

However, PhoneGap Build has some limitations, most notably the lack of access to some of the modern configuration options available today. A great example of this issue is when you try to integrate push notifications. As Adobe shifted its focus away from developers and toward creatives, resources supporting PhoneGap Build also dwindled. This has left many to wonder what solutions might exist to allow for cloud-based native mobile application compiling.

### Enter Ionic Appflow

Thankfully, Ionic's Appflow service has evolved to answer this need. For a number of years, Ionic has been exploring various cloud services that can assist in the development of Ionic-based applications. The basic idea behind Ionic Appflow is the same as PhoneGap Build; take your local web application, transfer it to the cloud and have it generate the native applications for you. This short article will walk you through the process needed to use Ionic Appflow for both those just getting started or looking to migrate from PhoneGap Build. While we'd love it if you use the Ionic Framework to develop your mobile application, Ionic Appflow is solution independent.

This means <strong>you can migrate an app written in jQuery Mobile, Framework 7, KendoUI, or even your own custom solution.</strong>

## Appflow Preparation

To get started with Ionic Appflow, we’ll make some simple updates to your existing app’s directory structure and config.xml file, then configure source control with Git.

### Migrate your config.xml file

In this step, we’ll relocate some files then update the config.xml file to reflect the changes.

<strong>First, move the config.xml file to the root level of the project.</strong>

As a result of this, the various paths pointing to icon and splash screen files might need to be adjusted. In addition, depending on the last time you might have worked with your config.xml file, there have been some changes that you might want to apply. For example, in older versions, we might have used the gap: prefix when defining the platform or density of our asset.

```xml
<icon src="icons/icon_36.png" gap:platform="android" gap:density="ldpi" />
```

Now, we can wrap all the assets that are used by a particular platform in the `<platform name="X"> </platform>` tag. In this example, the “resources” folder is at the root of the project. Folder names don’t have to match exactly like this, just ensure that the `src` path matches the directory structure.

```xml
<platform name="android">
    <icon density="ldpi" src="resources/android/icon/drawable-ldpi-icon.png" />
    <icon density="mdpi" src="resources/android/icon/drawable-mdpi-icon.png" />
    <icon density="hdpi" src="resources/android/icon/drawable-hdpi-icon.png" />
    <icon density="xhdpi" src="resources/android/icon/drawable-xhdpi-icon.png" />
    <icon density="xxhdpi" src="resources/android/icon/drawable-xxhdpi-icon.png" />
    <icon density="xxxhdpi" src="resources/android/icon/drawable-xxxhdpi-icon.png" />
    <splash density="land-ldpi" src="resources/android/splash/drawable-land-ldpi-screen.png" />
    <splash density="land-mdpi" src="resources/android/splash/drawable-land-mdpi-screen.png" />
    <splash density="land-hdpi" src="resources/android/splash/drawable-land-hdpi-screen.png" />
    <splash density="land-xhdpi" src="resources/android/splash/drawable-land-xhdpi-screen.png" />
    <splash density="land-xxhdpi" src="resources/android/splash/drawable-land-xxhdpi-screen.png" />
    <splash density="land-xxxhdpi" src="resources/android/splash/drawable-land-xxxhdpi-screen.png" />
    <splash density="port-ldpi" src="resources/android/splash/drawable-port-ldpi-screen.png" />
    <splash density="port-mdpi" src="resources/android/splash/drawable-port-mdpi-screen.png" />
    <splash density="port-hdpi" src="resources/android/splash/drawable-port-hdpi-screen.png" />
    <splash density="port-xhdpi" src="resources/android/splash/drawable-port-xhdpi-screen.png" />
    <splash density="port-xxhdpi" src="resources/android/splash/drawable-port-xxhdpi-screen.png" />
    <splash density="port-xxxhdpi" src="resources/android/splash/drawable-port-xxxhdpi-screen.png" />
</platform>
<platform name="ios">
    <icon height="57" src="resources/ios/icon/icon.png" width="57" />
    <icon height="114" src="resources/ios/icon/icon@2x.png" width="114" />
    <icon height="29" src="resources/ios/icon/icon-small.png" width="29" />
    <icon height="58" src="resources/ios/icon/icon-small@2x.png" width="58" />
    <icon height="87" src="resources/ios/icon/icon-small@3x.png" width="87" />
    <icon height="20" src="resources/ios/icon/icon-20.png" width="20" />
    <icon height="40" src="resources/ios/icon/icon-20@2x.png" width="40" />
    <icon height="60" src="resources/ios/icon/icon-20@3x.png" width="60" />
    <icon height="48" src="resources/ios/icon/icon-24@2x.png" width="48" />
    <icon height="55" src="resources/ios/icon/icon-27.5@2x.png" width="55" />
    <icon height="29" src="resources/ios/icon/icon-29.png" width="29" />
    <icon height="58" src="resources/ios/icon/icon-29@2x.png" width="58" />
    <icon height="87" src="resources/ios/icon/icon-29@3x.png" width="87" />
    <icon height="40" src="resources/ios/icon/icon-40.png" width="40" />
    <icon height="80" src="resources/ios/icon/icon-40@2x.png" width="80" />
    <icon height="120" src="resources/ios/icon/icon-40@3x.png" width="120" />
    <icon height="88" src="resources/ios/icon/icon-44@2x.png" width="88" />
    <icon height="50" src="resources/ios/icon/icon-50.png" width="50" />
    <icon height="100" src="resources/ios/icon/icon-50@2x.png" width="100" />
    <icon height="60" src="resources/ios/icon/icon-60.png" width="60" />
    <icon height="120" src="resources/ios/icon/icon-60@2x.png" width="120" />
    <icon height="180" src="resources/ios/icon/icon-60@3x.png" width="180" />
    <icon height="72" src="resources/ios/icon/icon-72.png" width="72" />
    <icon height="144" src="resources/ios/icon/icon-72@2x.png" width="144" />
    <icon height="76" src="resources/ios/icon/icon-76.png" width="76" />
    <icon height="152" src="resources/ios/icon/icon-76@2x.png" width="152" />
    <icon height="167" src="resources/ios/icon/icon-83.5@2x.png" width="167" />
    <icon height="172" src="resources/ios/icon/icon-86@2x.png" width="172" />
    <icon height="196" src="resources/ios/icon/icon-98@2x.png" width="196" />
    <icon height="1024" src="resources/ios/icon/icon-1024.png" width="1024" />
    <splash height="480" src="resources/ios/splash/Default~iphone.png" width="320" />
    <splash height="960" src="resources/ios/splash/Default@2x~iphone.png" width="640" />
    <splash height="1024" src="resources/ios/splash/Default-Portrait~ipad.png" width="768" />
    <splash height="768" src="resources/ios/splash/Default-Landscape~ipad.png" width="1024" />
    <splash height="1125" src="resources/ios/splash/Default-Landscape-2436h.png" width="2436" />
    <splash height="1242" src="resources/ios/splash/Default-Landscape-736h.png" width="2208" />
    <splash height="2048" src="resources/ios/splash/Default-Portrait@2x~ipad.png" width="1536" />
    <splash height="1536" src="resources/ios/splash/Default-Landscape@2x~ipad.png" width="2048" />
    <splash height="2732" src="resources/ios/splash/Default-Portrait@~ipadpro.png" width="2048" />
    <splash height="2048" src="resources/ios/splash/Default-Landscape@~ipadpro.png" width="2732" />
    <splash height="1136" src="resources/ios/splash/Default-568h@2x~iphone.png" width="640" />
    <splash height="1334" src="resources/ios/splash/Default-667h.png" width="750" />
    <splash height="2208" src="resources/ios/splash/Default-736h.png" width="1242" />
    <splash height="2436" src="resources/ios/splash/Default-2436h.png" width="1125" />
    <splash height="2732" src="resources/ios/splash/Default@2x~universal~anyany.png" width="2732" />
</platform>
```

You also might find that you need to generate some additional icons and splash screens to support the latest devices.

> Ionic offers a helpful tool that generates icons and splash screens from a single source Icon and Splash Screen image. [See here](https://github.com/ionic-team/cordova-res) for details.

The config.xml file might need some additional changes in order to function correctly. I would review each element in your existing config.xml and see if it uses [the latest syntax](https://cordova.apache.org/docs/en/latest/config_ref/index.html). Other changes you will need to be aware of is access to some features, like location, cameras or the microphone require additional elements in order to be used. If your existing application uses any of those functions, you will need to add the new elements to allow them to function.

Finally, you will want to make sure that whatever Cordova plugins you are using are the latest version to ensure compatibility with the current version of Cordova.

### Set up a Git Repository

> If you already have your app in a Git repository, you can skip this section.

One of the appeals of PhoneGap Build was its simplicity to trigger a build, zip up your app, and upload it to PhoneGap Build and a build with then automatically kick-off. While it was possible to connect PhoneGap Build with a Git repository, it was an optional step. Ionic Appflow requires the use of Git as part of its workflow.

If you are on a Mac, then Git is already installed, but Windows users will need to install Git if they have not done so already. I recommend using https://gitforwindows.org/ or for those who are uncomfortable working with CLIs, GitHub’s [desktop application](https://desktop.github.com). It makes working with Git much easier.

If you are starting from a new project, we will need to initialize a new repository by running this command:

```shell
$ git init
```

With the repository generated, we need to add the files to it. If your project includes items that you do not want to have under source control, like a node_modules folder, you will need to include a .gitignore file in your project's folder. Once you are ready, then run the following command:

```shell
$ git add .
```

Your files are now staged to be committed to the repo. To perform the actual commit, we need to run the git commit command and provide a commit message:

```shell
$ git commit -m "initial commit"
```

You will see all the files that are committed to the repo listed in the terminal.

Next, Ionic recommends either [GitHub](https://github.com) or [BitBucket](https://bitbucket.org) to host your Git repository. If you don’t have an account already, sign up for either of them then follow the provided instructions to create a new repository in their site.

There are a variety of ways to add your local repository to their sites, but ultimately you can create one from the command line:

```shell
$ git push origin master
```

### Create package.json and Ionic config files

> If you do not have Node or npm installed on your computer, you will need to do this before proceeding. If you need to install Node, please select the [current LTS version](https://nodejs.org).

Since Ionic Appflow was originally created to automate builds for Ionic apps, it requires two files that your app may not have. First, create a `package.json` file. The easiest way to create it is to run:

```bash
$ npm init
```

Answer all the prompts, including package name, version, and description. For `git repository`, enter the path configured in the previous step. The `entry point: (index.js)` can be set to anything since it won't be used.

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "my cordova app",
  "main": "index.js",
  "scripts": {
    "test": "test"
  },
  "repository": {
    "type": "git",
    "url": "git+https://myorg@bitbucket.org/teamname/my-app.git"
  },
  "author": "My Name",
  "license": "ISC",
  "homepage": "https://myhomepage.com"
}
```

Next, create a new file at the root of the project - `ionic.config.json`. Copy in the following, changing only the `name` for your app:

```json
{
  "name": "my-app",
  "type": "custom",
  "integrations": {
    "cordova": {}
  }
}
```

Finally, commit the new files to your project:

```bash
$ git add .
$ git commit -m "added package json and ionic config"
$ git push
```

### Migrate the Code

Now that we have our icons, splash screens, config.xml, and new required Appflow files in place, we can turn our attention to the actual app itself. Ionic Appflow expects the entire app to be inside of a directory named `www`. That's it. Create that directory then move all app files into it, including HTML, CSS, JavaScript, images and any other related resources.

Here is what the app’s directory structure should look like:

![App Structure](/docs/assets/img/appflow/cookbook/app_structure.png)

## Appflow Configuration

With your app ready for Appflow integration, it’s time to sign up, link your Git repository, then build the native iOS and Android versions. Begin by [signing up for an Appflow account](https://dashboard.ionicframework.com).

Once you’re logged into Appflow, navigate to the Apps page then click the “New App” button. Enter your app’s name then click the “Create App” button.

### Connect to a Git Host

Next, head to the Settings -> Git page. Under the “GitHub” or “Bitbucket Cloud” tabs that appear, link your GitHub or BitBucket account to Ionic Appflow by clicking the "Connect" button then authenticating using the standard OAuth login process.

After connecting your account, a list of your code repositories will appear. Choose the one you created earlier. Once it’s selected, a success message will appear: “Connected to [repository name] on GitHub/Bitbucket.”

Your app’s Git repository is now linked to Appflow, and any subsequent code commits will automatically be detected.

### Create a Native Build

Only new commits to your repository will be shown in Appflow. Commits made prior to establishing a connection with GitHub/BitBucket will not be displayed. Therefore, we have to make a new commit before we can build an iOS or Android app.

Make a change to one of your app’s files, then push the change up to your Git host:

```shell
$ git add .
$ git commit -m “ready to build native app”
$ git push origin master
```

Back over in the Ionic Appflow site, navigate to the Commits page. You’ll see the new code commit that you just pushed - click the “Start build” box icon on the far right of the page to begin a new build.

> As you push more updates, you can navigate to the Commits list then trigger a build for a particular commit by simply click the Build icon on the right.

Now we can choose which platform we want to build for: iOS (using Xcode 11 or 10), Android, or even a web-based deployment (used with Appflow’s [Live Deploy](/docs/appflow/deploy/intro) feature). For simplicity's sake (see below for more advanced certificate details), select Android as the target platform - it doesn’t require a security certificate to generate a native app file.

> To learn more about generating a signing certificate, please see [here](/docs/appflow/package/credentials).

Next, we can choose the Build Type, in our case, select Debug. The other options require a signing certificate. With those choices selected, click the blue Build button.

This will spin up a virtual machine to perform our build(s) on. Here we can watch in great detail the various build steps that are being executed for us. It will take a few minutes for the build to complete. The nice thing about seeing all these details of the process is when something goes amiss, you have far better insight into the issue. Once the process is done, you can download your native application and install it onto your mobile device.

That’s it! <strong>You’ve successfully migrated your app from PhoneGap Build to Ionic Appflow.</strong>

While you can stop here and use Appflow as-is for your native iOS and Android builds, continue reading for details on how to convert your app to an Ionic app. While not required, it offers a modern app development experience featuring an [open source UI toolkit](/docs/) with the latest iOS and Android designs, animations, and gestures.

## Migrating to Ionic

To begin the process of converting your existing app to Ionic, install the Ionic CLI first.

> If you do not have Node or npm installed on your computer, you will need to do this before proceeding. If you need to install Node, please select the [current LTS version](https://nodejs.org).

Open your command line and run:

```shell
$ npm i -g @ionic/cli
```

This will install the Ionic CLI for use globally. We are going to use the Ionic CLI's commands to create and initialize our project, then link it to our Ionic Appflow account. Speaking of Ionic Appflow accounts, if you have not created an account, let’s do that. Go to the Ionic Dashboard and [create your account](https://dashboard.ionicframework.com/signup). Once this is completed, we can return to our command line and take our next step.

### Create an Ionic App

With the Ionic CLI installed, we can now initialize the project. If you are starting a new project, just create a new project directory that we will work from. If you have an existing project, you might also want to create a new project directory and move your project into it. However, if your project is already under git's source control, then it's recommended to keep the project where it is and work within that directory.

Now that we have set our active directory, we can run the `ionic init` command:

```shell
$ ionic init
```

This command will ask you for your project name, for example, “Ionic App Flow Demo.” Next, it will inform us that it could not determine the project type. Since we are migrating a non-Ionic application, select the custom option. If you are adding Ionic Appflow to an existing Ionic application, you use the Ionic Appflow [installation guide](/docs/appflow/quickstart) instead. The CLI will then generate an `ionic.config.json` in our directory. The contents are fairly straight forward:

```json
{
  "name": "Ionic App Flow Demo",
  "integrations": {},
  "type": "custom"
}
```

We will touch upon that integration value in a moment, but let's finish setting up our base configurations. Another element that will be needed is a `package.json` file. If your project already has one, you can skip this step, just remember you will need to include in this directory. If you do not have one, then run `npm init`. Like the `ionic init` command, it will ask you a series of questions, go ahead and use the suggested responses. The `package.json` will look similar to this:

```json
{
  "name": "ionic-app-flow-demo",
  "version": "1.0.0",
  "description": "Appflow demo",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

## Integrating Cordova

The next step is adding Cordova to our project. Ionic uses this native runtime solution to assist developers with some of the more common complex tasks that they might need to solve. These include messaging solutions, payment systems, authentication, and so on. Since we are migrating an existing Cordova-based application, we need to run the following command:

```shell
$ ionic integrations enable cordova
```

Now if you haven't moved your config.xml into this directory, it will generate one for us. This is useful as you now have a current reference to compare against when you migrate your existing config.xml over. In addition, it will generate a resources folder that will contain placeholder app icons and splash screens for both iOS and Android.

## Connecting to Ionic Appflow

With our application configured to use Ionic Appflow, we can now connect it to the service. From the command line we need to log into the Ionic Dashboard:

```shell
$ ionic login
```

Enter the email and password you used to create your Ionic Appflow account earlier.

Now that we are logged in, we can link this app to our account. To do this step, run:

```shell
$ ionic link
```

This prompts us to choose between linking an existing app that we have defined by using the Ionic Appflow dashboard or creating a new app. Select the "Create new app" option.

The CLI now prompts for a name for the app. This should be the real name of your app. Next, you will be prompted to select which Git host you are going to use; GitHub or Ionic's. If you choose GitHub, it will guide you through the steps needed to securely connect your repo with the Ionic Appflow service. Here, we’ll choose Ionic Appflow, but note that this option is not intended to be a Git host. Ionic strongly suggests using GitHub, Bitbucket or another official git hosting service to backup your source code repository.

Next, the CLI will ask about your SSH(Secure SHell) settings. This will allow a secure connection between your system and the Ionic Appflow service. I will select the default option of Automatically setting up a new SSH key pair. And with that our app is linked with Ionic Appflow. If you head over to the Appflow dashboard, you should now see our app listed in the dashboard (https://dashboard.ionicframework.com).

## The final "push"

Now that we finally have all our items in place, we can kick off our first remote build. Appflow-based builds are triggered by a git push event. Depending on which git host you selected the command is slightly different. If you selected Ionic as your host, then the command is:

```shell
$ git push ionic master
```

Otherwise, it’s typically:

```shell
$ git push origin master
```

It should prompt you for the passphrase you assigned to the SSH Key, then begin the process of transferring the files to Ionic Appflow's system. Now we are ready to tell Appflow to create our first build. Switch to the Ionic Appflow Dashboard, select your app and then choose the Build menu item from the options on the left-hand side.

If you haven't performed a build yet, it will prompt us to create our first, so go ahead and click the button! Next, we have to select which commit we want to use to build from. Currently, we only have one commit, so the choice is simple.

Now we can choose which platform we want to build for: iOS (using Xcode 11 or 10) or Android. Next, we can choose the Build Type, in our case, it will be Debug. The other options require a signing certificate. With those choices selected, click the blue Build button.

This will spin up a virtual machine to perform our build(s) on. Here we can watch in great detail the various build steps that are being executed for us. It will take a few minutes for the build to complete. The nice thing about seeing all these details of the process is when something goes amiss, you have far better insight into the issue. Once the process is done, you can download your native application and install it on your mobile device.

That’s it! You’ve migrated your app to Ionic. To learn more about Ionic Framework’s UI components, [see here](/docs/). To explore the Ionic CLI, [see here](/docs/cli).

## Next Steps

You’ve created your first native application with Ionic Appflow, but that’s just the tip of the iceberg! Appflow offers many more features for teams building multiple apps quickly and easily. Feel free to explore the rest of the service, which includes Automations (robust CI/CD options including multiple environments and native configurations), Live Deploy (update the UI and business logic of your app remotely in real time) and recently, [1-click publish to app stores](https://ionicframework.com/blog/announcing-1-click-publish-to-app-stores-from-ionic-appflow/).

### Migrating Apple and Google Certificates

As seen above, Android debug builds are the easiest to get working, since they do not require a security certificate. However, Android release builds and all iOS build types require the application to be properly signed. If you have your certificates already stored on PhoneGap Build, there is no method to download them from the service. Thankfully, Apple certificates can be regenerated using Apple’s developer portal.

For Android certificates, since these were originally created locally by you, there is unfortunately no way to regenerate them. Since the Google Play Store requires updates to an app be signed with the same key, creating a new key will not work. If you are unable to locate the original key, a suggestion is to build a version of the app that alerts the current users of the new version and ask them to migrate to it.

For more information about signing certificates and signing certificates, please check out the details [here](/docs/appflow/package/credentials).

### Migrate from Cordova to Capacitor

While this article highlighted the steps you need to take to migrate your Cordova/PhoneGap based application to use Ionic's Appflow, there is another option worth considering: [Capacitor](https://capacitor.ionicframework.com/docs/).

For those unfamiliar with this solution, it is in many ways the spiritual successor to Cordova. While still leveraging web technologies to code your application, Capacitor allows the development to move close to the native tooling and capabilities providing an even better user experience and performance.

Fortunately, the migration process is easy and the majority of Cordova plugins are backward compatible with Capacitor. [Start migrating here](https://capacitor.ionicframework.com/docs/cordova/migrating-from-cordova-to-capacitor).

### Have Questions? Stuck? Migration Assistance Available

If you have any questions or run into issues working with Ionic Appflow, visit the [Ionic Forums](https://forum.ionicframework.com/c/ionic-appflow/). If you need migration assistance, Ionic has [Advisory services](https://ionicframework.com/advisory) available as well.
