import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'file-tree-file',
  styleUrl: 'file-tree-file.css'
})
export class FileTreeFile {
  @Prop() name!: string;

  get extname() {
    const dots = this.name.split('.');

    return dots.length > 1 ? dots[dots.length - 1] : '';
  }

  hostData() {
    return {
      class: {
        ['file']: true,
        [`extname-${this.extname}`]: this.extname.length > 0,
      },
    };
  }

  render() {
    return (
      <div class="name">{this.name}</div>
    );
  }
}
