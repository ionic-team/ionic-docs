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
<!-- Label and Label Position -->

<!-- Before -->
<ion-item>
  <ion-label position="floating">Label:</ion-label>
  <ion-textarea></ion-textarea>
</ion-item>

<!-- After -->
<ion-item>
  <ion-textarea label="Label:" label-placement="floating"></ion-textarea>
</ion-item>


<!-- Fill -->

<!-- Before -->
<ion-item fill="outline" shape="round">
  <ion-label position="floating">Label:</ion-label>
  <ion-textarea></ion-textarea>
</ion-item>

<!-- After -->

<!-- Textareas using `fill` should not be placed in ion-item -->
<ion-textarea fill="outline" shape="round" label="Label:" label-placement="floating"></ion-textarea>

<!-- Textarea-specific features on ion-item -->

<!-- Before -->
<ion-item counter="true">
  <ion-label position="floating">Label:</ion-label>
  <ion-textarea maxlength="100"></ion-textarea>
  <div slot="helper">Enter text</div>
  <div slot="error">Please enter text</div>
</ion-item>

<!-- After -->
<ion-item>
  <ion-textarea
    label="Label:"
    counter="true"
    maxlength="100"
    helper-text="Enter text"
    error-text="Please enter text"
  ></ion-textarea>
</ion-item>
```
</TabItem>
<TabItem value="angular">

```html
<!-- Label and Label Position -->

<!-- Before -->
<ion-item>
  <ion-label position="floating">Label:</ion-label>
  <ion-textarea></ion-textarea>
</ion-item>

<!-- After -->
<ion-item>
  <ion-textarea label="Label:" labelPlacement="floating"></ion-textarea>
</ion-item>


<!-- Fill -->

<!-- Before -->
<ion-item fill="outline" shape="round">
  <ion-label position="floating">Label:</ion-label>
  <ion-textarea></ion-textarea>
</ion-item>

<!-- After -->

<!-- Textareas using `fill` should not be placed in ion-item -->
<ion-textarea fill="outline" shape="round" label="Label:" labelPlacement="floating"></ion-textarea>

<!-- Input-specific features on ion-item -->

<!-- Before -->
<ion-item [counter]="true">
  <ion-label position="floating">Label:</ion-label>
  <ion-textarea maxlength="100"></ion-textarea>
  <div slot="helper">Enter text</div>
  <div slot="error">Please enter text</div>
</ion-item>

<!-- After -->
<ion-item>
  <ion-textarea
    label="Label:"
    [counter]="true"
    maxlength="100"
    helperText="Enter text"
    errorText="Please enter text"
  ></ion-textarea>
</ion-item>
```
</TabItem>
<TabItem value="react">

```tsx
{/* Label and Label Position */}

{/* Before */}
<IonItem>
  <IonLabel position="floating">Label:</IonLabel>
  <IonTextarea></IonTextarea>
</IonItem>

{/* After */}
<IonItem>
  <IonTextarea label="Label:" labelPlacement="floating"></IonTextarea>
</IonItem>


{/* Fill */}

{/* Before */}
<IonItem fill="outline" shape="round">
  <IonLabel position="floating">Label:</IonLabel>
  <IonTextarea></IonTextarea>
</IonItem>

{/* After */}

{/* Inputs using `fill` should not be placed in IonItem */}
<IonTextarea fill="outline" shape="round" label="Label:" labelPlacement="floating"></IonTextarea>

{/* Input-specific features on IonItem */}

{/* Before */}
<IonItem counter={true}>
  <IonLabel position="floating">Label:</IonLabel>
  <IonTextarea maxlength="100"></IonTextarea>
  <div slot="helper">Enter text</div>
  <div slot="error">Please enter text</div>
</IonItem>

{/* After */}
<IonItem>
  <IonTextarea
    label="Label:"
    counter={true}
    maxlength="100"
    helperText="Enter text"
    errorText="Please enter text"
  ></IonTextarea>
</IonItem>
```
</TabItem>
<TabItem value="vue">

```html
<!-- Label and Label Position -->

<!-- Before -->
<ion-item>
  <ion-label position="floating">Label:</ion-label>
  <ion-textarea></ion-textarea>
</ion-item>

<!-- After -->
<ion-item>
  <ion-textarea label="Label:" label-placement="floating"></ion-textarea>
</ion-item>


<!-- Fill -->

<!-- Before -->
<ion-item fill="outline" shape="round">
  <ion-label position="floating">Label:</ion-label>
  <ion-textarea></ion-textarea>
</ion-item>

<!-- After -->

<!-- Inputs using `fill` should not be placed in ion-item -->
<ion-textarea fill="outline" shape="round" label="Label:" label-placement="floating"></ion-textarea>

<!-- Textarea-specific features on ion-item -->

<!-- Before -->
<ion-item :counter="true">
  <ion-label position="floating">Label:</ion-label>
  <ion-textarea maxlength="100"></ion-textarea>
  <div slot="helper">Enter text</div>
  <div slot="error">Please enter text</div>
</ion-item>

<!-- After -->
<ion-item>
  <ion-textarea
    label="Label:"
    :counter="true"
    maxlength="100"
    helper-text="Enter text"
    error-text="Please enter text"
  ></ion-textarea>
</ion-item>
```
</TabItem>
</Tabs>
````
