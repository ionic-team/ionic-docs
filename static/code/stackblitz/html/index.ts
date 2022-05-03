import { defineCustomElements } from '@ionic/core/loader';

import { modalController, pickerController } from '@ionic/core';

defineCustomElements();

(window as any).modalController = modalController;
(window as any).pickerController = pickerController;
