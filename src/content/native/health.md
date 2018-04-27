# Health 


A plugin that abstracts fitness and health repositories like Apple HealthKit or Google Fit.


Repo: [https://github.com/dariosalvi78/cordova-plugin-health](https://github.com/dariosalvi78/cordova-plugin-health)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-health
$ npm install --save @ionic-native/health
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { Health } from '@ionic-native/health';


constructor(private health: Health) { }

...

this.health.isAvailable()
.then((available:boolean) => {
  console.log(available);
  this.health.requestAuthorization([
    'distance', 'nutrition',  //read and write permissions
    {
      read: ['steps'],       //read only permission
      write: ['height', 'weight']  //write only permission
    }
  ])
  .then(res => console.log(res))
  .catch(e => console.log(e));
})
.catch(e => console.log(e));

```
See description at https://github.com/dariosalvi78/cordova-plugin-health for a full list of Datatypes and see examples.




<p><br></p>

## Instance Members

### isAuthorized

Check if the app has authorization to read/write a set of datatypes.

<dl>
<dt><h4>datatypes</h4><strong>Type: </strong><code>Array</code></dt>
<dd>See Array table below</dd>
</dl>

### isAvailable

Tells if either Google Fit or HealthKit are available.

### promptInstallFit

Checks if recent Google Play Services and Google Fit are installed. If the play services are not installed,
or are obsolete, it will show a pop-up suggesting to download them. If Google Fit is not installed,
it will open the Play Store at the location of the Google Fit app.
The plugin does not wait until the missing packages are installed, it will return immediately.
If both Play Services and Google Fit are available, this function just returns without any visible effect.

### query

Gets all the data points of a certain data type within a certain time window.
Warning: if the time span is big, it can generate long arrays!

<dl>
<dt><h4>queryOptions</h4><strong>Type: </strong><code>HealthQueryOptions</code></dt>
<dd>See HealthQueryOptions table below</dd>
</dl>

### queryAggregated

Gets aggregated data in a certain time window. Usually the sum is returned for the given quantity.

<dl>
<dt><h4>queryOptionsAggregated</h4><strong>Type: </strong><code>HealthQueryOptionsAggregated</code></dt>
<dd>See HealthQueryOptionsAggregated table below</dd>
</dl>

### requestAuthorization

Requests read and/or write access to a set of data types. It is recommendable to always explain why the app
needs access to the data before asking the user to authorize it.
This function must be called before using the query and store functions, even if the authorization has already
been given at some point in the past.

<dl>
<dt><h4>datatypes</h4><strong>Type: </strong><code>Array</code></dt>
<dd>See Array table below</dd>
</dl>

### store

Stores a data point.

<dl>
<dt><h4>storeOptions</h4><strong>Type: </strong><code>HealthStoreOptions</code></dt>
<dd>See HealthStoreOptions table below</dd>
</dl>

<p><br></p>

