# Stepcounter 


Cordova plugin for using device's stepcounter on Android (API > 19)

Use to
- start and stop stepcounter service
- read device's stepcounter data


Repo: [https://github.com/ihadeed/cordova-plugin-stepcounter](https://github.com/ihadeed/cordova-plugin-stepcounter)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-stepcounter
$ npm install --save @ionic-native/stepcounter
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android




### Usage


```typescript
import { Stepcounter } from '@ionic-native/stepcounter';

constructor(private stepcounter: Stepcounter) { }

...

let startingOffset = 0;
this.stepcounter.start(startingOffset).then(onSuccess => console.log('stepcounter-start success', onSuccess), onFailure => console.log('stepcounter-start error', onFailure));

this.stepcounter.getHistory().then(historyObj => console.log('stepcounter-history success', historyObj), onFailure => console.log('stepcounter-history error', onFailure));

```




<p><br></p>

## Instance Members

### deviceCanCountSteps

Returns true/false if Android device is running >API level 19 && has the step counter API available

### getHistory

Get the step history (JavaScript object)

### getStepCount

Get the amount of steps since the start command has been called

### getTodayStepCount

Get the amount of steps for today (or -1 if it no data given)

### start

Start the step counter

<dl>
<dt><h4>startingOffset</h4><strong>Type: </strong><code>number</code></dt>
<dd>will be added to the total steps counted in this session</dd>
</dl>

### stop

Stop the step counter

<p><br></p>

