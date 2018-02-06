/*! Built with http://stenciljs.com */
const { h, Context } = window.App;

class MenuExpander {
    constructor() {
        this.isExpanded = false;
    }
    componentWillLoad() {
        const ul = this.el.nextElementSibling;
        this.target = ul;
    }
    handleOnClick() {
        if (!this.target) {
            return;
        }
        setTimeout(() => {
            this.target.classList.toggle('expanded');
        });
    }
    render() {
        return (h("a", { onClick: this.handleOnClick.bind(this) },
            h("slot", null)));
    }
    static get is() { return "menu-expander"; }
    static get properties() { return { "el": { "elementRef": true }, "isExpanded": { "state": true }, "service": { "type": String, "attr": "service" } }; }
    static get style() { return "menu-expander + ul stencil-route-link {\n  display: block;\n  transition: height cubic-bezier(0.36, 0.66, 0.04, 1) 0.2s, opacity cubic-bezier(0.36, 0.66, 0.04, 1) 0.2s;\n}\n\nmenu-expander + ul:not(.expanded) {\n  pointer-events: none;\n}\n\nmenu-expander + ul:not(.expanded) stencil-route-link {\n  opacity: 0;\n  height: 0;\n}"; }
}

export { MenuExpander };
