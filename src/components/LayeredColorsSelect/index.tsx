import CodeColor from '@site/src/components/CodeColor';
import React, { useEffect, useRef, useState } from 'react';
import { IonSelect, IonSelectOption } from '@ionic/react';

import styles from './styles.module.css';

export default function LayeredColorsSelect({ ...props }) {
  const [color, setColor] = useState('primary');
  const el = useRef<HTMLDivElement>(null);

  const selectOptions = {
    header: 'Select a Color',
    subHeader: 'The variations of the color will reflect in the table',
    cssClass: 'layered-colors-select-interface',
  };

  const [variations, setVariations] = useState([]);

  useEffect(() => {
    setVariations([
      {
        property: `--ion-color-${color}`,
        name: 'Base',
        description: 'The main color that all variations are derived from',
        value: getComputedStyle(el.current).getPropertyValue(
          `--ion-color-${color}`,
        ),
      },
      {
        property: `--ion-color-${color}-rgb`,
        name: 'Base (rgb)',
        rgb: true,
        description: 'The base color in red, green, blue format',
        value: getComputedStyle(el.current).getPropertyValue(
          `--ion-color-${color}-rgb`,
        ),
      },
      {
        property: `--ion-color-${color}-contrast`,
        name: 'Contrast',
        description:
          'The opposite of the base color, should be visible against the base color',
        value: getComputedStyle(el.current).getPropertyValue(
          `--ion-color-${color}-contrast`,
        ),
      },
      {
        property: `--ion-color-${color}-contrast-rgb`,
        name: 'Contrast (rgb)',
        rgb: true,
        description: 'The contrast color in red, green, blue format',
        value: getComputedStyle(el.current).getPropertyValue(
          `--ion-color-${color}-contrast-rgb`,
        ),
      },
      {
        property: `--ion-color-${color}-shade`,
        name: 'Shade',
        description: 'A slightly darker version of the base color',
        value: getComputedStyle(el.current).getPropertyValue(
          `--ion-color-${color}-shade`,
        ),
      },
      {
        property: `--ion-color-${color}-tint`,
        name: 'Tint',
        description: 'A slightly lighter version of the base color',
        value: getComputedStyle(el.current).getPropertyValue(
          `--ion-color-${color}-tint`,
        ),
      },
    ]);
  }, [color]);

  return (
    <div {...props} ref={el} className={styles.layeredColorsSelect}>
      <button className={styles.colorSelect}>
        <span
          className={styles.colorDot}
          style={
            {
              'background-color': `var(--ion-color-${color})`,
            } as any
          }
        />
        <IonSelect
          value={color}
          interfaceOptions={selectOptions}
          onIonChange={ev => setColor((ev.target as HTMLSelectElement).value)}
        >
          <IonSelectOption value="primary">Primary</IonSelectOption>
          <IonSelectOption value="secondary">Secondary</IonSelectOption>
          <IonSelectOption value="tertiary">Tertiary</IonSelectOption>
          <IonSelectOption value="success">Success</IonSelectOption>
          <IonSelectOption value="warning">Warning</IonSelectOption>
          <IonSelectOption value="danger">Danger</IonSelectOption>
          <IonSelectOption value="dark">Dark</IonSelectOption>
          <IonSelectOption value="medium">Medium</IonSelectOption>
          <IonSelectOption value="light">Light</IonSelectOption>
        </IonSelect>
      </button>
      <table>
        <tr>
          <th>Name</th>
          <th>Property</th>
          <th>Default Value</th>
          <th>Description</th>
        </tr>
        {variations.map(variation => {
          const codeColor = variation.rgb
            ? `rgb(${variation.value})`
            : `${variation.value}`;

          return (
            <tr>
              <td className={styles.colorName}>{variation.name}</td>
              <td className={styles.colorProperty}>
                <code>{variation.property}</code>
              </td>
              <td className={styles.colorValue}>
                <CodeColor
                  mode="md"
                  display={variation.value}
                  value={codeColor}
                ></CodeColor>
              </td>
              <td className={styles.colorDescription}>
                {variation.description}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
