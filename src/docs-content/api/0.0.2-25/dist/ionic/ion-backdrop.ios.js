/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const { h, Context } = window.Ionic;

import { now } from './chunk1.js';

class Backdrop {
    constructor() {
        this.lastClick = -10000;
        this.visible = true;
        this.tappable = true;
        this.stopPropagation = true;
    }
    onTouchStart(ev) {
        this.lastClick = now(ev);
        this.emitTap(ev);
    }
    onMouseDown(ev) {
        if (this.lastClick < now(ev) - 2500) {
            this.emitTap(ev);
        }
    }
    emitTap(ev) {
        if (this.stopPropagation) {
            ev.preventDefault();
            ev.stopPropagation();
        }
        if (this.tappable) {
            this.ionBackdropTap.emit();
        }
    }
    hostData() {
        return {
            class: {
                'backdrop-hide': !this.visible,
                'backdrop-no-tappable': !this.tappable,
            }
        };
    }
    static get is() { return "ion-backdrop"; }
    static get host() { return { "theme": "backdrop" }; }
    static get properties() { return { "stopPropagation": { "type": Boolean, "attr": "stop-propagation" }, "tappable": { "type": Boolean, "attr": "tappable" }, "visible": { "type": Boolean, "attr": "visible" } }; }
    static get events() { return [{ "name": "ionBackdropTap", "method": "ionBackdropTap", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "ion-backdrop {\n  left: 0;\n  top: 0;\n  position: absolute;\n  z-index: 2;\n  display: block;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  opacity: .01;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -ms-touch-action: none;\n  touch-action: none;\n  contain: strict;\n}\n\nion-backdrop.backdrop-hide {\n  background: transparent;\n}\n\nion-backdrop.backdrop-no-tappable {\n  cursor: auto;\n}\n\n.backdrop-ios {\n  background-color: var(--ion-backdrop-ios-color, var(--ion-backdrop-color, #000));\n}"; }
    static get styleMode() { return "ios"; }
}

export { Backdrop as IonBackdrop };
