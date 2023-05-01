```html
<ion-breadcrumbs max-items="4">
  <ion-breadcrumb href="#home">Home</ion-breadcrumb>
  <ion-breadcrumb href="#electronics">Electronics</ion-breadcrumb>
  <ion-breadcrumb href="#photography">Photography</ion-breadcrumb>
  <ion-breadcrumb href="#cameras">Cameras</ion-breadcrumb>
  <ion-breadcrumb href="#film">Film</ion-breadcrumb>
  <ion-breadcrumb href="#35mm">35 mm</ion-breadcrumb>
</ion-breadcrumbs>
<ion-popover>
  <ion-content>
    <ion-list></ion-list>
  </ion-content>
</ion-popover>

<script>
  const breadcrumbs = document.querySelector('ion-breadcrumbs');
  const popover = document.querySelector('ion-popover');
  const popoverList = document.querySelector('ion-popover ion-list');

  breadcrumbs.addEventListener('ionCollapsedClick', e => {
    let listHTML = ``;
    e.detail.collapsedBreadcrumbs.forEach((breadcrumb, i) => {
      listHTML += `
        <ion-item
          ${i === e.detail.collapsedBreadcrumbs.length - 1 ? `lines="none"` : ""}
          href="${breadcrumb.href}"
        >
          <ion-label>${breadcrumb.textContent}</ion-label>
        </ion-item>
      `;
    });

    popoverList.innerHTML = listHTML;
    popover.event = e;
    popover.isOpen = true;
  });

  popover.addEventListener('didDismiss', () => popover.isOpen = false);
</script>
```
