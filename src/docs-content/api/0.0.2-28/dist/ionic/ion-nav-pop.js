/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const { h, Context } = window.Ionic;

class NavPop {
    pop() {
        const nav = this.element.closest('ion-nav');
        if (nav) {
            return nav.pop();
        }
        return Promise.resolve(null);
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-nav-pop"; }
    static get properties() { return { "element": { "elementRef": true } }; }
}

export { NavPop as IonNavPop };
