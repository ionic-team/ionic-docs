# SafariViewController 



Repo: [https://github.com/EddyVerbruggen/cordova-plugin-safariviewcontroller](https://github.com/EddyVerbruggen/cordova-plugin-safariviewcontroller)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-safariviewcontroller
$ npm install --save @ionic-native/safari-view-controller
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { SafariViewController } from '@ionic-native/safari-view-controller';

constructor(private safariViewController: SafariViewController) { }

...

this.safariViewController.isAvailable()
  .then((available: boolean) => {
      if (available) {

        this.safariViewController.show({
          url: 'http://ionic.io',
          hidden: false,
          animated: false,
          transition: 'curl',
          enterReaderModeIfAvailable: true,
          tintColor: '#ff0000'
        })
        .subscribe((result: any) => {
            if(result.event === 'opened') console.log('Opened');
            else if(result.event === 'loaded') console.log('Loaded');
            else if(result.event === 'closed') console.log('Closed');
          },
          (error: any) => console.error(error)
        );

      } else {
        // use fallback browser, example InAppBrowser
      }
    }
  );
```



<p><br></p>

## Instance Members

### connectToService

Tries to connect to the  Chrome's custom tabs service. you must call this method before calling any of the other methods listed below.

### hide

Hides Safari View Controller

### isAvailable

Checks if SafariViewController is available

### mayLaunchUrl

For even better performance optimization, call this methods if there's more than a 50% chance the user will open a certain URL.

<dl>
<dt><h4>url</h4><strong>Type: </strong><code>string</code></dt>
<dd>null</dd>
</dl>

### show

Shows Safari View Controller

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>SafariViewControllerOptions</code></dt>
<dd>See SafariViewControllerOptions table below <span class="tag">optional</span></dd>
</dl>

### warmUp

Call this method whenever there's a chance the user will open an external url.

<p><br></p>

## SafariViewControllerOptions

<dl>
<dt><h4>animated</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>barColor</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>controlTintColor</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>enterReaderModeIfAvailable</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>hidden</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>showDefaultShareMenuItem</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>tintColor</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>toolbarColor</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>transition</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>url</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

