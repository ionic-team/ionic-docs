```html
<template>
  <b>Columns aligned at the top</b>
  <ion-grid>
    <ion-row class="ion-align-items-start">
      <ion-col>
        1 of 4
      </ion-col>
      <ion-col>
        2 of 4
      </ion-col>
      <ion-col>
        3 of 4
      </ion-col>
      <ion-col>
        4 of 4 <br />
        # <br />
        # <br />
        # <br />
      </ion-col>
    </ion-row>
  </ion-grid>

  <b>Columns aligned at the center</b>
  <ion-grid>
    <ion-row class="ion-align-items-center">
      <ion-col>
        1 of 4
      </ion-col>
      <ion-col>
        2 of 4
      </ion-col>
      <ion-col>
        3 of 4
      </ion-col>
      <ion-col>
        4 of 4 <br />
        # <br />
        # <br />
        # <br />
      </ion-col>
    </ion-row>
  </ion-grid>

  <b>Columns aligned at the bottom</b>
  <ion-grid>
    <ion-row class="ion-align-items-end">
      <ion-col>
        1 of 4
      </ion-col>
      <ion-col>
        2 of 4
      </ion-col>
      <ion-col>
        3 of 4
      </ion-col>
      <ion-col>
        4 of 4 <br />
        # <br />
        # <br />
        # <br />
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script lang="ts">
  import { IonCol, IonGrid, IonRow } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonCol, IonGrid, IonRow },
  });
</script>

<style scoped>
  ion-col {
    background-color: #f7f7f7;
    border: solid 1px #ddd;
  }
</style>
```
