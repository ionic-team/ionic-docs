---
title: 'PhoneGap Plugin for Push Notifications With Cordova and Ionic'
description: 'Register and receive push notifications on your Ionic apps using the Cordova plugin: phonegap-plugin-push. Read for how to install on supported platforms.'
sidebar_label: 'Push'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Push

Register and receive push notifications.

Requires Cordova plugin: `phonegap-plugin-push`. For more info, please see the [Push plugin docs](https://github.com/phonegap/phonegap-plugin-push).

For TypeScript users, see the [Push plugin docs about using TypeScript for custom notifications](https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/TYPESCRIPT.md).

<p>
  <a href="https://github.com/phonegap/phonegap-plugin-push" target="_blank" rel="noopener" className="git-link">
    <svg viewBox="0 0 512 512">
      <path d="M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"></path>
    </svg>{' '}
    https://github.com/phonegap/phonegap-plugin-push
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
      $ npm install phonegap-plugin-push {'\n'}$ npm install @awesome-cordova-plugins/push {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add phonegap-plugin-push {'\n'}$ npm install @awesome-cordova-plugins/push {'\n'}
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

- Android
- Browser
- iOS
- Windows

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

```tsx
import { Push, PushObject, PushOptions } from '@awesome-cordova-plugins/push/ngx';

constructor(private push: Push) { }

...


// to check if we have permission
this.push.hasPermission()
  .then((res: any) => {

    if (res.isEnabled) {
      console.log('We have permission to send push notifications');
    } else {
      console.log('We do not have permission to send push notifications');
    }

  });

// Create a channel (Android O and above). You'll need to provide the id, description and importance properties.
this.push.createChannel({
 id: "testchannel1",
 description: "My first test channel",
 // The importance property goes from 1 = Lowest, 2 = Low, 3 = Normal, 4 = High and 5 = Highest.
 importance: 3,
 //badge is used to if badge appears on the app icon see https://developer.android.com/reference/android/app/NotificationChannel.html#setShowBadge(boolean).
 //false = no badge on app icon.
 //true = badge on app icon
 badge: false
}).then(() => console.log('Channel created'));

// Delete a channel (Android O and above)
this.push.deleteChannel('testchannel1').then(() => console.log('Channel deleted'));

// Return a list of currently configured channels
this.push.listChannels().then((channels) => console.log('List of channels', channels))

// to initialize push notifications

const options: PushOptions = {
   android: {},
   ios: {
       alert: 'true',
       badge: true,
       sound: 'false'
   },
   windows: {},
   browser: {
       pushServiceURL: 'http://push.api.phonegap.com/v1/push'
   }
}

const pushObject: PushObject = this.push.init(options);


pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));

pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));


```
