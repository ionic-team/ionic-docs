import { h } from '@stencil/core';

import { Outbound } from '../../icons';
import { l10n } from '../../l10n';

const isExternalLink = (href: string) => {
  return href.indexOf('http') === 0;
};

export const link = (item: [string, string]) => {
  const [id, href] = item;
  const text = l10n.getString(id) || id;
  const isExternal = isExternalLink(href);

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        class="Nav-link outbound"
      >
        <span>{text}</span> <Outbound/>
      </a>
    );
  }

  const prefix = /^\/docs(\/[a-z]{2})?\//;
  const language = l10n.getLocale();
  const url = language !== 'en'
    ? `/docs/${language}/${href.replace(prefix, '')}`
    : href;

  return (
    <stencil-route-link
      url={url}
      strict={false}
      exact
      activeClass="Nav-link--active"
      anchorClass="Nav-link"
    >
      <span>{text}</span>
    </stencil-route-link>
  );
};
