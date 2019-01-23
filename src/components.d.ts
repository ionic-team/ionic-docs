/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';
import {
  Link,
  MenuItems,
  Page,
  ReferenceKeys,
} from './definitions';


export namespace Components {

  interface DocsCard {
    'header': string;
    'href': string;
  }
  interface DocsCardAttributes extends StencilHTMLAttributes {
    'header'?: string;
    'href'?: string;
  }

  interface DocsCards {}
  interface DocsCardsAttributes extends StencilHTMLAttributes {}

  interface DocsCode {
    'language': string;
  }
  interface DocsCodeAttributes extends StencilHTMLAttributes {
    'language'?: string;
  }

  interface CommandCursor {
    'blink': boolean;
  }
  interface CommandCursorAttributes extends StencilHTMLAttributes {
    'blink'?: boolean;
  }

  interface CommandLine {
    'nobuttons': boolean;
  }
  interface CommandLineAttributes extends StencilHTMLAttributes {
    'nobuttons'?: boolean;
  }

  interface CommandOutput {}
  interface CommandOutputAttributes extends StencilHTMLAttributes {}

  interface CommandPrompt {}
  interface CommandPromptAttributes extends StencilHTMLAttributes {}

  interface DocsDropdown {
    'close': () => void;
    'label': string;
    'open': () => void;
    'toggle': () => void;
  }
  interface DocsDropdownAttributes extends StencilHTMLAttributes {
    'label'?: string;
  }

  interface DocsHeader {}
  interface DocsHeaderAttributes extends StencilHTMLAttributes {}

  interface DocsMenu {}
  interface DocsMenuAttributes extends StencilHTMLAttributes {}

  interface DocsNav {
    'items': MenuItems;
  }
  interface DocsNavAttributes extends StencilHTMLAttributes {
    'items'?: MenuItems;
  }

  interface DocsPage {
    'path': string;
  }
  interface DocsPageAttributes extends StencilHTMLAttributes {
    'path'?: string;
  }

  interface DocsPagination {
    'page': Page;
  }
  interface DocsPaginationAttributes extends StencilHTMLAttributes {
    'page'?: Page;
  }

  interface DocsReference {
    'data': any[];
    'keys': ReferenceKeys;
  }
  interface DocsReferenceAttributes extends StencilHTMLAttributes {
    'data'?: any[];
    'keys'?: ReferenceKeys;
  }

  interface DocsRoot {}
  interface DocsRootAttributes extends StencilHTMLAttributes {}

  interface DocsSearch {}
  interface DocsSearchAttributes extends StencilHTMLAttributes {}

  interface DocsSectionNav {}
  interface DocsSectionNavAttributes extends StencilHTMLAttributes {}

  interface SmsForm {}
  interface SmsFormAttributes extends StencilHTMLAttributes {}

  interface DocsTableOfContents {
    'basepath': string;
    'label': string;
    'links': Link[];
  }
  interface DocsTableOfContentsAttributes extends StencilHTMLAttributes {
    'basepath'?: string;
    'label'?: string;
    'links'?: Link[];
  }

  interface DocsTabs {
    'initial': string;
    'tabs': string;
  }
  interface DocsTabsAttributes extends StencilHTMLAttributes {
    'initial'?: string;
    'tabs'?: string;
  }

  interface WistiaVideo {
    'id': string;
  }
  interface WistiaVideoAttributes extends StencilHTMLAttributes {
    'id'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'DocsCard': Components.DocsCard;
    'DocsCards': Components.DocsCards;
    'DocsCode': Components.DocsCode;
    'CommandCursor': Components.CommandCursor;
    'CommandLine': Components.CommandLine;
    'CommandOutput': Components.CommandOutput;
    'CommandPrompt': Components.CommandPrompt;
    'DocsDropdown': Components.DocsDropdown;
    'DocsHeader': Components.DocsHeader;
    'DocsMenu': Components.DocsMenu;
    'DocsNav': Components.DocsNav;
    'DocsPage': Components.DocsPage;
    'DocsPagination': Components.DocsPagination;
    'DocsReference': Components.DocsReference;
    'DocsRoot': Components.DocsRoot;
    'DocsSearch': Components.DocsSearch;
    'DocsSectionNav': Components.DocsSectionNav;
    'SmsForm': Components.SmsForm;
    'DocsTableOfContents': Components.DocsTableOfContents;
    'DocsTabs': Components.DocsTabs;
    'WistiaVideo': Components.WistiaVideo;
  }

  interface StencilIntrinsicElements {
    'docs-card': Components.DocsCardAttributes;
    'docs-cards': Components.DocsCardsAttributes;
    'docs-code': Components.DocsCodeAttributes;
    'command-cursor': Components.CommandCursorAttributes;
    'command-line': Components.CommandLineAttributes;
    'command-output': Components.CommandOutputAttributes;
    'command-prompt': Components.CommandPromptAttributes;
    'docs-dropdown': Components.DocsDropdownAttributes;
    'docs-header': Components.DocsHeaderAttributes;
    'docs-menu': Components.DocsMenuAttributes;
    'docs-nav': Components.DocsNavAttributes;
    'docs-page': Components.DocsPageAttributes;
    'docs-pagination': Components.DocsPaginationAttributes;
    'docs-reference': Components.DocsReferenceAttributes;
    'docs-root': Components.DocsRootAttributes;
    'docs-search': Components.DocsSearchAttributes;
    'docs-section-nav': Components.DocsSectionNavAttributes;
    'sms-form': Components.SmsFormAttributes;
    'docs-table-of-contents': Components.DocsTableOfContentsAttributes;
    'docs-tabs': Components.DocsTabsAttributes;
    'wistia-video': Components.WistiaVideoAttributes;
  }


  interface HTMLDocsCardElement extends Components.DocsCard, HTMLStencilElement {}
  var HTMLDocsCardElement: {
    prototype: HTMLDocsCardElement;
    new (): HTMLDocsCardElement;
  };

  interface HTMLDocsCardsElement extends Components.DocsCards, HTMLStencilElement {}
  var HTMLDocsCardsElement: {
    prototype: HTMLDocsCardsElement;
    new (): HTMLDocsCardsElement;
  };

  interface HTMLDocsCodeElement extends Components.DocsCode, HTMLStencilElement {}
  var HTMLDocsCodeElement: {
    prototype: HTMLDocsCodeElement;
    new (): HTMLDocsCodeElement;
  };

  interface HTMLCommandCursorElement extends Components.CommandCursor, HTMLStencilElement {}
  var HTMLCommandCursorElement: {
    prototype: HTMLCommandCursorElement;
    new (): HTMLCommandCursorElement;
  };

  interface HTMLCommandLineElement extends Components.CommandLine, HTMLStencilElement {}
  var HTMLCommandLineElement: {
    prototype: HTMLCommandLineElement;
    new (): HTMLCommandLineElement;
  };

  interface HTMLCommandOutputElement extends Components.CommandOutput, HTMLStencilElement {}
  var HTMLCommandOutputElement: {
    prototype: HTMLCommandOutputElement;
    new (): HTMLCommandOutputElement;
  };

  interface HTMLCommandPromptElement extends Components.CommandPrompt, HTMLStencilElement {}
  var HTMLCommandPromptElement: {
    prototype: HTMLCommandPromptElement;
    new (): HTMLCommandPromptElement;
  };

  interface HTMLDocsDropdownElement extends Components.DocsDropdown, HTMLStencilElement {}
  var HTMLDocsDropdownElement: {
    prototype: HTMLDocsDropdownElement;
    new (): HTMLDocsDropdownElement;
  };

  interface HTMLDocsHeaderElement extends Components.DocsHeader, HTMLStencilElement {}
  var HTMLDocsHeaderElement: {
    prototype: HTMLDocsHeaderElement;
    new (): HTMLDocsHeaderElement;
  };

  interface HTMLDocsMenuElement extends Components.DocsMenu, HTMLStencilElement {}
  var HTMLDocsMenuElement: {
    prototype: HTMLDocsMenuElement;
    new (): HTMLDocsMenuElement;
  };

  interface HTMLDocsNavElement extends Components.DocsNav, HTMLStencilElement {}
  var HTMLDocsNavElement: {
    prototype: HTMLDocsNavElement;
    new (): HTMLDocsNavElement;
  };

  interface HTMLDocsPageElement extends Components.DocsPage, HTMLStencilElement {}
  var HTMLDocsPageElement: {
    prototype: HTMLDocsPageElement;
    new (): HTMLDocsPageElement;
  };

  interface HTMLDocsPaginationElement extends Components.DocsPagination, HTMLStencilElement {}
  var HTMLDocsPaginationElement: {
    prototype: HTMLDocsPaginationElement;
    new (): HTMLDocsPaginationElement;
  };

  interface HTMLDocsReferenceElement extends Components.DocsReference, HTMLStencilElement {}
  var HTMLDocsReferenceElement: {
    prototype: HTMLDocsReferenceElement;
    new (): HTMLDocsReferenceElement;
  };

  interface HTMLDocsRootElement extends Components.DocsRoot, HTMLStencilElement {}
  var HTMLDocsRootElement: {
    prototype: HTMLDocsRootElement;
    new (): HTMLDocsRootElement;
  };

  interface HTMLDocsSearchElement extends Components.DocsSearch, HTMLStencilElement {}
  var HTMLDocsSearchElement: {
    prototype: HTMLDocsSearchElement;
    new (): HTMLDocsSearchElement;
  };

  interface HTMLDocsSectionNavElement extends Components.DocsSectionNav, HTMLStencilElement {}
  var HTMLDocsSectionNavElement: {
    prototype: HTMLDocsSectionNavElement;
    new (): HTMLDocsSectionNavElement;
  };

  interface HTMLSmsFormElement extends Components.SmsForm, HTMLStencilElement {}
  var HTMLSmsFormElement: {
    prototype: HTMLSmsFormElement;
    new (): HTMLSmsFormElement;
  };

  interface HTMLDocsTableOfContentsElement extends Components.DocsTableOfContents, HTMLStencilElement {}
  var HTMLDocsTableOfContentsElement: {
    prototype: HTMLDocsTableOfContentsElement;
    new (): HTMLDocsTableOfContentsElement;
  };

  interface HTMLDocsTabsElement extends Components.DocsTabs, HTMLStencilElement {}
  var HTMLDocsTabsElement: {
    prototype: HTMLDocsTabsElement;
    new (): HTMLDocsTabsElement;
  };

  interface HTMLWistiaVideoElement extends Components.WistiaVideo, HTMLStencilElement {}
  var HTMLWistiaVideoElement: {
    prototype: HTMLWistiaVideoElement;
    new (): HTMLWistiaVideoElement;
  };

  interface HTMLElementTagNameMap {
    'docs-card': HTMLDocsCardElement
    'docs-cards': HTMLDocsCardsElement
    'docs-code': HTMLDocsCodeElement
    'command-cursor': HTMLCommandCursorElement
    'command-line': HTMLCommandLineElement
    'command-output': HTMLCommandOutputElement
    'command-prompt': HTMLCommandPromptElement
    'docs-dropdown': HTMLDocsDropdownElement
    'docs-header': HTMLDocsHeaderElement
    'docs-menu': HTMLDocsMenuElement
    'docs-nav': HTMLDocsNavElement
    'docs-page': HTMLDocsPageElement
    'docs-pagination': HTMLDocsPaginationElement
    'docs-reference': HTMLDocsReferenceElement
    'docs-root': HTMLDocsRootElement
    'docs-search': HTMLDocsSearchElement
    'docs-section-nav': HTMLDocsSectionNavElement
    'sms-form': HTMLSmsFormElement
    'docs-table-of-contents': HTMLDocsTableOfContentsElement
    'docs-tabs': HTMLDocsTabsElement
    'wistia-video': HTMLWistiaVideoElement
  }

  interface ElementTagNameMap {
    'docs-card': HTMLDocsCardElement;
    'docs-cards': HTMLDocsCardsElement;
    'docs-code': HTMLDocsCodeElement;
    'command-cursor': HTMLCommandCursorElement;
    'command-line': HTMLCommandLineElement;
    'command-output': HTMLCommandOutputElement;
    'command-prompt': HTMLCommandPromptElement;
    'docs-dropdown': HTMLDocsDropdownElement;
    'docs-header': HTMLDocsHeaderElement;
    'docs-menu': HTMLDocsMenuElement;
    'docs-nav': HTMLDocsNavElement;
    'docs-page': HTMLDocsPageElement;
    'docs-pagination': HTMLDocsPaginationElement;
    'docs-reference': HTMLDocsReferenceElement;
    'docs-root': HTMLDocsRootElement;
    'docs-search': HTMLDocsSearchElement;
    'docs-section-nav': HTMLDocsSectionNavElement;
    'sms-form': HTMLSmsFormElement;
    'docs-table-of-contents': HTMLDocsTableOfContentsElement;
    'docs-tabs': HTMLDocsTabsElement;
    'wistia-video': HTMLWistiaVideoElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
