# CallLog 


This plugin access the call history on a device and that can be filtered


Repo: [https://github.com/creacore-team/cordova-plugin-calllog](https://github.com/creacore-team/cordova-plugin-calllog)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-calllog
$ npm install --save @ionic-native/call-log
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android




### Usage


```typescript
import { CallLog } from '@ionic-native/call-log';


constructor(private callLog: CallLog) { }

````



<p><br></p>

## Instance Members

### getCallLog

This function return the call logs

<dl>
<dt><h4>filters</h4></dt>
<dd>array of object to filter the query</dd>
</dl>

### hasReadPermission

Check permission

### requestReadPermission

Request permission

<p><br></p>

## CallLogObject

<dl>
<dt><h4>name</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>operator</h4><strong>Type: </strong><code>union</code></dt>
<dd>undefined</dd><dt><h4>value</h4><strong>Type: </strong><code>union</code></dt>
<dd>undefined</dd>
</dl>

