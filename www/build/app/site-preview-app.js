/*! Built with http://stenciljs.com */
const { h, Context } = window.App;

class SitePreviewApp {
    render() {
        return [
            h("h1", null, "preview app")
        ];
    }
    static get is() { return "site-preview-app"; }
    static get style() { return "site-preview-app {\n  padding: 23px 32px 20px;\n  max-height: 100%;\n  overflow: scroll;\n}\n\nsite-preview-app {\n  flex: 1 0 200px;\n  justify-self: end;\n}"; }
}

export { SitePreviewApp };
