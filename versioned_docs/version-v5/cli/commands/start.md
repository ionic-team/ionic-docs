---
title: 'How to Create A New Application with Ionic Start for New Projects'
description: 'Learn how to create a new app project with Ionic Start. This command creates a working Ionic app that installs dependencies for you and sets up your project.'
sidebar_label: 'start'
---

# ionic start

Create a new project

```shell
$ ionic start [options]
```

This command creates a working Ionic app. It installs dependencies for you and sets up your project.

Running `ionic start` without any arguments will prompt you for information about your new project.

The first argument is your app's `name`. Don't worry--you can always change this later. The `--project-id` is generated from `name` unless explicitly specified.

The second argument is the `template` from which to generate your app. You can list all templates with the `--list` option. You can also specify a git repository URL for `template`, in which case the existing project will be cloned.

Use the `--type` option to start projects using older versions of Ionic. For example, you can start an Ionic 3 project with `--type=ionic-angular`. Use `--list` to see all project types and templates.

## Examples

```shell
$ ionic start
$ ionic start --list
$ ionic start myApp
$ ionic start myApp blank
$ ionic start myApp tabs --cordova
$ ionic start myApp tabs --capacitor
$ ionic start myApp super --type=ionic-angular
$ ionic start myApp blank --type=ionic1
$ ionic start cordovaApp tabs --cordova
$ ionic start "My App" blank
$ ionic start "Conference App" https://github.com/ionic-team/ionic-conference-app
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
          The name of your new project (e.g. <code>myApp</code>, <code>"My App"</code>)
        </p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>template</h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>
          The starter template to use (e.g. <code>blank</code>, <code>tabs</code>; use <code>--list</code> to see all)
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
          <a href="#option-list" id="option-list">
            --list
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>List available starter templates</p>
      </td>
    </tr>
    <tr>
      <th>Aliases</th>
      <td>
        <code>-l</code>
      </td>
    </tr>
  </tbody>
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
          Type of project to start (e.g. <code>angular</code>, <code>react</code>, <code>ionic-angular</code>,{' '}
          <code>ionic1</code>)
        </p>
      </td>
    </tr>
  </tbody>
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
        <p>Include Cordova integration</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-capacitor" id="option-capacitor">
            --capacitor
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>Include Capacitor integration</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-id" id="option-id">
            --id
            <span class="option-spec"> =&lt;id&gt;</span>
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>Specify an Ionic App ID to link</p>
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
          <a href="#option-deps" id="option-deps">
            --no-deps
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
          <p>Do not install npm/yarn dependencies</p>
        </div>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-git" id="option-git">
            --no-git
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
          <p>Do not initialize a git repo</p>
        </div>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-link" id="option-link">
            --link
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
          <p>Connect your new app to Ionic</p>
        </div>
      </td>
    </tr>
  </tbody>
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
          <p>Specify a slug for your app (used for the directory name and package name)</p>
        </div>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-package-id" id="option-package-id">
            --package-id
            <span class="option-spec"> =&lt;id&gt;</span>
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
          <p>Specify the bundle ID/application ID for your app (reverse-DNS notation)</p>
        </div>
      </td>
    </tr>
  </tbody>
</table>
