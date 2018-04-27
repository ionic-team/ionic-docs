# BrowserTab 


This plugin provides an interface to in-app browser tabs that exist on some mobile platforms, specifically [Custom Tabs](http://developer.android.com/tools/support-library/features.html#custom-tabs) on Android (including the [Chrome Custom Tabs](https://developer.chrome.com/multidevice/android/customtabs) implementation), and [SFSafariViewController](https://developer.apple.com/library/ios/documentation/SafariServices/Reference/SFSafariViewController_Ref/) on iOS.


Repo: [https://github.com/google/cordova-plugin-browsertab](https://github.com/google/cordova-plugin-browsertab)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-browsertab
$ npm install --save @ionic-native/browser-tab
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { BrowserTab } from '@ionic-native/browser-tab';

constructor(private browserTab: BrowserTab) {

  browserTab.isAvailable()
    .then(isAvailable => {
      if (isAvailable) {
        browserTab.openUrl('https://ionic.io');
      } else {
        // open URL with InAppBrowser instead or SafariViewController
      }
    });
}

```




<p><br></p>

## Instance Members

### close

Closes browser tab

### isAvailable

Check if BrowserTab option is available

### openUrl

Opens the provided URL using a browser tab

<dl>
<dt><h4>url</h4><strong>Type: </strong><code>string</code></dt>
<dd>The URL you want to open</dd>
</dl>

<p><br></p>

