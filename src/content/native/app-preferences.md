# AppPreferences 


This plugin allows you to read and write app preferences


Repo: [https://github.com/apla/me.apla.cordova.app-preferences](https://github.com/apla/me.apla.cordova.app-preferences)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-app-preferences
$ npm install --save @ionic-native/app-preferences
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* BlackBerry 10
* Browser
* iOS
* macOS
* Windows 8
* Windows Phone




### Usage


```typescript
import { AppPreferences } from '@ionic-native/app-preferences';

constructor(private appPreferences: AppPreferences) { }

...

this.appPreferences.fetch('key').then((res) => { console.log(res); });

```





<p><br></p>

## Instance Members

### clearAll

Clear preferences

### cloudSync

Return cloud synchronized configuration context
Currently supports Windows and iOS/macOS

### defaults

Return default configuration context
Currently supports Windows and iOS/macOS

### fetch

Get a preference value

<dl>
<dt><h4>dict</h4><strong>Type: </strong><code>string</code></dt>
<dd>Dictionary for key (OPTIONAL)</dd><dt><h4>key</h4><strong>Type: </strong><code>string</code></dt>
<dd>Key <span class="tag">optional</span></dd>
</dl>

### iosSuite



<dl>
<dt><h4>suiteName</h4><strong>Type: </strong><code>string</code></dt>
<dd>null</dd>
</dl>

### remove

Remove value from preferences

<dl>
<dt><h4>dict</h4><strong>Type: </strong><code>string</code></dt>
<dd>Dictionary for key (OPTIONAL)</dd><dt><h4>key</h4><strong>Type: </strong><code>string</code></dt>
<dd>Key <span class="tag">optional</span></dd>
</dl>

### show

Show native preferences interface

### store

Set a preference value

<dl>
<dt><h4>dict</h4><strong>Type: </strong><code>string</code></dt>
<dd>Dictionary for key (OPTIONAL)</dd><dt><h4>key</h4><strong>Type: </strong><code>string</code></dt>
<dd>Key</dd><dt><h4>value</h4><strong>Type: </strong><code>any</code></dt>
<dd>Value <span class="tag">optional</span></dd>
</dl>

### suite

Return named configuration context
In iOS you'll get a suite configuration, on Android — named file
Supports: Android, iOS

<dl>
<dt><h4>suiteName</h4><strong>Type: </strong><code>string</code></dt>
<dd>suite name</dd>
</dl>

### watch

Show native preferences interface

<dl>
<dt><h4>subscribe</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>true value to subscribe, false - unsubscribe</dd>
</dl>

<p><br></p>

