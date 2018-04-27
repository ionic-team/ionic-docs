# LaunchReview 



Assists in leaving user reviews/ratings in the App Stores.
- Launches the platform's App Store page for the current app in order for the user to leave a review.
- On iOS (10.3 and above) invokes the native in-app rating dialog which allows a user to rate your app without needing to open the App Store.


Repo: [https://github.com/dpa99c/cordova-launch-review](https://github.com/dpa99c/cordova-launch-review)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-launch-review
$ npm install --save @ionic-native/launch-review
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { LaunchReview } from '@ionic-native/launch-review';

constructor(private launchReview: LaunchReview) { }

...

this.launchReview.launch()
  .then(() => console.log('Successfully launched store app');

if(this.launchReview.isRatingSupported()){
  this.launchReview.rating()
    .then(() => console.log('Successfully launched rating dialog'));
}
```




<p><br></p>

## Instance Members

### isRatingSupported

Indicates if the current platform/version supports in-app ratings dialog, i.e. calling LaunchReview.rating().
Will return true if current platform is iOS 10.3 or above.

### launch

Launches App Store on current platform in order to leave a review for given app.

<dl>
<dt><h4>appId</h4><strong>Type: </strong><code>string</code></dt>
<dd>(optional) the platform-specific app ID to use to open the page in the store app.
If not specified, the plugin will use the app ID for the app in which the plugin is contained.
On Android this is the full package name of the app. For example, for Google Maps: `com.google.android.apps.maps`
On iOS this is the Apple ID of the app. For example, for Google Maps: `585027354` <span class="tag">optional</span></dd>
</dl>

### rating

Invokes the native in-app rating dialog which allows a user to rate your app without needing to open the App Store.
Requires iOS 10.3 and above: Calling this on any platform/version other than iOS 10.3+ will result in the error callback.
Success callback will be called up to 3 times:
- First: after `LaunchReview.rating()` is called and the request to show the dialog is successful. Will be passed the value `requested`.
- Second: if and when the Rating dialog is actually displayed.  Will be passed the value `shown`.
- Third: if and when the Rating dialog is dismissed.  Will be passed the value `dismissed`.

<p><br></p>

