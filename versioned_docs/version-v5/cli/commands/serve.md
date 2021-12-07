---
sidebar_label: 'serve'
---

# ionic serve

Start a local dev server for app dev/testing

```shell
$ ionic serve [options]
```

Easily spin up a development server which launches in your browser. It watches for changes in your source files and automatically reloads with the updated build.

By default, `ionic serve` boots up a development server on `localhost`. To serve to your LAN, specify the `--external` option, which will use all network interfaces and print the external address(es) on which your app is being served.

Try the `--lab` option to see multiple platforms at once.

`ionic serve` uses the Angular CLI. Use `ng serve --help` to list all Angular CLI options for serving your app. See the `ng serve` [docs](https://angular.io/cli/serve) for explanations. Options not listed below are considered advanced and can be passed to the Angular CLI using the `--` separator after the Ionic CLI arguments. See the examples.

The dev server can use HTTPS via the `--ssl` option **(experimental)**. There are several known issues with HTTPS. See issue [#3305](https://github.com/ionic-team/ionic-cli/issues/3305).

## Examples

```shell
$ ionic serve
$ ionic serve --external
$ ionic serve --lab
$ ionic serve -- --proxy-config proxy.conf.json
```

## Options

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-ssl" id="option-ssl">
            --ssl
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>Use HTTPS for the dev server</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-prod" id="option-prod">
            --prod
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
          Flag to use the <code>production</code> configuration
        </p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-external" id="option-external">
            --external
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
          Host dev server on all network interfaces (i.e. <code>--host=0.0.0.0</code>)
        </p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-livereload" id="option-livereload">
            --no-livereload
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>Do not spin up dev server--just serve files</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-open" id="option-open">
            --no-open
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>Do not open a browser window</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-lab" id="option-lab">
            --lab
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>Test your apps on multiple platform types in the browser</p>
      </td>
    </tr>
    <tr>
      <th>Aliases</th>
      <td>
        <code>-l</code>
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
          <a href="#option-consolelogs" id="option-consolelogs">
            --consolelogs
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
          <p>Print app console logs to the terminal</p>
        </div>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-consolelogs-port" id="option-consolelogs-port">
            --consolelogs-port
            <span class="option-spec"> =&lt;port&gt;</span>
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
          <p>Use specific port for console logs server</p>
        </div>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-configuration" id="option-configuration">
            --configuration
            <span class="option-spec"> =&lt;conf&gt;</span>
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
          <p>Specify the configuration to use.</p>
        </div>
      </td>
    </tr>
    <tr>
      <th>Aliases</th>
      <td>
        <code>-c</code>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-source-map" id="option-source-map">
            --source-map
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
          <p>Output sourcemaps</p>
        </div>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-host" id="option-host">
            --host
            <span class="option-spec"> =&lt;host&gt;</span>
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
          <p>Use specific host for the dev server</p>
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
          <a href="#option-port" id="option-port">
            --port
            <span class="option-spec"> =&lt;port&gt;</span>
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
          <p>Use specific port for the dev server</p>
        </div>
      </td>
    </tr>
    <tr>
      <th>Aliases</th>
      <td>
        <code>-p</code>
      </td>
    </tr>
    <tr>
      <th>Default</th>
      <td>8100</td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-public-host" id="option-public-host">
            --public-host
            <span class="option-spec"> =&lt;host&gt;</span>
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
          <p>The host used for the browser or web view</p>
        </div>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-lab-host" id="option-lab-host">
            --lab-host
            <span class="option-spec"> =&lt;host&gt;</span>
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
          <p>Use specific host for Ionic Lab server</p>
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
          <a href="#option-lab-port" id="option-lab-port">
            --lab-port
            <span class="option-spec"> =&lt;port&gt;</span>
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
          <p>Use specific port for Ionic Lab server</p>
        </div>
      </td>
    </tr>
    <tr>
      <th>Default</th>
      <td>8200</td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-browser" id="option-browser">
            --browser
            <span class="option-spec"> =&lt;browser&gt;</span>
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
            Specifies the browser to use (<code>safari</code>, <code>firefox</code>, <code>google chrome</code>)
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <th>Aliases</th>
      <td>
        <code>-w</code>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-browseroption" id="option-browseroption">
            --browseroption
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
        <div>
          <p>
            Specifies a path to open to (<code>/#/tab/dash</code>)
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <th>Aliases</th>
      <td>
        <code>-o</code>
      </td>
    </tr>
  </tbody>
</table>
