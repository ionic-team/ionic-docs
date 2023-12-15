---
sidebar_label: 'Apple Wallet'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Apple Wallet

A Cordova plugin that enables users from Add Payment Cards to their Apple Wallet.

<p>
  <a href="https://github.com/tomavic/cordova-apple-wallet" target="_blank" rel="noopener" className="git-link">/github.com/tomavic/cordova-apple-wallet</a>
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
      $ npm install cordova-apple-wallet {'\n'}$ npm install @awesome-cordova-plugins/apple-wallet {'\n'}$ ionic cap
      sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-apple-wallet {'\n'}$ npm install @awesome-cordova-plugins/apple-wallet {'\n'}
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
import { AppleWallet } from '@awesome-cordova-plugins/apple-wallet/ngx';


constructor(private appleWallet: AppleWallet) { }


...


// Simple call to determine if the current device supports Apple Pay and has a supported card installed.
this.appleWallet.isAvailable()
 .then((res: boolean) => {
   // Expect res to be boolean
  })
 .catch((err) => {
   // Catch {{err}} here
 });

...


// Simple call to check Card Eligibility
this.appleWallet.checkCardEligibility(primaryAccountIdentifier: string)
 .then((res: boolean) => {
   // Expect res to be boolean
  })
 .catch((err) => {
   // Catch {{err}} here
 });


...


// Simple call to checkCardEligibilityBySuffix
this.appleWallet.checkCardEligibilityBySuffix(cardSuffix: string)
 .then((res: boolean) => {
   // Expect res to be boolean
  })
 .catch((err) => {
   // Catch {{err}} here
 });


...

// Simple call to check out if there is any paired Watches so that you can toggle visibility of 'Add to Watch' button
this.appleWallet.checkPairedDevices()
 .then((res: WatchExistData) => {
   // object contains boolean flags showing paired devices
  })
 .catch((err) => {
   // Catch {{err}} here
 });


...



// Simple call to check paired devices with a card by its suffix
this.appleWallet.checkPairedDevicesBySuffix(cardSuffix: string)
 .then((res: PairedDevicesFlags) => {
   // object contains boolean values that ensure that card is already exists in wallet or paired-watch
  })
 .catch((err) => {
   // Catch {{err}} here
 });


...


// Simple call with the configuration data needed to instantiate a new PKAddPaymentPassViewController object.
// This method provides the data needed to create a request to add your payment pass (credit/debit card). After a successful callback, pass the certificate chain to your issuer server-side using our callback delegate method `AppleWallet.completeAddPaymentPass`. The issuer server-side should returns an encrypted JSON payload containing the encrypted card data, which is required to be get the final response

this.appleWallet.startAddPaymentPass(data: cardData)
 .then((res: SignatureCertificatesData) => {
   // User proceed and successfully asked to add card to his wallet
   // Use the callback response JSON payload to complete addition process
  })
 .catch((err) => {
   // Catch {{err}} here
 });


...


this.appleWallet.completeAddPaymentPass(data: encryptedCardData)
 .then((res: string) => {
   // Expect res to be string either 'success' or 'error'
  })
 .catch((err) => {
   // Catch {{err}} here
   // Error and can not add the card, or something wrong happend
   // PKAddPaymentPassViewController will be dismissed
 });

```
