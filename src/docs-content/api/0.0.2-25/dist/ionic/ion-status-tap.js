/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const { h, Context } = window.Ionic;

import { domControllerAsync, now, pointerCoordX, pointerCoordY } from './chunk1.js';

class StatusTap {
    constructor() {
        this.duration = 300;
    }
    statusTap() {
        return this.tap();
    }
    mockTap() {
        return this.tap();
    }
    tap() {
        return domControllerAsync(this.dom.read, () => {
            const width = window.innerWidth;
            const height = window.innerWidth;
            const el = document.elementFromPoint(width / 2, height / 2);
            if (!el) {
                return null;
            }
            return el.closest('ion-scroll');
        }).then(([scroll]) => {
            return scroll.componentOnReady();
        }).then((scroll) => {
            return domControllerAsync(this.dom.write, () => {
                return scroll.scrollToTop(this.duration);
            });
        });
    }
    static get is() { return "ion-status-tap"; }
    static get properties() { return { "dom": { "context": "dom" }, "duration": { "type": Number, "attr": "duration" }, "mockTap": { "method": true } }; }
}

class TapClick {
    constructor() {
        this.lastTouch = -MOUSE_WAIT * 10;
        this.lastActivated = 0;
        this.cancelled = false;
        this.clearDefers = new WeakMap();
    }
    componentDidLoad() {
        if (this.isServer) {
            return;
        }
        this.app = this.el.closest('ion-app');
    }
    onBodyClick(ev) {
        if (this.cancelled || this.shouldCancel()) {
            ev.preventDefault();
            ev.stopPropagation();
        }
    }
    // Touch Events
    onTouchStart(ev) {
        this.lastTouch = now(ev);
        this.pointerDown(ev);
    }
    onTouchCancel(ev) {
        this.lastTouch = now(ev);
        this.pointerUp(ev);
    }
    onTouchEnd(ev) {
        this.lastTouch = now(ev);
        this.pointerUp(ev);
    }
    onMouseDown(ev) {
        const t = now(ev) - MOUSE_WAIT;
        if (this.lastTouch < t) {
            this.pointerDown(ev);
        }
    }
    onMouseUp(ev) {
        const t = now(ev) - MOUSE_WAIT;
        if (this.lastTouch < t) {
            this.pointerUp(ev);
        }
    }
    cancelActive() {
        clearTimeout(this.activeDefer);
        if (this.activatableEle) {
            this.removeActivated(false);
            this.activatableEle = null;
        }
        this.cancelled = true;
    }
    pointerDown(ev) {
        if (this.activatableEle) {
            return;
        }
        this.cancelled = this.shouldCancel();
        if (!this.cancelled) {
            this.setActivatedElement(getActivatableTarget(ev.target), ev);
        }
    }
    pointerUp(ev) {
        this.setActivatedElement(null, ev);
        if (this.cancelled) {
            ev.preventDefault();
        }
    }
    setActivatedElement(el, ev) {
        // do nothing
        const activatableEle = this.activatableEle;
        if (el && el === activatableEle) {
            return;
        }
        clearTimeout(this.activeDefer);
        this.activeDefer = null;
        const eventX = pointerCoordX(ev);
        const eventY = pointerCoordY(ev);
        // unactivate selected
        if (activatableEle) {
            if (this.clearDefers.has(activatableEle)) {
                throw new Error('internal error');
            }
            if (!activatableEle.classList.contains(ACTIVATED)) {
                this.addActivated(activatableEle, eventX, eventY);
            }
            this.removeActivated(true);
        }
        // activate
        if (el) {
            const deferId = this.clearDefers.get(el);
            if (deferId) {
                clearTimeout(deferId);
                this.clearDefers.delete(el);
            }
            el.classList.remove(ACTIVATED);
            this.activeDefer = setTimeout(() => {
                this.addActivated(el, eventX, eventY);
                this.activeDefer = null;
            }, ADD_ACTIVATED_DEFERS);
        }
        this.activatableEle = el;
    }
    addActivated(el, x, y) {
        this.lastActivated = Date.now();
        el.classList.add(ACTIVATED);
        const event = new CustomEvent('ionActivated', {
            bubbles: false,
            detail: { x, y }
        });
        el.dispatchEvent(event);
    }
    removeActivated(smooth) {
        const activatableEle = this.activatableEle;
        if (!activatableEle) {
            return;
        }
        const time = CLEAR_STATE_DEFERS - Date.now() + this.lastActivated;
        if (smooth && time > 0) {
            const deferId = setTimeout(() => {
                activatableEle.classList.remove(ACTIVATED);
                this.clearDefers.delete(activatableEle);
            }, CLEAR_STATE_DEFERS);
            this.clearDefers.set(activatableEle, deferId);
        }
        else {
            activatableEle.classList.remove(ACTIVATED);
        }
    }
    shouldCancel() {
        if (!this.app.isEnabled()) {
            console.debug('click prevent: appDisabled');
            return true;
        }
        return false;
    }
    static get is() { return "ion-tap-click"; }
    static get properties() { return { "el": { "elementRef": true }, "enableListener": { "context": "enableListener" }, "isServer": { "context": "isServer" } }; }
}
function getActivatableTarget(el) {
    return el.closest('a,button,[tappable]');
}
const ACTIVATED = 'activated';
const ADD_ACTIVATED_DEFERS = 200;
const CLEAR_STATE_DEFERS = 200;
const MOUSE_WAIT = 2500;

export { StatusTap as IonStatusTap, TapClick as IonTapClick };
