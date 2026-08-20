```html
<style>
  .counter__section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>

<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>App</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <p>You can interact with the +/- buttons until the sheet is fully expanded.</p>

    <div class="counter__section">
      <ion-button id="decrement" @click="count--">-</ion-button>
      <p>{{count}}</p>
      <ion-button id="increment" @click="count++">+</ion-button>
    </div>

    <ion-modal
      ref="modal"
      trigger="open-modal"
      :is-open="true"
      :initial-breakpoint="0.25"
      :breakpoints="[0.25, 0.5, 0.75]"
      :backdrop-dismiss="false"
      :backdrop-breakpoint="0.5"
    >
      <ion-content class="ion-padding">
        <ion-searchbar @click="$refs.modal.$el.setCurrentBreakpoint(0.75)" placeholder="Search"></ion-searchbar>
        <ion-list>
          <ion-item>
            <ion-avatar slot="start">
              <img src="https://i.pravatar.cc/300?u=b" alt="Portrait of Connor Smith" />
            </ion-avatar>
            <ion-label>
              <h2>Connor Smith</h2>
              <p>Sales Rep</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <img src="https://i.pravatar.cc/300?u=a" alt="Portrait of Daniel Smith" />
            </ion-avatar>
            <ion-label>
              <h2>Daniel Smith</h2>
              <p>Product Designer</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <img src="https://i.pravatar.cc/300?u=d" alt="Portrait of Greg Smith" />
            </ion-avatar>
            <ion-label>
              <h2>Greg Smith</h2>
              <p>Director of Operations</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <img src="https://i.pravatar.cc/300?u=l" alt="Portrait of Zoey Smith" />
            </ion-avatar>
            <ion-label>
              <h2>Zoey Smith</h2>
              <p>CEO</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-modal>
  </ion-content>
</template>

<script setup lang="ts">
  import {
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonList,
    IonAvatar,
    IonLabel,
    IonSearchbar,
  } from '@ionic/vue';
  import { ref } from 'vue';

  const count = ref(0);
</script>
```
