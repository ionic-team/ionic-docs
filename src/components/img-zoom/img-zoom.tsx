import { Component, Listen, State } from '@stencil/core';

@Component({
  tag: 'img-zoom',
  styleUrl: 'img-zoom.scss',
  shadow: true
})
export class ImgZoom {
  @State() zoomed = false;

  @Listen('click')
  onImageClick() {
    this.zoomed = !this.zoomed;
  }

  @Listen('window:keyup')
  onKeyUp(event: KeyboardEvent) {
    if (event.code === 'Escape') {
      this.zoomed = false;
    }
  }

  hostData() {
    return {
      class: { 'is-zoomed': this.zoomed },
    };
  }

  render() {
    return <slot/>;
  }
}
