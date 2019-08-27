import en from './assets/locales/en/messages.json';
import ja from './assets/locales/ja/messages.json';

const MESSAGES_ALL = {
  'en': en,
  'ja': ja
};

export class DocsLocalization {
  private readonly locale: string;
  private readonly bundle: { [id: string]: string };

  constructor() {
    const prefix = /^\/docs\/([a-z]{2}\b)?/;
    const [, language] = prefix.exec(window.location.pathname);
    this.locale = language && MESSAGES_ALL.hasOwnProperty(language) ? language : 'en';
    this.bundle = MESSAGES_ALL[this.locale];
  }

  getLocale = () => this.locale;

  getString = (id: string) => this.bundle[id] || en[id];
}

export const l10n = new DocsLocalization();
