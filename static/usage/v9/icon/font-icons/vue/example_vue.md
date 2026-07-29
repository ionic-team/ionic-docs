```vue
<template>
  <h2>Font Awesome Icons</h2>
  <div class="row">
    <ion-icon color="primary">
      <i class="fas fa-house"></i>
    </ion-icon>
    <ion-icon color="secondary">
      <i class="fas fa-heart"></i>
    </ion-icon>
    <ion-icon color="tertiary">
      <i class="fas fa-star"></i>
    </ion-icon>
    <ion-icon color="success">
      <i class="fas fa-circle-check"></i>
    </ion-icon>
    <ion-icon color="warning">
      <i class="fas fa-triangle-exclamation"></i>
    </ion-icon>
    <ion-icon color="danger">
      <i class="fas fa-trash"></i>
    </ion-icon>
  </div>
  <div class="row">
    <ion-button size="small" fill="outline">
      <ion-icon slot="start">
        <i class="fas fa-house"></i>
      </ion-icon>
      Home
    </ion-button>
    <ion-button size="small" fill="outline" color="tertiary">
      <ion-icon slot="start">
        <i class="fas fa-star"></i>
      </ion-icon>
      Save
    </ion-button>
    <ion-button size="small" fill="outline" color="danger">
      <ion-icon slot="start">
        <i class="fas fa-trash"></i>
      </ion-icon>
      Trash
    </ion-button>
  </div>

  <h2>Bootstrap Icons</h2>
  <div class="row">
    <ion-icon color="primary">
      <i class="bi bi-house-fill"></i>
    </ion-icon>
    <ion-icon color="secondary">
      <i class="bi bi-heart-fill"></i>
    </ion-icon>
    <ion-icon color="tertiary">
      <i class="bi bi-star-fill"></i>
    </ion-icon>
    <ion-icon color="success">
      <i class="bi bi-check-circle-fill"></i>
    </ion-icon>
    <ion-icon color="warning">
      <i class="bi bi-exclamation-triangle-fill"></i>
    </ion-icon>
    <ion-icon color="danger">
      <i class="bi bi-trash-fill"></i>
    </ion-icon>
  </div>
  <div class="row">
    <ion-button size="small" fill="outline">
      <ion-icon slot="start">
        <i class="bi bi-house-fill"></i>
      </ion-icon>
      Home
    </ion-button>
    <ion-button size="small" fill="outline" color="tertiary">
      <ion-icon slot="start">
        <i class="bi bi-star-fill"></i>
      </ion-icon>
      Save
    </ion-button>
    <ion-button size="small" fill="outline" color="danger">
      <ion-icon slot="start">
        <i class="bi bi-trash-fill"></i>
      </ion-icon>
      Trash
    </ion-button>
  </div>

  <h2>Remix Icons</h2>
  <div class="row">
    <ion-icon color="primary">
      <i class="ri-home-fill"></i>
    </ion-icon>
    <ion-icon color="secondary">
      <i class="ri-heart-fill"></i>
    </ion-icon>
    <ion-icon color="tertiary">
      <i class="ri-star-fill"></i>
    </ion-icon>
    <ion-icon color="success">
      <i class="ri-checkbox-circle-fill"></i>
    </ion-icon>
    <ion-icon color="warning">
      <i class="ri-alert-fill"></i>
    </ion-icon>
    <ion-icon color="danger">
      <i class="ri-delete-bin-fill"></i>
    </ion-icon>
  </div>
  <div class="row">
    <ion-button size="small" fill="outline">
      <ion-icon slot="start">
        <i class="ri-home-fill"></i>
      </ion-icon>
      Home
    </ion-button>
    <ion-button size="small" fill="outline" color="tertiary">
      <ion-icon slot="start">
        <i class="ri-star-fill"></i>
      </ion-icon>
      Save
    </ion-button>
    <ion-button size="small" fill="outline" color="danger">
      <ion-icon slot="start">
        <i class="ri-delete-bin-fill"></i>
      </ion-icon>
      Trash
    </ion-button>
  </div>

  <h2>Phosphor Icons</h2>
  <div class="row">
    <ion-icon color="primary">
      <i class="ph-fill ph-house"></i>
    </ion-icon>
    <ion-icon color="secondary">
      <i class="ph-fill ph-heart"></i>
    </ion-icon>
    <ion-icon color="tertiary">
      <i class="ph-fill ph-star"></i>
    </ion-icon>
    <ion-icon color="success">
      <i class="ph-fill ph-check-circle"></i>
    </ion-icon>
    <ion-icon color="warning">
      <i class="ph-fill ph-warning"></i>
    </ion-icon>
    <ion-icon color="danger">
      <i class="ph-fill ph-trash"></i>
    </ion-icon>
  </div>
  <div class="row">
    <ion-button size="small" fill="outline">
      <ion-icon slot="start">
        <i class="ph-fill ph-house"></i>
      </ion-icon>
      Home
    </ion-button>
    <ion-button size="small" fill="outline" color="tertiary">
      <ion-icon slot="start">
        <i class="ph-fill ph-star"></i>
      </ion-icon>
      Save
    </ion-button>
    <ion-button size="small" fill="outline" color="danger">
      <ion-icon slot="start">
        <i class="ph-fill ph-trash"></i>
      </ion-icon>
      Trash
    </ion-button>
  </div>
</template>

<script setup lang="ts">
import { IonButton, IonIcon } from '@ionic/vue';
</script>

<style scoped>
.row {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

.row > ion-icon {
  font-size: 24px;
}
</style>
```
