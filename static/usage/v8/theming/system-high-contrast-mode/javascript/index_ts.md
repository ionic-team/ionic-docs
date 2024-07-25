```ts
import { defineCustomElements } from '@ionic/core/loader';

import { addIcons } from 'ionicons';
import { personCircle, personCircleOutline, sunny, sunnyOutline } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/core/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/core/css/normalize.css';
import '@ionic/core/css/structure.css';
import '@ionic/core/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/core/css/padding.css';
import '@ionic/core/css/float-elements.css';
import '@ionic/core/css/text-alignment.css';
import '@ionic/core/css/text-transformation.css';
import '@ionic/core/css/flex-utils.css';
import '@ionic/core/css/display.css';

/**
 * Ionic Dark and High Contrast Palettes
 * -----------------------------------------------------
 * For more information, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 * https://ionicframework.com/docs/theming/high-contrast-mode
 */

import '@ionic/core/css/palettes/dark.system.css';
import '@ionic/core/css/palettes/high-contrast.system.css';
import '@ionic/core/css/palettes/high-contrast-dark.system.css';

/* Theme variables */
import './theme/variables.css';

/**
 * On Ionicons 7.2+ these icons
 * get mapped to a kebab-case key.
 * Alternatively, developers can do:
 * addIcons({ 'person-circle': personCircle, 'person-circle-outline': personCircleOutline,
 * 'sunny': sunny, 'sunny-outline': sunnyOutline });
 */
addIcons({ personCircle, personCircleOutline, sunny, sunnyOutline });

defineCustomElements();
```
