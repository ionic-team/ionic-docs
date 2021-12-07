---
sidebar_label: 'ssh generate'
---

# ionic ssh generate

Generates a private and public SSH key pair

```shell
$ ionic ssh generate [options]
```

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
        <p>Destination of private key file</p>
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
          <a href="#option-type" id="option-type">
            --type
            <span class="option-spec"> =&lt;type&gt;</span>
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
            The type of key to generate: <code>ecdsa</code>, <code>ed25519</code>, <code>rsa</code>
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <th>Aliases</th>
      <td>
        <code>-t</code>
      </td>
    </tr>
    <tr>
      <th>Default</th>
      <td>rsa</td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-bits" id="option-bits">
            --bits
            <span class="option-spec"> =&lt;bits&gt;</span>
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
          <p>Number of bits in the key</p>
        </div>
      </td>
    </tr>
    <tr>
      <th>Aliases</th>
      <td>
        <code>-b</code>
      </td>
    </tr>
    <tr>
      <th>Default</th>
      <td>2048</td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-annotation" id="option-annotation">
            --annotation
            <span class="option-spec"> =&lt;annotation&gt;</span>
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
          <p>Annotation (comment) in public key. Your Ionic email address will be used</p>
        </div>
      </td>
    </tr>
    <tr>
      <th>Aliases</th>
      <td>
        <code>-C</code>
      </td>
    </tr>
  </tbody>
</table>
