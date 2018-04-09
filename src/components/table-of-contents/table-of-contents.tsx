import { Component, Element, Listen, State} from '@stencil/core';

@Component({
  tag: 'table-of-contents',
  styleUrl: 'table-of-contents.scss'
})
export class TableOfContents {

  @State() headings: NodeList;

  @Element() el: Element;

  @Listen('window:docLoaded')
  onDocLoaded() {
    this.updateTOC();
  }

  componentWillLoad() {
    this.updateTOC();
  }

  updateTOC () {
    const selector = 'main h1, main h2, main h3';
    this.headings = this.el.parentElement.querySelectorAll(selector);

    const anchor = document.createElement('a');
    anchor.classList.add('linked');

    Array.from(this.headings).forEach(heading => {
      anchor.setAttribute('href', `#${heading['id']}`);
      anchor.innerHTML = heading['innerHTML'];

      heading['innerHTML'] = anchor.outerHTML;
    });
  }

  render() {
    return [
      <strong>Contents</strong>,
      <ul>
        {Array.from(this.headings).map(element =>
          <li>
            <a href={`#${element['id']}`}>
              {element['innerText'] || element.textContent}
            </a>
          </li>
        )}
      </ul>
    ];
  }
}
