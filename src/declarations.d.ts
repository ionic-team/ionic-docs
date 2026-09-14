/**
 * Type declarations for custom elements used in JSX.
 *
 * These are not React components, so TypeScript has no types for them and would
 * otherwise reject the JSX usage:
 *
 * - `device-preview`: defined in src/components/global/Playground/device-preview.js
 *   and registered via `defineCustomElement()`. Used by the Playground to render
 *   examples inside an iOS/MD device frame.
 * - `docs-card` / `docs-cards`: no JavaScript definition anywhere in this repo. They
 *   are unregistered tags used purely as styling hooks by DocsCard and DocsCards.
 */
// The import makes this file a module, so the block below augments React's
// existing types instead of replacing them.
import 'react';

declare module 'react' {
  namespace JSX {
    /**
     * What a custom element accepts here. `class` rather than `className`, because
     * these are plain elements and React passes the attribute straight through.
     */
    interface CustomElementProps {
      class?: string;
      children?: ReactNode;
    }

    interface IntrinsicElements {
      /** `mode` is the element's only observed attribute. */
      'device-preview': CustomElementProps & { mode?: 'ios' | 'md' };
      'docs-card': CustomElementProps;
      'docs-cards': CustomElementProps;
    }
  }
}
