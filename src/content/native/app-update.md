# AppUpdate 


This plugin does self-update for android


Repo: [https://github.com/vaenow/cordova-plugin-app-update](https://github.com/vaenow/cordova-plugin-app-update)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-app-update
$ npm install --save @ionic-native/app-update
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android




### Usage



You should first host an XML file on your server with the following data in it:
```xml
<update>
    <version>302048</version>
    <name>APK Name</name>
    <url>https://your-remote-api.com/YourApp.apk</url>
</update>
```

Then use the following code:

```typescript
import { AppUpdate } from '@ionic-native/app-update';

constructor(private appUpdate: AppUpdate) {

   const updateUrl = 'https://your-remote-api.com/update.xml';
   this.appUpdate.checkAppUpdate(updateUrl).then(() => { console.log('Update available') });

}
```

The plugin will compare the app version and update it automatically if the API has a newer version to install.



<p><br></p>

## Instance Members

### checkAppUpdate

Check and update

<dl>
<dt><h4>updateUrl</h4><strong>Type: </strong><code>string</code></dt>
<dd>update api url</dd><dt><h4>options</h4><strong>Type: </strong><code>AppUpdateOptions</code></dt>
<dd>See AppUpdateOptions table below <span class="tag">optional</span></dd>
</dl>

<p><br></p>

## AppUpdateOptions

<dl>
<dt><h4>authType</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>password</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>username</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

