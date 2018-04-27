# Shake 

Handles shake gesture

Repo: [https://github.com/leecrossley/cordova-plugin-shake](https://github.com/leecrossley/cordova-plugin-shake)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-shake
$ npm install --save @ionic-native/shake
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* iOS




### Usage


```typescript
import { Shake } from '@ionic-native/shake';

constructor(private shake: Shake) { }

...

const watch = this.shake.startWatch(60).subscribe(() => {
  // do something
  });

watch.unsubscribe();
```




<p><br></p>

## Instance Members

### startWatch

Watch for shake gesture

<dl>
<dt><h4>sensitivity</h4><strong>Type: </strong><code>number</code></dt>
<dd>Optional sensitivity parameter. Defaults to 40 <span class="tag">optional</span></dd>
</dl>

<p><br></p>

