# NativePageTransitions 


The Native Page Transitions plugin uses native hardware acceleration to animate your transitions between views. You have complete control over the type of transition, the duration, and direction.


Repo: [https://github.com/Telerik-Verified-Plugins/NativePageTransitions](https://github.com/Telerik-Verified-Plugins/NativePageTransitions)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add com.telerik.plugins.nativepagetransitions
$ npm install --save @ionic-native/native-page-transitions
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS
* Windows Phone 8




### Usage


```typescript
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

constructor(private nativePageTransitions: NativePageTransitions) { }

...


// example of adding a transition when a page/modal closes
ionViewWillLeave() {

 let options: NativeTransitionOptions = {
    direction: 'up',
    duration: 500,
    slowdownfactor: 3,
    slidePixels: 20,
    iosdelay: 100,
    androiddelay: 150,
    fixedPixelsTop: 0,
    fixedPixelsBottom: 60
   }

 this.nativePageTransitions.slide(options)
   .then(onSuccess)
   .catch(onError);

}


// example of adding a transition when pushing a new page
openPage(page: any) {

  this.nativePageTransitions.slide(options);
  this.navCtrl.push(page);

}

```




<p><br></p>

## Instance Members

### cancelPendingTransition

Cancel pending transition

### curl

Perform a slide animation

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>NativeTransitionOptions</code></dt>
<dd>See NativeTransitionOptions table below</dd>
</dl>

### drawer

Perform a slide animation

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>NativeTransitionOptions</code></dt>
<dd>See NativeTransitionOptions table below</dd>
</dl>

### executePendingTransition

Execute pending transition

### fade

Perform a fade animation

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>NativeTransitionOptions</code></dt>
<dd>See NativeTransitionOptions table below</dd>
</dl>

### flip

Perform a flip animation

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>NativeTransitionOptions</code></dt>
<dd>See NativeTransitionOptions table below</dd>
</dl>

### slide

Perform a slide animation

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>NativeTransitionOptions</code></dt>
<dd>See NativeTransitionOptions table below</dd>
</dl>

<p><br></p>

## NativeTransitionOptions

<dl>
<dt><h4>action</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>androiddelay</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>direction</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>duration</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>fixedPixelsBottom</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>fixedPixelsTop</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>href</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>iosdelay</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>origin</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>slidePixels</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>slowdownfactor</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>winphonedelay</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

