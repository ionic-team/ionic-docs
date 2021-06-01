import React from 'react';

import styles from './code-color.module.css';

function CodeColor(props): JSX.Element {
  const display = props.display === undefined ? props.value.trim() : props.display.trim();
  console.log(props.value)
  return (
    <div className={styles.codeColor}>
      <span
        className={styles.codeColorBlock}
        style={{
          'backgroundColor': props.value
        }}
      />
      <code className={styles.codeColorValue}>{display}</code>
    </div>
  );
}

export default CodeColor;