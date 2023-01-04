import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import javascript from './javascript.md';
import react from './react.md';
import vue from './vue.md';
import angular from './angular.md';

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
<!-- Label and Label Position -->

<!-- Before -->
<ion-item>
  <ion-label position="floating">Email:</ion-label>
  <ion-input></ion-input>
</ion-item>

<!-- After -->
<ion-item>
  <ion-input label="Email:" label-placement="floating"></ion-input>
</ion-item>


<!-- Fill -->

<!-- Before -->
<ion-item fill="outline" shape="round">
  <ion-label position="floating">Email:</ion-label>
  <ion-input></ion-input>
</ion-item>

<!-- After -->

<!-- Inputs using `fill` should not be placed in ion-item -->
<ion-input fill="outline" shape="round" label="Email:" label-placement="floating"></ion-input>

<!-- Input-specific features on ion-item -->

<!-- Before -->
<ion-item counter="true">
  <ion-label position="floating">Email:</ion-label>
  <ion-input maxlength="100"></ion-input>
  <div slot="helper">Enter an email</div>
  <div slot="error">Please enter a valid email</div>
</ion-item>

<!-- After -->
<ion-item>
  <ion-input
    label="Email:"
    counter="true"
    maxlength="100"
    helper-text="Enter an email"
    error-text="Please enter a valid email"
  ></ion-input>
</ion-item>
```
</TabItem>
<TabItem value="angular">

```html
<!-- Label and Label Position -->

<!-- Before -->
<ion-item>
  <ion-label position="floating">Email:</ion-label>
  <ion-input></ion-input>
</ion-item>

<!-- After -->
<ion-item>
  <ion-input label="Email:" labelPlacement="floating"></ion-input>
</ion-item>


<!-- Fill -->

<!-- Before -->
<ion-item fill="outline" shape="round">
  <ion-label position="floating">Email:</ion-label>
  <ion-input></ion-input>
</ion-item>

<!-- After -->

<!-- Inputs using `fill` should not be placed in ion-item -->
<ion-input fill="outline" shape="round" label="Email:" labelPlacement="floating"></ion-input>

<!-- Input-specific features on ion-item -->

<!-- Before -->
<ion-item [counter]="true">
  <ion-label position="floating">Email:</ion-label>
  <ion-input maxlength="100"></ion-input>
  <div slot="helper">Enter an email</div>
  <div slot="error">Please enter a valid email</div>
</ion-item>

<!-- After -->
<ion-item>
  <ion-input
    label="Email:"
    [counter]="true"
    maxlength="100"
    helperText="Enter an email"
    errorText="Please enter a valid email"
  ></ion-input>
</ion-item>
```
</TabItem>
<TabItem value="react">

```tsx
{/* Label and Label Position */}

{/* Before */}
<IonItem>
  <IonLabel position="floating">Email:</IonLabel>
  <IonInput></IonInput>
</IonItem>

{/* After */}
<IonItem>
  <IonInput label="Email:" labelPlacement="floating"></IonInput>
</IonItem>


{/* Fill */}

{/* Before */}
<IonItem fill="outline" shape="round">
  <IonLabel position="floating">Email:</IonLabel>
  <IonInput></IonInput>
</IonItem>

{/* After */}

{/* Inputs using `fill` should not be placed in IonItem */}
<IonInput fill="outline" shape="round" label="Email:" labelPlacement="floating"></IonInput>

{/* Input-specific features on IonItem */}

{/* Before */}
<IonItem counter={true}>
  <IonLabel position="floating">Email:</IonLabel>
  <IonInput maxlength="100"></IonInput>
  <div slot="helper">Enter an email</div>
  <div slot="error">Please enter a valid email</div>
</IonItem>

{/* After */}
<IonItem>
  <IonInput
    label="Email:"
    counter={true}
    maxlength="100"
    helperText="Enter an email"
    errorText="Please enter a valid email"
  ></IonInput>
</IonItem>
```
</TabItem>
<TabItem value="vue">

```html
<!-- Label and Label Position -->

<!-- Before -->
<ion-item>
  <ion-label position="floating">Email:</ion-label>
  <ion-input></ion-input>
</ion-item>

<!-- After -->
<ion-item>
  <ion-input label="Email:" label-placement="floating"></ion-input>
</ion-item>


<!-- Fill -->

<!-- Before -->
<ion-item fill="outline" shape="round">
  <ion-label position="floating">Email:</ion-label>
  <ion-input></ion-input>
</ion-item>

<!-- After -->

<!-- Inputs using `fill` should not be placed in ion-item -->
<ion-input fill="outline" shape="round" label="Email:" label-placement="floating"></ion-input>

<!-- Input-specific features on ion-item -->

<!-- Before -->
<ion-item :counter="true">
  <ion-label position="floating">Email:</ion-label>
  <ion-input maxlength="100"></ion-input>
  <div slot="helper">Enter an email</div>
  <div slot="error">Please enter a valid email</div>
</ion-item>

<!-- After -->
<ion-item>
  <ion-input
    label="Email:"
    :counter="true"
    maxlength="100"
    helper-text="Enter an email"
    error-text="Please enter a valid email"
  ></ion-input>
</ion-item>
```
</TabItem>
</Tabs>
````