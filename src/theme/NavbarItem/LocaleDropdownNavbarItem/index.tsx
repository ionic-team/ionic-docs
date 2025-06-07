/**
 * Original source:
 * @link https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-theme-classic/src/theme/NavbarItem/LocaleDropdownNavbarItem/index.tsx
 *
 * Reasons for overriding:
 * - Add a span with a visually hidden class in order to hide the text. We only want to show the language icon.
 * - Removed the original styles that were applied to the language icon. We want to use our own styles.
 */

import React, { type ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useAlternatePageUtils } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import { useLocation } from '@docusaurus/router';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import IconLanguage from '@theme/Icon/Language';
import type { LinkLikeNavbarItemProps } from '@theme/NavbarItem';
import type { Props } from '@theme/NavbarItem/LocaleDropdownNavbarItem';

import styles from '@docusaurus/theme-classic/lib/theme/NavbarItem/LocaleDropdownNavbarItem/styles.module.css';
import customStyles from './styles.module.css';

export default function LocaleDropdownNavbarItem({
  mobile,
  dropdownItemsBefore,
  dropdownItemsAfter,
  queryString = '',
  ...props
}: Props): ReactNode {
  const {
    i18n: { currentLocale, locales, localeConfigs },
  } = useDocusaurusContext();
  const alternatePageUtils = useAlternatePageUtils();
  const { search, hash } = useLocation();

  const localeItems = locales.map((locale): LinkLikeNavbarItemProps => {
    const baseTo = `pathname://${alternatePageUtils.createUrl({
      locale,
      fullyQualified: false,
    })}`;
    // preserve ?search#hash suffix on locale switches
    const to = `${baseTo}${search}${hash}${queryString}`;
    return {
      label: localeConfigs[locale]!.label,
      lang: localeConfigs[locale]!.htmlLang,
      to,
      target: '_self',
      autoAddBaseUrl: false,
      className:
        // eslint-disable-next-line no-nested-ternary
        locale === currentLocale
          ? // Similar idea as DefaultNavbarItem: select the right Infima active
            // class name. This cannot be substituted with isActive, because the
            // target URLs contain `pathname://` and therefore are not NavLinks!
            mobile
            ? 'menu__link--active'
            : 'dropdown__link--active'
          : '',
    };
  });

  const items = [...dropdownItemsBefore, ...localeItems, ...dropdownItemsAfter];

  // Mobile is handled a bit differently
  const dropdownLabel = mobile
    ? translate({
        message: 'Languages',
        id: 'theme.navbar.mobileLanguageDropdown.label',
        description: 'The label for the mobile language switcher dropdown',
      })
    : localeConfigs[currentLocale]!.label;

  return (
    <DropdownNavbarItem
      {...props}
      mobile={mobile}
      label={
        <>
          <IconLanguage className={styles.iconLanguage} />
          {/* CUSTOM CODE - added span in order to hide the text */}
          <span className={customStyles.localeVisuallyHidden}>{dropdownLabel}</span>
        </>
      }
      items={items}
    />
  );
}
