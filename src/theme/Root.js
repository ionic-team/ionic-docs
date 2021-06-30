import React from 'react';

import ServerStyle from '@theme/ServerStyle';

function Root({ children }) {
  return (
    <>
      <ServerStyle from={children} key={Math.random()} />
      {children}
    </>
  );
}

export default Root;
