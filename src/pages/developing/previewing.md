---
previousText: 'Starting'
previousUrl: '/docs/developing/starting'
nextText: 'Scaffolding'
nextUrl: '/docs/developing/scaffolding'
---

# Previewing

There are many different options to test native functionality depending on your target platforms and needs.

* Run locally in a web browser (using [Platform Detection](/docs/core-concepts/cross-platform) for native functionality)
* [Deploy to iOS](/docs/developing/ios)
* [Deploy to Android](/docs/developing/android)

## Run Locally in a Web Browser

One of the most powerful features of Ionic is that the majority of your app development can happen right in a browser on your desktop. With full access to traditional web development tools (Chrome/Safari/Firefox dev tools), you can write code then test/debug it quickly without having to recompile or deploy to a simulator or device.

To do so, run `ionic serve` from the command line in the project's directory:

<command-line>
    <command-prompt>ionic serve</command-prompt>
    <command-output>
        > <span class="cyan">ng run app:serve --host=0.0.0.0 --port=8100</span>
        <br />
        <br />
        [<span class="bold">INFO</span>] <span class="bold">Development server running!</span>
        <br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Local: <span class="bold">http://localhost:8100</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;External: <span class="bold">http://192.168.1.169:8100</span>
        <br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="yellow">Use Ctrl+C to quit this process</span>
        <br />
        <br />
        [<span class="bold">INFO</span>] Browser window opened to <span class="bold">http://localhost:8100!</span>
    </command-output>
</command-line>

With `ionic serve` running, continue developing your app. As you save changes, the app reloads with those changes applied.

When implementing native functionality, use [Platform Detection](/docs/core-concepts/cross-platform).
When you're ready to test on a real device, see here for [iOS](/docs/developing/ios) and [Android](/docs/developing/android).
