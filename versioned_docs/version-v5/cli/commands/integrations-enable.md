---
sidebar_label: 'integrations enable'
---

# ionic integrations enable

Add & enable integrations to your app

```shell
$ ionic integrations enable [options]
```

Integrations, such as Cordova, can be enabled with this command. If the integration has never been added to the project, `ionic integrations enable` will download and add the integration.

Integrations can be re-added with the `--add` option.

## Inputs

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>name</h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>
          The integration to enable (e.g. <code>capacitor</code>, <code>cordova</code>, <code>enterprise</code>)
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
          <a href="#option-add" id="option-add">
            --add
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>Download and add the integration even if enabled</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-root" id="option-root">
            --root
            <span class="option-spec"> =&lt;path&gt;</span>
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>Specify an alternative destination to download into when adding</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-quiet" id="option-quiet">
            --quiet
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>Less verbose output, ignore integration errors</p>
      </td>
    </tr>
  </tbody>
</table>
