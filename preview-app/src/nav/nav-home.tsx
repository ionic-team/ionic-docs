import { Component, Element, State } from '@stencil/core';

@Component({
  tag: 'nav-home'
})
export class PageNav {

  @Element() el: HTMLElement;

  @State() techStacks = [
    {
      'title': 'Angular',
      'icon': 'angular',
      'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
      'color': '#E63135'
    },
    {
      'title': 'CSS3',
      'icon': 'css3',
      'description': 'The latest version of cascading stylesheets - the styling language of the web!',
      'color': '#0CA9EA'
    },
    {
      'title': 'HTML5',
      'icon': 'html5',
      'description': 'The latest version of the web\'s markup language.',
      'color': '#F46529'
    },
    {
      'title': 'JavaScript',
      'icon': 'javascript',
      'description': 'One of the most popular programming languages on the Web!',
      'color': '#FFD439'
    },
    {
      'title': 'Sass',
      'icon': 'sass',
      'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
      'color': '#CE6296'
    },
    {
      'title': 'NodeJS',
      'icon': 'nodejs',
      'description': 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
      'color': '#78BD43'
    },
    {
      'title': 'Python',
      'icon': 'python',
      'description': 'A clear and powerful object-oriented programming language!',
      'color': '#3575AC'
    },
    {
      'title': 'Markdown',
      'icon': 'markdown',
      'description': 'A super simple way to add formatting like headers, bold, bulleted lists, and so on to plain text.',
      'color': '#412159'
    },
    {
      'title': 'Tux',
      'icon': 'tux',
      'description': 'The official mascot of the Linux kernel!',
      'color': '#000'
    },
  ];

  navToDetail(tech) {
    (this.el.closest('ion-nav') as any).push('nav-details', { tech });
  }

  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Nav</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen>
        <ion-list>
          {
            this.techStacks.map(tech => {
              return (
                <ion-item button onClick={() => this.navToDetail(tech)}>
                  <ion-icon slot="start" name={`logo-${tech.icon}`} style={{ 'color': `${tech.color}` }}></ion-icon>
                  <ion-label>
                    <h3>{tech.title}</h3>
                  </ion-label>
                </ion-item>
              );
            })
          }
        </ion-list>
      </ion-content>
    ];
  }
}
