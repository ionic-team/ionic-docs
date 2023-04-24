```html
<ion-content>
  <ion-list>
    <ion-item *ngFor="let item of items; let index">
      <ion-avatar slot="start">
        <img [src]="'https://picsum.photos/80/80?random=' + index" alt="avatar" />
      </ion-avatar>
      <ion-label>{{ item }}</ion-label>
    </ion-item>
  </ion-list>
  <ion-infinite-scroll>
    <div class="infinite-scroll-content">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enable-background="new 0 0 100 100"
        xml:space="preserve"
      >
        <circle fill="none" stroke="#1b6dff" stroke-width="4" stroke-miterlimit="10" cx="50" cy="50" r="48" />
        <line
          fill="none"
          stroke-linecap="round"
          stroke="#1b6dff"
          stroke-width="4"
          stroke-miterlimit="10"
          x1="50"
          y1="50"
          x2="85"
          y2="50.5"
        >
          <animateTransform
            attributeName="transform"
            dur="2s"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </line>
        <line
          fill="none"
          stroke-linecap="round"
          stroke="#1b6dff"
          stroke-width="4"
          stroke-miterlimit="10"
          x1="50"
          y1="50"
          x2="49.5"
          y2="74"
        >
          <animateTransform
            attributeName="transform"
            dur="15s"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </line>
      </svg>
    </div>
  </ion-infinite-scroll>
</ion-content>
```
