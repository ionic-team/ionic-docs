---
sidebar_label: 'init'
---

# ionic init

Initialize existing projects with Ionic

```shell
$ ionic init [options]
```

This command will initialize an Ionic app within the current directory. Usually, this means an `ionic.config.json` file is created. If used within a multi-app project, the app is initialized in the root `ionic.config.json`.

`ionic init` will prompt for a project name and then proceed to determine the type of your project. You can specify the `name` argument and `--type` option to provide these values via command-line.

If the `--multi-app` flag is specified, this command will initialize your project as a multi-app project, allowing for apps within monorepos and unconventional repository structures. See the multi-app [docs](https://ionicframework.com/docs/cli/configuration#multi-app-projects) for details. Once a multi-app project is initialized, you can run `ionic init` again within apps in your project to initialize them.

## Examples

```shell
$ ionic init
$ ionic init "My App"
$ ionic init "My App" --type=angular
$ ionic init --multi-app
```

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
          The name of your project (e.g. <code>myApp</code>, <code>"My App"</code>)
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
        <p>
          Type of project (e.g. <code>angular</code>, <code>react</code>, <code>vue</code>, <code>custom</code>)
        </p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-force" id="option-force">
            --force
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>Initialize even if a project already exists</p>
      </td>
    </tr>
    <tr>
      <th>Aliases</th>
      <td>
        <code>-f</code>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-multi-app" id="option-multi-app">
            --multi-app
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>Initialize a multi-app project</p>
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
          <a href="#option-project-id" id="option-project-id">
            --project-id
            <span class="option-spec"> =&lt;slug&gt;</span>
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
          <p>Specify a slug for your app</p>
        </div>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-default" id="option-default">
            --default
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
          <p>Mark the initialized app as the default project</p>
        </div>
      </td>
    </tr>
  </tbody>
</table>
