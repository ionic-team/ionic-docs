# IndexAppContent 


This plugin gives you a Javascript API to interact with Core Spotlight on iOS (=> iOS 9).
You can add, update and delete items to the spotlight search index.
Spotlight Search will include these items in the result list. You can deep-link the search results with your app.


Repo: [https://github.com/johanblomgren/cordova-plugin-indexappcontent](https://github.com/johanblomgren/cordova-plugin-indexappcontent)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-indexappcontent
$ npm install --save @ionic-native/index-app-content
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* iOS




### Usage


```typescript
import { IndexAppContent } from '@ionic-native/index-app-content';


constructor(private indexAppContent: IndexAppContent) { }

...

var items = [
     {
       domain: 'com.my.domain',
       identifier: '88asdf7dsf',
       title: 'Foo',
       description: 'Bar',
       url: 'http://location/of/my/image.jpg',
   },
   {
       domain: 'com.other.domain',
       identifier: '9asd67g6a',
       title: 'Baz',
       description: 'Woot',
       url: 'http://location/of/my/image2.jpg',
    }
];

this.indexAppContent.setItems(items)
  .then((res: any) => console.log(res))
  .catch((error: any) => console.error(error));

```




<p><br></p>

## Instance Members

### clearItemsForDomains

Clear all items stored for a given array of domains

<dl>
<dt><h4>domains</h4><strong>Type: </strong><code>Array</code></dt>
<dd>See Array table below</dd>
</dl>

### clearItemsForIdentifiers

Clear all items stored for a given array of identifiers

<dl>
<dt><h4>identifiers</h4><strong>Type: </strong><code>Array</code></dt>
<dd>See Array table below</dd>
</dl>

### isIndexingAvailable

The option to index app content might not be available at all due to device limitations or user settings.
Therefore it's highly recommended to check upfront if indexing is possible.

### setIndexingInterval

You might want to avoid to update spotlight index too frequently.
Without calling this function a subsequent call to manipulate the index is only possible after 1440 minutes (= 24 hours)!

<dl>
<dt><h4>intervalMinutes</h4><strong>Type: </strong><code>number</code></dt>
<dd>null</dd>
</dl>

### setItems

Add or change items to spotlight index

<dl>
<dt><h4>items</h4><strong>Type: </strong><code>Array</code></dt>
<dd>See Array table below</dd>
</dl>

<p><br></p>

## IndexItem

<dl>
<dt><h4>description</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>domain</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>identifier</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>keywords</h4><strong>Type: </strong><code>reference</code></dt>
<dd>Item keywords <span class="tag">optional</span></dd><dt><h4>lifetime</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Lifetime in minutes <span class="tag">optional</span></dd><dt><h4>title</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>url</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Url to image</dd>
</dl>

