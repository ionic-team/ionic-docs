# AdMobFree 




Repo: [https://github.com/ratson/cordova-plugin-admob-free](https://github.com/ratson/cordova-plugin-admob-free)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-admob-free
$ npm install --save @ionic-native/admob-free
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';


constructor(private admobFree: AdMobFree) { }


...


const bannerConfig: AdMobFreeBannerConfig = {
 // add your config here
 // for the sake of this example we will just use the test config
 isTesting: true,
 autoShow: true
}
this.admobFree.banner.config(bannerConfig);

this.admobFree.banner.prepare()
  .then(() => {
    // banner Ad is ready
    // if we set autoShow to false, then we will need to call the show method here
  })
  .catch(e => console.log(e));


```



<p><br></p>

## Instance Members

### banner

Returns the AdMobFreeBanner object

### events

Convenience object to get event names

### interstitial

Returns the AdMobFreeInterstitial object

### on

Watch an event

<dl>
<dt><h4>event</h4><strong>Type: </strong><code>string</code></dt>
<dd>event name</dd>
</dl>

### rewardVideo

Returns the AdMobFreeRewardVideo object

<p><br></p>

## AdMobFreeBannerConfig

<dl>
<dt><h4>autoShow</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Auto show ad when loaded <span class="tag">optional</span></dd><dt><h4>bannerAtTop</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set to true, to put banner at top <span class="tag">optional</span></dd><dt><h4>id</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Ad Unit ID <span class="tag">optional</span></dd><dt><h4>isTesting</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Receiving test ad <span class="tag">optional</span></dd><dt><h4>offsetTopBar</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set to true to avoid ios7 status bar overlap <span class="tag">optional</span></dd><dt><h4>overlap</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set to true, to allow banner overlap WebView <span class="tag">optional</span></dd><dt><h4>size</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Banner  size <span class="tag">optional</span></dd>
</dl>

## AdMobFreeInterstitialConfig

<dl>
<dt><h4>autoShow</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Auto show ad when loaded <span class="tag">optional</span></dd><dt><h4>id</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Ad Unit ID <span class="tag">optional</span></dd><dt><h4>isTesting</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Receiving test ad <span class="tag">optional</span></dd>
</dl>

## AdMobFreeRewardVideoConfig

<dl>
<dt><h4>autoShow</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Auto show ad when loaded <span class="tag">optional</span></dd><dt><h4>id</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Ad Unit ID <span class="tag">optional</span></dd><dt><h4>isTesting</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Receiving test ad <span class="tag">optional</span></dd>
</dl>

