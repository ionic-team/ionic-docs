import OriginalSidebar from '@theme-original/DocSidebar';
import React from 'react';
import FrameworkSelector from '@theme/FrameworkSelector';
import Logo from '@theme/Logo';
import VersionSelector from '@theme/VersionSelector';


export default function DocSidebar(props) {
  return (
    <>
      <div>
       <Logo /> 
       <VersionSelector />
      </div>
      <FrameworkSelector />
      <OriginalSidebar {...props} />
    </>
  );
}