# NativeKeyboard 


A cross platform WhatsApp / Messenger / Slack -style keyboard even. For your Cordova app.



Repo: [https://github.com/EddyVerbruggen/cordova-plugin-native-keyboard](https://github.com/EddyVerbruggen/cordova-plugin-native-keyboard)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-native-keyboard
$ npm install --save @ionic-native/native-keyboard
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```
import { NativeKeyboard } from '@ionic-native/native-keyboard';


constructor(private nativeKeyboard: NativeKeyboard) { }

...


```



<p><br></p>

## Instance Members

### hideMessenger

Hide messenger

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>NativeKeyboardOptions</code></dt>
<dd>See NativeKeyboardOptions table below</dd>
</dl>

### hideMessengerKeyboard

Programmatically hide the keyboard (but not the messenger bar)

### showMessenger

Show messenger

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>NativeKeyboardOptions</code></dt>
<dd>See NativeKeyboardOptions table below</dd>
</dl>

### showMessengerKeyboard

Programmatically pop up the keyboard again if the user dismissed it.

### updateMessenger

Manipulate the messenger while it's open. For instance if you want to update the text programmatically based on what the user typed.

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>NativeKeyboardUpdateMessengerOptions</code></dt>
<dd>See NativeKeyboardUpdateMessengerOptions table below</dd>
</dl>

<p><br></p>

## NativeKeyboardButton

<dl>
<dt><h4>onPress</h4><strong>Type: </strong><code>reference</code></dt>
<dd>A function invoked when the button is pressed. Use this button to prompt the user what he wants to do next by for instance rendering an ActionSheet.</dd><dt><h4>textStyle</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>If type is "text" you can set this to either "normal", "bold" or "italic".</dd><dt><h4>type</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Either "text" (Android only currently), "fontawesome" or "ionicon".</dd><dt><h4>value</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Depends on the type. Examples: for "text" use "Send", for "fontawesome" use "fa-battery-quarter", for "ionicon" use "\uf48a" (go to http://ionicons.com, right-click and inspect the icon and use the value you find in :before). Note that some fonticons are not supported as the embedded fonts in the plugin may lag behind a little. So try one of the older icons first.</dd>
</dl>

## NativeKeyboardLeftButton

<dl>
<dt><h4>disabledWhenTextEntered</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set to `true` to disable the button once text has been entered.</dd><dt><h4>onPress</h4><strong>Type: </strong><code>reference</code></dt>
<dd>A function invoked when the button is pressed. Use this button to prompt the user what he wants to do next by for instance rendering an ActionSheet.</dd><dt><h4>textStyle</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>If type is "text" you can set this to either "normal", "bold" or "italic".</dd><dt><h4>type</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Either "text" (Android only currently), "fontawesome" or "ionicon".</dd><dt><h4>value</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Depends on the type. Examples: for "text" use "Send", for "fontawesome" use "fa-battery-quarter", for "ionicon" use "\uf48a" (go to http://ionicons.com, right-click and inspect the icon and use the value you find in :before). Note that some fonticons are not supported as the embedded fonts in the plugin may lag behind a little. So try one of the older icons first.</dd>
</dl>

## NativeKeyboardOptions

<dl>
<dt><h4>animated</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Makes the messenger bar slide in from the bottom. Defaults to `false`.</dd><dt><h4>appearance</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Options are: "light", "dark". (iOS only)</dd><dt><h4>autoscrollElement</h4><strong>Type: </strong><code>reference</code></dt>
<dd>Highly recommended to pass in if you want to replicate the behavior of the video's above (scroll down when the keyboard opens). Pass in the scrollable DOM element containing the messages.</dd><dt><h4>backgroundColor</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The background color of the messenger bar. Defaults to `#F6F6F6`.</dd><dt><h4>counterStyle</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Options are: `"none"`, `"split"`, `"countdown"`, `"countdownreversed"`. Note that if `maxChars` is set, `"none"` will still show a counter. Defaults to `"none"`. (iOS only)</dd><dt><h4>keepOpenAfterSubmit</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Setting this to `true` is like the video's above: the keyboard doesn't close upon submit. Defaults to `false`.</dd><dt><h4>leftButton</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined</dd><dt><h4>maxChars</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Setting this > 0 will make a counter show up on iOS (and ignore superfluous input on Android, for now)</dd><dt><h4>onKeyboardDidHide</h4><strong>Type: </strong><code>reference</code></dt>
<dd>A function invoked when the keyboard closed.</dd><dt><h4>onKeyboardDidShow</h4><strong>Type: </strong><code>reference</code></dt>
<dd>A function invoked when the keyboard popped up. Receives the height as a single property.</dd><dt><h4>onKeyboardWillHide</h4><strong>Type: </strong><code>reference</code></dt>
<dd>A function invoked when the keyboard is about to close. (iOS only)</dd><dt><h4>onKeyboardWillShow</h4><strong>Type: </strong><code>reference</code></dt>
<dd>A function invoked when the keyboard is about to pop up. Receives the height as a single property. (iOS only)</dd><dt><h4>onSubmit</h4><strong>Type: </strong><code>reference</code></dt>
<dd>A function invoked when the user submits his input. Receives the text as a single property. Make sure your page is UTF-8 encoded so Chinese and Emoji are rendered OK.</dd><dt><h4>onTextChanged</h4><strong>Type: </strong><code>reference</code></dt>
<dd>A function invoked when any key is pressed, sends the entire text as response.</dd><dt><h4>placeholder</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Like a regular HTML input placeholder.</dd><dt><h4>placeholderColor</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The color of the placeholder text. Defaults to `#CCCCCC`.</dd><dt><h4>rightButton</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined</dd><dt><h4>scrollToBottomAfterMessengerShows</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>If `autoscrollElement` was set you can also make the list scroll down initially, when the messenger bar (without the keyboard popping up) is shown.</dd><dt><h4>secure</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Disables things like the Emoji keyboard and the Predicive text entry bar (iOS only)</dd><dt><h4>showKeyboard</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Open the keyboard when showing the messenger. Defaults to `false`.</dd><dt><h4>text</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The default text set in the messenger input bar.</dd><dt><h4>textColor</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The color of the typed text. Defaults to `#444444`.</dd><dt><h4>textViewBackgroundColor</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The background color of the textview. Looks nicest on Android if it's the same color as the `backgroundColor` property. Defaults to `#F6F6F6`.</dd><dt><h4>textViewBorderColor</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The border color of the textview. Defaults to `#666666`. (iOS only)</dd><dt><h4>type</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Options are: "default", "decimalpad", "phonepad", "numberpad", "namephonepad", "number", "email", "twitter", "url", "alphabet", "search", "ascii". (iOS only)</dd>
</dl>

## NativeKeyboardUpdateMessengerOptions

<dl>
<dt><h4>caretIndex</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Position the cursor anywhere in the text range. Defaults to the end of the text.</dd><dt><h4>showKeyboard</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>If `false` or omitted no changes to the keyboard state are made.</dd><dt><h4>text</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Replace the messenger's text by this. The current text remains if omitted.</dd>
</dl>

