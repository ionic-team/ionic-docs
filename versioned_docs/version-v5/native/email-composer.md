---
sidebar_label: 'Email Composer'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Email Composer

Requires Cordova plugin: cordova-plugin-email-composer. For more info, please see the [Email Composer plugin docs](https://github.com/hypery2k/cordova-email-plugin).

<p>
  <a href="https://github.com/katzer/cordova-plugin-email-composer" target="_blank" rel="noopener" className="git-link">github.com/katzer/cordova-plugin-email-composer</a>
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
      $ npm install cordova-plugin-email-composer {'\n'}$ npm install @awesome-cordova-plugins/email-composer {'\n'}$
      ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-email-composer {'\n'}$ npm install
      @awesome-cordova-plugins/email-composer {'\n'}
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

- Amazon Fire OS
- Android
- Browser
- iOS
- Windows
- macOS

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

```tsx
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

constructor(private emailComposer: EmailComposer) { }

...


this.emailComposer.getClients().then((apps: []) => {
   // Returns an array of configured email clients for the device
});

this.emailComposer.hasClient().then(app, (isValid: boolean) => {
 if (isValid) {
   // Now we know we have a valid email client configured
   // Not specifying an app will return true if at least one email client is configured
 }
});

this.emailComposer.hasAccount().then((isValid: boolean) => {
 if (isValid) {
   // Now we know we have a valid email account configured
 }
});

this.emailComposer.isAvailable().then(app, (available: boolean) => {
 if(available) {
   // Now we know we can send an email, calls hasClient and hasAccount
   // Not specifying an app will return true if at least one email client is configured
 }
});

let email = {
  to: 'max@mustermann.de',
  cc: 'erika@mustermann.de',
  bcc: ['john@doe.com', 'jane@doe.com'],
  attachments: [
    'file://img/logo.png',
    'res://icon.png',
    'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
    'file://README.pdf'
  ],
  subject: 'Cordova Icons',
  body: 'How are you? Nice greetings from Leipzig',
  isHtml: true
}

// Send a text message using default options
this.emailComposer.open(email);
```

You can also assign aliases to email apps

```ts
// add alias
this.email.addAlias('gmail', 'com.google.android.gm');

// then use alias when sending email
this.email.open({
  app: 'gmail',
  ...
});
```
