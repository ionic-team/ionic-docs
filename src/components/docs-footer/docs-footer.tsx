import { Component, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'docs-footer',
  styleUrl: 'docs-footer.scss'
})
export class SiteFooter {
  @Prop() frontmatter: any = {};
  @Prop() path: string;
  @State() previous?: {
    text: string,
    url: string
  };
  @State() next?: {
    text?: string,
    url?: string
  };
  @State() show = true;

  componentDidLoad() {
    this.parseFrontMatter();
  }

  @Watch('frontmatter')
  parseFrontMatter() {
    this.show = !this.frontmatter.hideFooter;

    this.previous = (
      this.frontmatter.previousText &&
      this.frontmatter.previousUrl
    ) ? {
      text: this.frontmatter.previousText,
      url: this.frontmatter.previousUrl
    } : null;

    this.next = (
      this.frontmatter.nextText &&
      this.frontmatter.nextUrl
    ) ? {
      text: this.frontmatter.nextText,
      url: this.frontmatter.nextUrl
    } : null;
  }

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
    if (!this.show) {
      return null;
    }

    return <footer>
      <nav>
        {this.previous &&
          <stencil-route-link class="previous" url={this.previous.url}>
            {this.previous.text}
          </stencil-route-link>
        }
        {this.next &&
          <stencil-route-link class="next" url={this.next.url}>
            {this.next.text}
          </stencil-route-link>
        }
      </nav>
      <p>
        See an error or want to help us improve the documentation? &nbsp;
        <a href={this.getEditLink(this.path)} target="_blank"
        title="Ionic Docs Issues on Github">Submit an edit on GitHub!</a>
      </p>
    </footer>;
  }
}
