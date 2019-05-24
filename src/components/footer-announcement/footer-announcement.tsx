import { Component } from '@stencil/core';

@Component({
  tag: 'docs-footer-announcement',
  styleUrl: 'footer-announcement.css'
})
export class DocsFooterAnnouncement {
  render() {
    return (
      <section class="docs-footer-announcement"><strong>Ionic Meetup #11 Tokyo:</strong> 2019/06/02(日)に開催
        <a href="https://ionic-jp.connpass.com/event/130785/" target="_blank">参加する</a>
      </section>
    );
  }
}
