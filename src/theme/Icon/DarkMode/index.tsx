/**
 * Original source:
 * @link https://github.com/facebook/docusaurus/blob/v3.10.2/packages/docusaurus-theme-classic/src/theme/Icon/DarkMode/index.tsx
 *
 * Reason for overriding:
 * - Changed the icon to Ionic's moon mark. The artwork is drawn on a 16x16
 * grid, so only the `viewBox` differs from upstream; the rendered size still
 * matches the light and system icons.
 * - `currentColor` is kept from upstream so the icon inherits `--navbar-icon-link-c`.
 */

import React, {type ReactNode} from 'react';
import type {Props} from '@theme/Icon/DarkMode';

export default function IconDarkMode(props: Props): ReactNode {
  return (
    <svg viewBox="0 0 16 16" width={24} height={24} fill="none" {...props}>
      <path
        fill="currentColor"
        d="M4.30769 3.38462C4.30769 2.20692 4.48115 1.015 4.92308 0C1.98346 1.27962 0 4.28154 0 7.69231C0 12.2804 3.71962 16 8.30769 16C11.7185 16 14.7204 14.0165 16 11.0769C14.985 11.5188 13.7931 11.6923 12.6154 11.6923C8.02731 11.6923 4.30769 7.97269 4.30769 3.38462Z"
      />
    </svg>
  );
}
