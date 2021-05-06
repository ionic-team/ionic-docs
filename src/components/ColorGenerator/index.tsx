import React, { useEffect } from 'react';

import './color-generator.css';

interface ColorGeneratorProps {
  mode?: 'ios' | 'md'
}

const ColorGenerator = (props: ColorGeneratorProps): JSX.Element => {
  useEffect(() => {
    console.log('color generator loading', props);
    const iframe = document.querySelector('.docs-demo-device.ios iframe') as any;
    const iframeDocument = iframe.contentWindow || iframe.contentDocument;
    console.log(iframeDocument)
    iframeDocument.alert('This is called from inside the iframe')

    console.log(iframe);
    return () => {
      console.log('leaving color generator')
    };
  }, []);
  return (
    <div><h1>it's working!</h1></div>
  );
}

export default ColorGenerator;