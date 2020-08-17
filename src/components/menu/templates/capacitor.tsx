import { Component, h } from '@stencil/core';

import { l10n } from '../../../l10n';

@Component({
    tag: 'docs-menu-capacitor',
    styleUrl: 'native.css'
})
export class DocsMenuCapacitor {

    render() {
        return [
            <docs-menu-collapsible heading={l10n.getString('menu-capacitor-getting-started')}>
                <docs-nav items={this.gettingStarted} />
            </docs-menu-collapsible>,

            <docs-menu-collapsible heading={l10n.getString('menu-capacitor-core')}>
                <docs-nav items={this.corePlugins} />
            </docs-menu-collapsible>,

            <docs-menu-collapsible heading={l10n.getString('menu-capacitor-community')}>
                <docs-nav items={this.communityPlugins} />
            </docs-menu-collapsible>,

            <docs-menu-collapsible heading={l10n.getString('menu-capacitor-tooling')}>
                <docs-nav items={this.tooling} />
            </docs-menu-collapsible>
        ];
    }

    gettingStarted = {
        '': {
            'menu-capacitor-getting-started': '/docs/capacitor',
            'menu-native-setup': '/docs/capacitor/setup',
            'menu-native-community-v-premier': '/docs/enterprise/community-vs-enterprise'
        }
    };

    corePlugins = {
        '' : {
            'Introduction': '',
            'Accessibility': 'https://capacitorjs.com/docs/apis/accessibility',
            'App': 'https://capacitorjs.com/docs/apis/app',
            'Background Task': 'https://capacitorjs.com/docs/apis/background-task',
            'Browser': 'https://capacitorjs.com/docs/apis/browser',
            'Camera': 'https://capacitorjs.com/docs/apis/camera'
        }
    };

    communityPlugins = {
        '': {
            'Introduction': '',
            'Admob': 'https://github.com/capacitor-community/admob',
            'Apple Sign-In': 'https://github.com/capacitor-community/apple-sign-in',
            'Audio': 'https://github.com/capacitor-community/native-audio',
            'Auth0': 'https://github.com/capacitor-community/auth0',
            'Camera Preview': 'https://github.com/capacitor-community/camera-preview',
            'Contacts': 'https://github.com/capacitor-community/contacts',
            'Date Picker': 'https://github.com/capacitor-community/date-picker',
            'Facebook Login': 'https://github.com/capacitor-community/facebook-login',
            'Facebook Flipper': 'https://github.com/capacitor-community/flipper',
            'Firebase Analytics': 'https://github.com/capacitor-community/firebase-analytics',
            'Firebase Cloud Messaging': 'https://github.com/capacitor-community/fcm',
            'Firebase Crashlytics': 'https://github.com/capacitor-community/firebase-crashlytics',
            'Firebase Remote Config': 'https://github.com/capacitor-community/firebase-remote-config',
            'HTTP': 'https://github.com/capacitor-community/http',
            'Intercom': 'https://github.com/capacitor-community/intercom',
            'Media': 'https://github.com/capacitor-community/media',
            'MongoDB Realm': 'https://github.com/capacitor-community/realm',
            'Native Appstores': 'https://github.com/capacitor-community/native-market',
            'Speech Recognition': 'https://github.com/capacitor-community/speech-recognition',
            'SQLite': 'https://github.com/capacitor-community/sqlite',
            'Stripe': 'https://github.com/capacitor-community/stripe',
            'Text to Speech': 'https://github.com/capacitor-community/text-to-speech',
            'Twitter': 'https://github.com/capacitor-community/twitter'
        }
    };

    tooling = {
        '': {
            'DevApp': 'https://github.com/capacitor-community/dev-app',
            'Electron Platform': 'https://github.com/capacitor-community/electron',
            'Examples': 'https://github.com/capacitor-community/examples',
            'React Hooks': 'https://github.com/capacitor-community/react-hooks',
            'Vue CLI': 'https://github.com/capacitor-community/vue-cli-plugin-capacitor'
        }
    };

    nativeSolutions = {
        '': {
            'Overview': '/docs/enterprise/solutions',
            'Identity Vault': '/docs/enterprise/identity-vault',
            'Auth Connect': '/docs/enterprise/auth-connect',
            '': {
                'Auth0': '/docs/enterprise/auth-connect/auth0',
                'AWS Cognito': '/docs/enterprise/auth-connect/aws-cognito',
                'Azure AD B2C': '/docs/enterprise/auth-connect/azure-ad-b2c',
                'IdentityServer 4': '/docs/enterprise/auth-connect/identityserver4',
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
