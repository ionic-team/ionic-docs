import MDXComponentsOriginal from '@theme-original/MDXComponents';
// CUSTOM CODE
import MDXTable from './Table';
// CUSTOM CODE END
import type { MDXComponentsObject } from '@theme/MDXComponents';

const MDXComponents: MDXComponentsObject = {
  ...MDXComponentsOriginal,
  // CUSTOM CODE
  table: MDXTable,
  // CUSTOM CODE END
};
export default MDXComponents;
