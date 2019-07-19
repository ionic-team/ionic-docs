---

---

# Running Apps

Ionic Studio offers support for serving, running, and deploying apps.

<blockquote>
🚧 These docs are a work-in-progress. Check back frequently for updates!
</blockquote>

Serving, running, and deploying apps all have different use cases. 

## Serving Apps

When an app is served, Ionic Studio starts a [livereload server](/docs/faq/glossary#livereload) and displays the app in a separate browser window, called a _Serve Window_.

To begin serving, click the Play button in the upper right hand corner of Ionic Studio. Then choose _Serve_ from the dropdown.

This will compile the app and then watch for changes in source files. When changes are made, the app will automatically be reloaded with the latest changes.

### Serve Window

The Serve Window has a number of viewport presets and as well as portrait and landscape orientation.

<figure>
  <img src="/docs/assets/img/studio/ss-serve-window.png" />
  <figcaption>Henlo</figcaption>
</figure>

Serving browser window with preset viewports and full debugging support. You can also run your app on iOS simulators, Android emulators, and even hardware devices.


## Running Apps

<blockquote>
Since running your app will deploy to an actual native device, it does require some additional setup. See the <a href="/docs/studio/native">Native iOS & Android</a> documentation for setup guides.
</blockquote>

Running your app will prompt you to select a native target, which can be an emulator or hardware device plugged in to your computer.

Running your app can also make debugging more difficult than simply serving your app, but it is the only way to test the native functionality of your app.

## Deploying Apps

