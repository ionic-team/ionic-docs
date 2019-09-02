import { Component, h } from '@stencil/core';

@Component({
  tag: 'file-tree',
  styleUrl: 'file-tree.css'
})
export class FileTree {
  render() {
    return <slot />;
  }
}
