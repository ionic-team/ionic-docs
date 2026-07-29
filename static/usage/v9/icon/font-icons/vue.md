```vue
<template>
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

  <!-- Bootstrap Icons -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css" />

  <!-- Material Icons -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

  <!-- Phosphor Icons -->
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/fill/style.css"
  />

  <h2>Font Awesome Icons</h2>
  <div class="row">
    <ion-icon color="primary">
      <i class="fas fa-home"></i>
    </ion-icon>
    <ion-icon color="secondary">
      <i class="fas fa-heart"></i>
    </ion-icon>
    <ion-icon color="tertiary">
      <i class="fas fa-star"></i>
    </ion-icon>
    <ion-icon color="success">
      <i class="fas fa-check-circle"></i>
    </ion-icon>
    <ion-icon color="warning">
      <i class="fas fa-exclamation-triangle"></i>
    </ion-icon>
    <ion-icon color="danger">
      <i class="fas fa-trash"></i>
    </ion-icon>
  </div>
  <div class="row">
    <ion-button size="small" fill="outline">
      <ion-icon slot="start">
        <i class="fas fa-home"></i>
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

  <h2>Material Icons</h2>
  <div class="row">
    <ion-icon color="primary">
      <span class="material-icons">home</span>
    </ion-icon>
    <ion-icon color="secondary">
      <span class="material-icons">favorite</span>
    </ion-icon>
    <ion-icon color="tertiary">
      <span class="material-icons">star</span>
    </ion-icon>
    <ion-icon color="success">
      <span class="material-icons">check_circle</span>
    </ion-icon>
    <ion-icon color="warning">
      <span class="material-icons">warning</span>
    </ion-icon>
    <ion-icon color="danger">
      <span class="material-icons">delete</span>
    </ion-icon>
  </div>
  <div class="row">
    <ion-button size="small" fill="outline">
      <ion-icon slot="start">
        <span class="material-icons">home</span>
      </ion-icon>
      Home
    </ion-button>
    <ion-button size="small" fill="outline" color="tertiary">
      <ion-icon slot="start">
        <span class="material-icons">star</span>
      </ion-icon>
      Save
    </ion-button>
    <ion-button size="small" fill="outline" color="danger">
      <ion-icon slot="start">
        <span class="material-icons">delete</span>
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
