---
sidebar_label: 'capacitor run'
---

# ionic capacitor run

Run an Ionic project on a connected device

```shell
$ ionic capacitor run [options]
```

`ionic capacitor run` will do the following:

- Perform `ionic build` (or run the dev server from `ionic serve` with the `--livereload` option)
- Copy web assets into the specified native platform
- Open the IDE for your native project (Xcode for iOS, Android Studio for Android)

When using the `--livereload` option and need to serve to your LAN, a device, or an emulator, use the `--external` option also. Otherwise, the web view tries to access `localhost`.

Once the web assets and configuration are copied into your native project, the app can run on devices and emulators/simulators using the native IDE. Unfortunately, programmatically building and launching the native project is not yet supported.

For Android and iOS, you can setup Remote Debugging on your device with browser development tools using these [docs](https://ionicframework.com/docs/developer-resources/developer-tips).

## Examples

```shell
$ ionic capacitor run
$ ionic capacitor run android
$ ionic capacitor run android -l --external
$ ionic capacitor run ios --livereload --external
$ ionic capacitor run ios --livereload-url=http://localhost:8100
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
          The platform to run (e.g. <code>android</code>, <code>ios</code>)
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
          <a href="#option-ssl" id="option-ssl">
            --ssl
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>Use HTTPS for the dev server</p>
      </td>
    </tr>
  </tbody>
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
        <p>Do not invoke Ionic build</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-open" id="option-open">
            --no-open
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>Do not invoke Capacitor open</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-external" id="option-external">
            --external
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
          Host dev server on all network interfaces (i.e. <code>--host=0.0.0.0</code>)
        </p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-livereload" id="option-livereload">
            --livereload
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>Spin up dev server to live-reload www files</p>
      </td>
    </tr>
    <tr>
      <th>Aliases</th>
      <td>
        <code>-l</code>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-livereload-url" id="option-livereload-url">
            --livereload-url
            <span class="option-spec"> =&lt;url&gt;</span>
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>Provide a custom URL to the dev server</p>
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
          <a href="#option-consolelogs" id="option-consolelogs">
            --consolelogs
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
          <p>Print app console logs to the terminal</p>
        </div>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-consolelogs-port" id="option-consolelogs-port">
            --consolelogs-port
            <span class="option-spec"> =&lt;port&gt;</span>
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
          <p>Use specific port for console logs server</p>
        </div>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-host" id="option-host">
            --host
            <span class="option-spec"> =&lt;host&gt;</span>
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
          <p>Use specific host for the dev server</p>
        </div>
      </td>
    </tr>
    <tr>
      <th>Default</th>
      <td>localhost</td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-port" id="option-port">
            --port
            <span class="option-spec"> =&lt;port&gt;</span>
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
          <p>Use specific port for the dev server</p>
        </div>
      </td>
    </tr>
    <tr>
      <th>Aliases</th>
      <td>
        <code>-p</code>
      </td>
    </tr>
    <tr>
      <th>Default</th>
      <td>8100</td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-public-host" id="option-public-host">
            --public-host
            <span class="option-spec"> =&lt;host&gt;</span>
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
          <p>The host used for the browser or web view</p>
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
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-watch" id="option-watch">
            --watch
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
          <p>Rebuild when files change</p>
        </div>
      </td>
    </tr>
  </tbody>
</table>
