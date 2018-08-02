import { Component } from '@stencil/core';

@Component({
  tag: 'file-tree',
  styleUrl: 'file-tree.scss',
  shadow: true,
})
export class FileTree {
  render() {
    return <slot />;
  }
}
