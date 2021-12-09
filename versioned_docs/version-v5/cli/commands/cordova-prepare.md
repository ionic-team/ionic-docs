---
sidebar_label: 'cordova prepare'
---

# ionic cordova prepare

Copies assets to Cordova platforms, preparing them for native builds

```shell
$ ionic cordova prepare [options]
```

`ionic cordova prepare` will do the following:

- Perform an Ionic build, which compiles web assets to **www/**.
- Copy the **www/** directory into your Cordova platforms.
- Transform **config.xml** into platform-specific manifest files.
- Copy icons and splash screens from **resources/** to into your Cordova platforms.
- Copy plugin files into specified platforms.

You may wish to use `ionic cordova prepare` if you run your project with Android Studio or Xcode.

## Examples

```shell
$ ionic cordova prepare
$ ionic cordova prepare ios
$ ionic cordova prepare android
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
          The platform you would like to prepare (e.g. <code>android</code>, <code>ios</code>)
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
