---
sidebar_label: 'ssl generate'
---

# ionic ssl generate

Generates an SSL key & certificate

```shell
$ ionic ssl generate [options]
```

Uses OpenSSL to create a self-signed certificate for **localhost** (by default).

After the certificate is generated, you will still need to add it to your system or browser as a trusted certificate.

The default directory for `--key-path` and `--cert-path` is `.ionic/ssl/`.

## Options

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-key-path" id="option-key-path">
            --key-path
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
        <p>Destination of private key file</p>
      </td>
    </tr>
    <tr>
      <th>Default</th>
      <td>./.ionic/ssl/key.pem</td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-cert-path" id="option-cert-path">
            --cert-path
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
        <p>Destination of certificate file</p>
      </td>
    </tr>
    <tr>
      <th>Default</th>
      <td>./.ionic/ssl/cert.pem</td>
    </tr>
  </tbody>
</table>

## Advanced Options

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-country-name" id="option-country-name">
            --country-name
            <span class="option-spec"> =&lt;C&gt;</span>
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
          <p>The country name (C) of the SSL certificate</p>
        </div>
      </td>
    </tr>
    <tr>
      <th>Default</th>
      <td>US</td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-state-or-province-name" id="option-state-or-province-name">
            --state-or-province-name
            <span class="option-spec"> =&lt;ST&gt;</span>
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
          <p>The state or province name (ST) of the SSL certificate</p>
        </div>
      </td>
    </tr>
    <tr>
      <th>Default</th>
      <td>Wisconsin</td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-locality-name" id="option-locality-name">
            --locality-name
            <span class="option-spec"> =&lt;L&gt;</span>
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
          <p>The locality name (L) of the SSL certificate</p>
        </div>
      </td>
    </tr>
    <tr>
      <th>Default</th>
      <td>Madison</td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-organization-name" id="option-organization-name">
            --organization-name
            <span class="option-spec"> =&lt;O&gt;</span>
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
          <p>The organization name (O) of the SSL certificate</p>
        </div>
      </td>
    </tr>
    <tr>
      <th>Default</th>
      <td>Ionic</td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-common-name" id="option-common-name">
            --common-name
            <span class="option-spec"> =&lt;CN&gt;</span>
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
          <p>The common name (CN) of the SSL certificate</p>
        </div>
      </td>
    </tr>
    <tr>
      <th>Default</th>
      <td>localhost</td>
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
</table>
