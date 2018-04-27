# BackgroundFetch 


iOS Background Fetch Implementation. See: https://developer.apple.com/reference/uikit/uiapplication#1657399
iOS Background Fetch is basically an API which wakes up your app about every 15 minutes (during the user's prime-time hours) and provides your app exactly 30s of background running-time. This plugin will execute your provided callbackFn whenever a background-fetch event occurs. There is no way to increase the rate which a fetch-event occurs and this plugin sets the rate to the most frequent possible value of UIApplicationBackgroundFetchIntervalMinimum -- iOS determines the rate automatically based upon device usage and time-of-day (ie: fetch-rate is about ~15min during prime-time hours; less frequently when the user is presumed to be sleeping, at 3am for example).
For more detail, please see https://github.com/transistorsoft/cordova-plugin-background-fetch


Repo: [https://github.com/transistorsoft/cordova-plugin-background-fetch](https://github.com/transistorsoft/cordova-plugin-background-fetch)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-background-fetch
$ npm install --save @ionic-native/background-fetch
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* iOS




### Usage



```typescript
import { BackgroundFetch, BackgroundFetchConfig } from '@ionic-native/background-fetch';


constructor(private backgroundFetch: BackgroundFetch) {

  const config: BackgroundFetchConfig = {
    stopOnTerminate: false, // Set true to cease background-fetch from operating after user "closes" the app. Defaults to true.
  }

  backgroundFetch.configure(config)
     .then(() => {
         console.log('Background Fetch initialized');

         this.backgroundFetch.finish();

     })
     .catch(e => console.log('Error initializing background fetch', e));

  // Start the background-fetch API. Your callbackFn provided to #configure will be executed each time a background-fetch event occurs. NOTE the #configure method automatically calls #start. You do not have to call this method after you #configure the plugin
  backgroundFetch.start();

  // Stop the background-fetch API from firing fetch events. Your callbackFn provided to #configure will no longer be executed.
  backgroundFetch.stop();


}

```



<p><br></p>

## Instance Members

### configure

Configures the plugin's fetch callbackFn

<dl>
<dt><h4>config</h4><strong>Type: </strong><code>BackgroundFetchConfig</code></dt>
<dd>See BackgroundFetchConfig table below</dd>
</dl>

### finish

You MUST call this method in your fetch callbackFn provided to #configure in order to signal to iOS that your fetch action is complete. iOS provides only 30s of background-time for a fetch-event -- if you exceed this 30s, iOS will kill your app.

### start

Start the background-fetch API.
Your callbackFn provided to #configure will be executed each time a background-fetch event occurs. NOTE the #configure method automatically calls #start. You do not have to call this method after you #configure the plugin

### status

Return the status of the background-fetch

### stop

Stop the background-fetch API from firing fetch events. Your callbackFn provided to #configure will no longer be executed.

<p><br></p>

## BackgroundFetchConfig

<dl>
<dt><h4>stopOnTerminate</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set true to cease background-fetch from operating after user "closes" the app. Defaults to true. <span class="tag">optional</span></dd>
</dl>

