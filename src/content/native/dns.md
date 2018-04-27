# DNS 

A plugin for Apache Cordova that enables applications to manually resolve hostnames into an underlying network address. This is mostly useful for determining whether there is a problem with the device's DNS server configuration.


Repo: [https://bitbucket.org/zegeba/cordova-plugin-dns](https://bitbucket.org/zegeba/cordova-plugin-dns)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-dns
$ npm install --save @ionic-native/dns
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android




### Usage


```typescript
import { DNS } from '@ionic-native/dns';


constructor(private dns: DNS) { }

...
this.dns.resolve(hostname)
  .then(
    address => console.log('Resolved ' + hostname + ' to ' + address),
    error => console.log('Failed to resolve ' + hostname + ': ' + error)
  );

```




<p><br></p>

## Instance Members

### resolve

Resolve hostnames into an underlying network address.

<dl>
<dt><h4>hostname</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

<p><br></p>

