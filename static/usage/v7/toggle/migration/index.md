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
  <ion-toggle></ion-toggle>
</ion-item>

<!-- After -->
<ion-item>
  <ion-toggle>Notifications</ion-toggle>
</ion-item>

<!-- Fixed Labels -->

<!-- Before -->
<ion-item>
  <ion-label position="fixed">Notifications</ion-label>
  <ion-toggle></ion-toggle>
</ion-item>

<!-- After -->
<ion-item>
  <ion-toggle label-placement="fixed">Notifications</ion-toggle>
</ion-item>

<!-- Toggle at the start of line, Label at the end of line -->

<!-- Before -->
<ion-item>
  <ion-label slot="end">Notifications</ion-label>
  <ion-toggle></ion-toggle>
</ion-item>

<!-- After -->
<ion-item>
  <ion-toggle label-placement="end">Notifications</ion-toggle>
</ion-item>
```
</TabItem>
<TabItem value="angular">

```html
<!-- Basic -->

<!-- Before -->
<ion-item>
  <ion-label>Notifications</ion-label>
  <ion-toggle></ion-toggle>
</ion-item>

<!-- After -->
<ion-item>
  <ion-toggle>Notifications</ion-toggle>
</ion-item>

<!-- Fixed Labels -->

<!-- Before -->
<ion-item>
  <ion-label position="fixed">Notifications</ion-label>
  <ion-toggle></ion-toggle>
</ion-item>

<!-- After -->
<ion-item>
  <ion-toggle label-placement="fixed">Notifications</ion-toggle>
</ion-item>

<!-- Toggle at the start of line, Label at the end of line -->

<!-- Before -->
<ion-item>
  <ion-label slot="end">Notifications</ion-label>
  <ion-toggle></ion-toggle>
</ion-item>

<!-- After -->
<ion-item>
  <ion-toggle label-placement="end">Notifications</ion-toggle>
</ion-item>
```
</TabItem>
<TabItem value="react">

```tsx
{/* Basic */}

{/* Before */}
<IonItem>
  <IonLabel>Notifications</IonLabel>
  <IonToggle></IonToggle>
</IonItem>

{/* After */}
<IonItem>
  <IonToggle>Notifications</IonToggle>
</IonItem>

{/* Fixed Labels */}

{/* Before */}
<IonItem>
  <IonLabel position="fixed">Notifications</IonLabel>
  <IonToggle></IonToggle>
</IonItem>

{/* After */}
<IonItem>
  <IonToggle labelPlacement="fixed">Notifications</IonToggle>
</IonItem>

{/* Toggle at the start of line, Label at the end of line */}

{/* Before */}
<IonItem>
  <IonLabel slot="end">Notifications</IonLabel>
  <IonToggle></IonToggle>
</IonItem>

{/* After */}
<IonItem>
  <IonToggle labelPlacement="end">Notifications</IonToggle>
</IonItem>
```
</TabItem>
<TabItem value="vue">

```html
<!-- Basic -->

<!-- Before -->
<ion-item>
  <ion-label>Notifications</ion-label>
  <ion-toggle></ion-toggle>
</ion-item>

<!-- After -->
<ion-item>
  <ion-toggle>Notifications</ion-toggle>
</ion-item>

<!-- Fixed Labels -->

<!-- Before -->
<ion-item>
  <ion-label position="fixed">Notifications</ion-label>
  <ion-toggle></ion-toggle>
</ion-item>

<!-- After -->
<ion-item>
  <ion-toggle label-placement="fixed">Notifications</ion-toggle>
</ion-item>

<!-- Toggle at the start of line, Label at the end of line -->

<!-- Before -->
<ion-item>
  <ion-label slot="end">Notifications</ion-label>
  <ion-toggle></ion-toggle>
</ion-item>

<!-- After -->
<ion-item>
  <ion-toggle label-placement="end">Notifications</ion-toggle>
</ion-item>
```
</TabItem>
</Tabs>
````
