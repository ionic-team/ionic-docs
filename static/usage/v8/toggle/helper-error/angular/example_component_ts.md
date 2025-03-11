```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonToggle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [IonToggle, ReactiveFormsModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css',
})
export class ExampleComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      wifi: [true, Validators.requiredTrue],
    });
  }

  onChange() {
    // Mark the control as touched to trigger the error message
    // without requiring the toggle to be blurred first
    this.myForm.get('wifi')!.markAsTouched();
  }
}
```
