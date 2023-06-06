---
sidebar_label: 'BlinkId'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# BlinkId

Microblink SDK wrapper for barcode and document scanning. See the
blinkid-phonegap repository for available recognizers and other settings

<p>
  <a href="https://github.com/BlinkID/blinkid-phonegap" target="_blank" rel="noopener" className="git-link">
    <svg viewBox="0 0 512 512">
      <path d="M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"></path>
    </svg>{' '}
    https://github.com/BlinkID/blinkid-phonegap
  </a>
</p>

<h2>Stuck on a Cordova issue?</h2>
<DocsCard
  className="cordova-ee-card"
  header="Don't waste precious time on plugin issues."
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" class="cordova-ee-img" />
    <p>
      If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic’s experts offer
      premium advisory services for both community plugins and premier plugins.
    </p>
    <DocsButton className="native-ee-detail">Contact Us Today!</DocsButton>
  </div>
</DocsCard>

<h2 id="installation">
  <a href="#installation">Installation</a>
</h2>
<Tabs
  groupId="runtime"
  defaultValue="Capacitor"
  values={[
    { value: 'Capacitor', label: 'Capacitor' },
    { value: 'Cordova', label: 'Cordova' },
    { value: 'Enterprise', label: 'Enterprise' },
  ]}
>
  <TabItem value="Capacitor">
    <CodeBlock className="language-shell">
      $ npm install blinkid-cordova {'\n'}$ npm install @awesome-cordova-plugins/blinkid {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add blinkid-cordova {'\n'}$ npm install @awesome-cordova-plugins/blinkid {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. &nbsp;
      <a class="btn" href="https://ionic.io/docs/premier-plugins">
        Learn More
      </a> or if you're interested in an enterprise version of this plugin <a
        class="btn"
        href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"
      >
        Contact Us
      </a>
    </blockquote>
  </TabItem>
</Tabs>

## Supported Platforms

- iOS
- Android

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

```tsx
import { BlinkId, RecognizerResultState } from '@awesome-cordova-plugins/blinkid/ngx';

constructor(private blinkId: BlinkId) { }

...

const overlaySettings = new this.blinkId.DocumentOverlaySettings();

const usdlRecognizer = new this.blinkId.UsdlRecognizer();
const usdlSuccessFrameGrabber = new this.blinkId.SuccessFrameGrabberRecognizer(usdlRecognizer);

const barcodeRecognizer = new this.blinkId.BarcodeRecognizer();
barcodeRecognizer.scanPdf417 = true;

const recognizerCollection = new this.blinkId.RecognizerCollection([
  usdlSuccessFrameGrabber,
  barcodeRecognizer,
]);

const canceled = await this.blinkId.scanWithCamera(
  overlaySettings,
  recognizerCollection,
  { ios: IOS_LICENSE_KEY, android: ANDROID_LICENSE_KEY },
);

if (!canceled) {
  if (usdlRecognizer.result.resultState === RecognizerResultState.valid) {
    const successFrame = usdlSuccessFrameGrabber.result.successFrame;
    if (successFrame) {
      this.base64Img = `data:image/jpg;base64, ${successFrame}`;
      this.fields = usdlRecognizer.result.fields;
    }
  } else {
    this.barcodeStringData = barcodeRecognizer.result.stringData;
  }
}

...

const overlaySettings = new this.blinkId.BlinkCardOverlaySettings();
const recognizer = new this.blinkId.BlinkCardRecognizer();
recognizer.returnFullDocumentImage = false;
recognizer.detectGlare = true;
recognizer.extractCvv = true;
recognizer.extractValidThru = true;
recognizer.extractOwner = true;

const recognizerCollection = new this.blinkId.RecognizerCollection([recognizer]);
const canceled = await this.blinkId.scanWithCamera(
  overlaySettings,
  recognizerCollection,
  {
    ios: '', //iOS License Key
    android: '' //Android License Key
  },
);

if (!canceled) {
  if (recognizer.result.resultState === RecognizerResultState.valid) {
    const results = recognizer.result;

    if (results.resultState === RecognizerResultState.valid) {
      const ccInfo = {
        cardNumber: Number(results.cardNumber),
        expirationMonth: Number(results.validThru.month),
        expirationYear: Number(results.validThru.year),
        cvv: Number(results.cvv)
      };
    }
  }
```
