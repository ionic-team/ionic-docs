import OriginalTOC from '@theme-original/TOC';
import EditThisPage from '@theme/EditThisPage';
import React from 'react';


export default function TOC(props) {
  return (
    <div className="toc-wrapper">
      <h2>Contents</h2>
      <OriginalTOC {...props} />
      <EditThisPage />
    </div>
  );
}