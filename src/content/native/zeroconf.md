# Zeroconf 


This plugin allows you to browse and publish Zeroconf/Bonjour/mDNS services.

Repo: [https://github.com/becvert/cordova-plugin-zeroconf](https://github.com/becvert/cordova-plugin-zeroconf)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-zeroconf
$ npm install --save @ionic-native/zeroconf
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { Zeroconf } from '@ionic-native/zeroconf';

constructor(private zeroconf: Zeroconf) { }

...

// watch for services of a specified type
this.zeroconf.watch('_http._tcp.', 'local.').subscribe(result => {
  if (result.action == 'added') {
    console.log('service added', result.service);
  } else {
    console.log('service removed', result.service);
  }
});

// publish a zeroconf service of your own
this.zeroconf.register('_http._tcp.', 'local.', 'Becvert\'s iPad', 80, {
  'foo': 'bar'
}).then(result => {
  console.log('Service registered', result.service);
});


// unregister your service
this.zeroconf.unregister('_http._tcp.', 'local.', 'Becvert\'s iPad');
```




<p><br></p>

## Instance Members

### close

Closes the service browser and stops watching.

### getHostname

Returns this device's hostname.

### reInit

Re-initializes the plugin to clean service & browser state.

### register

Publishes a new service.

<dl>
<dt><h4>type</h4><strong>Type: </strong><code>string</code></dt>
<dd>Service type name, e.g. "_http._tcp".</dd><dt><h4>domain</h4><strong>Type: </strong><code>string</code></dt>
<dd>Domain scope of the service, typically "local.".</dd><dt><h4>name</h4><strong>Type: </strong><code>string</code></dt>
<dd>Unqualified service instance name.</dd><dt><h4>port</h4><strong>Type: </strong><code>number</code></dt>
<dd>Local port on which the service runs.</dd><dt><h4>txtRecord</h4><strong>Type: </strong><code>any</code></dt>
<dd>Arbitrary key/value pairs describing the service.</dd>
</dl>

### registerAddressFamily

Family of addresses to register: ipv4, ipv6 or any.

### stop

Unregisters all published services.

### unregister

Unregisters a service.

<dl>
<dt><h4>type</h4><strong>Type: </strong><code>string</code></dt>
<dd>Service type name, e.g. "_http._tcp".</dd><dt><h4>domain</h4><strong>Type: </strong><code>string</code></dt>
<dd>Domain scope of the service, typically "local.".</dd><dt><h4>name</h4><strong>Type: </strong><code>string</code></dt>
<dd>Unqualified service instance name.</dd>
</dl>

### unwatch

Stops watching for services of the specified type.

<dl>
<dt><h4>type</h4><strong>Type: </strong><code>string</code></dt>
<dd>Service type name, e.g. "_http._tcp".</dd><dt><h4>domain</h4><strong>Type: </strong><code>string</code></dt>
<dd>Domain scope of the service, typically "local.".</dd>
</dl>

### watch

Starts watching for services of the specified type.

<dl>
<dt><h4>type</h4><strong>Type: </strong><code>string</code></dt>
<dd>Service type name, e.g. "_http._tcp".</dd><dt><h4>domain</h4><strong>Type: </strong><code>string</code></dt>
<dd>Domain scope of the service, typically "local.".</dd>
</dl>

### watchAddressFamily

Family of addresses to watch for: ipv4, ipv6 or any.

<p><br></p>

## ZeroconfResult

<dl>
<dt><h4>action</h4><strong>Type: </strong><code>union</code></dt>
<dd>undefined</dd><dt><h4>service</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined</dd>
</dl>

## ZeroconfService

<dl>
<dt><h4>domain</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>hostname</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>ipv4Addresses</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined</dd><dt><h4>ipv6Addresses</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined</dd><dt><h4>name</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>port</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>txtRecord</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>type</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

