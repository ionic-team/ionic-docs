```ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

import {
  CheckboxCustomEvent,
  IonButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonModal,
  IonNote,
  IonToolbar,
  IonTitle,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-child',
  templateUrl: 'child.component.html',
  imports: [IonButton, IonButtons, IonCheckbox, IonContent, IonHeader, IonItem, IonList, IonNote, IonToolbar, IonTitle],
})
export class ChildComponent {
  @Input() modal!: IonModal;

  @Output() dismissChange = new EventEmitter<boolean>();

  checkboxChanged(event: CheckboxCustomEvent) {
    const checked = event.detail.checked;

    this.dismissChange.emit(checked);
  }
}
```
