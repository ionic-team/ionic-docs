---
sidebar_label: 'deploy build'
---

# ionic deploy build

Create a deploy build on Appflow

```shell
$ ionic deploy build [options]
```

This command creates a deploy build on Appflow. While the build is running, it prints the remote build log to the terminal.

Customizing the build:

- The `--environment` and `--channel` options can be used to customize the groups of values exposed to the build.

Apart from `--commit`, every option can be specified using the full name setup within the Appflow [Dashboard](https://dashboard.ionicframework.com).

## Examples

```shell
$ ionic deploy build
$ ionic deploy build --environment="My Custom Environment Name"
$ ionic deploy build --commit=2345cd3305a1cf94de34e93b73a932f25baac77c
$ ionic deploy build --channel="Master"
$ ionic deploy build --channel="Master" --channel="My Custom Channel"
```

## Options

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-environment" id="option-environment">
            --environment
            <span class="option-spec"> =&lt;name&gt;</span>
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>The group of environment variables exposed to your build</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-channel" id="option-channel">
            --channel
            <span class="option-spec"> =&lt;name&gt;</span>
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
          The channel you want to auto deploy the build to. This can be repeated multiple times if multiple channels
          need to be specified.
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
          <a href="#option-commit" id="option-commit">
            --commit
            <span class="option-spec"> =&lt;sha1&gt;</span>
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
          <p>Commit (defaults to HEAD)</p>
        </div>
      </td>
    </tr>
  </tbody>
</table>
