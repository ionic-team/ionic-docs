---
sidebar_label: 'AllInOneSDK'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# AllInOneSDK

Paytm All-in-One SDK plugin for Cordova/Ionic Applications
Paytm All-in-One SDK provides a swift, secure and seamless payment experience to your users by invoking the Paytm app (if installed on your user’s smartphone) to complete payment for your order.
Paytm All-in-One SDK enables payment acceptance via Paytm wallet, Paytm Payments Bank, saved Debit/Credit cards, Net Banking, BHIM UPI and EMI as available in your customer’s Paytm account. If Paytm app is not installed on a customer's device, the transaction will be processed via web view within the All-in-One SDK.
For more information about Paytm All-in-One SDK, please visit https://developer.paytm.com/docs/all-in-one-sdk/hybrid-apps/cordova/

<p>
  <a
    href="https://github.com/paytm/paytm-allinonesdk-ionic-cordova.git"
    target="_blank"
    rel="noopener"
    className="git-link"
  >
    <svg viewBox="0 0 512 512">
      <path d="M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"></path>
    </svg>{' '}
    https://github.com/paytm/paytm-allinonesdk-ionic-cordova.git
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
      $ npm install cordova-paytm-allinonesdk {'\n'}$ npm install @awesome-cordova-plugins/all-in-one-sdk {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-paytm-allinonesdk {'\n'}$ npm install @awesome-cordova-plugins/all-in-one-sdk {'\n'}
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
- iOS

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

```tsx
import { AllInOneSDK } from '@awesome-cordova-plugins/all-in-one-sdk/ngx';


constructor(private allInOneSDK: AllInOneSDK) { }

...

For below parameters see [documentation](https://developer.paytm.com/docs/all-in-one-sdk/hybrid-apps/cordova/)
let paymentIntent = { mid : merchantID, orderId: orderId, txnToken: transactionToken, amount: amount, isStaging: isStaging, callbackUrl:callBackURL,  restrictAppInvoke:restrictAppInvoke  }

this.allInOneSDK.startTransaction(paymentIntent)
  .then((res: any) => console.log(res))
  .catch((error: any) => console.error(error));

```

For iOS:
After adding the plugin, open the iOS project, you can find the same at &lt;projectName>/platforms/ios.
In case merchant don’t have callback URL, Add an entry into Info.plist LSApplicationQueriesSchemes(Array) Item 0 (String)-> paytm
Add a URL Scheme “paytm”+”MID”
