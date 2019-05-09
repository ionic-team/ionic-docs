import { Component, Element, Prop, h } from '@stencil/core';

@Component({
  tag: 'hubspot-form',
  styleUrl: 'hubspot-form.css'
})
export class HubspotForm {
  @Prop() formId: string;
  @Element() el;

  componentWillLoad() {
    const script = document.createElement('script');
    script.onload = () => {
      window['hbspt'].forms.create({
        portalId: '3776657',
        formId: this.formId,
        target: 'hubspot-form'
      });
    };
    script.src = '//js.hsforms.net/forms/v2.js';

    this.el.appendChild(script);
  }

  render() {

    return (
      <div>
      </div>
    );
  }
}
