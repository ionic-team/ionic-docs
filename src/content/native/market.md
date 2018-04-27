# Market 


Opens an app's page in the market place (Google Play, App Store)


Repo: [https://github.com/xmartlabs/cordova-plugin-market](https://github.com/xmartlabs/cordova-plugin-market)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-market
$ npm install --save @ionic-native/market
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { Market } from '@ionic-native/market';

constructor(private market: Market) { }

...

this.market.open('your.package.name');

```




<p><br></p>

## Instance Members

### open

Opens an app in Google Play / App Store

<dl>
<dt><h4>appId</h4><strong>Type: </strong><code>string</code></dt>
<dd>Package name</dd>
</dl>

### search

Search apps by keyword

<dl>
<dt><h4>keyword</h4><strong>Type: </strong><code>string</code></dt>
<dd>Keyword</dd>
</dl>

<p><br></p>

