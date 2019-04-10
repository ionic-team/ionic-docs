---
title: Apple Wallet
template: enterprise-plugin
version: 0.1.0
minor: 0.1.X
---

Ionic Enterprise Apple Wallet
=============================

This plugin provides support for adding credit/debit cards to Apple Wallet. It also can check if the credit/debit card exists in Wallet.

**Important Note**

> Adding payment passes requires a special entitlement issued by Apple. Your app must include this entitlement before you can use this class. For more information on requesting this entitlement, see the Card Issuers section at developer.apple.com/apple-pay/.

Installation
------------

First make sure you're using the Ionic Enterprise version of the Cordova CLI. Then you can add the plugin to your project.

```shell
npm uninstall -g cordova
npm install -g @ionic-enterprise/cordova
ionic enterprise register // follow prompts to enter you product key
ionic cordova plugin add @ionic-enterprise/apple-wallet
```

Usage
-----

You can import types from `@ionic-enterprise/apple-wallet/types` and `AppleWallet` will be available on the window.

```typescript
...
import { Platform } from '@ionic/angular';
import { Window } from 'plugins/@ionic-enterprise/apple-wallet/types';
...

// declare the global
declare const AppleWallet: Window['AppleWallet'];

class MyService {
  constructor(private platform: Platform) { }

  async getPlugin(): Promise<Window['AppleWallet']> {
    await this.platform.ready();
    return AppleWallet;
  }

  addCardToWallet(payload) {
    const wallet = await this.getPlugin();
    const pass = await wallet.addPaymentPass(payload);
  }
}
```

### Card Addition

Call with the configuration data needed to instantiate a new PKAddPaymentPassViewController object and complete the HTTP request to do the handshake with your server.

This method provides the data needed to create a request to add your payment pass (credit/debit card).

```typescript
    const card = {
      cardholderName: 'Test User',
      primaryAccountNumberSuffix: '1234',
      localizedDescription: 'Description of payment card',
      paymentNetwork: 'VISA'
    }
    const options = {
      headers: {
        'Authorization': 'Bearer xxxxxx',
        'Content-Type': 'application/json'
      },
      url: 'https://my.api.com/v1/cards',
      method: 'POST',
      // This is a hybrid template with the data you need prefilled
      // and the AppleWallet.CONSTANTS will be filled in during the handshake.
      body: {
        userId: 1,
        appleWalletData: {
          certificates: [
            AppleWallet.CERTIFICATE_0,
            AppleWallet.CERTIFICATE_1,
          ],
          nonce: AppleWallet.NONCE,
          nonceSignature: AppleWallet.NONCE_SIGNATURE
        },
      },
      card: card,
    };

    const passData = await AppleWallet.addPaymentPass(options);
```

## Index

### Interfaces

* [AddPassOptions](#addpassoptions)
* [AddPassResponse](#addpassresponse)
* [AppleWallet](#applewallet)
* [CardData](#carddata)
* [Headers](#headers)
* [Window](#window)

### Type aliases

* [ActivationState](#activationstate)

---

## Interfaces

<a id="addpassoptions"></a>

###  AddPassOptions

**AddPassOptions**: 

The options interface to pass to the [addPaymentPass](#applewallet.addpaymentpass) function.

<a id="addpassoptions.body"></a>

###  body

**● body**: *`any`*

A templated request body to send to your server. include any additional fields and use the constansts [CERTIFICATE\_0](#applewallet.certificate_0), [CERTIFICATE\_1](#applewallet.certificate_1), [NONCE](#applewallet.nonce), [NONCE\_SIGNATURE](#applewallet.nonce_signature)

*__usage__*:
 ```typescript
const body = {
  userId: 1,
  cardId: 'xxxxx',
  appleWalletData: {
    certs: [
      AppleWallet.CERTIFICATE_0,
      AppleWallet.CERTIFICATE_1
    ],
    nonce: AppleWallet.NONCE,
    nonceSignature: AppleWallet.NONCE_SIGNATURE,
  }
}
```

___
<a id="addpassoptions.card"></a>

###  card

**● card**: *[CardData](#carddata)*

The card data

___
<a id="addpassoptions.headers"></a>

###  headers

**● headers**: *[Headers](#headers)*

An object with the headers required for the server request.

___
<a id="addpassoptions.method"></a>

###  method

**● method**: *`string`*

The HTTP method to use ex. `POST`

___
<a id="addpassoptions.url"></a>

###  url

**● url**: *`string`*

The url to hit ex. `https://my.api.com/v1/add/applepay/card`

___

___
<a id="addpassresponse"></a>

###  AddPassResponse

**AddPassResponse**: 

The response from adding the pass with the pass data

<a id="addpassresponse.activationstate"></a>

###  activationState

**● activationState**: *[ActivationState](#activationstate)*

The activation state of the card

___
<a id="addpassresponse.deviceaccountidentifier"></a>

###  deviceAccountIdentifier

**● deviceAccountIdentifier**: *`string`*

The device account identifier.

___
<a id="addpassresponse.deviceaccountnumbersuffix"></a>

###  deviceAccountNumberSuffix

**● deviceAccountNumberSuffix**: *`string`*

The device account number suffix

___
<a id="addpassresponse.devicename"></a>

###  deviceName

**● deviceName**: *`string`*

The device name.

___
<a id="addpassresponse.primaryaccountidentifier"></a>

###  primaryAccountIdentifier

**● primaryAccountIdentifier**: *`string`*

The primary account identifier

___
<a id="addpassresponse.primaryaccountnumbersuffix"></a>

###  primaryAccountNumberSuffix

**● primaryAccountNumberSuffix**: *`string`*

The primary account number suffix

___

___
<a id="applewallet"></a>

###  AppleWallet

**AppleWallet**: 

<a id="applewallet.certificate_0"></a>

###  CERTIFICATE_0

**● CERTIFICATE_0**: *`string`*

Constant used in the body template that represents the first item in the certificates array returned by the PKAddPaymentPassViewController.

___
<a id="applewallet.certificate_1"></a>

###  CERTIFICATE_1

**● CERTIFICATE_1**: *`string`*

Constant used in the body template that represents the second item in the certificates array returned by the PKAddPaymentPassViewController.

___
<a id="applewallet.nonce"></a>

###  NONCE

**● NONCE**: *`string`*

Constant used in the body template that represents the nonce returned by the PKAddPaymentPassViewController.

___
<a id="applewallet.nonce_signature"></a>

###  NONCE_SIGNATURE

**● NONCE_SIGNATURE**: *`string`*

Constant used in the body template that represents the nonceSignature returned by the PKAddPaymentPassViewController.

___
<a id="applewallet.addpaymentpass"></a>

###  addPaymentPass

▸ **addPaymentPass**(options: *[AddPassOptions](#addpassoptions)*): `Promise`<[AddPassResponse](#addpassresponse)>

This function accepts both the card data and information required to make the http request to the server in order to use PKAddPaymentPassViewController object to add a payment pass to the apple wallet.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| options | [AddPassOptions](#addpassoptions) |  The [AddPassOptions](#addpassoptions) object to configure the PKAddPaymentPassViewController and setup the call to the server. |

**Returns:** `Promise`<[AddPassResponse](#addpassresponse)>
- An object with the pass information

___
<a id="applewallet.available"></a>

###  available

▸ **available**(): `Promise`<`boolean`>

A function to determine if the current device supports adding a payment pass

**Returns:** `Promise`<`boolean`>
whether or not a pay pass can be added

___
<a id="applewallet.availableprovider"></a>

###  availableProvider

▸ **availableProvider**(options: *`object`*): `Promise`<`boolean`>

A function to determine if the card has already been provisioned for the device.

**Parameters:**

**options: `object`**

An object with the primary account identifier for the card.

| Name | Type |
| ------ | ------ |
| primaryAccountIdentifier | `string` |

**Returns:** `Promise`<`boolean`>
whether or not a pay can be added, throws an error if the card is already added

___

___
<a id="carddata"></a>

###  CardData

**CardData**: 

<a id="carddata.cardholdername"></a>

### `<Optional>` cardholderName

**● cardholderName**: *`string`*

The cardholder name

___
<a id="carddata.localizeddescription"></a>

### `<Optional>` localizedDescription

**● localizedDescription**: *`string`*

A short description of the card.

___
<a id="carddata.paymentnetwork"></a>

### `<Optional>` paymentNetwork

**● paymentNetwork**: *`string`*

Filters the networks shown in the introduction view to this single network. ex.`VISA \| MASTERCARD`

___
<a id="carddata.primaryaccountidentifier"></a>

### `<Optional>` primaryAccountIdentifier

**● primaryAccountIdentifier**: *`string`*

Filters the device and attached devices that already have this card provisioned. No filter is applied if the parameter is omitted

___
<a id="carddata.primaryaccountsuffix"></a>

### `<Optional>` primaryAccountSuffix

**● primaryAccountSuffix**: *`string`*

Last 4/5 digits of PAN. The last four or five digits of the PAN. Presented to the user with dots prepended to indicate that it is a suffix.

___

___
<a id="headers"></a>

###  Headers

**Headers**: 

An object with the headers required for the server request.

*__usage__*:
 ```typescript
const headers = {
 'Authorization': 'Bearer xxxxx',
 'Content-Type': 'application/json',
 ...
}
```

___
<a id="window"></a>

###  Window

**Window**: 

<a id="window.applewallet"></a>

###  AppleWallet

**● AppleWallet**: *[AppleWallet](#applewallet)*

___

___

## Type aliases

<a id="activationstate"></a>

###  ActivationState

**Ƭ ActivationState**: *"activated" \| "activating" \| "suspended" \| "deactivated" \| "requires-activation" \| "unknown"*

___

