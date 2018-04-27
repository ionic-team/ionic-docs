# AppMinimize 


AppMinimize is a plugin to minimize the application on android devices


Repo: [https://github.com/tomloprod/cordova-plugin-appminimize](https://github.com/tomloprod/cordova-plugin-appminimize)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-appminimize
$ npm install --save @ionic-native/app-minimize
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android




### Usage


```typescript
import { Platfrom } from 'ionic-angular';
import { AppMinimize } from '@ionic-native/app-minimize';


constructor(private platform: Platform, private appMinimize: AppMinimize) { }

...

this.platform.registerBackButtonAction(() => {
   this.appMinimize.minimize();
});

```




<p><br></p>

## Instance Members

### minimize

Minimizes the application

<p><br></p>

