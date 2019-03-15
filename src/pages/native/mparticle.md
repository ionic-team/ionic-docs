# Ionic mParticle Integration for Capacitor

This plugin provides for easy integration with the [mParticle](https://www.mparticle.com/) SDK in your capacitor app.


## Installation

<command-line>
<command-prompt>ionic enterprise register --key=MY_PRODUCT_KEY</command-prompt>
<command-prompt>npm install @ionic-enterprise/capacitor-mparticle-integration</command-prompt>
</command-line>

## Configuration

In `capacitor.config.json` add your key and secret

```json
"plugins": {
    "CapacitorMparticleIntegration": {
      "key": "my key",
      "secret": "my secret"
    }
}
```

## Register plugin for Android

In the `init` method of `MainActivity.java` add:
```java
add(CapacitorMparticleIntegration.class);
```

## Register plugin for iOS

Plugin is auto-registered on iOS

