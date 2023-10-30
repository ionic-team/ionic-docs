
This plugin enables communication between a phone and Bluetooth Low Energy (BLE) peripherals.

The plugin provides a simple JavaScript API for iOS and Android.

- Scan for peripherals
- Connect to a peripheral
- Read the value of a characteristic
- Write new value to a characteristic
- Get notified when characteristic's value changes

Advertising information is returned when scanning for peripherals. Service, characteristic, and property info is returned when connecting to a peripheral. All access is via service and characteristic UUIDs. The plugin manages handles internally.

Simultaneous connections to multiple peripherals are supported.
