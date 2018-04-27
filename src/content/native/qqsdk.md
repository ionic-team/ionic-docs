# QQSDK 


This Plugin is a wrapper around the Tencent QQ SDK for Android and iOS. Provides access to QQ ssoLogin, QQ Sharing, QQZone Sharing etc.

Requires Cordova plugin: `cordova-plugin-qqsdk`. For more info, please see the [QQSDK plugin docs](https://github.com/iVanPan/Cordova_QQ).


Repo: [https://github.com/iVanPan/Cordova_QQ](https://github.com/iVanPan/Cordova_QQ)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">ionic cordova plugin add cordova-plugin-qqsdk --variable QQ_APP_ID=YOUR_QQ_APPID
$ npm install --save @ionic-native/qqsdk
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { QQSDK, QQShareOptions } from '@ionic-native/qqsdk';

constructor(private qq: QQSDK) { }

...


const options: QQShareOptions = {
  client: this.qq.ClientType.QQ,
  scene: this.qq.Scene.QQ,
  title: 'This is a title for cordova-plugin-qqsdk',
  url: 'https://cordova.apache.org/',
  image: 'https://cordova.apache.org/static/img/cordova_bot.png',
  description: 'This is  Cordova QQ share description',
  flashUrl:  'http://stream20.qqmusic.qq.com/30577158.mp3',
}

const clientOptions: QQShareOptions = {
  client: this.qq.ClientType.QQ,
}

const shareTextOptions: QQShareOptions = {
  client: this.qq.ClientType.QQ,
  text: 'This is Share Text',
  scene: this.qq.Scene.QQ,
}

this.qq.ssoLogin(clientOptions)
   .then(result => {
      // Success
      console.log('token is ' + result.access_token);
      console.log('userid is ' + result.userid);
      console.log('expires_time is ' + new Date(parseInt(result.expires_time)) + ' TimeStamp is ' + result.expires_time);
   })
   .catch(error => {
      console.log(error); // Failed
   });

this.qq.logout()
   .then(() => {
      console.log('logout success');
   })
   .catch(error => {
      console.log(error);
   });

this.qq.checkClientInstalled(clientOptions)
   .then(() => {
      console.log('Installed');
   })
   .catch(() => {
      console.log('Not Installed');
   });

this.qq.shareText(shareTextOptions)
   .then(() => {
      console.log('shareText success');
   })
   .catch(error => {
      console.log(error);
   });

this.qq.shareImage(options)
   .then(() => {
      console.log('shareImage success');
   })
   .catch(error => {
      console.log(error);
   });
}

this.qq.shareNews(options)
   .then(() => {
      console.log('shareNews success');
   })
   .catch(error => {
      console.log(error);
   });
}

this.qq.shareAudio(options)
   .then(() => {
      console.log('shareAudio success');
   })
   .catch(error => {
      console.log(error);
   });

```




<p><br></p>

## Instance Members

### ClientType

 client type:  QQ application or TIM application

### Scene

QQ Share Scene

### checkClientInstalled

Detect if the QQ application or TIM application is installed on the device.

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>QQShareOptions</code></dt>
<dd>See QQShareOptions table below</dd>
</dl>

### logout



### shareAudio

shareAudio

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>QQShareOptions</code></dt>
<dd>See QQShareOptions table below</dd>
</dl>

### shareImage

shareImage

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>QQShareOptions</code></dt>
<dd>See QQShareOptions table below</dd>
</dl>

### shareNews

shareNews

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>QQShareOptions</code></dt>
<dd>See QQShareOptions table below</dd>
</dl>

### shareText

shareText

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>QQShareOptions</code></dt>
<dd>See QQShareOptions table below</dd>
</dl>

### ssoLogin

open QQ or TIM client perform ssoLogin

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>QQShareOptions</code></dt>
<dd>See QQShareOptions table below</dd>
</dl>

<p><br></p>

## QQShareOptions

<dl>
<dt><h4>client</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The clinet type, QQ or TIM
Default is QQ <span class="tag">optional</span></dd><dt><h4>description</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The description for share image,news or audio <span class="tag">optional</span></dd><dt><h4>flashUrl</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd> The URL for audio <span class="tag">optional</span></dd><dt><h4>image</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The image for share image,news or audio
Image supports three types:
1. Network URL
2. Base64
3. Absolute file path <span class="tag">optional</span></dd><dt><h4>scene</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The Share Sence
Default is QQ <span class="tag">optional</span></dd><dt><h4>text</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The text for shareText <span class="tag">optional</span></dd><dt><h4>title</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The title for share image,news or audio <span class="tag">optional</span></dd><dt><h4>url</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The url for share news or audio <span class="tag">optional</span></dd>
</dl>

