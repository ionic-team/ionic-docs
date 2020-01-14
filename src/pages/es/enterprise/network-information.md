---
title: Network Information
template: enterprise-plugin
version: 2.0.1
minor: 2.0.X
---

The Network Information plugin provides access to network data on a device, such as connection type or when the device comes online or offline.

<native-ent-install plugin-id="network-information" variables=""></native-ent-install>

## Index

### Enumerations

* [Connection](#connection)

### Classes

* [Network](#network)

* * *

## Enumerations

<a id="connection"></a>

### Connection

**Connection**:

<a id="connection.cell"></a>

### CELL

**CELL**: = 6

* * *

<a id="connection.cell_2g"></a>

### CELL_2G

**CELL_2G**: = 3

* * *

<a id="connection.cell_3g"></a>

### CELL_3G

**CELL_3G**: = 4

* * *

<a id="connection.cell_4g"></a>

### CELL_4G

**CELL_4G**: = 5

* * *

<a id="connection.ethernet"></a>

### ETHERNET

**ETHERNET**: = 1

* * *

<a id="connection.none"></a>

### NONE

**NONE**: = 7

* * *

<a id="connection.unknown"></a>

### UNKNOWN

**UNKNOWN**: = 0

* * *

<a id="connection.wifi"></a>

### WIFI

**WIFI**: = 2

* * *

* * *

## Classes

<a id="network"></a>

### Network

***usage***:

```typescript
import { Network } from '@ionic-enterprise/network-information/ngx';

constructor(private network: Network) { }

...

// watch network for a disconnection
let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
  console.log('network was disconnected :-(');
});

// stop disconnect watch
disconnectSubscription.unsubscribe();

// watch network for a connection
let connectSubscription = this.network.onConnect().subscribe(() => {
  console.log('network connected!');
  // We just got a connection but we need to wait briefly
   // before we determine the connection type. Might need to wait.
  // prior to doing any api requests as well.
  setTimeout(() => {
    if (this.network.type === 'wifi') {
      console.log('we got a wifi connection, woohoo!');
    }
  }, 3000);
});

// stop connect watch
connectSubscription.unsubscribe();

```

***advanced***: The `type` property will return one of the following connection types: `unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`

<a id="network.connection"></a>

### Connection

**● Connection**: *`object`*

Constants for possible connection types

#### Type declaration

CELL: `string`

CELL_2G: `string`

CELL_3G: `string`

CELL_4G: `string`

ETHERNET: `string`

NONE: `string`

UNKNOWN: `string`

WIFI: `string`

* * *

<a id="network.downlinkmax"></a>

### downlinkMax

**● downlinkMax**: *`string`*

Downlink Max Speed

***returns***:

* * *

<a id="network.type"></a>

### type

**● type**: *`string`*

Connection type

***returns***:

* * *

<a id="network.onconnect"></a>

### onConnect

▸ **onConnect**(): `Observable`<`any`>

Get notified when the device goes online

**Returns:** `Observable`<`any`> Returns an observable.

* * *

<a id="network.ondisconnect"></a>

### onDisconnect

▸ **onDisconnect**(): `Observable`<`any`>

Get notified when the device goes offline

**Returns:** `Observable`<`any`> Returns an observable.

* * *

<a id="network.onchange"></a>

### onchange

▸ **onchange**(): `Observable`<`any`>

Returns an observable to watch connection changes

**Returns:** `Observable`<`any`>

* * *

* * *