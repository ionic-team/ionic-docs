import React from 'react';

import sidebars from '../../../sidebars';

function APIList(props): JSX.Element {

  // console.log('test', sidebars.api)
  return (
    <div>
      {sidebars.api.map(section => {
        if (typeof section !== 'object') return;
        
        return (
          <>
            <h4>{section.label}</h4>
            <ul>
            {section.items.map(item => {
              return item && item.replace && 
                <li><a href={item}>{item.replace('api/','')}</a></li>
            })}
            </ul>
          </>
        )
      })}
    </div>
  );
}

export default APIList;