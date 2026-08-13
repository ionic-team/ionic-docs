/**
 * A single tab panel within PlaygroundTabs.
 *
 * PlaygroundTabs decides which panel is visible by cloning these with a
 * className, so this renders the panel and nothing else. Use it in place of
 * `@theme/TabItem`, which only works inside Docusaurus' own Tabs.
 */

import React, { type ReactNode } from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

export interface TabItemProps {
  /** Identifies the tab. Must be unique among sibling tabs. */
  value: string;
  /** Text shown in the tab. Falls back to `value`. */
  label?: string;
  /** Rendered before the label in the tab. */
  icon?: ReactNode;
  /** Selects this tab when nothing else is selected. */
  default?: boolean;
  /** Extra attributes spread onto the tab itself. */
  attributes?: { [key: string]: unknown };
  className?: string;
  children?: ReactNode;
}

export default function TabItem({ children, className }: TabItemProps): ReactNode {
  return (
    <div role="tabpanel" className={clsx(styles.tabPanel, className)}>
      {children}
    </div>
  );
}
