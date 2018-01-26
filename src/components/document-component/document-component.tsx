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
        <app-marked doc={this.docPath ? this.docPath.substring(0, 4) : null} />
      </div>
    );
  }
}
