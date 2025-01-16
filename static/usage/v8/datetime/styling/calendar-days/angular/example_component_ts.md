```ts
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IonDatetime } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

// ViewEncapsulation is turned off for this demo due to
// a lack of support for styling multiple css shadow parts
// See https://github.com/angular/angular/issues/22515
@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  encapsulation: ViewEncapsulation.None,
  imports: [IonDatetime, FormsModule],
})
export class ExampleComponent implements OnInit {
  public datetime!: string;

  ngOnInit() {
    const date = new Date();

    // Set the value of the datetime to 2 days
    // before the current day
    let dayChange = -2;

    // If the day we are going to set the value to
    // is in the previous month then set the day 2 days
    // later instead so it remains in the same month
    if (date.getDate() + dayChange <= 0) {
      dayChange = -dayChange;
    }

    // Set the value of the datetime to the day
    // calculated above
    date.setDate(date.getDate() + dayChange);
    this.datetime = date.toISOString();
  }
}
```
