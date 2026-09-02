/**
 * This file is not part of Docusaurus, it is a custom component.
 */

import React, { type ComponentProps, type ReactElement, type ReactNode } from 'react';

/** One `<th>` or `<td>`, the deepest level this component reaches into. */
type Cell = ReactElement<{ children?: ReactNode }>;

/**
 * The `<thead>` and `<tbody>` MDX hands to a table. Only the head is inspected, to
 * work out whether it holds any content, so the body is left as a plain element.
 */
type TableSection = ReactElement<{ children: ReactElement<{ children: Cell | Cell[] }> }>;

export default function MDXTable({
  children,
  ...props
}: Omit<ComponentProps<'table'>, 'children'> & { children: TableSection[] }) {
  const tableHeadings = children[0].props.children.props.children;

  const hasTheadValue = !Array.isArray(tableHeadings) || tableHeadings.every(({ props }) => props.children);

  return (
    <div className="table-wrapper">
      <table {...props} children={hasTheadValue ? children : children.slice(1)} />
    </div>
  );
}
