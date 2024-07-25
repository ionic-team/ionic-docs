```tsx
import React, { useEffect, useRef } from 'react';
import { IonCheckbox } from '@ionic/react';

function Example() {
  const ref = useRef<HTMLAnchorElement>(null);

  /**
   * IonCheckbox will be listening for the native click event here so we need
   * to call stopPropagation when the native click event instead of when the
   * synthetic click event fires.
   */
  useEffect(() => {
    ref.current?.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  }, [ref]);

  return (
    <IonCheckbox>
      I agree to the{' '}
      <a href="#" ref={ref}>
        terms and conditions
      </a>
    </IonCheckbox>
  );
}
export default Example;
```
