import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'native-ent-install'
})
export class NativeEnterpriseInstall {
  @Prop() pluginId: string;
  @Prop() cordova?: string;
  @Prop() capacitor?: { android?: string; ios?: string; } = {};

  render() {
    if (!this.pluginId) {
      return null;
    }

    return (
      <section>
        <h2 id="installation">
          <a href="#installation">Installation</a>
        </h2>
        <p>
          After following the one-time <stencil-route-link url="/docs/enterprise/setup"> setup steps</stencil-route-link>, simply install the plugin:
        </p>
        <docs-tabs>
        <docs-tab tab="Capacitor">
            <command-line>
              <command-prompt>{`npm install @ionic-enterprise/${this.pluginId}`}</command-prompt>
              <command-prompt>npx cap sync</command-prompt>
            </command-line>

            { this.capacitor.android
              ? <section>
                  <p>Next, add the following to
                  <a href="https://capacitor.ionicframework.com/docs/android/configuration" target="_blank"> AndroidManifest.xml</a>:</p>
                <docs-code language="xml"><pre><code>{this.capacitor.android}</code></pre></docs-code>
                </section>
              : null
            }

            { this.capacitor.ios
              ? <section>
                  And the following to <a href="https://capacitor.ionicframework.com/docs/ios/configuration" target="_blank">Info.plist</a> on iOS:
                  <docs-code language="xml"><pre><code>{this.capacitor.ios}</code></pre></docs-code>
                </section>
              : null
            }
          </docs-tab>
          <docs-tab tab="Cordova">
            <command-line slot="Cordova">
            <command-prompt>{`ionic cordova plugin add @ionic-enterprise/${this.pluginId} ${this.cordova ? this.cordova : ''}`}</command-prompt>
            </command-line>
          </docs-tab>
        </docs-tabs>
      </section>
    );
  }
}
