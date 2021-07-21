/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import {
  useVersions,
  useLatestVersion,
  useActiveDocContext,
} from '@theme/hooks/useDocs';
import Link from '@docusaurus/Link';
import { useDocsPreferredVersion } from '@docusaurus/theme-common';
import clsx from 'clsx';

import styles from './styles.module.scss';

const getVersionMainDoc = version =>
  version.docs.find(doc => doc.id === version.mainDocId);

export default function VersionSelector({
  docsPluginId = 'default',
  ...props
}): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const activeDocContext = useActiveDocContext(docsPluginId);
  const versions = useVersions(docsPluginId);
  const latestVersion = useLatestVersion(docsPluginId);

  const {
    preferredVersion,
    savePreferredVersionName,
  } = useDocsPreferredVersion(docsPluginId);

  function getItems() {
    const versionLinks = versions.map(version => {
      // We try to link to the same doc, in another version
      // When not possible, fallback to the "main doc" of the version
      const versionDoc =
        activeDocContext?.alternateDocVersions[version.name] ||
        getVersionMainDoc(version);
      return {
        label: version.label,
        to: versionDoc.path,
        isActive: () => version === activeDocContext?.activeVersion,
        onClick: () => {
          savePreferredVersionName(version.name);
        },
      };
    });

    const items = [...versionLinks];

    // We don't want to render a version dropdown with 0 or 1 item
    // If we build the site with a single docs version (onlyIncludeVersions: ['1.0.0'])
    // We'd rather render a button instead of a dropdown
    if (items.length <= 1) {
      return undefined;
    }

    return items;
  }

  const items = getItems();

  const { label: activeVersion } = items.find(item => item.isActive());

  return (
    <div
      {...props}
      onBlur={({ currentTarget, relatedTarget }) => {
        !currentTarget.contains(relatedTarget as Node) && setIsOpen(false);

        props.onBlur && props.onBlur();
      }}
      className={clsx('version-selector', styles.versionSelector, {
        [props.className]: Boolean(props.className),
        'version-selector--open': isOpen,
        [styles.versionSelectorOpen]: isOpen,
      })}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx('version-selector__button', styles.button)}
      >
        <span className={clsx('version-selector__title', styles.title)}>
          {activeVersion}
        </span>
        <Caret
          className={clsx('version-selector__button-icon', styles.buttonIcon)}
        />
      </button>
      <ul className={clsx('version-selector__dropdown', styles.dropdown)}>
        {items.map(({ label, isActive, ...rest }) => {
          const active = isActive();
          return (
            <li
              className={clsx(
                'version-selector__dropdown-item',
                styles.dropdownItem,
                {
                  'version-selector__dropdown-item--active': active,
                  [styles.dropdownItemActive]: active,
                },
              )}
            >
              <Link {...rest}>{label}</Link>
              {active && <Checkmark />}
            </li>
          );
        })}
        <hr />
        <li
          className={clsx(
            'version-selector__dropdown-item',
            styles.dropdownItem,
            'version-selector__dropdown-item-bottom',
            styles.dropdownItemBottom,
          )}
        >
          All Releases
        </li>
      </ul>
    </div>
  );
}

const Checkmark = props => {
  return (
    <svg
      width="12"
      height="10"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        d="M11 1L4 9 1 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Caret = props => (
  <svg
    width="7"
    height="5"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <path
      d="M1 1.25l2.5 2.5L6 1.25"
      stroke="#92A0B3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
