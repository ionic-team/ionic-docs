/**
 * Original source:
 * @link https://github.com/facebook/docusaurus/blob/v3.10.2/packages/docusaurus-theme-classic/src/theme/Icon/LightMode/index.tsx
 *
 * Reason for overriding:
 * - Changed the icon to Ionic's sun mark. The artwork is drawn on a 16x16
 * grid, so only the `viewBox` differs from upstream; the rendered size still
 * matches the dark and system icons.
 * - `currentColor` is kept from upstream so the icon inherits `--navbar-icon-link-c`.
 */

import React, {type ReactNode} from 'react';
import type {Props} from '@theme/Icon/LightMode';

export default function IconLightMode(props: Props): ReactNode {
  return (
    <svg viewBox="0 0 16 16" width={24} height={24} fill="none" {...props}>
      <path
        fill="currentColor"
        d="M8 3.2a.77.77 0 0 1-.77-.77V.77a.77.77 0 1 1 1.54 0v1.66A.77.77 0 0 1 8 3.2ZM8 16a.77.77 0 0 1-.77-.77v-1.67a.77.77 0 0 1 1.54 0v1.67A.77.77 0 0 1 8 16ZM11.94 4.83a.77.77 0 0 1-.55-1.3l1.18-1.19a.77.77 0 0 1 1.09 1.09L12.48 4.6a.76.76 0 0 1-.54.22ZM2.88 13.88a.77.77 0 0 1-.54-1.3l1.18-1.19a.77.77 0 1 1 1.09 1.09l-1.18 1.18a.76.76 0 0 1-.55.22ZM15.23 8.77h-1.66a.77.77 0 0 1 0-1.54h1.66a.77.77 0 0 1 0 1.54ZM2.43 8.77H.77a.77.77 0 1 1 0-1.54h1.66a.77.77 0 1 1 0 1.54ZM13.12 13.88a.76.76 0 0 1-.55-.22l-1.18-1.18a.77.77 0 0 1 1.09-1.09l1.18 1.18a.76.76 0 0 1-.54 1.31ZM4.06 4.83a.76.76 0 0 1-.54-.22L2.34 3.43a.77.77 0 0 1 1.09-1.09L4.6 3.52a.77.77 0 0 1-.55 1.31ZM8 11.55a3.55 3.55 0 1 1 0-7.1 3.55 3.55 0 0 1 0 7.1Z"
      />
    </svg>
  );
}
