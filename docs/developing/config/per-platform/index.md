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

See the [Angular Platform Documentation](../angular/platform) for the types of platforms you can detect.
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

:::note
See the [React Platform Documentation](../react/platform) for the types of platforms you can detect.
:::

```tsx title="App.tsx"
import { isPlatform, setupIonicReact } from '@ionic/react';

setupIonicReact({
  animated: !isPlatform('mobileweb'),
});
```
</TabItem>
<TabItem value="vue">

:::note
See the [Vue Platform Documentation](../vue/platform) for the types of platforms you can detect.
:::

```ts title="main.ts"
import { IonicVue, isPlatform } from '@ionic/vue';

createApp(App).use(IonicVue, {
  animated: !isPlatform('mobileweb'),
});
````
</TabItem>
</Tabs>