# Contacts 


Access and manage Contacts on the device.


Repo: [https://github.com/apache/cordova-plugin-contacts](https://github.com/apache/cordova-plugin-contacts)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-contacts
$ npm install --save @ionic-native/contacts
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* BlackBerry 10
* Browser
* Firefox OS
* iOS
* Ubuntu
* Windows
* Windows 8
* Windows Phone




### Usage



```typescript
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

constructor(private contacts: Contacts) { }

let contact: Contact = this.contacts.create();

contact.name = new ContactName(null, 'Smith', 'John');
contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
contact.save().then(
  () => console.log('Contact saved!', contact),
  (error: any) => console.error('Error saving contact.', error)
);

```



<p><br></p>

## Instance Members

### create

Create a single contact.

### find

Search for contacts in the Contacts list.

<dl>
<dt><h4>fields</h4></dt>
<dd>Contact fields to be used as a search qualifier</dd><dt><h4>options</h4><strong>Type: </strong><code>IContactFindOptions</code></dt>
<dd>See IContactFindOptions table below <span class="tag">optional</span></dd>
</dl>

### pickContact

Select a single Contact.

<p><br></p>

## IContactAddress

<dl>
<dt><h4>country</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The country name. <span class="tag">optional</span></dd><dt><h4>formatted</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The full address formatted for display. <span class="tag">optional</span></dd><dt><h4>locality</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The city or locality. <span class="tag">optional</span></dd><dt><h4>postalCode</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The zip code or postal code. <span class="tag">optional</span></dd><dt><h4>pref</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set to true if this ContactAddress contains the user's preferred value. <span class="tag">optional</span></dd><dt><h4>region</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The state or region. <span class="tag">optional</span></dd><dt><h4>streetAddress</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The full street address. <span class="tag">optional</span></dd><dt><h4>type</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A string indicating what type of field this is, home for example. <span class="tag">optional</span></dd>
</dl>

## IContactField

<dl>
<dt><h4>pref</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set to true if this ContactField contains the user's preferred value. <span class="tag">optional</span></dd><dt><h4>type</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A string that indicates what type of field this is, home for example. <span class="tag">optional</span></dd><dt><h4>value</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The value of the field, such as a phone number or email address. <span class="tag">optional</span></dd>
</dl>

## IContactFindOptions

<dl>
<dt><h4>desiredFields</h4><strong>Type: </strong><code>string[]</code></dt>
<dd>Contact fields to be returned back. If specified, the resulting Contact object only features values for these fields. <span class="tag">optional</span></dd><dt><h4>filter</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The search string used to find navigator.contacts. <span class="tag">optional</span></dd><dt><h4>hasPhoneNumber</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>(Android only): Filters the search to only return contacts with a phone number informed. <span class="tag">optional</span></dd><dt><h4>multiple</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Determines if the find operation returns multiple navigator.contacts. Defaults to false. <span class="tag">optional</span></dd>
</dl>

## IContactName

<dl>
<dt><h4>familyName</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The contact's family name. <span class="tag">optional</span></dd><dt><h4>formatted</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The complete name of the contact. <span class="tag">optional</span></dd><dt><h4>givenName</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The contact's given name. <span class="tag">optional</span></dd><dt><h4>honorificPrefix</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The contact's prefix (example Mr. or Dr.) <span class="tag">optional</span></dd><dt><h4>honorificSuffix</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The contact's suffix (example Esq.). <span class="tag">optional</span></dd><dt><h4>middleName</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The contact's middle name. <span class="tag">optional</span></dd>
</dl>

## IContactOrganization

<dl>
<dt><h4>department</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The department the contract works for. <span class="tag">optional</span></dd><dt><h4>name</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The name of the organization. <span class="tag">optional</span></dd><dt><h4>pref</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Set to true if this ContactOrganization contains the user's preferred value. <span class="tag">optional</span></dd><dt><h4>title</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The contact's title at the organization. <span class="tag">optional</span></dd><dt><h4>type</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A string that indicates what type of field this is, home for example. <span class="tag">optional</span></dd>
</dl>

## IContactProperties

<dl>
<dt><h4>addresses</h4><strong>Type: </strong><code>IContactAddress[]</code></dt>
<dd>An array of all the contact's addresses. <span class="tag">optional</span></dd><dt><h4>birthday</h4><strong>Type: </strong><code>reference</code></dt>
<dd>The birthday of the contact. <span class="tag">optional</span></dd><dt><h4>categories</h4><strong>Type: </strong><code>IContactField[]</code></dt>
<dd>An array of all the user-defined categories associated with the contact. <span class="tag">optional</span></dd><dt><h4>displayName</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The name of this Contact, suitable for display to end users. <span class="tag">optional</span></dd><dt><h4>emails</h4><strong>Type: </strong><code>IContactField[]</code></dt>
<dd>An array of all the contact's email addresses. <span class="tag">optional</span></dd><dt><h4>id</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A globally unique identifier. <span class="tag">optional</span></dd><dt><h4>ims</h4><strong>Type: </strong><code>IContactField[]</code></dt>
<dd>An array of all the contact's IM addresses. <span class="tag">optional</span></dd><dt><h4>name</h4><strong>Type: </strong><code>reference</code></dt>
<dd>An object containing all components of a persons name. <span class="tag">optional</span></dd><dt><h4>nickname</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A casual name by which to address the contact. <span class="tag">optional</span></dd><dt><h4>note</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>A note about the contact. <span class="tag">optional</span></dd><dt><h4>organizations</h4><strong>Type: </strong><code>IContactOrganization[]</code></dt>
<dd>An array of all the contact's organizations. <span class="tag">optional</span></dd><dt><h4>phoneNumbers</h4><strong>Type: </strong><code>IContactField[]</code></dt>
<dd>An array of all the contact's phone numbers. <span class="tag">optional</span></dd><dt><h4>photos</h4><strong>Type: </strong><code>IContactField[]</code></dt>
<dd>An array of the contact's photos. <span class="tag">optional</span></dd><dt><h4>urls</h4><strong>Type: </strong><code>IContactField[]</code></dt>
<dd>An array of web pages associated with the contact. <span class="tag">optional</span></dd>
</dl>

