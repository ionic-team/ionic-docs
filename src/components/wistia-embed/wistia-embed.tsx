import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'wistia-embed'
})
export class WistiaEmbed {

  @Prop() wid: string;

  render() {
    return (
    <div>
      <script src={`https://fast.wistia.com/embed/medias/${this.wid}.jsonp`} async></script>
      <script src={`https://fast.wistia.com/assets/external/E-v1.js`} async></script>
      <div class={`wistia_embed wistia_async_${this.wid}`} style={{height:'400px', width: '640px'}}>&nbsp;</div>
    </div>
    )
  }
}
