```tsx
import React from 'react';
import { IonAccordion, IonAccordionGroup, IonRadioGroup, IonRadio, IonItem, IonIcon, IonLabel } from '@ionic/react';
function Example() {
  return (
    <>
      <IonAccordionGroup multiple="true">
        <IonRadioGroup>
          <IonAccordion value="first">
            <IonItem slot="header">
              <IonRadio value="folder-1" slot="start" skip-accordion-toggle></IonRadio>
              <IonIcon slot="start" name="folder"></IonIcon>
              <IonLabel>Folder One</IonLabel>
            </IonItem>
            <div slot="content" class="ion-padding-start">
              <IonAccordion value="first-first">
                <IonItem slot="header">
                  <IonRadio value="folder-1-subfolder-1" slot="start" skip-accordion-toggle></IonRadio>
                  <IonIcon slot="start" name="folder"></IonIcon>
                  <IonLabel>Subfolder 1</IonLabel>
                </IonItem>
                <div slot="content" class="ion-padding-start">
                  <IonItem>
                    <IonRadio value="folder-1-subfolder-1-document-1" slot="start" skip-accordion-toggle></IonRadio>
                    <IonIcon name="document" slot="start"></IonIcon>
                    <IonLabel>Document 1</IonLabel>
                  </IonItem>
                </div>
              </IonAccordion>

              <IonItem>
                <IonRadio value="folder-1-document-1" slot="start" skip-accordion-toggle></IonRadio>
                <IonIcon name="document" slot="start"></IonIcon>
                <IonLabel>Document 1</IonLabel>
              </IonItem>
              <IonItem>
                <IonRadio value="folder-1-document-2" slot="start" skip-accordion-toggle></IonRadio>
                <IonIcon name="document" slot="start"></IonIcon>
                <IonLabel>Document 2</IonLabel>
              </IonItem>
              <IonItem>
                <IonRadio value="folder-1-document-3" slot="start" skip-accordion-toggle></IonRadio>
                <IonIcon name="document" slot="start"></IonIcon>
                <IonLabel>Document 3</IonLabel>
              </IonItem>
            </div>
          </IonAccordion>
          <IonAccordion value="second">
            <IonItem slot="header">
              <IonRadio value="folder-2" slot="start" skip-accordion-toggle></IonRadio>
              <IonIcon slot="start" name="folder"></IonIcon>
              <IonLabel>Folder Two</IonLabel>
            </IonItem>
            <div class="ion-padding-start" slot="content">
              <IonItem lines="none">
                <IonLabel>Folder is empty</IonLabel>
              </IonItem>
            </div>
          </IonAccordion>
          <IonAccordion value="third">
            <IonItem slot="header">
              <IonRadio value="folder-3" slot="start" skip-accordion-toggle></IonRadio>
              <IonIcon slot="start" name="folder"></IonIcon>
              <IonLabel>Folder Three</IonLabel>
            </IonItem>
            <div slot="content" class="ion-padding-start">
              <IonItem>
                <IonRadio value="folder-3-document-1" slot="start" skip-accordion-toggle></IonRadio>
                <IonIcon name="document" slot="start"></IonIcon>
                <IonLabel>Document 1</IonLabel>
              </IonItem>
            </div>
          </IonAccordion>
        </IonRadioGroup>
      </IonAccordionGroup>
    </>
  );
}
export default Example;
```
