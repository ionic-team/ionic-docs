# Keyboard 



Repo: [https://github.com/ionic-team/ionic-plugin-keyboard](https://github.com/ionic-team/ionic-plugin-keyboard)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add ionic-plugin-keyboard
$ npm install --save @ionic-native/keyboard
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* BlackBerry 10
* iOS
* Windows




### Usage


```typescript
import { Keyboard } from '@ionic-native/keyboard';

constructor(private keyboard: Keyboard) { }

...

this.keyboard.show();

this.keyboard.close();

```




<p><br></p>

## Instance Members

### close

Close the keyboard if open.

### disableScroll

Prevents the native UIScrollView from moving when an input is focused.

<dl>
<dt><h4>disable</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>
</dd>
</dl>

### hideKeyboardAccessoryBar

Hide the keyboard accessory bar with the next, previous and done buttons.

<dl>
<dt><h4>hide</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>
</dd>
</dl>

### onKeyboardHide

Creates an observable that notifies you when the keyboard is hidden. Unsubscribe to observable to cancel event watch.

### onKeyboardShow

Creates an observable that notifies you when the keyboard is shown. Unsubscribe to observable to cancel event watch.

### show

Force keyboard to be shown.

<p><br></p>

