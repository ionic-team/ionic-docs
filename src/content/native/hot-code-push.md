# HotCodePush 


HotCodePush plugin for Cordova that supports iOS and Android. This plugin allows you to keep your html, css and js files synced with your server.

For more info, please see the detailed wiki https://github.com/nordnet/cordova-hot-code-push/wiki


Repo: [https://github.com/nordnet/cordova-hot-code-push](https://github.com/nordnet/cordova-hot-code-push)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-hot-code-push
$ npm install --save @ionic-native/hot-code-push
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { HotCodePush } from '@ionic-native/hot-code-push';

constructor(private hotCodePush: HotCodePush) { }

...

hotCodePush.fetchUpdate(options).then(data => { console.log('Update available'); });

```




<p><br></p>

## Instance Members

### onBeforeInstall

Event sent when an update is about to be installed.

### fetchUpdate

Download updates from the server-side.

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>HotCodePushRequestOptions</code></dt>
<dd>See HotCodePushRequestOptions table below <span class="tag">optional</span></dd>
</dl>

### onNothingToInstall

Event sent when there is nothing to install. Probably, nothing was loaded before that.

### installUpdate

Install update if there is anything to install.

### getVersionInfo

Gets information about the app's versions.

### isUpdateAvailableForInstallation

Check if update was loaded and ready to be installed.

### onAssetsInstallationError

Event sent when plugin couldn't copy files from bundle on the external storage. If this happens - plugin won't work. Can occur when there is not enough free space on the device.

### onAssetsInstalledOnExternalStorage

Event sent when plugin successfully copied web project files from bundle on the external storage. Most likely you will use it for debug purpose only. Or even never.

### onBeforeAssetsInstalledOnExternalStorage

Event sent when plugin is about to start installing bundle content on the external storage.

### onNothingToUpdate

Event sent when we successfully loaded application config from the server, but there is nothing new is available.

### onUpdateInstallFailed

Event sent when update installation failed. Error details are attached to the event.

### onUpdateInstalled

Event sent when update was successfully installed.

### onUpdateIsReadyToInstall

Event sent when new release was successfully loaded and ready to be installed.

### onUpdateLoadFailed

Event sent when plugin couldn't load update from the server. Error details are attached to the event.

### requestApplicationUpdate

Show dialog with the request to update application through the Store (App Store or Google Play).

<dl>
<dt><h4>message</h4><strong>Type: </strong><code>string</code></dt>
<dd>Message to show in the dialog</dd>
</dl>

<p><br></p>

## HotCodePushError

<dl>
<dt><h4>code</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined</dd><dt><h4>description</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

## HotCodePushEventData

<dl>
<dt><h4>details</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

## HotCodePushRequestOptions

<dl>
<dt><h4>config-file</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Url of the chcp.json config on the server. Plugin will use this one instead of <config-file url=""> from the config.xml. <span class="tag">optional</span></dd><dt><h4>request-headers</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>Additional HTTP headers, that will be added to all requests in update download process, including loading configs and new/changed files. <span class="tag">optional</span></dd>
</dl>

## HotCodePushUpdate

<dl>
<dt><h4>currentVersion</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Current version installed.</dd><dt><h4>readyToInstallVersion</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Available version to replace the current one.</dd>
</dl>

## HotCodePushVersion

<dl>
<dt><h4>appVersion</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Application's version name. This version is visible to the user on the stores.</dd><dt><h4>buildVersion</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Application's build version number.</dd><dt><h4>currentWebVersion</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Version of the web content, that is displayed to the user. Basically, value of the release property from chcp.json file in your local www folder.</dd><dt><h4>previousWebVersion</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Previous web content version. This is a version of our backup. Can be empty, if there were no updates installed.</dd><dt><h4>readyToInstallWebVersion</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Version number of the web content, that was loaded by the plugin and ready to be installed. Basically, value of the release property from chcp.json file on your server. Can be empty, if no update is waiting for installation.</dd>
</dl>

