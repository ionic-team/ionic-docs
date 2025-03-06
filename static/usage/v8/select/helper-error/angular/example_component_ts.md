```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonSelect, IonSelectOption, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [IonSelect, IonSelectOption, IonButton, ReactiveFormsModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css',
})
export class ExampleComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      favFruit: [false, Validators.required],
    });
  }

  onSubmit() {
    // Mark the control as touched to trigger the error message.
    // This is needed if the user submits the form without interacting
    // with the checkbox.
    this.myForm.get('favFruit')!.markAsTouched();
  }
}
```
