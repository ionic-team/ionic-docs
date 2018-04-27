# AdMobPro 


Plugin for Google Ads, including AdMob / DFP (DoubleClick for publisher) and mediations to other Ad networks.

IMPORTANT NOTICE: this plugin takes a percentage out of your earnings if you profit more than $1,000. Read more about this on the plugin's repo. For a completely free alternative, see [AdMobPro Free](../admob-free).

Repo: [https://github.com/floatinghotpot/cordova-admob-pro](https://github.com/floatinghotpot/cordova-admob-pro)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-admobpro
$ npm install --save @ionic-native/admob-pro
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS
* Windows Phone 8




### Usage


```typescript
import { AdMobPro } from '@ionic-native/admob-pro';
import { Platform } from 'ionic-angular';

constructor(private admob: AdMobPro, private platform: Platform ) { }

ionViewDidLoad() {
  this.admob.onAdDismiss()
    .subscribe(() => { console.log('User dismissed ad'); });
}

onClick() {
  let adId;
  if(this.platform.is('android')) {
    adId = 'YOUR_ADID_ANDROID';
  } else if (this.platform.is('ios')) {
    adId = 'YOUR_ADID_IOS';
  }
  this.admob.prepareInterstitial({adId: adId})
    .then(() => { this.admob.showInterstitial(); });
}

```




<p><br></p>

## Instance Members

### prepareInterstitial

Prepare interstitial banner

<dl>
<dt><h4>adIdOrOptions</h4></dt>
<dd>Ad ID or Options</dd>
</dl>

### AD_POSITION



### prepareRewardVideoAd

Prepare a reward video ad

<dl>
<dt><h4>adIdOrOptions</h4></dt>
<dd>Ad ID or Options</dd>
</dl>

### createBanner

Create a banner

<dl>
<dt><h4>adIdOrOptions</h4></dt>
<dd>Ad ID or Options</dd>
</dl>

### removeBanner

Destroy the banner, remove it from screen.

### hideBanner

Hide the banner, remove it from screen, but can show it later

### getAdSettings

Get user ad settings

### onAdDismiss

Triggered when dismiss the Ad and back to your App

### onAdFailLoad

Triggered when failed to receive Ad

### onAdLeaveApp

Triggered when user click the Ad, and will jump out of your App

### onAdLoaded

Triggered when Ad received

### onAdPresent

Triggered when Ad will be showed on screen

### setOptions

Sets the values for configuration and targeting

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>AdMobOptions</code></dt>
<dd>See AdMobOptions table below</dd>
</dl>

### showBanner

Show banner at position

<dl>
<dt><h4>position</h4><strong>Type: </strong><code>number</code></dt>
<dd>Position. Use `AdMobPro.AD_POSITION` to set values.
</dd>
</dl>

### showBannerAtXY

Show banner at custom position

<dl>
<dt><h4>x</h4><strong>Type: </strong><code>number</code></dt>
<dd>Offset from screen left.</dd><dt><h4>y</h4><strong>Type: </strong><code>number</code></dt>
<dd>Offset from screen top.
</dd>
</dl>

### showInterstitial

Show interstitial ad when it's ready

### showRewardVideoAd

Show a reward video ad

<p><br></p>

## AdExtras

<dl>
<dt><h4>color_bg</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>color_bg_top</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>color_border</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>color_link</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>color_text</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>color_url</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

## AdMobOptions

<dl>
<dt><h4>adExtras</h4><strong>Type: </strong><code>reference</code></dt>
<dd>Set extra color style for Ad <span class="tag">optional</span></dd><dt><h4>adId</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Banner ad ID <span class="tag">optional</span></dd><dt><h4>adSize</h4><strong>Type: </strong><code>reference</code></dt>
<dd>Banner Ad Size, defaults to `SMART_BANNER`. IT can be: `SMART_BANNER`, `BANNER`, `MEDIUM_RECTANGLE`, `FULL_BANNER`, `LEADERBOARD`, `SKYSCRAPER`, or `CUSTOM` <span class="tag">optional</span></dd><dt><h4>autoShow</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Auto show interstitial ad when loaded. Set to false if hope to control the show timing with prepareInterstitial/showInterstitial <span class="tag">optional</span></dd><dt><h4>height</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Banner height, valid when `adSize` is set to `CUSTOM` <span class="tag">optional</span></dd><dt><h4>isTesting</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set to true to receive test ad for testing purposes <span class="tag">optional</span></dd><dt><h4>license</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>License key for the plugin <span class="tag">optional</span></dd><dt><h4>offsetTopBar</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set offset <span class="tag">optional</span></dd><dt><h4>orientationRenew</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Re-create the banner on web view orientation change (not screen orientation), or else just move the banner. Default:true. <span class="tag">optional</span></dd><dt><h4>overlap</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Allow banner to overlap webview, or else it will push webview up or down to avoid overlap. Defaults to false. <span class="tag">optional</span></dd><dt><h4>position</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Position of banner ad. Defaults to `TOP_CENTER`. You can use the `AdMobPro.AD_POSITION` property to select other values. <span class="tag">optional</span></dd><dt><h4>width</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Banner width, valid when `adSize` is set to `CUSTOM` <span class="tag">optional</span></dd><dt><h4>x</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>X in pixels. Valid when `position` is set to `POS_XY` <span class="tag">optional</span></dd><dt><h4>y</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Y in pixels. Valid when `position` is set to `POS_XY` <span class="tag">optional</span></dd>
</dl>

