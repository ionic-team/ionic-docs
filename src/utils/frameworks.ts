/**
 * The frameworks a reader can pick in the docs' framework tabs and in playgrounds.
 *
 * Both store the pick in the same place, so choosing a framework in one selects
 * it in the other. Import the values and labels from here rather than writing
 * them out, so the two can't drift apart.
 */

import { useStorageSlot } from '@docusaurus/theme-common';

/** Every framework value, with its label, sorted alphabetically by label as the tabs show them. */
export const FRAMEWORKS = [
  { value: 'angular', label: 'Angular' },
  { value: 'angular-standalone', label: 'Angular (Standalone)' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
] as const;

export type Framework = (typeof FRAMEWORKS)[number]['value'];

const ANGULAR: Framework = 'angular';
const ANGULAR_STANDALONE: Framework = 'angular-standalone';

/**
 * The key Docusaurus stores `<Tabs groupId="framework">` under. A translation's
 * pages still use those tabs, so keeping the key keeps them in sync too.
 */
const STORAGE_KEY = 'docusaurus.tab.framework';

/**
 * The reader's framework pick, limited to the frameworks a tab group or
 * playground has.
 *
 * `selected` is undefined when the reader hasn't picked one of `available`, so
 * the caller can fall back to its own default. A pick of Angular (Standalone)
 * shows as Angular where there is no Standalone tab.
 */
export function useFrameworkChoice(available: readonly string[]) {
  const [stored, storage] = useStorageSlot(STORAGE_KEY);

  let selected: string | undefined;
  if (stored && available.includes(stored)) {
    selected = stored;
  } else if (stored === ANGULAR_STANDALONE && available.includes(ANGULAR)) {
    selected = ANGULAR;
  }

  const select = (framework: string) => {
    /**
     * Picking Angular where there is no Standalone tab keeps a Standalone
     * pick, which already shows as Angular here.
     */
    if (framework === ANGULAR && stored === ANGULAR_STANDALONE && !available.includes(ANGULAR_STANDALONE)) {
      return;
    }
    storage.set(framework);
  };

  return { selected, select };
}
