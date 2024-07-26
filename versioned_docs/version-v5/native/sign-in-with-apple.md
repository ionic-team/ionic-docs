---
sidebar_label: 'Sign In With Apple'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Sign In With Apple

Sign in with Apple makes it easy for users to sign in to your apps and websites using their Apple ID.
Instead of filling out forms, verifying email addresses, and choosing new passwords,
they can use Sign in with Apple to set up an account and start using your app right away.
All accounts are protected with two-factor authentication for superior security,
and Apple will not track users’ activity in your app or website.
_Source:_ https://developer.apple.com/sign-in-with-apple/

<p>
  <a href="https://github.com/twogate/cordova-plugin-sign-in-with-apple" target="_blank" rel="noopener" className="git-link">github.com/twogate/cordova-plugin-sign-in-with-apple</a>
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
      $ npm install cordova-plugin-sign-in-with-apple {'\n'}$ npm install @awesome-cordova-plugins/sign-in-with-apple{' '}
      {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-sign-in-with-apple {'\n'}$ npm install
      @awesome-cordova-plugins/sign-in-with-apple {'\n'}
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
import { SignInWithApple, AppleSignInResponse, AppleSignInErrorResponse, ASAuthorizationAppleIDRequest } from '@awesome-cordova-plugins/sign-in-with-apple/ngx';


constructor(private signInWithApple: SignInWithApple) { }

...


  this.signInWithApple.signin({
    requestedScopes: [
      ASAuthorizationAppleIDRequest.ASAuthorizationScopeFullName,
      ASAuthorizationAppleIDRequest.ASAuthorizationScopeEmail
    ]
  })
  .then((res: AppleSignInResponse) => {
    // https://developer.apple.com/documentation/signinwithapplerestapi/verifying_a_user
    alert('Send token to apple for verification: ' + res.identityToken);
    console.log(res);
  })
  .catch((error: AppleSignInErrorResponse) => {
    alert(error.code + ' ' + error.localizedDescription);
    console.error(error);
  });

```
