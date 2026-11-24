/**
 * The frameworks a reader can pick in the docs' framework tabs and in playgrounds.
 *
 * Both store the pick under the same Docusaurus tab group, so choosing a framework
 * in one selects it in the other. Import the values and labels from here rather
 * than writing them out, so the two can't drift apart.
 */

/** The `groupId` of the docs' framework tabs. */
export const FRAMEWORK_GROUP_ID = 'framework';

/** Every framework value, with its label, sorted alphabetically by label as the tabs show them. */
export const FRAMEWORKS = [
  { value: 'angular', label: 'Angular' },
  { value: 'angular-standalone', label: 'Angular (Standalone)' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
] as const;

export type Framework = (typeof FRAMEWORKS)[number]['value'];

export function getFrameworkLabel(framework: Framework): string {
  return FRAMEWORKS.find((item) => item.value === framework)!.label;
}
