# PinDialog 




Repo: [https://github.com/Paldom/PinDialog](https://github.com/Paldom/PinDialog)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-pin-dialog
$ npm install --save @ionic-native/pin-dialog
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { PinDialog } from '@ionic-native/pin-dialog';


constructor(private pinDialog: PinDialog) { }

...

this.pinDialog.prompt('Enter your PIN', 'Verify PIN', ['OK', 'Cancel'])
  .then(
    (result: any) => {
      if (result.buttonIndex == 1) console.log('User clicked OK, value is: ', result.input1);
      else if(result.buttonIndex == 2) console.log('User cancelled');
    }
  );
```




<p><br></p>

## Instance Members

### prompt

Show pin dialog

<dl>
<dt><h4>message</h4><strong>Type: </strong><code>string</code></dt>
<dd>Message to show the user</dd><dt><h4>title</h4><strong>Type: </strong><code>string</code></dt>
<dd>Title of the dialog</dd><dt><h4>buttons</h4></dt>
<dd>Buttons to show</dd>
</dl>

<p><br></p>

