import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="per-platform-config"
  defaultValue="angular"
  values={[
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]}
>
<TabItem value="angular">


:::note
Since the config is set at runtime, you will not have access to the Platform Dependency Injection. Instead, you can use the underlying functions that the provider uses directly.
:::

```ts title="app.module.ts"
import { isPlatform, IonicModule } from '@ionic/angular';

@NgModule({
  ...
  imports: [
    IonicModule.forRoot({
      animated: !isPlatform('mobileweb')
    })
  ],
  ...
})
```
</TabItem>
<TabItem value="react">

```tsx title="App.tsx"
import { isPlatform, setupIonicReact } from '@ionic/react';

setupIonicReact({
  animated: !isPlatform('mobileweb'),
});
```
</TabItem>
<TabItem value="vue">

```ts title="main.ts"
import { IonicVue, isPlatform } from '@ionic/vue';

createApp(App).use(IonicVue, {
  animated: !isPlatform('mobileweb'),
});
````
</TabItem>
</Tabs>