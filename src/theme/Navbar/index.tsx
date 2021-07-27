/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useCallback, useState, useEffect } from 'react';
import clsx from 'clsx';

import SearchBar from '@theme/SearchBar';
import Toggle from '@theme/Toggle';
import useThemeContext from '@theme/hooks/useThemeContext';
import { useThemeConfig } from '@docusaurus/theme-common';
import useHideableNavbar from '@theme/hooks/useHideableNavbar';
import useLockBodyScroll from '@theme/hooks/useLockBodyScroll';
import useUserPreferencesContext from '@theme/hooks/useUserPreferencesContext';
import { useActiveVersion } from '@theme/hooks/useDocs';
import useWindowSize, { windowSizes } from '@theme/hooks/useWindowSize';
import NavbarItem from '@theme/NavbarItem';
import Logo from '@theme/Logo';
import IconMenu from '@theme/IconMenu';
import { translate } from '@docusaurus/Translate';

import styles from './styles.module.scss';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import SidebarToggle from '@theme/SidebarToggle';
import Backdrop from '@theme/Backdrop';
import { Link } from 'react-router-dom';

// retrocompatible with v1
const DefaultNavItemPosition = 'right';

// If split links by left/right
// if position is unspecified, fallback to right (as v1)
function splitNavItemsByPosition(items) {
  const leftItems = items.filter(
    item => (item.position ?? DefaultNavItemPosition) === 'left',
  );
  const rightItems = items.filter(
    item => (item.position ?? DefaultNavItemPosition) === 'right',
  );
  return {
    leftItems,
    rightItems,
  };
}

function Navbar(): JSX.Element {
  const {
    navbar: { items, hideOnScroll, style },
    colorMode: { disableSwitch: disableColorModeSwitch },
  } = useThemeConfig();
  const {
    siteConfig: {
      customFields: {
        navbar: { items: customItems },
      },
    },
  } = useDocusaurusContext();
  const { path: homePath } = useActiveVersion();
  const [navbarSidebarOpen, setNavbarSidebarOpen] = useState(false);
  const { sidebarOpen, setSidebarOpen } = useUserPreferencesContext();
  const { isDarkTheme, setLightTheme, setDarkTheme } = useThemeContext();
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);

  useLockBodyScroll(sidebarOpen);
  useLockBodyScroll(navbarSidebarOpen);

  const showSidebar = useCallback(() => {
    setSidebarOpen(true);
  }, []);
  const hideSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  const showNavbarSidebar = useCallback(() => {
    setNavbarSidebarOpen(true);
  }, []);
  const hideNavbarSidebar = useCallback(() => {
    setNavbarSidebarOpen(false);
  }, []);

  const onToggleChange = useCallback(
    e => (e.target.checked ? setDarkTheme() : setLightTheme()),
    [setLightTheme, setDarkTheme],
  );

  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize === windowSizes.desktop) {
      hideSidebar();
      hideNavbarSidebar();
    }
  }, [windowSize]);

  const hasSearchNavbarItem = items.some(item => item.type === 'search');
  const { leftItems, rightItems } = splitNavItemsByPosition(items);

  return (
    <nav
      ref={navbarRef}
      className={clsx('navbar', 'navbar--fixed-top', {
        'navbar--dark': style === 'dark',
        'navbar--primary': style === 'primary',
        'navbar-sidebar--show': navbarSidebarOpen,
        [styles.navbarHideable]: hideOnScroll,
        [styles.navbarHidden]: hideOnScroll && !isNavbarVisible,
      })}
    >
      <div className="navbar__inner">
        <div className="navbar__items navbar__items--left">
          {items != null && items.length !== 0 && (
            <button
              aria-label="Navigation bar toggle"
              className="navbar__toggle clean-btn"
              type="button"
              tabIndex={0}
              onClick={showSidebar}
              onKeyDown={showSidebar}
            >
              <IconMenu />
            </button>
          )}
          <Link to={homePath}>
            <Logo
              className="navbar__brand"
              imageClassName="navbar__logo"
              titleClassName="navbar__title"
            />
          </Link>
          {leftItems.map((item, i) => (
            <NavbarItem {...item} key={i} />
          ))}
        </div>
        <div className="navbar__items navbar__items--right">
          {rightItems.map((item, i) => (
            <NavbarItem {...item} key={i} />
          ))}
          {!disableColorModeSwitch && (
            <Toggle
              className={styles.displayOnlyInLargeViewport}
              checked={isDarkTheme}
              onChange={onToggleChange}
            />
          )}
          {!hasSearchNavbarItem && <SearchBar />}
        </div>
        <div className="navbar__items navbar__items--custom">
          {customItems.map((item, i) => (
            <NavbarItem {...item} key={i} />
          ))}
        </div>
        {windowSize === windowSizes.mobile && (
          <button
            aria-label={
              navbarSidebarOpen
                ? translate({
                    id: 'theme.docs.sidebar.responsiveCloseButtonLabel',
                    message: 'Close menu',
                    description:
                      'The ARIA label for close button of mobile doc sidebar',
                  })
                : translate({
                    id: 'theme.docs.sidebar.responsiveOpenButtonLabel',
                    message: 'Open menu',
                    description:
                      'The ARIA label for open button of mobile doc sidebar',
                  })
            }
            aria-haspopup="true"
            className={clsx(
              'navbar-sidebar-toggle',
              styles.navbarSidebarToggle,
            )}
            onClick={showNavbarSidebar}
          >
            ⋮
          </button>
        )}
      </div>
      <Backdrop
        onClick={() => {
          hideSidebar();
          hideNavbarSidebar();
        }}
        visible={sidebarOpen || navbarSidebarOpen}
      />
      <div className={clsx('navbar-sidebar', styles.navbarSidebar)}>
        <div className="navbar-sidebar__brand">
          <Link to={homePath}>
            <Logo
              className="navbar__brand"
              imageClassName="navbar__logo"
              titleClassName="navbar__title"
              onClick={hideSidebar}
            />
          </Link>
          {!disableColorModeSwitch && (
            <Toggle checked={isDarkTheme} onChange={onToggleChange} />
          )}
        </div>
        <div className="navbar-sidebar__items">
          <div className="menu">
            <ul className="menu__list">
              {items.map((item, i) => (
                <NavbarItem
                  mobile
                  {...(item as any)} // TODO fix typing
                  onClick={hideSidebar}
                  key={i}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
