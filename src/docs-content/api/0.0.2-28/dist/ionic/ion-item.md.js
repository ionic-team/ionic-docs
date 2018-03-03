/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const { h, Context } = window.Ionic;

import { createThemedClasses, getElementClassMap } from './chunk2.js';

class Item {
    constructor() {
        this.itemStyles = {};
        /**
         * If true, the user cannot interact with the item. Defaults to `false`.
         */
        this.disabled = false;
        /**
         * Whether or not this item should be tappable.
         * If true, a button tag will be rendered. Default `true`.
         */
        this.tappable = false;
    }
    itemStyle(ev) {
        ev.stopPropagation();
        let hasChildStyleChange = false;
        const tagName = ev.target.tagName;
        const updatedStyles = ev.detail;
        for (const key in updatedStyles) {
            if (('item-' + key) !== key) {
                Object.defineProperty(updatedStyles, 'item-' + key, Object.getOwnPropertyDescriptor(updatedStyles, key));
                delete updatedStyles[key];
                hasChildStyleChange = true;
            }
        }
        this.itemStyles[tagName] = updatedStyles;
        if (hasChildStyleChange) {
            this.hasStyleChange = true;
        }
    }
    componentDidLoad() {
        // Change the button size to small for each ion-button in the item
        // unless the size is explicitly set
        const buttons = this.el.querySelectorAll('ion-button');
        for (let i = 0; i < buttons.length; i++) {
            if (!buttons[i].size) {
                buttons[i].size = 'small';
            }
        }
    }
    render() {
        let childStyles = {};
        for (const key in this.itemStyles) {
            childStyles = Object.assign(childStyles, this.itemStyles[key]);
        }
        const themedClasses = Object.assign({}, childStyles, createThemedClasses(this.mode, this.color, 'item'), getElementClassMap(this.el.classList), { 'item-block': true, 'item-disabled': this.disabled });
        this.hasStyleChange = false;
        const clickable = this.href || this.onclick || this.tappable;
        let TagType = 'div';
        if (clickable) {
            TagType = this.href ? 'a' : 'button';
        }
        const attrs = (TagType === 'button')
            ? { type: 'button' }
            : {};
        return (h(TagType, Object.assign({ class: themedClasses }, attrs),
            h("slot", { name: 'start' }),
            h("div", { class: 'item-inner' },
                h("div", { class: 'input-wrapper' },
                    h("slot", null)),
                h("slot", { name: 'end' })),
            clickable && this.mode === 'md' && h("ion-ripple-effect", null)));
    }
    static get is() { return "ion-item"; }
    static get properties() { return { "color": { "type": String, "attr": "color" }, "disabled": { "type": Boolean, "attr": "disabled" }, "el": { "elementRef": true }, "hasStyleChange": { "state": true }, "href": { "type": String, "attr": "href" }, "mode": { "type": "Any", "attr": "mode" }, "onclick": { "type": "Any", "attr": "onclick" }, "tappable": { "type": Boolean, "attr": "tappable" } }; }
    static get style() { return "ion-item {\n  display: block;\n}\n\n.item-block {\n  margin: 0;\n  padding: 0;\n  text-align: initial;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 44px;\n  border: 0;\n  font-weight: normal;\n  line-height: normal;\n  text-decoration: none;\n  color: inherit;\n}\n\n.item-inner {\n  margin: 0;\n  padding: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-orient: inherit;\n  -webkit-box-direction: inherit;\n  -webkit-flex-direction: inherit;\n  -ms-flex-direction: inherit;\n  flex-direction: inherit;\n  -webkit-box-align: inherit;\n  -webkit-align-items: inherit;\n  -ms-flex-align: inherit;\n  align-items: inherit;\n  -webkit-align-self: stretch;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  min-height: inherit;\n  border: 0;\n}\n\n.input-wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-orient: inherit;\n  -webkit-box-direction: inherit;\n  -webkit-flex-direction: inherit;\n  -ms-flex-direction: inherit;\n  flex-direction: inherit;\n  -webkit-box-align: inherit;\n  -webkit-align-items: inherit;\n  -ms-flex-align: inherit;\n  align-items: inherit;\n  -webkit-align-self: stretch;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  text-overflow: ellipsis;\n}\n\n.item[no-lines],\n.item.item[no-lines] .item-inner {\n  border: 0;\n}\n\nion-item-group {\n  display: block;\n}\n\n[vertical-align-top],\nion-input.item {\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n}\n\n.item-cover {\n  left: 0;\n  top: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  cursor: pointer;\n}\n\n.item > ion-icon,\n.item-inner > ion-icon {\n  font-size: 1.6em;\n}\n\n.item .button {\n  margin: 0;\n}\n\n.item-disabled {\n  cursor: default;\n  opacity: .4;\n  pointer-events: none;\n}\n\n.item-md {\n  padding-left: 16px;\n  padding-right: 0;\n  position: relative;\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  font-weight: normal;\n  text-transform: none;\n  color: var(--ion-item-md-text-color, var(--ion-item-text-color, var(--ion-text-color, #000)));\n  background-color: var(--ion-item-md-background-color, var(--ion-item-background-color, var(--ion-background-color, #fff)));\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  -webkit-transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.item-md.activated {\n  background-color: var(--ion-item-md-background-color-active, var(--ion-item-background-color-active, #f1f1f1));\n}\n\n.item-md[no-lines] {\n  border-width: 0;\n}\n\n.item-md h1 {\n  margin: 0 0 2px;\n  font-size: 24px;\n  font-weight: normal;\n}\n\n.item-md h2 {\n  margin: 2px 0;\n  font-size: 16px;\n  font-weight: normal;\n}\n\n.item-md h3,\n.item-md h4,\n.item-md h5,\n.item-md h6 {\n  margin: 2px 0;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: normal;\n}\n\n.item-md p {\n  margin: 0 0 2px;\n  overflow: inherit;\n  font-size: 14px;\n  line-height: normal;\n  text-overflow: inherit;\n  color: var(--ion-text-md-color-step-400, var(--ion-text-color-step-400, #666666));\n}\n\n.item-md.item-block .item-inner {\n  padding-right: 8px;\n  border-bottom: 1px solid var(--ion-item-md-border-color, var(--ion-item-border-color, #dedede));\n}\n\n.item-md [slot=\"start\"],\n.item-md [slot=\"end\"] {\n  margin: 9px 8px 9px 0;\n}\n\n.item-md > ion-icon[slot=\"start\"],\n.item-md > ion-icon[slot=\"end\"] {\n  margin-left: 0;\n  margin-top: 11px;\n  margin-bottom: 10px;\n}\n\n.item-md > ion-icon[slot=\"start\"] + .item-inner,\n.item-md > ion-icon[slot=\"start\"] + .item-input {\n  margin-left: 24px;\n}\n\n.item-md ion-avatar[slot=\"start\"],\n.item-md ion-thumbnail[slot=\"start\"] {\n  margin: 8px 16px 8px 0;\n}\n\n.item-md ion-avatar[slot=\"end\"],\n.item-md ion-thumbnail[slot=\"end\"] {\n  margin: 8px;\n}\n\n.item-md.item-label-stacked [slot=\"end\"],\n.item-md.item-label-floating [slot=\"end\"] {\n  margin-top: 7px;\n  margin-bottom: 7px;\n}\n\n.item-md .button-small-md {\n  padding: 0 0.6em;\n  height: 25px;\n  font-size: 12px;\n}\n\n.item-md .button-small-md ion-icon[slot=\"icon-only\"] {\n  padding: 0;\n}\n\n.item-md ion-avatar {\n  width: 40px;\n  height: 40px;\n}\n\n.item-md ion-thumbnail {\n  width: 80px;\n  height: 80px;\n}\n\n.item-md .text-md-primary {\n  color: var(--ion-color-md-primary, var(--ion-color-primary, #488aff));\n}\n\n.item-md-primary,\n.item-divider-md-primary {\n  color: var(--ion-color-md-primary-contrast, var(--ion-color-primary-contrast, #fff));\n  background-color: var(--ion-color-md-primary, var(--ion-color-primary, #488aff));\n}\n\n.item-md-primary p,\n.item-divider-md-primary p {\n  color: var(--ion-color-md-primary-contrast, var(--ion-color-primary-contrast, #fff));\n}\n\n.item-md-primary.activated,\n.item-divider-md-primary.activated {\n  background-color: var(--ion-color-md-primary-tint, var(--ion-color-primary-tint, #5a96ff));\n}\n\n.item-md .text-md-secondary {\n  color: var(--ion-color-md-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.item-md-secondary,\n.item-divider-md-secondary {\n  color: var(--ion-color-md-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n  background-color: var(--ion-color-md-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.item-md-secondary p,\n.item-divider-md-secondary p {\n  color: var(--ion-color-md-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n}\n\n.item-md-secondary.activated,\n.item-divider-md-secondary.activated {\n  background-color: var(--ion-color-md-secondary-tint, var(--ion-color-secondary-tint, #47df74));\n}\n\n.item-md .text-md-tertiary {\n  color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.item-md-tertiary,\n.item-divider-md-tertiary {\n  color: var(--ion-color-md-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n  background-color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.item-md-tertiary p,\n.item-divider-md-tertiary p {\n  color: var(--ion-color-md-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n}\n\n.item-md-tertiary.activated,\n.item-divider-md-tertiary.activated {\n  background-color: var(--ion-color-md-tertiary-tint, var(--ion-color-tertiary-tint, #f5b255));\n}\n\n.item-md .text-md-success {\n  color: var(--ion-color-md-success, var(--ion-color-success, #10dc60));\n}\n\n.item-md-success,\n.item-divider-md-success {\n  color: var(--ion-color-md-success-contrast, var(--ion-color-success-contrast, #fff));\n  background-color: var(--ion-color-md-success, var(--ion-color-success, #10dc60));\n}\n\n.item-md-success p,\n.item-divider-md-success p {\n  color: var(--ion-color-md-success-contrast, var(--ion-color-success-contrast, #fff));\n}\n\n.item-md-success.activated,\n.item-divider-md-success.activated {\n  background-color: var(--ion-color-md-success-tint, var(--ion-color-success-tint, #28e070));\n}\n\n.item-md .text-md-warning {\n  color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00));\n}\n\n.item-md-warning,\n.item-divider-md-warning {\n  color: var(--ion-color-md-warning-contrast, var(--ion-color-warning-contrast, #000));\n  background-color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00));\n}\n\n.item-md-warning p,\n.item-divider-md-warning p {\n  color: var(--ion-color-md-warning-contrast, var(--ion-color-warning-contrast, #000));\n}\n\n.item-md-warning.activated,\n.item-divider-md-warning.activated {\n  background-color: var(--ion-color-md-warning-tint, var(--ion-color-warning-tint, #ffd31a));\n}\n\n.item-md .text-md-danger {\n  color: var(--ion-color-md-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.item-md-danger,\n.item-divider-md-danger {\n  color: var(--ion-color-md-danger-contrast, var(--ion-color-danger-contrast, #fff));\n  background-color: var(--ion-color-md-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.item-md-danger p,\n.item-divider-md-danger p {\n  color: var(--ion-color-md-danger-contrast, var(--ion-color-danger-contrast, #fff));\n}\n\n.item-md-danger.activated,\n.item-divider-md-danger.activated {\n  background-color: var(--ion-color-md-danger-tint, var(--ion-color-danger-tint, #f65050));\n}\n\n.item-md .text-md-light {\n  color: var(--ion-color-md-light, var(--ion-color-light, #f4f4f4));\n}\n\n.item-md-light,\n.item-divider-md-light {\n  color: var(--ion-color-md-light-contrast, var(--ion-color-light-contrast, #000));\n  background-color: var(--ion-color-md-light, var(--ion-color-light, #f4f4f4));\n}\n\n.item-md-light p,\n.item-divider-md-light p {\n  color: var(--ion-color-md-light-contrast, var(--ion-color-light-contrast, #000));\n}\n\n.item-md-light.activated,\n.item-divider-md-light.activated {\n  background-color: var(--ion-color-md-light-tint, var(--ion-color-light-tint, whitesmoke));\n}\n\n.item-md .text-md-medium {\n  color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2));\n}\n\n.item-md-medium,\n.item-divider-md-medium {\n  color: var(--ion-color-md-medium-contrast, var(--ion-color-medium-contrast, #000));\n  background-color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2));\n}\n\n.item-md-medium p,\n.item-divider-md-medium p {\n  color: var(--ion-color-md-medium-contrast, var(--ion-color-medium-contrast, #000));\n}\n\n.item-md-medium.activated,\n.item-divider-md-medium.activated {\n  background-color: var(--ion-color-md-medium-tint, var(--ion-color-medium-tint, #a2a4ab));\n}\n\n.item-md .text-md-dark {\n  color: var(--ion-color-md-dark, var(--ion-color-dark, #222));\n}\n\n.item-md-dark,\n.item-divider-md-dark {\n  color: var(--ion-color-md-dark-contrast, var(--ion-color-dark-contrast, #fff));\n  background-color: var(--ion-color-md-dark, var(--ion-color-dark, #222));\n}\n\n.item-md-dark p,\n.item-divider-md-dark p {\n  color: var(--ion-color-md-dark-contrast, var(--ion-color-dark-contrast, #fff));\n}\n\n.item-md-dark.activated,\n.item-divider-md-dark.activated {\n  background-color: var(--ion-color-md-dark-tint, var(--ion-color-dark-tint, #383838));\n}"; }
    static get styleMode() { return "md"; }
}

class ItemDivider {
    componentDidLoad() {
        // Change the button size to small for each ion-button in the item
        // unless the size is explicitly set
        const buttons = this.el.querySelectorAll('ion-button');
        for (let i = 0; i < buttons.length; i++) {
            if (!buttons[i].size) {
                buttons[i].size = 'small';
            }
        }
    }
    render() {
        return [
            h("slot", { name: 'start' }),
            h("div", { class: 'item-divider-inner' },
                h("div", { class: 'item-divider-wrapper' },
                    h("slot", null)),
                h("slot", { name: 'end' }))
        ];
    }
    static get is() { return "ion-item-divider"; }
    static get host() { return { "theme": "item-divider" }; }
    static get properties() { return { "color": { "type": String, "attr": "color" }, "el": { "elementRef": true }, "mode": { "type": "Any", "attr": "mode" } }; }
    static get style() { return "ion-item-divider {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  z-index: 100;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 30px;\n}\n\nion-item-divider[sticky] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n\n.item-divider-inner {\n  margin: 0;\n  padding: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-orient: inherit;\n  -webkit-box-direction: inherit;\n  -webkit-flex-direction: inherit;\n  -ms-flex-direction: inherit;\n  flex-direction: inherit;\n  -webkit-box-align: inherit;\n  -webkit-align-items: inherit;\n  -ms-flex-align: inherit;\n  align-items: inherit;\n  -webkit-align-self: stretch;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  min-height: inherit;\n  border: 0;\n}\n\n.item-divider-wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-orient: inherit;\n  -webkit-box-direction: inherit;\n  -webkit-flex-direction: inherit;\n  -ms-flex-direction: inherit;\n  flex-direction: inherit;\n  -webkit-box-align: inherit;\n  -webkit-align-items: inherit;\n  -ms-flex-align: inherit;\n  align-items: inherit;\n  -webkit-align-self: stretch;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  text-overflow: ellipsis;\n}\n\n.item-divider-md {\n  padding-left: 16px;\n  border-bottom: 1px solid var(--ion-item-md-border-color, var(--ion-item-border-color, #dedede));\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  color: var(--ion-text-md-color-step-600, var(--ion-text-color-step-600, #999999));\n  background-color: var(--ion-background-md-color, var(--ion-background-color, #fff));\n}\n\n.item-divider-md .item-divider-inner {\n  padding-right: 8px;\n}\n\n.item-divider-md [slot=\"start\"],\n.item-divider-md [slot=\"end\"] {\n  margin: 9px 8px 9px 0;\n}\n\n.item-divider-md ion-icon[slot=\"start\"],\n.item-divider-md ion-icon[slot=\"end\"] {\n  margin-left: 0;\n  margin-top: 11px;\n  margin-bottom: 10px;\n}\n\n.item-divider-md ion-icon[slot=\"start\"] + .item-inner,\n.item-divider-md ion-icon[slot=\"start\"] + .item-input {\n  margin-left: 24px;\n}\n\n.item-divider-md ion-avatar[slot=\"start\"],\n.item-divider-md ion-thumbnail[slot=\"start\"] {\n  margin: 8px 16px 8px 0;\n}\n\n.item-divider-md ion-avatar[slot=\"end\"],\n.item-divider-md ion-thumbnail[slot=\"end\"] {\n  margin: 8px;\n}\n\n.item-divider-md h1 {\n  margin: 0 0 2px;\n  font-size: 24px;\n  font-weight: normal;\n}\n\n.item-divider-md h2 {\n  margin: 2px 0;\n  font-size: 16px;\n  font-weight: normal;\n}\n\n.item-divider-md h3,\n.item-divider-md h4,\n.item-divider-md h5,\n.item-divider-md h6 {\n  margin: 2px 0;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: normal;\n}\n\n.item-divider-md p {\n  margin: 0 0 2px;\n  overflow: inherit;\n  font-size: 14px;\n  line-height: normal;\n  text-overflow: inherit;\n  color: var(--ion-text-md-color-step-400, var(--ion-text-color-step-400, #666666));\n}\n\n.item-divider-md-primary {\n  color: var(--ion-color-md-primary-contrast, var(--ion-color-primary-contrast, #fff));\n  background-color: var(--ion-color-md-primary, var(--ion-color-primary, #488aff));\n}\n\n.item-divider-md-primary p {\n  color: var(--ion-color-md-primary-contrast, var(--ion-color-primary-contrast, #fff));\n}\n\n.item-divider-md-primary.activated {\n  background-color: var(--ion-color-md-primary-tint, var(--ion-color-primary-tint, #5a96ff));\n}\n\n.item-divider-md-secondary {\n  color: var(--ion-color-md-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n  background-color: var(--ion-color-md-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.item-divider-md-secondary p {\n  color: var(--ion-color-md-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n}\n\n.item-divider-md-secondary.activated {\n  background-color: var(--ion-color-md-secondary-tint, var(--ion-color-secondary-tint, #47df74));\n}\n\n.item-divider-md-tertiary {\n  color: var(--ion-color-md-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n  background-color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.item-divider-md-tertiary p {\n  color: var(--ion-color-md-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n}\n\n.item-divider-md-tertiary.activated {\n  background-color: var(--ion-color-md-tertiary-tint, var(--ion-color-tertiary-tint, #f5b255));\n}\n\n.item-divider-md-success {\n  color: var(--ion-color-md-success-contrast, var(--ion-color-success-contrast, #fff));\n  background-color: var(--ion-color-md-success, var(--ion-color-success, #10dc60));\n}\n\n.item-divider-md-success p {\n  color: var(--ion-color-md-success-contrast, var(--ion-color-success-contrast, #fff));\n}\n\n.item-divider-md-success.activated {\n  background-color: var(--ion-color-md-success-tint, var(--ion-color-success-tint, #28e070));\n}\n\n.item-divider-md-warning {\n  color: var(--ion-color-md-warning-contrast, var(--ion-color-warning-contrast, #000));\n  background-color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00));\n}\n\n.item-divider-md-warning p {\n  color: var(--ion-color-md-warning-contrast, var(--ion-color-warning-contrast, #000));\n}\n\n.item-divider-md-warning.activated {\n  background-color: var(--ion-color-md-warning-tint, var(--ion-color-warning-tint, #ffd31a));\n}\n\n.item-divider-md-danger {\n  color: var(--ion-color-md-danger-contrast, var(--ion-color-danger-contrast, #fff));\n  background-color: var(--ion-color-md-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.item-divider-md-danger p {\n  color: var(--ion-color-md-danger-contrast, var(--ion-color-danger-contrast, #fff));\n}\n\n.item-divider-md-danger.activated {\n  background-color: var(--ion-color-md-danger-tint, var(--ion-color-danger-tint, #f65050));\n}\n\n.item-divider-md-light {\n  color: var(--ion-color-md-light-contrast, var(--ion-color-light-contrast, #000));\n  background-color: var(--ion-color-md-light, var(--ion-color-light, #f4f4f4));\n}\n\n.item-divider-md-light p {\n  color: var(--ion-color-md-light-contrast, var(--ion-color-light-contrast, #000));\n}\n\n.item-divider-md-light.activated {\n  background-color: var(--ion-color-md-light-tint, var(--ion-color-light-tint, whitesmoke));\n}\n\n.item-divider-md-medium {\n  color: var(--ion-color-md-medium-contrast, var(--ion-color-medium-contrast, #000));\n  background-color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2));\n}\n\n.item-divider-md-medium p {\n  color: var(--ion-color-md-medium-contrast, var(--ion-color-medium-contrast, #000));\n}\n\n.item-divider-md-medium.activated {\n  background-color: var(--ion-color-md-medium-tint, var(--ion-color-medium-tint, #a2a4ab));\n}\n\n.item-divider-md-dark {\n  color: var(--ion-color-md-dark-contrast, var(--ion-color-dark-contrast, #fff));\n  background-color: var(--ion-color-md-dark, var(--ion-color-dark, #222));\n}\n\n.item-divider-md-dark p {\n  color: var(--ion-color-md-dark-contrast, var(--ion-color-dark-contrast, #fff));\n}\n\n.item-divider-md-dark.activated {\n  background-color: var(--ion-color-md-dark-tint, var(--ion-color-dark-tint, #383838));\n}"; }
    static get styleMode() { return "md"; }
}

class ItemGroup {
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-item-group"; }
    static get host() { return { "theme": "item-group" }; }
    static get style() { return "ion-item-group {\n  display: block;\n}\n\n.item-group-md ion-item:first-child .item-inner {\n  border-top-width: 0;\n}\n\n.item-group-md ion-item:last-child .item-inner,\n.item-group-md .item-sliding:last-child .item .item-inner {\n  border: 0;\n}"; }
    static get styleMode() { return "md"; }
}

class Label {
    constructor() {
        /**
         * If true, the label will sit alongside an input. Defaults to `false`.
         */
        this.fixed = false;
        /**
         * If true, the label will float above an input when the value is empty or the input is focused. Defaults to `false`.
         */
        this.floating = false;
        /**
         * If true, the label will be stacked above an input. Defaults to `false`.
         */
        this.stacked = false;
    }
    getText() {
        return this.el.textContent || '';
    }
    componentDidLoad() {
        this.emitStyle();
    }
    emitStyle() {
        clearTimeout(this.styleTmr);
        const styles = {
            'label-fixed': this.fixed,
            'label-floating': this.floating,
            'label-stacked': this.stacked
        };
        this.styleTmr = setTimeout(() => {
            this.ionStyle.emit(styles);
        });
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-label"; }
    static get host() { return { "theme": "label" }; }
    static get properties() { return { "color": { "type": String, "attr": "color" }, "el": { "elementRef": true }, "fixed": { "type": Boolean, "attr": "fixed" }, "floating": { "type": Boolean, "attr": "floating" }, "getText": { "method": true }, "mode": { "type": "Any", "attr": "mode" }, "stacked": { "type": Boolean, "attr": "stacked" } }; }
    static get events() { return [{ "name": "ionStyle", "method": "ionStyle", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "ion-label {\n  margin: 0;\n  display: block;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  font-size: inherit;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.item-input ion-label {\n  -webkit-box-flex: initial;\n  -webkit-flex: initial;\n  -ms-flex: initial;\n  flex: initial;\n  max-width: 200px;\n  pointer-events: none;\n}\n\n[text-wrap] ion-label {\n  white-space: normal;\n}\n\nion-label[fixed] {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 100px;\n  -ms-flex: 0 0 100px;\n  flex: 0 0 100px;\n  width: 100px;\n  min-width: 100px;\n  max-width: 200px;\n}\n\n.item-label-stacked ion-label,\n.item-label-floating ion-label {\n  -webkit-align-self: stretch;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  width: auto;\n  max-width: 100%;\n}\n\nion-label[stacked],\nion-label[floating] {\n  margin-bottom: 0;\n}\n\n.item-label-stacked .input-wrapper,\n.item-label-floating .input-wrapper {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n\n.item-label-stacked ion-select,\n.item-label-floating ion-select {\n  -webkit-align-self: stretch;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  max-width: 100%;\n}\n\n.label-md {\n  margin: 13px 8px 13px 0;\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n}\n\n[text-wrap] .label-md {\n  font-size: 14px;\n  line-height: 1.5;\n}\n\n.item-input .label-md,\n.item-select .label-md,\n.item-datetime .label-md {\n  color: var(--ion-text-md-color-step-600, var(--ion-text-color-step-600, #999999));\n}\n\n.label-md[stacked] {\n  font-size: 12px;\n}\n\n.label-md[floating] {\n  -webkit-transform: translate3d(0,  27px,  0);\n  transform: translate3d(0,  27px,  0);\n  -webkit-transform-origin: left top;\n  transform-origin: left top;\n  -webkit-transition: -webkit-transform 150ms ease-in-out;\n  transition: -webkit-transform 150ms ease-in-out;\n  transition: transform 150ms ease-in-out;\n  transition: transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out;\n}\n\n.label-md[stacked],\n.label-md[floating] {\n  margin-left: 0;\n  margin-bottom: 0;\n}\n\n.item-input-has-focus .label-md[stacked],\n.item-input-has-focus .label-md[floating] {\n  color: var(--ion-color-md-primary, var(--ion-color-primary, #488aff));\n}\n\n.item-input-has-focus .label-md[floating],\n.item-input-has-value .label-md[floating] {\n  -webkit-transform: translate3d(0,  0,  0) scale(0.8);\n  transform: translate3d(0,  0,  0) scale(0.8);\n}\n\n.label-md-primary,\n.item-input .label-md-primary,\n.item-select .label-md-primary,\n.item-datetime .label-md-primary {\n  color: var(--ion-color-md-primary, var(--ion-color-primary, #488aff));\n}\n\n.label-md-secondary,\n.item-input .label-md-secondary,\n.item-select .label-md-secondary,\n.item-datetime .label-md-secondary {\n  color: var(--ion-color-md-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.label-md-tertiary,\n.item-input .label-md-tertiary,\n.item-select .label-md-tertiary,\n.item-datetime .label-md-tertiary {\n  color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.label-md-success,\n.item-input .label-md-success,\n.item-select .label-md-success,\n.item-datetime .label-md-success {\n  color: var(--ion-color-md-success, var(--ion-color-success, #10dc60));\n}\n\n.label-md-warning,\n.item-input .label-md-warning,\n.item-select .label-md-warning,\n.item-datetime .label-md-warning {\n  color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00));\n}\n\n.label-md-danger,\n.item-input .label-md-danger,\n.item-select .label-md-danger,\n.item-datetime .label-md-danger {\n  color: var(--ion-color-md-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.label-md-light,\n.item-input .label-md-light,\n.item-select .label-md-light,\n.item-datetime .label-md-light {\n  color: var(--ion-color-md-light, var(--ion-color-light, #f4f4f4));\n}\n\n.label-md-medium,\n.item-input .label-md-medium,\n.item-select .label-md-medium,\n.item-datetime .label-md-medium {\n  color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2));\n}\n\n.label-md-dark,\n.item-input .label-md-dark,\n.item-select .label-md-dark,\n.item-datetime .label-md-dark {\n  color: var(--ion-color-md-dark, var(--ion-color-dark, #222));\n}"; }
    static get styleMode() { return "md"; }
}

class List {
    getOpenedItem() {
        return this.openedItem;
    }
    setOpenedItem(itemSliding) {
        this.openedItem = itemSliding;
    }
    /**
     * Close the sliding items. Items can also be closed from the [Item Sliding](../../item-sliding/ItemSliding).
     */
    closeSlidingItems() {
        if (this.openedItem) {
            this.openedItem.close();
            this.openedItem = null;
            return true;
        }
        return false;
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-list"; }
    static get host() { return { "theme": "list" }; }
    static get properties() { return { "closeSlidingItems": { "method": true }, "getOpenedItem": { "method": true }, "setOpenedItem": { "method": true } }; }
    static get style() { return "ion-list {\n  margin: 0;\n  padding: 0;\n  display: block;\n  contain: content;\n  list-style-type: none;\n}\n\nion-list[inset] {\n  overflow: hidden;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n\n.list-md {\n  margin: -1px 0 16px;\n}\n\n.list-md .item-block .item-inner {\n  border-bottom: 1px solid var(--ion-item-md-border-color, var(--ion-item-border-color, #dedede));\n}\n\n.list-md > .item-block:last-child ion-label,\n.list-md > .item-block:last-child .item-inner,\n.list-md > .item-sliding:last-child ion-label,\n.list-md > .item-sliding:last-child .item-inner {\n  border-bottom: 0;\n}\n\n.list-md > ion-input:last-child::after {\n  left: 0;\n}\n\n.list-md .item[no-lines],\n.list-md .item[no-lines] .item-inner {\n  border-width: 0;\n}\n\n.list-md + ion-list ion-list-header {\n  margin-top: -16px;\n}\n\n.list-md[inset] {\n  margin: 16px;\n  border-radius: 2px;\n}\n\n.list-md[inset] .item:first-child {\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  border-top-width: 0;\n}\n\n.list-md[inset] .item:last-child {\n  border-bottom-right-radius: 2px;\n  border-bottom-left-radius: 2px;\n  border-bottom-width: 0;\n}\n\n.list-md[inset] .item-input {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.list-md[inset] + ion-list[inset] {\n  margin-top: 0;\n}\n\n.list-md[inset] ion-list-header {\n  background-color: var(--ion-item-md-background-color, var(--ion-item-background-color, var(--ion-background-color, #fff)));\n}\n\n.list-md[no-lines] .item-block,\n.list-md[no-lines] .item .item-inner {\n  border-width: 0;\n}\n\n.list-md .item-input:last-child {\n  border-bottom: 1px solid var(--ion-item-md-border-color, var(--ion-item-border-color, #dedede));\n}"; }
    static get styleMode() { return "md"; }
}

class ListHeader {
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-list-header"; }
    static get host() { return { "theme": "list-header" }; }
    static get properties() { return { "color": { "type": String, "attr": "color" }, "mode": { "type": "Any", "attr": "mode" } }; }
    static get style() { return "ion-list-header {\n  margin: 0;\n  padding: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 40px;\n}\n\n.list-header-md {\n  padding-left: 16px;\n  margin-bottom: 13px;\n  min-height: 45px;\n  border-top: 1px solid var(--ion-item-md-border-color, var(--ion-item-border-color, #dedede));\n  font-size: 14px;\n  color: var(--ion-text-md-color-step-400, var(--ion-text-color-step-400, #666666));\n}\n\n.list-header-md-primary {\n  color: var(--ion-color-md-primary-contrast, var(--ion-color-primary-contrast, #fff));\n  background-color: var(--ion-color-md-primary, var(--ion-color-primary, #488aff));\n}\n\n.list-header-md-secondary {\n  color: var(--ion-color-md-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n  background-color: var(--ion-color-md-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.list-header-md-tertiary {\n  color: var(--ion-color-md-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n  background-color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.list-header-md-success {\n  color: var(--ion-color-md-success-contrast, var(--ion-color-success-contrast, #fff));\n  background-color: var(--ion-color-md-success, var(--ion-color-success, #10dc60));\n}\n\n.list-header-md-warning {\n  color: var(--ion-color-md-warning-contrast, var(--ion-color-warning-contrast, #000));\n  background-color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00));\n}\n\n.list-header-md-danger {\n  color: var(--ion-color-md-danger-contrast, var(--ion-color-danger-contrast, #fff));\n  background-color: var(--ion-color-md-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.list-header-md-light {\n  color: var(--ion-color-md-light-contrast, var(--ion-color-light-contrast, #000));\n  background-color: var(--ion-color-md-light, var(--ion-color-light, #f4f4f4));\n}\n\n.list-header-md-medium {\n  color: var(--ion-color-md-medium-contrast, var(--ion-color-medium-contrast, #000));\n  background-color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2));\n}\n\n.list-header-md-dark {\n  color: var(--ion-color-md-dark-contrast, var(--ion-color-dark-contrast, #fff));\n  background-color: var(--ion-color-md-dark, var(--ion-color-dark, #222));\n}"; }
    static get styleMode() { return "md"; }
}

class SkeletonText {
    constructor() {
        this.width = '100%';
    }
    render() {
        return h("span", { style: { width: this.width } }, "\u00A0");
    }
    static get is() { return "ion-skeleton-text"; }
    static get host() { return { "theme": "skeleton-text" }; }
    static get properties() { return { "width": { "type": String, "attr": "width" } }; }
    static get style() { return "ion-skeleton-text {\n  display: inline-block;\n  width: 100%;\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nion-skeleton-text span {\n  display: inline-block;\n  font-size: 8px;\n}\n\n.skeleton-text-md span {\n  background-color: var(--ion-text-md-color, var(--ion-text-color, #000));\n  opacity: 0.1;\n}"; }
    static get styleMode() { return "md"; }
}

export { Item as IonItem, ItemDivider as IonItemDivider, ItemGroup as IonItemGroup, Label as IonLabel, List as IonList, ListHeader as IonListHeader, SkeletonText as IonSkeletonText };
