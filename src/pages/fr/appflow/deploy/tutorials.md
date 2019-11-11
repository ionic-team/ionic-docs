---
previousText: 'Deploy API'
previousUrl: '/docs/appflow/deploy/api'
nextText: 'Using Ionic CLI'
nextUrl: '/docs/appflow/deploy/cli'
---

# Tutorials and Videos

## Setup and Deploy on iOS

<wistia-video video-id="2702mkf530"></wistia-video>

Learn how to install, configure, and deploy your first live update.

## Upgrading to the New Deploy Plugin

Here are the steps in order to successfully upgrade to the new version of the Pro Client, Deploy Plugin, and Webview Plugin. You can follow the guide below or watch this video:

<wistia-video video-id="0o27tfvoam"></wistia-video>

### Deploy Upgrade Guide

You'll need specific versions of each of the following libraries:

* `cordova-plugin-ionic-webview >= 2.0.0`
* `cordova-plugin-ionic >= 5.0.0`
* `@ionic/pro >= 2.0.0`

The following commands inside the root of you Ionic app should remove the old versions and install the new ones for you:

```bash
// remove the old version of the webview plugin
cordova plugin rm cordova-plugin-ionic-webview
// add the the new webview plugin
cordova plugin add cordova-plugin-ionic-webview@latest
// remove the old deploy plugin
cordova plugin rm cordova-plugin-ionic
// install the new deploy plugin
cordova plugin add cordova-plugin-ionic@latest --variable APP_ID=YOUR_APP_ID --variable CHANNEL_NAME=YOUR_CHANNEL_NAME
// install the new Pro SDK
npm install @ionic/pro@latest
```

That's it! You should be all configured to start taking advanatage of the new deploy features! The new plugin

## Setting up a Beta Channel

In the following video tutorial, and code snippets we use the Deploy API to set up a custom Beta Channel that users can subscribe to in order to get updates early! <iframe width="560" height="315" src="https://www.youtube.com/embed/I7PC3O4q1ug?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen mark="crwd-mark"></iframe> 

### Choose your Integration Type:

Here's an example template/JS for a page where we allow users to toggle to pull from a Beta Channel instead of Production and apply updates immediately when they toggle:

<docs-tabs> <docs-tab tab="Ionic 2/3"> <!-- HERE IS WHERE IONIC 2+ CONTENT GOES -->

```html
<!-- settings.html -->
<ion-header>
  <ion-navbar>
    <ion-title>Settings</ion-title>
  </ion-navbar>
</ion-header>

<ion-content class="ion-padding">
  <h3>Settings</h3>

  <p>I'm connected to the {{ deployChannel }}.</p>

  <p>Download Progress {{ downloadProgress }} / 100</p>

  <ion-item>
    <ion-label>Opt in to Beta Features</ion-label>
    <ion-toggle [(ngModel)]="isBeta" (ionChange)="toggleBeta()"></ion-toggle>
  </ion-item>

</ion-content>
```

```js
// settings.ts
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Pro } from '@ionic/pro';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  public deployChannel = "";
  public isBeta = false;
  public downloadProgress = 0;

  constructor(public navCtrl: NavController) {
    this.checkChannel();
  }

  async checkChannel() {
    try {
      const res = await Pro.deploy.getConfiguration();
      this.deployChannel = res.channel;
      this.isBeta = (this.deployChannel === 'Beta')
    } catch (err) {
      // We encountered an error.
      // Here's how we would log it to Ionic Pro Monitoring while also catching:

      // Pro.monitoring.exception(err);
    }
  }

  async toggleBeta() {
    const config = {
      channel: (this.isBeta ? 'Beta' : 'Production')
    }

    try {
      await Pro.deploy.configure(config);
      await this.checkChannel();
      await this.sync({updateMethod: 'auto'}); // Alternatively, to customize how this works, use performManualUpdate()
    } catch (err) {
      // We encountered an error.
      // Here's how we would log it to Ionic Pro Monitoring while also catching:

      // Pro.monitoring.exception(err);
    }

  }

  async performManualUpdate() {

    /*
      Here we are going through each manual step of the update process:
      Check, Download, Extract, and Redirect.

      Ex: Check, Download, Extract when a user logs into your app,
        but Redirect when they logout for an app that is always running
        but used with multiple users (like at a doctors office).
    */

    try {
      const update = await Pro.deploy.checkForUpdate();

      if (update.available){
        this.downloadProgress = 0;

        await Pro.deploy.downloadUpdate((progress) => {
          this.downloadProgress = progress;
        })
        await Pro.deploy.extractUpdate();
        await Pro.deploy.reloadApp();
      }
    } catch (err) {
      // We encountered an error.
      // Here's how we would log it to Ionic Pro Monitoring while also catching:

      // Pro.monitoring.exception(err);
    }

  }

}
```

</docs-tab> <docs-tab tab="Ionic 1">

```html
<!-- settings.html -->
<ion-view view-title="Settings">
  <ion-content>
    <h3>Settings</h3>
    <p>I'm connected to the {{data.deployChannel}} channel.
    <p>Download Progress {{data.downloadProgress}} / 100</p>
    <ion-list>
      <ion-toggle ng-model="data.isBeta" ng-change="toggleBeta()">
        Opt in to Beta Features
      </ion-toggle>
    </ion-list>
  </ion-content>
</ion-view>
```

```js
// controllers.js
.controller('SettingsCtrl', function($scope, $timeout, $ionicPlatform) {

  $scope.data = {
    'deployChannel': '',
    'isBeta': false,
    'downloadProgress': 0
  }

  function checkChannel(){
    Pro.deploy.getConfiguration().then(function(res){
      $timeout(function(){
        $scope.data.deployChannel = res.channel;
        $scope.data.isBeta = ($scope.data.deployChannel === 'Beta');
      })
    })
  }

  $ionicPlatform.ready(function(){
    checkChannel();
  });


  function performManualUpdate(){

    /*
      Here we are going through each manual step of the update process:
      Check, Download, Extract, and Redirect.

      Ex: Check, Download, Extract when a user logs into your app,
        but Redirect when they logout for an app that is always running
        but used with multiple users (like at a doctors office).
    */

    Pro.deploy.checkForUpdate().then(function(update){
    if (update.available){
      $scope.data.downloadProgress = 0;
      Pro.deploy.downloadUpdate(function(progress){
        $timeout(function(){
          $scope.data.downloadProgress = progress;
        })
      }).then(function(res){
        Pro.deploy.extractUpdate().then(function(res){
          Pro.deploy.reloadApp();
        }, function(err){
          // We encountered an error.
          // Here's how we would log it to Ionic Pro Monitoring while also catching:
          Pro.monitoring.exception(err);
        })
      }, function(err){
        // We encountered an error.
        // Here's how we would log it to Ionic Pro Monitoring while also catching:
        Pro.monitoring.exception(err);
      })
    }
    }, function(err){
      // We encountered an error.
      // Here's how we would log it to Ionic Pro Monitoring while also catching:
      Pro.monitoring.exception(err);
    })

  }

  $scope.toggleBeta = function(){

    var config = {
      channel: ( $scope.data.isBeta ? 'Beta' : 'Production' )
    }

    Pro.deploy.configure(config).then(function(res){
      checkChannel();
      Pro.deploy.sync({updateMethod: 'auto'}); // Alternatively, to customize how this works, use performManualUpdate()
    }, function(err){
      // We encountered an error.
      // Here's how we would log it to Ionic Pro Monitoring while also catching:
      Pro.monitoring.exception(err);
    });

  }

})
```

</docs-tab> </docs-tabs>