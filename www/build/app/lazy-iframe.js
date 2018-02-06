/*! Built with http://stenciljs.com */
const { h, Context } = window.App;

class LazyIframe {
    componentDidLoad() {
        if ('IntersectionObserver' in window) {
            this.io = new IntersectionObserver((data) => {
                if (data[0].isIntersecting) {
                    this.handleIframe();
                    this.cleanup();
                }
            });
            this.io.observe(this.el.querySelector('iframe'));
        }
        else {
            this.handleIframe();
        }
    }
    componentDidUnload() {
        this.cleanup();
    }
    handleIframe() {
        this.realSrc = this.src;
    }
    cleanup() {
        // always make sure we remove the intersection
        // observer when its served its purpose so we dont
        // eat cpu cycles unnecessarily
        if (this.io) {
            this.io.disconnect();
            this.io = null;
        }
    }
    render() {
        return (h("div", null,
            h("iframe", { frameBorder: "0", title: this.title, allowFullScreen: true, width: "560", height: "315", src: this.realSrc })));
    }
    static get is() { return "lazy-iframe"; }
    static get properties() { return { "el": { "elementRef": true }, "realSrc": { "state": true }, "src": { "type": String, "attr": "src" }, "title": { "type": String, "attr": "title" } }; }
    static get style() { return "lazy-iframe iframe {\n  width: 100%;\n  height: 100%;\n}"; }
}

class WistiaEmbed {
    render() {
        return (h("div", null,
            h("script", { src: `https://fast.wistia.com/embed/medias/${this.wid}.jsonp`, async: true }),
            h("script", { src: `https://fast.wistia.com/assets/external/E-v1.js`, async: true }),
            h("div", { class: `wistia_embed wistia_async_${this.wid}`, style: { height: '400px', width: '640px' } }, "\u00A0")));
    }
    static get is() { return "wistia-embed"; }
    static get properties() { return { "wid": { "type": String, "attr": "wid" } }; }
}

export { LazyIframe, WistiaEmbed };
