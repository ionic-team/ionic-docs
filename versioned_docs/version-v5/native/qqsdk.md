---
sidebar_label: 'QQSDK'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# QQSDK

This Plugin is a wrapper around the Tencent QQ SDK for Android and iOS. Provides access to QQ ssoLogin, QQ Sharing, QQZone Sharing etc.

Requires Cordova plugin: `cordova-plugin-qqsdk`. For more info, please see the [QQSDK plugin docs](https://github.com/iVanPan/Cordova_QQ).

<p><a href="https://github.com/iVanPan/Cordova_QQ" target="_blank" rel="noopener" className="git-link">
  <svg viewBox="0 0 512 512"><path d="M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"></path></svg> https://github.com/iVanPan/Cordova_QQ
</a></p>

<h2>Stuck on a Cordova issue?</h2>
<DocsCard className="cordova-ee-card" header="Don't waste precious time on plugin issues." href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native">
  <div>
    <img src="/docs/icons/native-cordova-bot.png" class="cordova-ee-img" />
    <p>If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic’s experts offer premium advisory services for both community plugins and premier plugins.</p>
    <DocsButton className="native-ee-detail">Contact Us Today!</DocsButton>
  </div>
</DocsCard>

<h2 id="installation">
  <a href="#installation">Installation</a>
</h2>
<Tabs groupId="runtime" defaultValue="Capacitor" values={[
  {value: 'Capacitor', label: 'Capacitor'},
  {value: 'Cordova', label: 'Cordova'},
  {value: 'Enterprise', label: 'Enterprise'},
]}>
  <TabItem value="Capacitor">
    <CodeBlock className="language-shell">
      $ npm install cordova-plugin-qqsdk {"\n"}
      $ npm install @ionic-native/qqsdk {"\n"}
      $ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-qqsdk {"\n"}
      $ npm install @ionic-native/qqsdk {"\n"}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. &nbsp;
      <a class="btn" href="https://ionic.io/docs/premier-plugins">Learn More</a> or if you're interested in an enterprise version of this plugin <a class="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">Contact Us</a></blockquote>
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
import { QQSDK, QQShareOptions } from '@ionic-native/qqsdk/ngx';

constructor(private qq: QQSDK) { }

...


const options: QQShareOptions = {
  client: this.qq.ClientType.QQ,
  scene: this.qq.Scene.QQ,
  title: 'This is a title for cordova-plugin-qqsdk',
  url: 'https://cordova.apache.org/',
  image: 'https://cordova.apache.org/static/img/cordova_bot.png',
  description: 'This is  Cordova QQ share description',
  flashUrl:  'http://stream20.qqmusic.qq.com/30577158.mp3',
}

const clientOptions: QQShareOptions = {
  client: this.qq.ClientType.QQ,
}

const shareTextOptions: QQShareOptions = {
  client: this.qq.ClientType.QQ,
  text: 'This is Share Text',
  scene: this.qq.Scene.QQ,
}

this.qq.ssoLogin(clientOptions)
   .then(result => {
      // Success
      console.log('token is ' + result.access_token);
      console.log('userid is ' + result.userid);
      console.log('expires_time is ' + new Date(parseInt(result.expires_time)) + ' TimeStamp is ' + result.expires_time);
   })
   .catch(error => {
      console.log(error); // Failed
   });

this.qq.logout()
   .then(() => {
      console.log('logout success');
   })
   .catch(error => {
      console.log(error);
   });

this.qq.checkClientInstalled(clientOptions)
   .then(() => {
      console.log('Installed');
   })
   .catch(() => {
      console.log('Not Installed');
   });

this.qq.shareText(shareTextOptions)
   .then(() => {
      console.log('shareText success');
   })
   .catch(error => {
      console.log(error);
   });

this.qq.shareImage(options)
   .then(() => {
      console.log('shareImage success');
   })
   .catch(error => {
      console.log(error);
   });
}

this.qq.shareNews(options)
   .then(() => {
      console.log('shareNews success');
   })
   .catch(error => {
      console.log(error);
   });
}

this.qq.shareAudio(options)
   .then(() => {
      console.log('shareAudio success');
   })
   .catch(error => {
      console.log(error);
   });

```
