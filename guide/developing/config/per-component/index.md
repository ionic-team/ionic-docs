import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="per-component-config"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]}
>
<TabItem value="javascript">

**Not recommended**

```ts
window.Ionic = {
  config: {
    // Not recommended when your app requires reactive values
    backButtonText: 'Go Back'
  }
}
```

**Recommended**

```html
<ion-back-button></ion-back-button>

<script>
  const backButton = document.querySelector('ion-back-button');
  
  /**
   * The back button text can be updated
   * anytime the locale changes.
   */
  backButton.text = 'Go Back';
</script>
```
</TabItem>
<TabItem value="angular">

**Not recommended**

```ts
import { IonicModule } from '@ionic/angular';

@NgModule({
  ...
  imports: [
    IonicModule.forRoot({
      // Not recommended when your app requires reactive values
      backButtonText: 'Go Back'
    })
  ],
  ...
});
```

**Recommended**

```html
<ion-back-button [text]="backButtonText"></ion-back-button>
```

```ts
@Component(...)
class MyComponent {
  /**
   * The back button text can be updated
   * anytime the locale changes.
   */
  backButtonText = 'Go Back';
}
```
</TabItem>
<TabItem value="react">

**Not recommended**

```tsx
import { setupIonicReact } from '@ionic/react';

setupIonicReact({
  // Not recommended when your app requires reactive values
  backButtonText: 'Go Back'
});
```

**Recommended**

```tsx
import { useState } from 'react';
import { IonBackButton } from '@ionic/react';

const ExampleComponent = () => {
  const [backButtonText, setBackButtonText] = useState('Go Back');
  return (
    {/*
     * The back button text can be updated
     * anytime the locale changes.
     */}
    <IonBackButton text={backButtonText}></IonBackButton>
  )
}
```
</TabItem>
<TabItem value="vue">

**Not recommended**

```ts
import { IonicVue } from '@ionic/vue';
import { createApp } from 'vue';
 
 // Not recommended when your app requires reactive values
createApp(App).use(IonicVue, {
  backButtonText: 'Go Back'
});
```

**Recommended**

```html
<template>
  <ion-back-button [text]="backButtonText"></ion-back-button>
</template>

<script setup lang="ts">
  import { IonBackButton } from '@ionic/vue';
  import { ref } from 'vue';

  /**
   * The back button text can be updated
   * anytime the locale changes.
   */
  const backButtonText = ref('Go Back');
</script>
```
</TabItem>
</Tabs>