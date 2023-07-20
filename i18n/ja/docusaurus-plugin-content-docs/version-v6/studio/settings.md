# Settings

Manage app configuration and settings.

## Config

The **Config** section is for managing the common settings in `config.xml` such as the name and version of the app, as well as the Bundle ID (aka [Package ID](../reference/glossary.md#package-id)).

<figure>
  <img alt="Settings -> Config" src="/img/studio/2/ss-settings.png" />
</figure>

## Platforms

The **Platforms** section is for managing Cordova platforms. Use the appropriate buttons to add, remove, and update platforms.

<figure>
  <img alt="Settings -> Platforms" src="/img/studio/2/ss-settings-platforms.png" />
</figure>

## Plugins

The **Plugins** section is for managing Cordova plugins. Use the appropriate buttons to add, remove, and update plugins.

<figure>
  <img alt="Settings -> Plugins" src="/img/studio/2/ss-settings-plugins.png" />
</figure>

### Installing Plugins

To install a Cordova plugin, click the **Add** button. The install modal will open, then click **Install** to confirm. If a plugin requires variables, the modal will prompt for them.

The plugins available for install comprise all [Ionic Native](../native.md) plugins. When a plugin is installed, both the Cordova plugin and the Ionic Native wrapper are installed automatically.

<blockquote>
  <p>
    It is not yet possible in Ionic Studio to install Cordova plugins other than those in Ionic Native. This feature is
    coming soon!
  </p>
  <p>
    You can always install the Cordova plugin in the command line by using <strong>Project</strong> &raquo;{' '}
    <strong>Open in Terminal</strong> and following the installation docs for the Cordova plugin.
  </p>
</blockquote>

<blockquote>
  Some plugins may require variables that Ionic Studio isn't aware of. In this case, the install will fail. Try
  installing the plugin again with the necessary variables and let us know by [reporting the bug](support.md).
</blockquote>

## Icon & Splash Screen

The **Icon & Splash Screen** section is for managing app resources. When changing icons and splash screens within Ionic Studio, the appropriate sizes required for the vast collection of device sizes and types will be generated automatically.

Ionic Studio uses the Ionic CLI command <code>ionic cordova resources</code> to generate app resources. More information about icons and splash screens can be found in [the CLI docs](../cli/commands/cordova-resources.md).

<figure>
  <img alt="App Resources" src="/img/studio/2/ss-settings-resources.png" />
</figure>

## Linking to Appflow

If your account has access to [Appflow](https://ionic.io/appflow) and you'd like to use it for this app, you can quickly link it with your Appflow account
in this section of the settings area:

<figure>
  <img alt="App Resources" src="/img/studio/2/ss-settings-appflow.png" />
</figure>
