```html
<ion-button>Click Me</ion-button>

<script>
  class PopoverPage extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `<ion-content class="ion-padding">Hello World!</ion-content>`;
    }
  }

  customElements.define('popover-page', PopoverPage);

  async function presentPopover(e) {
    const popover = Object.assign(document.createElement('ion-popover'), {
      component: 'popover-page',
      event: e,
    });

    document.body.appendChild(popover);
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log(`Popover dismissed with role: ${role}`);
  }

  const button = document.querySelector('ion-button');
  button.addEventListener('click', presentPopover);
</script>
```
