/**
 * Type declarations for custom elements used in JSX.
 *
 * These are web components registered at runtime (not React components), so
 * TypeScript has no types for them and would otherwise reject the JSX usage.
 *
 * - `device-preview`: defined in src/components/global/Playground/device-preview.js
 *   and registered via `defineCustomElement()`. Used by the Playground to render
 *   examples inside an iOS/MD device frame.
 */
// The import makes this file a module, so the block below augments React's
// existing types instead of replacing them.
import 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'device-preview': any;
    }
  }
}
