import {
  Component,
  Event,
  EventEmitter,
  Prop,
  State,
  Watch
} from '@stencil/core';
import { Helmet } from '@stencil/helmet';
import { renderMarkdown } from '../../markdown';
import frontMatter from 'front-matter';

@Component({
  tag: 'doc-loader'
})
export class DocLoader {
  @Event() docLoaded: EventEmitter;
  @Prop() path: string;
  @State() isLoading = true;
  @State() body: string;
  @State() hideTOC: boolean;
  @State() title: string;

  componentWillLoad() {
    return this.fetchNewContent();
  }

  @Watch('path')
  fetchNewContent() {
    this.isLoading = true;
    return fetch(`/docs/docs-content/${this.path}.md`)
      .then(this.validateResponse)
      .then(res => res.text())
      .then(this.handleNewContent)
      .catch(this.handleFetchError);
  }

  validateResponse = res => {
    if (res.ok) return res;
    throw new Error(res.statusText);
  }

  handleFetchError = err => {
    this.title = null;
    this.body = `<p>Unable to load ${this.path}: ${err.message}</p>`;
  }

  handleNewContent = text => {
    this.isLoading = false;
    const { attributes, body } = this.stripTitle(frontMatter(text));
    const { path } = this;
    this.title = attributes.title;
    this.hideTOC = attributes.hideTOC;
    this.body = renderMarkdown(body);
    this.docLoaded.emit({ ...attributes, path });
  }

  stripTitle = ({ attributes, body }) => {
    const match = /^# (.*?)$/gm.exec(body);
    if (match) {
      const [ titleLine, title ] = match;
      body = body.replace(titleLine, '');
      attributes.title = attributes.title || title;
    }
    return { attributes, body };
  }

  render() {
    if (this.isLoading) {
      return (
        <div class="loading-indicator">
          <svg viewBox="0 0 124 124">
            <path d="M62.455 37C76.48 37 87.91 48.43 87.91 62.455c0 14.025-11.409 25.455-25.455 25.455C48.409 87.91 37 76.48 37 62.455 37 48.409 48.43 37 62.455 37z"/>
            <path d="M98.167 37.889c-6.229 0-11.278-5.05-11.278-11.278 0-6.228 5.05-11.278 11.278-11.278 6.228 0 11.277 5.05 11.277 11.278 0 6.229-5.049 11.278-11.277 11.278zm14.802.902C116.315 46.118 118 53.927 118 62c0 30.888-25.112 56-56 56-30.887 0-56-25.112-56-56C6 31.113 31.113 6 62 6c9.035 0 17.675 2.1 25.659 6.212l1.05.548-.918.743c-2.253 1.816-4.047 4.157-5.163 6.782l-.306.721-.722-.35c-6.147-2.931-12.753-4.419-19.6-4.419-25.222 0-45.762 20.541-45.762 45.763 0 25.222 20.497 45.741 45.74 45.741 25.244 0 45.762-20.541 45.762-45.763a45.492 45.492 0 0 0-3.5-17.543l-.305-.722.743-.285a17.548 17.548 0 0 0 7.022-4.834l.787-.875.482 1.071v.001z"/>
          </svg>
        </div>
      );
    }

    return [
      <Helmet>
        <title>{this.title}</title>
      </Helmet>,
      this.title && <h1>{this.title}</h1>,
      !this.hideTOC && <table-of-contents/>,
      <main innerHTML={this.body}></main>
    ];
  }
}
