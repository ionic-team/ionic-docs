/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const { h, Context } = window.Ionic;

import { createThemedClasses, getElementClassMap } from './chunk2.js';

class Fab {
    constructor() {
        this.activated = false;
        this.toggleActive = () => {
            this.activated = !this.activated;
        };
    }
    /**
     * Close an active FAB list container
     */
    close() {
        this.activated = false;
    }
    render() {
        const fab = this.el.querySelector('ion-fab-button');
        fab.toggleActive = this.toggleActive;
        fab.activated = this.activated;
        const lists = this.el.querySelectorAll('ion-fab-list');
        for (let i = 0, length = lists.length; i < length; i += 1) {
            lists[i].activated = this.activated;
        }
        return (h("slot", null));
    }
    static get is() { return "ion-fab"; }
    static get properties() { return { "activated": { "state": true }, "close": { "method": true }, "el": { "elementRef": true } }; }
    static get style() { return "ion-fab {\n  position: absolute;\n  z-index: 999;\n}\n\nion-fab[center] {\n  left: 50%;\n  margin-left: -28px;\n}\n\nion-fab[middle] {\n  margin-top: -28px;\n  top: 50%;\n}\n\nion-fab[top] {\n  top: 10px;\n}\n\nion-fab[right] {\n  right: 10px;\n  right: calc(10px + constant(safe-area-inset-right));\n  right: calc(10px + env(safe-area-inset-right));\n}\n\nion-fab[end] {\n  right: 10px;\n  right: calc(constant(safe-area-inset-right) + 10px);\n  right: calc(env(safe-area-inset-right) + 10px);\n}\n\nion-fab[bottom] {\n  bottom: 10px;\n}\n\nion-fab[left] {\n  left: 10px;\n  left: calc(10px + constant(safe-area-inset-left));\n  left: calc(10px + env(safe-area-inset-left));\n}\n\nion-fab[start] {\n  left: 10px;\n  left: calc(constant(safe-area-inset-left) + 10px);\n  left: calc(env(safe-area-inset-left) + 10px);\n}\n\nion-fab[top][edge] {\n  top: -28px;\n}\n\nion-fab[bottom][edge] {\n  bottom: -28px;\n}"; }
}

class FabButton {
    constructor() {
        /**
         * If true, the fab button will be translucent. Defaults to `false`.
         */
        this.translucent = false;
        this.activated = false;
        this.show = false;
        this.inContainer = false;
        this.inList = false;
        /**
         * If true, the user cannot interact with the fab button. Defaults to `false`.
         */
        this.disabled = false;
    }
    componentDidLoad() {
        const parentNode = this.el.parentNode;
        const parentTag = parentNode ? parentNode.nodeName : null;
        this.inList = (parentTag === 'ION-FAB-LIST');
        this.inContainer = (parentTag === 'ION-FAB');
    }
    clickedFab() {
        if (this.inContainer) {
            this.toggleActive();
        }
    }
    /**
     * Get the classes for fab buttons in lists
     */
    getFabClassMap() {
        return {
            'fab-button-in-list': this.inList,
            [`fab-button-${this.mode}-in-list`]: this.inList,
            [`fab-button-translucent-${this.mode}-in-list`]: (this.inList && this.translucent),
            'fab-button-close-active': this.activated,
            'fab-button-show': this.show,
        };
    }
    render() {
        const themedClasses = createThemedClasses(this.mode, this.color, 'fab-button');
        const translucentClasses = this.translucent ? createThemedClasses(this.mode, this.color, 'fab-button-translucent') : {};
        const hostClasses = getElementClassMap(this.el.classList);
        const TagType = this.href ? 'a' : 'button';
        const fabClasses = Object.assign({}, this.getFabClassMap(), themedClasses, translucentClasses, hostClasses);
        return (h(TagType, { class: fabClasses, disabled: this.disabled, href: this.href, onClick: this.clickedFab.bind(this) },
            h("ion-icon", { name: 'close', class: 'fab-button-close-icon' }),
            h("span", { class: 'fab-button-inner' },
                h("slot", null)),
            this.mode === 'md' && h("ion-ripple-effect", null)));
    }
    static get is() { return "ion-fab-button"; }
    static get properties() { return { "activated": { "type": Boolean, "attr": "activated" }, "color": { "type": String, "attr": "color" }, "disabled": { "type": Boolean, "attr": "disabled" }, "el": { "elementRef": true }, "href": { "type": String, "attr": "href" }, "inContainer": { "state": true }, "inList": { "state": true }, "mode": { "type": "Any", "attr": "mode" }, "show": { "type": Boolean, "attr": "show" }, "toggleActive": { "type": "Any", "attr": "toggle-active" }, "translucent": { "type": Boolean, "attr": "translucent" } }; }
    static get style() { return ".fab-button {\n  text-align: center;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  border-radius: 50%;\n  position: relative;\n  z-index: 0;\n  display: block;\n  overflow: hidden;\n  width: 56px;\n  height: 56px;\n  border: 0;\n  font-size: 14px;\n  line-height: 56px;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-transition: background-color, opacity 100ms linear;\n  transition: background-color, opacity 100ms linear;\n  background-clip: padding-box;\n  -webkit-font-kerning: none;\n  font-kerning: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  contain: strict;\n}\n\n.fab-button:active, .fab-button:focus {\n  outline: none;\n}\n\n.fab-button ion-icon {\n  font-size: 24px;\n  line-height: 1;\n}\n\n.fab-button-inner {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-flow: row nowrap;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  -webkit-transition: all ease-in-out 300ms;\n  transition: all ease-in-out 300ms;\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform;\n}\n\nion-fab-button[mini] .fab-button {\n  margin: 8px;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n}\n\n.fab-button-close-icon {\n  left: 0;\n  right: 0;\n  top: 0;\n  position: absolute;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  opacity: 0;\n  -webkit-transform: scale(0.4) rotateZ(-45deg);\n  transform: scale(0.4) rotateZ(-45deg);\n  -webkit-transition: all ease-in-out 300ms;\n  transition: all ease-in-out 300ms;\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform;\n}\n\n.fab-button-close-icon .icon-inner {\n  margin: auto;\n}\n\n.fab-button-close-active .fab-button-close-icon {\n  opacity: 1;\n  -webkit-transform: scale(1) rotateZ(0deg);\n  transform: scale(1) rotateZ(0deg);\n}\n\n.fab-button-close-active .fab-button-inner {\n  opacity: 0;\n  -webkit-transform: scale(0.4) rotateZ(45deg);\n  transform: scale(0.4) rotateZ(45deg);\n}\n\n.fab-button-ios {\n  color: var(--ion-color-ios-primary-contrast, var(--ion-color-primary-contrast, #fff));\n  background-color: var(--ion-color-ios-primary, var(--ion-color-primary, #488aff));\n}\n\n.fab-button-ios.activated {\n  background-color: var(--ion-color-ios-primary-tint, var(--ion-color-primary-tint, #5a96ff));\n}\n\n.fab-button-ios .icon {\n  fill: var(--ion-color-ios-primary-contrast, var(--ion-color-primary-contrast, #fff));\n}\n\n.fab-button-ios-in-list {\n  color: var(--ion-color-ios-light-contrast, var(--ion-color-light-contrast, #000));\n  background-color: var(--ion-color-ios-light, var(--ion-color-light, #f4f4f4));\n  -webkit-transition: opacity 200ms ease 10ms, -webkit-transform 200ms ease 10ms;\n  transition: opacity 200ms ease 10ms, -webkit-transform 200ms ease 10ms;\n  transition: transform 200ms ease 10ms, opacity 200ms ease 10ms;\n  transition: transform 200ms ease 10ms, opacity 200ms ease 10ms, -webkit-transform 200ms ease 10ms;\n}\n\n.fab-button-ios-in-list.activated {\n  background-color: var(--ion-color-ios-light-tint, var(--ion-color-light-tint, whitesmoke));\n}\n\n.fab-button-ios-in-list .icon {\n  fill: var(--ion-color-ios-light-contrast, var(--ion-color-light-contrast, #000));\n}\n\n.fab-translucent-ios {\n  background-color: rgba(var(--ion-color-ios-primary-rgb, var(--ion-color-primary-rgb, 72, 138, 255)), var(--ion-alpha-ios-highest, var(--ion-alpha-highest, 0.9)));\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px);\n}\n\n.fab-translucent-ios-in-list {\n  background-color: rgba(255, 255, 255, var(--ion-alpha-ios-high, var(--ion-alpha-high, 0.75)));\n}\n\n.fab-button-ios-primary {\n  color: var(--ion-color-ios-primary-contrast, var(--ion-color-primary-contrast, #fff));\n  background-color: var(--ion-color-ios-primary, var(--ion-color-primary, #488aff));\n}\n\n.fab-button-ios-primary .icon {\n  fill: var(--ion-color-ios-primary-contrast, var(--ion-color-primary-contrast, #fff));\n}\n\n.fab-button-ios-primary.activated {\n  background-color: var(--ion-color-ios-primary-tint, var(--ion-color-primary-tint, #5a96ff));\n}\n\n.fab-translucent-ios-primary {\n  background-color: rgba(var(--ion-color-primary-rgb, 72, 138, 255), var(--ion-alpha-ios-highest, var(--ion-alpha-highest, 0.9)));\n  opacity: .8;\n}\n\n.fab-translucent-ios-primary.activated {\n  opacity: 1;\n}\n\n.fab-button-ios-secondary {\n  color: var(--ion-color-ios-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n  background-color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.fab-button-ios-secondary .icon {\n  fill: var(--ion-color-ios-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n}\n\n.fab-button-ios-secondary.activated {\n  background-color: var(--ion-color-ios-secondary-tint, var(--ion-color-secondary-tint, #47df74));\n}\n\n.fab-translucent-ios-secondary {\n  background-color: rgba(var(--ion-color-secondary-rgb, 50, 219, 100), var(--ion-alpha-ios-highest, var(--ion-alpha-highest, 0.9)));\n  opacity: .8;\n}\n\n.fab-translucent-ios-secondary.activated {\n  opacity: 1;\n}\n\n.fab-button-ios-tertiary {\n  color: var(--ion-color-ios-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n  background-color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.fab-button-ios-tertiary .icon {\n  fill: var(--ion-color-ios-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n}\n\n.fab-button-ios-tertiary.activated {\n  background-color: var(--ion-color-ios-tertiary-tint, var(--ion-color-tertiary-tint, #f5b255));\n}\n\n.fab-translucent-ios-tertiary {\n  background-color: rgba(var(--ion-color-tertiary-rgb, 244, 169, 66), var(--ion-alpha-ios-highest, var(--ion-alpha-highest, 0.9)));\n  opacity: .8;\n}\n\n.fab-translucent-ios-tertiary.activated {\n  opacity: 1;\n}\n\n.fab-button-ios-success {\n  color: var(--ion-color-ios-success-contrast, var(--ion-color-success-contrast, #fff));\n  background-color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60));\n}\n\n.fab-button-ios-success .icon {\n  fill: var(--ion-color-ios-success-contrast, var(--ion-color-success-contrast, #fff));\n}\n\n.fab-button-ios-success.activated {\n  background-color: var(--ion-color-ios-success-tint, var(--ion-color-success-tint, #28e070));\n}\n\n.fab-translucent-ios-success {\n  background-color: rgba(var(--ion-color-success-rgb, 16, 220, 96), var(--ion-alpha-ios-highest, var(--ion-alpha-highest, 0.9)));\n  opacity: .8;\n}\n\n.fab-translucent-ios-success.activated {\n  opacity: 1;\n}\n\n.fab-button-ios-warning {\n  color: var(--ion-color-ios-warning-contrast, var(--ion-color-warning-contrast, #000));\n  background-color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00));\n}\n\n.fab-button-ios-warning .icon {\n  fill: var(--ion-color-ios-warning-contrast, var(--ion-color-warning-contrast, #000));\n}\n\n.fab-button-ios-warning.activated {\n  background-color: var(--ion-color-ios-warning-tint, var(--ion-color-warning-tint, #ffd31a));\n}\n\n.fab-translucent-ios-warning {\n  background-color: rgba(var(--ion-color-warning-rgb, 255, 206, 0), var(--ion-alpha-ios-highest, var(--ion-alpha-highest, 0.9)));\n  opacity: .8;\n}\n\n.fab-translucent-ios-warning.activated {\n  opacity: 1;\n}\n\n.fab-button-ios-danger {\n  color: var(--ion-color-ios-danger-contrast, var(--ion-color-danger-contrast, #fff));\n  background-color: var(--ion-color-ios-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.fab-button-ios-danger .icon {\n  fill: var(--ion-color-ios-danger-contrast, var(--ion-color-danger-contrast, #fff));\n}\n\n.fab-button-ios-danger.activated {\n  background-color: var(--ion-color-ios-danger-tint, var(--ion-color-danger-tint, #f65050));\n}\n\n.fab-translucent-ios-danger {\n  background-color: rgba(var(--ion-color-danger-rgb, 245, 61, 61), var(--ion-alpha-ios-highest, var(--ion-alpha-highest, 0.9)));\n  opacity: .8;\n}\n\n.fab-translucent-ios-danger.activated {\n  opacity: 1;\n}\n\n.fab-button-ios-light {\n  color: var(--ion-color-ios-light-contrast, var(--ion-color-light-contrast, #000));\n  background-color: var(--ion-color-ios-light, var(--ion-color-light, #f4f4f4));\n}\n\n.fab-button-ios-light .icon {\n  fill: var(--ion-color-ios-light-contrast, var(--ion-color-light-contrast, #000));\n}\n\n.fab-button-ios-light.activated {\n  background-color: var(--ion-color-ios-light-tint, var(--ion-color-light-tint, whitesmoke));\n}\n\n.fab-translucent-ios-light {\n  background-color: rgba(var(--ion-color-light-rgb, 244, 244, 244), var(--ion-alpha-ios-highest, var(--ion-alpha-highest, 0.9)));\n  opacity: .8;\n}\n\n.fab-translucent-ios-light.activated {\n  opacity: 1;\n}\n\n.fab-button-ios-medium {\n  color: var(--ion-color-ios-medium-contrast, var(--ion-color-medium-contrast, #000));\n  background-color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2));\n}\n\n.fab-button-ios-medium .icon {\n  fill: var(--ion-color-ios-medium-contrast, var(--ion-color-medium-contrast, #000));\n}\n\n.fab-button-ios-medium.activated {\n  background-color: var(--ion-color-ios-medium-tint, var(--ion-color-medium-tint, #a2a4ab));\n}\n\n.fab-translucent-ios-medium {\n  background-color: rgba(var(--ion-color-medium-rgb, 152, 154, 162), var(--ion-alpha-ios-highest, var(--ion-alpha-highest, 0.9)));\n  opacity: .8;\n}\n\n.fab-translucent-ios-medium.activated {\n  opacity: 1;\n}\n\n.fab-button-ios-dark {\n  color: var(--ion-color-ios-dark-contrast, var(--ion-color-dark-contrast, #fff));\n  background-color: var(--ion-color-ios-dark, var(--ion-color-dark, #222));\n}\n\n.fab-button-ios-dark .icon {\n  fill: var(--ion-color-ios-dark-contrast, var(--ion-color-dark-contrast, #fff));\n}\n\n.fab-button-ios-dark.activated {\n  background-color: var(--ion-color-ios-dark-tint, var(--ion-color-dark-tint, #383838));\n}\n\n.fab-translucent-ios-dark {\n  background-color: rgba(var(--ion-color-dark-rgb, 34, 34, 34), var(--ion-alpha-ios-highest, var(--ion-alpha-highest, 0.9)));\n  opacity: .8;\n}\n\n.fab-translucent-ios-dark.activated {\n  opacity: 1;\n}"; }
    static get styleMode() { return "ios"; }
}

class FabList {
    constructor() {
        this.activated = false;
    }
    activatedChanged(activated) {
        const fabs = this.el.querySelectorAll('ion-fab-button');
        // if showing the fabs add a timeout, else show immediately
        const timeout = activated ? 30 : 0;
        for (let i = 0; i < fabs.length; i++) {
            const fab = fabs[i];
            setTimeout(() => fab.show = activated, i * timeout);
        }
    }
    hostData() {
        return {
            class: {
                'fab-list-active': this.activated
            }
        };
    }
    render() {
        return (h("slot", null));
    }
    static get is() { return "ion-fab-list"; }
    static get properties() { return { "activated": { "type": Boolean, "attr": "activated", "watchCallbacks": ["activatedChanged"] }, "el": { "elementRef": true } }; }
    static get style() { return "ion-fab-list {\n  margin: 66px 0;\n  position: absolute;\n  top: 0;\n  display: none;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  min-width: 56px;\n  min-height: 56px;\n}\n\n.fab-list-active {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.fab-button-in-list {\n  margin: 8px 0;\n  width: 40px;\n  height: 40px;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n\n.fab-button-in-list.fab-button-show {\n  opacity: 1;\n  visibility: visible;\n  -webkit-transform: scale(1);\n  transform: scale(1);\n}\n\nion-fab-list[side=left] .fab-button-in-list,\nion-fab-list[side=right] .fab-button-in-list {\n  margin: 0 8px;\n}\n\nion-fab-list[side=top] {\n  top: auto;\n  bottom: 0;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n  -webkit-flex-direction: column-reverse;\n  -ms-flex-direction: column-reverse;\n  flex-direction: column-reverse;\n}\n\nion-fab-list[side=left] {\n  margin: 0 66px;\n  right: 0;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n  -webkit-flex-direction: row-reverse;\n  -ms-flex-direction: row-reverse;\n  flex-direction: row-reverse;\n}\n\nion-fab-list[side=right] {\n  margin: 0 66px;\n  left: 0;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n}"; }
}

export { Fab as IonFab, FabButton as IonFabButton, FabList as IonFabList };
