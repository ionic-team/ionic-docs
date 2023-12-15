---
sidebar_label: 'OCR'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# OCR

This plugin attempts to identify and extract text from an image.
Please note: This plugin depends on the GoogleMobileVision pod which is referencing UIWebview, that has been deprecated by Apple.
Don't use this plugin in an app intended for App Store as you will get a review rejection from Apple: `Deprecated API Usage — Apple will stop accepting submissions of apps that use UIWebView APIs`
For more info, please see the following Github issue [Google Mobile Vision relying on deprecated UIWebview](https://github.com/NeutrinosPlatform/cordova-plugin-mobile-ocr/issues/27).

<p>
  <a href="https://github.com/NeutrinosPlatform/cordova-plugin-mobile-ocr" target="_blank" rel="noopener" className="git-link">github.com/NeutrinosPlatform/cordova-plugin-mobile-ocr</a>
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
    <CodeBlock className="language-shell">
      $ npm install cordova-plugin-mobile-ocr {'\n'}$ npm install @awesome-cordova-plugins/ocr {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-mobile-ocr {'\n'}$ npm install @awesome-cordova-plugins/ocr {'\n'}
    </CodeBlock>
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
import { OCR, OCRSourceType } from '@awesome-cordova-plugins/ocr/ngx';


constructor(private ocr: OCR) { }

...

this.ocr.recText(OCRSourceType.NORMFILEURL, "file://path/to/image.png")
  .then((res: OCRResult) => console.log(JSON.stringify(res)))
  .catch((error: any) => console.error(error));

```
