---
sidebar_label: 'Deeplinks'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Deeplinks

This plugin handles deeplinks on iOS and Android for both custom URL scheme links
and Universal App Links.

Please read the [ionic plugin deeplinks docs](https://github.com/ionic-team/ionic-plugin-deeplinks) for iOS and Android integration.
You must add `universal-links` to your `config.xml` and set up Apple App Site Association (AASA) for iOS and Asset Links for Android.

<p>
  <a href="https://github.com/ionic-team/ionic-plugin-deeplinks" target="_blank" rel="noopener" className="git-link">github.com/ionic-team/ionic-plugin-deeplinks</a>
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
      $ npm install ionic-plugin-deeplinks {'\n'}$ npm install @awesome-cordova-plugins/deeplinks {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add ionic-plugin-deeplinks {'\n'}$ npm install @awesome-cordova-plugins/deeplinks {'\n'}
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
- Browser
- iOS

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

```tsx
import { Deeplinks } from '@awesome-cordova-plugins/deeplinks/ngx';

constructor(private deeplinks: Deeplinks) { }

this.deeplinks.route({
     '/about-us': AboutPage,
     '/universal-links-test': AboutPage,
     '/products/:productId': ProductPage
   }).subscribe(match => {
     // match.$route - the route we matched, which is the matched entry from the arguments to route()
     // match.$args - the args passed in the link
     // match.$link - the full link data
     console.log('Successfully matched route', match);
   }, nomatch => {
     // nomatch.$link - the full link data
     console.error('Got a deeplink that didn\'t match', nomatch);
   });
```

Alternatively, if you're using Ionic, there's a convenience method that takes a reference to a `NavController` and handles
the actual navigation for you:

```tsx
this.deeplinks
  .routeWithNavController(this.navController, {
    '/about-us': AboutPage,
    '/products/:productId': ProductPage,
  })
  .subscribe(
    (match) => {
      // match.$route - the route we matched, which is the matched entry from the arguments to route()
      // match.$args - the args passed in the link
      // match.$link - the full link data
      console.log('Successfully matched route', match);
    },
    (nomatch) => {
      // nomatch.$link - the full link data
      console.error("Got a deeplink that didn't match", nomatch);
    }
  );
```

See the [Ionic Deeplinks Demo](https://github.com/ionic-team/ionic2-deeplinks-demo/blob/master/app/app.ts) for an example of how to
retrieve the `NavController` reference at runtime.
