# SplashScreen 

This plugin displays and hides a splash screen during application launch. The methods below allows showing and hiding the splashscreen after the app has loaded.

Repo: [https://github.com/apache/cordova-plugin-splashscreen](https://github.com/apache/cordova-plugin-splashscreen)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-splashscreen
$ npm install --save @ionic-native/splash-screen
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Amazon Fire OS
* Android
* iOS
* Windows




### Usage


```typescript
import { SplashScreen } from '@ionic-native/splash-screen';

constructor(private splashScreen: SplashScreen) { }

...

this.splashScreen.show();

this.splashScreen.hide();
```




<p><br></p>

## Instance Members

### hide

Hides the splashscreen

### show

Shows the splashscreen

<p><br></p>

