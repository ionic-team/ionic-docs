import React from 'react';

import sidebars from '@site/sidebars';
import clsx from 'clsx';

function APIList({ sidebar, ...props }): JSX.Element {
  return (
    <div {...props} className={clsx(props.className, 'api-list')}>
      {sidebars.api.map((section) => {
        if (typeof section !== 'object') return;

        return (
          <>
            <h4>{section.label}</h4>
            <ul>
              {section.items.map((item) => {
                return (
                  item &&
                  item.replace && (
                    <li>
                      <a href={item}>{item.replace('api/', '')}</a>
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
