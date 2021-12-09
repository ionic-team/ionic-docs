---
sidebar_label: 'package deploy'
---

# ionic package deploy

Deploys a binary to a destination, such as an app store using Appflow

```shell
$ ionic package deploy [options]
```

This command deploys a binary to a destination using Appflow. While running, the remote log is printed to the terminal.

The command takes two parameters: the numeric ID of the package build that previously created the binary and the name of the destination where the binary is going to be deployed.
Both can be retrieved from the [Dashboard](https://dashboard.ionicframework.com).

## Examples

```shell
$ ionic package deploy 123456789 "My app store destination"
```

## Inputs

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>build-id</h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>The build id of the desired successful package build</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>destination</h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>The destination to deploy the build artifact to the app store</p>
      </td>
    </tr>
  </tbody>
</table>
