class DevicePreview extends HTMLElement {
  static get observedAttributes() {
    return ['mode'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    if (this.shadowRoot) {
      const _style = document.createElement('style');
      _style.innerHTML = `
   :host {
     --device-padding: 1rem;
     --device-width: 344px;
     --device-height: 704px;
     --device-frame-width: 12px;


     display: flex;

     align-items: center;
     justify-content: center;
   }

   figure {
     margin: 0;

     background-size: contain;
     background-repeat: no-repeat;

     box-shadow: 0px 2px 8px rgba(2, 8, 20, 0.1), 0px 8px 16px rgba(2, 8, 20, 0.08);

     width: var(--device-width);
     height: var(--device-height);

     position: relative;

     z-index: 1;
   }

   .content {
    position: absolute;

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    border: none;

    overflow: hidden;

    -webkit-mask-image: -webkit-radial-gradient(white, black);

    z-index: 1;
   }

   :host(.ios) figure {
    border: 12px solid black;
    border-radius: 54px;
   }

   :host(.ios) .content {
     border-radius: 38px;
   }

   :host(.ios) figure:after {
     background-color: rgba(0, 0, 0, 0.5);
     border-radius: 2px;
     bottom: 8px;
     content: '';
     height: 4px;
     left: 50%;
     position: absolute;
     transform: translateX(-50%);
     width: 35%;
     z-index: 1;
   }

   :host(.md) figure {
     border: 12px solid black;
     border-radius: 44px;
   }

   :host(.md) .content {
     border-radius: 32px;
   }

   .ios-notch {
     display: none;
     fill: #090a0d;
     left: 50%;
     position: absolute;
     top: 0px;
     transform: translateX(-50%);
     width: 165px;
     z-index: 2;
   }

   .md-bar {
     display: none;
     fill: rgba(125, 125, 125, 0.3);
     padding: 0.5rem 2.2rem;
     position: relative;
     width: calc(100% - 64px);
     z-index: 2;
     top: 0px;
   }

   :host(.ios) .ios-notch {
     display: block;
   }

   :host(.md) .md-bar {
     display: block;
   }

   ::slotted(iframe) {
     height: 100%;
   }

   @media only screen and (max-width: 600px) {
    :host {
      --device-width: 100%;
    }
    :host(.ios) .ios-notch,
    :host(.md) .md-bar,
    :host(.ios) figure::after {
      display: none;
    }

    :host(.ios) figure,
    :host(.md) figure {
      border: 0;
      border-radius: 0;
      box-shadow: none;
    }

    :host(.ios) .content {
      border-radius: 0;
    }

   }

 `;

      const _template = document.createElement('template');
      _template.innerHTML = `
        <figure>
          <svg class="md-bar" viewBox="0 0 1384.3 40.3">
            <path class="st0" d="M1343 5l18.8 32.3c.8 1.3 2.7 1.3 3.5 0L1384 5c.8-1.3-.2-3-1.7-3h-37.6c-1.5 0-2.5 1.7-1.7 3z"></path>
            <circle class="st0" cx="1299" cy="20.2" r="20"></circle>
            <path class="st0" d="M1213 1.2h30c2.2 0 4 1.8 4 4v30c0 2.2-1.8 4-4 4h-30c-2.2 0-4-1.8-4-4v-30c0-2.3 1.8-4 4-4zM16 4.2h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path>
          </svg>
          <svg class="ios-notch" viewBox="0 0 219 31">
            <path d="M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z" fill-rule="evenodd"></path>
          </svg>
          <div class="content">
            <slot></slot>
          </div>
        </figure>
      `;

      this.shadowRoot.appendChild(_style);
      this.shadowRoot.appendChild(_template.content.cloneNode(true));
    }
  }

  connectedCallback() {
    this.modeChanged();
  }

  attributeChangedCallback(name, _previousValue, _nextValue) {
    if (name === 'mode') {
      this.modeChanged();
    }
  }

  modeChanged() {
    const mode = this.getAttribute('mode');
    if (this.shadowRoot) {
      this.shadowRoot.host.classList.toggle('ios', mode === 'ios');
      this.shadowRoot.host.classList.toggle('md', mode === 'md');
    }
  }
}

export function defineCustomElement() {
  if (window.customElements.get('device-preview') === undefined) {
    window.customElements.define('device-preview', DevicePreview);
  }
}
