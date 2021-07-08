import React, { useState } from 'react';
import { useEffect } from 'react';
import useUserPreferencesContext from '@theme/hooks/useUserPreferencesContext';
import clsx from 'clsx';

import styles from './styles.module.scss';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useLocalStorage from '@theme/hooks/useLocalStorage';

export default function FrameworkSelector(props) {
  const [activeFramework, setActiveFramework] = useLocalStorage(
    'ionic-docs--framework',
    'react',
  );
  const [isOpen, setIsOpen] = useState(false);
  const { setTabGroupChoices } = useUserPreferencesContext();
  const {
    siteConfig: {
      customFields: { frameworks },
    },
  } = useDocusaurusContext();

  useEffect(() => {
    setTabGroupChoices('framework', activeFramework);
    setIsOpen(false);
  }, [activeFramework]);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div
      {...props}
      className={clsx('framework-selector', styles.frameworkSelector, {
        [props.className]: Boolean(props.className),
        'framework-selector--open': isOpen,
        [styles.frameworkSelectorOpen]: isOpen,
      })}
      onBlur={({ currentTarget, relatedTarget }) => {
        !currentTarget.contains(relatedTarget) && setIsOpen(false);
      }}
    >
      <button
        className={clsx('framework-selector__button', styles.button)}
        aria-label="framework selector dropdown"
        id="frameworkSelector"
        onClick={() => setIsOpen(!isOpen)}
      >
        {capitalizeFirstLetter(activeFramework)}
      </button>
      <ul
        className={clsx('framework-selector__dropdown', styles.dropdown)}
        aria-labelledby="frameworkSelector"
      >
        {frameworks
          .filter(f => f !== activeFramework)
          .map(framework => (
            <li
              className={clsx(
                'framework-selector__dropdown-item',
                styles.dropdownItem,
              )}
            >
              <button
                onClick={() => {
                  setActiveFramework(framework.toLowerCase());
                }}
              >
                {capitalizeFirstLetter(framework)}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
