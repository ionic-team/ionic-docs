import type { ReactElement } from 'react';
import type { Framework } from '@site/src/utils/frameworks';

/**
 * The frameworks a playground can show code for. Each value is one of the shared
 * framework values, so picking one here selects it in the docs' framework tabs.
 */
export const UsageTarget = {
  JavaScript: 'javascript',
  Angular: 'angular',
  React: 'react',
  Vue: 'vue',
} as const satisfies Record<string, Framework>;

export type UsageTarget = (typeof UsageTarget)[keyof typeof UsageTarget];

export enum Mode {
  iOS = 'ios',
  MD = 'md',
}

export interface ConsoleItem {
  type: 'log' | 'warning' | 'error';
  message: string;
}

/**
 * The rendered MDX for each framework the playground has code for.
 *
 * A single-file example holds one element. A multi-file example holds one per file,
 * keyed by file name.
 */
export type CodeSnippets = Partial<Record<UsageTarget, ReactElement | Record<string, ReactElement>>>;

/**
 * Custom events the playground listens for on a `Window`.
 *
 * `addEventListener` types its callback as taking an `Event`, so a handler
 * annotated `CustomEvent` is rejected under `strictFunctionTypes`. Declaring the
 * events here gives each one its real payload, so handlers infer the right type
 * without annotations and `event.detail` is checked.
 *
 * `console` is dispatched by the demo page inside the playground iframe, so it is
 * listened for on that frame's `contentWindow`. `playground-event-updated` is
 * dispatched on the page's own window to keep the mode of playgrounds on a page in
 * sync.
 */
declare global {
  interface WindowEventMap {
    console: CustomEvent<ConsoleItem>;
    'playground-event-updated': CustomEvent<Mode>;
  }
}
