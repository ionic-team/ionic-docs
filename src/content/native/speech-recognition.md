# SpeechRecognition 


This plugin does speech recognition using cloud services


Repo: [https://github.com/pbakondy/cordova-plugin-speechrecognition](https://github.com/pbakondy/cordova-plugin-speechrecognition)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-speechrecognition
$ npm install --save @ionic-native/speech-recognition
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { SpeechRecognition } from '@ionic-native/speech-recognition';

constructor(private speechRecognition: SpeechRecognition) { }

...



// Check feature available
this.speechRecognition.isRecognitionAvailable()
  .then((available: boolean) => console.log(available))

// Start the recognition process
this.speechRecognition.startListening(options)
  .subscribe(
    (matches: Array<string>) => console.log(matches),
    (onerror) => console.log('error:', onerror)
  )

// Stop the recognition process (iOS only)
this.speechRecognition.stopListening()

// Get the list of supported languages
this.speechRecognition.getSupportedLanguages()
  .then(
    (languages: Array<string>) => console.log(languages),
    (error) => console.log(error)
  )

// Check permission
this.speechRecognition.hasPermission()
  .then((hasPermission: boolean) => console.log(hasPermission))

// Request permissions
this.speechRecognition.requestPermission()
  .then(
    () => console.log('Granted'),
    () => console.log('Denied')
  )

```




<p><br></p>

## Instance Members

### getSupportedLanguages

Get the list of supported languages

### hasPermission

Check permission

### isRecognitionAvailable

Check feature available

### requestPermission

Request permissions

### startListening

Start the recognition process

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>SpeechRecognitionListeningOptions</code></dt>
<dd>See SpeechRecognitionListeningOptions table below <span class="tag">optional</span></dd>
</dl>

### stopListening

Stop the recognition process

<p><br></p>

## SpeechRecognitionListeningOptionsAndroid

<dl>
<dt><h4>language</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>used language for recognition (default `"en-US"`) <span class="tag">optional</span></dd><dt><h4>matches</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>number of return matches (maximum number of matches) <span class="tag">optional</span></dd><dt><h4>prompt</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>displayed prompt of listener popup window <span class="tag">optional</span></dd><dt><h4>showPartial</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Allow partial results to be returned (default `false`) <span class="tag">optional</span></dd><dt><h4>showPopup</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>display listener popup window with prompt (default `true`) <span class="tag">optional</span></dd>
</dl>

## SpeechRecognitionListeningOptionsIOS

<dl>
<dt><h4>language</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>used language for recognition (default `"en-US"`) <span class="tag">optional</span></dd><dt><h4>matches</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>umber of return matches (default `5`) <span class="tag">optional</span></dd><dt><h4>showPartial</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Allow partial results to be returned (default `false`) <span class="tag">optional</span></dd>
</dl>

