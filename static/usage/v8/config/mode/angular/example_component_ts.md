```ts
import { Config } from '@ionic/angular';

modeValue = '';

constructor(public config: Config) { }

showMode() {
  this.modeValue = this.config.get('mode');
}
```
