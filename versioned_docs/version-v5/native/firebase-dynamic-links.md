---
sidebar_label: 'Firebase Dynamic Links'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Firebase Dynamic Links

Cordova plugin for Firebase Dynamic Links

Variables APP_DOMAIN and APP_PATH specify web URL where your app will start an activity to handle the link. They also used to setup support for App Indexing.
Go to firebase console and export google-services.json and GoogleService-Info.plist. Put those files into the root of your cordova app folder.

Preferences:

Preferences GoogleIOSClientId and GoogleAndroidClientId are used to setup dynamic links when you have an app for several platforms.
You can find values at your GoogleService-Info.plist (key ANDROID_CLIENT_ID) and google-services.json (key client[0].oauth_client[0].client_id).

config.xml:

```xml
<platform name="ios">
    <preference name="GoogleIOSClientId" value="..." />
</platform>
<platform name="android">
    <preference name="GoogleAndroidClientId" value="..." />
</platform>
```

<p>
  <a href="https://github.com/chemerisuk/cordova-plugin-firebase-dynamiclinks" target="_blank" rel="noopener" className="git-link">github.com/chemerisuk/cordova-plugin-firebase-dynamiclinks</a>
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
      $ npm install cordova-plugin-firebase-dynamiclinks {'\n'}$ npm install
      @awesome-cordova-plugins/firebase-dynamic-links {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-firebase-dynamiclinks {'\n'}$ npm install
      @awesome-cordova-plugins/firebase-dynamic-links {'\n'}
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
import { FirebaseDynamicLinks } from '@awesome-cordova-plugins/firebase-dynamic-links/ngx';


constructor(private firebaseDynamicLinks: FirebaseDynamicLinks) { }

...
// Handle the logic here after opening the app with the Dynamic link
this.firebaseDynamicLinks.onDynamicLink()
  .subscribe((res: any) => console.log(res), (error:any) => console.log(error));
```
