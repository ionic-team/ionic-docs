---
title: 'Local Notifications: iOS & Android | Cordova Local Notifications'
description: 'The Cordova Local Notifications Plugin allows you to display local notifications from your Ionic Framework application on iOS, Android, or Windows devices.'
sidebar_label: 'Local Notifications'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Local Notifications

This plugin allows you to display local notifications on the device

<p>
  <a href="https://github.com/katzer/cordova-plugin-local-notifications" target="_blank" rel="noopener" className="git-link">github.com/katzer/cordova-plugin-local-notifications</a>
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
      $ npm install cordova-plugin-local-notification {'\n'}$ npm install @awesome-cordova-plugins/local-notifications{' '}
      {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-local-notification {'\n'}$ npm install
      @awesome-cordova-plugins/local-notifications {'\n'}
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
- Windows

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

```tsx
import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx';


constructor(private localNotifications: LocalNotifications) { }

...


// Schedule a single notification
this.localNotifications.schedule({
  id: 1,
  text: 'Single ILocalNotification',
  sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
  data: { secret: key }
});


// Schedule multiple notifications
this.localNotifications.schedule([{
   id: 1,
   text: 'Multi ILocalNotification 1',
   sound: isAndroid ? 'file://sound.mp3': 'file://beep.caf',
   data: { secret:key }
  },{
   id: 2,
   title: 'Local ILocalNotification Example',
   text: 'Multi ILocalNotification 2',
   icon: 'http://example.com/icon.png'
}]);


// Schedule delayed notification
this.localNotifications.schedule({
   text: 'Delayed ILocalNotification',
   trigger: {at: new Date(new Date().getTime() + 3600)},
   led: 'FF0000',
   sound: null
});
```
