import { Component, h } from '@stencil/core';

import { l10n } from '../../../l10n';

@Component({
    tag: 'docs-menu-enterprise',
    styleUrl: 'native.css'
})
export class DocsMenuEnterprise {

    render() {
        return [
            <docs-menu-collapsible heading={l10n.getString('menu-native-getting-started')}>
                <docs-nav items={this.gettingStarted} />
            </docs-menu-collapsible>,

            <docs-menu-collapsible heading={l10n.getString('menu-native-solutions')}>
                <docs-nav items={this.nativeSolutions} />
            </docs-menu-collapsible>,

            <docs-menu-collapsible heading={l10n.getString('menu-native-core-device')}>
                <docs-nav items={this.premierPlugins} />
            </docs-menu-collapsible>
        ];
    }

    gettingStarted = {
        '': {
            'menu-enterprise-home': '/docs/enterprise',
            'menu-native-setup': '/docs/enterprise/setup',
            'menu-native-community-v-premier': '/docs/enterprise/community-vs-enterprise',
            'menu-enterprise-troubleshooting': 'https://ionic.zendesk.com/hc/en-us/categories/360004359553-Native-Integration'
        }
    };

    nativeSolutions = {
        '': {
            'Overview': '/docs/enterprise/solutions',
            'Identity Vault': '/docs/enterprise/identity-vault',
            'Auth Connect': '/docs/enterprise/auth-connect',
            '': {
                'Auth0': '/docs/enterprise/auth-connect/auth0',
                'Azure AD B2C': '/docs/enterprise/auth-connect/azure-ad-b2c',
                'AWS Cognito': '/docs/enterprise/auth-connect/aws-cognito',
                'Okta': '/docs/enterprise/auth-connect/okta'
            },
            'Offline Storage': '/docs/enterprise/offline-storage'
        }
    };

    premierPlugins = {
        '': {
            'Android Permissions': '/docs/enterprise/android-permissions',
            'App Rate': '/docs/enterprise/app-rate',
            'App Version': '/docs/enterprise/app-version',
            'Badge': '/docs/enterprise/badge',
            'Calendar': '/docs/enterprise/calendar',
            'Camera': '/docs/enterprise/camera',
            'Clipboard': '/docs/enterprise/clipboard',
            'Contacts': '/docs/enterprise/contacts',
            'Deep Links': '/docs/enterprise/deeplinks',
            'Device': '/docs/enterprise/device',
            'Dialogs': '/docs/enterprise/dialogs',
            'Email Composer': '/docs/enterprise/email-composer',
            'Filesystem': '/docs/enterprise/filesystem',
            'Geolocation': '/docs/enterprise/geolocation',
            'Globalization': '/docs/enterprise/globalization',
            'InAppBrowser': '/docs/enterprise/inappbrowser',
            'Keyboard': '/docs/enterprise/keyboard',
            'Media': '/docs/enterprise/media',
            'Media Capture': '/docs/enterprise/media-capture',
            'Native Storage': '/docs/enterprise/nativestorage',
            'Network Information': '/docs/enterprise/network-information',
            'Screen Orientation': '/docs/enterprise/screen-orientation',
            'Social Sharing': '/docs/enterprise/social-sharing',
            'Splash Screen': '/docs/enterprise/splashscreen',
            'Status Bar': '/docs/enterprise/statusbar',
            'Vibration': '/docs/enterprise/vibration'
        }
    };
}
