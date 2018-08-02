import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'file-tree-directory',
  styleUrl: 'file-tree-directory.scss',
  shadow: true,
})
export class FileTreeDirectory {
  @Prop() collapsed = false;
  @Prop() name: string;

  hostData() {
    return {
      class: {
        ['directory']: true,
        [`collapsed`]: this.collapsed,
      },
    };
  }

  render() {
    return [
      <div class="name">{ this.name }/</div>,
      this.collapsed ? null :
        <div class="children">
          <slot />
        </div>,
    ];
  }
}
