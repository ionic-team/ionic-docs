---
sidebar_label: 'config get'
---

# ionic config get

Print config values

```shell
$ ionic config get [options]
```

This command reads and prints configuration values from the project's **./ionic.config.json** file. It can also operate on the global CLI configuration (**~/.ionic/config.json**) using the `--global` option.

For nested properties, separate nest levels with dots. For example, the property name `integrations.cordova` will look in the **integrations** object for the **cordova** property.

Without a `property` argument, this command prints out the entire config.

For multi-app projects, this command is scoped to the current project by default. To operate at the root of the project configuration file instead, use the `--root` option.

If you are using this command programmatically, you can use the `--json` option.

This command will sanitize config output for known sensitive fields (disabled when using `--json`).

## Examples

```shell
$ ionic config get
$ ionic config get id
$ ionic config get --global user.email
$ ionic config get -g npmClient
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
        <p>The property name you wish to get</p>
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
          <p>Output config values in JSON</p>
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
