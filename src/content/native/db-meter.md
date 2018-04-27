# DBMeter 

This plugin defines a global DBMeter object, which permits to get the decibel values from the microphone.

Repo: [https://github.com/akofman/cordova-plugin-dbmeter](https://github.com/akofman/cordova-plugin-dbmeter)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-dbmeter
$ npm install --save @ionic-native/db-meter
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { DBMeter } from '@ionic-native/db-meter';

constructor(private dbMeter: DBMeter) { }

...


// Start listening
let subscription = this.dbMeter.start().subscribe(
  data => console.log(data)
);

// Check if we are listening
this.dbMeter.isListening().then(
  isListening => console.log(isListening)
);

// Stop listening
subscription.unsubscribe();

// Delete DBMeter instance from memory
this.dbMeter.delete().then(
  () => console.log('Deleted DB Meter instance'),
  error => console.log('Error occurred while deleting DB Meter instance')
);
```




<p><br></p>

## Instance Members

### delete

Delete the DB Meter instance

### isListening

Check if the DB Meter is listening

### start

Starts listening

<p><br></p>

