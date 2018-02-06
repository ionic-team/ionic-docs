/*! Built with http://stenciljs.com */
const { h, Context } = window.App;

class TestDemoThree {
    render() {
        return [
            h("span", null, "Demo 3 Test Page", h("br", null)),
            h("stencil-route", { url: "/demo3/page1", exact: true, routeRender: (props) => {
                    return [
                        h("a", { href: "#", onClick: (e) => {
                                e.preventDefault();
                                this.history.push("/demo3/page2", { "blue": "blue" });
                            } }, "History push to /demo3/page2"),
                        h("pre", null, h("b", null, "props.pages"), ":", h("br", null), JSON.stringify(this.pages, null, 2)),
                        h("pre", null, h("b", null, "props.match"), ":", h("br", null), JSON.stringify(this.match, null, 2)),
                        h("pre", null, h("b", null, "props.history.location"), ":", h("br", null), JSON.stringify(this.history.location, null, 2))
                    ];
                } }),
            h("stencil-route", { url: "/demo3/page2", exact: true, routeRender: (props) => {
                    return [
                        h("a", { href: "#", onClick: (e) => {
                                e.preventDefault();
                                this.history.push("/demo3/page1", { "red": "red" });
                            } }, "History push to /demo3/page1"),
                        h("pre", null, h("b", null, "props.pages"), ":", h("br", null), JSON.stringify(this.pages, null, 2)),
                        h("pre", null, h("b", null, "props.match"), ":", h("br", null), JSON.stringify(this.match, null, 2)),
                        h("pre", null, h("b", null, "props.history.location"), ":", h("br", null), JSON.stringify(this.history.location, null, 2))
                    ];
                } })
        ];
    }
    static get is() { return "test-demo-three"; }
    static get properties() { return { "history": { "type": "Any" }, "match": { "type": "Any" }, "pages": { "type": "Any" } }; }
}

export { TestDemoThree };
