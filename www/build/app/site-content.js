/*! Built with http://stenciljs.com */
const { h, Context } = window.App;

class SiteContent {
    render() {
        return (h("div", { class: "content" },
            h("slot", null)));
    }
    static get is() { return "site-content"; }
    static get style() { return "site-content {\n  padding: 23px 32px 20px;\n  max-height: 100%;\n  overflow: scroll;\n}\n\nsite-content {\n  grid-area: site-content;\n}"; }
}

export { SiteContent };
