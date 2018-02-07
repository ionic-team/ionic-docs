import { Component, Element, State} from '@stencil/core';

@Component({
  tag: 'table-of-contents',
  styleUrl: 'table-of-contents.scss'
})
export class TableOfContents {

  @State() headings: NodeList;

  @Element() el: Element;

  componentWillLoad() {
    const selector = 'main h1, main h2, main h3';
    this.headings = this.el.parentElement.querySelectorAll(selector);

    let anchor = document.createElement('a');
    anchor.classList.add('linked')

    Array.from(this.headings).forEach(heading => {
      anchor.setAttribute('href', `#${heading['id']}`)
      anchor.innerText = heading['textContent'];
      heading['innerHTML'] = anchor.outerHTML;
      console.log(heading)
    });
  }

  render() {
    return [
      <strong>Contents</strong>,
      <ul>
        {Array.from(this.headings).map(element =>
          <li>
            <a href={`#${element['id']}`}>{element.textContent}</a>
          </li>
        )}
      </ul>
    ]
  }
}
