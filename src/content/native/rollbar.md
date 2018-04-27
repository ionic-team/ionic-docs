# Rollbar 


This plugin adds Rollbar App monitoring to your application


Repo: [https://github.com/Resgrid/cordova-plugins-rollbar](https://github.com/Resgrid/cordova-plugins-rollbar)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">ionic cordova plugin add resgrid-cordova-plugins-rollbar --variable ROLLBAR_ACCESS_TOKEN="YOUR_ROLLBAR_ACCEESS_TOKEN" --variable ROLLBAR_ENVIRONMENT="ROLLBAR_ENVIRONMENT"
$ npm install --save @ionic-native/rollbar
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { Rollbar } from '@ionic-native/rollbar';

constructor(private rollbar: Rollbar) { }

...

this.rollbar.init();

```




<p><br></p>

## Instance Members

### init

This function initializes the monitoring of your application

<p><br></p>

