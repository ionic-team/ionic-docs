---
title: Contacts
template: enterprise-plugin
version: 1.0.6
minor: 1.0.X
otherVersions:
  - 1.0.X
---

The Contacts plugin provides access to read, write, or select device contacts.

<native-ent-install plugin-id="contacts" variables=""></native-ent-install>

Usage
-----

The Contacts plugin ship with a native Angular & es2015+/Typescript wrappers as well as being available on window.
```typescript
// Angular
import { Contacts } from '@ionic-enterprise/contacts/ngx';
import { Contact, ContactName, ContactField  } from '@ionic-enterprise/contacts';

...

constructor(private contacts: Contacts) { }

async createContact() {
  let contact = this.contacts.create();
  contact.name = new ContactName(null, 'Smith', 'John');
  contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
  contact.save().then(
    () => console.log('Contact saved!', contact),
    (error: any) => console.error('Error saving contact.', error)
  );
}

...

// ES2015+/TypeScript
import { Contacts, Contact, ContactName, ContactField } from '@ionic-enterprise/contacts';

let contact = Contacts.create();
contact.name = new ContactName(null, 'Smith', 'John');
contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
contact.save().then(
  () => console.log('Contact saved!', contact),
  (error: any) => console.error('Error saving contact.', error)
);

...

// Vanilla JS
document.addEventListener('deviceready', () => {
  let contact = IonicContacts.create();
  contact.name = {familyName: 'Smith', givenName: 'John'};
  contact.phoneNumbers = {type: 'mobile', value: '6471234567'};
  contact.save().then(
    () => console.log('Contact saved!', contact),
    (error) => console.error('Error saving contact.', error)
  );
});
```
# Contacts

## Index

### Classes

* [Contact](#contact)
* [ContactAddress](#contactaddress)
* [ContactError](#contacterror)
* [ContactField](#contactfield)
* [ContactFindOptions](#contactfindoptions)
* [ContactName](#contactname)
* [ContactOrganization](#contactorganization)
* [Contacts](#contacts)

### Type aliases

* [ContactFieldType](#contactfieldtype)

---

## Classes

<a id="contact"></a>

### Contact

**Contact**:

Contains information about a single contact.

<a id="contact.constructor"></a>

### constructor

⊕ **new Contact**(id?: *`undefined` \| `string`*, displayName?: *`undefined` \| `string`*, name?: *[ContactName](#contactname)*, nickname?: *`undefined` \| `string`*, phoneNumbers?: *[ContactField](#contactfield)[]*, emails?: *[ContactField](#contactfield)[]*, addresses?: *[ContactAddress](#contactaddress)[]*, ims?: *[ContactField](#contactfield)[]*, organizations?: *[ContactOrganization](#contactorganization)[]*, birthday?: *`Date` \| `string` \| `null`*, note?: *`undefined` \| `string`*, photos?: *[ContactField](#contactfield)[]*, categories?: *[ContactField](#contactfield)[]*, urls?: *[ContactField](#contactfield)[]*): [Contact](#contact)

**Parameters:**

| Name                     | Type                                          |
| ------------------------ | --------------------------------------------- |
| `Optional` id            | `undefined` \| `string`                      |
| `Optional` displayName   | `undefined` \| `string`                      |
| `Optional` name          | [ContactName](#contactname)                   |
| `Optional` nickname      | `undefined` \| `string`                      |
| `Optional` phoneNumbers  | [ContactField](#contactfield)[]               |
| `Optional` emails        | [ContactField](#contactfield)[]               |
| `Optional` addresses     | [ContactAddress](#contactaddress)[]           |
| `Optional` ims           | [ContactField](#contactfield)[]               |
| `Optional` organizations | [ContactOrganization](#contactorganization)[] |
| `Optional` birthday      | `Date` \| `string` \| `null`                |
| `Optional` note          | `undefined` \| `string`                      |
| `Optional` photos        | [ContactField](#contactfield)[]               |
| `Optional` categories    | [ContactField](#contactfield)[]               |
| `Optional` urls          | [ContactField](#contactfield)[]               |

**Returns:** [Contact](#contact)

___

<a id="contact.addresses"></a>

### `<Optional>` addresses

**● addresses**: *[ContactAddress](#contactaddress)[] \| `null`*

An array of all the contact's addresses.

___

<a id="contact.birthday"></a>

### `<Optional>` birthday

**● birthday**: *`Date` \| `string` \| `null`*

The birthday of the contact.

___

<a id="contact.categories"></a>

### `<Optional>` categories

**● categories**: *[ContactField](#contactfield)[] \| `null`*

An array of all the user-defined categories associated with the contact.

___

<a id="contact.displayname"></a>

### `<Optional>` displayName

**● displayName**: *`string` \| `null`*

The name of this Contact, suitable for display to end users.

___

<a id="contact.emails"></a>

### `<Optional>` emails

**● emails**: *[ContactField](#contactfield)[] \| `null`*

An array of all the contact's email addresses.

___

<a id="contact.id"></a>

### `<Optional>` id

**● id**: *`string` \| `null`*

A globally unique identifier.

___

<a id="contact.ims"></a>

### `<Optional>` ims

**● ims**: *[ContactField](#contactfield)[] \| `null`*

An array of all the contact's IM addresses.

___

<a id="contact.name"></a>

### `<Optional>` name

**● name**: *[ContactName](#contactname) \| `null`*

An object containing all components of a persons name.

___

<a id="contact.nickname"></a>

### `<Optional>` nickname

**● nickname**: *`string` \| `null`*

A casual name by which to address the contact.

___

<a id="contact.note"></a>

### `<Optional>` note

**● note**: *`string` \| `null`*

A note about the contact on Android.

___

<a id="contact.organizations"></a>

### `<Optional>` organizations

**● organizations**: *[ContactOrganization](#contactorganization)[] \| `null`*

An array of all the contact's organizations.

___

<a id="contact.phonenumbers"></a>

### `<Optional>` phoneNumbers

**● phoneNumbers**: *[ContactField](#contactfield)[] \| `null`*

An array of all the contact's phone numbers.

___

<a id="contact.photos"></a>

### `<Optional>` photos

**● photos**: *[ContactField](#contactfield)[] \| `null`*

An array of the contact's photos.

___

<a id="contact.rawid"></a>

### `<Optional>` rawId

**● rawId**: *`string` \| `null`*

A globally unique identifier on Android.

___

<a id="contact.urls"></a>

### `<Optional>` urls

**● urls**: *[ContactField](#contactfield)[] \| `null`*

An array of web pages associated with the contact.

___

<a id="contact.clone"></a>

### clone

▸ **clone**(): [Contact](#contact)

Creates a deep copy of this Contact. With the contact ID set to null.

**Returns:** [Contact](#contact) copy of this Contact

___

<a id="contact.display"></a>

### display

▸ **display**(allowEdit?: *`undefined` \| `false` \| `true`*): `Promise`<`any`>

iOS only Display a contact in the native Contact Picker UI

**Parameters:**

| Name                 | Type           | Description                                                                                                         |
| -------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------- |
| `Optional` allowEdit | `undefined` \ | `false` \| `true` |  true display the contact and allow editing it false (default) display contact without editing |

**Returns:** `Promise`<`any`>

___

<a id="contact.remove"></a>

### remove

▸ **remove**(): `Promise`<`any`>

Removes contact from device storage.

**Returns:** `Promise`<`any`>

___

<a id="contact.save"></a>

### save

▸ **save**(): `Promise`<`any`>

Persists contact to device storage.

**Returns:** `Promise`<`any`>

___

___

<a id="contactaddress"></a>

### ContactAddress

**ContactAddress**:

Contact address.

<a id="contactaddress.constructor"></a>

### constructor

⊕ **new ContactAddress**(pref?: *`undefined` \| `false` \| `true`*, type?: *`undefined` \| `string`*, formatted?: *`undefined` \| `string`*, streetAddress?: *`undefined` \| `string`*, locality?: *`undefined` \| `string`*, region?: *`undefined` \| `string`*, postalCode?: *`undefined` \| `string`*, country?: *`undefined` \| `string`*): [ContactAddress](#contactaddress)

**Parameters:**

| Name                     | Type                               |
| ------------------------ | ---------------------------------- |
| `Optional` pref          | `undefined` \| `false` \| `true` |
| `Optional` type          | `undefined` \| `string`           |
| `Optional` formatted     | `undefined` \| `string`           |
| `Optional` streetAddress | `undefined` \| `string`           |
| `Optional` locality      | `undefined` \| `string`           |
| `Optional` region        | `undefined` \| `string`           |
| `Optional` postalCode    | `undefined` \| `string`           |
| `Optional` country       | `undefined` \| `string`           |

**Returns:** [ContactAddress](#contactaddress)

___

<a id="contactaddress.country"></a>

### `<Optional>` country

**● country**: *`string` \| `null`*

The country name.

___

<a id="contactaddress.formatted"></a>

### `<Optional>` formatted

**● formatted**: *`string` \| `null`*

The full address formatted for display.

___

<a id="contactaddress.id"></a>

### `<Optional>` id

**● id**: *`string` \| `null`*

unique identifier, should only be set by native code

___

<a id="contactaddress.locality"></a>

### `<Optional>` locality

**● locality**: *`string` \| `null`*

The city or locality.

___

<a id="contactaddress.postalcode"></a>

### `<Optional>` postalCode

**● postalCode**: *`string` \| `null`*

The zip code or postal code.

___

<a id="contactaddress.pref"></a>

### `<Optional>` pref

**● pref**: *`undefined` \| `false` \| `true`*

Set to true if this ContactAddress contains the user's preferred value.

___

<a id="contactaddress.region"></a>

### `<Optional>` region

**● region**: *`string` \| `null`*

The state or region.

___

<a id="contactaddress.streetaddress"></a>

### `<Optional>` streetAddress

**● streetAddress**: *`string` \| `null`*

The full street address.

___

<a id="contactaddress.type"></a>

### `<Optional>` type

**● type**: *`string` \| `null`*

A string indicating what type of field this is, home for example.

___

___

<a id="contacterror"></a>

### ContactError

**ContactError**:

ContactError. An error code assigned by an implementation when an error has occurred

*__constructor__*: 

<a id="contacterror.constructor"></a>

### constructor

⊕ **new ContactError**(code: *`number`*): [ContactError](#contacterror)

**Parameters:**

| Name | Type     |
| ---- | -------- |
| code | `number` |

**Returns:** [ContactError](#contacterror)

___

<a id="contacterror.code"></a>

### code

**● code**: *`number`*

Error code

___

<a id="contacterror.message"></a>

### `<Optional>` message

**● message**: *`undefined` \| `string`*

Error message

___

<a id="contacterror.invalid_argument_error"></a>

### `<Static>` INVALID_ARGUMENT_ERROR

**● INVALID_ARGUMENT_ERROR**: *`number`* = 1

___

<a id="contacterror.io_error"></a>

### `<Static>` IO_ERROR

**● IO_ERROR**: *`number`* = 4

___

<a id="contacterror.not_supported_error"></a>

### `<Static>` NOT_SUPPORTED_ERROR

**● NOT_SUPPORTED_ERROR**: *`number`* = 5

___

<a id="contacterror.operation_cancelled_error"></a>

### `<Static>` OPERATION_CANCELLED_ERROR

**● OPERATION_CANCELLED_ERROR**: *`number`* = 6

___

<a id="contacterror.pending_operation_error"></a>

### `<Static>` PENDING_OPERATION_ERROR

**● PENDING_OPERATION_ERROR**: *`number`* = 3

___

<a id="contacterror.permission_denied_error"></a>

### `<Static>` PERMISSION_DENIED_ERROR

**● PERMISSION_DENIED_ERROR**: *`number`* = 20

___

<a id="contacterror.timeout_error"></a>

### `<Static>` TIMEOUT_ERROR

**● TIMEOUT_ERROR**: *`number`* = 2

___

<a id="contacterror.unknown_error"></a>

### `<Static>` UNKNOWN_ERROR

**● UNKNOWN_ERROR**: *`number`* = 0

Error codes

___

___

<a id="contactfield"></a>

### ContactField

**ContactField**:

Generic contact field.

<a id="contactfield.constructor"></a>

### constructor

⊕ **new ContactField**(type?: *`undefined` \| `string`*, value?: *`undefined` \| `string`*, pref?: *`undefined` \| `false` \| `true`*): [ContactField](#contactfield)

**Parameters:**

| Name             | Type                               |
| ---------------- | ---------------------------------- |
| `Optional` type  | `undefined` \| `string`           |
| `Optional` value | `undefined` \| `string`           |
| `Optional` pref  | `undefined` \| `false` \| `true` |

**Returns:** [ContactField](#contactfield)

___

<a id="contactfield.id"></a>

### `<Optional>` id

**● id**: *`string` \| `null`*

unique identifier, should only be set by native code

___

<a id="contactfield.pref"></a>

### `<Optional>` pref

**● pref**: *`undefined` \| `false` \| `true`*

Set to true if this ContactField contains the user's preferred value.

___

<a id="contactfield.type"></a>

### `<Optional>` type

**● type**: *`string` \| `null`*

A string that indicates what type of field this is, home for example.

___

<a id="contactfield.value"></a>

### `<Optional>` value

**● value**: *`string` \| `null`*

The value of the field, such as a phone number or email address.

___

___

<a id="contactfindoptions"></a>

### ContactFindOptions

**ContactFindOptions**:

ContactFindOptions. Search options to filter

<a id="contactfindoptions.constructor"></a>

### constructor

⊕ **new ContactFindOptions**(filter?: *`undefined` \| `string`*, multiple?: *`undefined` \| `false` \| `true`*, desiredFields?: *`string`[]*, hasPhoneNumber?: *`undefined` \| `false` \| `true`*): [ContactFindOptions](#contactfindoptions)

**Parameters:**

| Name                      | Type                               |
| ------------------------- | ---------------------------------- |
| `Optional` filter         | `undefined` \| `string`           |
| `Optional` multiple       | `undefined` \| `false` \| `true` |
| `Optional` desiredFields  | `string`[]                         |
| `Optional` hasPhoneNumber | `undefined` \| `false` \| `true` |

**Returns:** [ContactFindOptions](#contactfindoptions)

___

<a id="contactfindoptions.desiredfields"></a>

### `<Optional>` desiredFields

**● desiredFields**: *`string`[]*

Contact fields to be returned back. If specified, the resulting Contact object only features values for these fields.

___

<a id="contactfindoptions.filter"></a>

### `<Optional>` filter

**● filter**: *`undefined` \| `string`*

The search string used to find navigator.contacts.

___

<a id="contactfindoptions.hasphonenumber"></a>

### `<Optional>` hasPhoneNumber

**● hasPhoneNumber**: *`undefined` \| `false` \| `true`*

(Android only): Filters the search to only return contacts with a phone number informed.

___

<a id="contactfindoptions.multiple"></a>

### `<Optional>` multiple

**● multiple**: *`undefined` \| `false` \| `true`*

Determines if the find operation returns multiple navigator.contacts. Defaults to false.

___

___

<a id="contactname"></a>

### ContactName

**ContactName**:

Contact name.

<a id="contactname.constructor"></a>

### constructor

⊕ **new ContactName**(formatted?: *`undefined` \| `string`*, familyName?: *`undefined` \| `string`*, givenName?: *`undefined` \| `string`*, middleName?: *`undefined` \| `string`*, honorificPrefix?: *`undefined` \| `string`*, honorificSuffix?: *`undefined` \| `string`*): [ContactName](#contactname)

**Parameters:**

| Name                       | Type                     |
| -------------------------- | ------------------------ |
| `Optional` formatted       | `undefined` \| `string` |
| `Optional` familyName      | `undefined` \| `string` |
| `Optional` givenName       | `undefined` \| `string` |
| `Optional` middleName      | `undefined` \| `string` |
| `Optional` honorificPrefix | `undefined` \| `string` |
| `Optional` honorificSuffix | `undefined` \| `string` |

**Returns:** [ContactName](#contactname)

___

<a id="contactname.familyname"></a>

### `<Optional>` familyName

**● familyName**: *`string` \| `null`*

The contact's family name.

___

<a id="contactname.formatted"></a>

### `<Optional>` formatted

**● formatted**: *`string` \| `null`*

The complete name of the contact.

___

<a id="contactname.givenname"></a>

### `<Optional>` givenName

**● givenName**: *`string` \| `null`*

The contact's given name.

___

<a id="contactname.honorificprefix"></a>

### `<Optional>` honorificPrefix

**● honorificPrefix**: *`string` \| `null`*

The contact's prefix (example Mr. or Dr.)

___

<a id="contactname.honorificsuffix"></a>

### `<Optional>` honorificSuffix

**● honorificSuffix**: *`string` \| `null`*

The contact's suffix (example Esq.).

___

<a id="contactname.middlename"></a>

### `<Optional>` middleName

**● middleName**: *`string` \| `null`*

The contact's middle name.

___

___

<a id="contactorganization"></a>

### ContactOrganization

**ContactOrganization**:

Contact organization.

<a id="contactorganization.constructor"></a>

### constructor

⊕ **new ContactOrganization**(type?: *`undefined` \| `string`*, name?: *`undefined` \| `string`*, department?: *`undefined` \| `string`*, title?: *`undefined` \| `string`*, pref?: *`undefined` \| `false` \| `true`*): [ContactOrganization](#contactorganization)

**Parameters:**

| Name                  | Type                               |
| --------------------- | ---------------------------------- |
| `Optional` type       | `undefined` \| `string`           |
| `Optional` name       | `undefined` \| `string`           |
| `Optional` department | `undefined` \| `string`           |
| `Optional` title      | `undefined` \| `string`           |
| `Optional` pref       | `undefined` \| `false` \| `true` |

**Returns:** [ContactOrganization](#contactorganization)

___

<a id="contactorganization.department"></a>

### `<Optional>` department

**● department**: *`string` \| `null`*

The department the contract works for.

___

<a id="contactorganization.id"></a>

### `<Optional>` id

**● id**: *`string` \| `null`*

unique identifier, should only be set by native code

___

<a id="contactorganization.name"></a>

### `<Optional>` name

**● name**: *`string` \| `null`*

The name of the organization.

___

<a id="contactorganization.pref"></a>

### `<Optional>` pref

**● pref**: *`undefined` \| `false` \| `true`*

Set to true if this ContactOrganization contains the user's preferred value.

___

<a id="contactorganization.title"></a>

### `<Optional>` title

**● title**: *`string` \| `null`*

The contact's title at the organization.

___

<a id="contactorganization.type"></a>

### `<Optional>` type

**● type**: *`string` \| `null`*

A string that indicates what type of field this is, home for example.

___

___

<a id="contacts"></a>

### Contacts

**Contacts**:

Access and manage Contacts on the device.

<a id="contacts.create"></a>

### create

▸ **create**(properties?: *`any`*): [Contact](#contact)

This function creates a new contact, but it does not persist the contact to device storage. To persist the contact to device storage, invoke contact.save().

**Parameters:**

| Name                  | Type  | Description                                                         |
| --------------------- | ----- | ------------------------------------------------------------------- |
| `Optional` properties | `any` | an object whose properties will be examined to create a new Contact |

**Returns:** [Contact](#contact) new Contact object

___

<a id="contacts.find"></a>

### find

▸ **find**(fields: *[ContactFieldType](#contactfieldtype)[]*, options?: *[ContactFindOptions](#contactfindoptions)*): `Promise`<[Contact](#contact)[]>

Returns an array of Contacts matching the search criteria.

**Parameters:**

| Name               | Type                                      | Description                              |
| ------------------ | ----------------------------------------- | ---------------------------------------- |
| fields             | [ContactFieldType](#contactfieldtype)[]   | that should be searched                  |
| `Optional` options | [ContactFindOptions](#contactfindoptions) | that can be applied to contact searching |

**Returns:** `Promise`<[Contact](#contact)[]> a promise that resolves with the array of Contacts matching search criteria

___

<a id="contacts.newcontactui"></a>

### newContactUI

▸ **newContactUI**(): `Promise`<`string`>

iOS only Create a contact using the iOS Contact Picker UI

returns: a promise that resolves with the id of the created contact as param to successCallback

**Returns:** `Promise`<`string`>

___

<a id="contacts.pickcontact"></a>

### pickContact

▸ **pickContact**(): `Promise`<[Contact](#contact)>

This function picks contact from phone using contact picker UI

**Returns:** `Promise`<[Contact](#contact)> a promise that resolves with the selected Contact object

___

___

## Type aliases

<a id="contactfieldtype"></a>

### ContactFieldType

**Ƭ ContactFieldType**: *"*" \| "addresses" \| "birthday" \| "categories" \| "country" \| "department" \| "displayName" \| "emails" \| "name.familyName" \| "name.formatted" \| "name.givenName" \| "name.honorificPrefix" \| "name.honorificSuffix" \| "id" \| "ims" \| "locality" \| "name.middleName" \| "name" \| "nickname" \| "note" \| "organizations" \| "phoneNumbers" \| "photos" \| "postalCode" \| "region" \| "streetAddress" \| "title" \| "urls"*

___

# Changelog



### \[1.0.6\] (2020-02-07)


### Bug Fixes

* **ios:** make save work on existing contacts

### \[1.0.5\] (2019-11-22)


### Bug Fixes

* prevent devideready block when package is not installed as plugin

### \[1.0.4\] (2019-11-08)


### Bug Fixes

* **ios:** make pickContact prompt for permission if not granted

### \[1.0.3\] (2019-11-04)


### Bug Fixes

* make plugin don't break web context

### \[1.0.2\] (2019-10-02)


### Bug Fixes

* **ios:** remove contact notes code to work on iOS 13

### 1.0.1 (2019-09-20)


### Bug Fixes

* plugin files not included on published package 
