/*! Built with http://stenciljs.com */
const { h, Context } = window.App;

class DropdownFramework {
    constructor() {
        this.active = false;
        this.toggle = this.toggle.bind(this);
        this.clear = this.clear.bind(this);
    }
    toggle() {
        this.active = !this.active;
    }
    clear() {
        this.active = false;
    }
    render() {
        const dropdownClass = this.active ? 'active' : '';
        return [
            h("a", { class: "current", onClick: this.toggle }, "Ecosystem"),
            h("ul", { class: dropdownClass, onMouseLeave: this.clear },
                h("li", { class: "forum" },
                    h("a", { href: "https://forum.ionicframework.com/", target: "_blank" }, "Forum")),
                h("li", { class: "chat" },
                    h("a", { href: "https://ionicworldwide.herokuapp.com/", target: "_blank" }, "Chat")),
                h("li", { class: "blog" },
                    h("a", { href: "https://blog.ionicframework.com/", target: "_blank" }, "Blog")),
                h("li", { class: "twitter" },
                    h("a", { href: "https://twitter.com/Ionicframework", target: "_blank" }, "Twitter")),
                h("li", { class: "stack-overflow" },
                    h("a", { href: "https://stackoverflow.com/questions/tagged/ionic-framework", target: "_blank" }, "Stack")),
                h("li", { class: "swag" },
                    h("a", { href: "https://shop.ionicframework.com/", target: "_blank" }, "Swag")))
        ];
    }
    static get is() { return "dropdown-ecosystem"; }
    static get properties() { return { "active": { "state": true } }; }
    static get style() { return "dropdown-ecosystem .current {\n  cursor: pointer;\n  font-size: 13px;\n  line-height: 1em;\n  font-weight: 600;\n  margin-right: 28px;\n  color: #b1d9ff;\n  letter-spacing: .01em;\n  display: inline-block;\n  vertical-align: 0;\n  transition: .2s color ease;\n}\n\ndropdown-ecosystem .current::after {\n  content: '';\n  margin-left: 8px;\n  display: inline-block;\n  vertical-align: middle;\n  border-left: 2px solid transparent;\n  border-right: 2px solid transparent;\n  border-top: 3px solid #b1d9ff;\n  transition: .2s border-top-color ease;\n}\n\ndropdown-ecosystem .current:hover {\n  color: white;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n\ndropdown-ecosystem .current:hover::after {\n  border-top-color: white;\n}\n\ndropdown-ecosystem ul {\n  background: white;\n  border-radius: 8px;\n  position: absolute;\n  list-style: none;\n  min-width: 197px;\n  display: block;\n  padding: 11px 0;\n  z-index: 1;\n  top: 24px;\n  right: 26px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);\n  pointer-events: none;\n  opacity: 0;\n  transform: translateY(-5px);\n  transition: .4s opacity ease, .4s transform;\n}\n\ndropdown-ecosystem ul::before {\n  background: url(\"/assets/img/ico-nav-arrow.png\") no-repeat 0 0;\n  background-size: 15px;\n  width: 15px;\n  height: 8px;\n  position: absolute;\n  top: -8px;\n  right: 91px;\n  content: '';\n}\n\ndropdown-ecosystem ul::after {\n  content: '';\n  height: 10px;\n  left: 0;\n  right: 0;\n  top: -10px;\n  position: absolute;\n}\n\ndropdown-ecosystem ul.active {\n  transform: translateY(0);\n  opacity: 1;\n  pointer-events: all;\n  transition: .2s opacity ease, .4s transform;\n}\n\ndropdown-ecosystem li {\n  display: block;\n}\n\ndropdown-ecosystem li a {\n  padding: 4px 12px 4px 57px;\n  color: #808d9f;\n  outline: none;\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  position: relative;\n}\n\ndropdown-ecosystem li a::before, dropdown-ecosystem li a::after {\n  background: url(\"/assets/img/dropdown-ecosystem-icons.png\") no-repeat 0 0;\n  background-size: 16px;\n  height: 16px;\n  width: 16px;\n  content: '';\n  position: absolute;\n  top: 10px;\n  left: 24px;\n  transition: .2s opacity;\n}\n\ndropdown-ecosystem li a::after {\n  opacity: 0;\n}\n\ndropdown-ecosystem li.forum a::after {\n  background-position: 0 -16px;\n}\n\ndropdown-ecosystem li.chat a::before {\n  background-position: 0 -32px;\n}\n\ndropdown-ecosystem li.chat a::after {\n  background-position: 0 -48px;\n}\n\ndropdown-ecosystem li.blog a::before {\n  background-position: 0 -64px;\n}\n\ndropdown-ecosystem li.blog a::after {\n  background-position: 0 -80px;\n}\n\ndropdown-ecosystem li.twitter a::before {\n  background-position: 0 -96px;\n}\n\ndropdown-ecosystem li.twitter a::after {\n  background-position: 0 -112px;\n}\n\ndropdown-ecosystem li.stack-overflow a::before {\n  background-position: 0 -128px;\n}\n\ndropdown-ecosystem li.stack-overflow a::after {\n  background-position: 0 -144px;\n}\n\ndropdown-ecosystem li.swag a::before {\n  background-position: 0 -160px;\n}\n\ndropdown-ecosystem li.swag a::after {\n  background-position: 0 -176px;\n}\n\ndropdown-ecosystem li:hover a::after {\n  opacity: 1;\n}"; }
}

export { DropdownFramework as DropdownEcosystem };
