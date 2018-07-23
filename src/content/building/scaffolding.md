---
previousText: 'Starting'
previousUrl: '/docs/building/starting'
nextText: 'Migration'
nextUrl: '/docs/building/migration'
---

# Scaffolding out an App

<p class="intro" markdown="1">
Once an app is created by the Ionic CLI, the next step is to start building out features and components. The majority of the app will be developed in the `src/` directory.
</p>

## Project Structure

<figure>
![ionic angular project layout](/docs/assets/img/guides/scaffolding/src-directory-img.png)
<figcaption>This is based on an ionic/angular project</figcaption>
</figure>

The `src/` directory has items such as the `index.html` file, configuration files for tests, an asset folder for images, and the main `app/` directory for the app's code.

![app layout](/docs/assets/img/guides/scaffolding/src-directory-app-img.png)

The `src/app/` directory has a few more directories inside of it that contain components, pages, as well as additional features, like services.

## Generating New Features

The Ionic CLI can generate new app features with the [`ionic generate`](/docs/cli/generate) command. By running `ionic generate` in the command line, a selection prompt is displayed which lists the available features that can be generated.

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

After a selection is made, the Ionic CLI will prompt for a name. We highly recommend prefixing `name` with a shared path to maintain a healthy project structure as explained above. For example, for pages, use `pages/My New Page` instead of just `My New Page`.

> The recommended path prefix also allows any level of nesting, such as `pages/tabs/Main Tab`. It also allows you to scope components to pages by using `ionic g component "pages/about/User Card"`, for example.

<command-line>
    <command-prompt>ionic generate</command-prompt>
    <command-output>
        <span class="green">?</span> <span class="bold">What would you like to generate? <span class="cyan">page</span></span>
        <br />
        <span class="green">?</span> <span class="bold">Name/path (e.g. <span class="green">pages/&lt;name&gt;</span>):</span> pages/My New Page
    </command-output>
    <command-cursor blink></command-cursor>
</command-line>

Alternatively, the `type` and `name` of the generated feature can be entered on the command line:

<command-line>
    <command-prompt>ionic g page "pages/User Detail"</command-prompt>
    <command-output>
        &gt; <span class="green">ng generate page pages/user-detail</span>
        <br />
        <span class="green">CREATE</span> src/app/pages/user-detail/user-detail.module.ts (564 bytes)
        <br />
        <span class="green">CREATE</span> src/app/pages/user-detail/user-detail.page.scss (0 bytes)
        <br />
        <span class="green">CREATE</span> src/app/pages/user-detail/user-detail.page.html (138 bytes)
        <br />
        <span class="green">CREATE</span> src/app/pages/user-detail/user-detail.page.spec.ts (720 bytes)
        <br />
        <span class="green">CREATE</span> src/app/pages/user-detail/user-detail.page.ts (280 bytes)
        <br />
        <span class="bold">UPDATE</span> src/app/app-routing.module.ts (475 bytes)
        <br />
        [<span class="green bold">OK</span>] Generated page!
    </command-output>
</command-line>

The Ionic CLI uses the underlying framework tooling to stay close to best practices. For `ionic/angular`, the Angular CLI is used under the hood.

After creating the files and directories for the new page, the CLI will also update the router configuration to include the new page. This reduces the amount of manual work needed to keep the development lifecycle moving.

For more details, run `ionic g --help` from the command line or see [the documentation](/docs/cli/generate) for `ionic generate`.
