# Pro 


This plugin enables Ionic Pro services like live updates and error monitoring


Repo: [https://github.com/ionic-team/cordova-plugin-ionic](https://github.com/ionic-team/cordova-plugin-ionic)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">ionic cordova plugin add cordova-plugin-ionic --save --variable APP_ID="XXXXXXXX" --variable CHANNEL_NAME="Channel"
$ npm install --save @ionic-native/pro
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { Pro, AppInfo, DeployInfo } from '@ionic-native/pro';


constructor(private pro: Pro) { }

// Get app info
this.pro.getAppInfo().then((res: AppInfo) => {
  console.log(res)
})

// Get live update info
this.pro.deploy.info().then((res: DeployInfo) => {
  console.log(res)
})
```




<p><br></p>

## Instance Members

### _deploy



### checkForPendingCrash

Not yet implemented

### deploy

Ionic Pro Deploy .js API.

### enableCrashLogging

Not yet implemented

### forceCrash

Not yet implemented

### getAppInfo

Get information about the currently running app

### loadPendingCrash

Not yet implemented

<p><br></p>

## AppInfo

<dl>
<dt><h4>bundleName</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>bundleVersion</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>platform</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>platformVersion</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>version</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

## DeployConfig

<dl>
<dt><h4>appId</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>channel</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>host</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

## DeployInfo

<dl>
<dt><h4>binary_version</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>channel</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>deploy_uuid</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

