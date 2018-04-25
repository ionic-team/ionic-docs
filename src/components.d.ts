/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import '@stencil/router';


declare global {

  namespace StencilComponents {
    interface CardLink {
      'hasIcon': boolean;
      'headline': string;
      'url': string;
    }
  }

  interface HTMLCardLinkElement extends StencilComponents.CardLink, HTMLStencilElement {}

  var HTMLCardLinkElement: {
    prototype: HTMLCardLinkElement;
    new (): HTMLCardLinkElement;
  };
  interface HTMLElementTagNameMap {
    'card-link': HTMLCardLinkElement;
  }
  interface ElementTagNameMap {
    'card-link': HTMLCardLinkElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'card-link': JSXElements.CardLinkAttributes;
    }
  }
  namespace JSXElements {
    export interface CardLinkAttributes extends HTMLAttributes {
      'hasIcon'?: boolean;
      'headline'?: string;
      'url'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface CodeBlock {
      'language': string;
    }
  }

  interface HTMLCodeBlockElement extends StencilComponents.CodeBlock, HTMLStencilElement {}

  var HTMLCodeBlockElement: {
    prototype: HTMLCodeBlockElement;
    new (): HTMLCodeBlockElement;
  };
  interface HTMLElementTagNameMap {
    'code-block': HTMLCodeBlockElement;
  }
  interface ElementTagNameMap {
    'code-block': HTMLCodeBlockElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'code-block': JSXElements.CodeBlockAttributes;
    }
  }
  namespace JSXElements {
    export interface CodeBlockAttributes extends HTMLAttributes {
      'language'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface CodePreview {
      'markup': string;
    }
  }

  interface HTMLCodePreviewElement extends StencilComponents.CodePreview, HTMLStencilElement {}

  var HTMLCodePreviewElement: {
    prototype: HTMLCodePreviewElement;
    new (): HTMLCodePreviewElement;
  };
  interface HTMLElementTagNameMap {
    'code-preview': HTMLCodePreviewElement;
  }
  interface ElementTagNameMap {
    'code-preview': HTMLCodePreviewElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'code-preview': JSXElements.CodePreviewAttributes;
    }
  }
  namespace JSXElements {
    export interface CodePreviewAttributes extends HTMLAttributes {
      'markup'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface CtrlDropdown {
      'autoClose': boolean;
      'autoCloseDelay': number;
      'items': any[];
      'onSelect': Function;
      'renderer': Function;
      'setInitial': Function;
    }
  }

  interface HTMLCtrlDropdownElement extends StencilComponents.CtrlDropdown, HTMLStencilElement {}

  var HTMLCtrlDropdownElement: {
    prototype: HTMLCtrlDropdownElement;
    new (): HTMLCtrlDropdownElement;
  };
  interface HTMLElementTagNameMap {
    'ctrl-dropdown': HTMLCtrlDropdownElement;
  }
  interface ElementTagNameMap {
    'ctrl-dropdown': HTMLCtrlDropdownElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'ctrl-dropdown': JSXElements.CtrlDropdownAttributes;
    }
  }
  namespace JSXElements {
    export interface CtrlDropdownAttributes extends HTMLAttributes {
      'autoClose'?: boolean;
      'autoCloseDelay'?: number;
      'items'?: any[];
      'onSelect'?: Function;
      'renderer'?: Function;
      'setInitial'?: Function;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface DocsContent {

    }
  }

  interface HTMLDocsContentElement extends StencilComponents.DocsContent, HTMLStencilElement {}

  var HTMLDocsContentElement: {
    prototype: HTMLDocsContentElement;
    new (): HTMLDocsContentElement;
  };
  interface HTMLElementTagNameMap {
    'docs-content': HTMLDocsContentElement;
  }
  interface ElementTagNameMap {
    'docs-content': HTMLDocsContentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'docs-content': JSXElements.DocsContentAttributes;
    }
  }
  namespace JSXElements {
    export interface DocsContentAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface DocsDocument {
      'onLoaded': (document) => void;
      'path': string;
    }
  }

  interface HTMLDocsDocumentElement extends StencilComponents.DocsDocument, HTMLStencilElement {}

  var HTMLDocsDocumentElement: {
    prototype: HTMLDocsDocumentElement;
    new (): HTMLDocsDocumentElement;
  };
  interface HTMLElementTagNameMap {
    'docs-document': HTMLDocsDocumentElement;
  }
  interface ElementTagNameMap {
    'docs-document': HTMLDocsDocumentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'docs-document': JSXElements.DocsDocumentAttributes;
    }
  }
  namespace JSXElements {
    export interface DocsDocumentAttributes extends HTMLAttributes {
      'onLoaded'?: (document) => void;
      'path'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface DocsHeader {

    }
  }

  interface HTMLDocsHeaderElement extends StencilComponents.DocsHeader, HTMLStencilElement {}

  var HTMLDocsHeaderElement: {
    prototype: HTMLDocsHeaderElement;
    new (): HTMLDocsHeaderElement;
  };
  interface HTMLElementTagNameMap {
    'docs-header': HTMLDocsHeaderElement;
  }
  interface ElementTagNameMap {
    'docs-header': HTMLDocsHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'docs-header': JSXElements.DocsHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface DocsHeaderAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface DocsLayout {

    }
  }

  interface HTMLDocsLayoutElement extends StencilComponents.DocsLayout, HTMLStencilElement {}

  var HTMLDocsLayoutElement: {
    prototype: HTMLDocsLayoutElement;
    new (): HTMLDocsLayoutElement;
  };
  interface HTMLElementTagNameMap {
    'docs-layout': HTMLDocsLayoutElement;
  }
  interface ElementTagNameMap {
    'docs-layout': HTMLDocsLayoutElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'docs-layout': JSXElements.DocsLayoutAttributes;
    }
  }
  namespace JSXElements {
    export interface DocsLayoutAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface DocsMenu {
      'section': string;
    }
  }

  interface HTMLDocsMenuElement extends StencilComponents.DocsMenu, HTMLStencilElement {}

  var HTMLDocsMenuElement: {
    prototype: HTMLDocsMenuElement;
    new (): HTMLDocsMenuElement;
  };
  interface HTMLElementTagNameMap {
    'docs-menu': HTMLDocsMenuElement;
  }
  interface ElementTagNameMap {
    'docs-menu': HTMLDocsMenuElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'docs-menu': JSXElements.DocsMenuAttributes;
    }
  }
  namespace JSXElements {
    export interface DocsMenuAttributes extends HTMLAttributes {
      'section'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface DocsPreview {
      'url': string;
    }
  }

  interface HTMLDocsPreviewElement extends StencilComponents.DocsPreview, HTMLStencilElement {}

  var HTMLDocsPreviewElement: {
    prototype: HTMLDocsPreviewElement;
    new (): HTMLDocsPreviewElement;
  };
  interface HTMLElementTagNameMap {
    'docs-preview': HTMLDocsPreviewElement;
  }
  interface ElementTagNameMap {
    'docs-preview': HTMLDocsPreviewElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'docs-preview': JSXElements.DocsPreviewAttributes;
    }
  }
  namespace JSXElements {
    export interface DocsPreviewAttributes extends HTMLAttributes {
      'url'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface DocsRoot {

    }
  }

  interface HTMLDocsRootElement extends StencilComponents.DocsRoot, HTMLStencilElement {}

  var HTMLDocsRootElement: {
    prototype: HTMLDocsRootElement;
    new (): HTMLDocsRootElement;
  };
  interface HTMLElementTagNameMap {
    'docs-root': HTMLDocsRootElement;
  }
  interface ElementTagNameMap {
    'docs-root': HTMLDocsRootElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'docs-root': JSXElements.DocsRootAttributes;
    }
  }
  namespace JSXElements {
    export interface DocsRootAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface LoadingIndicator {

    }
  }

  interface HTMLLoadingIndicatorElement extends StencilComponents.LoadingIndicator, HTMLStencilElement {}

  var HTMLLoadingIndicatorElement: {
    prototype: HTMLLoadingIndicatorElement;
    new (): HTMLLoadingIndicatorElement;
  };
  interface HTMLElementTagNameMap {
    'loading-indicator': HTMLLoadingIndicatorElement;
  }
  interface ElementTagNameMap {
    'loading-indicator': HTMLLoadingIndicatorElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'loading-indicator': JSXElements.LoadingIndicatorAttributes;
    }
  }
  namespace JSXElements {
    export interface LoadingIndicatorAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface TabGroup {
      'tabs': string;
    }
  }

  interface HTMLTabGroupElement extends StencilComponents.TabGroup, HTMLStencilElement {}

  var HTMLTabGroupElement: {
    prototype: HTMLTabGroupElement;
    new (): HTMLTabGroupElement;
  };
  interface HTMLElementTagNameMap {
    'tab-group': HTMLTabGroupElement;
  }
  interface ElementTagNameMap {
    'tab-group': HTMLTabGroupElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'tab-group': JSXElements.TabGroupAttributes;
    }
  }
  namespace JSXElements {
    export interface TabGroupAttributes extends HTMLAttributes {
      'tabs'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
