import React, { useState } from 'react';
import { useEffect } from 'react';
import useUserPreferencesContext from '@theme/hooks/useUserPreferencesContext';
import clsx from 'clsx';

import styles from './styles.module.scss';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useLocalStorage from '@theme/hooks/useLocalStorage';
import useThemeContext from '@theme/hooks/useThemeContext';

import AngularIcon from './assets/icon-angular.svg';
import JavascriptIcon from './assets/icon-javascript.svg';
import ReactIcon from './assets/icon-react.svg';
import VueIcon from './assets/icon-vue.svg';
import { FRAMEWORK_ID } from '@theme/Tabs';

const ICON_LIST = {
  angular: <AngularIcon />,
  javascript: <JavascriptIcon />,
  react: <ReactIcon />,
  vue: <VueIcon />,
};

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
    setTabGroupChoices(FRAMEWORK_ID, activeFramework);
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

        props.onBlur && props.onBlur();
      }}
    >
      <button
        className={clsx('framework-selector__button', styles.button)}
        aria-label="framework selector dropdown"
        id="frameworkSelector"
        onClick={() => setIsOpen(!isOpen)}
      >
        {ICON_LIST[activeFramework]}
        {capitalizeFirstLetter(activeFramework)}
      </button>
      <ul
        className={clsx('framework-selector__dropdown', styles.dropdown)}
        aria-labelledby="frameworkSelector"
      >
        {frameworks.map(framework => {
          const isActive = framework.toLowerCase() === activeFramework;

          return (
            <li
              className={clsx(
                'framework-selector__dropdown-item',
                styles.dropdownItem,
                {
                  'framework-selector__dropdown-item--active': isActive,
                  [styles.dropdownItemActive]: isActive,
                },
              )}
            >
              <button
                onClick={() => {
                  setActiveFramework(framework.toLowerCase());
                }}
              >
                <div className="start">
                  {ICON_LIST[framework]}
                  {capitalizeFirstLetter(framework)}
                </div>
                {isActive && <Checkmark />}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const Checkmark = () => {
  const { isDarkTheme } = useThemeContext();

  return (
    <svg width="12" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 1L4 9 1 6"
        stroke={isDarkTheme ? '#fff' : '#03060B'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
