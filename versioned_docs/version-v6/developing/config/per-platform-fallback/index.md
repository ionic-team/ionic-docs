import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="per-platform-fallback-config"
  defaultValue="angular"
  values={[
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]}
>
<TabItem value="angular">

```ts title="app.module.ts"
import { isPlatform, IonicModule } from '@ionic/angular';

const getConfig = () => {
  if (isPlatform('hybrid')) {
    return {
      tabButtonLayout: 'label-hide'
    }
  }

  return {
    tabButtonLayout: 'icon-top'
  };
}
@NgModule({
  ...
  imports: [
    IonicModule.forRoot(getConfig())
  ],
  ...
});
```
</TabItem>
<TabItem value="react">

```tsx title="App.tsx"
import { isPlatform, setupIonicReact } from '@ionic/react';

const getConfig = () => {
  if (isPlatform('hybrid')) {
    return {
      tabButtonLayout: 'label-hide'
    }
  }
  
  return {
    tabButtonLayout: 'icon-top'
  };
};

setupIonicReact(getConfig());

```
</TabItem>
<TabItem value="vue">

```ts title="main.ts"
import { IonicVue, isPlatform } from '@ionic/vue';

const getConfig = () => {
  if (isPlatform('hybrid')) {
    return {
      tabButtonLayout: 'label-hide'
    }
  }
  
  return {
    tabButtonLayout: 'icon-top'
  };
};

createApp(App).use(IonicVue, getConfig());
````
</TabItem>
</Tabs>