---

---

# Running Apps

Ionic Studio offers support for serving, running, and deploying apps.

<blockquote>
🚧 These docs are a work-in-progress. Check back frequently for updates!
</blockquote>

Serving, running, and deploying each have pros and cons.

* **Serving** is easy and requires no native project setup, but doesn't work with native functionality
* **Running** apps can be complex and difficult to debug, but allows the app to be tested on a real device
* **Deploying** is the best way to make sure the app is ready for production, but doesn't work with livereload

## Serving Apps

When an app is served, Ionic Studio starts a [livereload server](/docs/faq/glossary#livereload) and displays the app in a separate browser window, called a _Serve Window_.

To begin serving, click the Play button in the upper right-hand corner of Ionic Studio. Then choose _Serve_ from the dropdown.

This will compile the app and then watch for changes in source files. When changes are made, the app will automatically be reloaded with the latest changes.

### Serve Window

After compilation, the app is opened inside a Serve Window.

<figure class="device">
  <img alt="Serve Window" src="/docs/assets/img/studio/ss-serve-window.png" />
</figure>

The Serve Window toolbar offers features such as changing the device viewport, switching between portrait and landscape orientation, reloading the webview, and opening the DevTools for debugging.

When the device viewport changes, the Serve Window is resized and will be reloaded to reflect the appropriate device styles, whether iOS or Material Design.

It is possible to open multiple Serve Windows by using the Play button and choosing _Serve_. This is useful for testing the look and feel on iOS and Android, testing the app on different viewports or orientations, all at the same time.

Serving browser window with preset viewports and full debugging support. You can also run your app on iOS simulators, Android emulators, and even hardware devices.

#### Debugging

Clicking the debug button will open a proper instance of the Chrome DevTools for the app. Right-clicking on app features will open a context menu with _Inspect Element_.

For information on how to use the Chrome DevTools, see the [Chrome DevTools documentation](https://developers.google.com/web/tools/chrome-devtools/).

<figure>
  <img alt="Chrome DevTools" src="/docs/assets/img/studio/ss-devtools.png" />
</figure>

## Running Apps

<blockquote>
Since running your app will deploy to an actual native device, it does require some additional setup. See the <a href="/docs/studio/native">Native iOS & Android</a> documentation for setup guides.
</blockquote>

To begin running, click the Play button in the upper right-hand corner of Ionic Studio. Then choose _Run_ from the dropdown.

<figure>
  <img alt="Run Modal" src="/docs/assets/img/studio/ss-run-modal.png" />
</figure>

Choose a platform and a target device, which can be an emulator or hardware device plugged in to your computer.

## Deploying Apps

To deploy the app, use _Run_ and then switch off the _Live Reload_ option. This will copy app assets onto the target device or emulator, instead of using a Dev Server.
