---
title: Security
---

<head>
  <title>Security for Angular, React, and Vue Apps - Ionic Framework</title>
  <meta
    name="description"
    content="View Ionic's security info for sanitizing user input, ejecting from the built-in sanitizer, and more. Learn about app security using Angular, React, and Vue."
  />
</head>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Sanitizing User Input

For components such as `ion-alert` developers can allow for custom or user-provided content. This content can be plain text or HTML and should be considered untrusted. As with any untrusted input, it is important to sanitize it before doing anything else with it. In particular, using things like `innerHTML` without sanitization provides an attack vector for bad actors to input malicious content and potentially launch a [Cross Site Scripting attack (XSS)](https://en.wikipedia.org/wiki/Cross-site_scripting).

Ionic comes built in with a basic sanitization implementation for the components it provides. However, it is not a comprehensive solution. It is up to the developer to make sure all data that is passed is sanitized. Different frameworks have different solutions for sanitizing user input, so developers should familiarize themselves with what their specific framework offers.

For developers who are not using a framework, or for developers whose framework does not provide the sanitization methods they need, we recommend using [sanitize-html](https://www.npmjs.com/package/sanitize-html). This package provides a simple HTML sanitizer that allows the developer to specify the exact tags and attributes that they want to allow in their application.

### Angular

Angular comes built in with the `DomSanitizer` class. This helps prevent XSS issues by ensuring that values are safe to be used in the DOM. By default, Angular will mark any values it deems unsafe. For example, the following link would be marked as unsafe by Angular because it would attempt to execute some JavaScript.

```tsx
public myUrl: string = 'javascript:alert("oh no!")';

...

<a [href]="myUrl">Click Me!</a>
```

To learn more about the built-in protections that Angular provides, see the [Angular Security Guide](https://angular.io/guide/security).

### React

React DOM escapes values embedded in JSX before rendering them by converting them to strings. For example, the following would be safe as `name` is converted to a string before being rendered:

```jsx
const name = values.name;
const element = <h1>Hello, {name}!</h1>;
```

However, this does not stop someone from injecting JavaScript into places such as the `href` attribute of an anchor element. The following is unsafe and can potentially allow an XSS attack to occur:

```jsx
const userInput = 'javascript:alert("Oh no!")';
const element = <a href={userInput}>Click Me!</a>;
```

If the developer needs to achieve more comprehensive sanitization, they can use the [sanitize-html](https://www.npmjs.com/package/sanitize-html) package.

### Vue

Vue does not provide any type of sanitizing methods built in. It is recommended that developers use a package such as [sanitize-html](https://www.npmjs.com/package/sanitize-html).

To learn more about the security recommendations for binding to directives such as `v-html`, see the [Vue Syntax Guide](https://vuejs.org/v2/guide/syntax.html#Raw-HTML).

## Enabling Custom HTML Parsing via `innerHTML`

`ion-alert`, `ion-infinite-scroll-content`, `ion-loading`, `ion-refresher-content`, and `ion-toast` can accept custom HTML as strings for certain properties. These strings are added to the DOM using `innerHTML` and must be properly sanitized by the developer. This behavior is disabled by default which means values passed to the affected components will always be interpreted as plaintext. Developers can enable this custom HTML behavior by setting `innerHTMLTemplatesEnabled: true` in the [IonicConfig](../developing/config#ionicconfig).

## Ejecting from the built-in sanitizer

For developers who wish to add complex HTML to components such as `ion-toast`, they will need to eject from the sanitizer that is built into Ionic Framework. Developers can either disable the sanitizer across their entire app or bypass it on a case-by-case basis.

:::note
Bypassing sanitization functionality can make your application vulnerable to <a href="https://en.wikipedia.org/wiki/Cross-site_scripting" target="_blank" rel="noreferrer">XSS attacks</a>. Please exercise extreme caution when disabling the sanitizer.
:::

### Disabling the sanitizer via config

Ionic Framework provides an application config option called `sanitizerEnabled` that is set to `true` by default. Set this value to `false` to globally disable Ionic Framework's built in sanitizer. Please note that this does not disable any sanitizing functionality provided by other frameworks such as Angular.

### Bypassing the sanitizer on a case-by-case basis

Developers can also choose to eject from the sanitizer in certain scenarios. Ionic Framework provides the `IonicSafeString` class that allows developers to do just that.

:::note
In order to bypass the sanitizer and use unsanitized custom HTML in the relevant Ionic components, `innerHTMLTemplatesEnabled` must be set to `true` in the Ionic config.

`IonicSafeString` should not be used if `innerHTMLTemplatesEnabled` is set to `false`.

See [Enabling Custom HTML Parsing](#enabling-custom-html-parsing-via-innerhtml) for more information.
:::

#### Usage

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="angular"
  values={[
    { value: 'angular', label: 'Angular' },
    { value: 'angular-standalone', label: 'Angular (Standalone)' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'react', label: 'React' },
  ]
}>
<TabItem value="angular">

```tsx
import { IonicSafeString, ToastController } from '@ionic/angular';

...

constructor(private toastController: ToastController) {}

async presentToast() {
  const toast = await this.toastController.create({
      message: new IonicSafeString('<ion-button>Hello!</ion-button>'),
      duration: 2000
  });
  toast.present();
}

```
</TabItem>
<TabItem value="angular-standalone">

```tsx
import { IonicSafeString, ToastController } from '@ionic/angular/standalone';

...

constructor(private toastController: ToastController) {}

async presentToast() {
  const toast = await this.toastController.create({
      message: new IonicSafeString('<ion-button>Hello!</ion-button>'),
      duration: 2000
  });
  toast.present();
}

```
</TabItem>
<TabItem value="javascript">

```javascript
import { IonicSafeString } from '@ionic/core';

...

const async presentToast = () => {
  const toast = document.createElement('ion-toast');
  toast.message = new IonicSafeString('<ion-button>Hello!</ion-button>');
  toast.duration = 2000;

  document.body.appendChild(toast);
  return toast.present();
}

```
</TabItem>
<TabItem value="react">

```tsx
import React, { useState } from 'react';
import { Animation, IonButton, IonContent, IonicSafeString, IonToast } from '@ionic/react';

export const ToastExample: React.FC = () => {
  const [showToast, setShowToast] = useState(false);

  return (
    <IonContent>
      <IonButton onClick={() => setShowToast(true)} expand="block">Show Toast</IonButton>
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message={new IonicSafeString('<ion-button>Hello!</ion-button>')}
        duration={2000}
      />
    </IonContent>
  )
};
```
</TabItem>
</Tabs>
````

## Content Security Policies (CSP)

A [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) is a security mechanism that helps protect web applications against certain types of attacks, such as cross-site scripting (XSS) and data injection. It is implemented through an HTTP header that instructs the browser on which sources of content, such as scripts, stylesheets, and images, are allowed to be loaded and executed on a web page.

The main purpose of a CSP is to mitigate the risks associated with code injection attacks. By defining a policy, web developers can specify from which domains or sources the browser should allow the loading and execution of various types of content. This effectively limits the potential damage that can be caused by malicious scripts or unauthorized content.

### Enabling CSPs

Developers can assign a CSP to their application by setting a meta tag with the policy details and the expected nonce value on script and style tags.

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; script-src 'self' 'nonce-randomNonceGoesHere'; style-src 'self' 'nonce-randomNonceGoesHere';"
/>
```

### Ionic and CSP

Ionic Framework provides a function to help developers set the nonce value used when constructing the web component stylesheets. This function should be called before any Ionic components are loaded. This is required to pass the nonce value to the web components so that they can be used in a CSP environment.

```ts
import { setNonce } from '@ionic/core/loader';

setNonce('randomNonceGoesHere');
```

:::tip

In Angular this can be called in the `main.ts` file, before the application is bootstrapped.

:::

For more information on how to use CSPs with Stencil web components, see the [Stencil documentation](https://stenciljs.com/docs/csp-nonce).

### Angular

Starting in Angular 16, Angular provides two options for setting the nonce value.

1. Set the `ngCspNonce` attribute on the root application element as `<app ngCspNonce="randomNonceGoesHere"></app>`. Use this approach if you have access to server-side templating that can add the nonce both to the header and the `index.html` when constructing the response.
2. Provide the nonce using the [`CSP_NONCE`](https://angular.io/api/core/CSP_NONCE) injection token. Use this approach if you have access to the nonce at runtime and you want to be able to cache the `index.html`.

:::tip

If providing the `CSP_NONCE` injection token, set the provider in your `AppModule` for module projects or within the `bootstrapApplication` for standalone projects.

:::

For more information on how to use CSPs with Angular, see the [Angular documentation](https://angular.io/guide/security#content-security-policy).
