/**
 * The row of framework buttons that framework tabs and playgrounds show above
 * their code.
 *
 * It is a tab list: the arrow keys move between frameworks, skipping disabled
 * ones, and Enter or a click selects one. Selecting a framework can change the
 * length of content above the switcher, so the switcher is kept where it was on
 * screen to stop the page from jumping.
 */

import React, { useRef, type KeyboardEvent } from 'react';
import clsx from 'clsx';

import ToggleButton from '../ToggleButton';

import styles from './styles.module.css';

export interface FrameworkOption {
  value: string;
  label: string;
  /** Shown but not selectable, such as a framework a playground has no code for. */
  disabled?: boolean;
  /** The id of this option's tab, for its panel's `aria-labelledby`. */
  tabId?: string;
  /** The id of the panel this option shows, for `aria-controls`. */
  panelId?: string;
}

interface Props {
  options: readonly FrameworkOption[];
  selected: string;
  onSelect: (value: string) => void;
  className?: string;
}

/**
 * Runs `update`, then scrolls by however far `element` moved, so it stays at
 * the same place on screen.
 */
function keepInPlace(element: HTMLElement | null, update: () => void) {
  const top = element?.getBoundingClientRect().top;
  update();

  if (element && top !== undefined) {
    requestAnimationFrame(() => {
      window.scrollBy({ top: element.getBoundingClientRect().top - top, behavior: 'instant' });
    });
  }
}

export default function FrameworkSwitcher({ options, selected, onSelect, className }: Props) {
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  // One tab must be reachable with the Tab key, even if none is selected.
  const focusable = options.some((option) => option.value === selected)
    ? selected
    : options.find((option) => !option.disabled)?.value;

  const select = (index: number) => {
    const { value } = options[index];

    if (value !== selected) {
      keepInPlace(buttons.current[index], () => onSelect(value));
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;

    if (step === 0) {
      return;
    }

    event.preventDefault();

    for (let offset = 1; offset < options.length; offset++) {
      const next = (index + step * offset + options.length) % options.length;

      if (!options[next].disabled) {
        buttons.current[next]?.focus();
        return;
      }
    }
  };

  return (
    <div role="tablist" aria-label="Framework" className={clsx(styles.switcher, className)}>
      {options.map((option, index) => (
        <ToggleButton
          key={option.value}
          ref={(button) => {
            buttons.current[index] = button;
          }}
          role="tab"
          id={option.tabId}
          aria-controls={option.panelId}
          aria-selected={option.value === selected}
          tabIndex={option.value === focusable ? 0 : -1}
          label={option.label}
          title={`Show ${option.label} code`}
          selected={option.value === selected}
          disabled={option.disabled}
          onClick={() => select(index)}
          onKeyDown={(event) => handleKeyDown(event, index)}
        />
      ))}
    </div>
  );
}
