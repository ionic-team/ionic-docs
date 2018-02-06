/*! Built with http://stenciljs.com */
const { h, Context } = window.App;

class TestDemoSix {
    render() {
        return [
            h("span", null, "Demo 6 Test Page", h("br", null)),
            h("stencil-route", { url: "/demo6/", exact: true, group: "main", routeRender: (props) => {
                    return [
                        h("h1", null, "One"),
                        h("stencil-route-link", { url: "/demo6/asdf" }, "Next")
                    ];
                } }),
            h("stencil-route", { url: "/demo6/:any*", group: "main", routeRender: (props) => {
                    return [
                        h("h1", null, "Two: ", props.match),
                        h("stencil-route-link", { url: "/demo6/" }, "Back")
                    ];
                } })
        ];
    }
    static get is() { return "test-demo-six"; }
    static get properties() { return { "history": { "type": "Any" }, "match": { "type": "Any" }, "pages": { "type": "Any" } }; }
}

export { TestDemoSix };
