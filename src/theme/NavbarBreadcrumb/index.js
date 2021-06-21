import React from 'react';
// import clsx from 'clsx';
// import { useLocation } from '@docusaurus/router';
import useThemeContext from '@theme/hooks/useThemeContext';
// import {useActiveDocContext} from '@theme/hooks/useDocs';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Link from '@docusaurus/Link';
import { FrameworkDocsDarkLogo, FrameworkDocsLightLogo } from './icons';

import './breadcrumbs.css';

function NavbarBreadcrumb() {
  const {isDarkTheme} = useThemeContext();

  return (
    <div className="breadcrumb">
      <a href={'/docs'} className="breadcrumb__logo">
        {isDarkTheme ? <FrameworkDocsDarkLogo /> : <FrameworkDocsLightLogo />}
      </a>
    </div>
  )
}

export default NavbarBreadcrumb;
