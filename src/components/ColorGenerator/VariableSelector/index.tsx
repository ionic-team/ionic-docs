import clsx from 'clsx';
import React, { FormEvent, useContext, useEffect, useState } from 'react';
import { ColorGeneratorContext } from '..';
import { generateColor, generateProperty } from '../util/parse-css';

import styles from './styles.module.css';

type VariableSelectorProps = {
  name: string;
  isParentOpen?: boolean;
};

const VariableSelector: React.FC<VariableSelectorProps> = ({
  name,
  isParentOpen = false,
  ...props
}) => {
  const { state, controls } = useContext(ColorGeneratorContext);
  const value = state.colors.get(name).value;

  const [showNameError, setShowNameError] = useState(false);
  const [showValueError, setShowValueError] = useState(false);
  const [isValueInputFocused, setIsValueInputFocused] = useState(false);

  const onColorChange = (ev: FormEvent<HTMLInputElement>) => {
    const input = ev.currentTarget as any;
    const val = input.value.trim();

    controls.setColors(colors => {
      const genColor = generateColor(val);
      const property = generateProperty(name);

      colors.set(name, {
        ...genColor,
        property,
      });

      return new Map(colors);
    });
  };

  const isValidHex = (str: string | undefined): boolean => {
    return typeof str !== 'undefined' ? /^#[0-9A-F]{6}$/i.test(str) : false;
  };

  const validateValue = () => {
    const isValidHexVar = isValidHex(value);
    setShowValueError(
      isValidHexVar && typeof value !== 'undefined' && value.length === 7
        ? false
        : true,
    );
  };

  return (
    <div
      {...props}
      className={clsx({
        [props.className]: Boolean(props.className),
        [styles.variableSelector]: true,
        [styles.variableSelectorNameError]: showNameError,
        [styles.variableSelectorValueError]: showValueError,
      })}
    >
      <div className={styles.name}>
        <i className={styles.swatch} style={{ backgroundColor: value }}></i>
        <span>{name}</span>
        {showNameError && (
          <span className={styles.error}>
            Please enter a valid name without special characters.
          </span>
        )}
      </div>
      <div className={styles.formGroup}>
        <div
          className={clsx({
            [styles.input]: true,
            [styles.inputValue]: true,
            [styles.inputFocused]: isValueInputFocused,
          })}
          onClick={ev => {
            // if (isParentOpen) {
            //   ev.stopPropagation();
            // }
          }}
        >
          <div className={styles.colorWrap} style={{ backgroundColor: value }}>
            <input
              type="color"
              value={value}
              onInput={onColorChange}
              tabIndex={-1}
            />
          </div>
          <input type="text" value={value} onInput={onColorChange} />
        </div>

        {showValueError && (
          <span className={styles.error}>
            Please enter a valid six digit hex code.
          </span>
        )}
      </div>
    </div>
  );
};

export default VariableSelector;
