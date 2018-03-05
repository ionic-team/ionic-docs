/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const { h, Context } = window.Ionic;

class RouteLink {
    static get is() { return "ion-route-link"; }
    static get properties() { return { "router": { "type": "Any", "attr": "router" }, "url": { "type": String, "attr": "url" } }; }
}

export { RouteLink as IonRouteLink };
