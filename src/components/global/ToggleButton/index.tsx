/**
 * A pill button that shows whether it is selected.
 *
 * Framework switchers and the playground's mode buttons use it, so every
 * selectable option on the site looks the same. A disabled button shows an
 * "Unavailable for" tooltip.
 *
 * Only playgrounds disable a button, so the tooltip is loaded when one is shown.
 * Importing it directly would add its positioning library to every page with
 * `<FrameworkTabs>`, which never shows it.
 */

import React, { forwardRef, lazy, Suspense, type ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

const Tooltip = lazy(() => import('../Tooltip'));

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  label: string;
  selected: boolean;
}

const ToggleButton = forwardRef<HTMLButtonElement, Props>(
  ({ label, selected, disabled, title, className, ...rest }, ref) => {
    const button = (
      <button
        ref={ref}
        type="button"
        title={disabled ? undefined : title}
        disabled={disabled}
        className={clsx(styles.button, selected && styles.selected, className)}
        data-text={label}
        {...rest}
      >
        {label}
      </button>
    );

    if (!disabled) {
      return button;
    }

    // Disabled elements do not emit pointer events, so the wrapper is what triggers the tooltip.
    const wrapper = <div>{button}</div>;

    return (
      <Suspense fallback={wrapper}>
        <Tooltip content={`Unavailable for ${label}`}>{wrapper}</Tooltip>
      </Suspense>
    );
  }
);

export default ToggleButton;
