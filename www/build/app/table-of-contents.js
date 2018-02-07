/*! Built with http://stenciljs.com */
const { h, Context } = window.App;

class TableOfContents {
    componentWillLoad() {
        const selector = 'main h1, main h2, main h3';
        this.headings = this.el.parentElement.querySelectorAll(selector);
        let anchor = document.createElement('a');
        anchor.classList.add('linked');
        Array.from(this.headings).forEach(heading => {
            anchor.setAttribute('href', `#${heading['id']}`);
            anchor.innerText = heading['textContent'];
            heading['innerHTML'] = anchor.outerHTML;
            console.log(heading);
        });
    }
    render() {
        return [
            h("strong", null, "Contents"),
            h("ul", null, Array.from(this.headings).map(element => h("li", null,
                h("a", { href: `#${element['id']}` }, element.textContent))))
        ];
    }
    static get is() { return "table-of-contents"; }
    static get properties() { return { "el": { "elementRef": true }, "headings": { "state": true } }; }
    static get style() { return "main h1 a.linked,\nmain h2 a.linked,\nmain h3 a.linked {\n  color: inherit;\n  position: relative;\n}\n\nmain h1 a.linked::before,\nmain h2 a.linked::before,\nmain h3 a.linked::before {\n  color: #9ec1ff;\n  content: '#';\n  position: absolute;\n  left: -20px;\n  transition: .2s color ease;\n}\n\nmain h1 a.linked:hover,\nmain h2 a.linked:hover,\nmain h3 a.linked:hover {\n  color: #333;\n}\n\nmain h1 a.linked:hover::before,\nmain h2 a.linked:hover::before,\nmain h3 a.linked:hover::before {\n  color: #3880ff;\n}"; }
}

export { TableOfContents };
