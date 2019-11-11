---
title: Globalization
template: enterprise-plugin
version: 1.11.0
minor: 1.11.X
---

The Globalization plugin provides access to user information including locale, language, and time zone.

<native-ent-install plugin-id="globalization" variables=""></native-ent-install>

## Index

### Classes

* [Globalization](#globalization)

### Interfaces

* [GlobalizationOptions](#globalizationoptions)

---

## Classes

<a id="globalization"></a>

### Globalization

*__usage__*:
 ```typescript
import { Globalization } from '@ionic-enterprise/globalization/ngx';

constructor(private globalization: Globalization) { }

...

this.globalization.getPreferredLanguage()
  .then(res => console.log(res))
  .catch(e => console.log(e));

```

*__interfaces__*: GlobalizationOptions

<a id="globalization.datetostring"></a>

### dateToString

▸ **dateToString**(date: *`Date`*, options: *[GlobalizationOptions](#globalizationoptions)*): `Promise`<`object`>

Converts date to string

**Parameters:**

| Name    | Type                                          | Description                                       |
| ------- | --------------------------------------------- | ------------------------------------------------- |
| date    | `Date`                                        | Date you wish to convert                          |
| options | [GlobalizationOptions](#globalizationoptions) | Options for the converted date. Length, selector. |

**Returns:** `Promise`<`object`>
> } Returns a promise when the date has been converted.

___

<a id="globalization.getcurrencypattern"></a>

### getCurrencyPattern

▸ **getCurrencyPattern**(currencyCode: *`string`*): `Promise`<`object`>

Returns a pattern string to format and parse currency values according to the client's user preferences and ISO 4217 currency code.

**Parameters:**

| Name         | Type     | Description     |
| ------------ | -------- | --------------- |
| currencyCode | `string` | Currency Code.A |

**Returns:** `Promise`<`object`>
> }

___

<a id="globalization.getdatenames"></a>

### getDateNames

▸ **getDateNames**(options: *`object`*): `Promise`<`object`>

Returns an array of the names of the months or days of the week, depending on the client's user preferences and calendar.

**Parameters:**

**options: `object`**

Object with type (narrow or wide) and item (month or days).

| Name | Type     |
| ---- | -------- |
| item | `string` |
| type | `string` |

**Returns:** `Promise`<`object`>
> } Returns a promise.

___

<a id="globalization.getdatepattern"></a>

### getDatePattern

▸ **getDatePattern**(options: *[GlobalizationOptions](#globalizationoptions)*): `Promise`<`object`>

Returns a pattern string to format and parse dates according to the client's user preferences.

**Parameters:**

| Name    | Type                                          | Description                                |
| ------- | --------------------------------------------- | ------------------------------------------ |
| options | [GlobalizationOptions](#globalizationoptions) | Object with the format length and selector |

**Returns:** `Promise`<`object`>
> } Returns a promise.

___

<a id="globalization.getfirstdayofweek"></a>

### getFirstDayOfWeek

▸ **getFirstDayOfWeek**(): `Promise`<`object`>

Returns the first day of the week according to the client's user preferences and calendar.

**Returns:** `Promise`<`object`>
> } returns a promise with the value

___

<a id="globalization.getlocalename"></a>

### getLocaleName

▸ **getLocaleName**(): `Promise`<`object`>

Returns the BCP 47 compliant locale identifier string to the successCallback with a properties object as a parameter.

**Returns:** `Promise`<`object`>
> }

___

<a id="globalization.getnumberpattern"></a>

### getNumberPattern

▸ **getNumberPattern**(options: *`object`*): `Promise`<`object`>

Returns a pattern string to format and parse numbers according to the client's user preferences.

**Parameters:**

**options: `object`**

Can be decimal, percent, or currency.

| Name | Type     |
| ---- | -------- |
| type | `string` |

**Returns:** `Promise`<`object`>
> }

___

<a id="globalization.getpreferredlanguage"></a>

### getPreferredLanguage

▸ **getPreferredLanguage**(): `Promise`<`object`>

Returns the BCP-47 compliant language identifier tag to the successCallback with a properties object as a parameter. That object should have a value property with a String value.

**Returns:** `Promise`<`object`>
> }

___

<a id="globalization.isdaylightsavingstime"></a>

### isDayLightSavingsTime

▸ **isDayLightSavingsTime**(date: *`Date`*): `Promise`<`object`>

Indicates whether daylight savings time is in effect for a given date using the client's time zone and calendar.

**Parameters:**

| Name | Type   | Description     |
| ---- | ------ | --------------- |
| date | `Date` | Date to process |

**Returns:** `Promise`<`object`>
> } reutrns a promise with the value

___

<a id="globalization.numbertostring"></a>

### numberToString

▸ **numberToString**(numberToConvert: *`number`*, options: *`object`*): `Promise`<`object`>

Returns a number formatted as a string according to the client's user preferences.

**Parameters:**

**numberToConvert: `number`**

The number to convert

**options: `object`**

Object with property `type` that can be set to: decimal, percent, or currency.

| Name | Type     |
| ---- | -------- |
| type | `string` |

**Returns:** `Promise`<`object`>

___

<a id="globalization.stringtodate"></a>

### stringToDate

▸ **stringToDate**(dateString: *`string`*, options: *[GlobalizationOptions](#globalizationoptions)*): `Promise`<`object`>

Parses a date formatted as a string, according to the client's user preferences and calendar using the time zone of the client, and returns the corresponding date object.

**Parameters:**

| Name       | Type                                          | Description                                       |
| ---------- | --------------------------------------------- | ------------------------------------------------- |
| dateString | `string`                                      | Date as a string to be converted                  |
| options    | [GlobalizationOptions](#globalizationoptions) | Options for the converted date. Length, selector. |

**Returns:** `Promise`<`object`>
> } Returns a promise when the date has been converted.

___

<a id="globalization.stringtonumber"></a>

### stringToNumber

▸ **stringToNumber**(stringToConvert: *`string`*, options: *`object`*): `Promise`<`object`>

**Parameters:**

**stringToConvert: `string`**

String you want to conver to a number

**options: `object`**

The type of number you want to return. Can be decimal, percent, or currency.

| Name | Type     |
| ---- | -------- |
| type | `string` |

**Returns:** `Promise`<`object`>
> } Returns a promise with the value.

___

___

## Interfaces

<a id="globalizationoptions"></a>

### GlobalizationOptions

**GlobalizationOptions**: 

<a id="globalizationoptions.formatlength"></a>

### formatLength

**● formatLength**: *`string`*

___

<a id="globalizationoptions.selector"></a>

### selector

**● selector**: *`string`*

___

___

