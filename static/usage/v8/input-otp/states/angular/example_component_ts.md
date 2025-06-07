```ts
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { IonInputOtp } from '@ionic/angular/standalone';

function otpRequiredLength(length: number) {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value || value.toString().length !== length) {
      return { otpLength: true };
    }
    return null;
  };
}

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonInputOtp, ReactiveFormsModule, FormsModule],
})
export class ExampleComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      first: [12, [Validators.required, otpRequiredLength(4)]],
      second: [1234, [Validators.required, otpRequiredLength(4)]],
    });
  }

  ngOnInit() {
    this.markFormGroupTouched(this.myForm);
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.get(key);
      if (control) {
        control.markAsTouched();
      }
    });
  }

  getValidationText(controlName: string): string {
    const control = this.myForm.get(controlName);
    if (!control) return '';

    if (control.valid && control.value) {
      return 'Valid';
    } else if (control.invalid && control.touched) {
      return 'Invalid';
    }
    return '';
  }
}
```
