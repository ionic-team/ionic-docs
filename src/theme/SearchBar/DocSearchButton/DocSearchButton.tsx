import clsx from 'clsx';
import React from 'react';
import { forwardRef } from 'react';

import useThemeContext from '@theme/hooks/useThemeContext';

import styles from './styles.module.scss';

const DocSearchButton = forwardRef(({ translations, ...props }, ref) => {
  return (
    <button
      aria-label={translations.buttonAriaLabel}
      {...props}
      ref={ref}
      className={clsx(styles.docSearchButton, 'doc-search-button', {
        [props.className]: Boolean(props.className),
      })}
    >
      <SearchIcon className={styles.docSearchButtonIcon} />
      {translations.buttonText}
      <span
        className={clsx(styles.docSearchButtonKey, 'doc-search-button__key')}
      >
        ⌘K
      </span>
    </button>
  );
});

const SearchIcon = props => (
  <svg
    width="14"
    height="14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.785 12.595L10.612 9.42a5.863 5.863 0 001.175-3.528A5.9 5.9 0 005.893 0 5.9 5.9 0 000 5.893a5.9 5.9 0 005.893 5.894 5.863 5.863 0 003.528-1.175l3.174 3.173a.844.844 0 001.19-1.19zM1.684 5.893a4.21 4.21 0 118.419 0 4.21 4.21 0 01-8.42 0z"
      fill="currentColor"
    />
  </svg>
);

export default DocSearchButton;
