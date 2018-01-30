import { Component } from '@stencil/core';

@Component({
  tag: 'landing-page'
})
export class LandingPage {
  render() {
    return (
        <div>
            <app-marked doc="/" />
        </div>
    );
  }
}
