import type { ReactNode } from 'react';

/**
 * What each entry of `values` holds, whether it arrives as a prop or is derived from
 * the `<TabItem>` children.
 *
 * Annotating `values` with this keeps it a single array type. Left to inference,
 * `valuesProp ?? children.map(...)` is a union of two array types, and calling `.map()`
 * on a union intersects both callback signatures, which no single callback satisfies
 * under `strictFunctionTypes`.
 *
 * Declared here rather than reusing Docusaurus's `TabValue`, which is only reachable
 * through `@docusaurus/theme-common/internal`.
 */
export type PlaygroundTabValue = {
  value: string;
  label?: string;
  attributes?: { [key: string]: unknown };
  icon?: ReactNode;
};
