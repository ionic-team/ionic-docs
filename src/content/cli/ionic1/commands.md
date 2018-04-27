# Ionic v1 CLI Docs

<h2>ionic build</h2>
<h4>Build web assets and prepare your app for any platform targets</h4>
<h3 no-anchor>Usage</h3>

<code-block language="shell">
ionic build 
ionic build --prod
ionic build -- --extract-css=true
</code-block>

<h3 no-anchor>Description</h3>
<p>`ionic build` will perform an Ionic build, which compiles web assets and prepares them for deployment.</p>
<p>`ionic build` uses the Angular CLI. Use `ng build --help` to list all Angular CLI options for building your app. See the `ng build` docs\[1\] for explanations. Options not listed below are considered advanced and can be passed to the `ng` CLI using the `--` separator after the Ionic CLI arguments. See the examples.</p>
<p>\[1\]: **[https://github.com/angular/angular-cli/wiki/build#ng-build](https://github.com/angular/angular-cli/wiki/build#ng-build)**</p>
<h3 no-anchor>Options</h3>
<dl>

<dt><h4>--dev</h4></dt>
<dd>Sets the build target to `development`</dd>

<dt><h4>--prod</h4></dt>
<dd>Sets the build target to `production`</dd>

<dt><h4>--target</h4><strong>Alias:</strong> <code>-t</code></dt>
<dd>Set the build target to a custom value</dd>

<dt><h4>--environment</h4><strong>Alias:</strong> <code>-e</code></dt>
<dd>Set the build environment to a custom value</dd>

<dt><h4>--engine</h4></dt>
<dd>Target engine (e.g. `browser`, `cordova`)</dd>

<dt><h4>--platform</h4></dt>
<dd>Target platform on chosen engine (e.g. `ios`, `android`)</dd>

</dl>


<p><br></p>

<h2>ionic config get</h2>
<h4>Print config values</h4>
<h3 no-anchor>Usage</h3>

<code-block language="shell">
ionic config get 
ionic config get pro_id
ionic config get --global user.email
ionic config get -g yarn
</code-block>

<h3 no-anchor>Description</h3>
<p>By default, this command prints properties in your project's **ionic.config.json** file.</p>
<p>For `--global` config, the CLI prints properties in the global CLI config file (**~/.ionic/config.json**).</p>
<p>For nested properties, separate nest levels with dots. For example, the property name `user.email` will look in the **user** object (a root-level field in the global CLI config file) for the **email** field.</p>
<p>Without a `property` argument, this command prints out the entire file contents.</p>
<p>If you are using this command programmatically, you can use the `--json` option.</p>
<p>This command attempts to sanitize config output for known sensitive fields, such as fields within the **tokens** object in the global CLI config file. This functionality is disabled when using `--json`.</p>
<h3 no-anchor>Options</h3>
<dl>

<dt><h4>--global</h4><strong>Alias:</strong> <code>-g</code></dt>
<dd>Use global CLI config</dd>

<dt><h4>--json</h4></dt>
<dd>Output config values in JSON</dd>

</dl>


<p><br></p>

<h2>ionic config set</h2>
<h4>Set config values</h4>
<h3 no-anchor>Usage</h3>

<code-block language="shell">
ionic config set name newAppName
ionic config set name "\"newAppName\"" --json
ionic config set -g interactive true
</code-block>

<h3 no-anchor>Description</h3>
<p>By default, this command sets JSON properties in your project's **ionic.config.json** file.</p>
<p>For `--global` config, the CLI sets properties in the global CLI config file (**~/.ionic/config.json**).</p>
<p>For nested properties, separate nest levels with dots. For example, the property name `user.email` will look in the **user** object (a root-level field in the global CLI config file) for the **email** field.</p>
<p>`ionic config set` will attempt to coerce `value` into a suitable JSON type. If it is JSON-parsable, such as `true` or `[]`, it takes the parsed result. Otherwise, the value is interpreted as a string. For stricter input, use `--json`, which will error with non-JSON values.</p>
<p>By default, if `property` exists and is an object or an array, the value is not overwritten. To disable this check and always overwrite the property, use `--force`.</p>
<h3 no-anchor>Options</h3>
<dl>

<dt><h4>--global</h4><strong>Alias:</strong> <code>-g</code></dt>
<dd>Use global CLI config</dd>

<dt><h4>--json</h4></dt>
<dd>Always interpret `value` as JSON</dd>

<dt><h4>--force</h4></dt>
<dd>Always overwrite existing values</dd>

</dl>


<p><br></p>

<h2>ionic config unset</h2>
<h4>Delete config values</h4>
<h3 no-anchor>Usage</h3>

<code-block language="shell">
ionic config unset 
ionic config unset type
ionic config unset --global git.setup
ionic config unset -g interactive
</code-block>

<h3 no-anchor>Description</h3>
<p>By default, this command deletes properties in your project's **ionic.config.json** file.</p>
<p>For `--global` config, the CLI deletes properties in the global CLI config file (**~/.ionic/config.json**).</p>
<p>For nested properties, separate nest levels with dots. For example, the property name `user.email` will look in the **user** object (a root-level field in the global CLI config file) for the **email** field.</p>
<h3 no-anchor>Options</h3>
<dl>

<dt><h4>--global</h4><strong>Alias:</strong> <code>-g</code></dt>
<dd>Use global CLI config</dd>

</dl>


<p><br></p>

<h2>ionic cordova build</h2>
<h4>Build (prepare + compile) an Ionic project for a given platform</h4>
<h3 no-anchor>Usage</h3>

<code-block language="shell">
ionic cordova build ios
ionic cordova build ios --prod --release
ionic cordova build ios --prod --release -- --developmentTeam="ABCD" --codeSignIdentity="iPhone Developer" --packageType="app-store"
ionic cordova build ios --buildConfig=build.json
ionic cordova build ios --prod --release --buildConfig=build.json
ionic cordova build android
ionic cordova build android --prod --release -- -- --keystore=filename.keystore --alias=myalias
ionic cordova build android --prod --release -- -- --minSdkVersion=21
ionic cordova build android --prod --release -- -- --versionCode=55
ionic cordova build android --prod --release -- -- --gradleArg=-PcdvBuildMultipleApks=true
ionic cordova build android --buildConfig=build.json
ionic cordova build android --prod --release --buildConfig=build.json
</code-block>

<h3 no-anchor>Description</h3>
<p>Like running `cordova build` directly, but also builds web assets with configuration from `ionic build` and provides friendly checks.</p>
<p>To pass additional options to the Cordova CLI, use the `--` separator after the Ionic CLI arguments.</p>
<p>The Cordova CLI requires a separator for platform-specific arguments for Android builds\[1\], so an additional separator is required for the Ionic CLI, but it is not required for iOS builds\[2\]. See the example commands for usage with separators. To avoid using flags, consider using `--buildConfig` with a **build.json** file.</p>
<p>\[1\]: **[https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#using-flags](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#using-flags)**<br>
\[2\]: **[https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html#using-flags](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html#using-flags)**</p>
<h3 no-anchor>Options</h3>
<dl>

<dt><h4>--build</h4></dt>
<dd>Do not invoke an Ionic build</dd>

<dt><h4>--prod</h4></dt>
<dd>Build the application for production</dd>

<dt><h4>--aot</h4></dt>
<dd>Perform ahead-of-time compilation for this build</dd>

<dt><h4>--minifyjs</h4></dt>
<dd>Minify JS for this build</dd>

<dt><h4>--minifycss</h4></dt>
<dd>Minify CSS for this build</dd>

<dt><h4>--optimizejs</h4></dt>
<dd>Perform JS optimizations for this build</dd>

<dt><h4>--debug</h4></dt>
<dd>Create a debug build</dd>

<dt><h4>--release</h4></dt>
<dd>Create a release build</dd>

<dt><h4>--device</h4></dt>
<dd>Create a build for a device</dd>

<dt><h4>--emulator</h4></dt>
<dd>Create a build for an emulator</dd>

<dt><h4>--buildConfig</h4></dt>
<dd>Use the specified build configuration</dd>

</dl>


<p><br></p>

<h2>ionic cordova compile</h2>
<h4>Compile native platform code</h4>
<h3 no-anchor>Usage</h3>

<code-block language="shell">
ionic cordova compile ios
ionic cordova compile ios --device
ionic cordova compile android
</code-block>

<h3 no-anchor>Description</h3>
<p>Like running `cordova compile` directly, but provides friendly checks.</p>
<h3 no-anchor>Options</h3>
<dl>

<dt><h4>--debug</h4></dt>
<dd>Create a debug build</dd>

<dt><h4>--release</h4></dt>
<dd>Create a release build</dd>

<dt><h4>--device</h4></dt>
<dd>Create a build for a device</dd>

<dt><h4>--emulator</h4></dt>
<dd>Create a build for an emulator</dd>

<dt><h4>--buildConfig</h4></dt>
<dd>Use the specified build configuration</dd>

</dl>


<p><br></p>

<h2>ionic cordova emulate</h2>
<h4>Emulate an Ionic project on a simulator/emulator</h4>
<h3 no-anchor>Usage</h3>

<code-block language="shell">
ionic cordova emulate ios
ionic cordova emulate ios --prod --release
ionic cordova emulate ios --prod --release -- --developmentTeam="ABCD" --codeSignIdentity="iPhone Developer" --packageType="app-store"
ionic cordova emulate ios --buildConfig=build.json
ionic cordova emulate ios --prod --release --buildConfig=build.json
ionic cordova emulate android
ionic cordova emulate android --prod --release -- -- --keystore=filename.keystore --alias=myalias
ionic cordova emulate android --prod --release -- -- --minSdkVersion=21
ionic cordova emulate android --prod --release -- -- --versionCode=55
ionic cordova emulate android --prod --release -- -- --gradleArg=-PcdvBuildMultipleApks=true
ionic cordova emulate android --buildConfig=build.json
ionic cordova emulate android --prod --release --buildConfig=build.json
</code-block>

<h3 no-anchor>Description</h3>
<p>Like running `cordova run` or `cordova emulate` directly, but also uses the dev server from `ionic serve` for livereload functionality.</p>
<p>For Android and iOS, you can setup Remote Debugging on your device with browser development tools using these docs\[1\].</p>
<p>Just like with `ionic cordova build`, you can pass additional options to the Cordova CLI using the `--` separator.</p>
<p>\[1\]: **[https://ionicframework.com/docs/developer-resources/developer-tips/](https://ionicframework.com/docs/developer-resources/developer-tips/)**</p>
<h3 no-anchor>Options</h3>
<dl>

<dt><h4>--list</h4></dt>
<dd>List all available Cordova targets</dd>

<dt><h4>--build</h4></dt>
<dd>Do not invoke Ionic build/serve</dd>

<dt><h4>--address</h4></dt>
<dd>Use specific address for the dev server</dd>

<dt><h4>--port</h4><strong>Alias:</strong> <code>-p</code></dt>
<dd>Use specific port for HTTP</dd>

<dt><h4>--livereload</h4><strong>Alias:</strong> <code>-l</code></dt>
<dd>Spin up dev server to live-reload www files</dd>

<dt><h4>--proxy</h4></dt>
<dd>Do not add proxies</dd>

<dt><h4>--debug</h4></dt>
<dd>Mark as a debug build</dd>

<dt><h4>--release</h4></dt>
<dd>Mark as a release build</dd>

<dt><h4>--device</h4></dt>
<dd>Deploy build to a device</dd>

<dt><h4>--emulator</h4></dt>
<dd>Deploy build to an emulator</dd>

<dt><h4>--cordova-target</h4></dt>
<dd>Deploy build to a device (use `--list` to see all)</dd>

<dt><h4>--buildConfig</h4></dt>
<dd>Use the specified build configuration</dd>

<dt><h4>--ssl</h4><strong>Alias:</strong> <code>-s</code></dt>
<dd>Use HTTPS for the dev server</dd>

<dt><h4>--dev</h4></dt>
<dd>Sets the build target to `development`</dd>

<dt><h4>--prod</h4></dt>
<dd>Sets the build target to `production`</dd>

<dt><h4>--target</h4><strong>Alias:</strong> <code>-t</code></dt>
<dd>Set the build target to a custom value</dd>

<dt><h4>--environment</h4><strong>Alias:</strong> <code>-e</code></dt>
<dd>Set the build environment to a custom value</dd>

</dl>


<p><br></p>

<h2>ionic cordova platform</h2>
<h4>Manage Cordova platform targets</h4>
<h3 no-anchor>Usage</h3>

<code-block language="shell">
ionic cordova platform 
ionic cordova platform add ios
ionic cordova platform add android
ionic cordova platform rm ios
</code-block>

<h3 no-anchor>Description</h3>
<p>Like running `cordova platform` directly, but adds default Ionic icons and splash screen resources (during `add`) and provides friendly checks.</p>
<h3 no-anchor>Options</h3>
<dl>

<dt><h4>--resources</h4></dt>
<dd>Do not pregenerate icons and splash screen resources (corresponds to `add`)</dd>

</dl>


<p><br></p>

<h2>ionic cordova plugin</h2>
<h4>Manage Cordova plugins</h4>
<h3 no-anchor>Usage</h3>

<code-block language="shell">
ionic cordova plugin 
ionic cordova plugin add cordova-plugin-inappbrowser@latest
ionic cordova plugin add phonegap-plugin-push --variable SENDER_ID=XXXXX
ionic cordova plugin rm cordova-plugin-camera
</code-block>

<h3 no-anchor>Description</h3>
<p>Like running `cordova plugin` directly, but provides friendly checks.</p>
<h3 no-anchor>Options</h3>
<dl>

<dt><h4>--force</h4></dt>
<dd>Force overwrite the plugin if it exists (corresponds to `add`)</dd>

<dt><h4>--variable</h4></dt>
<dd>Specify plugin variables</dd>

</dl>


<p><br></p>

<h2>ionic cordova prepare</h2>
<h4>Copies assets to Cordova platforms, preparing them for native builds</h4>
<h3 no-anchor>Usage</h3>

<code-block language="shell">
ionic cordova prepare 
ionic cordova prepare ios
ionic cordova prepare android
</code-block>

<h3 no-anchor>Description</h3>
<p>`ionic cordova prepare` will do the following:
- Copy the **www/** directory into your Cordova platforms.
- Transform **config.xml** into platform-specific manifest files.
- Copy icons and splash screens from **resources/** to into your Cordova platforms.
- Copy plugin files into specified platforms.</p>
<p>You may wish to use `ionic cordova prepare` if you run your project with Android Studio or Xcode.</p>
<h3 no-anchor>Options</h3>
<dl>

<dt><h4>--build</h4></dt>
<dd>Do not invoke an Ionic build</dd>

<dt><h4>--prod</h4></dt>
<dd>Build the application for production</dd>

<dt><h4>--aot</h4></dt>
<dd>Perform ahead-of-time compilation for this build</dd>

<dt><h4>--minifyjs</h4></dt>
<dd>Minify JS for this build</dd>

<dt><h4>--minifycss</h4></dt>
<dd>Minify CSS for this build</dd>

<dt><h4>--optimizejs</h4></dt>
<dd>Perform JS optimizations for this build</dd>

</dl>


<p><br></p>

<h2>ionic cordova requirements</h2>
<h4>Checks and print out all the requirements for platforms</h4>
<h3 no-anchor>Description</h3>
<p>Like running `cordova requirements` directly, but provides friendly checks.</p>
<p><br></p>

<h2>ionic cordova resources</h2>
<h4>Automatically create icon and splash screen resources</h4>
<h3 no-anchor>Usage</h3>

<code-block language="shell">
ionic cordova resources 
ionic cordova resources ios
ionic cordova resources android
</code-block>

<h3 no-anchor>Description</h3>
<p>Ionic can automatically generate perfectly sized icons and splash screens from source images (**.png**, **.psd**, or **.ai**) for your Cordova platforms.</p>
<p>The source image for icons should ideally be at least **1024×1024px** and located at **resources/icon.png**. The source image for splash screens should ideally be at least **2732×2732px** and located at **resources/splash.png**. If you used `ionic start`, there should already be default Ionic resources in the **resources/** directory, which you can overwrite.</p>
<p>You can also generate platform-specific icons and splash screens by placing them in the respective **resources/&lt;platform&gt;/** directory. For example, to generate an icon for Android, place your image at **resources/android/icon.png**.</p>
<p>By default, this command will not regenerate resources whose source image has not changed. To disable this functionality and always overwrite generated images, use `--force`.</p>
<p>For best results, the splash screen's artwork should roughly fit within a square (**1200×1200px**) at the center of the image. You can use **[https://code.ionicframework.com/resources/splash.psd](https://code.ionicframework.com/resources/splash.psd)** as a template for your splash screen.</p>
<p>`ionic cordova resources` will automatically update your **config.xml** to reflect the changes in the generated images, which Cordova then configures.</p>
<p>Cordova reference documentation:
- Icons: **[https://cordova.apache.org/docs/en/latest/config_ref/images.html](https://cordova.apache.org/docs/en/latest/config_ref/images.html)**
- Splash Screens: **[https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/)**</p>
<p>This command uses Ionic servers, so we require you to be logged into your free Ionic account. Use `ionic login` to login.</p>
<h3 no-anchor>Options</h3>
<dl>

<dt><h4>--force</h4><strong>Alias:</strong> <code>-f</code></dt>
<dd>Force regeneration of resources</dd>

<dt><h4>--icon</h4><strong>Alias:</strong> <code>-i</code></dt>
<dd>Generate icon resources</dd>

<dt><h4>--splash</h4><strong>Alias:</strong> <code>-s</code></dt>
<dd>Generate splash screen resources</dd>

</dl>


<p><br></p>

<h2>ionic cordova run</h2>
<h4>Run an Ionic project on a connected device</h4>
<h3 no-anchor>Usage</h3>

<code-block language="shell">
ionic cordova run ios
ionic cordova run ios --prod --release
ionic cordova run ios --prod --release -- --developmentTeam="ABCD" --codeSignIdentity="iPhone Developer" --packageType="app-store"
ionic cordova run ios --buildConfig=build.json
ionic cordova run ios --prod --release --buildConfig=build.json
ionic cordova run android
ionic cordova run android --prod --release -- -- --keystore=filename.keystore --alias=myalias
ionic cordova run android --prod --release -- -- --minSdkVersion=21
ionic cordova run android --prod --release -- -- --versionCode=55
ionic cordova run android --prod --release -- -- --gradleArg=-PcdvBuildMultipleApks=true
ionic cordova run android --buildConfig=build.json
ionic cordova run android --prod --release --buildConfig=build.json
</code-block>

<h3 no-anchor>Description</h3>
<p>Like running `cordova run` or `cordova emulate` directly, but also uses the dev server from `ionic serve` for livereload functionality.</p>
<p>For Android and iOS, you can setup Remote Debugging on your device with browser development tools using these docs\[1\].</p>
<p>Just like with `ionic cordova build`, you can pass additional options to the Cordova CLI using the `--` separator.</p>
<p>\[1\]: **[https://ionicframework.com/docs/developer-resources/developer-tips/](https://ionicframework.com/docs/developer-resources/developer-tips/)**</p>
<h3 no-anchor>Options</h3>
<dl>

<dt><h4>--list</h4></dt>
<dd>List all available Cordova targets</dd>

<dt><h4>--build</h4></dt>
<dd>Do not invoke Ionic build/serve</dd>

<dt><h4>--address</h4></dt>
<dd>Use specific address for the dev server</dd>

<dt><h4>--port</h4><strong>Alias:</strong> <code>-p</code></dt>
<dd>Use specific port for HTTP</dd>

<dt><h4>--livereload</h4><strong>Alias:</strong> <code>-l</code></dt>
<dd>Spin up dev server to live-reload www files</dd>

<dt><h4>--proxy</h4></dt>
<dd>Do not add proxies</dd>

<dt><h4>--debug</h4></dt>
<dd>Mark as a debug build</dd>

<dt><h4>--release</h4></dt>
<dd>Mark as a release build</dd>

<dt><h4>--device</h4></dt>
<dd>Deploy build to a device</dd>

<dt><h4>--emulator</h4></dt>
<dd>Deploy build to an emulator</dd>

<dt><h4>--cordova-target</h4></dt>
<dd>Deploy build to a device (use `--list` to see all)</dd>

<dt><h4>--buildConfig</h4></dt>
<dd>Use the specified build configuration</dd>

<dt><h4>--ssl</h4><strong>Alias:</strong> <code>-s</code></dt>
<dd>Use HTTPS for the dev server</dd>

<dt><h4>--dev</h4></dt>
<dd>Sets the build target to `development`</dd>

<dt><h4>--prod</h4></dt>
<dd>Sets the build target to `production`</dd>

<dt><h4>--target</h4><strong>Alias:</strong> <code>-t</code></dt>
<dd>Set the build target to a custom value</dd>

<dt><h4>--environment</h4><strong>Alias:</strong> <code>-e</code></dt>
<dd>Set the build environment to a custom value</dd>

</dl>


<p><br></p>

<h2>ionic docs</h2>
<h4>Open the Ionic documentation website</h4>
<h3 no-anchor>Description</h3>
<p></p>
<h3 no-anchor>Options</h3>
<dl>

<dt><h4>--browser</h4><strong>Alias:</strong> <code>-w</code></dt>
<dd>Specifies the browser to use (`safari`, `firefox`, `google chrome`)</dd>

</dl>


<p><br></p>

<h2>ionic doctor check</h2>
<h4>Check the health of your Ionic project</h4>
<h3 no-anchor>Usage</h3>

<code-block language="shell">
ionic doctor check 
ionic doctor check git-not-used
</code-block>

<h3 no-anchor>Description</h3>
<p>This command detects and prints common issues and suggested steps to fix them.</p>
<p>Some issues can be fixed automatically. See `ionic doctor treat --help`.</p>
<p>Optionally supply the `id` argument to check a single issue. Use `ionic doctor list` to list all known issues.</p>
<p><br></p>

<h2>ionic doctor list</h2>
<h4>List all issue identifiers</h4>
<h3 no-anchor>Description</h3>
<p></p>
<p><br></p>

<h2>ionic doctor treat</h2>
<h4>Attempt to fix issues in your Ionic project</h4>
<h3 no-anchor>Usage</h3>

<code-block language="shell">
ionic doctor treat 
ionic doctor treat git-not-used
</code-block>

<h3 no-anchor>Description</h3>
<p>This command detects and attempts to fix common issues. Before a fix is attempted, the steps are printed and a confirmation prompt is displayed.</p>
<p>Optionally supply the `id` argument to attempt to fix a single issue. Use `ionic doctor list` to list all known issues.</p>
<p><br></p>

<h2>ionic generate</h2>
<h4>Automatically create framework components</h4>
<h3 no-anchor>Usage</h3>

<code-block language="shell">
ionic generate 
ionic generate --list
ionic generate -d
ionic generate page
ionic generate page contact
ionic generate component pages/contact/form
ionic generate component form --change-detection OnPush
ionic generate directive ripple --skip-import
ionic generate s services/api/user
</code-block>

<h3 no-anchor>Description</h3>
<p>Automatically create components for your Ionic app.</p>
<p>This command uses the Angular CLI to generate components.</p>
<p> - List generators with the `--list` option.
 - For a detailed list of options for each generator, use `ng generate &lt;type&gt; --help`.
 - For  types, use `ng generate &lt;type&gt; --help --collection @ionic/schematics-angular`.</p>
<p>`ionic generate` is more opinionated than `ng generate`. Aside from simpler generator types (`classes`, `interfaces`, `modules`, `enums`), generated files are placed in **src/app/&lt;type&gt;/&lt;name&gt;/**. See the CLI documentation\[1\] for an overview of recommended project structure.</p>
<p>Remember, you can use slashes in `name` to nest components deeper, but you must specify the full path within **src/app/**. For example, specify a name of `pages/tabs-page/tab1` to generate page files at **src/app/pages/tabs-page/tab1/**.</p>
<p>To test a generator before file modifications are made, use the `--dry-run` option.</p>
<p>\[1\]: **[https://ionicframework.com/docs/cli/projects.html#project-structure](https://ionicframework.com/docs/cli/projects.html#project-structure)**</p>
<h3 no-anchor>Options</h3>
<dl>

<dt><h4>--list</h4><strong>Alias:</strong> <code>-l</code></dt>
<dd>List available generators</dd>

<dt><h4>--dry-run</h4><strong>Alias:</strong> <code>-d</code></dt>
<dd>Run generate without making any file changes</dd>

<dt><h4>--force</h4><strong>Alias:</strong> <code>-f</code></dt>
<dd>Force overwriting of files</dd>

</dl>


<p><br></p>

<h2>ionic git remote</h2>
<h4>Adds/updates the Ionic git remote to your local Ionic app repository</h4>
<h3 no-anchor>Description</h3>
<p></p>
<p><br></p>

<h2>ionic info</h2>
<h4>Print system/environment info</h4>
<h3 no-anchor>Description</h3>
<p></p>
<p><br></p>

<h2>ionic integrations disable</h2>
<h4>Disable an integration</h4>
<h3 no-anchor>Description</h3>
<p></p>
<p><br></p>

<h2>ionic integrations enable</h2>
<h4>Add various integrations to your app</h4>
<h3 no-anchor>Description</h3>
<p></p>
<h3 no-anchor>Options</h3>
<dl>

<dt><h4>--add</h4></dt>
<dd>Download and add the integration even if enabled</dd>

<dt><h4>--quiet</h4></dt>
<dd>Do not log file operations</dd>

</dl>


<p><br></p>

<h2>ionic integrations list</h2>
<h4>List available and active integrations in your app</h4>
<h3 no-anchor>Description</h3>
<p></p>
<p><br></p>

<h2>ionic link</h2>
<h4>Connect your local app to Ionic Pro</h4>
<h3 no-anchor>Usage</h3>

<code-block language="shell">
ionic link 
ionic link a1b2c3d4
</code-block>

<h3 no-anchor>Description</h3>
<p>If you have an app on Ionic Pro, you can link it to this local Ionic project with this command.</p>
<p>Excluding the `pro-id` argument looks up your apps on Ionic Pro and prompts you to select one.</p>
<p>Ionic Pro uses a git-based workflow to manage app updates. During the linking process, you may select **GitHub** (recommended) or **Ionic Pro** as a git host. See our documentation\[1\] for more information.</p>
<p>Ultimately, this command sets the **pro_id** property in **ionic.config.json**, which marks this app as linked.</p>
<p>If you are having issues linking, please get in touch with our Support\[2\].</p>
<p>\[1\]: **[https://ionicframework.com/docs/pro/basics/git](https://ionicframework.com/docs/pro/basics/git)**<br>
\[2\]: **[https://ionicframework.com/support/request](https://ionicframework.com/support/request)**</p>
<p><br></p>

<h2>ionic login</h2>
<h4>Login to Ionic Pro</h4>
<h3 no-anchor>Usage</h3>

<code-block language="shell">
ionic login 
ionic login john@example.com
ionic login hello@example.com secret
</code-block>

<h3 no-anchor>Description</h3>
<p>Authenticate with Ionic Pro and retrieve a user token, which is stored in the CLI config.</p>
<p>Alternatively, set the `IONIC_TOKEN` environment variable and the CLI will automatically authenticate you. (You can also use `IONIC_EMAIL` and `IONIC_PASSWORD`.)</p>
<p>If you need to create an Ionic Pro account, use `ionic signup`.</p>
<p><br></p>

<h2>ionic logout</h2>
<h4>Logout of Ionic Pro</h4>
<h3 no-anchor>Description</h3>
<p>Remove the Ionic Pro user token from the CLI config.</p>
<p>If you need to create an Ionic Pro account, use `ionic signup`.</p>
<p><br></p>

<h2>ionic monitoring syncmaps</h2>
<h4>Build & upload sourcemaps to Ionic Pro Monitoring service</h4>
<h3 no-anchor>Description</h3>
<p>By default, `ionic monitoring syncmaps` will upload the sourcemap files within **.sourcemaps**. To optionally perform a production build before uploading sourcemaps, specify the `--build` flag.</p>
<h3 no-anchor>Options</h3>
<dl>

<dt><h4>--build</h4></dt>
<dd>Invoke a production Ionic build</dd>

</dl>


<p><br></p>

<h2>ionic serve</h2>
<h4>Start a local dev server for app dev/testing</h4>
<h3 no-anchor>Usage</h3>

<code-block language="shell">
ionic serve 
ionic serve -c
ionic serve --local
ionic serve --lab
ionic serve -- --extract-css=true
</code-block>

<h3 no-anchor>Description</h3>
<p>Easily spin up a development server which launches in your browser. It watches for changes in your source files and automatically reloads with the updated build.</p>
<p>By default, `ionic serve` boots up a development server on all network interfaces and prints the external address(es) on which your app is being served. It also broadcasts your app to the Ionic DevApp on your network. To disable the DevApp and bind to `localhost`, use `--local`.</p>
<p>Try the `--lab` option to see multiple platforms at once.</p>
<p>`ionic serve` uses the Angular CLI. Common Angular CLI options such as `--target` and `--environment` are mixed in with Ionic CLI options. Use `ng serve --help` to list all options. See the `ng build` docs\[1\] for explanations. Options not listed below are considered advanced and can be passed to the Angular CLI using the `--` separator after the Ionic CLI arguments. See the examples.</p>
<p>For serving your app with HTTPS, use the `--ssl` option. You can provide your own SSL key and certificate with the `ionic config set ssl.key &lt;path&gt;` and `ionic config set ssl.cert &lt;path&gt;` commands.</p>
<p>If a **proxy.config.json** or **proxy.config.js** file is detected in your project, the Angular CLI's `--proxy-config` option is automatically specified. You can use `--no-proxy` to disable this behavior. See the Angular CLI proxy documentation\[2\] for more information.</p>
<p>\[1\]: **[https://github.com/angular/angular-cli/wiki/build#ng-build](https://github.com/angular/angular-cli/wiki/build#ng-build)**<br>
\[2\]: **[https://github.com/angular/angular-cli/wiki/stories-proxy#proxy-to-backend](https://github.com/angular/angular-cli/wiki/stories-proxy#proxy-to-backend)**</p>
<h3 no-anchor>Options</h3>
<dl>

<dt><h4>--address</h4></dt>
<dd>Use specific address for the dev server</dd>

<dt><h4>--port</h4><strong>Alias:</strong> <code>-p</code></dt>
<dd>Use specific port for HTTP</dd>

<dt><h4>--livereload</h4></dt>
<dd>Do not spin up dev server--just serve files</dd>

<dt><h4>--proxy</h4></dt>
<dd>Do not add proxies</dd>

<dt><h4>--lab-host</h4></dt>
<dd>Use specific address for Ionic Lab server</dd>

<dt><h4>--lab-port</h4></dt>
<dd>Use specific port for Ionic Lab server</dd>

<dt><h4>--devapp</h4></dt>
<dd>Do not publish DevApp service</dd>

<dt><h4>--open</h4></dt>
<dd>Do not open a browser window</dd>

<dt><h4>--local</h4></dt>
<dd>Disable external network usage</dd>

<dt><h4>--browser</h4><strong>Alias:</strong> <code>-w</code></dt>
<dd>Specifies the browser to use (`safari`, `firefox`, `google chrome`)</dd>

<dt><h4>--browseroption</h4><strong>Alias:</strong> <code>-o</code></dt>
<dd>Specifies a path to open to (`/#/tab/dash`)</dd>

<dt><h4>--lab</h4><strong>Alias:</strong> <code>-l</code></dt>
<dd>Test your apps on multiple platform types in the browser</dd>

<dt><h4>--platform</h4><strong>Alias:</strong> <code>-t</code></dt>
<dd>Start serve with a specific platform (`android`, `ios`)</dd>

<dt><h4>--ssl</h4><strong>Alias:</strong> <code>-s</code></dt>
<dd>Use HTTPS for the dev server</dd>

<dt><h4>--dev</h4></dt>
<dd>Sets the build target to `development`</dd>

<dt><h4>--prod</h4></dt>
<dd>Sets the build target to `production`</dd>

<dt><h4>--target</h4><strong>Alias:</strong> <code>-t</code></dt>
<dd>Set the build target to a custom value</dd>

<dt><h4>--environment</h4><strong>Alias:</strong> <code>-e</code></dt>
<dd>Set the build environment to a custom value</dd>

</dl>


<p><br></p>

<h2>ionic signup</h2>
<h4>Create an account for Ionic Pro</h4>
<h3 no-anchor>Description</h3>
<p></p>
<p><br></p>

<h2>ionic ssh add</h2>
<h4>Add an SSH public key to Ionic</h4>
<h3 no-anchor>Description</h3>
<p></p>
<h3 no-anchor>Options</h3>
<dl>

<dt><h4>--use</h4></dt>
<dd>Use the newly added key as your default SSH key for Ionic</dd>

</dl>


<p><br></p>

<h2>ionic ssh delete</h2>
<h4>Delete an SSH public key from Ionic</h4>
<h3 no-anchor>Description</h3>
<p></p>
<p><br></p>

<h2>ionic ssh generate</h2>
<h4>Generates a private and public SSH key pair</h4>
<h3 no-anchor>Description</h3>
<p></p>
<h3 no-anchor>Options</h3>
<dl>

<dt><h4>--type</h4><strong>Alias:</strong> <code>-t</code></dt>
<dd>The type of key to generate: `ecdsa`, `ed25519`, `rsa`</dd>

<dt><h4>--bits</h4><strong>Alias:</strong> <code>-b</code></dt>
<dd>Number of bits in the key</dd>

<dt><h4>--annotation</h4><strong>Alias:</strong> <code>-C</code></dt>
<dd>Annotation (comment) in public key. Your Ionic email address will be used</dd>

</dl>


<p><br></p>

<h2>ionic ssh list</h2>
<h4>List your SSH public keys on Ionic</h4>
<h3 no-anchor>Description</h3>
<p></p>
<h3 no-anchor>Options</h3>
<dl>

<dt><h4>--json</h4></dt>
<dd>Output SSH keys in JSON</dd>

</dl>


<p><br></p>

<h2>ionic ssh setup</h2>
<h4>Setup your Ionic SSH keys automatically</h4>
<h3 no-anchor>Description</h3>
<p></p>
<p><br></p>

<h2>ionic ssh use</h2>
<h4>Set your active Ionic SSH key</h4>
<h3 no-anchor>Description</h3>
<p></p>
<p><br></p>

<h2>ionic start</h2>
<h4>Create a new project</h4>
<h3 no-anchor>Usage</h3>

<code-block language="shell">
ionic start 
ionic start --list
ionic start myApp
ionic start myApp blank
ionic start myApp blank --type=ionic1
ionic start myApp super --type=ionic-angular
ionic start cordovaApp tabs --cordova
ionic start "My App" blank
ionic start "Conference App" https://github.com/ionic-team/ionic-conference-app
</code-block>

<h3 no-anchor>Description</h3>
<p>This command creates a working Ionic app. It installs dependencies for you and sets up your project.</p>
<p>Running `ionic start` without any arguments will prompt you for information about your new project.</p>
<p>The first argument is your app's `name`. Don't worry--you can always change this later. The `--project-id` is generated from `name` unless explicitly specified.</p>
<p>The second argument is the `template` from which to generate your app. You can list all templates with the `--list` option. For more information on starter templates, see the CLI documentation\[1\]. You can also specify a git repository URL for `template`, in which case the existing project will be cloned.</p>
<p>\[1\]: **[https://ionicframework.com/docs/cli/starters.html](https://ionicframework.com/docs/cli/starters.html)**</p>
<h3 no-anchor>Options</h3>
<dl>

<dt><h4>--list</h4><strong>Alias:</strong> <code>-l</code></dt>
<dd>List available starter templates</dd>

<dt><h4>--type</h4></dt>
<dd>Type of project to start (e.g. `ionic-angular`, `ionic1`)</dd>

<dt><h4>--cordova</h4></dt>
<dd>Include Cordova integration</dd>

<dt><h4>--pro-id</h4></dt>
<dd>Specify an Ionic Pro ID to link</dd>

<dt><h4>--deps</h4></dt>
<dd>Do not install npm/yarn dependencies</dd>

<dt><h4>--git</h4></dt>
<dd>Do not initialize a git repo</dd>

<dt><h4>--link</h4></dt>
<dd>Do not ask to connect the app to Ionic Pro</dd>

<dt><h4>--project-id</h4></dt>
<dd>Specify a slug for your app (used for the directory name and npm/yarn package name)</dd>

<dt><h4>--package-id</h4></dt>
<dd>Specify the bundle ID/application ID for your app (reverse-DNS notation)</dd>

</dl>


<p><br></p>

