# Mixpanel 


Cordova Plugin that wraps Mixpanel SDK for Android and iOS


Repo: [https://github.com/samzilverberg/cordova-mixpanel-plugin](https://github.com/samzilverberg/cordova-mixpanel-plugin)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-mixpanel
$ npm install --save @ionic-native/mixpanel
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* Browser
* iOS




### Usage


```typescript
import { Mixpanel } from '@ionic-native/mixpanel';

constructor(private mixpanel: Mixpanel, private mixpanelPeople: MixpanelPeople) { }

...

this.mixpanel.init(token)
  .then(onSuccess)
  .catch(onError);

```



<p><br></p>

## Instance Members

### registerSuperProperties

undefined

<dl>
<dt><h4>superProperties</h4><strong>Type: </strong><code>any</code></dt>
<dd>undefined</dd>
</dl>

### alias

undefined

<dl>
<dt><h4>aliasId</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>originalId</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### distinctId

undefined

### flush

undefined

### getSuperProperties

undefined

### identify

undefined

<dl>
<dt><h4>distinctId</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### init

undefined

<dl>
<dt><h4>token</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### registerSuperPropertiesOnce

undefined

<dl>
<dt><h4>superProperties</h4><strong>Type: </strong><code>any</code></dt>
<dd>undefined</dd>
</dl>

### reset

undefined

### timeEvent

undefined

<dl>
<dt><h4>eventName</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### track

undefined

<dl>
<dt><h4>eventName</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>eventProperties</h4><strong>Type: </strong><code>any</code></dt>
<dd>optional <span class="tag">optional</span></dd>
</dl>

### unregisterSuperProperty

undefined

<dl>
<dt><h4>superPropertyName</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

<p><br></p>

