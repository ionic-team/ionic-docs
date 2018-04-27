# ActionSheet 


The ActionSheet plugin shows a native list of options the user can choose from.

Requires Cordova plugin: `cordova-plugin-actionsheet`. For more info, please see the [ActionSheet plugin docs](https://github.com/EddyVerbruggen/cordova-plugin-actionsheet).


Repo: [https://github.com/EddyVerbruggen/cordova-plugin-actionsheet](https://github.com/EddyVerbruggen/cordova-plugin-actionsheet)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-actionsheet
$ npm install --save @ionic-native/action-sheet
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* Browser
* iOS
* Windows
* Windows Phone 8




### Usage


```typescript
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';

constructor(private actionSheet: ActionSheet) { }

...


let buttonLabels = ['Share via Facebook', 'Share via Twitter'];

const options: ActionSheetOptions = {
  title: 'What do you want with this image?',
  subtitle: 'Choose an action',
  buttonLabels: buttonLabels,
  addCancelButtonWithLabel: 'Cancel',
  addDestructiveButtonWithLabel: 'Delete',
  androidTheme: this.actionSheet.ANDROID_THEMES.THEME_HOLO_DARK,
  destructiveButtonLast: true
}

this.actionSheet.show(options).then((buttonIndex: number) => {
  console.log('Button pressed: ' + buttonIndex);
});
```



<p><br></p>

## Instance Members

### ANDROID_THEMES

Convenience property to select an Android theme value

### hide

Programmatically hide the native ActionSheet

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>ActionSheetOptions</code></dt>
<dd>See ActionSheetOptions table below <span class="tag">optional</span></dd>
</dl>

### show

Show a native ActionSheet component. See below for options.

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>ActionSheetOptions</code></dt>
<dd>See ActionSheetOptions table below <span class="tag">optional</span></dd>
</dl>

<p><br></p>

## ActionSheetOptions

<dl>
<dt><h4>addCancelButtonWithLabel</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Add a cancel button with text <span class="tag">optional</span></dd><dt><h4>addDestructiveButtonWithLabel</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Add a destructive button with text <span class="tag">optional</span></dd><dt><h4>androidEnableCancelButton</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Enable a cancel on Android <span class="tag">optional</span></dd><dt><h4>androidTheme</h4><strong>Type: </strong><code>union</code></dt>
<dd>Theme to be used on Android <span class="tag">optional</span></dd><dt><h4>buttonLabels</h4><strong>Type: </strong><code>string[]</code></dt>
<dd>The labels for the buttons. Uses the index x</dd><dt><h4>destructiveButtonLast</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Choose if destructive button will be the last <span class="tag">optional</span></dd><dt><h4>position</h4><strong>Type: </strong><code>tuple</code></dt>
<dd>On an iPad, set the X,Y position <span class="tag">optional</span></dd><dt><h4>subtitle</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The subtitle for the actionsheet (IOS only) <span class="tag">optional</span></dd><dt><h4>title</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The title for the actionsheet <span class="tag">optional</span></dd><dt><h4>winphoneEnableCancelButton</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Enable a cancel on Windows Phone <span class="tag">optional</span></dd>
</dl>

