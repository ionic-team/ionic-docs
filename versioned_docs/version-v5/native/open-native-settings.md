---
sidebar_label: 'Open Native Settings'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Open Native Settings

Plugin to open native screens of iOS/android settings

<p>
  <a href="https://github.com/guyromb/Cordova-open-native-settings" target="_blank" rel="noopener" className="git-link">github.com/guyromb/Cordova-open-native-settings</a>
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
      $ npm install cordova-open-native-settings {'\n'}$ npm install @awesome-cordova-plugins/open-native-settings{' '}
      {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-open-native-settings {'\n'}$ npm install
      @awesome-cordova-plugins/open-native-settings {'\n'}
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

You can open any of these settings:

```
 "about", // ios
 "accessibility", // ios, android
 "account", // ios, android
 "airplane_mode", // ios, android
 "apn", // android
 "application_details", // ios, android
 "application_development", // android
 "application", // android
 "autolock", // ios
 "battery_optimization", // android
 "bluetooth", // ios, android
 "castle", // ios
 "captioning", // android
 "cast", // android
 "cellular_usage", // ios
 "configuration_list", // ios
 "data_roaming", // android
 "date", // ios, android
 "display", // ios, android
 "dream", // android
 "facetime", // ios
 "home", // android
 "keyboard", // ios, android
 "keyboard_subtype", // android
 "locale", // ios, android
"location", // ios, android
"locations", // ios
"manage_all_applications", // android
"manage_applications", // android
"memory_card", // android
"music", // ios
"music_equalizer", // ios
"music_volume", // ios
"network", // ios, android
"nike_ipod", // ios
"nfcsharing", // android
"nfc_payment", // android
"nfc_settings", // android
"notes", // ios
"notification_id", // ios
"passbook", // ios
"phone", // ios
"photos", // ios
"print", // android
"privacy", // android
"quick_launch", // android
"reset", // ios
"ringtone", // ios
"browser", // ios
"search", // ios, android
"security", // android
"settings", // ios, android
"show_regulatory_info",
"sound", // ios, android
"software_update", // ios
"storage", // ios, android
"store", // ios, android
"sync", // android
"tethering", // ios
"twitter", // ios
"touch", // ios
"usage", // ios, android
"user_dictionary", // android
"video", // ios
"voice_input", // android
"vpn", // ios
"wallpaper", // ios
"wifi_ip", // android
"wifi", // ios, android
"wireless" // android
```

```tsx
import { OpenNativeSettings } from '@awesome-cordova-plugins/open-native-settings/ngx';


constructor(private openNativeSettings: OpenNativeSettings) { }

...


```
