---
sidebar_label: 'Vibes'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Vibes

This plugin enables integration with the Vibes Push SDK to your Cordova project with Android and iOS supported.

<p>
  <a href="https://github.com/vibes/vibes-cordova.git" target="_blank" rel="noopener" className="git-link">github.com/vibes/vibes-cordova.git</a>
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
      $ npm install vibes-cordova {'\n'}$ npm install @awesome-cordova-plugins/vibes {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add vibes-cordova {'\n'}$ npm install @awesome-cordova-plugins/vibes {'\n'}
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
import { Vibes } from '@awesome-cordova-plugins/vibes/ngx';


constructor(private vibes: Vibes) { }

...


this.vibes.registerDevice()
  .then((res: any) => console.log(`device registration success: ${res}`)) // retrieve and save the device_id from `res` JSON object
  .catch((error: any) => console.error('Error registering device', error));

this.vibes.registerPush()
  .then((res: any) => console.log(res))
  .catch((error: any) => console.error('Error registering push', error));

this.vibes.getVibesDeviceInfo()
  .then((res: any) => console.log(res)) // retrieve the `device_id` and `push_token` from the JSON object
  .catch((error: any) => console.error('Error retrieving deviceinfo', error));

this.vibes.fetchInboxMessages()
  .then((res: any) => console.log(res)) // fetches inbox messages for this person.
  .catch((error: any) => console.error('Error fetching inbox messages for this person', error));
```
