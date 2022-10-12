import { defineCustomElements } from '@ionic/core/loader';

import { loadingController, modalController, pickerController, toastController } from '@ionic/core';

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

/* Theme variables */
import './theme/variables.css';

defineCustomElements();

(window as any).loadingController = loadingController;
(window as any).modalController = modalController;
(window as any).pickerController = pickerController;
(window as any).toastController = toastController;
