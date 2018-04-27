# Pedometer 


Fetch pedestrian-related pedometer data,
such as step counts and other information about the distance travelled.


Repo: [https://github.com/leecrossley/cordova-plugin-pedometer](https://github.com/leecrossley/cordova-plugin-pedometer)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-pedometer
$ npm install --save @ionic-native/pedometer
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { Pedometer } from '@ionic-native/pedometer';

Pedometer.isDistanceAvailable()
  .then((available: boolean) => console.log(available))
  .catch((error: any) => console.log(error));

Pedometer.startPedometerUpdates()
   .subscribe((data: IPedometerData) => {
     console.log(data);
   });
```




<p><br></p>

## Instance Members

### isDistanceAvailable

Distance estimation indicates the ability to use step information to supply the approximate distance travelled by the user.
This capability is not supported on all devices, even with iOS 8.
Only works on iOS.

### isFloorCountingAvailable

Floor counting indicates the ability to count the number of floors the user walks up or down using stairs.
This capability is not supported on all devices, even with iOS 8.
Only works on iOS.

### isStepCountingAvailable

Checks if step counting is available. Only works on iOS.

### queryData

Retrieves the data between the specified start and end dates.
The startDate and endDate options are required and can be constructed in any valid JavaScript way
(e.g. new Date(2015, 4, 1, 15, 20, 00) is also valid, as is milliseconds).
Only works on iOS.

<dl>
<dt><h4>options</h4></dt>
<dd>start date and en date where you want to get pedometer data</dd>
</dl>

### startPedometerUpdates

Starts the delivery of recent pedestrian-related data to your Cordova app.

### stopPedometerUpdates

Stops the delivery of recent pedestrian data updates to your Cordova app.

<p><br></p>

## IPedometerData

<dl>
<dt><h4>distance</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>endDate</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>floorsAscended</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>floorsDescended</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>numberOfSteps</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>startDate</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

