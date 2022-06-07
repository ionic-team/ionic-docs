```html
<ion-breadcrumbs max-items="4">
  <ion-breadcrumb href="#home">Home</ion-breadcrumb>
  <ion-breadcrumb href="#electronics">Electronics</ion-breadcrumb>
  <ion-breadcrumb href="#photography">Photography</ion-breadcrumb>
  <ion-breadcrumb href="#cameras">Cameras</ion-breadcrumb>
  <ion-breadcrumb href="#film">Film</ion-breadcrumb>
  <ion-breadcrumb href="#35mm">35 mm</ion-breadcrumb>
</ion-breadcrumbs>

<script>
  const breadcrumbs = document.querySelector('ion-breadcrumbs');
  breadcrumbs.addEventListener('ionCollapsedClick', presentPopover);

  class PopoverPage extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      let breadcrumbTemplate = ``;
      this.collapsedBreadcrumbs.forEach(breadcrumb => {
        breadcrumbTemplate += `
          <ion-item href="${breadcrumb.href}">
            <ion-label>${breadcrumb.textContent}</ion-label>
          </ion-item>
        `;
      });

      this.innerHTML = `
        <ion-content>
          <ion-list>
            ${breadcrumbTemplate}
          </ion-list>
        </ion-content>
      `;
    }
  }

  customElements.define('popover-page', PopoverPage);

  async function presentPopover(e) {
    const popover = Object.assign(document.createElement('ion-popover'), {
      component: 'popover-page',
      event: e,
      componentProps: {
        collapsedBreadcrumbs: e.detail.collapsedBreadcrumbs
      }
    });

    document.body.appendChild(popover);
    await popover.present();
  }
</script>
```
