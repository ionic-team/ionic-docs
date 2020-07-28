---
title: Apple Payment Pass
template: enterprise-plugin
version: 1.0.2
minor: 1.0.X
otherVersions:
  - 1.0.X
---

Apple Payment Pass
==================

This plugin provides support for adding credit/debit cards to Apple Wallet. It also can check if the credit/debit card exists in Wallet.

**Important Note**

> Adding payment passes requires a special entitlement issued by Apple. Your app must include this entitlement before you can use this class. For more information on requesting this entitlement, see the Card Issuers section at developer.apple.com/apple-pay/.

Usage
-----

### Angular

```typescript
...
import { Platform } from '@ionic/angular';
import { ApplePaymentPass, RequestTemplate } from '@ionic-enterprise/apple-payment-pass/ngx';
...

class MyService {
  constructor(private platform: Platform, private paypass: ApplePaymentPass) { }

  addCardToWallet() {
    try {
      const response = await this.paypass.addPaymentPass({
        userId: 1,
        appleWalletData: {
          certificates: [
            RequestTemplate.CERTIFICATE_0,
            RequestTemplate.CERTIFICATE_1,
          ],
          nonce: RequestTemplate.NONCE,
          nonceSignature: RequestTemplate.NONCE_SIGNATURE
      },
    });
  } catch (e) {
    if (e.type === "ServerError") {
      console.error(`Server Responded with status: ${e.statusCode} and body ${e.body}`);
    }
  }
}
```

### ES2015+/Typescript

```typescript
...
import { ApplePaymentPass, RequestTemplate } from '@ionic-enterprise/apple-payment-pass';
...

try {
  const response = await ApplePaymentPass.addPaymentPass({
    userId: 1,
    appleWalletData: {
      certificates: [
        RequestTemplate.CERTIFICATE_0,
        RequestTemplate.CERTIFICATE_1,
      ],
      nonce: RequestTemplate.NONCE,
      nonceSignature: RequestTemplate.NONCE_SIGNATURE
    },
  });
} catch (e) {
  if (e.type === "ServerError") {
    console.error(`Server Responded with status: ${e.statusCode} and body ${e.body}`);
  }
}
```

### Vanilla JS

```javascript
ApplePaymentPass.addPaymentPass({
  userId: 1,
  appleWalletData: {
    certificates: [
      ApplePaymentPass.template.CERTIFICATE_0,
      ApplePaymentPass.template.CERTIFICATE_1,
    ],
    nonce: ApplePaymentPass.template.NONCE,
    nonceSignature: ApplePaymentPass.template.NONCE_SIGNATURE
  },
}).then( (cardStatus) => { console.log("Success Adding Card: ", cardStatus); })
  .catch( (e) => {
    if (e.type === "ServerError") {
      console.error(`Server Responded with status: ${e.statusCode} and body ${e.body}`);
    }
  });
```

### Card Addition

Call with the configuration data needed to instantiate a new PKAddPaymentPassViewController object and complete the HTTP request to do the handshake with your server.

This method provides the data needed to create a request to add your payment pass (credit/debit card).

```typescript
    const card = {
      cardholderName: 'Test User',
      primaryAccountSuffix: '1234',
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
      // and the ApplePaymentPass.CONSTANTS will be filled in during the handshake.
      body: {
        userId: 1,
        appleWalletData: {
          certificates: [
            ApplePaymentPass.CERTIFICATE_0,
            ApplePaymentPass.CERTIFICATE_1,
          ],
          nonce: ApplePaymentPass.NONCE,
          nonceSignature: ApplePaymentPass.NONCE_SIGNATURE
        },
      },
      card: card,
    };

    const passData = await ApplePaymentPass.addPaymentPass(options);
```

## Index

### Enumerations

* [RequestTemplate](#requesttemplate)

### Classes

* [ApplePaymentPass](#applepaymentpass)

### Interfaces

* [AddPassOptions](#addpassoptions)
* [AddPassResponse](#addpassresponse)
* [CardData](#carddata)
* [DelegateError](#delegateerror)
* [Headers](#headers)
* [ServerError](#servererror)

### Type aliases

* [ActivationState](#activationstate)

---

## Enumerations

<a id="requesttemplate"></a>

### RequestTemplate

**RequestTemplate**:

Constants used to define the shape of the body used during the request to the server

<a id="requesttemplate.certificate_0"></a>

### CERTIFICATE_0

**CERTIFICATE_0**:  = "$certificates.0"

Constant used in the body template that represents the first item in the certificates array returned by the PKAddPaymentPassViewController.

___

<a id="requesttemplate.certificate_1"></a>

### CERTIFICATE_1

**CERTIFICATE_1**:  = "$certificates.1"

Constant used in the body template that represents the second item in the certificates array returned by the PKAddPaymentPassViewController.

___

<a id="requesttemplate.nonce"></a>

### NONCE

**NONCE**:  = "$nonceString"

Constant used in the body template that represents the nonce returned by the PKAddPaymentPassViewController.

___

<a id="requesttemplate.nonce_signature"></a>

### NONCE_SIGNATURE

**NONCE_SIGNATURE**:  = "$nonceSignature"

Constant used in the body template that represents the nonceSignature returned by the PKAddPaymentPassViewController.

___

___

## Classes

<a id="applepaymentpass"></a>

### ApplePaymentPass

**ApplePaymentPass**:

This plugin provides support for adding credit/debit cards to Apple Wallet. It also can check if the credit/debit card exists in Wallet.

<a id="applepaymentpass.template"></a>

### template

**● template**: *[RequestTemplate](#requesttemplate)* =  RequestTemplate

___

<a id="applepaymentpass.addpaymentpass"></a>

### addPaymentPass

▸ **addPaymentPass**(options: *[AddPassOptions](#addpassoptions)*): `Promise`<[AddPassResponse](#addpassresponse)>

This function accepts both the card data and information required to make the http request to the server in order to use PKAddPaymentPassViewController object to add a payment pass to the apple wallet.

*__throws__*: *   [ServerError](#servererror) [DelegateError](#delegateerror)

**Parameters:**

| Name    | Type                              | Description                                                                                                                    |
| ------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| options | [AddPassOptions](#addpassoptions) | The [AddPassOptions](#addpassoptions) object to configure the PKAddPaymentPassViewController and setup the call to the server. |

**Returns:** `Promise`<[AddPassResponse](#addpassresponse)>
- An object with the pass information

___

<a id="applepaymentpass.available"></a>

### available

▸ **available**(): `Promise`<`boolean`>

A function to determine if the current device supports adding a payment pass

**Returns:** `Promise`<`boolean`> whether or not a pay pass can be added

___

<a id="applepaymentpass.availableprovider"></a>

### availableProvider

▸ **availableProvider**(options: *`object`*): `Promise`<`boolean`>

A function to determine if the card has already been provisioned for the device.

**Parameters:**

**options: `object`**

An object with the primary account identifier for the card.

| Name                     | Type     |
| ------------------------ | -------- |
| primaryAccountIdentifier | `string` |

**Returns:** `Promise`<`boolean`> whether or not a pay can be added, throws an error if the card is already added

___

___

## Interfaces

<a id="addpassoptions"></a>

### AddPassOptions

**AddPassOptions**:

The options interface to pass to the [addPaymentPass](#applepaymentpass.addpaymentpass) function.

<a id="addpassoptions.body"></a>

### body

**● body**: *`any`*

A templated request body to send to your server. include any additional fields and use the constansts [CERTIFICATE\_0](#requesttemplate.certificate_0), [CERTIFICATE\_1](#requesttemplate.certificate_1), [NONCE](#requesttemplate.nonce), [NONCE\_SIGNATURE](#requesttemplate.nonce_signature)

*__usage__*:
 ```typescript
const body = {
  userId: 1,
  cardId: 'xxxxx',
  appleWalletData: {
    certs: [
      RequestTemplate.CERTIFICATE_0,
      RequestTemplate.CERTIFICATE_1
    ],
    nonce: RequestTemplate.NONCE,
    nonceSignature: RequestTemplate.NONCE_SIGNATURE,
  }
}
```

___

<a id="addpassoptions.card"></a>

### card

**● card**: *[CardData](#carddata)*

The card data

___

<a id="addpassoptions.headers"></a>

### headers

**● headers**: *[Headers](#headers)*

An object with the headers required for the server request.

___

<a id="addpassoptions.method"></a>

### method

**● method**: *`string`*

The HTTP method to use ex. `POST`

___

<a id="addpassoptions.url"></a>

### url

**● url**: *`string`*

The url to hit ex. `https://my.api.com/v1/add/applepay/card`

___

___

<a id="addpassresponse"></a>

### AddPassResponse

**AddPassResponse**:

The response from adding the pass with the pass data

<a id="addpassresponse.activationstate"></a>

### activationState

**● activationState**: *[ActivationState](#activationstate)*

The activation state of the card

___

<a id="addpassresponse.deviceaccountidentifier"></a>

### deviceAccountIdentifier

**● deviceAccountIdentifier**: *`string`*

The device account identifier.

___

<a id="addpassresponse.deviceaccountnumbersuffix"></a>

### deviceAccountNumberSuffix

**● deviceAccountNumberSuffix**: *`string`*

The device account number suffix

___

<a id="addpassresponse.devicename"></a>

### deviceName

**● deviceName**: *`string`*

The device name.

___

<a id="addpassresponse.primaryaccountidentifier"></a>

### primaryAccountIdentifier

**● primaryAccountIdentifier**: *`string`*

The primary account identifier

___

<a id="addpassresponse.primaryaccountnumbersuffix"></a>

### primaryAccountNumberSuffix

**● primaryAccountNumberSuffix**: *`string`*

The primary account number suffix

___

___

<a id="carddata"></a>

### CardData

**CardData**:

The card data for the PKAddPaymentPassViewController

<a id="carddata.cardholdername"></a>

### `<Optional>` cardholderName

**● cardholderName**: *`undefined` \| `string`*

The cardholder name

___

<a id="carddata.localizeddescription"></a>

### `<Optional>` localizedDescription

**● localizedDescription**: *`undefined` \| `string`*

A short description of the card.

___

<a id="carddata.paymentnetwork"></a>

### `<Optional>` paymentNetwork

**● paymentNetwork**: *`undefined` \| `string`*

Filters the networks shown in the introduction view to this single network. ex.`VISA \| MASTERCARD`

___

<a id="carddata.primaryaccountidentifier"></a>

### `<Optional>` primaryAccountIdentifier

**● primaryAccountIdentifier**: *`undefined` \| `string`*

Filters the device and attached devices that already have this card provisioned. No filter is applied if the parameter is omitted

___

<a id="carddata.primaryaccountsuffix"></a>

### `<Optional>` primaryAccountSuffix

**● primaryAccountSuffix**: *`undefined` \| `string`*

Last 4/5 digits of PAN. The last four or five digits of the PAN. Presented to the user with dots prepended to indicate that it is a suffix.

___

___

<a id="delegateerror"></a>

### DelegateError

**DelegateError**:

Error thrown by [addPaymentPass](#applepaymentpass.addpaymentpass) when the PKAddPaymentPassViewController fails to add the card to the wallet

<a id="delegateerror.body"></a>

### body

**● body**: *`object`*

The error message

#### Type declaration

 message: `string`

___

<a id="delegateerror.statuscode"></a>

### statusCode

**● statusCode**: *`number`*

The error code

___

<a id="delegateerror.type"></a>

### type

**● type**: *"DelegateError"*

The type of the error

___

___

<a id="headers"></a>

### Headers

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

<a id="servererror"></a>

### ServerError

**ServerError**:

Error thrown by [addPaymentPass](#applepaymentpass.addpaymentpass) when server responds with a HTTP status code >= 400

<a id="servererror.body"></a>

### body

**● body**: *`any`*

The body return by the server

___

<a id="servererror.statuscode"></a>

### statusCode

**● statusCode**: *`number`*

The status code returned from the server

___

<a id="servererror.type"></a>

### type

**● type**: *"ServerError"*

The type of the error

___

___

## Type aliases

<a id="activationstate"></a>

### ActivationState

**Ƭ ActivationState**: *"activated" \| "activating" \| "suspended" \| "deactivated" \| "requires-activation" \| "unknown"*

The activation state of the provisioned card

___

## Change Log



### \[1.0.2\] (2019-04-27)


### Bug Fixes

* Fixed issue where cordova plugin id was being incorrectly set by release script.



### \[1.0.0\] (2019-04-27)


### Bug Fixes

* **iOS:** Fix issues where nonce string could be incorrectly replaced and errors from server weren't properly handled


### Features

* Added typed imports for [Angular](#angular), [ES2015+/Typescript](#es2015-typescript), and [Vanilla JS](#vanilla-js) , closes [#es2015]


### BREAKING CHANGES

* Changed package name from `@ionic-enterprise/apple-wallet` to `@ionic-enterprise/apple-payment-pass` and the main class from `AppleWallet` to `ApplePaymentPass`. See updated [usage docs](#usage).
