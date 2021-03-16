---
title: 'Differentials'
previousText: 'Channels'
previousUrl: '/docs/appflow/deploy/channels'
nextText: 'Live Update API'
nextUrl: '/docs/appflow/deploy/api'
---


[Live Updates](https://ionicframework.com/docs/appflow/deploy/intro) are better if they are faster and included only the modified files from previous updates. This can be done using manifest file.

## Why do I need manifest file?
If the original native app (ipa/apk) has a deploy manifest file(`pro-manifest.json`) inside the built web directory (`www`), when an update is recieved, the manifest file which includes a hash for every file in the `www/` dir, is compared to the manifest included in the update and determines the files it needs to download. So that it can take advantage of reusing files/assets that may not have changed. This makes the update much smaller and faster, resulting in improved performance over slower connections. <br /><br /> If there isn't a manifest file in the bundled web app it will need to download all the files, resulting in unnecessary slower updates.

## How do I generate manifest file?
### If using Appflow for Native Builds
* If you are using [Appflow](https://ionicframework.com/docs/appflow) to build the native builds, Appflow creates the manifest file for you and includes it in the static files. This leads to better subsequent deploys.

* This can be seen in Appflow right after the npm run build step alongside ionic info and before step: cap_sync

```
 Generating app manifest...
 $ ionic deploy manifest
 ▸ [OK] Appflow Deploy manifest written to ./www/pro-manifest.json!
```


### If using Cordova and not using Appflow for Native Builds
* The manifest should be generated automatically on the cordova prepare event (Cordova hooks). No additional action required.

* Since Cordova takes care of this, any subsequent live deloys to the native build should download only the differentials.

### If using Capacitor and not using Appflow for Native Builds
* For [Capacitor](https://capacitorjs.com/docs) you are required to generate the manifest files manually.

* This can be done by using the command `ionic deploy manifest`.
```
ionic deploy manifest
[OK] Appflow Deploy manifest written to ./www/pro-manifest.json!
```

Since the manifest file needs to be created after you have modified the web assets, you need to run this command after creating the web assets (`npm run build`) and before you copy or update the plugins and platforms using `npx cap sync` or `npx cap copy`
```
npm run build
ionic deploy manifest
npx cap sync
```

The simplest way to manage that locally is by adding it to the build script in package.json.<br />
```
 "scripts": {
   "ng": "ng",
   "start": "ng serve",
   "build": "ng build; ionic deploy manifest",
  },
```
<br />

## How do I know if my app contains a manifest file that is already built?

You can verify the Deploy manifest file by extracting the production `.ipa/.apk` file and checking for the presence of `pro-manifest.json` in the www/ dir. That should be an easy way to see if the manifest is being prepared correctly when you build for native.

<br />

## Known Issues and Common Misconceptions
* Misconception

  > If Native build is done locally and live updates are deployed using Appflow, only the first Live update is completely downloaded and subsequent downloads are faster.

  No, If the native build does not contain the manifest file, it is impossible for the deploy to know which files are already present. Therefore, all the files are downloaded with every update.
* Known Issue <br /><br /> There can be issues when the manifest is prepared on `Windows` owing to the way line endings are handled and commited. If you're building for native on Windows you may want to try a build using Appflow and see if you notice an improvement.




