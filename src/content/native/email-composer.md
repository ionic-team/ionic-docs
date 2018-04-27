# EmailComposer 



Requires Cordova plugin: cordova-plugin-email-composer. For more info, please see the [Email Composer plugin docs](https://github.com/hypery2k/cordova-email-plugin).



Repo: [https://github.com/katzer/cordova-plugin-email-composer](https://github.com/katzer/cordova-plugin-email-composer)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-email-composer
$ npm install --save @ionic-native/email-composer
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Amazon Fire OS
* Android
* Browser
* iOS
* Windows
* macOS




### Usage


```typescript
import { EmailComposer } from '@ionic-native/email-composer';

constructor(private emailComposer: EmailComposer) { }

...


this.emailComposer.isAvailable().then((available: boolean) =>{
 if(available) {
   //Now we know we can send
 }
});

let email = {
  to: 'max@mustermann.de',
  cc: 'erika@mustermann.de',
  bcc: ['john@doe.com', 'jane@doe.com'],
  attachments: [
    'file://img/logo.png',
    'res://icon.png',
    'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
    'file://README.pdf'
  ],
  subject: 'Cordova Icons',
  body: 'How are you? Nice greetings from Leipzig',
  isHtml: true
}

// Send a text message using default options
this.emailComposer.open(email);
```

You can also assign aliases to email apps
```ts
// add alias
this.email.addAlias('gmail', 'com.google.android.gm');

// then use alias when sending email
this.email.open({
  app: 'gmail',
  ...
});
```



<p><br></p>

## Instance Members

### addAlias

Adds a new mail app alias.

<dl>
<dt><h4>alias</h4><strong>Type: </strong><code>string</code></dt>
<dd>The alias name</dd><dt><h4>packageName</h4><strong>Type: </strong><code>string</code></dt>
<dd>The package name
</dd>
</dl>

### hasPermission

Checks if the app has a permission to access email accounts information

### isAvailable

Verifies if sending emails is supported on the device.

<dl>
<dt><h4>app</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd>
</dl>

### open

Displays the email composer pre-filled with data.

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>EmailComposerOptions</code></dt>
<dd>See EmailComposerOptions table below</dd><dt><h4>scope</h4><strong>Type: </strong><code>any</code></dt>
<dd>null <span class="tag">optional</span></dd>
</dl>

### requestPermission

Request permission to access email accounts information

<p><br></p>

## EmailComposerOptions

<dl>
<dt><h4>app</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>App to send the email with <span class="tag">optional</span></dd><dt><h4>attachments</h4><strong>Type: </strong><code>string[]</code></dt>
<dd>File paths or base64 data streams <span class="tag">optional</span></dd><dt><h4>bcc</h4><strong>Type: </strong><code>union</code></dt>
<dd>Email address(es) for BCC field <span class="tag">optional</span></dd><dt><h4>body</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Email body (for HTML, set isHtml to true) <span class="tag">optional</span></dd><dt><h4>cc</h4><strong>Type: </strong><code>union</code></dt>
<dd>Email address(es) for CC field <span class="tag">optional</span></dd><dt><h4>isHtml</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Indicates if the body is HTML or plain text <span class="tag">optional</span></dd><dt><h4>subject</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Subject of the email <span class="tag">optional</span></dd><dt><h4>to</h4><strong>Type: </strong><code>union</code></dt>
<dd>Email address(es) for To field <span class="tag">optional</span></dd><dt><h4>type</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd> Content type of the email (Android only) <span class="tag">optional</span></dd>
</dl>

