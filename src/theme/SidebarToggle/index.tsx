import React from 'react';
import clsx from 'clsx';
import useUserPreferencesContext from '@theme/hooks/useUserPreferencesContext';
import { translate } from '@docusaurus/Translate';

import styles from './styles.module.scss';

export default function SidebarToggle(props) {
  const { setSidebarOpen, sidebarOpen } = useUserPreferencesContext();

  return (
    <button
      aria-label={
        sidebarOpen
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
      {...props}
      className={clsx(
        props.className,
        'sidebar-toggle--mobile',
        styles.sidebarToggle,
      )}
      onClick={() => setSidebarOpen(!sidebarOpen)}
    >
      ⋮
    </button>
  );
}
