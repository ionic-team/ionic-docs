/*! Built with http://stenciljs.com */
const { h, Context } = window.App;

class SiteSearch {
    render() {
        return [
            h("form", null,
                h("input", { type: "search", name: "q", placeholder: "Search docs", autocomplete: "off" }),
                h("i", { class: "search-icon" }))
        ];
    }
    static get is() { return "site-search"; }
    static get style() { return "site-search {\n  margin-right: 34px;\n}\n\nsite-search form {\n  position: relative;\n}\n\nsite-search input {\n  border: none;\n  outline: none;\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  min-width: 240px;\n  border-radius: 16px;\n  letter-spacing: .02em;\n  color: rgba(255, 255, 255, 0.9);\n  padding: 9px 10px 8px 36px;\n  background: rgba(255, 255, 255, 0.1);\n  transition: .2s background-color ease;\n}\n\nsite-search input::placeholder {\n  color: rgba(255, 255, 255, 0.4);\n  font-family: \"Eina\", \"Helvetica Neue\", Helvetica, sans-serif;\n  transition: .2s color ease;\n}\n\nsite-search input:hover, site-search input:active, site-search input:focus {\n  background: rgba(255, 255, 255, 0.16);\n}\n\nsite-search input:hover::placeholder, site-search input:active::placeholder, site-search input:focus::placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n\nsite-search input:hover::-webkit-search-cancel-button, site-search input:active::-webkit-search-cancel-button, site-search input:focus::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n}\n\nsite-search input:focus::placeholder {\n  color: rgba(255, 255, 255, 0);\n}\n\nsite-search input:focus + .search-icon::after {\n  opacity: 1;\n}\n\nsite-search .search-icon {\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  left: 13px;\n  top: 9px;\n}\n\nsite-search .search-icon::before, site-search .search-icon::after {\n  background: url(\"/assets/img/search-icon.png\") no-repeat 0 0;\n  background-size: 14px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  content: '';\n}\n\nsite-search .search-icon::after {\n  opacity: 0;\n  background-position: 0 -14px;\n  transition: .2s opacity ease;\n}"; }
}

export { SiteSearch };
