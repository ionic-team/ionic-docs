# ThemeableBrowser 


In-app browser that allows styling.


Repo: [https://github.com/initialxy/cordova-plugin-themeablebrowser](https://github.com/initialxy/cordova-plugin-themeablebrowser)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-themeablebrowser
$ npm install --save @ionic-native/themeable-browser
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Amazon Fire OS
* Android
* Blackberry 10
* Browser
* FirefoxOS
* iOS
* Ubuntu
* Windows
* Windows Phone




### Usage


```typescript
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';

constructor(private themeableBrowser: ThemeableBrowser) { }

...

// can add options from the original InAppBrowser in a JavaScript object form (not string)
// This options object also takes additional parameters introduced by the ThemeableBrowser plugin
// This example only shows the additional parameters for ThemeableBrowser
// Note that that `image` and `imagePressed` values refer to resources that are stored in your app
const options: ThemeableBrowserOptions = {
     statusbar: {
         color: '#ffffffff'
     },
     toolbar: {
         height: 44,
         color: '#f0f0f0ff'
     },
     title: {
         color: '#003264ff',
         showPageTitle: true
     },
     backButton: {
         image: 'back',
         imagePressed: 'back_pressed',
         align: 'left',
         event: 'backPressed'
     },
     forwardButton: {
         image: 'forward',
         imagePressed: 'forward_pressed',
         align: 'left',
         event: 'forwardPressed'
     },
     closeButton: {
         image: 'close',
         imagePressed: 'close_pressed',
         align: 'left',
         event: 'closePressed'
     },
     customButtons: [
         {
             image: 'share',
             imagePressed: 'share_pressed',
             align: 'right',
             event: 'sharePressed'
         }
     ],
     menu: {
         image: 'menu',
         imagePressed: 'menu_pressed',
         title: 'Test',
         cancel: 'Cancel',
         align: 'right',
         items: [
             {
                 event: 'helloPressed',
                 label: 'Hello World!'
             },
             {
                 event: 'testPressed',
                 label: 'Test!'
             }
         ]
     },
     backButtonCanClose: true
}

const browser: ThemeableBrowserObject = this.themeableBrowser.create('https://ionic.io', '_blank', options);

```
We suggest that you refer to the plugin's repository for additional information on usage that may not be covered here.



<p><br></p>

## Instance Members

### create

Creates a browser instance

<dl>
<dt><h4>url</h4><strong>Type: </strong><code>string</code></dt>
<dd>URL to open</dd><dt><h4>target</h4><strong>Type: </strong><code>string</code></dt>
<dd>Target</dd><dt><h4>styleOptions</h4><strong>Type: </strong><code>ThemeableBrowserOptions</code></dt>
<dd>See ThemeableBrowserOptions table below</dd>
</dl>

<p><br></p>

## ThemeableBrowserButton

<dl>
<dt><h4>align</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>event</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>image</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>imagePressed</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>wwwImage</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>wwwImageDensity</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>wwwImagePressed</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

## ThemeableBrowserOptions

<dl>
<dt><h4>allowInlineMediaPlayback</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>backButton</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>backButtonCanClose</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>clearcache</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>clearsessioncache</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>closeButton</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>closebuttoncaption</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>customButtons</h4><strong>Type: </strong><code>ThemeableBrowserButton[]</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>disableAnimation</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>disallowoverscroll</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>enableViewportScale</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>forwardButton</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>fullscreen</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>hardwareback</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>hidden</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>keyboardDisplayRequiresUserAction</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>location</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>mediaPlaybackRequiresUserAction</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>menu</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>presentationstyle</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>shouldPauseOnSuspsend</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>statusbar</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>suppressesIncrementalRendering</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>title</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>toolbar</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>toolbarposition</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>transitionstyle</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>zoom</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

