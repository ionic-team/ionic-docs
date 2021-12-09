---
title: 'ionic cordova platform: Remove, Add, & Manage Cordova Platforms'
description: 'Manage, add, and remove Cordova platforms with ionic cordova platform. Like running cordova directly, with added resources and providing friendly checks.'
sidebar_label: 'cordova platform'
---

# ionic cordova platform

Manage Cordova platform targets

```shell
$ ionic cordova platform [options]
```

Like running `cordova platform` directly, but adds default Ionic icons and splash screen resources (during `add`) and provides friendly checks.

## Examples

```shell
$ ionic cordova platform
$ ionic cordova platform add ios
$ ionic cordova platform add android
$ ionic cordova platform rm ios
```

## Inputs

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>action</h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>
          <code>add</code>, <code>remove</code>, or <code>update</code> a platform; <code>ls</code>, <code>check</code>,
          or <code>save</code> all project platforms
        </p>
      </td>
    </tr>
  </tbody>
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
          The platform that you would like to add (<code>android</code>, <code>ios</code>)
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
          <a href="#option-resources" id="option-resources">
            --no-resources
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
          Do not pregenerate icons and splash screen resources (corresponds to <code>add</code>)
        </p>
      </td>
    </tr>
  </tbody>
</table>
