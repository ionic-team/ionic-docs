import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

```html
<!-- Basic -->

<!-- Before -->
<ion-item>
  <ion-label>Notifications</ion-label>
  <ion-range></ion-range>
</ion-item>

<!-- After -->
<ion-item>
  <ion-range>
    <div slot="label">Notifications</div>
  </ion-range>
</ion-item>

<!-- Fixed Labels -->

<!-- Before -->
<ion-item>
  <ion-label position="fixed">Notifications</ion-label>
  <ion-range></ion-range>
</ion-item>

<!-- After -->
<ion-item>
  <ion-range label-placement="fixed">
    <div slot="label">Notifications</div>
  </ion-range>
</ion-item>

<!-- Range at the start of line, Label at the end of line -->

<!-- Before -->
<ion-item>
  <ion-label slot="end">Notifications</ion-label>
  <ion-range></ion-range>
</ion-item>

<!-- After -->
<ion-item>
  <ion-range label-placement="end">
    <div slot="label">Notifications</div>
  </ion-range>
</ion-item>
```
</TabItem>
<TabItem value="angular">

```html
<!-- Basic -->

<!-- Before -->
<ion-item>
  <ion-label>Notifications</ion-label>
  <ion-range></ion-range>
</ion-item>

<!-- After -->
<ion-item>
  <ion-range>
    <div slot="label">Notifications</div>
  </ion-range>
</ion-item>

<!-- Fixed Labels -->

<!-- Before -->
<ion-item>
  <ion-label position="fixed">Notifications</ion-label>
  <ion-range></ion-range>
</ion-item>

<!-- After -->
<ion-item>
  <ion-range labelPlacement="fixed">
    <div slot="label">Notifications</div>
  </ion-range>
</ion-item>

<!-- Range at the start of line, Label at the end of line -->

<!-- Before -->
<ion-item>
  <ion-label slot="end">Notifications</ion-label>
  <ion-range></ion-range>
</ion-item>

<!-- After -->
<ion-item>
  <ion-range labelPlacement="end">
    <div slot="label">Notifications</div>
  </ion-range>
</ion-item>
```
</TabItem>
<TabItem value="react">

```tsx
{/* Basic */}

{/* Before */}
<IonItem>
  <IonLabel>Notifications</IonLabel>
  <IonRange></IonRange>
</IonItem>

{/* After */}
<IonItem>
  <IonRange>
    <div slot="label">Notifications</div>
  </IonRange>
</IonItem>

{/* Fixed Labels */}

{/* Before */}
<IonItem>
  <IonLabel position="fixed">Notifications</IonLabel>
  <IonRange></IonRange>
</IonItem>

{/* After */}
<IonItem>
  <IonRange labelPlacement="fixed">
    <div slot="label">Notifications</div>
  </IonRange>
</IonItem>

{/* Range at the start of line, Label at the end of line */}

{/* Before */}
<IonItem>
  <IonLabel slot="end">Notifications</IonLabel>
  <IonRange></IonRange>
</IonItem>

{/* After */}
<IonItem>
  <IonRange labelPlacement="end">
    <div slot="label">Notifications</div>
  </IonRange>
</IonItem>
```
</TabItem>
<TabItem value="vue">

```html
<!-- Basic -->

<!-- Before -->
<ion-item>
  <ion-label>Notifications</ion-label>
  <ion-range></ion-range>
</ion-item>

<!-- After -->
<ion-item>
  <ion-range>
    <div slot="label">Notifications</div>
  </ion-range>
</ion-item>

<!-- Fixed Labels -->

<!-- Before -->
<ion-item>
  <ion-label position="fixed">Notifications</ion-label>
  <ion-range></ion-range>
</ion-item>

<!-- After -->
<ion-item>
  <ion-range label-placement="fixed">
    <div slot="label">Notifications</div>
  </ion-range>
</ion-item>

<!-- Range at the start of line, Label at the end of line -->

<!-- Before -->
<ion-item>
  <ion-label slot="end">Notifications</ion-label>
  <ion-range></ion-range>
</ion-item>

<!-- After -->
<ion-item>
  <ion-range label-placement="end">
    <div slot="label">Notifications</div>
  </ion-range>
</ion-item>
```
</TabItem>
</Tabs>
````