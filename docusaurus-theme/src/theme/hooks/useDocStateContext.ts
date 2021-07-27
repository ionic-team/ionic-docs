import { useContext } from 'react';

import DocStateContext from '@theme/DocStateContext';
import type { DocStateContextProps } from '@theme/hooks/useDocStateContext';

function useDocStateContext(): DocStateContextProps {
  const context = useContext<DocStateContextProps | undefined>(DocStateContext);
  if (context == null) {
    throw new Error(
      '"useDocStateContext" is used outside of "Layout" component.',
    );
  }
  return context;
}

export default useDocStateContext;
