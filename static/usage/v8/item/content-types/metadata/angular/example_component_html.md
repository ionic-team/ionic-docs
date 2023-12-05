```html
<ion-header>
  <ion-toolbar>
    <ion-title>Example</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content color="light">
  <ion-list [inset]="true">
    <ion-item [button]="true">
      <ion-icon color="danger" slot="start" name="list-circle" size="large"></ion-icon>
      <ion-label>General</ion-label>
      <ion-note slot="end">6</ion-note>
    </ion-item>
    <ion-item [button]="true">
      <ion-icon color="tertiary" slot="start" name="list-circle" size="large"></ion-icon>
      <ion-label>Shopping</ion-label>
      <ion-note slot="end">15</ion-note>
    </ion-item>
    <ion-item [button]="true">
      <ion-icon color="success" slot="start" name="list-circle" size="large"></ion-icon>
      <ion-label>Cleaning</ion-label>
      <ion-note slot="end">3</ion-note>
    </ion-item>
    <ion-item [button]="true">
      <ion-icon color="warning" slot="start" name="list-circle" size="large"></ion-icon>
      <ion-label>Reminders</ion-label>
      <ion-note slot="end">8</ion-note>
    </ion-item>
  </ion-list>

  <ion-list [inset]="true">
    <ion-item [button]="true" detail="false">
      <div class="unread-indicator-wrapper" slot="start">
        <div class="unread-indicator"></div>
      </div>
      <ion-label>
        <strong>Rick Astley</strong>
        <ion-text>Never Gonna Give You Up</ion-text><br />
        <ion-note color="medium" class="ion-text-wrap">
          Never gonna give you up Never gonna let you down Never gonna run...
        </ion-note>
      </ion-label>
      <div class="metadata-end-wrapper" slot="end">
        <ion-note color="medium">06:11</ion-note>
        <ion-icon color="medium" name="chevron-forward"></ion-icon>
      </div>
    </ion-item>
    <ion-item [button]="true" detail="false">
      <div class="unread-indicator-wrapper" slot="start"></div>
      <ion-label>
        <strong>Ionitron</strong>
        <ion-text>I have become sentient</ion-text><br />
        <ion-note color="medium" class="ion-text-wrap">That is all.</ion-note>
      </ion-label>
      <div class="metadata-end-wrapper" slot="end">
        <ion-note color="medium">03:44</ion-note>
        <ion-icon color="medium" name="chevron-forward"></ion-icon>
      </div>
    </ion-item>
    <ion-item [button]="true" detail="false">
      <div class="unread-indicator-wrapper" slot="start">
        <div class="unread-indicator"></div>
      </div>
      <ion-label>
        <strong>Steam</strong>
        <ion-text>Game Store Sale</ion-text><br />
        <ion-note color="medium" class="ion-text-wrap">
          That game you added to your wish list 2 years ago is now on sale!
        </ion-note>
      </ion-label>
      <div class="metadata-end-wrapper" slot="end">
        <ion-note color="medium">Yesterday</ion-note>
        <ion-icon color="medium" name="chevron-forward"></ion-icon>
      </div>
    </ion-item>
    <ion-item [button]="true" detail="false">
      <div class="unread-indicator-wrapper" slot="start"></div>
      <ion-label>
        <strong>Ionic</strong>
        <ion-text>Announcing Ionic 7.0</ion-text><br />
        <ion-note color="medium" class="ion-text-wrap">This version is one more than Ionic 6!</ion-note>
      </ion-label>
      <div class="metadata-end-wrapper" slot="end">
        <ion-note color="medium">Yesterday</ion-note>
        <ion-icon color="medium" name="chevron-forward"></ion-icon>
      </div>
    </ion-item>
  </ion-list>
</ion-content>
```
