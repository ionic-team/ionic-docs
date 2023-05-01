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
  let config = {
    animated: false
  };

  if (isPlatform('iphone')) {
    config = {
      ...config,
      backButtonText: 'Previous'
    }
  }

  return config;
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
  let config = {
    animated: false,
  };

  if (isPlatform('iphone')) {
    config = {
      ...config,
      backButtonText: 'Previous',
    };
  }

  return config;
};

setupIonicReact(getConfig());

```
</TabItem>
<TabItem value="vue">

```ts title="main.ts"
import { IonicVue, isPlatform } from '@ionic/vue';

const getConfig = () => {
  let config = {
    animated: false,
  };

  if (isPlatform('iphone')) {
    config = {
      ...config,
      backButtonText: 'Previous',
    };
  }

  return config;
};

createApp(App).use(IonicVue, getConfig());
````
</TabItem>
</Tabs>