```html
<ion-list>
  <ion-item>
    <ion-label position="stacked">Input with clear button</ion-label>
    <ion-input [clearInput]="true" placeholder="Enter text to see clear button" value="Default value"></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="stacked">Input with clear on edit</ion-label>
    <ion-input [clearOnEdit]="true" placeholder="Enter text, leave the input, come back and type to clear"></ion-input>
  </ion-item>

  <ion-item>
    <ion-label position="stacked">Password input</ion-label>
    <ion-input type="password" placeholder="Enter text, leave the input, come back and type to clear"></ion-input>
  </ion-item>
</ion-list>
```
