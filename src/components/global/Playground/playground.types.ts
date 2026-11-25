import type { ReactNode } from 'react';
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

/** A code snippet's rendered MDX. */
export type MdxContent = () => ReactNode;

/**
 * The advanced configuration of options when creating a
 * playground example with multiple files for a single usage target
 * or if needing to modify the generated StackBlitz example code.
 */
export interface UsageTargetOptions {
  /**
   * The list of the file names to use in the StackBlitz example
   * and their associated MDX content.
   *
   * ```ts
   * files: {
   *   'src/app/app.component.html': app_component_html,
   *   'src/app/app.component.ts': app_component_ts,
   * }
   * ```
   */
  files: {
    [key: string]: MdxContent;
  };
  /**
   * The list of dependencies to use in the StackBlitz example.
   * The key is the package name and the value is the version.
   * The version must be a valid semver range.
   *
   * For example:
   * ```ts
   * dependencies: {
   *  '@maskito/core': '^0.11.0',
   * }
   * ```
   */
  dependencies?: {
    [key: string]: string;
  };
}

/** The named heights a playground can use instead of a pixel value. */
export const FRAME_SIZES = {
  xsmall: '100px',
  small: '200px',
  medium: '400px',
  large: '600px',
  xlarge: '800px',
} as const;

export type FrameSize = keyof typeof FRAME_SIZES;

export interface PlaygroundProps {
  /** The code snippets for each supported framework target. */
  code: { [key in UsageTarget]?: MdxContent | UsageTargetOptions };
  /** Optional title of the generated playground example. Specify to customize the StackBlitz title. */
  title?: string;
  /** The absolute path to the playground demo. For example: `/usage/button/basic/demo.html` */
  src: string;
  /**
   * The height of the playground: `xsmall`, `small`, `medium`, `large`, `xlarge`, or a pixel value
   * such as `300px`. Defaults to `small`.
   */
  size: FrameSize | `${number}px`;
  /**
   * Restricts the playground to a single specified mode.
   * If not specified, the user can toggle between modes.
   * Acceptable values are: `ios` or `md`.
   */
  mode?: 'ios' | 'md';
  /** Optional description of the generated playground example. Specify to customize the StackBlitz description. */
  description?: string;
  /** `true` if the playground example should render in a device frame (iOS/MD). Defaults to `false`. */
  devicePreview?: boolean;
  /**
   * `true` if the playground should render a console UI that reflects console logs, warnings, and errors.
   * Defaults to `false`.
   */
  showConsole?: boolean;
  /**
   * Whether to include the `ion-app` and `ion-content` elements in the generated StackBlitz example.
   * Defaults to `true`.
   */
  includeIonContent: boolean;
  /**
   * The major version of Ionic to use in the generated StackBlitz examples.
   * This will also load assets for StackBlitz from the specified version directory.
   */
  version: string;
  /**
   * The framework to select by default when no user preference is stored.
   * If not specified, defaults to Angular when available, then the first available framework.
   */
  defaultFramework?: UsageTarget;
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
