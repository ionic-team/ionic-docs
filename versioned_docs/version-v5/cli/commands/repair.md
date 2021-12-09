---
sidebar_label: 'repair'
---

# ionic repair

Remove and recreate dependencies and generated files

```shell
$ ionic repair [options]
```

This command may be useful when obscure errors or issues are encountered. It removes and recreates dependencies of your project.

For Cordova apps, it removes and recreates the generated native project and the native dependencies of your project.

## Options

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-cordova" id="option-cordova">
            --cordova
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>Only perform the repair steps for Cordova platforms and plugins.</p>
      </td>
    </tr>
  </tbody>
</table>
