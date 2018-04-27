# Insomnia 


Prevent the screen of the mobile device from falling asleep.


Repo: [https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin](https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-insomnia
$ npm install --save @ionic-native/insomnia
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* Browser
* Firefox OS
* iOS
* Windows
* Windows Phone 8




### Usage


```typescript
import { Insomnia } from '@ionic-native/insomnia';

constructor(private insomnia: Insomnia) { }

...

this.insomnia.keepAwake()
  .then(
    () => console.log('success'),
    () => console.log('error')
  );

this.insomnia.allowSleepAgain()
  .then(
    () => console.log('success'),
    () => console.log('error')
  );
```





<p><br></p>

## Instance Members

### allowSleepAgain

Allows the application to sleep again

### keepAwake

Keeps awake the application

<p><br></p>

