```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Example</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content color="light">
    <ion-list :inset="true">
      <ion-item-sliding>
        <ion-item :button="true">
          <ion-avatar aria-hidden="true" slot="start">
            <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </ion-avatar>
          <ion-label>Rick Astley</ion-label>
        </ion-item>
        <ion-item-options slot="end">
          <ion-item-option color="warning">
            <ion-icon slot="icon-only" :icon="pin"></ion-icon>
          </ion-item-option>
          <ion-item-option color="tertiary">
            <ion-icon slot="icon-only" :icon="share"></ion-icon>
          </ion-item-option>
          <ion-item-option color="danger" expandable="true">
            <ion-icon slot="icon-only" :icon="trash"></ion-icon>
          </ion-item-option>
        </ion-item-options>
      </ion-item-sliding>

      <ion-item-sliding>
        <ion-item :button="true">
          <ion-avatar aria-hidden="true" slot="start">
            <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </ion-avatar>
          <ion-label>Leeroy Jenkins</ion-label>
        </ion-item>
        <ion-item-options slot="end">
          <ion-item-option color="warning">
            <ion-icon slot="icon-only" :icon="pin"></ion-icon>
          </ion-item-option>
          <ion-item-option color="tertiary">
            <ion-icon slot="icon-only" :icon="share"></ion-icon>
          </ion-item-option>
          <ion-item-option color="danger" expandable="true">
            <ion-icon slot="icon-only" :icon="trash"></ion-icon>
          </ion-item-option>
        </ion-item-options>
      </ion-item-sliding>

      <ion-item-sliding>
        <ion-item :button="true">
          <ion-avatar aria-hidden="true" slot="start">
            <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </ion-avatar>
          <ion-label>Ionitron</ion-label>
        </ion-item>
        <ion-item-options slot="end">
          <ion-item-option color="warning">
            <ion-icon slot="icon-only" :icon="pin"></ion-icon>
          </ion-item-option>
          <ion-item-option color="tertiary">
            <ion-icon slot="icon-only" :icon="share"></ion-icon>
          </ion-item-option>
          <ion-item-option color="danger" expandable="true">
            <ion-icon slot="icon-only" :icon="trash"></ion-icon>
          </ion-item-option>
        </ion-item-options>
      </ion-item-sliding>

      <ion-item-sliding>
        <ion-item :button="true">
          <ion-avatar aria-hidden="true" slot="start">
            <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </ion-avatar>
          <ion-label>Wall-E</ion-label>
        </ion-item>
        <ion-item-options slot="end">
          <ion-item-option color="warning">
            <ion-icon slot="icon-only" :icon="pin"></ion-icon>
          </ion-item-option>
          <ion-item-option color="tertiary">
            <ion-icon slot="icon-only" :icon="share"></ion-icon>
          </ion-item-option>
          <ion-item-option color="danger" expandable="true">
            <ion-icon slot="icon-only" :icon="trash"></ion-icon>
          </ion-item-option>
        </ion-item-options>
      </ion-item-sliding>

      <ion-item-sliding>
        <ion-item :button="true">
          <ion-avatar aria-hidden="true" slot="start">
            <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </ion-avatar>
          <ion-label>Cortana</ion-label>
        </ion-item>
        <ion-item-options slot="end">
          <ion-item-option color="warning">
            <ion-icon slot="icon-only" :icon="pin"></ion-icon>
          </ion-item-option>
          <ion-item-option color="tertiary">
            <ion-icon slot="icon-only" :icon="share"></ion-icon>
          </ion-item-option>
          <ion-item-option color="danger" expandable="true">
            <ion-icon slot="icon-only" :icon="trash"></ion-icon>
          </ion-item-option>
        </ion-item-options>
      </ion-item-sliding>

      <ion-item-sliding>
        <ion-item :button="true">
          <ion-avatar aria-hidden="true" slot="start">
            <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </ion-avatar>
          <ion-label>Bender</ion-label>
        </ion-item>
        <ion-item-options slot="end">
          <ion-item-option color="warning">
            <ion-icon slot="icon-only" :icon="pin"></ion-icon>
          </ion-item-option>
          <ion-item-option color="tertiary">
            <ion-icon slot="icon-only" :icon="share"></ion-icon>
          </ion-item-option>
          <ion-item-option color="danger" expandable="true">
            <ion-icon slot="icon-only" :icon="trash"></ion-icon>
          </ion-item-option>
        </ion-item-options>
      </ion-item-sliding>

      <ion-item-sliding>
        <ion-item :button="true">
          <ion-avatar aria-hidden="true" slot="start">
            <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </ion-avatar>
          <ion-label>BB-8</ion-label>
        </ion-item>
        <ion-item-options slot="end">
          <ion-item-option color="warning">
            <ion-icon slot="icon-only" :icon="pin"></ion-icon>
          </ion-item-option>
          <ion-item-option color="tertiary">
            <ion-icon slot="icon-only" :icon="share"></ion-icon>
          </ion-item-option>
          <ion-item-option color="danger" expandable="true">
            <ion-icon slot="icon-only" :icon="trash"></ion-icon>
          </ion-item-option>
        </ion-item-options>
      </ion-item-sliding>
    </ion-list>
  </ion-content>
</template>

<script lang="ts">
  import {
    IonAvatar,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonItemOptions,
    IonItemOption,
    IonItemSliding,
    IonLabel,
    IonList,
    IonTitle,
    IonToolbar,
  } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { pin, share, trash } from 'ionicons/icons';

  export default defineComponent({
    components: {
      IonAvatar,
      IonContent,
      IonHeader,
      IonIcon,
      IonItem,
      IonItemOptions,
      IonItemOption,
      IonItemSliding,
      IonLabel,
      IonList,
      IonTitle,
      IonToolbar,
    },
    setup() {
      return { pin, share, trash };
    },
  });
</script>
```
