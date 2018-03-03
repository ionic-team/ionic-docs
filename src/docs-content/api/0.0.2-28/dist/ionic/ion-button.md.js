/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const { h, Context } = window.Ionic;

import { getButtonClassMap, getElementClassMap } from './chunk2.js';

class Button {
    constructor() {
        /**
         * The type of the button.
         * Possible values are: `"submit"`, `"reset"` and `"button"`.
         * Default value is: `"button"`
         */
        this.type = 'button';
        /**
         * The type of button.
         * Possible values are: `"button"`, `"bar-button"`.
         */
        this.buttonType = 'button';
        /**
         * If true, the user cannot interact with the button. Defaults to `false`.
         */
        this.disabled = false;
        /**
         * Set to `"clear"` for a transparent button, to `"outline"` for a transparent
         * button with a border, or to `"solid"`. The default style is `"solid"` except inside of
         * a toolbar, where the default is `"clear"`.
         */
        this.fill = 'default';
        /**
         * If true, activates a button with rounded corners.
         */
        this.round = false;
        /**
         * If true, activates a button with a heavier font weight.
         */
        this.strong = false;
    }
    onFocus() {
        this.ionFocus.emit();
    }
    onKeyUp() {
        this.keyFocus = true;
    }
    onBlur() {
        this.keyFocus = false;
        this.ionBlur.emit();
    }
    render() {
        const { buttonType, color, expand, fill, mode, round, size, strong } = this;
        const TagType = this.href ? 'a' : 'button';
        const buttonClasses = Object.assign({}, getButtonClassMap(buttonType, mode), getButtonTypeClassMap(buttonType, expand, mode), getButtonTypeClassMap(buttonType, size, mode), getButtonTypeClassMap(buttonType, round ? 'round' : null, mode), getButtonTypeClassMap(buttonType, strong ? 'strong' : null, mode), getColorClassMap(buttonType, color, fill, mode), getElementClassMap(this.el.classList), { 'focused': this.keyFocus });
        const attrs = (TagType === 'button')
            ? { type: 'button' }
            : {};
        return (h(TagType, Object.assign({}, attrs, { class: buttonClasses, disabled: this.disabled, href: this.href, onFocus: this.onFocus.bind(this), onKeyUp: this.onKeyUp.bind(this), onBlur: this.onBlur.bind(this) }),
            h("span", { class: 'button-inner' },
                h("slot", { name: 'icon-only' }),
                h("slot", { name: 'start' }),
                h("span", { class: 'button-text' },
                    h("slot", null)),
                h("slot", { name: 'end' })),
            this.mode === 'md' && h("ion-ripple-effect", null)));
    }
    static get is() { return "ion-button"; }
    static get properties() { return { "buttonType": { "type": String, "attr": "button-type" }, "color": { "type": String, "attr": "color" }, "disabled": { "type": Boolean, "attr": "disabled" }, "el": { "elementRef": true }, "expand": { "type": "Any", "attr": "expand" }, "fill": { "type": "Any", "attr": "fill" }, "href": { "type": String, "attr": "href" }, "keyFocus": { "state": true }, "mode": { "type": "Any", "attr": "mode" }, "round": { "type": Boolean, "attr": "round" }, "size": { "type": "Any", "attr": "size" }, "strong": { "type": Boolean, "attr": "strong" }, "type": { "type": String, "attr": "type" } }; }
    static get events() { return [{ "name": "ionFocus", "method": "ionFocus", "bubbles": true, "cancelable": true, "composed": true }, { "name": "ionBlur", "method": "ionBlur", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return ".button {\n  text-align: center;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  position: relative;\n  z-index: 0;\n  display: inline-block;\n  border: 0;\n  line-height: 1;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n  cursor: pointer;\n  vertical-align: top;\n  vertical-align: -webkit-baseline-middle;\n  -webkit-transition: background-color, opacity 100ms linear;\n  transition: background-color, opacity 100ms linear;\n  -webkit-font-kerning: none;\n  font-kerning: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  contain: content;\n  font-smoothing: antialiased;\n  -webkit-font-smoothing: antialiased;\n}\n\n.button:active,\n.button:focus {\n  outline: none;\n}\n\n.button-inner {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-flow: row nowrap;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n\na[disabled],\nbutton[disabled],\n.button[disabled] {\n  cursor: default;\n  pointer-events: none;\n}\n\n.button-block {\n  display: block;\n  clear: both;\n  width: 100%;\n  contain: strict;\n}\n\n.button-block::after {\n  clear: both;\n}\n\n.button-full {\n  display: block;\n  width: 100%;\n  contain: strict;\n}\n\n.button-full.button-outline {\n  border-radius: 0;\n  border-right-width: 0;\n  border-left-width: 0;\n}\n\n.button ion-icon {\n  font-size: 1.4em;\n  pointer-events: none;\n}\n\n.button ion-icon[slot=\"start\"] {\n  margin: 0 0.3em 0 -0.3em;\n}\n\n.button ion-icon[slot=\"end\"] {\n  margin: 0 -0.2em 0 0.3em;\n}\n\n.button ion-icon[slot=\"icon-only\"] {\n  font-size: 1.8em;\n}\n\n.button-md {\n  border-radius: 2px;\n  margin: 4px 2px;\n  padding: 0 1.1em;\n  overflow: hidden;\n  height: 36px;\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: var(--ion-color-md-primary-contrast, var(--ion-color-primary-contrast, #fff));\n  background-color: var(--ion-color-md-primary, var(--ion-color-primary, #488aff));\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  -webkit-transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.enable-hover .button-md:hover {\n  background-color: var(--ion-color-md-primary, var(--ion-color-primary, #488aff));\n}\n\n.button-md.activated {\n  background-color: var(--ion-color-md-primary-shade, var(--ion-color-primary-shade, #3f79e0));\n  -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.14), 0 3px 5px rgba(0, 0, 0, 0.21);\n  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.14), 0 3px 5px rgba(0, 0, 0, 0.21);\n}\n\n.button-md.focused {\n  background-color: var(--ion-color-md-primary-shade, var(--ion-color-primary-shade, #3f79e0));\n}\n\n.button-md .ripple-effect {\n  background-color: var(--ion-color-md-primary-contrast, var(--ion-color-primary-contrast, #fff));\n}\n\na[disabled],\nbutton[disabled],\n.button[disabled] {\n  opacity: var(--ion-alpha-md-medium, var(--ion-alpha-medium, 0.4));\n}\n\n.button-large-md {\n  padding: 0 1em;\n  height: 2.8em;\n  font-size: 20px;\n}\n\n.button-small-md {\n  padding: 0 0.9em;\n  height: 2.1em;\n  font-size: 13px;\n}\n\n.button-block-md {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.button-full-md {\n  margin-left: 0;\n  margin-right: 0;\n  border-radius: 0;\n  border-right-width: 0;\n  border-left-width: 0;\n}\n\n.button-outline-md {\n  border-width: 1px;\n  border-style: solid;\n  border-color: var(--ion-color-md-primary, var(--ion-color-primary, #488aff));\n  color: var(--ion-color-md-primary, var(--ion-color-primary, #488aff));\n  background-color: transparent;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.enable-hover .button-outline-md:hover {\n  background-color: rgba(0, 0, 0, var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n}\n\n.button-outline-md.activated {\n  background-color: transparent;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  opacity: 1;\n}\n\n.button-outline-md.focused {\n  background-color: rgba(var(--ion-color-md-primary-rgb, var(--ion-color-primary-rgb, 72, 138, 255)), var(--ion-alpha-md-low, var(--ion-alpha-low, 0.1)));\n}\n\n.button-outline-md .ripple-effect {\n  background-color: var(--ion-color-md-primary, var(--ion-color-primary, #488aff));\n}\n\n.button-clear-md {\n  border-color: transparent;\n  color: var(--ion-color-md-primary, var(--ion-color-primary, #488aff));\n  background-color: transparent;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  opacity: 1;\n}\n\n.button-clear-md.activated {\n  background-color: rgba(0, 0, 0, var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.button-clear-md.focused {\n  background-color: rgba(var(--ion-color-md-primary-rgb, var(--ion-color-primary-rgb, 72, 138, 255)), var(--ion-alpha-md-low, var(--ion-alpha-low, 0.1)));\n}\n\n.enable-hover .button-clear-md:hover {\n  background-color: rgba(0, 0, 0, var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n}\n\n.button-clear-md .ripple-effect {\n  background-color: var(--ion-text-md-color-step-600, var(--ion-text-color-step-600, #999999));\n}\n\n.button-round-md {\n  border-radius: 64px;\n  padding: 0 26px;\n}\n\n.button-md ion-icon[slot=\"icon-only\"] {\n  padding: 0;\n}\n\n.button-md-primary {\n  color: var(--ion-color-md-primary-contrast, var(--ion-color-primary-contrast, #fff));\n  background-color: var(--ion-color-md-primary, var(--ion-color-primary, #488aff));\n}\n\n.enable-hover .button-md-primary:hover {\n  background-color: var(--ion-color-md-primary, var(--ion-color-primary, #488aff));\n}\n\n.button-md-primary.activated {\n  background-color: var(--ion-color-md-primary-shade, var(--ion-color-primary-shade, #3f79e0));\n  opacity: 1;\n}\n\n.button-md-primary.focused {\n  background-color: var(--ion-color-md-primary-shade, var(--ion-color-primary-shade, #3f79e0));\n}\n\n.button-md-primary .ripple-effect {\n  background-color: var(--ion-color-md-primary-contrast, var(--ion-color-primary-contrast, #fff));\n}\n\n.button-outline-md-primary {\n  border-color: var(--ion-color-md-primary-tint, var(--ion-color-primary-tint, #5a96ff));\n  color: var(--ion-color-md-primary-tint, var(--ion-color-primary-tint, #5a96ff));\n  background-color: transparent;\n}\n\n.enable-hover .button-outline-md-primary:hover {\n  background-color: rgba(0, 0, 0, var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n}\n\n.button-outline-md-primary.activated {\n  background-color: transparent;\n}\n\n.button-outline-md-primary.focused {\n  background-color: rgba(var(--ion-color-md-primary-rgb, var(--ion-color-primary-rgb, 72, 138, 255)), var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n}\n\n.button-outline-md-primary .ripple-effect {\n  background-color: var(--ion-color-md-primary-tint, var(--ion-color-primary-tint, #5a96ff));\n}\n\n.button-clear-md-primary {\n  border-color: transparent;\n  color: var(--ion-color-md-primary, var(--ion-color-primary, #488aff));\n  background-color: transparent;\n}\n\n.button-clear-md-primary.activated {\n  background-color: rgba(0, 0, 0, var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.button-clear-md-primary.focused {\n  background-color: rgba(var(--ion-color-md-primary-rgb, var(--ion-color-primary-rgb, 72, 138, 255)), var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n}\n\n.enable-hover .button-clear-md-primary:hover {\n  color: var(--ion-color-md-primary, var(--ion-color-primary, #488aff));\n}\n\n.button-md-secondary {\n  color: var(--ion-color-md-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n  background-color: var(--ion-color-md-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.enable-hover .button-md-secondary:hover {\n  background-color: var(--ion-color-md-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.button-md-secondary.activated {\n  background-color: var(--ion-color-md-secondary-shade, var(--ion-color-secondary-shade, #2cc158));\n  opacity: 1;\n}\n\n.button-md-secondary.focused {\n  background-color: var(--ion-color-md-secondary-shade, var(--ion-color-secondary-shade, #2cc158));\n}\n\n.button-md-secondary .ripple-effect {\n  background-color: var(--ion-color-md-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n}\n\n.button-outline-md-secondary {\n  border-color: var(--ion-color-md-secondary-tint, var(--ion-color-secondary-tint, #47df74));\n  color: var(--ion-color-md-secondary-tint, var(--ion-color-secondary-tint, #47df74));\n  background-color: transparent;\n}\n\n.enable-hover .button-outline-md-secondary:hover {\n  background-color: rgba(0, 0, 0, var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n}\n\n.button-outline-md-secondary.activated {\n  background-color: transparent;\n}\n\n.button-outline-md-secondary.focused {\n  background-color: rgba(var(--ion-color-md-secondary-rgb, var(--ion-color-secondary-rgb, 50, 219, 100)), var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n}\n\n.button-outline-md-secondary .ripple-effect {\n  background-color: var(--ion-color-md-secondary-tint, var(--ion-color-secondary-tint, #47df74));\n}\n\n.button-clear-md-secondary {\n  border-color: transparent;\n  color: var(--ion-color-md-secondary, var(--ion-color-secondary, #32db64));\n  background-color: transparent;\n}\n\n.button-clear-md-secondary.activated {\n  background-color: rgba(0, 0, 0, var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.button-clear-md-secondary.focused {\n  background-color: rgba(var(--ion-color-md-secondary-rgb, var(--ion-color-secondary-rgb, 50, 219, 100)), var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n}\n\n.enable-hover .button-clear-md-secondary:hover {\n  color: var(--ion-color-md-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.button-md-tertiary {\n  color: var(--ion-color-md-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n  background-color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.enable-hover .button-md-tertiary:hover {\n  background-color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.button-md-tertiary.activated {\n  background-color: var(--ion-color-md-tertiary-shade, var(--ion-color-tertiary-shade, #d7953a));\n  opacity: 1;\n}\n\n.button-md-tertiary.focused {\n  background-color: var(--ion-color-md-tertiary-shade, var(--ion-color-tertiary-shade, #d7953a));\n}\n\n.button-md-tertiary .ripple-effect {\n  background-color: var(--ion-color-md-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n}\n\n.button-outline-md-tertiary {\n  border-color: var(--ion-color-md-tertiary-tint, var(--ion-color-tertiary-tint, #f5b255));\n  color: var(--ion-color-md-tertiary-tint, var(--ion-color-tertiary-tint, #f5b255));\n  background-color: transparent;\n}\n\n.enable-hover .button-outline-md-tertiary:hover {\n  background-color: rgba(0, 0, 0, var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n}\n\n.button-outline-md-tertiary.activated {\n  background-color: transparent;\n}\n\n.button-outline-md-tertiary.focused {\n  background-color: rgba(var(--ion-color-md-tertiary-rgb, var(--ion-color-tertiary-rgb, 244, 169, 66)), var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n}\n\n.button-outline-md-tertiary .ripple-effect {\n  background-color: var(--ion-color-md-tertiary-tint, var(--ion-color-tertiary-tint, #f5b255));\n}\n\n.button-clear-md-tertiary {\n  border-color: transparent;\n  color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #f4a942));\n  background-color: transparent;\n}\n\n.button-clear-md-tertiary.activated {\n  background-color: rgba(0, 0, 0, var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.button-clear-md-tertiary.focused {\n  background-color: rgba(var(--ion-color-md-tertiary-rgb, var(--ion-color-tertiary-rgb, 244, 169, 66)), var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n}\n\n.enable-hover .button-clear-md-tertiary:hover {\n  color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.button-md-success {\n  color: var(--ion-color-md-success-contrast, var(--ion-color-success-contrast, #fff));\n  background-color: var(--ion-color-md-success, var(--ion-color-success, #10dc60));\n}\n\n.enable-hover .button-md-success:hover {\n  background-color: var(--ion-color-md-success, var(--ion-color-success, #10dc60));\n}\n\n.button-md-success.activated {\n  background-color: var(--ion-color-md-success-shade, var(--ion-color-success-shade, #0ec254));\n  opacity: 1;\n}\n\n.button-md-success.focused {\n  background-color: var(--ion-color-md-success-shade, var(--ion-color-success-shade, #0ec254));\n}\n\n.button-md-success .ripple-effect {\n  background-color: var(--ion-color-md-success-contrast, var(--ion-color-success-contrast, #fff));\n}\n\n.button-outline-md-success {\n  border-color: var(--ion-color-md-success-tint, var(--ion-color-success-tint, #28e070));\n  color: var(--ion-color-md-success-tint, var(--ion-color-success-tint, #28e070));\n  background-color: transparent;\n}\n\n.enable-hover .button-outline-md-success:hover {\n  background-color: rgba(0, 0, 0, var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n}\n\n.button-outline-md-success.activated {\n  background-color: transparent;\n}\n\n.button-outline-md-success.focused {\n  background-color: rgba(var(--ion-color-md-success-rgb, var(--ion-color-success-rgb, 16, 220, 96)), var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n}\n\n.button-outline-md-success .ripple-effect {\n  background-color: var(--ion-color-md-success-tint, var(--ion-color-success-tint, #28e070));\n}\n\n.button-clear-md-success {\n  border-color: transparent;\n  color: var(--ion-color-md-success, var(--ion-color-success, #10dc60));\n  background-color: transparent;\n}\n\n.button-clear-md-success.activated {\n  background-color: rgba(0, 0, 0, var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.button-clear-md-success.focused {\n  background-color: rgba(var(--ion-color-md-success-rgb, var(--ion-color-success-rgb, 16, 220, 96)), var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n}\n\n.enable-hover .button-clear-md-success:hover {\n  color: var(--ion-color-md-success, var(--ion-color-success, #10dc60));\n}\n\n.button-md-warning {\n  color: var(--ion-color-md-warning-contrast, var(--ion-color-warning-contrast, #000));\n  background-color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00));\n}\n\n.enable-hover .button-md-warning:hover {\n  background-color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00));\n}\n\n.button-md-warning.activated {\n  background-color: var(--ion-color-md-warning-shade, var(--ion-color-warning-shade, #e0b500));\n  opacity: 1;\n}\n\n.button-md-warning.focused {\n  background-color: var(--ion-color-md-warning-shade, var(--ion-color-warning-shade, #e0b500));\n}\n\n.button-md-warning .ripple-effect {\n  background-color: var(--ion-color-md-warning-contrast, var(--ion-color-warning-contrast, #000));\n}\n\n.button-outline-md-warning {\n  border-color: var(--ion-color-md-warning-tint, var(--ion-color-warning-tint, #ffd31a));\n  color: var(--ion-color-md-warning-tint, var(--ion-color-warning-tint, #ffd31a));\n  background-color: transparent;\n}\n\n.enable-hover .button-outline-md-warning:hover {\n  background-color: rgba(0, 0, 0, var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n}\n\n.button-outline-md-warning.activated {\n  background-color: transparent;\n}\n\n.button-outline-md-warning.focused {\n  background-color: rgba(var(--ion-color-md-warning-rgb, var(--ion-color-warning-rgb, 255, 206, 0)), var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n}\n\n.button-outline-md-warning .ripple-effect {\n  background-color: var(--ion-color-md-warning-tint, var(--ion-color-warning-tint, #ffd31a));\n}\n\n.button-clear-md-warning {\n  border-color: transparent;\n  color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00));\n  background-color: transparent;\n}\n\n.button-clear-md-warning.activated {\n  background-color: rgba(0, 0, 0, var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.button-clear-md-warning.focused {\n  background-color: rgba(var(--ion-color-md-warning-rgb, var(--ion-color-warning-rgb, 255, 206, 0)), var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n}\n\n.enable-hover .button-clear-md-warning:hover {\n  color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00));\n}\n\n.button-md-danger {\n  color: var(--ion-color-md-danger-contrast, var(--ion-color-danger-contrast, #fff));\n  background-color: var(--ion-color-md-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.enable-hover .button-md-danger:hover {\n  background-color: var(--ion-color-md-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.button-md-danger.activated {\n  background-color: var(--ion-color-md-danger-shade, var(--ion-color-danger-shade, #d83636));\n  opacity: 1;\n}\n\n.button-md-danger.focused {\n  background-color: var(--ion-color-md-danger-shade, var(--ion-color-danger-shade, #d83636));\n}\n\n.button-md-danger .ripple-effect {\n  background-color: var(--ion-color-md-danger-contrast, var(--ion-color-danger-contrast, #fff));\n}\n\n.button-outline-md-danger {\n  border-color: var(--ion-color-md-danger-tint, var(--ion-color-danger-tint, #f65050));\n  color: var(--ion-color-md-danger-tint, var(--ion-color-danger-tint, #f65050));\n  background-color: transparent;\n}\n\n.enable-hover .button-outline-md-danger:hover {\n  background-color: rgba(0, 0, 0, var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n}\n\n.button-outline-md-danger.activated {\n  background-color: transparent;\n}\n\n.button-outline-md-danger.focused {\n  background-color: rgba(var(--ion-color-md-danger-rgb, var(--ion-color-danger-rgb, 245, 61, 61)), var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n}\n\n.button-outline-md-danger .ripple-effect {\n  background-color: var(--ion-color-md-danger-tint, var(--ion-color-danger-tint, #f65050));\n}\n\n.button-clear-md-danger {\n  border-color: transparent;\n  color: var(--ion-color-md-danger, var(--ion-color-danger, #f53d3d));\n  background-color: transparent;\n}\n\n.button-clear-md-danger.activated {\n  background-color: rgba(0, 0, 0, var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.button-clear-md-danger.focused {\n  background-color: rgba(var(--ion-color-md-danger-rgb, var(--ion-color-danger-rgb, 245, 61, 61)), var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n}\n\n.enable-hover .button-clear-md-danger:hover {\n  color: var(--ion-color-md-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.button-md-light {\n  color: var(--ion-color-md-light-contrast, var(--ion-color-light-contrast, #000));\n  background-color: var(--ion-color-md-light, var(--ion-color-light, #f4f4f4));\n}\n\n.enable-hover .button-md-light:hover {\n  background-color: var(--ion-color-md-light, var(--ion-color-light, #f4f4f4));\n}\n\n.button-md-light.activated {\n  background-color: var(--ion-color-md-light-shade, var(--ion-color-light-shade, #d7d7d7));\n  opacity: 1;\n}\n\n.button-md-light.focused {\n  background-color: var(--ion-color-md-light-shade, var(--ion-color-light-shade, #d7d7d7));\n}\n\n.button-md-light .ripple-effect {\n  background-color: var(--ion-color-md-light-contrast, var(--ion-color-light-contrast, #000));\n}\n\n.button-outline-md-light {\n  border-color: var(--ion-color-md-light-tint, var(--ion-color-light-tint, whitesmoke));\n  color: var(--ion-color-md-light-tint, var(--ion-color-light-tint, whitesmoke));\n  background-color: transparent;\n}\n\n.enable-hover .button-outline-md-light:hover {\n  background-color: rgba(0, 0, 0, var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n}\n\n.button-outline-md-light.activated {\n  background-color: transparent;\n}\n\n.button-outline-md-light.focused {\n  background-color: rgba(var(--ion-color-md-light-rgb, var(--ion-color-light-rgb, 244, 244, 244)), var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n}\n\n.button-outline-md-light .ripple-effect {\n  background-color: var(--ion-color-md-light-tint, var(--ion-color-light-tint, whitesmoke));\n}\n\n.button-clear-md-light {\n  border-color: transparent;\n  color: var(--ion-color-md-light, var(--ion-color-light, #f4f4f4));\n  background-color: transparent;\n}\n\n.button-clear-md-light.activated {\n  background-color: rgba(0, 0, 0, var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.button-clear-md-light.focused {\n  background-color: rgba(var(--ion-color-md-light-rgb, var(--ion-color-light-rgb, 244, 244, 244)), var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n}\n\n.enable-hover .button-clear-md-light:hover {\n  color: var(--ion-color-md-light, var(--ion-color-light, #f4f4f4));\n}\n\n.button-md-medium {\n  color: var(--ion-color-md-medium-contrast, var(--ion-color-medium-contrast, #000));\n  background-color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2));\n}\n\n.enable-hover .button-md-medium:hover {\n  background-color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2));\n}\n\n.button-md-medium.activated {\n  background-color: var(--ion-color-md-medium-shade, var(--ion-color-medium-shade, #86888f));\n  opacity: 1;\n}\n\n.button-md-medium.focused {\n  background-color: var(--ion-color-md-medium-shade, var(--ion-color-medium-shade, #86888f));\n}\n\n.button-md-medium .ripple-effect {\n  background-color: var(--ion-color-md-medium-contrast, var(--ion-color-medium-contrast, #000));\n}\n\n.button-outline-md-medium {\n  border-color: var(--ion-color-md-medium-tint, var(--ion-color-medium-tint, #a2a4ab));\n  color: var(--ion-color-md-medium-tint, var(--ion-color-medium-tint, #a2a4ab));\n  background-color: transparent;\n}\n\n.enable-hover .button-outline-md-medium:hover {\n  background-color: rgba(0, 0, 0, var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n}\n\n.button-outline-md-medium.activated {\n  background-color: transparent;\n}\n\n.button-outline-md-medium.focused {\n  background-color: rgba(var(--ion-color-md-medium-rgb, var(--ion-color-medium-rgb, 152, 154, 162)), var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n}\n\n.button-outline-md-medium .ripple-effect {\n  background-color: var(--ion-color-md-medium-tint, var(--ion-color-medium-tint, #a2a4ab));\n}\n\n.button-clear-md-medium {\n  border-color: transparent;\n  color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2));\n  background-color: transparent;\n}\n\n.button-clear-md-medium.activated {\n  background-color: rgba(0, 0, 0, var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.button-clear-md-medium.focused {\n  background-color: rgba(var(--ion-color-md-medium-rgb, var(--ion-color-medium-rgb, 152, 154, 162)), var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n}\n\n.enable-hover .button-clear-md-medium:hover {\n  color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2));\n}\n\n.button-md-dark {\n  color: var(--ion-color-md-dark-contrast, var(--ion-color-dark-contrast, #fff));\n  background-color: var(--ion-color-md-dark, var(--ion-color-dark, #222));\n}\n\n.enable-hover .button-md-dark:hover {\n  background-color: var(--ion-color-md-dark, var(--ion-color-dark, #222));\n}\n\n.button-md-dark.activated {\n  background-color: var(--ion-color-md-dark-shade, var(--ion-color-dark-shade, #1e1e1e));\n  opacity: 1;\n}\n\n.button-md-dark.focused {\n  background-color: var(--ion-color-md-dark-shade, var(--ion-color-dark-shade, #1e1e1e));\n}\n\n.button-md-dark .ripple-effect {\n  background-color: var(--ion-color-md-dark-contrast, var(--ion-color-dark-contrast, #fff));\n}\n\n.button-outline-md-dark {\n  border-color: var(--ion-color-md-dark-tint, var(--ion-color-dark-tint, #383838));\n  color: var(--ion-color-md-dark-tint, var(--ion-color-dark-tint, #383838));\n  background-color: transparent;\n}\n\n.enable-hover .button-outline-md-dark:hover {\n  background-color: rgba(0, 0, 0, var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n}\n\n.button-outline-md-dark.activated {\n  background-color: transparent;\n}\n\n.button-outline-md-dark.focused {\n  background-color: rgba(var(--ion-color-md-dark-rgb, var(--ion-color-dark-rgb, 34, 34, 34)), var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n}\n\n.button-outline-md-dark .ripple-effect {\n  background-color: var(--ion-color-md-dark-tint, var(--ion-color-dark-tint, #383838));\n}\n\n.button-clear-md-dark {\n  border-color: transparent;\n  color: var(--ion-color-md-dark, var(--ion-color-dark, #222));\n  background-color: transparent;\n}\n\n.button-clear-md-dark.activated {\n  background-color: rgba(0, 0, 0, var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n\n.button-clear-md-dark.focused {\n  background-color: rgba(var(--ion-color-md-dark-rgb, var(--ion-color-dark-rgb, 34, 34, 34)), var(--ion-alpha-md-lowest, var(--ion-alpha-lowest, 0.06)));\n}\n\n.enable-hover .button-clear-md-dark:hover {\n  color: var(--ion-color-md-dark, var(--ion-color-dark, #222));\n}\n\n.button-strong-md {\n  font-weight: bold;\n}"; }
    static get styleMode() { return "md"; }
}
/**
 * Get the classes based on the type
 * e.g. block, full, round, large
 */
function getButtonTypeClassMap(buttonType, type, mode) {
    if (!type) {
        return {};
    }
    type = type.toLocaleLowerCase();
    return {
        [`${buttonType}-${type}`]: true,
        [`${buttonType}-${type}-${mode}`]: true
    };
}
function getColorClassMap(buttonType, color, fill, mode) {
    let className = buttonType;
    if (buttonType !== 'bar-button' && fill === 'solid') {
        fill = 'default';
    }
    if (fill && fill !== 'default') {
        className += `-${fill.toLowerCase()}`;
    }
    // special case for a default bar button
    // if the bar button is default it should get the fill
    // but if a color is passed the fill shouldn't be added
    if (buttonType === 'bar-button' && fill === 'default') {
        className = buttonType;
        if (!color) {
            className += '-' + fill.toLowerCase();
        }
    }
    const map = {
        [className]: true,
        [`${className}-${mode}`]: true,
    };
    if (color) {
        map[`${className}-${mode}-${color}`] = true;
    }
    return map;
}

class Buttons {
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-buttons"; }
    static get host() { return { "theme": "bar-buttons" }; }
}

class Icon {
    constructor() {
        this.svgContent = null;
        /**
         * Specifies the label to use for accessibility. Defaults to the icon name.
         */
        this.ariaLabel = '';
        /**
         * Specifies which icon to use on `ios` mode.
         */
        this.ios = '';
        /**
         * Specifies which icon to use on `md` mode.
         */
        this.md = '';
        /**
         * Specifies which icon to use. The appropriate icon will be used based on the mode.
         * For more information, see [Ionicons](/docs/ionicons/).
         */
        this.name = '';
    }
    get iconName() {
        let iconName = this.name.toLowerCase();
        // default to "md" if somehow the mode wasn't set
        const mode = this.mode || 'md';
        // if an icon was passed in using the ios or md attributes
        // set the iconName to whatever was passed in
        if (this.ios && mode === 'ios') {
            iconName = this.ios.toLowerCase();
        }
        else if (this.md && mode === 'md') {
            iconName = this.md.toLowerCase();
            // this does not have one of the defaults
            // so lets auto add in the mode prefix for them
        }
        else if (iconName && !(/^md-|^ios-|^logo-/.test(iconName))) {
            iconName = mode + '-' + iconName;
        }
        // only allow alpha characters and dash
        const invalidChars = iconName.replace(/[a-z]|-|\d/g, '');
        if (invalidChars !== '') {
            console.error(`invalid characters in ion-icon name: ${invalidChars}`);
            return null;
        }
        return iconName;
    }
    hostData() {
        const attrs = {
            'role': 'img'
        };
        if (this.ariaLabel) {
            // user provided label
            attrs['aria-label'] = this.ariaLabel;
        }
        else {
            // come up with the label based on the icon name
            const iconName = this.iconName;
            if (iconName) {
                attrs['aria-label'] =
                    iconName
                        .replace('ios-', '')
                        .replace('md-', '')
                        .replace('-outline', '')
                        .replace(/\-/g, ' ');
            }
        }
        const iconClasses = {};
        if (this.size) {
            iconClasses[`icon-${this.size}`] = true;
        }
        return Object.assign({}, attrs, { class: iconClasses });
    }
    render() {
        if (this.isServer) {
            return h("div", { class: "icon-inner" });
        }
        const iconName = this.iconName;
        if (!iconName) {
            // we don't have good data
            return h("div", { class: "icon-inner" });
        }
        const svgContent = svgContents[iconName];
        if (svgContent === this.svgContent) {
            // we've already loaded up this svg at one point
            // and the svg content we've loaded and assigned checks out
            // render this svg!!
            return h("div", { class: "icon-inner", innerHTML: svgContent });
        }
        // haven't loaded this svg yet
        // start the request
        loadSvgContent(iconName, this.publicPath, loadedSvgContent => {
            // we're finished loading the svg content!
            // set to this.svgContent so we do another render
            this.svgContent = loadedSvgContent;
        });
        // actively requesting the svg, so let's just render a div for now
        return h("div", { class: "icon-inner" });
    }
    static get is() { return "ion-icon"; }
    static get host() { return { "theme": "icon" }; }
    static get properties() { return { "ariaLabel": { "type": String, "attr": "aria-label" }, "color": { "type": String, "attr": "color" }, "ios": { "type": String, "attr": "ios" }, "isServer": { "context": "isServer" }, "md": { "type": String, "attr": "md" }, "mode": { "context": "mode" }, "name": { "type": String, "attr": "name" }, "publicPath": { "context": "publicPath" }, "size": { "type": String, "attr": "size" }, "svgContent": { "state": true } }; }
    static get style() { return "ion-icon {\n  display: inline-block;\n  font-size: inherit;\n}\n\nion-icon .icon-inner {\n  height: 1em;\n  width: 1em;\n}\n\nion-icon svg {\n  fill: currentColor;\n  stroke: currentColor;\n}\n\n.icon-small .icon-inner {\n  font-size: 18px;\n}\n\n.icon-large .icon-inner {\n  font-size: 32px;\n}\n\n/* Set iOS Icon Colors */\n/* ------------------- */\n\n.icon-ios-primary svg {\n  fill: var(--ion-color-ios-primary, var(--ion-color-primary, #3880ff));\n  stroke: var(--ion-color-ios-primary, var(--ion-color-primary, #3880ff));\n}\n\n.icon-ios-secondary svg {\n  fill: var(--ion-color-ios-secondary, var(--ion-color-secondary, #0cd1e8));\n  stroke: var(--ion-color-ios-secondary, var(--ion-color-secondary, #0cd1e8));\n}\n\n.icon-ios-tertiary svg {\n  fill: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #f4a942));\n  stroke: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.icon-ios-success svg {\n  fill: var(--ion-color-ios-success, var(--ion-color-success, #10dc60));\n  stroke: var(--ion-color-ios-success, var(--ion-color-success, #10dc60));\n}\n\n.icon-ios-warning svg {\n  fill: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00));\n  stroke: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00));\n}\n\n.icon-ios-danger svg {\n  fill: var(--ion-color-ios-danger, var(--ion-color-danger, #f14141));\n  stroke: var(--ion-color-ios-danger, var(--ion-color-danger, #f14141));\n}\n\n.icon-ios-light svg {\n  fill: var(--ion-color-ios-light, var(--ion-color-light, #f4f5f8));\n  stroke: var(--ion-color-ios-light, var(--ion-color-light, #f4f5f8));\n}\n\n.icon-ios-medium svg {\n  fill: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2));\n  stroke: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2));\n}\n\n.icon-ios-dark svg {\n  fill: var(--ion-color-ios-dark, var(--ion-color-dark, #222428));\n  stroke: var(--ion-color-ios-dark, var(--ion-color-dark, #222428));\n}\n\n\n/* Set Material Design Icon Colors */\n/* ------------------------------- */\n\n.icon-md-primary svg {\n  fill: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff));\n  stroke: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff));\n}\n\n.icon-md-secondary svg {\n  fill: var(--ion-color-md-secondary, var(--ion-color-secondary, #0cd1e8));\n  stroke: var(--ion-color-md-secondary, var(--ion-color-secondary, #0cd1e8));\n}\n\n.icon-md-tertiary svg {\n  fill: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #f4a942));\n  stroke: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.icon-md-success svg {\n  fill: var(--ion-color-md-success, var(--ion-color-success, #10dc60));\n  stroke: var(--ion-color-md-success, var(--ion-color-success, #10dc60));\n}\n\n.icon-md-warning svg {\n  fill: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00));\n  stroke: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00));\n}\n\n.icon-md-danger svg {\n  fill: var(--ion-color-md-danger, var(--ion-color-danger, #f14141));\n  stroke: var(--ion-color-md-danger, var(--ion-color-danger, #f14141));\n}\n\n.icon-md-light svg {\n  fill: var(--ion-color-md-light, var(--ion-color-light, #f4f5f8));\n  stroke: var(--ion-color-md-light, var(--ion-color-light, #f4f5f8));\n}\n\n.icon-md-medium svg {\n  fill: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2));\n  stroke: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2));\n}\n\n.icon-md-dark svg {\n  fill: var(--ion-color-md-dark, var(--ion-color-dark, #222428));\n  stroke: var(--ion-color-md-dark, var(--ion-color-dark, #222428));\n}"; }
}
function loadSvgContent(iconName, publicPath, callback) {
    // static since all IonIcons use this same function and pointing at global/shared data
    // passed in callback will have instance info
    // add to the list of callbacks to fiure when this url is finished loading
    (loadCallbacks[iconName] = loadCallbacks[iconName] || []).push(callback);
    if (activeRequests[iconName]) {
        // already requesting this icon, don't bother kicking off another
        return;
    }
    // add this icons to our list of active requests
    activeRequests[iconName] = true;
    // kick off the request for the external svg file
    // create a script element to add to the document.head
    var scriptElm = document.createElement('script');
    scriptElm.charset = 'utf-8';
    scriptElm.async = true;
    scriptElm.src = `${publicPath}svg/${iconName}.js`;
    // create a fallback timeout if something goes wrong
    var tmrId = setTimeout(onScriptComplete, 120000);
    function onScriptComplete() {
        clearTimeout(tmrId);
        scriptElm.onerror = scriptElm.onload = null;
        scriptElm.parentNode.removeChild(scriptElm);
        // remove from our list of active requests
        delete activeRequests[iconName];
    }
    // add script completed listener to this script element
    scriptElm.onerror = scriptElm.onload = onScriptComplete;
    // inject a script tag in the head
    // kick off the actual request
    document.head.appendChild(scriptElm);
}
const activeRequests = {};
const loadCallbacks = [];
const svgContents = {};
// add a jsonp handler to the window
// as svg jsonp files are requested
// once they load they'll call this method
window.loadIonicon = function loadIonicon(svgContent, iconName) {
    // awesome, we've finished loading the svg file
    // remove this url from the active requests
    delete activeRequests[iconName];
    svgContents[iconName] = svgContent;
    // find any callbacks waiting on this icon
    const svgLoadCallbacks = loadCallbacks[iconName];
    if (svgLoadCallbacks) {
        // loop through all the callbacks that are waiting on the svg content
        svgLoadCallbacks.forEach(cb => {
            // fire off this callback which was provided by an instance
            cb(svgContent);
        });
        delete loadCallbacks[iconName];
    }
};

export { Button as IonButton, Buttons as IonButtons, Icon as IonIcon };
