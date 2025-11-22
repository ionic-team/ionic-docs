```ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { ellipse } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['./example.component.css'],
  imports: [CommonModule, IonicModule],
  standalone: true,
})
export class ExampleComponent {
  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ ellipse });
  }

  public names = [
    'Burt Bear',
    'Charlie Cheetah',
    'Donald Duck',
    'Eva Eagle',
    'Ellie Elephant',
    'Gino Giraffe',
    'Isabella Iguana',
    'Karl Kitten',
    'Lionel Lion',
    'Molly Mouse',
    'Paul Puppy',
    'Rachel Rabbit',
    'Ted Turtle',
  ];
  public items = [];

  ngOnInit() {
    this.addItems(5);
  }

  chooseRandomName() {
    return this.names[Math.floor(Math.random() * this.names.length)];
  }

  addItems(count, unread = false) {
    for (let i = 0; i < count; i++) {
      this.items.unshift({
        name: this.chooseRandomName(),
        unread: unread,
      });
    }
  }

  handleRefresh(event) {
    setTimeout(() => {
      this.addItems(3, true);
      event.target.complete();
    }, 2000);
  }
}
```
