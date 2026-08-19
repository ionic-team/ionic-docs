```html
<style>
  svg {
    width: 20px;
    height: 20px;
    display: inline-block;
  }

  .infinite-scroll-content {
    text-align: center;
    padding: 20px 0;
  }
</style>

<ion-content>
  <ion-list></ion-list>
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

<script>
  const list = document.querySelector('ion-list');

  function generateItems() {
    const count = list.childElementCount + 1;
    const total = count + 50;
    for (let i = count; i < total; i++) {
      const el = document.createElement('ion-item');

      const avatar = document.createElement('ion-avatar');
      avatar.slot = 'start';
      const img = document.createElement('img');
      img.src = `https://picsum.photos/80/80?random=${i}`;
      img.alt = 'Avatar';

      avatar.appendChild(img);
      el.appendChild(avatar);

      const text = document.createElement('ion-label');
      text.textContent = `Item ${i}`;

      el.appendChild(text);

      list.appendChild(el);
    }
  }

  generateItems();
</script>
```
