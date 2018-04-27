# SMS 



Requires Cordova plugin: cordova-sms-plugin. For more info, please see the [SMS plugin docs](https://github.com/cordova-sms/cordova-sms-plugin).


Repo: [https://github.com/cordova-sms/cordova-sms-plugin](https://github.com/cordova-sms/cordova-sms-plugin)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-sms-plugin
$ npm install --save @ionic-native/sms
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS
* Windows
* Windows Phone 8




### Usage


```typescript
import { SMS } from '@ionic-native/sms';

constructor(private sms: SMS) { }


...


// Send a text message using default options
this.sms.send('416123456', 'Hello world!');
```



<p><br></p>

## Instance Members

### hasPermission

This function lets you know if the app has permission to send SMS

### send

Sends sms to a number

<dl>
<dt><h4>phoneNumber</h4></dt>
<dd>Phone number</dd><dt><h4>message</h4><strong>Type: </strong><code>string</code></dt>
<dd>Message</dd><dt><h4>options</h4><strong>Type: </strong><code>SmsOptions</code></dt>
<dd>See SmsOptions table below <span class="tag">optional</span></dd>
</dl>

<p><br></p>

## SmsOptions

<dl>
<dt><h4>android</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>replaceLineBreaks</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set to true to replace \n by a new line. Default: false <span class="tag">optional</span></dd>
</dl>

## SmsOptionsAndroid

<dl>
<dt><h4>intent</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set to "INTENT" to send SMS with the native android SMS messaging. Leaving it empty will send the SMS without opening any app. <span class="tag">optional</span></dd>
</dl>

