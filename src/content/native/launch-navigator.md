# LaunchNavigator 


Requires Cordova plugin: uk.co.workingedge.phonegap.plugin.launchnavigator. For more info, please see the [LaunchNavigator plugin docs](https://github.com/dpa99c/phonegap-launch-navigator).


Repo: [https://github.com/dpa99c/phonegap-launch-navigator](https://github.com/dpa99c/phonegap-launch-navigator)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add uk.co.workingedge.phonegap.plugin.launchnavigator
$ npm install --save @ionic-native/launch-navigator
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS
* Windows
* Windows Phone 8




### Usage


Please refer to the plugin's repo for detailed usage. This docs page only explains the Native wrapper.

```typescript
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

constructor(private launchNavigator: LaunchNavigator) { }

...

let options: LaunchNavigatorOptions = {
  start: 'London, ON',
  app: LaunchNavigator.APPS.UBER
}

this.launchNavigator.navigate('Toronto, ON', options)
  .then(
    success => console.log('Launched navigator'),
    error => console.log('Error launching navigator', error)
  );
```



<p><br></p>

## Instance Members

### supportsDestName

undefined

<dl>
<dt><h4>app</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>platform</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### TRANSPORT_MODE



### APP



### supportsStart

Indicates if an app on a given platform supports specification of start location.

<dl>
<dt><h4>app</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>platform</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### appSelection



### availableApps

Returns a list indicating which apps are installed and available on the current device.

### getAppDisplayName

Returns the display name of the specified app.

<dl>
<dt><h4>app</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### getAppsForPlatform

Returns list of supported apps on a given platform.

<dl>
<dt><h4>platform</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### getTransportModes

Returns the list of transport modes supported by an app on a given platform.

<dl>
<dt><h4>app</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>platform</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### isAppAvailable

Determines if the given app is installed and available on the current device.

<dl>
<dt><h4>app</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### navigate

Launches navigator app

<dl>
<dt><h4>destination</h4></dt>
<dd>Location name or coordinates (as string or array)</dd><dt><h4>options</h4><strong>Type: </strong><code>LaunchNavigatorOptions</code></dt>
<dd>See LaunchNavigatorOptions table below <span class="tag">optional</span></dd>
</dl>

### supportsLaunchMode

Indicates if an app on a given platform supports specification of launch mode.
Note that currently only Google Maps on Android does.

<dl>
<dt><h4>app</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>platform</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### supportsStartName

undefined

<dl>
<dt><h4>app</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>platform</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### supportsTransportMode

Indicates if an app on a given platform supports specification of transport mode.

<dl>
<dt><h4>app</h4><strong>Type: </strong><code>string</code></dt>
<dd>specified as a string, you can use one of the constants, e.g `LaunchNavigator.APP.GOOGLE_MAPS`</dd><dt><h4>platform</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### userSelect

undefined

<dl>
<dt><h4>destination</h4></dt>
<dd>undefined</dd><dt><h4>options</h4><strong>Type: </strong><code>LaunchNavigatorOptions</code></dt>
<dd>See LaunchNavigatorOptions table below</dd>
</dl>

<p><br></p>

## AppSelection

<dl>
<dt><h4>userChoice</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined</dd><dt><h4>userPrompted</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined</dd>
</dl>

## AppSelectionOptions

<dl>
<dt><h4>androidTheme</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>(Android only) native picker theme. Specify using `actionsheet.ANDROID_THEMES` constants.
Default `actionsheet.ANDROID_THEMES.THEME_HOLO_LIGHT` <span class="tag">optional</span></dd><dt><h4>callback</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>Callback to invoke when the user selects an app in the native picker.
A single string argument is passed which is the app what was selected defined as a `launchnavigator.APP` constant. <span class="tag">optional</span></dd><dt><h4>cancelButtonText</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>text to display for the cancel button in the native picker which enables user to select which navigation app to launch.
Defaults to "Cancel" if not specified. <span class="tag">optional</span></dd><dt><h4>dialogHeaderText</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>text to display in the native picker which enables user to select which navigation app to launch.
Defaults to "Select app for navigation" if not specified. <span class="tag">optional</span></dd><dt><h4>list</h4><strong>Type: </strong><code>string[]</code></dt>
<dd>List of apps, defined as `launchnavigator.APP` constants, which should be displayed in the picker if the app is available.
This can be used to restrict which apps are displayed, even if they are installed.
By default, all available apps will be displayed. <span class="tag">optional</span></dd><dt><h4>rememberChoice</h4><strong>Type: </strong><code>reference</code></dt>
<dd>options related to whether to remember user choice of app for next time, instead of asking again for user choice. <span class="tag">optional</span></dd>
</dl>

## LaunchNavigatorOptions

<dl>
<dt><h4>app</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>name of the navigation app to use for directions.
Specify using launchnavigator.APP constants.
e.g. `launchnavigator.APP.GOOGLE_MAPS`.
If not specified, defaults to User Selection. <span class="tag">optional</span></dd><dt><h4>appSelection</h4><strong>Type: </strong><code>reference</code></dt>
<dd>options related to the default native actionsheet picker which enables user to select which navigation app to launch if `app` is not specified. <span class="tag">optional</span></dd><dt><h4>destinationName</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>nickname to display in app for destination. e.g. "Bob's House". <span class="tag">optional</span></dd><dt><h4>enableDebug</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>If true, debug log output will be generated by the plugin. Defaults to false. <span class="tag">optional</span></dd><dt><h4>enableGeolocation</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>If true, and input location type(s) doesn't match those required by the app, use geocoding to obtain the address/coords as required. Defaults to true. <span class="tag">optional</span></dd><dt><h4>errorCallback</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>A callback to invoke if an error is encountered while launching the app.
A single string argument containing the error message will be passed in. <span class="tag">optional</span></dd><dt><h4>extras</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>a key/value map of extra app-specific parameters. For example, to tell Google Maps on Android to display Satellite view in "maps" launch mode: `{"t": "k"}` <span class="tag">optional</span></dd><dt><h4>launchModeAppleMaps</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>(iOS only) method to use to open Apple Maps app.
`launchnavigator.LAUNCH_MODE.URI_SCHEME` or `launchnavigator.LAUNCH_MODE.MAPKIT`
Defaults to `launchnavigator.LAUNCH_MODE.URI_SCHEME` if not specified. <span class="tag">optional</span></dd><dt><h4>launchModeGoogleMaps</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>(Android only) mode in which to open Google Maps app.
`launchnavigator.LAUNCH_MODE.MAPS` or `launchnavigator.LAUNCH_MODE.TURN_BY_TURN`
Defaults to `launchnavigator.LAUNCH_MODE.MAPS` if not specified. <span class="tag">optional</span></dd><dt><h4>start</h4><strong>Type: </strong><code>union</code></dt>
<dd>Start point of the navigation.
If not specified, the current device location will be used.
Either:
 - a {string} containing the address. e.g. "Buckingham Palace, London"
 - a {string} containing a latitude/longitude coordinate. e.g. "50.1. -4.0"
 - an {array}, where the first element is the latitude and the second element is a longitude, as decimal numbers. e.g. [50.1, -4.0] <span class="tag">optional</span></dd><dt><h4>startName</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>nickname to display in app for start . e.g. "My House". <span class="tag">optional</span></dd><dt><h4>successCallback</h4><strong>Type: </strong><code>reference</code></dt>
<dd>A callback to invoke when the navigation app is successfully launched. <span class="tag">optional</span></dd><dt><h4>transportMode</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Transportation mode for navigation: "driving", "walking" or "transit". Defaults to "driving" if not specified. <span class="tag">optional</span></dd>
</dl>

## PromptsOptions

<dl>
<dt><h4>bodyText</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>text to display in the native prompt body asking user whether to remember their choice.
Defaults to "Use the same app for navigating next time?" if not specified. <span class="tag">optional</span></dd><dt><h4>callback</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>a function to pass the user's decision whether to remember their choice of app.
This will be passed a single boolean value indicating the user's decision. <span class="tag">optional</span></dd><dt><h4>headerText</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>text to display in the native prompt header asking user whether to remember their choice.
Defaults to "Remember your choice?" if not specified. <span class="tag">optional</span></dd><dt><h4>noButtonText</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>text to display for the No button.
Defaults to "No" if not specified. <span class="tag">optional</span></dd><dt><h4>yesButtonText</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>text to display for the Yes button.
Defaults to "Yes" if not specified. <span class="tag">optional</span></dd>
</dl>

## RememberChoiceOptions

<dl>
<dt><h4>enabled</h4><strong>Type: </strong><code>union</code></dt>
<dd>whether to remember user choice of app for next time, instead of asking again for user choice.
`"prompt"` - Prompt user to decide whether to remember choice.
 - Default value if unspecified.
 - If `promptFn` is defined, this will be used for user confirmation.
 - Otherwise (by default), a native dialog will be displayed to ask user.
`false` - Do not remember user choice.
`true` - Remember user choice. <span class="tag">optional</span></dd><dt><h4>prompt</h4><strong>Type: </strong><code>reference</code></dt>
<dd>options related to the default dialog prompt used to ask the user whether to remember their choice of app. <span class="tag">optional</span></dd><dt><h4>promptFn</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>a function which asks the user whether to remember their choice of app.
If this is defined, then the default dialog prompt will not be shown, allowing for a custom UI for asking the user.
This will be passed a callback function which should be invoked with a single boolean argument which indicates the user's decision to remember their choice. <span class="tag">optional</span></dd>
</dl>

## UserChoice

<dl>
<dt><h4>clear</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>Clears the current user choice of preferred navigator app.</dd><dt><h4>exists</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>Indicates whether a user choice exists for a preferred navigator app.</dd><dt><h4>get</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>Returns current user choice of preferred navigator app.</dd><dt><h4>set</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>Sets the current user choice of preferred navigator app.</dd>
</dl>

## UserPrompted

<dl>
<dt><h4>clear</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>Clears flag which indicates if user has already been prompted whether to remember their choice a preferred navigator app.</dd><dt><h4>get</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>Indicates whether user has already been prompted whether to remember their choice a preferred navigator app.</dd><dt><h4>set</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>Sets flag indicating user has already been prompted whether to remember their choice a preferred navigator app.</dd>
</dl>

