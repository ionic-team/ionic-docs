---
previousText: '部署 API'
previousUrl: '/docs/appflow/deploy/api'
nextText: '使用 Ionic CLI'
nextUrl: '/docs/appflow/deploy/cli'
---

# 教程和视频

## iOS设置和部署

<wistia-video video-id="2702mkf530"></wistia-video>

了解如何安装、配置和部署您的第一个实时更新。

## 升级到新的部署插件

下面是成功升级到新版本的Pro Client、Deploy Plugin和Webview Plugin的步骤。 你可以跟随下面的指南或观看此视频：

<wistia-video video-id="0o27tfvoam"></wistia-video>

### 部署升级指南

你需要以下每个库的特定版本:

* `cordova-plugin-ionic-webview >= 2.0.0`
* `cordova-plugin-ionic >= 5.0.0`
* `@ionic/pro >= 2.0.0`

Ionic应用程序根目录中的以下命令应删除旧版本并为您安装新版本：

```bash
// 移除旧版本的webview插件
cordova plugin rm cordova-plugin-ionic-webview
// 添加新的webview插件
cordova plugin add cordova-plugin-ionic-webview@latest
// 移除旧的deploy插件
cordova plugin rm cordova-plugin-ionic
// 下载新的deploy插件
cordova plugin add cordova-plugin-ionic@latest --variable APP_ID=YOUR_APP_ID --variable CHANNEL_NAME=YOUR_CHANNEL_NAME
// 下载新版本的Pro SDK
npm install @ionic/pro@latest
```

设置完成！ 你应该配置好开始利用新的部署特性! 新插件

## 设置Beta Channel

在下面的视频教程和代码片段中，我们将使用Deploy API设置用户可以订阅的自定义Beta Channel，以便尽早获得更新! <iframe width="560" height="315" src="https://www.youtube.com/embed/I7PC3O4q1ug?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen mark="crwd-mark"></iframe>

### 选择你的集成类型：

这是一个示例页面的template/JS，我们允许用户从一个测试版渠道，而不是生产和应用更新时立即切换:

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
      // 错误
      // 下面是我们如何在捕获错误的同时将其记录到Ionic Pro Monitoring：

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
      await this.sync({updateMethod: 'auto'}); // 或者，使用performManualUpdate()自定义其工作方式
    } catch (err) {
      // 错误
      // 下面是我们如何在捕获错误的同时将其记录到Ionic Pro Monitoring：

      // Pro.monitoring.exception(err);
    }

  }

  async performManualUpdate() {

    /*
      在这里，我们将通过每一个手动步骤的更新过程:
检查、下载、解压缩和重定向。

      例如: 当用户登录你的应用时，检查、下载、解压，但当他们注销一个总是在运行的应用程序时，他们会重新定向，用于多个用户(如在医生办公室)。
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
      // 错误
      // 下面是我们如何在捕获错误的同时将其记录到Ionic Pro Monitoring：

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
      在这里，我们将通过每一个手动步骤的更新过程: 检查、下载、解压缩和重定向。

      例如: 当用户登录你的应用时，检查、下载、解压，但当他们注销一个总是在运行的应用程序时，他们会重新定向，用于多个用户(如在医生办公室)。
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
          // 我错误
          // 下面是我们如何在捕获错误的同时将其记录到Ionic Pro Monitoring：
          Pro.monitoring.exception(err);
        })
      }, function(err){
        // 错误
        // 下面是我们如何在捕获错误的同时将其记录到Ionic Pro Monitoring：
        Pro.monitoring.exception(err);
      })
    }
    }, function(err){
      // 错误
      // 下面是我们如何在捕获错误的同时将其记录到Ionic Pro Monitoring：
      Pro.monitoring.exception(err);
    })

  }

  $scope.toggleBeta = function(){

    var config = {
      channel: ( $scope.data.isBeta ? 'Beta' : 'Production' )
    }

    Pro.deploy.configure(config).then(function(res){
      checkChannel();
      Pro.deploy.sync({updateMethod: 'auto'}); // 或者，使用performManualUpdate()自定义其工作方式
    }, function(err){
      // 错误
      // 下面是我们如何在捕获错误的同时将其记录到Ionic Pro Monitoring：
      Pro.monitoring.exception(err);
    });

  }

})
```

</docs-tab> </docs-tabs>