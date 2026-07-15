```vue
<template>
  <ion-header ref="header">
    <ion-toolbar>
      <ion-title>App</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-button id="open-modal" expand="block">Open Sheet Modal</ion-button>

    <ion-modal
      ref="modal"
      trigger="open-modal"
      :initial-breakpoint="0.25"
      :breakpoints="[0, 0.25, 0.5, 0.75, 1]"
      @ionDragStart="onDragStart()"
      @ionDragEnd="onDragEnd($event)"
    >
      <ion-content class="ion-padding">
        <div class="ion-margin-top">
          <ion-label>Drag the handle to adjust the header's visibility.</ion-label>
        </div>
      </ion-content>
    </ion-modal>
  </ion-content>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonButton, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonLabel } from '@ionic/vue';
import type { ModalDragEventDetail } from '@ionic/vue';

const header = ref<InstanceType<typeof IonHeader>>();

const onDragStart = () => {
  console.log('Drag started');

  const headerEl = header.value!.$el;

  headerEl.style.opacity = '0';
};

const onDragEnd = (event: CustomEvent<ModalDragEventDetail>) => {
  console.log('Drag ended');

  const headerEl = header.value!.$el;

  headerEl.style.opacity = '1';
};
</script>
```
