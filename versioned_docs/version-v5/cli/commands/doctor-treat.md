---
sidebar_label: 'doctor treat'
---

# ionic doctor treat

Attempt to fix issues in your Ionic project

```shell
$ ionic doctor treat [options]
```

This command detects and attempts to fix common issues. Before a fix is attempted, the steps are printed and a confirmation prompt is displayed.

Optionally supply the `id` argument to attempt to fix a single issue. Use `ionic doctor list` to list all known issues.

## Examples

```shell
$ ionic doctor treat
$ ionic doctor treat git-not-used
```

## Inputs

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>id</h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>The issue identifier</p>
      </td>
    </tr>
  </tbody>
</table>
