/**
 * Tabs that show a sample once per framework, kept in sync with every other
 * framework tab and playground on the site.
 *
 * Each `<TabItem>` only needs its `value`. The label comes from the shared
 * framework list, and the tabs are sorted alphabetically by label, so every page
 * names and orders the frameworks the same way. A tab for something outside
 * that list, such as Stencil, needs its own `label`.
 *
 * ```mdx
 * <FrameworkTabs>
 * <TabItem value="angular">…</TabItem>
 * <TabItem value="react">…</TabItem>
 * </FrameworkTabs>
 * ```
 *
 * The tabs are the same buttons playgrounds show. `<TabItem>` only carries each
 * tab's value, label, and content: Docusaurus's `TabItem` reads the context of
 * its own `<Tabs>`, so it is never rendered here.
 */

import React, { Children, isValidElement, useId, type ReactElement, type ReactNode } from 'react';
import clsx from 'clsx';
import type { Props as TabItemProps } from '@theme/TabItem';
import { FRAMEWORKS, useFrameworkChoice } from '@site/src/utils/frameworks';

import FrameworkSwitcher from '../FrameworkSwitcher';

import styles from './styles.module.css';

interface Props {
  children: ReactNode;
  /** The tab to show until the reader picks a framework. Defaults to the first tab. */
  defaultValue?: string;
  className?: string;
}

export default function FrameworkTabs({ children, defaultValue, className }: Props): ReactNode {
  const id = useId();

  const tabs = Children.toArray(children)
    .filter((child): child is ReactElement<TabItemProps> => isValidElement(child))
    .map((item) => {
      const { value, label } = item.props;
      const frameworkLabel = FRAMEWORKS.find((framework) => framework.value === value)?.label;

      if (!frameworkLabel && !label) {
        throw new Error(
          `<FrameworkTabs> has a <TabItem value="${value}">, which is not a framework from src/utils/frameworks.ts. Give it a label.`
        );
      }

      return {
        value,
        label: frameworkLabel ?? label!,
        content: item.props.children,
        tabId: `${id}-tab-${value}`,
        panelId: `${id}-panel-${value}`,
      };
    })
    .sort((a, b) => a.label.localeCompare(b.label));

  const values = tabs.map((tab) => tab.value);
  const duplicate = values.find((value, index) => values.indexOf(value) !== index);

  if (duplicate) {
    throw new Error(`<FrameworkTabs> has more than one <TabItem value="${duplicate}">.`);
  }

  if (defaultValue !== undefined && !values.includes(defaultValue)) {
    throw new Error(
      `<FrameworkTabs> has defaultValue="${defaultValue}", but no <TabItem> with that value. Available values are: ${values.join(', ')}.`
    );
  }

  const { selected, select } = useFrameworkChoice(values);
  const shown = selected ?? defaultValue ?? values[0];

  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.switcher}>
        <FrameworkSwitcher options={tabs} selected={shown} onSelect={select} />
      </div>
      {tabs.map((tab) => (
        /**
         * Every panel is rendered, and the hidden ones are only hidden, so search
         * engines and the browser's find can still reach their content.
         */
        <div
          key={tab.value}
          role="tabpanel"
          id={tab.panelId}
          aria-labelledby={tab.tabId}
          hidden={tab.value !== shown}
          className={styles.panel}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
