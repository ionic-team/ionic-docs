```html
<ion-list></ion-list><br />
<ion-button onclick="toggle()">Toggle</ion-button>

<script>
  const list = document.querySelector('ion-list');
  let loaded = false;
  function toggle() {
    if (loaded) {
      setSkeletonText();
    } else {
      setContent();
    }

    loaded = !loaded;
  }

  function setSkeletonText() {
    list.innerHTML = `
      <ion-list-header>
        <ion-skeleton-text animated="true" style="width: 80px"></ion-skeleton-text>
      </ion-list-header>
      <ion-item>
        <ion-thumbnail slot="start">
          <ion-skeleton-text animated="true"></ion-skeleton-text>
        </ion-thumbnail>
        <ion-label>
          <h3>
            <ion-skeleton-text animated="true" style="width: 80%;"></ion-skeleton-text>
          </h3>
          <p>
            <ion-skeleton-text animated="true" style="width: 60%;"></ion-skeleton-text>
          </p>
          <p>
            <ion-skeleton-text animated="true" style="width: 30%;"></ion-skeleton-text>
          </p>
        </ion-label>
      </ion-item>
    `;
  }

  function setContent() {
    list.innerHTML = `
      <ion-list-header>Albums</ion-list-header>
      <ion-item>
        <ion-thumbnail slot="start">
          <ion-icon style="width: 100%; height: 100%" name="musical-notes"></ion-icon>
        </ion-thumbnail>
        <ion-label>
          <h3>Abbey Road</h3>
          <p>The Beatles</p>
          <p>1969</p>
        </ion-label>
      </ion-item>
    `;
  }

  setSkeletonText();

</script>
```
