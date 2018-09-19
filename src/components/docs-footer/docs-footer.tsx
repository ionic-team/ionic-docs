import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'docs-footer',
  styleUrl: 'docs-footer.scss'
})
export class SiteFooter {
  @Prop() frontmatter: any = {};
  @Prop() path: string;

  getEditLink(path: string) {
    const excludePattern = /^(cli|native)\/.+/;
    const apiRefPattern = /^api.*\/([\w-]+)\/?$/;
    if (excludePattern.test(path)) {
      return 'https://github.com/ionic-team/ionic';
    } else if (apiRefPattern.test(path)) {
      return `https://github.com/ionic-team/ionic/blob/master/core/src/components/${apiRefPattern.exec(path)[1]}/readme.md`;
    } else {
      return `https://github.com/ionic-team/ionic-docs/blob/master/src/content/${path}.md`;
    }
  }

  render() {
    const {
      previousText,
      previousUrl,
      nextText,
      nextUrl
    } = this.frontmatter;

    const pagination = [];

    if (previousUrl && previousText) {
      pagination.push(
        <stencil-route-link class="previous" url={previousUrl}>{previousText}</stencil-route-link>
      );
    }

    if (nextUrl && nextText) {
      pagination.push(
        <stencil-route-link class="next" url={nextUrl}>{nextText}</stencil-route-link>
      );
    }

    return (
      <footer>
        <nav>{pagination}</nav>
        <p>See an error or want to help us improve the documentation? &nbsp; <a href={this.getEditLink(this.path)} target="_blank" title="Ionic Docs Issues on Github">Submit an edit on GitHub!</a></p>
      </footer>
    );
  }
}
