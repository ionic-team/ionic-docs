import clsx from 'clsx';
import React, { useContext, useState } from 'react';

// import { ColorVariable } from '../color-variables';
import VariableSelector from '../VariableSelector';

import styles from './styles.module.css';

import { ColorGeneratorContext } from '../index';

const SelectColors = () => {
  const { state, controls } = useContext(ColorGeneratorContext);
  const [activeColor, setActiveColor] = useState('');

  const toggleActiveColor = (color: string) => {
    setActiveColor(activeColor === color ? '' : color);
  };

  return (
    <ul className={styles.selectColors}>
      {Array.from(state.colors).map(([name]) => {
        const isOpen = activeColor === name ? true : false;

        return (
          <li
            className={clsx({ [styles.item]: true, [styles.isOpen]: isOpen })}
          >
            <VariableSelector
              name={name}
              isParentOpen={isOpen}
              onClick={() => toggleActiveColor(name)}
            />

            <svg
              width="10px"
              height="6px"
              viewBox="0 0 10 6"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="Welcome"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <g
                  id="Desktop-HD"
                  transform="translate(-1025.000000, -335.000000)"
                  stroke="#AEB4BE"
                  strokeWidth="2"
                >
                  <polyline
                    id="arrow"
                    transform="translate(1030.000000, 338.000000) rotate(90.000000) translate(-1030.000000, -338.000000) "
                    points="1028 334 1032 338.020022 1028 342"
                  ></polyline>
                </g>
              </g>
            </svg>

            <ul className={styles.submenu}>
              <li>
                <VariableSelector name={name} type="shade" editable={false} />
              </li>
              <li>
                <VariableSelector name={name} type="tint" editable={false} />
              </li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default SelectColors;
