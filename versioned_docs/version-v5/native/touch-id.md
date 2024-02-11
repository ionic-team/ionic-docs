---
sidebar_label: 'Touch ID'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Touch ID

Scan the fingerprint of a user with the TouchID sensor.

Requires Cordova plugin: `cordova-plugin-touch-id`. For more info, please see the [TouchID plugin docs](https://github.com/EddyVerbruggen/cordova-plugin-touch-id).

<p>
  <a href="https://github.com/EddyVerbruggen/cordova-plugin-touch-id" target="_blank" l="noopener" className="git-link">github.com/EddyVerbruggen/cordova-plugin-touch-id</a>
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
      $ npm install cordova-plugin-touch-id {'\n'}$ npm install @awesome-cordova-plugins/touch-id {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-touch-id {'\n'}$ npm install @awesome-cordova-plugins/touch-id {'\n'}
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

- iOS

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

```tsx
import { TouchID } from '@awesome-cordova-plugins/touch-id/ngx';

constructor(private touchId: TouchID) { }

...

this.touchId.isAvailable()
  .then(
    res => console.log('TouchID is available!'),
    err => console.error('TouchID is not available', err)
  );

this.touchId.verifyFingerprint('Scan your fingerprint please')
  .then(
    res => console.log('Ok', res),
    err => console.error('Error', err)
  );
```

### Error Codes

The plugin will reject for various reasons. Your app will most likely need to respond to the cases differently.

Here is a list of some of the error codes:

- `-1` - Fingerprint scan failed more than 3 times
- `-2` or `-128` - User tapped the 'Cancel' button
- `-3` - User tapped the 'Enter Passcode' or 'Enter Password' button
- `-4` - The scan was cancelled by the system (Home button for example)
- `-6` - TouchID is not Available
- `-8` - TouchID is locked out from too many tries
