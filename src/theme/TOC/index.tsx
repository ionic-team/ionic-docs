import OriginalTOC from '@theme-original/TOC';
import EditThisPage from '@theme/EditThisPage';
import React from 'react';

export default function TOC({toc, ...props}) {
  const isEmpty = toc.length <= 0;

  if (isEmpty) return null;

  return (
    <div className="toc-wrapper">
      <h2>Contents</h2>
      <OriginalTOC toc={toc} {...props} />
      <EditThisPage />
    </div>
  );
}