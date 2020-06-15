import { Build, Component, Element, State, h } from '@stencil/core';

@Component({
  tag: 'color-accordion',
  styleUrl: 'color-accordion.css'
})
export class ColorAccordion {

  colors = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'dark', 'medium', 'light'];

  @State() activeColor = '';

  @Element() el!: HTMLElement;

  toggleActiveColor(color: string) {
    if (this.activeColor === color) {
      this.activeColor = '';
      return;
    }
    this.activeColor = color;
  }

  render() {
    if (!Build.isBrowser) {
      return null;
    }
    const listItems = this.colors.map(color => {
      const isActive = (this.activeColor === color) ? true : false;

      const baseColor = getComputedStyle(this.el).getPropertyValue(`--ion-color-${color}`);
      const shadeColor = getComputedStyle(this.el).getPropertyValue(`--ion-color-${color}-shade`);
      const tintColor = getComputedStyle(this.el).getPropertyValue(`--ion-color-${color}-tint`);

      return (
        <li
          class={{
            'color-menu-item': true,
            'color-menu-item-active': isActive
          }}
          style={{
            'background-color': `var(--ion-color-${color})`,
            'color': `var(--ion-color-${color}-contrast)`
          }}
        >
          <div class="color-menu-text" onClick={() => this.toggleActiveColor(color)}>
            {color[0].toUpperCase() + color.substr(1)}
            <div class="color-menu-value">{baseColor}</div>
          </div>

          <svg width="10px" height="6px" viewBox="0 0 10 6" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
              <g id="Desktop-HD" transform="translate(-1025.000000, -335.000000)" stroke="currentColor" stroke-width="2">
                <polyline id="arrow" transform="translate(1030.000000, 338.000000) rotate(90.000000) translate(-1030.000000, -338.000000) " points="1028 334 1032 338.020022 1028 342"></polyline>
              </g>
            </g>
          </svg>

          <ul class="color-submenu">
            <li
              class="color-submenu-item"
              style={{
                'background-color': `var(--ion-color-${color}-shade)`,
                'color': `var(--ion-color-${color}-contrast)`
              }}
            >
              <div class="color-menu-text">
                Shade
              <div class="color-menu-value">{shadeColor}</div>
              </div>
            </li>
            <li
              class="color-submenu-item"
              style={{
                'background-color': `var(--ion-color-${color}-tint)`,
                'color': `var(--ion-color-${color}-contrast)`
              }}
            >
              <div class="color-menu-text">
                Tint
              <div class="color-menu-value">{tintColor}</div>
              </div>
            </li>
          </ul>
        </li>
      );
    });

    return (
      <ul class="color-menu">
        {listItems}
      </ul>
    );
  }
}
