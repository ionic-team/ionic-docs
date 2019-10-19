---

---

# Settings

Manage app configuration and settings.

## Config

The **Config** section is for managing the common settings in `config.xml` such as the name and version of the app, as well as the Bundle ID (aka [Package ID](/docs/faq/glossary#package-id)).

<figure>
  <img alt="Settings -> Config" src="/docs/assets/img/studio/ss-settings-config.png" />
</figure>

## Platforms

The **Platforms** section is for managing Cordova platforms. Use the appropriate buttons to add, remove, and update platforms.

<figure>
  <img alt="Settings -> Platforms" src="/docs/assets/img/studio/ss-settings-platforms.png" />
</figure>

## Plugins

The **Plugins** section is for managing Cordova plugins. Use the appropriate buttons to add, remove, and update plugins.

<figure>
  <img alt="Settings -> Plugins" src="/docs/assets/img/studio/ss-settings-plugins.png" />
</figure>

### Installing Plugins

To install a Cordova plugin, click the **Add** button. The install modal will open, then click **Install** to confirm. If a plugin requires variables, the modal will prompt for them.

The plugins available for install comprise all [Ionic Native](/docs/native/overview) plugins. When a plugin is installed, both the Cordova plugin and the Ionic Native wrapper are installed automatically.

<blockquote>
<p>It is not yet possible in Ionic Studio to install Cordova plugins other than those in Ionic Native. This feature is coming soon!</p>
<p>You can always install the Cordova plugin in the command line by using <strong>Project</strong> &raquo; <strong>Open in Terminal</strong> and following the installation docs for the Cordova plugin.</p>
</blockquote>

<figure>
  <img alt="Install Facebook Plugin" src="/docs/assets/img/studio/ss-install-plugin-modal.png" />
</figure>

<blockquote>
Some plugins may require variables that Ionic Studio isn't aware of. In this case, the install will fail. Try installing the plugin again with the necessary variables and let us know by <a href="/docs/studio/support">reporting the bug</a>.
</blockquote>

## Icon & Splash Screen

The **Icon & Splash Screen** section is for managing app resources. When changing icons and splash screens within Ionic Studio, the appropriate sizes required for the vast collection of device sizes and types will be generated automatically.

Ionic Studio uses the Ionic CLI command <code>ionic cordova resources</code> to generate app resources. More information about icons and splash screens can be found in <a href="/docs/cli/commands/cordova-resources">the CLI docs</a>.

<figure>
  <img alt="App Resources" src="/docs/assets/img/studio/ss-settings-app-resources.png" />
</figure>
