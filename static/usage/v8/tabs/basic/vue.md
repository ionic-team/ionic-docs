```html
<template>
  <ion-tabs>
    <ion-tab tab="home">
      <ion-page id="home-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>Listen now</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <div class="example-content">Listen now content</div>
        </ion-content>
      </ion-page>
    </ion-tab>
    <ion-tab tab="radio">
      <ion-page id="radio-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>Radio</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <div class="example-content">Radio content</div>
        </ion-content>
      </ion-page>
    </ion-tab>
    <ion-tab tab="library">
      <ion-page id="library-page"
        >>
        <ion-header>
          <ion-toolbar>
            <ion-title>Library</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <div class="example-content">Library content</div>
        </ion-content>
      </ion-page>
    </ion-tab>
    <ion-tab tab="search">
      <ion-page id="search-page"
        >>
        <ion-header>
          <ion-toolbar>
            <ion-title>Search</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <div class="example-content">Search content</div>
        </ion-content>
      </ion-page>
    </ion-tab>

    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="home">
        <ion-icon :icon="playCircle" />
        Listen Now
      </ion-tab-button>
      <ion-tab-button tab="radio">
        <ion-icon :icon="radio" />
        Radio
      </ion-tab-button>
      <ion-tab-button tab="library">
        <ion-icon :icon="library" />
        Library
      </ion-tab-button>
      <ion-tab-button tab="search">
        <ion-icon :icon="search" />
        Search
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script setup lang="ts">
  import {
    IonContent,
    IonHeader,
    IonIcon,
    IonPage,
    IonTab,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonTitle,
    IonToolbar,
  } from '@ionic/vue';
  import { playCircle, radio, library, search } from 'ionicons/icons';
</script>

<style scoped>
  /* This style is for demonstration purposes only. */
  /* It's not required for the tabs to function. */
  .example-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>
```
