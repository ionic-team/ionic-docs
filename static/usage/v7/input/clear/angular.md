```html
<ion-list>
  <ion-item>
    <ion-input
      label="Input with clear button"
      labelPlacement="stacked"
      [clearInput]="true"
      placeholder="Enter text to see clear button"
      value="Default value"
    >
    </ion-input>
  </ion-item>

  <ion-item>
    <ion-input
      label="Input with clear on edit"
      labelPlacement="stacked"
      [clearOnEdit]="true"
      placeholder="Enter text, leave the input, come back and type to clear"
    >
    </ion-input>
  </ion-item>

  <ion-item>
    <ion-input
      label="Password input"
      labelPlacement="stacked"
      type="password"
      placeholder="Enter text, leave the input, come back and type to clear"
    >
    </ion-input>
  </ion-item>
</ion-list>
```
