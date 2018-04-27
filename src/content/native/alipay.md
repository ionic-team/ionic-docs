# Alipay 


This plugin is used for Alipay APP support. Integrated with the latest SDK.

Requires Cordova plugin: `cordova-alipay-base`. For more info, please see the [Alipay plugin docs](https://github.com/xueron/cordova-alipay-base).


Repo: [https://github.com/xueron/cordova-alipay-base](https://github.com/xueron/cordova-alipay-base)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">ionic cordova plugin add cordova-alipay-base --variable ALI_PID=your_app_id
$ npm install --save @ionic-native/alipay
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { Alipay, AlipayOrder } from '@ionic-native/alipay';

constructor(private alipay: Alipay) {

// Should get from server side with sign.
const alipayOrder: AlipayOrder = {
      ...
    }


this.alipay.pay(alipayOrder)
   .then(result => {
      console.log(result); // Success
   })
   .catch(error => {
      console.log(error); // Failed
   });

}


```




<p><br></p>

## Instance Members

### pay

Open Alipay to perform App pay

<dl>
<dt><h4>order</h4></dt>
<dd>alipay options</dd>
</dl>

<p><br></p>

## AlipayOrder

<dl>
<dt><h4>app_id</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>appId assigned by Alipay</dd><dt><h4>biz_content</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>biz content. formated in json. see alipay doc for detail.</dd><dt><h4>charset</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Charset
Possible values: "UTF-8", "GBK"
Default: "UTF-8"</dd><dt><h4>format</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Data format
Default: "JSON" <span class="tag">optional</span></dd><dt><h4>method</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Api name.
Should be: alipay.trade.app.pay</dd><dt><h4>notify_url</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Notify url.</dd><dt><h4>sign</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Sign value. Should be got from server side.
Default: 'RSA'</dd><dt><h4>sign_type</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Sign method
Default: 'RSA'</dd><dt><h4>timestamp</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Timestamp, formated like "yyyy-MM-dd HH:mm:ss", e.g. 2014-07-24 03:07:50</dd><dt><h4>version</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Api version. Fixed value '1.0'</dd>
</dl>

