```html
<ion-content>
  <ion-list></ion-list>
  <ion-infinite-scroll>
    <ion-infinite-scroll-content></ion-infinite-scroll-content>
  </ion-infinite-scroll>
</ion-content>

<script>
  const infiniteScroll = document.querySelector('ion-infinite-scroll');
  infiniteScroll.addEventListener('ionInfinite', (event) => {
    setTimeout(() => {
      generateItems();
      event.target.complete();
    }, 500);
  });

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
