# Realtime App Updates with Appflow Live Updates

As you’ve seen so far, building web and mobile apps is quick and easy with the Ionic Framework. However, nothing disrupts rapid iteration faster than App Store delays. Fortunately, with Appflow’s Deploy feature, you can send live code changes directly to your users. Paired with seamless background updates, they are always upgraded to the latest version.

Setting it up is quick and easy. For reference, continue to refer to [the part 3 folder](https://github.com/ionic-team/photo-gallery-tutorial-ionic3/tree/master/part3) on GitHub. First, install the Appflow JavaScript library:

```shell
$ npm install @ionic/pro@latest --save
```

Then, add the Appflow plugin. Here’s the command to install it:

```shell
$ ionic cordova plugin add cordova-plugin-ionic@latest --save
--variable APP_ID=YOUR_APP_ID --variable CHANNEL_NAME=YOUR_CHANNEL_NAME
```

There are two unique values to provide: your app id and channel name. Sign into Appflow, then find the App Id on your app’s dashboard:

![app id location](/img/guides/first-app-v3/app-id-location.png)

And we’ll just use “Master” as the channel name. Putting this together looks like:

```shell
$ ionic cordova plugin add cordova-plugin-ionic@latest --save
--variable APP_ID=381533B9 --variable CHANNEL_NAME=Master
```

After this plugin has been added, you’ll notice that `config.xml` and `package.json` have been updated with your app’s details:

```xml
<plugin name="cordova-plugin-ionic" spec="^5.0.6">
    <variable name="APP_ID" value="381533B9" />
    <variable name="CHANNEL_NAME" value="Master" />
    <variable name="WARN_DEBUG" value="true" />
    <variable name="UPDATE_API" value="https://api.ionicjs.com" />
    <variable name="UPDATE_METHOD" value="background" />
    <variable name="MAX_STORE" value="2" />
    <variable name="MIN_BACKGROUND_DURATION" value="30" />
</plugin>
```

Next, modify `src/app/app.module.ts` to include the initialization of Appflow on app startup:

```javascript
import { Pro } from '@ionic/pro';

Pro.init('YOUR_APP_ID', {
  appVersion: 'APP_VERSION',
});
```

As an example, this would look like:

```javascript
Pro.init('381533B9', {
  appVersion: '0.0.1',
});
```

Next, push the code up to Appflow:

```shell
git add .
git commit -m “adding Appflow”
git push ionic master
```

Next, create a local, native build of the app.

## Android Builds

Follow the [Android Setup instructions](../../../developing/android.md), which includes installing Java 8 and Android Studio on your machine. Then, in your Terminal run:

```shell
ionic cordova build android --prod
```

This will generate a unsigned debug build (meaning the app can run on any Android device).

## iOS Builds

iOS is [a bit trickier to set up](../../../developing/ios.md) than Android and requires a Mac computer. Ensure XCode is updated to the latest version and set up a development team. Then, in your Terminal, run:

```shell
ionic cordova build ios --prod
```

Then, continue to [follow the instructions here](../../../deployment/app-store.md) regarding signing certificates, etc. With a native version of your app built, let’s copy it to your device of choice.

## Add the Native App to Your Local Device

Now comes the fun part: testing out the native app on your device! For iOS, the easiest way (that works for both PC and Mac) involves using iTunes. Connect your iOS device, locate your IPA file, then drag and drop the IPA file from the file system onto your device in iTunes. The app will install immediately and be ready for use:

<div class="wistia_responsive_padding" style={{ padding: '62.5% 0 0 0', position: 'relative' }}>
  <div
    class="wistia_responsive_wrapper"
    style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}
  >
    <iframe
      src="https://fast.wistia.net/embed/iframe/s5v4fujv7w?videoFoam=true"
      title="Wistia video player"
      allowtransparency="true"
      frameborder="0"
      scrolling="no"
      class="wistia_embed"
      name="wistia_embed"
      allowfullscreen
      mozallowfullscreen
      webkitallowfullscreen
      oallowfullscreen
      msallowfullscreen
      width="100%"
      height="100%"
    ></iframe>
  </div>
</div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

For Android testing, the easiest way across all OS platforms is to use [Android Studio](https://developer.android.com/studio/), Google’s official Android IDE. After downloading it, connect your Android device to your computer. On the Studio startup screen, select “Profile or debug APK”, then select the recently built APK file.

In the upper right hand corner, click the Play button. Select your connected device, then click OK:

<div class="wistia_responsive_padding" style={{ padding: '62.5% 0 0 0', position: 'relative' }}>
  <div
    class="wistia_responsive_wrapper"
    style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}
  >
    <iframe
      src="https://fast.wistia.net/embed/iframe/b2ys5v4sno?videoFoam=true"
      title="Wistia video player"
      allowtransparency="true"
      frameborder="0"
      scrolling="no"
      class="wistia_embed"
      name="wistia_embed"
      allowfullscreen
      mozallowfullscreen
      webkitallowfullscreen
      oallowfullscreen
      msallowfullscreen
      width="100%"
      height="100%"
    ></iframe>
  </div>
</div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

## Deploying Changes

With Appflow Deploy, any JavaScript, HTML, or CSS changes can be pushed automatically to app users. Open the Photo Gallery app in your favorite code editor, then update the title of the Gallery page:

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Photo Viewer</ion-title>
  </ion-toolbar>
</ion-header>
```

Next, push the code up to Appflow:

```shell
$ git add .
$ git commit -m “change name to Photo Viewer”
$ git push ionic master
```

Log into the [Appflow dashboard](https://dashboard.ionicframework.com) and navigate to Deploy -> Builds. You’ll see this newest commit begin to build immediately. Since we assigned the Appflow plugin to the Master branch (the one we always Git Push to), the Channel label will also point to this commit, effectively auto-deploying this change to all app users:

![deploy channel](/img/guides/first-app-v3/deploy-channel.png)

A Channel points to a specific JavaScript Build or Snapshot of your app that will be shared with devices listening to that channel for updates. You can change which Build a Channel points to whenever you’d like.

Each time a user launches our Photo Gallery app, it will poll for updates from Appflow. If new code is available, the update is downloaded in the background. There are [a handful of ways](https://ionic.io/docs/appflow/deploy/api#update_method) to control how updates are performed, but by default they will be applied the next time the user closes then opens the app.

When the latest Build has been successful, close your local copy of Photo Gallery app or put it in the background for 30 seconds (the [MIN_BACKGROUND_DURATION default](https://ionic.io/docs/appflow/deploy/api#min_background_duration)), then reopen it. The title of the Photo Gallery page should change from “Photo Gallery” to “Photo Viewer.”

What if you deploy a change, then realize that there is a bug? Or perhaps you’re just not happy with the name “Photo Viewer?” No problem: Appflow Deploy makes it easy to roll back changes as well!

On the Deploy Builds page, click the “Assign to Channel” button on the previous commit, then click “Deploy.” App users will be reverted to the previous version, and our “Photo Gallery” name has been restored.

![deploy channel](/img/guides/first-app-v3/deploy-revertChange.png)

This was just a taste of what you can do with Appflow Live Updates! You can also set up multiple deployment channels to send targeted updates to specific groups of users. Use it to run A/B tests, or target the distribution of updates by audience, geography, or test group.

## Stuck on creating local native builds?

Building native app binaries for Android and iOS can be painful. The tooling isn’t great, new OS versions often result in challenging upgrades, and creating consistent builds across your dev team can be frustrating. Fortunately, Appflow’s Package feature makes this easy: simply upload your iOS certificate and Android keystore files, then we take care of the rest!

[Start packaging your app in the cloud](https://dashboard.ionicframework.com/settings/billing) along with 10,000 Ionic Deploys per month.

Up next, we look at Appflow Monitoring - track your app errors in realtime.
