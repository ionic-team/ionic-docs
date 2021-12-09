---
sidebar_label: 'deploy configure'
---

# ionic deploy configure

Overrides Appflow Deploy configuration

```shell
$ ionic deploy configure [options]
```

This command overrides configuration for the Appflow Deploy plugin (`cordova-plugin-ionic`) in Capacitor projects.

For Capacitor projects, if the plugin is already installed, it overrides the configuration variables in the native projects.

For Cordova projects this is not implemented because it is better to reinstall the plugin with the different parameters and let Cordova deal with the changes.

## Examples

```shell
$ ionic deploy configure
$ ionic deploy configure --app-id=abcd1234 --channel-name="Master" --update-method=background
$ ionic deploy configure --max-store=2 --min-background-duration=30
$ ionic deploy configure --app-id=abcd1234 --channel-name="Master" --update-method=background --max-store=2 --min-background-duration=30
$ ionic deploy configure android
$ ionic deploy configure ios
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
          The native platform (e.g. <code>ios</code>, <code>android</code>)
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
          <a href="#option-app-id" id="option-app-id">
            --app-id
            <span class="option-spec"> =&lt;id&gt;</span>
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>Your Appflow app ID</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-channel-name" id="option-channel-name">
            --channel-name
            <span class="option-spec"> =&lt;name&gt;</span>
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>The channel to check for updates from</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-update-method" id="option-update-method">
            --update-method
            <span class="option-spec"> =&lt;name&gt;</span>
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>The update method that dictates the behavior of the plugin</p>
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
          <a href="#option-max-store" id="option-max-store">
            --max-store
            <span class="option-spec"> =&lt;quantity&gt;</span>
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
          <p>The maximum number of downloaded versions to store on the device</p>
        </div>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-min-background-duration" id="option-min-background-duration">
            --min-background-duration
            <span class="option-spec"> =&lt;seconds&gt;</span>
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
          <p>The minimum duration after which the app checks for an update in the background</p>
        </div>
      </td>
    </tr>
  </tbody>
</table>
