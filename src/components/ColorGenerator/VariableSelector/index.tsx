import clsx from 'clsx';
import React, { FormEvent, useContext, useEffect, useState } from 'react';
import { ColorGeneratorContext } from '..';
import { generateColor } from '../util/parse-css';

import styles from './styles.module.css';

type VariableSelectorProps = {
  name: string;
  editable?: boolean;
  isParentOpen?: boolean;
  type?: 'shade' | 'tint';
};

const VariableSelector: React.FC<VariableSelectorProps> = ({
  name,
  type,
  editable = true,
  isParentOpen = false,
  ...props
}) => {
  const { state, controls } = useContext(ColorGeneratorContext);

  const [showNameError, setShowNameError] = useState(false);
  const [showValueError, setShowValueError] = useState(false);
  const [isValueInputFocused, setIsValueInputFocused] = useState(false);

  const [valueState, setValueState] = useState(state.colors.get(name)?.value);

  useEffect(() => {
    controls.setColors(colors => {
      const { property } = colors.get(name);

      const genColor = generateColor(property, valueState);

      colors.set(name, genColor);

      return new Map(colors);
    });
  }, [valueState]);

  useEffect(() => {
    const color = state.colors.get(name);
    setValueState(type ? color[type] : color.value);
  }, [state.colors]);

  const onColorChange = (ev: FormEvent<HTMLInputElement>) => {
    const input = ev.currentTarget as any;
    const val = input.value.trim();

    setValueState(val);
  };

  const isValidHex = (str: string | undefined): boolean => {
    return typeof str !== 'undefined' ? /^#[0-9A-F]{6}$/i.test(str) : false;
  };

  const validateValue = () => {
    const isValidHexVar = isValidHex(valueState);
    setShowValueError(
      isValidHexVar &&
        typeof valueState !== 'undefined' &&
        valueState.length === 7
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
        <i
          className={styles.swatch}
          style={{ backgroundColor: valueState }}
        ></i>
        <span>
          {name}
          {type && `-${type}`}
        </span>
        {showNameError && (
          <span className={styles.error}>
            Please enter a valid name without special characters.
          </span>
        )}
      </div>
      {editable ? (
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
            <div
              className={styles.colorWrap}
              style={{ backgroundColor: valueState }}
            >
              <input
                type="color"
                value={valueState}
                onInput={onColorChange}
                tabIndex={-1}
              />
            </div>
            <input type="text" value={valueState} onInput={onColorChange} />
          </div>

          {showValueError && (
            <span className={styles.error}>
              Please enter a valid six digit hex code.
            </span>
          )}
        </div>
      ) : (
        <div className={styles.hex}>
          <span>
            {type ? state.colors.get(name)[type] : state.colors.get(name).value}
          </span>
        </div>
      )}
    </div>
  );
};

export default VariableSelector;
