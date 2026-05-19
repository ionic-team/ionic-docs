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
 * Ionic app configuration. See [IonicConfig](/docs/developing/config#ionicconfig).
 * Playground only injects serializable values (string, number, boolean) into StackBlitz.
 */
export type IonicConfig = Record<string, unknown>;
