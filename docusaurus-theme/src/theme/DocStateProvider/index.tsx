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
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <DocStateContext.Provider
      value={{
        mobileSidebarLoaded,
        setMobileSidebarLoaded,
        mobileSidebarOpen,
        setMobileSidebarOpen,
      }}
    >
      {props.children}
    </DocStateContext.Provider>
  );
}

export default DocStateProvider;
