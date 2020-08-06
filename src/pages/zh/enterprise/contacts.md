---
title: Contacts
template: enterprise-plugin
version: 1.1.2
minor: 1.1.X
otherVersions:
  - 1.0.X
---

The Contacts plugin provides access to read, write, or select device contacts.

<native-ent-install plugin-id="contacts" variables=""></native-ent-install>

## Usage

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

### Type aliases

### ContactFieldType

Ƭ **ContactFieldType**: *"*" | "addresses" | "birthday" | "categories" | "country" | "department" | "displayName" | "emails" | "name.familyName" | "name.formatted" | "name.givenName" | "name.honorificPrefix" | "name.honorificSuffix" | "id" | "ims" | "locality" | "name.middleName" | "name" | "nickname" | "note" | "organizations" | "phoneNumbers" | "photos" | "postalCode" | "region" | "streetAddress" | "title" | "urls"*

Support for searching varies between platforms. iOS only supports the following types for a text search:

* 'name'
* 'emails'
* 'phoneNumbers'

In addition, the wildcard '*' character is required to return all contacts.

Android supports all defined fields.

### Contact

Contains information about a single contact.

### Constructors

### constructor

\+ **new Contact**(`id?`: undefined | string, `displayName?`: undefined | string, `name?`: [ContactName](#contactname), `nickname?`: undefined | string, `phoneNumbers?`: [ContactField](#contactfield)[], `emails?`: [ContactField](#contactfield)[], `addresses?`: [ContactAddress](#contactaddress)[], `ims?`: [ContactField](#contactfield)[], `organizations?`: [ContactOrganization](#contactorganization)[], `birthday?`: Date | string | null, `note?`: undefined | string, `photos?`: [ContactField](#contactfield)[], `categories?`: [ContactField](#contactfield)[], `urls?`: [ContactField](#contactfield)[]): *[Contact](#contact)*

**Parameters:**

| Name             | Type                                          |
| ---------------- | --------------------------------------------- |
| `id?`            | undefined &#124; string                       |
| `displayName?`   | undefined &#124; string                       |
| `name?`          | [ContactName](#contactname)                   |
| `nickname?`      | undefined &#124; string                       |
| `phoneNumbers?`  | [ContactField](#contactfield)[]               |
| `emails?`        | [ContactField](#contactfield)[]               |
| `addresses?`     | [ContactAddress](#contactaddress)[]           |
| `ims?`           | [ContactField](#contactfield)[]               |
| `organizations?` | [ContactOrganization](#contactorganization)[] |
| `birthday?`      | Date &#124; string &#124; null                |
| `note?`          | undefined &#124; string                       |
| `photos?`        | [ContactField](#contactfield)[]               |
| `categories?`    | [ContactField](#contactfield)[]               |
| `urls?`          | [ContactField](#contactfield)[]               |


**Returns:** *[Contact](#contact)*

### Properties

### `Optional` addresses

• **addresses**? : *[ContactAddress](#contactaddress)[] | null*

An array of all the contact's addresses.

* * *

### `Optional` birthday

• **birthday**? : *Date | string | null*

The birthday of the contact.

* * *

### `Optional` categories

• **categories**? : *[ContactField](#contactfield)[] | null*

An array of all the user-defined categories associated with the contact.

* * *

### `Optional` displayName

• **displayName**? : *string | null*

The name of this Contact, suitable for display to end users.

* * *

### `Optional` emails

• **emails**? : *[ContactField](#contactfield)[] | null*

An array of all the contact's email addresses.

* * *

### `Optional` id

• **id**? : *string | null*

A globally unique identifier.

* * *

### `Optional` ims

• **ims**? : *[ContactField](#contactfield)[] | null*

An array of all the contact's IM addresses.

* * *

### `Optional` name

• **name**? : *[ContactName](#contactname) | null*

An object containing all components of a persons name.

* * *

### `Optional` nickname

• **nickname**? : *string | null*

A casual name by which to address the contact.

* * *

### `Optional` note

• **note**? : *string | null*

A note about the contact on Android.

* * *

### `Optional` organizations

• **organizations**? : *[ContactOrganization](#contactorganization)[] | null*

An array of all the contact's organizations.

* * *

### `Optional` phoneNumbers

• **phoneNumbers**? : *[ContactField](#contactfield)[] | null*

An array of all the contact's phone numbers.

* * *

### `Optional` photos

• **photos**? : *[ContactField](#contactfield)[] | null*

An array of the contact's photos.

* * *

### `Optional` rawId

• **rawId**? : *string | null*

A globally unique identifier on Android.

* * *

### `Optional` urls

• **urls**? : *[ContactField](#contactfield)[] | null*

An array of web pages associated with the contact.

### Methods

### clone

▸ **clone**(): *[Contact](#contact)*

Creates a deep copy of this Contact. With the contact ID set to null.

**Returns:** *[Contact](#contact)*

copy of this Contact

* * *

### display

▸ **display**(`allowEdit?`: undefined | false | true): *Promise‹any›*

iOS only Display a contact in the native Contact Picker UI

**Parameters:**

| Name         | Type                               | Description                                                                                   |
| ------------ | ---------------------------------- | --------------------------------------------------------------------------------------------- |
| `allowEdit?` | undefined &#124; false &#124; true | true display the contact and allow editing it false (default) display contact without editing |


**Returns:** *Promise‹any›*

* * *

### remove

▸ **remove**(): *Promise‹any›*

Removes contact from device storage.

**Returns:** *Promise‹any›*

* * *

### save

▸ **save**(): *Promise‹any›*

Persists contact to device storage.

**Returns:** *Promise‹any›*

### Contactaddress

Contact address.

### Constructors

### constructor

\+ **new ContactAddress**(`pref?`: undefined | false | true, `type?`: undefined | string, `formatted?`: undefined | string, `streetAddress?`: undefined | string, `locality?`: undefined | string, `region?`: undefined | string, `postalCode?`: undefined | string, `country?`: undefined | string): *[ContactAddress](#contactaddress)*

**Parameters:**

| Name             | Type                               |
| ---------------- | ---------------------------------- |
| `pref?`          | undefined &#124; false &#124; true |
| `type?`          | undefined &#124; string            |
| `formatted?`     | undefined &#124; string            |
| `streetAddress?` | undefined &#124; string            |
| `locality?`      | undefined &#124; string            |
| `region?`        | undefined &#124; string            |
| `postalCode?`    | undefined &#124; string            |
| `country?`       | undefined &#124; string            |


**Returns:** *[ContactAddress](#contactaddress)*

### Properties

### `Optional` country

• **country**? : *string | null*

The country name.

* * *

### `Optional` formatted

• **formatted**? : *string | null*

The full address formatted for display.

* * *

### `Optional` id

• **id**? : *string | null*

unique identifier, should only be set by native code

* * *

### `Optional` locality

• **locality**? : *string | null*

The city or locality.

* * *

### `Optional` postalCode

• **postalCode**? : *string | null*

The zip code or postal code.

* * *

### `Optional` pref

• **pref**? : *undefined | false | true*

Set to true if this ContactAddress contains the user's preferred value.

* * *

### `Optional` region

• **region**? : *string | null*

The state or region.

* * *

### `Optional` streetAddress

• **streetAddress**? : *string | null*

The full street address.

* * *

### `Optional` type

• **type**? : *string | null*

A string indicating what type of field this is, home for example.

### Contacterror

ContactError. An error code assigned by an implementation when an error has occurred

### Constructors

### constructor

\+ **new ContactError**(`code`: number): *[ContactError](#contacterror)*

**Parameters:**

| Name   | Type   |
| ------ | ------ |
| `code` | number |


**Returns:** *[ContactError](#contacterror)*

### Properties

### code

• **code**: *number*

Error code

* * *

### `Optional` message

• **message**? : *undefined | string*

Error message

* * *

### `Static` INVALID_ARGUMENT_ERROR

▪ **INVALID_ARGUMENT_ERROR**: *number* = 1

* * *

### `Static` IO_ERROR

▪ **IO_ERROR**: *number* = 4

* * *

### `Static` NOT_SUPPORTED_ERROR

▪ **NOT_SUPPORTED_ERROR**: *number* = 5

* * *

### `Static` OPERATION_CANCELLED_ERROR

▪ **OPERATION_CANCELLED_ERROR**: *number* = 6

* * *

### `Static` PENDING_OPERATION_ERROR

▪ **PENDING_OPERATION_ERROR**: *number* = 3

* * *

### `Static` PERMISSION_DENIED_ERROR

▪ **PERMISSION_DENIED_ERROR**: *number* = 20

* * *

### `Static` TIMEOUT_ERROR

▪ **TIMEOUT_ERROR**: *number* = 2

* * *

### `Static` UNKNOWN_ERROR

▪ **UNKNOWN_ERROR**: *number* = 0

Error codes

### Contactfield

Generic contact field.

### Constructors

### constructor

\+ **new ContactField**(`type?`: undefined | string, `value?`: undefined | string, `pref?`: undefined | false | true): *[ContactField](#contactfield)*

**Parameters:**

| Name     | Type                               |
| -------- | ---------------------------------- |
| `type?`  | undefined &#124; string            |
| `value?` | undefined &#124; string            |
| `pref?`  | undefined &#124; false &#124; true |


**Returns:** *[ContactField](#contactfield)*

### Properties

### `Optional` id

• **id**? : *string | null*

unique identifier, should only be set by native code

* * *

### `Optional` pref

• **pref**? : *undefined | false | true*

Set to true if this ContactField contains the user's preferred value.

* * *

### `Optional` type

• **type**? : *string | null*

A string that indicates what type of field this is, home for example.

* * *

### `Optional` value

• **value**? : *string | null*

The value of the field, such as a phone number or email address.

### Contactfindoptions

ContactFindOptions. Search options to filter

### Constructors

### constructor

\+ **new ContactFindOptions**(`filter?`: undefined | string, `multiple?`: undefined | false | true, `desiredFields?`: string[], `hasPhoneNumber?`: undefined | false | true): *[ContactFindOptions](#contactfindoptions)*

**Parameters:**

| Name              | Type                               |
| ----------------- | ---------------------------------- |
| `filter?`         | undefined &#124; string            |
| `multiple?`       | undefined &#124; false &#124; true |
| `desiredFields?`  | string[]                           |
| `hasPhoneNumber?` | undefined &#124; false &#124; true |


**Returns:** *[ContactFindOptions](#contactfindoptions)*

### Properties

### `Optional` desiredFields

• **desiredFields**? : *string[]*

Contact fields to be returned back. If specified, the resulting Contact object only features values for these fields.

* * *

### `Optional` filter

• **filter**? : *undefined | string*

The search string used to find navigator.contacts.

* * *

### `Optional` hasPhoneNumber

• **hasPhoneNumber**? : *undefined | false | true*

(Android only): Filters the search to only return contacts with a phone number informed.

* * *

### `Optional` multiple

• **multiple**? : *undefined | false | true*

Determines if the find operation returns multiple navigator.contacts. Defaults to false.

### Contactname

Contact name.

### Constructors

### constructor

\+ **new ContactName**(`formatted?`: undefined | string, `familyName?`: undefined | string, `givenName?`: undefined | string, `middleName?`: undefined | string, `honorificPrefix?`: undefined | string, `honorificSuffix?`: undefined | string): *[ContactName](#contactname)*

**Parameters:**

| Name               | Type                    |
| ------------------ | ----------------------- |
| `formatted?`       | undefined &#124; string |
| `familyName?`      | undefined &#124; string |
| `givenName?`       | undefined &#124; string |
| `middleName?`      | undefined &#124; string |
| `honorificPrefix?` | undefined &#124; string |
| `honorificSuffix?` | undefined &#124; string |


**Returns:** *[ContactName](#contactname)*

### Properties

### `Optional` familyName

• **familyName**? : *string | null*

The contact's family name.

* * *

### `Optional` formatted

• **formatted**? : *string | null*

The complete name of the contact.

* * *

### `Optional` givenName

• **givenName**? : *string | null*

The contact's given name.

* * *

### `Optional` honorificPrefix

• **honorificPrefix**? : *string | null*

The contact's prefix (example Mr. or Dr.)

* * *

### `Optional` honorificSuffix

• **honorificSuffix**? : *string | null*

The contact's suffix (example Esq.).

* * *

### `Optional` middleName

• **middleName**? : *string | null*

The contact's middle name.

### Contactorganization

Contact organization.

### Constructors

### constructor

\+ **new ContactOrganization**(`type?`: undefined | string, `name?`: undefined | string, `department?`: undefined | string, `title?`: undefined | string, `pref?`: undefined | false | true): *[ContactOrganization](#contactorganization)*

**Parameters:**

| Name          | Type                               |
| ------------- | ---------------------------------- |
| `type?`       | undefined &#124; string            |
| `name?`       | undefined &#124; string            |
| `department?` | undefined &#124; string            |
| `title?`      | undefined &#124; string            |
| `pref?`       | undefined &#124; false &#124; true |


**Returns:** *[ContactOrganization](#contactorganization)*

### Properties

### `Optional` department

• **department**? : *string | null*

The department the contract works for.

* * *

### `Optional` id

• **id**? : *string | null*

unique identifier, should only be set by native code

* * *

### `Optional` name

• **name**? : *string | null*

The name of the organization.

* * *

### `Optional` pref

• **pref**? : *undefined | false | true*

Set to true if this ContactOrganization contains the user's preferred value.

* * *

### `Optional` title

• **title**? : *string | null*

The contact's title at the organization.

* * *

### `Optional` type

• **type**? : *string | null*

A string that indicates what type of field this is, home for example.

### Contacts

Access and manage Contacts on the device.

### Methods

### create

▸ **create**(`properties?`: any): *[Contact](#contact)*

This function creates a new contact, but it does not persist the contact to device storage. To persist the contact to device storage, invoke contact.save().

**Parameters:**

| Name          | Type | Description                                                         |
| ------------- | ---- | ------------------------------------------------------------------- |
| `properties?` | any  | an object whose properties will be examined to create a new Contact |


**Returns:** *[Contact](#contact)*

new Contact object

* * *

### find

▸ **find**(`fields`: [ContactFieldType](#contactfieldtype)[], `options?`: [ContactFindOptions](#contactfindoptions)): *Promise‹[Contact](#contact)[]›*

Returns an array of Contacts matching the search criteria.

**Parameters:**

| Name       | Type                                      | Description                                           |
| ---------- | ----------------------------------------- | ----------------------------------------------------- |
| `fields`   | [ContactFieldType](#contactfieldtype)[]   | that should be searched (see platform specific notes) |
| `options?` | [ContactFindOptions](#contactfindoptions) | that can be applied to contact searching              |


**Returns:** *Promise‹[Contact](#contact)[]›*

a promise that resolves with the array of Contacts matching search criteria

* * *

### newContactUI

▸ **newContactUI**(): *Promise‹string›*

iOS only Create a contact using the iOS Contact Picker UI

returns: a promise that resolves with the id of the created contact as param to successCallback

**Returns:** *Promise‹string›*

* * *

### pickContact

▸ **pickContact**(): *Promise‹[Contact](#contact)›*

This function picks contact from phone using contact picker UI

**Returns:** *Promise‹[Contact](#contact)›*

a promise that resolves with the selected Contact object

## Changelog

### \[1.1.2\] (2020-06-10)

### Bug Fixes

* **ios:** Adding additional search predicates on iOS 

### \[1.1.1\] (2020-05-28)

### Bug Fixes

* **ios:** make wildcard return all contacts 

### \[1.1.0\] (2020-04-24)

### Features

* **ios:** enable wildcard fetch-all contacts 

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