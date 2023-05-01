```html
<template>
  <b>Columns aligned at the top</b>
  <ion-grid>
    <ion-row class="ion-align-items-start">
      <ion-col>
        1
      </ion-col>
      <ion-col>
        2
      </ion-col>
      <ion-col>
        3
      </ion-col>
      <ion-col>
        4 <br />
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
        1
      </ion-col>
      <ion-col>
        2
      </ion-col>
      <ion-col>
        3
      </ion-col>
      <ion-col>
        4 <br />
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
        1
      </ion-col>
      <ion-col>
        2
      </ion-col>
      <ion-col>
        3
      </ion-col>
      <ion-col>
        4 <br />
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
    background-color: #135d54;
    border: solid 1px #fff;
    color: #fff;
    text-align: center;
  }
</style>
```
