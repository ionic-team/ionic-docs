```ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CheckboxCustomEvent, IonModal } from '@ionic/angular';

@Component({
  selector: 'app-child',
  templateUrl: 'child.component.html',
})
export class ChildComponent {
  @Input() modal!: IonModal;

  @Output() dismissChange = new EventEmitter<boolean>();

  checkboxChanged(event: any) {
    const ev = event as CheckboxCustomEvent;
    const checked = ev.detail.checked;

    this.dismissChange.emit(checked);
  }
}
```
