/**
 * This file wraps the original Main so we don't need to modify the original code.
 *
 * Reason for modifying:
 * - Moved the navbar to the top of the page. Originally, the navbar would be placed along the top of the entire site, but we want it to be placed along the top of the docs page only.
 */

import React from 'react';
import Main from '@theme-original/DocRoot/Layout/Main';
import Navbar from '@theme/Navbar';
import type {Props} from '@theme/DocRoot/Layout/Main';

export default function MainWrapper(props: Props): JSX.Element {
  return (
    <div>
      <Navbar />
      <Main {...props} />
    </div>
  );
}
