import { Component } from '@stencil/core';

@Component({
  tag: 'page-slides',
  styleUrl: 'slides.css'
})
export class PageSlides {

  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Slides</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen padding scrollY={false}>
        <ion-slides pager={false}>

          <ion-slide>
            <img src="assets/img/ica-slidebox-img-1.png" class="slide-image" />
            <h2 class="slide-title">
              Welcome to the <b>ICA</b>
            </h2>
            <p>
              The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.
            </p>
          </ion-slide>

          <ion-slide>
            <img src="assets/img/ica-slidebox-img-2.png" class="slide-image" />
            <h2 class="slide-title">What is Ionic?</h2>
            <p>
              <b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies
              like HTML, CSS, and JavaScript.
            </p>
          </ion-slide>

          <ion-slide>
            <img src="assets/img/ica-slidebox-img-3.png" class="slide-image" />
            <h2 class="slide-title">What is Ionic Pro?</h2>
            <p>
              <b>Ionic Pro</b> is a powerful set of services and features built on top of Ionic Framework that brings a totally new
              level of app development agility to mobile dev teams.
            </p>
          </ion-slide>

          <ion-slide>
            <img src="assets/img/ica-slidebox-img-4.png" class="slide-image" />
            <h2 class="slide-title">Ready to Play?</h2>
            <ion-button fill="clear" href="/schedule">
              Continue
              <ion-icon slot="end" name="arrow-forward"></ion-icon>
            </ion-button>
          </ion-slide>

        </ion-slides>
      </ion-content>
    ];
  }
}
