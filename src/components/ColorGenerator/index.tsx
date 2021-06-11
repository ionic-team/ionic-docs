import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import styles from './styles.module.css';
import SelectColors from './SelectColors';

import { MDXTag } from '@mdx-js/tag';
// import { useMDXComponents } from '@mdx-js/react';

import {
  convertCssToColors,
  generateColor,
  updateCssText,
} from './util/parse-css';
import LiveCodeBlock from './LiveCodeBlock';

interface ColorGeneratorProps {
  mode?: 'ios' | 'md';
  [key: string]: any;
}

export const ColorGeneratorContext = createContext(undefined);

const ATTR_MAP = {
  value: '',
  valueRgb: '-rgb',
  contrast: '-contrast',
  contrastRgb: '-contrast-rgb',
  shade: '-shade',
  tint: '-tint',
};

const ColorGenerator = (props: ColorGeneratorProps) => {
  // const components = useMDXComponents();
  const [cssText, setCssText] = useState(CSS_TEXT);
  const [colors, setColors] = useState(convertCssToColors(CSS_TEXT));

  const textContent = useRef(CSS_TEXT);

  // useEffect(() => {
  //   const iframe = document.querySelector('.docs-demo-device iframe') as any;
  //   const iframeDocument = iframe.contentWindow || iframe.contentDocument;
  //   iframeDocument.alert('This is called from inside the iframe');
  // }, []);

  useEffect(() => {
    setColors(convertCssToColors(cssText));
    textContent.current = cssText;

    const event = new CustomEvent('demoMessage', { detail: { cssText } });
    window.dispatchEvent(event);
  }, [cssText]);

  useEffect(() => {
    Array.from(colors).forEach(([_, color]) => {
      const keys = (Object.keys(ATTR_MAP) as any) as (keyof typeof ATTR_MAP)[];
      const genColor = generateColor(color.value);
      for (const key of keys) {
        setCssText(cssText =>
          updateCssText(color.property + ATTR_MAP[key], cssText, genColor[key]),
        );
      }
    });
  }, [colors]);

  return (
    <section className={styles.colorGenerator}>
      <ColorGeneratorContext.Provider
        value={{ controls: { setColors }, state: { colors } }}
      >
        <SelectColors />
        {cssText && (
          <MDXTag
            name="code"
            live
            className="language-css"
            components={{
              code: props => (
                <LiveCodeBlock
                  {...props}
                  language="css"
                  onChange={code => (textContent.current = code)}
                  onBlur={() => setCssText(textContent.current)}
                  onMouseOut={() => setCssText(textContent.current)}
                />
              ),
            }}
          >
            {cssText}
          </MDXTag>
        )}
      </ColorGeneratorContext.Provider>
    </section>
  );
};

export default ColorGenerator;

const CSS_TEXT = `
:root {
  --ion-color-primary: #3880ff;
  --ion-color-primary-rgb: 56,128,255;
  --ion-color-primary-contrast: #ffffff;
  --ion-color-primary-contrast-rgb: 255,255,255;
  --ion-color-primary-shade: #3171e0;
  --ion-color-primary-tint: #4c8dff;

  --ion-color-secondary: #3dc2ff;
  --ion-color-secondary-rgb: 61,194,255;
  --ion-color-secondary-contrast: #ffffff;
  --ion-color-secondary-contrast-rgb: 255,255,255;
  --ion-color-secondary-shade: #36abe0;
  --ion-color-secondary-tint: #50c8ff;

  --ion-color-tertiary: #5260ff;
  --ion-color-tertiary-rgb: 82,96,255;
  --ion-color-tertiary-contrast: #ffffff;
  --ion-color-tertiary-contrast-rgb: 255,255,255;
  --ion-color-tertiary-shade: #4854e0;
  --ion-color-tertiary-tint: #6370ff;

  --ion-color-success: #2dd36f;
  --ion-color-success-rgb: 45,211,111;
  --ion-color-success-contrast: #ffffff;
  --ion-color-success-contrast-rgb: 255,255,255;
  --ion-color-success-shade: #28ba62;
  --ion-color-success-tint: #42d77d;

  --ion-color-warning: #ffc409;
  --ion-color-warning-rgb: 255,196,9;
  --ion-color-warning-contrast: #000000;
  --ion-color-warning-contrast-rgb: 0,0,0;
  --ion-color-warning-shade: #e0ac08;
  --ion-color-warning-tint: #ffca22;

  --ion-color-danger: #eb445a;
  --ion-color-danger-rgb: 235,68,90;
  --ion-color-danger-contrast: #ffffff;
  --ion-color-danger-contrast-rgb: 255,255,255;
  --ion-color-danger-shade: #cf3c4f;
  --ion-color-danger-tint: #ed576b;

  --ion-color-dark: #222428;
  --ion-color-dark-rgb: 34,36,40;
  --ion-color-dark-contrast: #ffffff;
  --ion-color-dark-contrast-rgb: 255,255,255;
  --ion-color-dark-shade: #1e2023;
  --ion-color-dark-tint: #383a3e;

  --ion-color-medium: #92949c;
  --ion-color-medium-rgb: 146,148,156;
  --ion-color-medium-contrast: #ffffff;
  --ion-color-medium-contrast-rgb: 255,255,255;
  --ion-color-medium-shade: #808289;
  --ion-color-medium-tint: #9d9fa6;

  --ion-color-light: #f4f5f8;
  --ion-color-light-rgb: 244,245,248;
  --ion-color-light-contrast: #000000;
  --ion-color-light-contrast-rgb: 0,0,0;
  --ion-color-light-shade: #d7d8da;
  --ion-color-light-tint: #f5f6f9;
}
`;
