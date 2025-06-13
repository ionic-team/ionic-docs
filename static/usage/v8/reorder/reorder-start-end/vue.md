```html
<template>
  <ion-list>
    <!-- The reorder gesture is disabled by default, enable it to drag and drop items -->
    <ion-reorder-group :disabled="false" @ionReorderStart="handleReorderStart" @ionReorderEnd="handleReorderEnd">
      <ion-item v-for="item in items" :key="item.label">
        <ion-label>{{ item.label }}</ion-label>
        <ion-icon :icon="item.icon" :color="item.color" slot="end" :ref="(el) => setIconRef(el, item.label)"></ion-icon>
        <ion-reorder slot="end"></ion-reorder>
      </ion-item>
    </ion-reorder-group>
  </ion-list>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { IonIcon, IonItem, IonLabel, IonList, IonReorder, IonReorderGroup, ReorderEndCustomEvent } from '@ionic/vue';
  import { caretDown, ellipse, warning } from 'ionicons/icons';

  const items = [
    { label: 'Buy groceries', icon: warning, color: 'warning' },
    { label: 'Call the bank', icon: warning, color: 'warning' },
    { label: 'Finish project report', icon: ellipse, color: 'light' },
    { label: 'Book flight tickets', icon: ellipse, color: 'light' },
    { label: 'Read a book', icon: caretDown, color: 'secondary' },
  ];

  const iconMap = ref(new Map<string, HTMLElement>());

  function setIconRef(el: HTMLElement | null, label: string) {
    if (el) {
      iconMap.value.set(label, el);
    } else {
      iconMap.value.delete(label);
    }
  }

  function handleReorderStart() {
    iconMap.value.forEach((icon) => {
      icon.$el.style.opacity = '0';
    });
  }

  function handleReorderEnd(event: ReorderEndCustomEvent) {
    iconMap.value.forEach((icon) => {
      icon.$el.style.opacity = '1';
    });
    event.detail.complete();
  }
</script>
```
