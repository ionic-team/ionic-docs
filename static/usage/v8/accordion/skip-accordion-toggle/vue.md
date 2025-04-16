```html
<template>
  <ion-accordion-group multiple="true">
    <ion-radio-group>
      <ion-accordion value="first">
        <ion-item slot="header">
          <ion-radio value="folder-1" slot="start" skip-accordion-toggle></ion-radio>
          <ion-icon slot="start" name="folder"></ion-icon>
          <ion-label>Folder One</ion-label>
        </ion-item>
        <div slot="content" class="ion-padding-start">
          <ion-accordion value="first-first">
            <ion-item slot="header">
              <ion-radio value="folder-1-subfolder-1" slot="start" skip-accordion-toggle></ion-radio>
              <ion-icon slot="start" name="folder"></ion-icon>
              <ion-label>Subfolder 1</ion-label>
            </ion-item>
            <div slot="content" class="ion-padding-start">
              <ion-item>
                <ion-radio value="folder-1-subfolder-1-document-1" slot="start" skip-accordion-toggle></ion-radio>
                <ion-icon name="document" slot="start"></ion-icon>
                <ion-label>Document 1</ion-label>
              </ion-item>
            </div>
          </ion-accordion>

          <ion-item>
            <ion-radio value="folder-1-document-1" slot="start" skip-accordion-toggle></ion-radio>
            <ion-icon name="document" slot="start"></ion-icon>
            <ion-label>Document 1</ion-label>
          </ion-item>
          <ion-item>
            <ion-radio value="folder-1-document-2" slot="start" skip-accordion-toggle></ion-radio>
            <ion-icon name="document" slot="start"></ion-icon>
            <ion-label>Document 2</ion-label>
          </ion-item>
          <ion-item>
            <ion-radio value="folder-1-document-3" slot="start" skip-accordion-toggle></ion-radio>
            <ion-icon name="document" slot="start"></ion-icon>
            <ion-label>Document 3</ion-label>
          </ion-item>
        </div>
      </ion-accordion>
      <ion-accordion value="second">
        <ion-item slot="header">
          <ion-radio value="folder-2" slot="start" skip-accordion-toggle></ion-radio>
          <ion-icon slot="start" name="folder"></ion-icon>
          <ion-label>Folder Two</ion-label>
        </ion-item>
        <div class="ion-padding-start" slot="content">
          <ion-item lines="none">
            <ion-label>Folder is empty</ion-label>
          </ion-item>
        </div>
      </ion-accordion>
      <ion-accordion value="third">
        <ion-item slot="header">
          <ion-radio value="folder-3" slot="start" skip-accordion-toggle></ion-radio>
          <ion-icon slot="start" name="folder"></ion-icon>
          <ion-label>Folder Three</ion-label>
        </ion-item>
        <div slot="content" class="ion-padding-start">
          <ion-item>
            <ion-radio value="folder-3-document-1" slot="start" skip-accordion-toggle></ion-radio>
            <ion-icon name="document" slot="start"></ion-icon>
            <ion-label>Document 1</ion-label>
          </ion-item>
        </div>
      </ion-accordion>
    </ion-radio-group>
  </ion-accordion-group>
</template>

<script lang="ts">
  import { IonAccordion, IonAccordionGroup, IonRadioGroup, IonRadio, IonItem, IonIcon, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonAccordion,
      IonAccordionGroup,
      IonRadioGroup,
      IonRadio,
      IonItem,
      IonIcon,
      IonLabel,
    },
    setup() {},
  });
</script>

<style scoped>
  ion-radio {
    --border-radius: 50%;
    --color: #ddd;
    --color-checked: #6815ec;
  }

  ion-radio.ios::part(container) {
    width: 20px;
    height: 20px;

    border: 2px solid #ddd;
    border-radius: 50%;
  }

  .radio-checked.ios::part(container) {
    border-color: #6815ec;
  }
</style>
```
