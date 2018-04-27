# CardIO 



Repo: [https://github.com/card-io/card.io-Cordova-Plugin](https://github.com/card-io/card.io-Cordova-Plugin)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add card.io.cordova.mobilesdk
$ npm install --save @ionic-native/card-io
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


Note: For use with iOS 10 + When building your app with the iOS 10 SDK +, you have to add some info to the info.plist file. This is due to increased security in iOS 10. Go to your app directory and search for the <your app name>Info.plist file. Add the following lines in the main <dict> element.
```xml
<key>NSCameraUsageDescription</key>
<string>To scan credit cards.</string>
```
```typescript
import { CardIO } from '@ionic-native/card-io';

constructor(private cardIO: CardIO) { }

...


this.cardIO.canScan()
  .then(
    (res: boolean) => {
      if(res){
        let options = {
          requireExpiry: true,
          requireCVV: false,
          requirePostalCode: false
        }
        CardIO.scan(options);
      }
    }
  );
```



<p><br></p>

## Instance Members

### canScan

Check whether card scanning is currently available. (May vary by
device, OS version, network connectivity, etc.)

### scan

Scan a credit card with card.io.

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>CardIOOptions</code></dt>
<dd>See CardIOOptions table below <span class="tag">optional</span></dd>
</dl>

### version

Retrieve the version of the card.io library. Useful when contacting support.

<p><br></p>

## CardIOOptions

<dl>
<dt><h4>guideColor</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Changes the color of the guide overlay on the camera. The color is provided in hexadecimal format (e.g. `#FFFFFF`) <span class="tag">optional</span></dd><dt><h4>hideCardIOLogo</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The card.io logo will not be shown overlaid on the camera. <span class="tag">optional</span></dd><dt><h4>keepApplicationTheme</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The theme for the card.io Activity's will be set to the theme of the application. <span class="tag">optional</span></dd><dt><h4>languageOrLocale</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The preferred language for all strings appearing in the user interface. If not set, or if set to null, defaults to the device's current language setting. <span class="tag">optional</span></dd><dt><h4>noCamera</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd> If set, the card will not be scanned with the camera. <span class="tag">optional</span></dd><dt><h4>requireCVV</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd> The user will be prompted for the card CVV <span class="tag">optional</span></dd><dt><h4>requireCardholderName</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The user will be prompted for the cardholder name <span class="tag">optional</span></dd><dt><h4>requireExpiry</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set to true to require expiry date <span class="tag">optional</span></dd><dt><h4>requirePostalCode</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The user will be prompted for the card billing postal code. <span class="tag">optional</span></dd><dt><h4>restrictPostalCodeToNumericOnly</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The postal code will only collect numeric input. Set this if you know the expected country's postal code has only numeric postal codes. <span class="tag">optional</span></dd><dt><h4>scanExpiry</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>If scanExpiry is true, an attempt to extract the expiry from the card image will be made. <span class="tag">optional</span></dd><dt><h4>scanInstructions</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Used to display instructions to the user while they are scanning their card. <span class="tag">optional</span></dd><dt><h4>suppressManual</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd> Removes the keyboard button from the scan screen. <span class="tag">optional</span></dd><dt><h4>supressConfirmation</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The user will not be prompted to confirm their card number after processing. <span class="tag">optional</span></dd><dt><h4>supressScan</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Once a card image has been captured but before it has been processed, this value will determine whether to continue processing as usual. <span class="tag">optional</span></dd><dt><h4>useCardIOLogo</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The card.io logo will be shown instead of the PayPal logo. <span class="tag">optional</span></dd>
</dl>

## CardIOResponse

<dl>
<dt><h4>cardNumber</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Full card number</dd><dt><h4>cardType</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Card type</dd><dt><h4>cardholderName</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Cardholder name</dd><dt><h4>cvv</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>CVV</dd><dt><h4>expiryMonth</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Expiry month</dd><dt><h4>expiryYear</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Expiry year</dd><dt><h4>postalCode</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Postal code</dd><dt><h4>redactedCardNumber</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Masked card number, showing only last 4 digits</dd>
</dl>

