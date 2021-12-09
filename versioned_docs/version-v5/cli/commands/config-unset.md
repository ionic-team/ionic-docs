---
sidebar_label: 'config unset'
---

# ionic config unset

Delete config values

```shell
$ ionic config unset [options]
```

This command deletes configuration values from the project's **./ionic.config.json** file. It can also operate on the global CLI configuration (**~/.ionic/config.json**) using the `--global` option.

For nested properties, separate nest levels with dots. For example, the property name `integrations.cordova` will look in the **integrations** object for the **cordova** property.

For multi-app projects, this command is scoped to the current project by default. To operate at the root of the project configuration file instead, use the `--root` option.

## Examples

```shell
$ ionic config unset
$ ionic config unset type
$ ionic config unset --global git.setup
$ ionic config unset -g interactive
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
        <p>The property name you wish to delete</p>
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
