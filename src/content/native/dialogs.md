# Dialogs 


This plugin gives you ability to access and customize the device native dialogs.

Requires Cordova plugin: `cordova-plugin-dialogs`. For more info, please see the [Dialogs plugin docs](https://github.com/apache/cordova-plugin-dialogs).


Repo: [https://github.com/apache/cordova-plugin-dialogs](https://github.com/apache/cordova-plugin-dialogs)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-dialogs
$ npm install --save @ionic-native/dialogs
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Amazon Fire OS
* Android
* Browser
* iOS
* Windows




### Usage


```typescript
import { Dialogs } from '@ionic-native/dialogs';

constructor(private dialogs: Dialogs) { }

...

this.dialogs.alert('Hello world')
  .then(() => console.log('Dialog dismissed'))
  .catch(e => console.log('Error displaying dialog', e));


```



<p><br></p>

## Instance Members

### alert

Shows a custom alert or dialog box.

<dl>
<dt><h4>message</h4><strong>Type: </strong><code>string</code></dt>
<dd>Dialog message.</dd><dt><h4>title</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>buttonName</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd>
</dl>

### beep

The device plays a beep sound.

<dl>
<dt><h4>times</h4><strong>Type: </strong><code>number</code></dt>
<dd>The number of times to repeat the beep.
</dd>
</dl>

### confirm

Displays a customizable confirmation dialog box.

<dl>
<dt><h4>message</h4><strong>Type: </strong><code>string</code></dt>
<dd>Dialog message.</dd><dt><h4>title</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>buttonLabels</h4></dt>
<dd>null <span class="tag">optional</span></dd>
</dl>

### prompt

Displays a native dialog box that is more customizable than the browser's prompt function.

<dl>
<dt><h4>message</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>title</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>buttonLabels</h4></dt>
<dd>null <span class="tag">optional</span></dd><dt><h4>defaultText</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd>
</dl>

<p><br></p>

## DialogsPromptCallback

<dl>
<dt><h4>buttonIndex</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The index of the pressed button. (Number) Note that the index uses one-based indexing, so the value is 1, 2, 3, etc.</dd><dt><h4>input1</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The text entered in the prompt dialog box. (String)</dd>
</dl>

