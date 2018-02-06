/*! Built with http://stenciljs.com */
const { h, Context } = window.App;

class TestDemoFour {
    handleClick(e, linkLocation) {
        e.preventDefault();
        this.history.push(linkLocation, { "blue": "blue" });
    }
    render() {
        const linkLocation = "/demo3/page1";
        return (h("div", null, h("a", { href: linkLocation, onClick: (e) => this.handleClick(e, linkLocation) }, "History push to ", linkLocation), h("pre", null, h("b", null, "this.pages"), ":", h("br", null), JSON.stringify(this.pages, null, 2)), h("pre", null, h("b", null, "this.match"), ":", h("br", null), JSON.stringify(this.match, null, 2)), h("pre", null, h("b", null, "this.history.location"), ":", h("br", null), JSON.stringify(this.history.location, null, 2))));
    }
    static get is() { return "test-demo-four"; }
    static get properties() { return { "history": { "type": "Any" }, "match": { "type": "Any" }, "pages": { "type": "Any" } }; }
}

export { TestDemoFour };
