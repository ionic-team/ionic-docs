import { Component } from '@stencil/core';

@Component({
  tag: 'docs-footer',
  styleUrl: 'docs-footer.scss'
})
export class SiteFooter {

  render() {
    return <footer>
      <p>
        See an error or want to help us improve the documentation? &nbsp;
        <a href="https://github.com/ionic-team/ionic-site/" target="_blank"
        title="Ionic Docs Issues on Github">Submit an edit on GitHub!</a>
      </p>
    </footer>;
  }
}
