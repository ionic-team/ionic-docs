import { Component, Element, Listen, State} from '@stencil/core';

@Component({
  tag: 'table-of-contents',
  styleUrl: 'table-of-contents.scss'
})
export class TableOfContents {

  @State() headings: NodeList;

  @Element() el: Element;

  constructor() {
    this.updateTOC = this.updateTOC.bind(this);
  }

  @Listen('window:docLoaded')
  onDocLoaded() {
    setTimeout(this.updateTOC, 40);
  }

  componentWillLoad() {
    this.updateTOC();
  }

  generateID(el) {
    let text = 'anchor-' + el['innerText'] || el.textContent;
    text = text.toLowerCase()
               .replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, '$1 $2')
               .replace(/[^0-9a-zA-Z\xC0-\xFF \-]/g, '')
               .replace(/ +/g, '-');
    return text;
  }

  updateTOC () {
    const selector = 'main h1, main h2, main h3';
    this.headings = this.el.parentElement.querySelectorAll(selector);

    const anchor = document.createElement('a');
    anchor.classList.add('linked');

    Array.from(this.headings).forEach(heading => {
      anchor.setAttribute('id', this.generateID(heading));
      anchor.setAttribute('href', `#${this.generateID(heading)}`);
      anchor.innerHTML = heading['innerHTML'];

      heading['innerHTML'] = anchor.outerHTML;
    });
  }

  render() {
    return [
      <strong>Contents</strong>,
      <ul>
        {Array.from(this.headings).map(element => {
          // don't show h3 tags in the TOC
          if ( element['tagName'] === 'H3') {
            return null;
          }

          return (
            <li>
              <a href={`#${this.generateID(element)}`}>
                {element['innerText'] || element.textContent}
              </a>
            </li>
          );
        })}
      </ul>
    ];
  }
}
