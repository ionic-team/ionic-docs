import { defineCustomElements } from '@ionic/core/loader';

import { modalController } from '@ionic/core';

defineCustomElements();

(window as any).modalController = modalController;
