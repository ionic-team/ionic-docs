```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Pull to Refresh</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <ion-refresher slot="fixed" @ionRefresh="handleRefresh($event)">
      <ion-refresher-content></ion-refresher-content>
    </ion-refresher>

    <ion-list>
      <ion-item :button="true" v-for="item in items">
        <ion-icon slot="start" color="primary" :icon="item.unread ? ellipse : ''"></ion-icon>
        <ion-label>
          <h2>{{ item.name }}</h2>
          <p>New message from {{ item.name }}</p>
        </ion-label>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script lang="ts">
  import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonRefresher, IonRefresherContent, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';
  import { ellipse } from 'ionicons/icons';

  export default defineComponent({
    components: { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonRefresher, IonRefresherContent, IonTitle, IonToolbar },
    setup() {
      const names = ['Burt Bear', 'Charlie Cheetah', 'Donald Duck', 'Eva Eagle', 'Ellie Elephant', 'Gino Giraffe', 'Isabella Iguana', 'Karl Kitten', 'Lionel Lion', 'Molly Mouse', 'Paul Puppy', 'Rachel Rabbit', 'Ted Turtle'];
      let items = ref([]);

      const chooseRandomName = () => {
        return names[Math.floor(Math.random() * names.length)];
      };

      const addItems = (count, unread = false) => {
        for (let i = 0; i < count; i++) {
          items.value.unshift({name: chooseRandomName(), unread});
        }
      };

      addItems(5);

      const handleRefresh = (event: CustomEvent) => {
        setTimeout(() => {
          addItems(3, true);
          event.target.complete();
        }, 2000);
      };

      return { ellipse, handleRefresh, items, names };
    },
  });
</script>

<style scoped>
  ion-item {
    --padding-start: 8px;
  }

  ion-icon {
    font-size: 12px;
    align-self: start;
    margin: 15px 8px;
  }
</style>
```
