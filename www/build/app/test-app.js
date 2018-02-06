/*! Built with http://stenciljs.com */
const { h, Context } = window.App;

class TestApp {
    render() {
        return (h("stencil-router", { "title-suffix": " - Stencil Router Demos" }, h("ul", null, h("li", null, h("stencil-route-link", { url: "/", exact: true }, "Exact Base Link")), h("li", null, h("stencil-route-link", { url: "/" }, "Base Link")), h("li", null, h("stencil-route-link", { url: "/demo", urlMatch: ["/demo", "/demox"], exact: true }, "Demo Link")), h("li", null, h("stencil-route-link", { url: "/demo2" }, "Demo2 Link")), h("li", null, h("stencil-route-link", { url: "/demo3" }, "Demo3 Link")), h("li", null, h("stencil-route-link", { url: "/demo3/page1" }, "Demo3 Page1 Link")), h("li", null, h("stencil-route-link", { url: "/demo3/page2" }, "Demo3 Page2 Link")), h("li", null, h("stencil-route-link", { url: "/demo4" }, "Demo4 Link")), h("li", null, h("stencil-route-link", { url: "/demo6/" }, "Demo6 Link"))), h("stencil-route", { url: "/", exact: true, routeRender: (props) => {
                return h("span", null, "rendering /");
            } }), h("stencil-route", { url: ["/demo", "/demox"], exact: true, routeRender: (props) => {
                return [
                    h("stencil-route-title", { title: "DEMO" }),
                    h("span", null, "rendering /demo")
                ];
            } }), h("stencil-route", { url: "/demo2", exact: true, routeRender: (props) => {
                return [
                    h("span", null, "rendering /demo2"),
                    h("stencil-router-redirect", { url: "/demo3" })
                ];
            } }), h("stencil-route", { url: "/demo3", exact: true, routeRender: (props) => {
                return [
                    h("stencil-route-title", { title: "Demo 3" }),
                    h("span", null, "rendering /demo 3")
                ];
            } }), h("stencil-route", { url: "/demo3", componentProps: {
                pages: ["intro/index.html"]
            }, component: "test-demo-three" }), h("stencil-route", { url: "/demo4", component: "test-demo-four" }), h("stencil-route", { url: "/demo5", component: "async-content", componentProps: { location: "/" } }), h("stencil-route", { url: "/demo6", component: "test-demo-six" })));
    }
    static get is() { return "test-app"; }
}

export { TestApp };
