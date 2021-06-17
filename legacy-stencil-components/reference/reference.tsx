import { Component, Prop, h } from '@stencil/core';

import { ReferenceKeys } from '../../definitions';

@Component({
  tag: 'docs-reference',
  styleUrl: 'reference.css'
})
export class DocsReference {
  @Prop() data!: any[];
  @Prop() keys!: ReferenceKeys;

  toItem = (item: any) => {
    const { Head, ...keys } = this.keys;

    return [
      <thead>
        <tr>
          <th colSpan={2}>
            <h3>{Head(item)}</h3>
          </th>
        </tr>
      </thead>,
      <tbody>
        {Object.keys(keys).map(name => {
          const content = keys[name](item);
          if (content) {
            return (
              <tr>
                <th>{name}</th>
                <td>{content}</td>
              </tr>
            );
          }
        })}
      </tbody>
    ];
  }

  render() {
    return (
      <table>
        {this.data.map(this.toItem)}
      </table>
    );
  }
}
