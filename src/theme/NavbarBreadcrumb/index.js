import React from 'react';
import clsx from 'clsx';
import { useLocation } from '@docusaurus/router';
import useThemeContext from '@theme/hooks/useThemeContext';
import {useActiveDocContext} from '@theme/hooks/useDocs';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Link from '@docusaurus/Link';
import { FrameworkDocsDarkLogo, FrameworkDocsLightLogo } from './icons';

import './breadcrumbs.css';

function NavbarBreadcrumb() {
  const { activeDoc } = useActiveDocContext();
  // const { siteConfig } = useDocusaurusContext();
  const { pathname } = useLocation();  
  const urlSegments = pathname.split('/');
  const leafPageSegment = urlSegments[urlSegments.indexOf('docs') + 1];

  let leafPageName;
  if (leafPageSegment) {
    leafPageName = leafPageSegment;

    if (leafPageName === 'cli') {
      leafPageName = leafPageName.toUpperCase();
    } else {
      leafPageName = leafPageName.split('-')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    }
  }

  const {isDarkTheme} = useThemeContext();

  return (
    <div className="breadcrumb">
      <a href={'/docs'} className="breadcrumb__logo">
        {isDarkTheme ? <FrameworkDocsDarkLogo /> : <FrameworkDocsLightLogo />}
      </a>

      {leafPageSegment && 
        <>
          /
          <span className={clsx('breadcrumb__item breadcrumb__item--active', `breadcrumb__item--${leafPageSegment}`)}>
            {activeDoc ? leafPageName : 'Page Not Found'}
          </span>
        </>
      }
    </div>
  )
}

export default NavbarBreadcrumb;
