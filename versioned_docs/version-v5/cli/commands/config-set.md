---
sidebar_label: 'config set'
---

# ionic config set

Set config values

```shell
$ ionic config set [options]
```

This command writes configuration values to the project's **./ionic.config.json** file. It can also operate on the global CLI configuration (**~/.ionic/config.json**) using the `--global` option.

For nested properties, separate nest levels with dots. For example, the property name `integrations.cordova` will look in the **integrations** object for the **cordova** property.

For multi-app projects, this command is scoped to the current project by default. To operate at the root of the project configuration file instead, use the `--root` option.

This command will attempt to coerce `value` into a suitable JSON type. If it is JSON-parsable, such as `123`, `true`, `[]`, etc., then it takes the parsed result. Otherwise, the value is interpreted as a string. For stricter input, use `--json`, which will error with non-JSON values.

By default, if `property` exists and is an object or an array, the value is not overwritten. To disable this check and always overwrite the property, use `--force`.

## Examples

```shell
$ ionic config set name newAppName
$ ionic config set name "\"newAppName\"" --json
$ ionic config set -g interactive false
```

## Inputs

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>property</h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>The property name you wish to set</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>value</h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>The new value of the given property</p>
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
          <a href="#option-global" id="option-global">
            --global
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>Use global CLI config</p>
      </td>
    </tr>
    <tr>
      <th>Aliases</th>
      <td>
        <code>-g</code>
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
          <a href="#option-json" id="option-json">
            --json
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
            Always interpret <code>value</code> as JSON
          </p>
        </div>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-force" id="option-force">
            --force
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
          <p>Always overwrite existing values</p>
        </div>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-root" id="option-root">
            --root
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
            Operate on root of <strong>./ionic.config.json</strong>
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>
