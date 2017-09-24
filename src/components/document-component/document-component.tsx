import { Component, Prop } from '@stencil/core';
@Component({
  tag: 'document-component',
  styleUrl: 'document-component.scss'
})
export class DocumentComponent {
  @Prop() docPath: string;

  render() {
    return (
      <div>
        <app-marked doc={this.docPath} />
      </div>
    );
  }
}
