/**
 * This file wraps the original DocSidebar so we don't need to modify the original code.
 *
 * Reason for modifying:
 * - Add a logo to the top of the sidebar
 * - Scroll to the active item in the sidebar
 */

import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import DocSidebar from '@theme-original/DocSidebar';
import type { Props } from '@theme/DocSidebar';

import Logo from '@theme-original/Logo';

export default function DocSidebarWrapper(props: Props): JSX.Element {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const activeItem = document.querySelector('.menu__link--active');
      if (activeItem && activeItem.scrollIntoView) {
        activeItem.scrollIntoView({ block: 'center', behavior: 'auto' });
      }
    }, 100);
  }, [location.pathname]);

  return (
    <>
      <Logo />
      <DocSidebar {...props} />
    </>
  );
}
