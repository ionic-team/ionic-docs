/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const { h, Context } = window.Ionic;

class Avatar {
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-avatar"; }
    static get host() { return { "theme": "avatar" }; }
    static get style() { return "ion-avatar {\n  display: block;\n}\n\nion-avatar img {\n  width: 100%;\n  height: 100%;\n}\n\n.avatar-md {\n  border-radius: 50%;\n  width: 64px;\n  height: 64px;\n}\n\n.avatar-md ion-img,\n.avatar-md img {\n  border-radius: 50%;\n  overflow: hidden;\n}"; }
    static get styleMode() { return "md"; }
}

class Badge {
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-badge"; }
    static get host() { return { "theme": "badge" }; }
    static get properties() { return { "color": { "type": String, "attr": "color" }, "mode": { "type": "Any", "attr": "mode" } }; }
    static get style() { return "ion-badge {\n  padding: 3px 8px;\n  text-align: center;\n  display: inline-block;\n  min-width: 10px;\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 1;\n  white-space: nowrap;\n  vertical-align: baseline;\n  font-smoothing: antialiased;\n  -webkit-font-smoothing: antialiased;\n  contain: content;\n}\n\nion-badge:empty {\n  display: none;\n}\n\n.badge-md {\n  border-radius: 4px;\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n  color: var(--ion-color-ios-primary-contrast, var(--ion-color-primary-contrast, #fff));\n  background-color: var(--ion-color-ios-primary, var(--ion-color-primary, #488aff));\n}\n\n.badge-md-primary {\n  color: var(--ion-color-md-primary-contrast, var(--ion-color-primary-contrast, #fff));\n  background-color: var(--ion-color-md-primary, var(--ion-color-primary, #488aff));\n}\n\n.badge-md-secondary {\n  color: var(--ion-color-md-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n  background-color: var(--ion-color-md-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.badge-md-tertiary {\n  color: var(--ion-color-md-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n  background-color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.badge-md-success {\n  color: var(--ion-color-md-success-contrast, var(--ion-color-success-contrast, #fff));\n  background-color: var(--ion-color-md-success, var(--ion-color-success, #10dc60));\n}\n\n.badge-md-warning {\n  color: var(--ion-color-md-warning-contrast, var(--ion-color-warning-contrast, #000));\n  background-color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00));\n}\n\n.badge-md-danger {\n  color: var(--ion-color-md-danger-contrast, var(--ion-color-danger-contrast, #fff));\n  background-color: var(--ion-color-md-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.badge-md-light {\n  color: var(--ion-color-md-light-contrast, var(--ion-color-light-contrast, #000));\n  background-color: var(--ion-color-md-light, var(--ion-color-light, #f4f4f4));\n}\n\n.badge-md-medium {\n  color: var(--ion-color-md-medium-contrast, var(--ion-color-medium-contrast, #000));\n  background-color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2));\n}\n\n.badge-md-dark {\n  color: var(--ion-color-md-dark-contrast, var(--ion-color-dark-contrast, #fff));\n  background-color: var(--ion-color-md-dark, var(--ion-color-dark, #222));\n}"; }
    static get styleMode() { return "md"; }
}

class Thumbnail {
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-thumbnail"; }
    static get host() { return { "theme": "thumbnail" }; }
    static get style() { return "ion-thumbnail {\n  display: block;\n}\n\nion-thumbnail img {\n  width: 100%;\n  height: 100%;\n}\n\n.thumbnail-md {\n  border-radius: 0;\n  width: 48px;\n  height: 48px;\n}\n\n.thumbnail-md ion-img,\n.thumbnail-md img {\n  border-radius: 0;\n  overflow: hidden;\n}"; }
    static get styleMode() { return "md"; }
}

export { Avatar as IonAvatar, Badge as IonBadge, Thumbnail as IonThumbnail };
