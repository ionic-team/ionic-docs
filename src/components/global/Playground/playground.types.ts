import type { ReactElement } from 'react';

export enum UsageTarget {
  JavaScript = 'javascript',
  Angular = 'angular',
  React = 'react',
  Vue = 'vue',
}

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
 * listened for on that frame's `contentWindow`. The other two are dispatched on the
 * page's own window to keep playgrounds on a page in sync.
 */
declare global {
  interface WindowEventMap {
    console: CustomEvent<ConsoleItem>;
    'playground-event-updated': CustomEvent<Mode>;
    'playground-usage-target-updated': CustomEvent<UsageTarget>;
  }
}
