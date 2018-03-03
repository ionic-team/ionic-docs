/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const { h, Context } = window.Ionic;

import { createThemedClasses, getElementClassMap } from './chunk2.js';

class Segment {
    constructor() {
        /*
         * If true, the user cannot interact with the segment. Defaults to `false`.
         */
        this.disabled = false;
    }
    valueChanged(val) {
        this.selectButton(val);
        this.ionChange.emit();
    }
    componentDidLoad() {
        this.selectButton(this.value);
    }
    segmentClick(ev) {
        const selectedButton = ev.target;
        this.value = selectedButton.value;
    }
    selectButton(val) {
        const buttons = this.el.querySelectorAll('ion-segment-button');
        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            button.activated = (button.value === val);
            // If there is no value set on the segment and a button
            // is checked we should activate it
            if (!val && button.checked) {
                button.activated = button.checked;
            }
        }
    }
    hostData() {
        return {
            class: {
                'segment-disabled': this.disabled
            }
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-segment"; }
    static get host() { return { "theme": "segment" }; }
    static get properties() { return { "color": { "type": String, "attr": "color" }, "disabled": { "type": Boolean, "attr": "disabled" }, "el": { "elementRef": true }, "mode": { "type": "Any", "attr": "mode" }, "value": { "type": String, "attr": "value", "mutable": true, "watchCallbacks": ["valueChanged"] } }; }
    static get events() { return [{ "name": "ionChange", "method": "ionChange", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "ion-segment {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  font-smoothing: antialiased;\n  -webkit-font-smoothing: antialiased;\n}\n\n.segment-md {\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n}\n\n.segment-md.segment-disabled {\n  opacity: 0.3;\n  pointer-events: none;\n}"; }
    static get styleMode() { return "md"; }
}

let ids = 0;
class SegmentButton {
    constructor() {
        this.activated = false;
        /**
         * If true, the segment button is selected. Defaults to `false`.
         */
        this.checked = false;
        /*
         * If true, the user cannot interact with the segment button. Default false.
         */
        this.disabled = false;
    }
    componentWillLoad() {
        if (!this.value) {
            this.value = `ion-sb-${ids++}`;
        }
    }
    /**
     * Emit the click event to the parent segment
     */
    segmentButtonClick() {
        clearTimeout(this.styleTmr);
        this.styleTmr = setTimeout(() => {
            this.ionClick.emit();
        });
    }
    render() {
        const themedClasses = createThemedClasses(this.mode, this.color, 'segment-button');
        const hostClasses = getElementClassMap(this.el.classList);
        const buttonClasses = Object.assign({ 'segment-button-disabled': this.disabled, 'segment-activated': this.activated }, themedClasses, hostClasses);
        const TagType = this.href ? 'a' : 'button';
        const attrs = (TagType === 'button')
            ? { type: 'button' }
            : {};
        return [
            h(TagType, Object.assign({}, attrs, { "aria-pressed": this.activated, class: buttonClasses, disabled: this.disabled, href: this.href, onClick: this.segmentButtonClick.bind(this) }),
                h("slot", null),
                this.mode === 'md' && h("ion-ripple-effect", null))
        ];
    }
    static get is() { return "ion-segment-button"; }
    static get properties() { return { "activated": { "type": Boolean, "attr": "activated", "mutable": true }, "checked": { "type": Boolean, "attr": "checked" }, "color": { "type": String, "attr": "color" }, "disabled": { "type": Boolean, "attr": "disabled" }, "el": { "elementRef": true }, "href": { "type": String, "attr": "href" }, "mode": { "type": "Any", "attr": "mode" }, "value": { "type": String, "attr": "value", "mutable": true } }; }
    static get events() { return [{ "name": "ionClick", "method": "ionClick", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "ion-segment-button {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n}\n\n.segment-button {\n  border-radius: 0;\n  margin-left: 0;\n  margin-right: 0;\n  text-align: center;\n  position: relative;\n  display: block;\n  overflow: hidden;\n  border: 0;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-font-kerning: none;\n  font-kerning: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  contain: content;\n}\n\n.segment-button:active, .segment-button:focus {\n  outline: none;\n}\n\n.segment-button-md {\n  padding: 0 6px;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  height: 42px;\n  border-bottom-width: 2px;\n  border-bottom-style: solid;\n  border-bottom-color: rgba(0, 0, 0, 0.1);\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 40px;\n  text-transform: uppercase;\n  color: var(--ion-toolbar-md-color-active, var(--ion-toolbar-color-active, #4a4a4a));\n  background-color: transparent;\n  opacity: 0.7;\n  -webkit-transition: 100ms all linear;\n  transition: 100ms all linear;\n}\n\n.segment-button-md ion-icon {\n  font-size: 26px;\n  line-height: 40px;\n}\n\n.segment-button-md.activated, .segment-button-md.segment-activated {\n  border-color: var(--ion-toolbar-md-color-active, var(--ion-toolbar-color-active, #4a4a4a));\n  opacity: 1;\n}\n\n.segment-md .segment-button-disabled {\n  opacity: 0.3;\n  pointer-events: none;\n}\n\n.segment-md-primary .segment-button {\n  color: var(--ion-color-md-primary, var(--ion-color-primary, #488aff));\n}\n\n.segment-md-primary .segment-button.activated, .segment-md-primary .segment-button.segment-activated {\n  border-color: var(--ion-color-md-primary, var(--ion-color-primary, #488aff));\n  color: var(--ion-color-md-primary, var(--ion-color-primary, #488aff));\n}\n\n.segment-md-secondary .segment-button {\n  color: var(--ion-color-md-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.segment-md-secondary .segment-button.activated, .segment-md-secondary .segment-button.segment-activated {\n  border-color: var(--ion-color-md-secondary, var(--ion-color-secondary, #32db64));\n  color: var(--ion-color-md-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.segment-md-tertiary .segment-button {\n  color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.segment-md-tertiary .segment-button.activated, .segment-md-tertiary .segment-button.segment-activated {\n  border-color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #f4a942));\n  color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.segment-md-success .segment-button {\n  color: var(--ion-color-md-success, var(--ion-color-success, #10dc60));\n}\n\n.segment-md-success .segment-button.activated, .segment-md-success .segment-button.segment-activated {\n  border-color: var(--ion-color-md-success, var(--ion-color-success, #10dc60));\n  color: var(--ion-color-md-success, var(--ion-color-success, #10dc60));\n}\n\n.segment-md-warning .segment-button {\n  color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00));\n}\n\n.segment-md-warning .segment-button.activated, .segment-md-warning .segment-button.segment-activated {\n  border-color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00));\n  color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00));\n}\n\n.segment-md-danger .segment-button {\n  color: var(--ion-color-md-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.segment-md-danger .segment-button.activated, .segment-md-danger .segment-button.segment-activated {\n  border-color: var(--ion-color-md-danger, var(--ion-color-danger, #f53d3d));\n  color: var(--ion-color-md-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.segment-md-light .segment-button {\n  color: var(--ion-color-md-light, var(--ion-color-light, #f4f4f4));\n}\n\n.segment-md-light .segment-button.activated, .segment-md-light .segment-button.segment-activated {\n  border-color: var(--ion-color-md-light, var(--ion-color-light, #f4f4f4));\n  color: var(--ion-color-md-light, var(--ion-color-light, #f4f4f4));\n}\n\n.segment-md-medium .segment-button {\n  color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2));\n}\n\n.segment-md-medium .segment-button.activated, .segment-md-medium .segment-button.segment-activated {\n  border-color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2));\n  color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2));\n}\n\n.segment-md-dark .segment-button {\n  color: var(--ion-color-md-dark, var(--ion-color-dark, #222));\n}\n\n.segment-md-dark .segment-button.activated, .segment-md-dark .segment-button.segment-activated {\n  border-color: var(--ion-color-md-dark, var(--ion-color-dark, #222));\n  color: var(--ion-color-md-dark, var(--ion-color-dark, #222));\n}"; }
    static get styleMode() { return "md"; }
}

export { Segment as IonSegment, SegmentButton as IonSegmentButton };
