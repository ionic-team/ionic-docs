---
sidebar_label: 'ssh use'
---

# ionic ssh use

Set your active Ionic SSH key

```shell
$ ionic ssh use [options]
```

This command modifies the SSH configuration file (**~/.ssh/config**) to set an active private key for the **git.ionicjs.com** host. Read more about SSH configuration by running the `man ssh_config` command or by visiting online man [pages](https://linux.die.net/man/5/ssh_config).

Before making changes, `ionic ssh use` will print a diff and ask for permission to write the file.

## Inputs

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>key-path</h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>Location of private key file to use</p>
      </td>
    </tr>
  </tbody>
</table>
