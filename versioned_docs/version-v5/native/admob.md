---
sidebar_label: 'AdMob'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# AdMob

Most complete Admob plugin with support for [Tappx](http://www.tappx.com/?h=dec334d63287772de859bdb4e977fce6) ads.
Monetize your apps and games with AdMob ads, using latest Google AdMob SDK. With this plugin you can show AdMob ads easily!

**Supports:**

- Banner ads (top and bottom)
- Interstitial ads
- Rewarded ads
- [Tappx](http://www.tappx.com/?h=dec334d63287772de859bdb4e977fce6) ads

<p>
  <a href="https://github.com/appfeel/admob-google-cordova" target="_blank" rel="noopener" className="git-link">
    <svg viewBox="0 0 512 512">
      <path d="M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"></path>
    </svg>{' '}
    https://github.com/appfeel/admob-google-cordova
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
      $ npm install cordova-admob {'\n'}$ npm install @awesome-cordova-plugins/admob {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-admob {'\n'}$ npm install @awesome-cordova-plugins/admob {'\n'}
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
- Browser

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

**Note:** No ads will be served on apps with package name `io.ionic.starter`. This is the default package name for new `ionic` apps. Make sure to rename the package name so ads can be displayed.

```tsx
import { Admob, AdmobOptions } from '@awesome-cordova-plugins/admob';


constructor(private admob: Admob) {
    // Admob options config
    const admobOptions: AdmobOptions = {
      bannerAdId: 'XXX-XXXX-XXXX',
      interstitialAdId: 'XXX-XXXX-XXXX',
      rewardedAdId: 'XXX-XXXX-XXXX',
      isTesting: true,
      autoShowBanner: false,
      autoShowInterstitial: false,
      autoShowRewarded: false,
      adSize: this.admob.AD_SIZE.BANNER
    };

    // Set admob options
    this.admob.setOptions(admobOptions)
      .then(() => console.log('Admob options have been successfully set'))
      .catch(err => console.error('Error setting admob options:', err));
}



// (Optionally) Load banner ad, in order to have it ready to show
this.admob.createBannerView()
  .then(() => console.log('Banner ad loaded'))
  .catch(err => console.error('Error loading banner ad:', err));


// Show banner ad (createBannerView must be called before and onAdLoaded() event raised)
this.admob.onAdLoaded().subscribe((ad) => {
  if (ad.adType === this.admob.AD_TYPE.BANNER) {
    this.admob.showBannerAd()
      .then(() => console.log('Banner ad shown'))
      .catch(err => console.error('Error showing banner ad:', err));
  }
});


// Hide banner ad, but do not destroy it, so it can be shown later on
// See destroyBannerView in order to hide and destroy banner ad
this.admob.showBannerAd(false)
  .then(() => console.log('Banner ad hidden'))
  .catch(err => console.error('Error hiding banner ad:', err));



// Request an interstitial ad, in order to be shown later on
// It is possible to autoshow it via options parameter, see docs
this.admob.requestInterstitialAd()
  .then(() => console.log('Interstitial ad loaded'))
  .catch(err => console.error('Error loading interstitial ad:', err));


// Show an interstitial ad (requestInterstitialAd must be called before)
this.admob.onAdLoaded().subscribe((ad) => {
  if (ad.adType === this.admob.AD_TYPE.INTERSTITIAL) {
    this.admob.showInterstitialAd()
      .then(() => console.log('Interstitial ad shown'))
      .catch(err => console.error('Error showing interstitial ad:', err));
  }
});


// Request a rewarded ad
this.admob.requestRewardedAd()
  .then(() => console.log('Rewarded ad loaded'))
  .catch(err => console.error('Error loading rewarded ad:', err));


// Show rewarded ad (requestRewardedAd must be called before)
this.admob.onAdLoaded().subscribe((ad) => {
  if (ad.adType === this.admob.AD_TYPE.REWARDED) {
    this.admob.showRewardedAd()
      .then(() => console.log('Rewarded ad shown'))
      .catch(err => console.error('Error showing rewarded ad:', err));
  }
});


// Hide and destroy banner or interstitial ad
this.admob.destroyBannerView()
  .then(() => console.log('Banner or interstitial ad destroyed'))
  .catch(err => console.error('Error destroying banner or interstitial ad:', err));



// On Ad loaded event
this.admob.onAdLoaded().subscribe((ad) => {
  if (ad.adType === this.admob.AD_TYPE.BANNER) {
    console.log('Banner ad is loaded');
    this.admob.showBannerAd();
  } else if (ad.adType === this.admob.AD_TYPE.INTERSTITIAL) {
    console.log('Interstitial ad is loaded');
    this.admob.showInterstitialAd();
  } else if (ad.adType === this.admob.AD_TYPE.REWARDED) {
    console.log('Rewarded ad is loaded');
    this.admob.showRewardedAd();
  }
});



// On ad failed to load
this.admob.onAdFailedToLoad().subscribe(err => console.log('Error loading ad:', err));



// On interstitial ad opened
this.admob.onAdOpened().subscribe(() => console.log('Interstitial ad opened'));



// On interstitial ad closed
this.admob.onAdClosed().subscribe(() => console.log('Interstitial ad closed'));



// On ad clicked and left application
this.admob.onAdLeftApplication().subscribe(() => console.log('Ad lefted application'));



// On user ad rewarded
this.admob.onRewardedAd().subscribe(() => console.log('The user has been rewarded'));



// On rewarded ad video started
this.admob.onRewardedAdVideoStarted().subscribe(() => console.log('Rewarded ad vieo started'));



// On rewarded ad video completed
this.admob.onRewardedAdVideoCompleted().subscribe(() => console.log('Rewarded ad video completed'));

```
