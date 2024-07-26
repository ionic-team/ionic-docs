---
sidebar_label: 'Speech Recognition'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Speech Recognition

This plugin does speech recognition using cloud services

<p>
  <a href="https://github.com/pbakondy/cordova-plugin-speechrecognition" target="_blank" rel="noopener" className="git-link">github.com/pbakondy/cordova-plugin-speechrecognition</a>
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
      $ npm install cordova-plugin-speechrecognition {'\n'}$ npm install @awesome-cordova-plugins/speech-recognition{' '}
      {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-speechrecognition {'\n'}$ npm install
      @awesome-cordova-plugins/speech-recognition {'\n'}
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

```tsx
import { SpeechRecognition } from '@awesome-cordova-plugins/speech-recognition/ngx';

constructor(private speechRecognition: SpeechRecognition) { }

...



// Check feature available
this.speechRecognition.isRecognitionAvailable()
  .then((available: boolean) => console.log(available))

// Start the recognition process
this.speechRecognition.startListening(options)
  .subscribe(
    (matches: string[]) => console.log(matches),
    (onerror) => console.log('error:', onerror)
  )

// Stop the recognition process (iOS only)
this.speechRecognition.stopListening()

// Get the list of supported languages
this.speechRecognition.getSupportedLanguages()
  .then(
    (languages: string[]) => console.log(languages),
    (error) => console.log(error)
  )

// Check permission
this.speechRecognition.hasPermission()
  .then((hasPermission: boolean) => console.log(hasPermission))

// Request permissions
this.speechRecognition.requestPermission()
  .then(
    () => console.log('Granted'),
    () => console.log('Denied')
  )

```
