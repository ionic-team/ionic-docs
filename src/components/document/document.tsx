import { Component, Prop, State, Watch } from '@stencil/core';
import defaultTemplate from './templates/default';
import componentTemplate from './templates/component';
import nativeTemplate from './templates/native';
import cliTemplate from './templates/cli';
import errorTemplate from './templates/error';

@Component({
  tag: 'docs-document'
})
export class DocsDocument {
  @Prop() path: string;
  @State() fetchError: Error = null;
  @State() document;

  componentWillLoad() {
    return this.fetchDocument(this.path);
  }

  @Watch('path')
  fetchDocument(path) {
    return fetch(path)
      .then(this.validateFetch)
      .then(this.handleNewDocument)
      .catch(this.handleFetchError);
  }

  validateFetch = (response) => {
    if (!response.ok) throw new Error(`Failed to fetch ${response.url}`);
    return response.json();
  }

  handleNewDocument = (document) => {
    this.fetchError = null;
    this.document = document;
  }

  handleFetchError = (error) => {
    this.fetchError = error;
  }

  render() {
    const { document } = this;

    if (this.fetchError) {
      return errorTemplate(this.fetchError);
    }

    return (
      <stencil-route-switch>
        <stencil-route url="/docs/components" routeRender={componentTemplate} componentProps={{ document }}/>
        <stencil-route url="/docs/native" routeRender={nativeTemplate} componentProps={{ document }}/>
        <stencil-route url="/docs/cli" routeRender={cliTemplate} componentProps={{ document }}/>
        <stencil-route url="/docs" routeRender={defaultTemplate} componentProps={{ document }}/>
      </stencil-route-switch>
    );
  }
}
