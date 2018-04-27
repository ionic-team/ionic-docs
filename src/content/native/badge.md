# Badge 


The essential purpose of badge numbers is to enable an application to inform its users that it has something for them — for example, unread messages — when the application isn’t running in the foreground.

Requires Cordova plugin: cordova-plugin-badge. For more info, please see the [Badge plugin docs](https://github.com/katzer/cordova-plugin-badge).


Repo: [https://github.com/katzer/cordova-plugin-badge](https://github.com/katzer/cordova-plugin-badge)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-badge
$ npm install --save @ionic-native/badge
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* Browser
* iOS
* Windows




### Usage


```typescript
import { Badge } from '@ionic-native/badge';

constructor(private badge: Badge) { }

...

this.badge.set(10);
this.badge.increase(1);
this.badge.clear();
```




<p><br></p>

## Instance Members

### clear

Clear the badge of the app icon.

### decrease

Decrease the badge number.

<dl>
<dt><h4>decreaseBy</h4><strong>Type: </strong><code>number</code></dt>
<dd>Count to subtract from the current badge number</dd>
</dl>

### get

Get the badge of the app icon.

### hasPermission

Determine if the app has permission to show badges.

### increase

Increase the badge number.

<dl>
<dt><h4>increaseBy</h4><strong>Type: </strong><code>number</code></dt>
<dd>Count to add to the current badge number</dd>
</dl>

### isSupported

Check support to show badges.

### requestPermission

Register permission to set badge notifications

### set

Set the badge of the app icon.

<dl>
<dt><h4>badgeNumber</h4><strong>Type: </strong><code>number</code></dt>
<dd>The new badge number.</dd>
</dl>

<p><br></p>

