# GoogleNearby 


This plugin adds support for the Google Nearby Messages API.


Repo: [https://github.com/hahahannes/cordova-plugin-google-nearby](https://github.com/hahahannes/cordova-plugin-google-nearby)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">ionic cordova plugin add cordova-plugin-google-nearby --variable API_KEY="123456789"
$ npm install --save @ionic-native/google-nearby
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android




### Usage


```typescript
import { GoogleNearby } from '@ionic-native/google-nearby';


constructor(private googleNearby: GoogleNearby) { }

this.googleNearby.publish('Hello')
  .then((res: any) => console.log(res))
  .catch((error: any) => console.error(error));

this.googleNearby.subscribe()
  .then((res: any) => console.log(res))
  .catch((error: any) => console.error(error));
```




<p><br></p>

## Instance Members

### publish

Publish a message

<dl>
<dt><h4>message</h4><strong>Type: </strong><code>string</code></dt>
<dd>Message to publish</dd>
</dl>

### subscribe

Subscribe to receive messages

<p><br></p>

