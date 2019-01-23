import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-list'
})
export class AppList {

  @Prop() items: any[];

  render() {
    return (
      <ion-list>
        {
          this.items.map(item => {
            return (
              <ion-item>
                {item}
              </ion-item>
            );
          })
        }
      </ion-list>
    );
  }
}
