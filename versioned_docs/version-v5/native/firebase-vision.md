---
sidebar_label: 'Firebase Vision'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Firebase Vision

Cordova plugin for Firebase MLKit Vision

<p>
  <a href="https://github.com/alon22/cordova-plugin-firebase-mlvision" target="_blank" rel="noopener" className="git-link">github.com/alon22/cordova-plugin-firebase-mlvision</a>
</p>

<h2>Stuck on a Cordova issue?</h2>
<DocsCard
  className="cordova-ee-card"
  header="Don't waste precious time on plugin issues."
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic’s experts offer premium advisory services for both community plugins and premier plugins.</p>
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

    $ npm install cordova-plugin-firebase-mlvision
    $ npm install @awesome-cordova-plugins/firebase-vision
    $ ionic cap sync

  </TabItem>
  <TabItem value="Cordova">

    $ ionic cordova plugin add cordova-plugin-firebase-mlvision
    $ npm install @awesome-cordova-plugins/firebase-vision

  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">Learn More</a> or if you're interested in an enterprise version of this plugin <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">Contact Us</a>
    </blockquote>
  </TabItem>
</Tabs>

## Supported Platforms

- Android
- iOS

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

```tsx
import { FirebaseVision } from '@awesome-cordova-plugins/firebase-vision/ngx';


constructor(private firebaseVision: FirebaseVision) { }

...


this.firebaseVision.onDeviceTextRecognizer(FILE_URI)
  .then((res: string) => console.log(res))
  .catch((error: string) => console.error(error));

this.firebaseVision.barcodeDetector(FILE_URI)
  .then((res: Barcode[]) => console.log(res))
  .catch((error: string) => console.error(error));

this.firebaseVision.imageLabeler(FILE_URI)
  .then((res: ImageLabel[]) => console.log(res))
  .catch((error: string) => console.error(error));

```
