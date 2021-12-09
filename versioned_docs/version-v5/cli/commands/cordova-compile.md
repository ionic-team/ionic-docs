---
sidebar_label: 'cordova compile'
---

# ionic cordova compile

Compile native platform code

```shell
$ ionic cordova compile [options]
```

Like running `cordova compile` directly, but provides friendly checks.

## Examples

```shell
$ ionic cordova compile ios
$ ionic cordova compile ios --device
$ ionic cordova compile android
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
          The platform to compile (<code>android</code>, <code>ios</code>)
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
</table>
