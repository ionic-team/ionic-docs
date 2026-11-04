import React, { type ComponentProps, type ReactNode } from 'react';

import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import sidebars from '@site/sidebars';
import clsx from 'clsx';

function APIList({ sidebar, ...props }: ComponentProps<'div'> & { sidebar?: unknown }): ReactNode {
  return (
    <div {...props} className={clsx(props.className, 'api-list')}>
      {sidebars.api.map((section) => {
        if (typeof section !== 'object') return;

        return (
          <>
            <Heading as="h4">{section.label}</Heading>
            <ul>
              {section.items.map((item) => {
                return (
                  item &&
                  item.replace && (
                    <li>
                      <Link to={`/${item}`}>{item.replace('api/', '')}</Link>
                    </li>
                  )
                );
              })}
            </ul>
          </>
        );
      })}
    </div>
  );
}

export default APIList;
