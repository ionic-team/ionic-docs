import { Component, Listen, State } from '@stencil/core';

const ESCAPE = 27;

@Component({
  tag: 'img-zoom',
  styleUrl: 'img-zoom.scss',
  shadow: true
})
export class ImgZoom {
  @State() zoomed = false;

  onImageClick = () => {
    this.zoomed = !this.zoomed;
  }

  @Listen('window:keyup')
  onKeyUp(event: KeyboardEvent) {
    if (event.keyCode === ESCAPE) {
      this.zoomed = false;
    }
  }

  hostData() {
    return {
      class: { 'is-zoomed': this.zoomed },
      onClick: this.onImageClick
    };
  }

  render() {
    return <slot/>;
  }
}
