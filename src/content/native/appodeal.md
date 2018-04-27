# Appodeal 


Plugin to serve ads through native Appodeal SDKs


Repo: [https://github.com/appodeal/appodeal-cordova-plugin](https://github.com/appodeal/appodeal-cordova-plugin)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add https://github.com/appodeal/appodeal-cordova-plugin.git
$ npm install --save @ionic-native/appodeal
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* iOS
* Android




### Usage


```typescript
import { Appodeal } from '@ionic-native/appodeal';

constructor(private appodeal: Appodeal) {

   const appKey = '<your app key>';
   appodeal.initialize(appKey, appodeal.AD_TYPES.REWARDED_VIDEO);
   appodeal.show(appodeal.AD_TYPES.REWARDED_VIDEO);

}
```




<p><br></p>

## Instance Members

### onRewardedVideoFailedToLoad



### AD_TYPES



### onRewardedVideoFinished



### cache

forcefully cache an ad by type

<dl>
<dt><h4>adType</h4><strong>Type: </strong><code>number</code></dt>
<dd>
</dd>
</dl>

### onRewardedVideoLoaded



### canShowWithPlacement



<dl>
<dt><h4>adType</h4><strong>Type: </strong><code>string</code></dt>
<dd>null</dd><dt><h4>placement</h4><strong>Type: </strong><code>string</code></dt>
<dd>null</dd>
</dl>

### canShow

confirm use of ads of specified type

<dl>
<dt><h4>adType</h4><strong>Type: </strong><code>number</code></dt>
<dd>undefined</dd>
</dl>

### onSkippableVideoClosed



### disableNetwork

undefined

<dl>
<dt><h4>network</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>adType</h4><strong>Type: </strong><code>number</code></dt>
<dd>
 <span class="tag">optional</span></dd>
</dl>

### disableLocationPermissionCheck

disable Location permissions for Appodeal SDK

### onSkippableVideoFailedToLoad



### enableBannerCallbacks

enable event listeners

<dl>
<dt><h4>enabled</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>
</dd>
</dl>

### disableNetworkType

undefined

<dl>
<dt><h4>network</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>adType</h4><strong>Type: </strong><code>number</code></dt>
<dd>
 <span class="tag">optional</span></dd>
</dl>

### disableWriteExternalStoragePermissionCheck

disable Storage permissions for Appodeal SDK

### onSkippableVideoLoaded



### enableRewardedVideoCallbacks

enable event listeners

<dl>
<dt><h4>enabled</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>
</dd>
</dl>

### enableInterstitialCallbacks

enable event listeners

<dl>
<dt><h4>enabled</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>
</dd>
</dl>

### enableNonSkippableVideoCallbacks

enable event listeners

<dl>
<dt><h4>enabled</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>
</dd>
</dl>

### resetUUID

reset device ID

### getVersion

get version of Appdeal SDK

### enableSkippableVideoCallbacks

enable event listeners

<dl>
<dt><h4>enabled</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>
</dd>
</dl>

### getRewardParameters



### getRewardParametersForPlacement



<dl>
<dt><h4>placement</h4><strong>Type: </strong><code>string</code></dt>
<dd>null</dd>
</dl>

### setAlcohol

set Alcohol preference in Appodeal for current user

<dl>
<dt><h4>alcohol</h4><strong>Type: </strong><code>any</code></dt>
<dd>
</dd>
</dl>

### isLoaded

check if ad of specified type has been loaded

<dl>
<dt><h4>adType</h4><strong>Type: </strong><code>number</code></dt>
<dd>undefined</dd>
</dl>

### hide

hide ad of specified type

<dl>
<dt><h4>adType</h4><strong>Type: </strong><code>number</code></dt>
<dd>
</dd>
</dl>

### initialize

initialize Appodeal SDK

<dl>
<dt><h4>appKey</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>adType</h4><strong>Type: </strong><code>number</code></dt>
<dd>
</dd>
</dl>

### isInitialized

check if SDK has been initialized

### setBannerAnimation

enable or disable banner animations

<dl>
<dt><h4>enabled</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>
</dd>
</dl>

### onBannerLoaded



### isPrecache

check if ad of specified

<dl>
<dt><h4>adType</h4><strong>Type: </strong><code>number</code></dt>
<dd>undefined</dd>
</dl>

### muteVideosIfCallsMuted



<dl>
<dt><h4>value</h4><strong>Type: </strong><code>any</code></dt>
<dd>null</dd>
</dl>

### onBannerClicked



### onBannerFailedToLoad



### setChildDirectedTreatment



<dl>
<dt><h4>value</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>null</dd>
</dl>

### onInterstitialLoaded



### onBannerShown



### onInterstitialFailedToLoad



### onInterstitialClicked



### onInterstitialClosed



### setCustomIntegerRule

undefined

<dl>
<dt><h4>name</h4><strong>Type: </strong><code>string</code></dt>
<dd>name of rule</dd><dt><h4>value</h4><strong>Type: </strong><code>number</code></dt>
<dd>
</dd>
</dl>

### onNonSkippableVideoShown



### onNonSkippableVideoFailedToLoad



### onNonSkippableVideoFinished



### onInterstitialShown



### onNonSkippableVideoClosed



### onNonSkippableVideoLoaded



### setInterests

set Interests preference in Appodeal for current user

<dl>
<dt><h4>interests</h4><strong>Type: </strong><code>any</code></dt>
<dd>
</dd>
</dl>

### onRewardedVideoShown



### onRewardedVideoClosed



### setLogLevel

enable or disable logging

<dl>
<dt><h4>logging</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>
</dd>
</dl>

### onSkippableVideoShown



### onSkippableVideoFinished



### setRelation

set Relation preference in Appodeal for current user

<dl>
<dt><h4>relation</h4><strong>Type: </strong><code>any</code></dt>
<dd>
</dd>
</dl>

### setAge

et Age preference in Appodeal for current user

<dl>
<dt><h4>age</h4><strong>Type: </strong><code>any</code></dt>
<dd>
</dd>
</dl>

### set728x90Banners

undefined

<dl>
<dt><h4>value</h4><strong>Type: </strong><code>any</code></dt>
<dd>
</dd>
</dl>

### setSmartBanners

enable or disable Smart Banners

<dl>
<dt><h4>enabled</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>
</dd>
</dl>

### setAutoCache

undefined

<dl>
<dt><h4>adType</h4><strong>Type: </strong><code>number</code></dt>
<dd>undefined</dd><dt><h4>autoCache</h4><strong>Type: </strong><code>any</code></dt>
<dd>
</dd>
</dl>

### setSmoking

set Smoking preference in Appodeal for current user

<dl>
<dt><h4>smoking</h4><strong>Type: </strong><code>any</code></dt>
<dd>
</dd>
</dl>

### setBirthday

set Birthday preference in Appodeal for current user

<dl>
<dt><h4>birthday</h4><strong>Type: </strong><code>any</code></dt>
<dd>
</dd>
</dl>

### setBannerBackground

enable or disable banner backgrounds

<dl>
<dt><h4>enabled</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>
</dd>
</dl>

### setTriggerOnLoadedOnPrecache

undefined

<dl>
<dt><h4>set</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>
</dd>
</dl>

### setCustomDoubleRule

set rule with float value

<dl>
<dt><h4>name</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>value</h4><strong>Type: </strong><code>number</code></dt>
<dd>
</dd>
</dl>

### setCustomBooleanRule

undefined

<dl>
<dt><h4>name</h4><strong>Type: </strong><code>string</code></dt>
<dd>name of rule</dd><dt><h4>value</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>
</dd>
</dl>

### setCustomStringRule

set rule with string value

<dl>
<dt><h4>name</h4><strong>Type: </strong><code>string</code></dt>
<dd>name of rule</dd><dt><h4>value</h4><strong>Type: </strong><code>string</code></dt>
<dd>
</dd>
</dl>

### setEmail

set Email preference in Appodeal for current user

<dl>
<dt><h4>email</h4><strong>Type: </strong><code>any</code></dt>
<dd>
</dd>
</dl>

### setGender

set Gender preference in Appodeal for current user

<dl>
<dt><h4>gender</h4><strong>Type: </strong><code>any</code></dt>
<dd>
</dd>
</dl>

### setOccupation

set Occupation preference in Appodeal for current user

<dl>
<dt><h4>occupation</h4><strong>Type: </strong><code>any</code></dt>
<dd>
</dd>
</dl>

### setTesting

enable or disable testing mode

<dl>
<dt><h4>testing</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>
</dd>
</dl>

### setUserId

set ID preference in Appodeal for current user

<dl>
<dt><h4>id</h4><strong>Type: </strong><code>any</code></dt>
<dd>
</dd>
</dl>

### show

show ad of specified type

<dl>
<dt><h4>adType</h4><strong>Type: </strong><code>number</code></dt>
<dd>undefined</dd>
</dl>

### showTestScreen



<dl>
<dt><h4>value</h4><strong>Type: </strong><code>any</code></dt>
<dd>null</dd>
</dl>

### showWithPlacement

show ad of specified type with placement options

<dl>
<dt><h4>adType</h4><strong>Type: </strong><code>number</code></dt>
<dd>undefined</dd><dt><h4>placement</h4><strong>Type: </strong><code>any</code></dt>
<dd>undefined</dd>
</dl>

<p><br></p>

