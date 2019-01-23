import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'popover-page',
  styleUrl: 'popover-page.css'
})
export class PopoverPage {

  @Prop() contentEl: HTMLElement;

  @State() selected: string;

  colors = {
    'white': {
      'bg': 'rgb(255, 255, 255)',
      'fg': 'rgb(0, 0, 0)'
    },
    'tan': {
      'bg': 'rgb(249, 241, 228)',
      'fg': 'rgb(0, 0, 0)'
    },
    'grey': {
      'bg': 'rgb(76, 75, 80)',
      'fg': 'rgb(255, 255, 255)'
    },
    'black': {
      'bg': 'rgb(0, 0, 0)',
      'fg': 'rgb(255, 255, 255)'
    },
  };

  changeColor(color) {
    this.selected = color;
    this.contentEl.style.background = this.colors[color].bg;
    this.contentEl.style.color = this.colors[color].fg;
  }

  changeFontSize(direction) {
    const currentSize = parseInt(this.contentEl.style.fontSize, 10);
    const newSize = direction === 'smaller' ? (currentSize * .9) : (currentSize * 1.1);

    // Prevent the user from making it too small or large
    if (newSize < 50 || newSize > 480) {
      return;
    }

    this.contentEl.style.fontSize = newSize + '%';
  }

  changeFontFamily(event) {
    const family = event.detail.value;
    this.contentEl.style.fontFamily = family;
  }

  render() {
    return (
      <ion-list lines="full">
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-item button onClick={() => this.changeFontSize('smaller')} detail={false} class="text-button text-smaller">A</ion-item>
            </ion-col>
            <ion-col>
              <ion-item button onClick={() => this.changeFontSize('larger')} detail={false} class="text-button text-larger">A</ion-item>
            </ion-col>
          </ion-row>
          <ion-row class="row-dots">
            <ion-col>
              <div onClick={() => this.changeColor('white')} class={{ 'dot': true, 'dot-white': true, 'selected': this.selected === 'white' }}></div>
            </ion-col>
            <ion-col>
              <div onClick={() => this.changeColor('tan')} class={{ 'dot': true, 'dot-tan': true, 'selected': this.selected === 'tan' }}></div>
            </ion-col>
            <ion-col>
              <div onClick={() => this.changeColor('grey')} class={{ 'dot': true, 'dot-grey': true, 'selected': this.selected === 'grey' }}></div>
            </ion-col>
            <ion-col>
              <div onClick={() => this.changeColor('black')} class={{ 'dot': true, 'dot-black': true, 'selected': this.selected === 'black' }}></div>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-radio-group name="font-family" onIonChange={() => this.changeFontFamily(event)}>
          <ion-item class="text-arial">
            <ion-label>Arial</ion-label>
            <ion-radio value="Arial"></ion-radio>
          </ion-item>
          <ion-item class="text-courier-new">
            <ion-label>Courier New</ion-label>
            <ion-radio value="Courier New"></ion-radio>
          </ion-item>
          <ion-item class="text-trebuchet">
            <ion-label>Trebuchet</ion-label>
            <ion-radio value="Trebuchet MS"></ion-radio>
          </ion-item>
          <ion-item class="text-comic-sans">
            <ion-label>Comic Sans</ion-label>
            <ion-radio value="Comic Sans MS"></ion-radio>
          </ion-item>
          <ion-item class="text-times-new-roman">
            <ion-label>Times New Roman</ion-label>
            <ion-radio value="Times New Roman"></ion-radio>
          </ion-item>
        </ion-radio-group>
      </ion-list>
    );
  }
}
