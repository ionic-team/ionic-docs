# AppRate 


The AppRate plugin makes it easy to prompt the user to rate your app, either now, later, or never.

Requires Cordova plugin: cordova-plugin-apprate. For more info, please see the [AppRate plugin docs](https://github.com/pushandplay/cordova-plugin-apprate).


Repo: [https://github.com/pushandplay/cordova-plugin-apprate](https://github.com/pushandplay/cordova-plugin-apprate)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-apprate
$ npm install --save @ionic-native/app-rate
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* BlackBerry 10
* iOS
* Windows




### Usage


```typescript
import { AppRate } from '@ionic-native/app-rate';

constructor(private appRate: AppRate) { }

...
// set certain preferences
this.appRate.preferences.storeAppURL = {
  ios: '<app_id>',
  android: 'market://details?id=<package_name>',
  windows: 'ms-windows-store://review/?ProductId=<store_id>'
}

this.appRate.promptForRating(true);

// or, override the whole preferences object
this.appRate.preferences = {
  usesUntilPrompt: 3,
  storeAppURL: {
   ios: '<app_id>',
   android: 'market://details?id=<package_name>',
   windows: 'ms-windows-store://review/?ProductId=<store_id>'
  }
}

this.appRate.promptForRating(false);
```




<p><br></p>

## Instance Members

### navigateToAppStore

Immediately send the user to the app store rating page

### preferences

Configure various settings for the Rating View.
See table below for options

### promptForRating

Prompts the user for rating

<dl>
<dt><h4>immediately</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>Show the rating prompt immediately.
</dd>
</dl>

<p><br></p>

## AppRateCallbacks

<dl>
<dt><h4>handleNegativeFeedback</h4><strong>Type: </strong><code>reference</code></dt>
<dd>call back function. called when user clicked on negative feedback <span class="tag">optional</span></dd><dt><h4>onButtonClicked</h4><strong>Type: </strong><code>reference</code></dt>
<dd>call back function. called when user clicked on rate-dialog buttons <span class="tag">optional</span></dd><dt><h4>onRateDialogShow</h4><strong>Type: </strong><code>reference</code></dt>
<dd>call back function. called when rate-dialog showing <span class="tag">optional</span></dd>
</dl>

## AppRateCustomLocale

<dl>
<dt><h4>appRatePromptTitle</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>App rate promt title <span class="tag">optional</span></dd><dt><h4>cancelButtonLabel</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Cancel button label <span class="tag">optional</span></dd><dt><h4>feedbackPromptTitle</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Feedback prompt title <span class="tag">optional</span></dd><dt><h4>laterButtonLabel</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Later button label <span class="tag">optional</span></dd><dt><h4>message</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Message <span class="tag">optional</span></dd><dt><h4>noButtonLabel</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>No button label <span class="tag">optional</span></dd><dt><h4>rateButtonLabel</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Rate button label <span class="tag">optional</span></dd><dt><h4>title</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Title <span class="tag">optional</span></dd><dt><h4>yesButtonLabel</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Yes button label <span class="tag">optional</span></dd>
</dl>

## AppRatePreferences

<dl>
<dt><h4>callbacks</h4><strong>Type: </strong><code>reference</code></dt>
<dd>Callbacks for events <span class="tag">optional</span></dd><dt><h4>customLocale</h4><strong>Type: </strong><code>reference</code></dt>
<dd>Custom locale object <span class="tag">optional</span></dd><dt><h4>displayAppName</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Custom application title <span class="tag">optional</span></dd><dt><h4>inAppReview</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>leave app or no when application page opened in app store (now supported only for iOS). Defaults to `false` <span class="tag">optional</span></dd><dt><h4>promptAgainForEachNewVersion</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Show dialog again when application version will be updated. Defaults to `true` <span class="tag">optional</span></dd><dt><h4>simpleMode</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Simple Mode to display the rate dialog directly and bypass negative feedback filtering flow <span class="tag">optional</span></dd><dt><h4>storeAppURL</h4><strong>Type: </strong><code>reference</code></dt>
<dd>App Store URLS <span class="tag">optional</span></dd><dt><h4>useCustomRateDialog</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>use custom view for rate dialog. Defaults to `false` <span class="tag">optional</span></dd><dt><h4>useLanguage</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Custom BCP 47 language tag <span class="tag">optional</span></dd><dt><h4>usesUntilPrompt</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>count of runs of application before dialog will be displayed. Defaults to `3` <span class="tag">optional</span></dd>
</dl>

## AppUrls

<dl>
<dt><h4>android</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>application URL in GooglePlay <span class="tag">optional</span></dd><dt><h4>blackberry</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>application URL in AppWorld <span class="tag">optional</span></dd><dt><h4>ios</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>application id in AppStore <span class="tag">optional</span></dd><dt><h4>windows</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>application URL in Windows Store <span class="tag">optional</span></dd><dt><h4>windows8</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>application URL in WindowsStore <span class="tag">optional</span></dd>
</dl>

