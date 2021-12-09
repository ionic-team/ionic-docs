---
sidebar_label: 'link'
---

# ionic link

Connect local apps to Ionic

```shell
$ ionic link [options]
```

Link apps on Appflow to local Ionic projects with this command.

If the `id` argument is excluded, this command will prompt you to select an app from Appflow.

Appflow uses a git-based workflow to manage app updates. During the linking process, select **GitHub** (recommended) or **Appflow** as a git host. See our [documentation](https://ionicframework.com/docs/appflow/basics/git) for more information.

Ultimately, this command sets the **id** property in **./ionic.config.json**, which marks this app as linked.

If you are having issues linking, please get in touch with our [Support](https://ion.link/support-request).

## Examples

```shell
$ ionic link
$ ionic link a1b2c3d4
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
        <p>
          The Appflow ID of the app to link (e.g. <code>a1b2c3d4</code>)
        </p>
      </td>
    </tr>
  </tbody>
</table>
