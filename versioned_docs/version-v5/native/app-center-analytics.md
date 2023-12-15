---
sidebar_label: 'App Center Analytics'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# App Center Analytics

App Center Analytics helps you understand user behavior and customer engagement to improve your app.
The SDK automatically captures session count and device properties like model, OS version, etc.
You can define your own custom events to measure things that matter to you.
All the information captured is available in the App Center portal for you to analyze the data.

For more info, please see https://docs.microsoft.com/en-us/appcenter/sdk/analytics/cordova

<p>
  <a href="https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-analytics" target="_blank" rel="noopener" className="git-link">github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-analytics</a>
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
      $ npm install cordova-plugin-appcenter-analytics {'\n'}$ npm install @awesome-cordova-plugins/app-center-analytics{' '}
      {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-appcenter-analytics {'\n'}$ npm install
      @awesome-cordova-plugins/app-center-analytics {'\n'}
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
import { AppCenterAnalytics } from '@awesome-cordova-plugins/app-center-analytics/ngx';


constructor(private appCenterAnalytics: AppCenterAnalytics) { }

...

this.appCenterAnalytics.setEnabled(true).then(() => {
   this.appCenterAnalytics.trackEvent('My Event', { TEST: 'HELLO_WORLD' }).then(() => {
       console.log('Custom event tracked');
   });
});

```
