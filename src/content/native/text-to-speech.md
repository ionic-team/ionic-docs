# TextToSpeech 


Text to Speech plugin


Repo: [https://github.com/vilic/cordova-plugin-tts](https://github.com/vilic/cordova-plugin-tts)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-tts
$ npm install --save @ionic-native/text-to-speech
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
import { TextToSpeech } from '@ionic-native/text-to-speech';

constructor(private tts: TextToSpeech) { }

...

this.tts.speak('Hello World')
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));

```



<p><br></p>

## Instance Members

### speak

This function speaks

<dl>
<dt><h4>textOrOptions</h4></dt>
<dd>Text to speak or TTSOptions</dd>
</dl>

### stop

Stop any current TTS playback

<p><br></p>

## TTSOptions

<dl>
<dt><h4>locale</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>a string like 'en-US', 'zh-CN', etc <span class="tag">optional</span></dd><dt><h4>rate</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>speed rate, 0 ~ 1 <span class="tag">optional</span></dd><dt><h4>text</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>text to speak</dd>
</dl>

