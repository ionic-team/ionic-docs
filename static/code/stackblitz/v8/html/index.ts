import { defineCustomElements } from '@ionic/core/loader';

import { createAnimation, createGesture, loadingController, menuController, modalController, pickerController, toastController } from '@ionic/core';

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

/**
 * Ionic Dark Theme
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

// import '@ionic/core/css/themes/dark.always.css';
// import '@ionic/core/css/themes/dark.class.css';
import '@ionic/core/css/themes/dark.system.css';

defineCustomElements();

(window as any).loadingController = loadingController;
(window as any).menuController = menuController;
(window as any).modalController = modalController;
(window as any).pickerController = pickerController;
(window as any).toastController = toastController;
(window as any).createAnimation = createAnimation;
(window as any).createGesture = createGesture;
