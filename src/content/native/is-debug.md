# IsDebug 


Detect if the app is running in debug mode or not.
Debug mode is when the app is built and installed locally via xcode / eclipse / the cordova cli etc, compared to release mode when the app was downloaded from the app / play store via an end user.


Repo: [https://github.com/mattlewis92/cordova-plugin-is-debug](https://github.com/mattlewis92/cordova-plugin-is-debug)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-is-debug
$ npm install --save @ionic-native/is-debug
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { IsDebug } from '@ionic-native/is-debug';

constructor(private isDebug: IsDebug) { }

...

this.isDebug.getIsDebug()
  .then(isDebug => console.log('Is debug:', isDebug))
  .catch(err => console.error(err));

```




<p><br></p>

## Instance Members

### getIsDebug

Determine if an app was installed via xcode / eclipse / the ionic CLI etc

<p><br></p>

