# SpeechKit 


Implementation of Nuance SpeechKit SDK on Ionic


Repo: [https://github.com/Shmarkus/cordova-plugin-nuance-speechkit](https://github.com/Shmarkus/cordova-plugin-nuance-speechkit)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-nuance-speechkit
$ npm install --save @ionic-native/speechkit
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { SpeechKit } from '@ionic-native/speechkit';

constructor(private speechkit: SpeechKit) { }


this.speechkit.tts('Text to be read out loud', 'ENG-GBR').then(
  (msg) => { console.log(msg); },
  (err) => { console.log(err); }
);
```




<p><br></p>

## Instance Members

### asr

Try to recognize what the user said

<dl>
<dt><h4>language</h4><strong>Type: </strong><code>string</code></dt>
<dd>null</dd>
</dl>

### tts

Speak text out loud in given language

<dl>
<dt><h4>text</h4><strong>Type: </strong><code>string</code></dt>
<dd>null</dd><dt><h4>language</h4><strong>Type: </strong><code>string</code></dt>
<dd>null</dd>
</dl>

<p><br></p>

