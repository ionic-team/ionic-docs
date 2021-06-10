import React from 'react';
import clsx from 'clsx';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import { LogoMark } from '@theme/icons';
import {useActiveDocContext} from '@theme/hooks/useDocs';

import './breadcrumbs.css';

function NavbarBreadcrumb() {
  const { activeDoc } = useActiveDocContext();
  const { siteConfig } = useDocusaurusContext();
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

  return (
    <div className="breadcrumb">
      <a href={'https://ionicframework.com'} className="breadcrumb__logo">
        <LogoMark />
        <h1>Gets here</h1>
      </a>
      / 
      {(pathname === siteConfig.baseUrl) 
        ? <span className={'breadcrumb__item breadcrumb__item--active'}>
            {siteConfig.themeConfig?.navbar?.title || 'Docs'}
          </span>
        : <Link to={siteConfig.baseUrl} className={'breadcrumb__item'}>
            {siteConfig.themeConfig?.navbar?.title || 'Docs'}
          </Link>
      }

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
