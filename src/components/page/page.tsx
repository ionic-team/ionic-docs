import { Component, Prop, State, Watch } from '@stencil/core';
import { Page } from '../../definitions';
import defaultTemplate from './templates/default';
import nativeTemplate from './templates/native';
import apiReferenceTemplate from './templates/api-reference';
import apiTemplate from './templates/api';
import cliTemplate from './templates/cli';
import errorTemplate from './templates/error';

@Component({
  tag: 'docs-page',
  styleUrl: 'page.css'
})
export class DocsPage {
  @Prop() path: string;
  @State() badFetch: Response = null;
  @State() page: Page = { title: null, body: null };

  componentWillLoad() {
    return this.fetchPage(this.path);
  }

  @Watch('path')
  fetchPage(path, oldPath?) {
    if (path == null || path === oldPath) return;
    return fetch(path)
      .then(this.validateFetch)
      .then(this.handleNewPage)
      .catch(this.handleBadFetch);
  }

  validateFetch = (response) => {
    if (!response.ok) throw response;
    return response.json();
  }

  handleNewPage = (page) => {
    this.badFetch = null;
    this.page = page;
  }

  handleBadFetch = (error: Response) => {
    this.badFetch = error;
    this.page = {
      title: error.statusText,
      body: null
    };
  }

  hostData() {
    return {
      class: {
        [this.page.pageClass]: typeof this.page.pageClass === 'string'
      }
    };
  }

  render() {
    const { page } = this;
    if (this.badFetch) {
      return errorTemplate(this.badFetch);
    }

    const content = [
      <stencil-route-switch>
        <stencil-route url="/docs/native" routeRender={nativeTemplate} componentProps={{ page }}/>
        <stencil-route exact url="/docs/api" routeRender={apiReferenceTemplate} componentProps={{ page }}/>
        <stencil-route url="/docs/api/(.+)" routeRender={apiTemplate} componentProps={{ page }}/>
        <stencil-route url="/docs/cli/commands/(.+)" routeRender={cliTemplate} componentProps={{ page }}/>
        <stencil-route url="/docs" routeRender={defaultTemplate} componentProps={{ page }}/>
      </stencil-route-switch>
    ];

    const shouldShowPagination = (
      page.previousText && page.previousUrl || page.nextText && page.nextUrl
    );

    if (shouldShowPagination) {
      content.push(
        <docs-pagination page={page}/>
      );
    }

    return content;
  }
}
