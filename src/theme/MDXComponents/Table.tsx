/**
 * This file is not part of Docusaurus, it is a custom component.
 */

import React from 'react';

export default function MDXTable({ children, ...props }) {
  const tableHeadings = children[0].props.children.props.children;

  const hasTheadValue = !Array.isArray(tableHeadings) || tableHeadings.every(({ props }) => props.children);

  return (
    <div className="table-wrapper">
      <table {...props} children={hasTheadValue ? children : children.slice(1)} />
    </div>
  );
}
