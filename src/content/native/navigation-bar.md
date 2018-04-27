# NavigationBar 


The NavigationBar plugin can you to hide and auto hide the android navigation bar.


Repo: [https://github.com/cranberrygame/cordova-plugin-navigationbar](https://github.com/cranberrygame/cordova-plugin-navigationbar)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-navigationbar
$ npm install --save @ionic-native/navigation-bar
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android




### Usage


```typescript
import { NavigationBar } from '@ionic-native/navigation-bar';

constructor(private navigationBar: NavigationBar) { }

...

let autoHide: boolean = true;
this.navigationBar.setUp(autoHide);
```




<p><br></p>

## Instance Members

### hideNavigationBar

Hide the navigation bar.

### setUp

hide automatically (or not) the navigation bar.

<dl>
<dt><h4>autohide</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

<p><br></p>

