# Ionic mParticle Integration for Capacitor

The mParticle plugin provides easy integration with the [mParticle](https://www.mparticle.com/) SDK in your Capacitor app.

## Installation

<command-line>
<command-prompt>ionic enterprise register</command-prompt>
<command-prompt>npm install @ionic-enterprise/capacitor-mparticle-integration</command-prompt>
<command-prompt>npx cap sync</command-prompt>
</command-line>

## Configuration

In `capacitor.config.json` add your keys, secrets, `environment`, `logLevel` and `bridgeName`.

`environment` is optional, if not provided mParticle will auto detect it. Possible values are `"development"` and `"production"`.

`logLevel` is optional. It allows to configure mParticke SDK log level. If not provided, mParticle won't show any logs. Possible values are `"debug"`, `"error"`, `"verbose"` and `"warning"`.

`bridgeName` is optional. If set, it has to match the `requiredWebviewBridgeName` on the mParticle SDK initialization.

```json
"plugins": {
    "CapacitorMparticleIntegration": {
      "ios-key": "my iOS key",
      "ios-secret": "my iOS secret",
      "android-key": "my Android key",
      "android-secret": "my Android secret",
      "environment": "development",
      "bridgeName": "mycustombridgename",
      "logLevel": "warning"
    }
}
```

In the javascript mParticle initialization code add `useNativeSdk: true` and `requiredWebviewBridgeName` with a value that matches `bridgeName` on the plugin preferences.

```
window.mParticle = {
  config: {
    useNativeSdk: true,
    requiredWebviewBridgeName: "mycustombridgename"
  }
};
```

## Register plugin for Android

In the `init` method of `MainActivity.java` add:
```java
add(CapacitorMparticleIntegration.class);
```

## Register plugin for iOS

Plugin is auto-registered on iOS.