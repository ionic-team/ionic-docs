import React from 'react';
import CodeColor from '../CodeColor';
import { useState } from 'react';
import { generateColor } from '../ColorGenerator/util/parse-css';
import { useEffect } from 'react';

import styles from './index.module.scss';
import '../../_assets/styles/index.scss';

export default function ColorGenerator() {
  const [name, setName] = useState('New');
  const [value, setValue] = useState('#69bb7b');
  const [color, setColor] = useState(generateColor(value));

  useEffect(() => {
    setColor(generateColor(value));
  }, [value])

  const nameLower = name.trim().toLowerCase();
  const { value: colorValue, valueRgb, contrast, contrastRgb, tint, shade } = color;

    return <div className={styles.newColorGenerator}>
      <div className={styles.top}>
        <div className={styles.top__start}>
          <div className={styles.codeColor} style={{ backgroundColor: value }}/>
          <input onChange={({target}) => setName(target.value)} value={name} className={styles.nameInput}/>
        </div>
        <div className={styles.top__end}>
          <div className={styles.colorPickerWrapper} style={{ '--background-c': value } as any}>
            <input type="color" onChange={({target}) => setValue(target.value)} value={value} className={styles.colorPicker}/>
          </div>
          <input onChange={({target}) => setValue(target.value)} value={value}  className={styles.colorInput}/>
        </div>
      </div>
      <pre>
        <code>
          :root {'{'}{'\n'}
          {'\t'}--ion-color-{nameLower}: <CodeColor value={colorValue}>{colorValue}</CodeColor>;{'\n'}
          {'\t'}--ion-color-{nameLower}-rgb: <CodeColor value={colorValue}>{valueRgb}</CodeColor>;{'\n'}
          {'\t'}--ion-color-{nameLower}-contrast: <CodeColor value={contrast}>{contrast}</CodeColor>;{'\n'}
          {'\t'}--ion-color-{nameLower}-contrast-rgb: <CodeColor value={contrast}>{contrastRgb}</CodeColor>;{'\n'}
          {'\t'}--ion-color-{nameLower}-shade: <CodeColor value={shade}>{shade}</CodeColor>;{'\n'}
          {'\t'}--ion-color-{nameLower}-tint: <CodeColor value={tint}>{tint}</CodeColor>;{'\n'}
          {'}'}{'\n'}
          {'\n'}
          .ion-color-{nameLower} {'{'}{'\n'}
          {'\t'}--ion-color-base: var(--ion-color-{nameLower});{'\n'}
          {'\t'}--ion-color-base-rgb: var(--ion-color-{nameLower}-rgb);{'\n'}
          {'\t'}--ion-color-contrast: var(--ion-color-{nameLower}-contrast);{'\n'}
          {'\t'}--ion-color-contrast-rgb: var(--ion-color-{nameLower}-contrast-rgb);{'\n'}
          {'\t'}--ion-color-shade: var(--ion-color-{nameLower}-shade);{'\n'}
          {'\t'}--ion-color-tint: var(--ion-color-{nameLower}-tint);{'\n'}
          {'}'}
        </code>
      </pre>
    </div>;
}

