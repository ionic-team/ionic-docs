---
sidebar_label: 'App Rate'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# App Rate

The AppRate plugin makes it easy to prompt the user to rate your app, either now, later, or never.

Requires Cordova plugin: cordova-plugin-apprate. For more info, please see the [AppRate plugin docs](https://github.com/pushandplay/cordova-plugin-apprate).

<p>
  <a href="https://github.com/pushandplay/cordova-plugin-apprate" target="_blank" rel="noopener" className="git-link">github.com/pushandplay/cordova-plugin-apprate</a>
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
      $ npm install cordova-plugin-apprate {'\n'}$ npm install @awesome-cordova-plugins/app-rate {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-apprate {'\n'}$ npm install @awesome-cordova-plugins/app-rate {'\n'}
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
- BlackBerry 10
- iOS
- Windows

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

```tsx
import { AppRate } from '@awesome-cordova-plugins/app-rate/ngx';

constructor(private appRate: AppRate) { }

...
// set certain preferences
this.appRate.preferences.storeAppURL = {
  ios: '&lt;app_id>',
  android: 'market://details?id=&lt;package_name>',
  windows: 'ms-windows-store://review/?ProductId=&lt;store_id>'
}

this.appRate.promptForRating(true);

// or, override the whole preferences object
this.appRate.preferences = {
  usesUntilPrompt: 3,
  storeAppURL: {
   ios: '&lt;app_id>',
   android: 'market://details?id=&lt;package_name>',
   windows: 'ms-windows-store://review/?ProductId=&lt;store_id>'
  }
}

this.appRate.promptForRating(false);
```
