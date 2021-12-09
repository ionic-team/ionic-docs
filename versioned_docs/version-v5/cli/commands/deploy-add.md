---
sidebar_label: 'deploy add'
---

# ionic deploy add

Adds Appflow Deploy to the project

```shell
$ ionic deploy add [options]
```

This command adds the Appflow Deploy plugin (`cordova-plugin-ionic`) for both Capacitor and Cordova projects.

For Capacitor projects it runs all the steps necessary to install the plugin, sync with the native projects and add the configuration to the proper iOS and Android configuration files.

For Cordova projects it just takes care of running the proper Cordova CLI command with the submitted parameters.

## Examples

```shell
$ ionic deploy add
$ ionic deploy add --app-id=abcd1234 --channel-name="Master" --update-method=background
$ ionic deploy add --max-store=2 --min-background-duration=30
$ ionic deploy add --app-id=abcd1234 --channel-name="Master" --update-method=background --max-store=2 --min-background-duration=30
```

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
    <tr>
      <th>Default</th>
      <td>2</td>
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
    <tr>
      <th>Default</th>
      <td>30</td>
    </tr>
  </tbody>
</table>
