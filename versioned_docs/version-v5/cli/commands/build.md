---
title: 'Angular NG Build Configuration to Build Ionic Apps | ionic build'
description: 'Build web assets and prepare your Ionic app for any platform targets. Ionic build uses the Angular CLI—see the ng build docs for how to use the configuration.'
sidebar_label: 'build'
---

# ionic build

Build web assets and prepare your app for any platform targets

```shell
$ ionic build [options]
```

`ionic build` will perform an Ionic build, which compiles web assets and prepares them for deployment.

`ionic build` uses the Angular CLI. Use `ng build --help` to list all Angular CLI options for building your app. See the `ng build` [docs](https://angular.io/cli/build) for explanations. Options not listed below are considered advanced and can be passed to the `ng` CLI using the `--` separator after the Ionic CLI arguments. See the examples.

## Examples

```shell
$ ionic build
$ ionic build --prod
$ ionic build --watch
```

## Options

<table className="reference-table">
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
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-engine" id="option-engine">
            --engine
            <span class="option-spec"> =&lt;engine&gt;</span>
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
          <p>
            Target engine (e.g. <code>browser</code>, <code>cordova</code>)
          </p>
        </div>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-platform" id="option-platform">
            --platform
            <span class="option-spec"> =&lt;platform&gt;</span>
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
          <p>
            Target platform on chosen engine (e.g. <code>ios</code>, <code>android</code>)
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>
