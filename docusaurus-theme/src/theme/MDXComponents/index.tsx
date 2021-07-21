/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { isValidElement } from 'react';
import Link from '@docusaurus/Link';
import CodeBlock, { Props } from '@theme/CodeBlock';
import Heading from '@theme/Heading';
import type { MDXComponentsObject } from '@theme/MDXComponents';

const MDXComponents: MDXComponentsObject = {
  table: ({ children, ...props }) => {
    const tableHeadings = children[0].props.children.props.children;

    const hasTheadValue =
      !Array.isArray(tableHeadings) ||
      tableHeadings.every(({ props }) => props.children);

    return (
      <div className="table-wrapper">
        <table
          {...props}
          children={hasTheadValue ? children : children.slice(1)}
        />
      </div>
    );
  },
};

export default MDXComponents;
