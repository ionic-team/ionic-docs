```tsx
import React from 'react';
import { IonGallery } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <IonGallery
      gap={{
        xs: '2px',
        sm: '4px',
        md: '6px',
        lg: '8px',
        xl: '10px',
        xxl: '12px',
      }}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </IonGallery>
  );
}
export default Example;
```
