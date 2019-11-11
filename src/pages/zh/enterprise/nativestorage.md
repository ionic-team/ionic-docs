---
title: Native Storage
template: enterprise-plugin
version: 2.3.2
minor: 2.3.X
---

The Native Storage plugin provides native storage of variables in Android (SharedPreferences) and iOS (UserDefaults).

<native-ent-install plugin-id="nativestorage" variables=""></native-ent-install>

## Index

### Classes

* [NativeStorage](#nativestorage)

* * *

## Classes

<a id="nativestorage"></a>

### NativeStorage

***usage***:

```typescript
import { NativeStorage } from '@ionic-enterprise/nativestorage/ngx';

constructor(private nativeStorage: NativeStorage) { }

...

this.nativeStorage.setItem('myitem', {property: 'value', anotherProperty: 'anotherValue'})
  .then(
    () => console.log('Stored item!'),
    error => console.error('Error storing item', error)
  );

this.nativeStorage.getItem('myitem')
  .then(
    data => console.log(data),
    error => console.error(error)
  );
```

<a id="nativestorage.clear"></a>

### clear

▸ **clear**(): `Promise`<`any`>

Removes all stored values.

**Returns:** `Promise`<`any`>

* * *

<a id="nativestorage.getitem"></a>

### getItem

▸ **getItem**(reference: *`string`*): `Promise`<`any`>

Gets a stored item

**Parameters:**

| Name      | Type     | Description |
| --------- | -------- | ----------- |
| reference | `string` | \-         |


**Returns:** `Promise`<`any`>

* * *

<a id="nativestorage.keys"></a>

### keys

▸ **keys**(): `Promise`<`any`>

Retrieving all keys

**Returns:** `Promise`<`any`>

* * *

<a id="nativestorage.remove"></a>

### remove

▸ **remove**(reference: *`string`*): `Promise`<`any`>

Removes a single stored item

**Parameters:**

| Name      | Type     | Description |
| --------- | -------- | ----------- |
| reference | `string` | \-         |


**Returns:** `Promise`<`any`>

* * *

<a id="nativestorage.setitem"></a>

### setItem

▸ **setItem**(reference: *`string`*, value: *`any`*): `Promise`<`any`>

Stores a value

**Parameters:**

| Name      | Type     | Description |
| --------- | -------- | ----------- |
| reference | `string` | \-         |
| value     | `any`    | \-         |


**Returns:** `Promise`<`any`>

* * *

* * *