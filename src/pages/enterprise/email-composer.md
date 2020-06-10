---
title: Email Composer
template: enterprise-plugin
version: 0.9.2
minor: 0.9.X
---

The Email Composer plugin provides the ability to programmatically create and send emails from within an app.

<native-ent-install plugin-id="email-composer" variables=""></native-ent-install>

#### Using with AndroidX Projects (Android)

This plugin relies on the legacy Android Support libraries and will not work in projects using the newer AndroidX libraries without using the [jetifier](https://www.npmjs.com/package/jetifier) tool to patch them.

```bash
npm install jetifier
npx jetifier
```

To run it automatically when dependencies are installed, add `"postinstall": "jetifier"` in the `package.json`.

## Index

### Classes

* [EmailComposer](#emailcomposer)

### Interfaces

* [EmailComposerOptions](#emailcomposeroptions)

---

## Classes

<a id="emailcomposer"></a>

###  EmailComposer

*__usage__*:
 ```typescript
import { EmailComposer } from '@ionic-enterprise/email-composer/ngx';

constructor(private emailComposer: EmailComposer) { }

...

this.emailComposer.isAvailable().then((available: boolean) =>{
 if(available) {
   //Now we know we can send
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

*__interfaces__*: EmailComposerOptions

<a id="emailcomposer.addalias"></a>

###  addAlias

▸ **addAlias**(alias: *`string`*, packageName: *`string`*): `void`

Adds a new mail app alias.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| alias | `string` |  The alias name |
| packageName | `string` |  The package name |

**Returns:** `void`

___
<a id="emailcomposer.haspermission"></a>

###  hasPermission

▸ **hasPermission**(): `Promise`<`boolean`>

Checks if the app has a permission to access email accounts information

**Returns:** `Promise`<`boolean`>
returns a promise that resolves with a boolean that indicates if the permission was granted

___
<a id="emailcomposer.isavailable"></a>

###  isAvailable

▸ **isAvailable**(app?: *`string`*): `Promise`<`any`>

Verifies if sending emails is supported on the device.

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` app | `string` |

**Returns:** `Promise`<`any`>
Resolves if available, rejects if not available

___
<a id="emailcomposer.open"></a>

###  open

▸ **open**(options: *[EmailComposerOptions](#emailcomposeroptions)*, scope?: *`any`*): `Promise`<`any`>

Displays the email composer pre-filled with data.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| options | [EmailComposerOptions](#emailcomposeroptions) |  Email |
| `Optional` scope | `any` |

**Returns:** `Promise`<`any`>
Resolves promise when the EmailComposer has been opened

___
<a id="emailcomposer.requestpermission"></a>

###  requestPermission

▸ **requestPermission**(): `Promise`<`boolean`>

Request permission to access email accounts information

**Returns:** `Promise`<`boolean`>
returns a promise that resolves with a boolean that indicates if the permission was granted

___

___

## Interfaces

<a id="emailcomposeroptions"></a>

###  EmailComposerOptions

**EmailComposerOptions**: 

<a id="emailcomposeroptions.app"></a>

### `<Optional>` app

**● app**: *`string`*

App to send the email with

___
<a id="emailcomposeroptions.attachments"></a>

### `<Optional>` attachments

**● attachments**: *`string`[]*

File paths or base64 data streams

___
<a id="emailcomposeroptions.bcc"></a>

### `<Optional>` bcc

**● bcc**: *`string` \| `string`[]*

Email address(es) for BCC field

___
<a id="emailcomposeroptions.body"></a>

### `<Optional>` body

**● body**: *`string`*

Email body (for HTML, set isHtml to true)

___
<a id="emailcomposeroptions.cc"></a>

### `<Optional>` cc

**● cc**: *`string` \| `string`[]*

Email address(es) for CC field

___
<a id="emailcomposeroptions.ishtml"></a>

### `<Optional>` isHtml

**● isHtml**: *`boolean`*

Indicates if the body is HTML or plain text

___
<a id="emailcomposeroptions.subject"></a>

### `<Optional>` subject

**● subject**: *`string`*

Subject of the email

___
<a id="emailcomposeroptions.to"></a>

### `<Optional>` to

**● to**: *`string` \| `string`[]*

Email address(es) for To field

___
<a id="emailcomposeroptions.type"></a>

### `<Optional>` type

**● type**: *`string`*

Content type of the email (Android only)

___

___

