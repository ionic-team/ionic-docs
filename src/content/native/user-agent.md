# UserAgent 


The UserAgent plugin provides functions to set the HTTP  user-agent header. For more info about User-Agents, please [see the HTTP User-Agent docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent).

Requires Cordova plugin: `cordova-useragent`. For more info, please see the [User-Agent plugin docs](https://github.com/LouisT/cordova-useragent).


Repo: [https://github.com/danielsogl/cordova-plugin-useragent](https://github.com/danielsogl/cordova-plugin-useragent)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-useragent
$ npm install --save @ionic-native/user-agent
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { UserAgent } from '@ionic-native/user-agent';


constructor(private userAgent: UserAgent) { }

...


this.userAgent.set('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36')
  .then((res: any) => console.log(res))
  .catch((error: any) => console.error(error));

* this.userAgent.get()
  .then((res: any) => console.log(res))
  .catch((error: any) => console.error(error));

* this.userAgent.reset()
  .then((res: any) => console.log(res))
  .catch((error: any) => console.error(error));

```




<p><br></p>

## Instance Members

### get

Returns the current user-agent string.

### reset

Sets the user-agent back to default

### set

Changes the current user-agent to the one sent by argument.

<dl>
<dt><h4>userAgent</h4><strong>Type: </strong><code>string</code></dt>
<dd>User-Agent</dd>
</dl>

<p><br></p>

