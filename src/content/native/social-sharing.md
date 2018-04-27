# SocialSharing 


Share text, files, images, and links via social networks, sms, and email.

For Browser usage check out the Web Share API docs: https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin#web-share-api


Repo: [https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin](https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-x-socialsharing
$ npm install --save @ionic-native/social-sharing
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* Browser
* iOS
* Windows
* Windows Phone




### Usage


```typescript
import { SocialSharing } from '@ionic-native/social-sharing';

constructor(private socialSharing: SocialSharing) { }

...

// Check if sharing via email is supported
this.socialSharing.canShareViaEmail().then(() => {
  // Sharing via email is possible
}).catch(() => {
  // Sharing via email is not possible
});

// Share via email
this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
  // Success!
}).catch(() => {
  // Error!
});
```




<p><br></p>

## Instance Members

### shareViaFacebook

Shares directly to Facebook

<dl>
<dt><h4>message</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>image</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>url</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

### canShareVia

Checks if you can share via a specific app.

<dl>
<dt><h4>appName</h4><strong>Type: </strong><code>string</code></dt>
<dd>App name or package name. Examples: instagram or com.apple.social.facebook</dd><dt><h4>message</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>subject</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>image</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>url</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

### shareViaFacebookWithPasteMessageHint

Shares directly to Facebook with a paste message hint

<dl>
<dt><h4>message</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>image</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>url</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>pasteMessageHint</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

### saveToPhotoAlbum

Save an array of images to the camera roll

<dl>
<dt><h4>fileOrFileArray</h4></dt>
<dd>Single or multiple files</dd>
</dl>

### canShareViaEmail

Checks if you can share via email

### setIPadPopupCoordinates

defines the popup position before call the share method.

<dl>
<dt><h4>targetBounds</h4><strong>Type: </strong><code>string</code></dt>
<dd>left, top, width, height
</dd>
</dl>

### share

Shares using the share sheet

<dl>
<dt><h4>message</h4><strong>Type: </strong><code>string</code></dt>
<dd>The message you would like to share. <span class="tag">optional</span></dd><dt><h4>subject</h4><strong>Type: </strong><code>string</code></dt>
<dd>The subject <span class="tag">optional</span></dd><dt><h4>file</h4></dt>
<dd>URL(s) to file(s) or image(s), local path(s) to file(s) or image(s), or base64 data of an image. Only the first file/image will be used on Windows Phone. <span class="tag">optional</span></dd><dt><h4>url</h4><strong>Type: </strong><code>string</code></dt>
<dd>A URL to share <span class="tag">optional</span></dd>
</dl>

### shareVia

Share via AppName

<dl>
<dt><h4>appName</h4><strong>Type: </strong><code>string</code></dt>
<dd>App name or package name. Examples: instagram or com.apple.social.facebook</dd><dt><h4>message</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>subject</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>image</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>url</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

### shareViaEmail

Share via Email

<dl>
<dt><h4>message</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>subject</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>to</h4></dt>
<dd>undefined</dd><dt><h4>cc</h4></dt>
<dd>Optional <span class="tag">optional</span></dd><dt><h4>bcc</h4></dt>
<dd>Optional <span class="tag">optional</span></dd><dt><h4>files</h4></dt>
<dd>Optional URL or local path to file(s) to attach <span class="tag">optional</span></dd>
</dl>

### shareViaInstagram

Shares directly to Instagram

<dl>
<dt><h4>message</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>image</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd>
</dl>

### shareViaSMS

Share via SMS

<dl>
<dt><h4>messge</h4><strong>Type: </strong><code>string</code></dt>
<dd>message to send</dd><dt><h4>phoneNumber</h4><strong>Type: </strong><code>string</code></dt>
<dd>Number or multiple numbers seperated by commas</dd>
</dl>

### shareViaTwitter

Shares directly to Twitter

<dl>
<dt><h4>message</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>image</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>url</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

### shareViaWhatsApp

Shares directly to WhatsApp

<dl>
<dt><h4>message</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>image</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>url</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

### shareViaWhatsAppToReceiver

Shares directly to a WhatsApp Contact

<dl>
<dt><h4>receiver</h4><strong>Type: </strong><code>string</code></dt>
<dd>Pass phone number on Android, and Addressbook ID (abid) on iOS</dd><dt><h4>message</h4><strong>Type: </strong><code>string</code></dt>
<dd>Message to send</dd><dt><h4>image</h4><strong>Type: </strong><code>string</code></dt>
<dd>Image to send (does not work on iOS <span class="tag">optional</span></dd><dt><h4>url</h4><strong>Type: </strong><code>string</code></dt>
<dd>Link to send <span class="tag">optional</span></dd>
</dl>

### shareWithOptions

Shares using the share sheet with additional options and returns a result object or an error message (requires plugin version 5.1.0+)

<dl>
<dt><h4>options</h4></dt>
<dd>The options object with the message, subject, files, url and chooserTitle properties.</dd>
</dl>

<p><br></p>

