---
sidebar_label: 'Sms Retriever'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Sms Retriever

This plugin retrives the SMS which arrive without requiring READ permissions.

<p>
  <a href="https://github.com/hanatharesh2712/ionic-native-sms-retriever-plugin-master" target="_blank" rel="noopener" className="git-link"
  >github.com/hanatharesh2712/ionic-native-sms-retriever-plugin-master</a>
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
      $ npm install cordova-plugin-sms-retriever-manager {'\n'}$ npm install @awesome-cordova-plugins/sms-retriever{' '}
      {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-sms-retriever-manager {'\n'}$ npm install
      @awesome-cordova-plugins/sms-retriever {'\n'}
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

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

```tsx
import { SmsRetriever } from '@awesome-cordova-plugins/sms-retriever';


constructor(private smsRetriever: SmsRetriever) { }

...


this.smsRetriever.getAppHash()
  .then((res: any) => console.log(res))
  .catch((error: any) => console.error(error));
this.smsRetriever.startWatching()
  .then((res: any) => console.log(res))
  .catch((error: any) => console.error(error));

```
