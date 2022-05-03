import { defineCustomElements } from '@ionic/core/loader';

import { pickerController } from '@ionic/core';

defineCustomElements();

(window as any).pickerController = pickerController;
