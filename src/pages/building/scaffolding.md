---
previousText: 'Previewing'
previousUrl: '/docs/developing/previewing'
nextText: 'Developing for iOS'
nextUrl: '/docs/developing/ios'
contributors:
  - mhartington
  - brandyscarney
---

# Scaffolding

Once an app is created by the Ionic CLI, the next step is to start building out features and components. The majority of the app will be developed in the `src/app/` directory.

## Project Structure

<file-tree>
    <file-tree-directory name="src">
        <file-tree-directory name="app" collapsed></file-tree-directory>
        <file-tree-directory name="assets" collapsed></file-tree-directory>
        <file-tree-directory name="environments" collapsed></file-tree-directory>
        <file-tree-directory name="theme" collapsed></file-tree-directory>
        <file-tree-file name="global.scss"></file-tree-file>
        <file-tree-file name="index.html"></file-tree-file>
        <file-tree-file name="main.ts"></file-tree-file>
        <file-tree-file name="polyfills.ts"></file-tree-file>
        <file-tree-file name="test.ts"></file-tree-file>
        <file-tree-file name="zone-flags.ts"></file-tree-file>
    </file-tree-directory>
</file-tree>

The `src/` directory has items such as the `index.html` file, configuration files for tests, an asset folder for images, and the main `app/` directory for the app's code.

<file-tree>
    <file-tree-directory name="src">
        <file-tree-directory name="app">
            <file-tree-file name="app-routing.module.ts"></file-tree-file>
            <file-tree-file name="app.component.html"></file-tree-file>
            <file-tree-file name="app.component.spec.ts"></file-tree-file>
            <file-tree-file name="app.component.ts"></file-tree-file>
            <file-tree-file name="app.module.ts"></file-tree-file>
        </file-tree-directory>
    </file-tree-directory>
</file-tree>

The `src/app/` directory contains the root app component and module as well as additional directories that contain app features such as pages, components, services, etc.

## Generating New Features

The Ionic CLI can generate new app features with the [`ionic generate`](/docs/cli/commands/generate) command. By running `ionic generate` in the command line, a selection prompt is displayed which lists the available features that can be generated.

<command-line>
    <command-prompt>ionic generate</command-prompt>
    <command-output>
        <span class="green">?</span> <span class="bold">What would you like to generate?</span>
        <br />
        <span class="cyan bold">❯ page</span>
        <br />
        &nbsp;&nbsp;component
        <br />
        &nbsp;&nbsp;service
        <br />
        &nbsp;&nbsp;module
        <br />
        &nbsp;&nbsp;class
        <br />
        &nbsp;&nbsp;directive
        <br />
        &nbsp;&nbsp;guard
    </command-output>
</command-line>

After a selection is made, the Ionic CLI will prompt for a name. The name can be a path, allowing easy generation of features within an organized project structure.

> Any level of nesting is allowed, such as `portfolio/intro`. You can easily scope components to pages by using `ionic g component "portfolio/intro/About Me"`, for example.

<command-line>
    <command-prompt>ionic generate</command-prompt>
    <command-output>
        <span class="green">?</span> <span class="bold">What would you like to generate? <span class="cyan">page</span></span>
        <br />
        <span class="green">?</span> <span class="bold">Name/path of <span class="cyan">page</span>:</span> portfolio
    </command-output>
    <command-cursor blink></command-cursor>
</command-line>

Alternatively, the `type` and `name` of the generated feature can be entered on the command line:

<command-line>
    <command-prompt>ionic g page "User Detail"</command-prompt>
    <command-output>
        &gt; <span class="cyan">ng generate page "User Detail"</span>
        <br />
        <span class="green">CREATE</span> src/app/user-detail/user-detail.module.ts (564 bytes)
        <br />
        <span class="green">CREATE</span> src/app/user-detail/user-detail.page.scss (0 bytes)
        <br />
        <span class="green">CREATE</span> src/app/user-detail/user-detail.page.html (138 bytes)
        <br />
        <span class="green">CREATE</span> src/app/user-detail/user-detail.page.spec.ts (720 bytes)
        <br />
        <span class="green">CREATE</span> src/app/user-detail/user-detail.page.ts (280 bytes)
        <br />
        <span class="bold">UPDATE</span> src/app/app-routing.module.ts (475 bytes)
        <br />
        [<span class="green bold">OK</span>] Generated page!
    </command-output>
</command-line>

The Ionic CLI uses the underlying framework tooling to stay close to best practices. For `@ionic/angular`, the Angular CLI is used under the hood.

After creating the files and directories for the new page, the CLI will also update the router configuration to include the new page. This reduces the amount of manual work needed to keep the development lifecycle moving.

For more details, run `ionic g --help` from the command line or see [the documentation](/docs/cli/commands/generate) for `ionic generate`.
