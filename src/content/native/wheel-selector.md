# WheelSelector 

Native wheel selector for Cordova (Android/iOS).


Repo: [https://github.com/jasonmamy/cordova-wheel-selector-plugin](https://github.com/jasonmamy/cordova-wheel-selector-plugin)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-wheel-selector-plugin
$ npm install --save @ionic-native/wheel-selector
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```
import { WheelSelector } from '@ionic-native/wheel-selector';


constructor(private selector: WheelSelector) { }

...

const jsonData = {
  numbers: [
   { description: "1" },
    { description: "2" },
    { description: "3" }
  ],
  fruits: [
    { description: "Apple" },
    { description: "Banana" },
    { description: "Tangerine" }
  ],
  firstNames: [
    { name: "Fred", id: '1' },
    { name: "Jane", id: '2' },
    { name: "Bob", id: '3' },
    { name: "Earl", id: '4' },
    { name: "Eunice", id: '5' }
  ],
  lastNames: [
    { name: "Johnson", id: '100' },
    { name: "Doe", id: '101' },
    { name: "Kinishiwa", id: '102' },
    { name: "Gordon", id: '103' },
    { name: "Smith", id: '104' }
  ]
}

...

// basic number selection, index is always returned in the result
 selectANumber() {
   this.selector.show({
     title: "How Many?",
     items: [
       this.jsonData.numbers
     ],
   }).then(
     result => {
       console.log(result[0].description + ' at index: ' + result[0].index);
     },
     err => console.log('Error: ', err)
     );
 }

 ...

 // basic selection, setting initial displayed default values: '3' 'Banana'
 selectFruit() {
   this.selector.show({
     title: "How Much?",
     items: [
       this.jsonData.numbers, this.jsonData.fruits
     ],
     positiveButtonText: "Ok",
     negativeButtonText: "Nope",
     defaultItems: [
 	  {index:0, value: this.jsonData.numbers[2].description},
 	  {index: 1, value: this.jsonData.fruits[3].description}
 	]
   }).then(
     result => {
       console.log(result[0].description + ' ' + result[1].description);
     },
     err => console.log('Error: ' + JSON.stringify(err))
     );
 }

 ...

 // more complex as overrides which key to display
 // then retrieve properties from original data
 selectNamesUsingDisplayKey() {
   this.selector.show({
     title: "Who?",
     items: [
       this.jsonData.firstNames, this.jsonData.lastNames
     ],
     displayKey: 'name',
     defaultItems: [
 	  {index:0, value: this.jsonData.firstNames[2].name},
       {index: 0, value: this.jsonData.lastNames[3].name}
     ]
   }).then(
     result => {
       console.log(result[0].name + ' (id= ' + this.jsonData.firstNames[result[0].index].id + '), ' +
         result[1].name + ' (id=' + this.jsonData.lastNames[result[1].index].id + ')');
     },
     err => console.log('Error: ' + JSON.stringify(err))
     );
 }

```




<p><br></p>

## Instance Members

### hideSelector

Hide the selector

### show

Shows the wheel selector

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>WheelSelectorOptions</code></dt>
<dd>See WheelSelectorOptions table below</dd>
</dl>

<p><br></p>

## DefaultItem

<dl>
<dt><h4>index</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>value</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

## WheelSelectorData

<dl>
<dt><h4>data</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

## WheelSelectorItem

<dl>
<dt><h4>description</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

## WheelSelectorOptions

<dl>
<dt><h4>defaultItems</h4><strong>Type: </strong><code>reference</code></dt>
<dd>Which items to display by default. <span class="tag">optional</span></dd><dt><h4>displayKey</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The json key to display, by default it is description, this allows for setting any
key/value to be displayed
Default: description <span class="tag">optional</span></dd><dt><h4>items</h4><strong>Type: </strong><code>reference</code></dt>
<dd>The items to display (array of items).</dd><dt><h4>negativeButtonText</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The 'cancel' button text
Default: Cancel <span class="tag">optional</span></dd><dt><h4>positiveButtonText</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The 'ok' button text
Default: Done <span class="tag">optional</span></dd><dt><h4>theme</h4><strong>Type: </strong><code>union</code></dt>
<dd>Android only - theme color, 'light' or 'dark'.
Default: light <span class="tag">optional</span></dd><dt><h4>title</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The title of the selector's input box</dd><dt><h4>wrapWheelText</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Whether to have the wheels 'wrap' (Android only)
Default: false <span class="tag">optional</span></dd>
</dl>

