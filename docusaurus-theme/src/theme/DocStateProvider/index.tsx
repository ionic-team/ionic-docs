/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';

import DocStateContext from '@theme/DocStateContext';
import type { Props } from '@theme/DocStateProvider';

function DocStateProvider(props: Props): JSX.Element {
  const [mobileSidebarLoaded, setMobileSidebarLoaded] = useState(false);
  const [mobileNavbarSidebarLoaded, setMobileNavbarSidebarLoaded] =
    useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [mobileNavbarSidebarOpen, setMobileNavbarSidebarOpen] = useState(false);

  return (
    <DocStateContext.Provider
      value={{
        mobileSidebarLoaded,
        setMobileSidebarLoaded,
        mobileSidebarOpen,
        setMobileSidebarOpen,
        mobileNavbarSidebarLoaded,
        setMobileNavbarSidebarLoaded,
        mobileNavbarSidebarOpen,
        setMobileNavbarSidebarOpen,
      }}
    >
      {props.children}
    </DocStateContext.Provider>
  );
}

export default DocStateProvider;
