---
sidebar_label: 'cordova build'
---

# ionic cordova build

Use Cordova to build for Android and iOS platform targets

```shell
$ ionic cordova build [options]
```

Like running `cordova build` directly, `ionic cordova build` also builds web assets from `ionic build` and provides friendly checks for Android and iOS platforms.

To pass additional options to the Cordova CLI, use the `--` separator after the Ionic CLI arguments.

The Cordova CLI requires a separator for platform-specific arguments for Android [builds](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#using-flags), so an additional separator is required for the Ionic CLI, but it is not required for iOS [builds](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html#using-flags). See the example commands for usage with separators. To avoid using flags, consider using `--buildConfig` with a **build.json** file.

## Examples

```shell
$ ionic cordova build android
$ ionic cordova build android --buildConfig=build.json
$ ionic cordova build android --prod --release -- -- --gradleArg=-PcdvBuildMultipleApks=true
$ ionic cordova build android --prod --release -- -- --keystore=filename.keystore --alias=myalias
$ ionic cordova build android --prod --release -- -- --minSdkVersion=21
$ ionic cordova build android --prod --release -- -- --versionCode=55
$ ionic cordova build android --prod --release --buildConfig=build.json
$ ionic cordova build ios
$ ionic cordova build ios --buildConfig=build.json
$ ionic cordova build ios --prod --release
$ ionic cordova build ios --prod --release -- --developmentTeam="ABCD" --codeSignIdentity="iPhone Developer" --packageType="app-store"
$ ionic cordova build ios --prod --release --buildConfig=build.json
```

## Inputs

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>platform</h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>
          The platform to build (e.g. <code>android</code>, <code>ios</code>)
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Options

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-build" id="option-build">
            --no-build
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>Do not invoke an Ionic build</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-debug" id="option-debug">
            --debug
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>Mark as a debug build</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-release" id="option-release">
            --release
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>Mark as a release build</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-device" id="option-device">
            --device
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>Deploy build to a device</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-emulator" id="option-emulator">
            --emulator
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>Deploy build to an emulator</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-prod" id="option-prod">
            --prod
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>
          Flag to use the <code>production</code> configuration
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Advanced Options

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-buildConfig" id="option-buildConfig">
            --buildConfig
            <span class="option-spec"> =&lt;file&gt;</span>
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <div>
          <p>Use the specified build configuration</p>
        </div>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-configuration" id="option-configuration">
            --configuration
            <span class="option-spec"> =&lt;conf&gt;</span>
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <div>
          <p>Specify the configuration to use.</p>
        </div>
      </td>
    </tr>
    <tr>
      <th>Aliases</th>
      <td>
        <code>-c</code>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-source-map" id="option-source-map">
            --source-map
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <div>
          <p>Output source maps</p>
        </div>
      </td>
    </tr>
  </tbody>
</table>
