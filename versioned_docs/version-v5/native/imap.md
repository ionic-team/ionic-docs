---
sidebar_label: 'Imap'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Imap

This plugin will enable an Ionic application to use the IMAP (Internet Message Access Protocol) features.
This plugin is in Beta version and it offers support only for Android.
The plugin uses Java Mail API.
Planned improvements and support for iOS.

<p>
  <a href="https://github.com/aleksandar888/cordova-plugin-imap.git" target="_blank" rel="noopener" className="git-link">github.com/aleksandar888/cordova-plugin-imap.git</a>
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
      $ npm install cordova-plugin-imap {'\n'}$ npm install @awesome-cordova-plugins/imap {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-imap {'\n'}$ npm install @awesome-cordova-plugins/imap {'\n'}
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

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

```tsx
import { Imap } from '@awesome-cordova-plugins/imap/ngx';


constructor(private imap: Imap) { }

...


this.imap.connect({
 host: 'imap.gmail.com',
 user: 'my_email@gmail.com',
 password: 'my-pass'
})
  .then((res: Connection) => console.log(res))
  .catch((error) => console.error(error));



 this.imap.disconnect()
  .then((res: boolean) => console.log(res))
  .catch((error: any) => console.error(error));



this.imap.isConnected()
  .then((res: boolean) => console.log(res))
  .catch((error: any) => console.error(error));

 Note: Connected to an IMAP service is REQUIRED to be able to get data from the below functions.


  this.imap.listMailFolders()
  .then((res: boolean) => console.log(res))
  .catch((error: any) => console.error(error));


  this.imap.getMessageCountByFolderName('INBOX')
  .then((res: number) => {
  // Returns the count of the messages in the folder as a result
   console.log(res)
  })
  .catch((error: any) => {
    console.error(error)
  });



  this.imap.searchMessagesByDatePeriod('INBOX', 1601503200000, Comparison.GE)
  .then((res: number[]) => {
  // Returns array with messages' consecutive numbers
  // ex. [1207, 1208, 1209]
   console.log(res)
  })
  .catch((error: any) => {
    console.error(error)
  });


  this.imap.listMessagesHeadersByConsecutiveNumber('INBOX', 1200, 1280)
  .then((res: Message[]) => {
  //  Returns array with messages' headers data
   console.log(res)
  })
  .catch((error: any) => {
    console.error(error)
  });


  this.imap.listMessagesHeadersByDate('INBOX', 1601503200000, Comparison.GE)
  .then((res: Message[]) => {
  // Returns array with messages' headers data
   console.log(res)
  })
  .catch((error: any) => {
    console.error(error)
  });


  this.imap.getFullMessageData('INBOX', 1205)
  .then((res: Message) => {
  // Returns "Message" object with the full message data including attachments.
   console.log(res)
  })
  .catch((error: any) => {
    console.error(error)
  });


  this.imap.copyToFolder('INBOX', 'Spam', [1204, 1205, 1206, 1207])
  .then((res: boolean) => {
  // Returns "true" if the process is successful, else returns "false".
   console.log(res)
  })
  .catch((error: any) => {
    console.error(error)
  });


  * Sets a flag on a message
  * "setFlag()" can be used for deleting messages setting the Delete flag to "FlagEnum.DELETED"
  this.imap.setFlag('INBOX', [1206, 1205, 1204], FlagEnum.SEEN, true)
  .then((res: ModificationResult) => {

   // res.status - return true or false based on the deletion success

  //res.modifiedMessages - for ex.[1206, 1205, 1204];

  })
  .catch((error: any) => {
    console.error(error)
  });

```
