/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const { h, Context } = window.Ionic;

import { isRightSide, swipeShouldReset } from './chunk1.js';

class ItemOption {
    constructor() {
        /**
         * If true, the user cannot interact with the item option. Defaults to `false`.
         */
        this.disabled = false;
        /**
         * If true, the option will expand to take up the available width and cover any other options. Defaults to `false`.
         */
        this.expandable = false;
    }
    clickedOptionButton(ev) {
        const el = ev.target.closest('ion-item-option');
        return !!el;
    }
    hostData() {
        return {
            class: {
                'item-option-expandable': this.expandable
            }
        };
    }
    render() {
        const TagType = this.href ? 'a' : 'button';
        return (h(TagType, { class: 'item-option-button', disabled: this.disabled, href: this.href, onClick: this.clickedOptionButton.bind(this) },
            h("span", { class: 'item-option-button-inner' },
                h("slot", { name: 'start' }),
                h("slot", { name: 'top' }),
                h("slot", { name: 'icon-only' }),
                h("slot", null),
                h("slot", { name: 'bottom' }),
                h("slot", { name: 'end' }))));
    }
    static get is() { return "ion-item-option"; }
    static get host() { return { "theme": "item-option" }; }
    static get properties() { return { "color": { "type": String, "attr": "color" }, "disabled": { "type": Boolean, "attr": "disabled" }, "expandable": { "type": Boolean, "attr": "expandable" }, "href": { "type": String, "attr": "href" }, "mode": { "type": "Any", "attr": "mode" } }; }
    static get style() { return ".item-option-button {\n  padding: 0 0.7em;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  font-size: 1em;\n  color: inherit;\n  background: none;\n}\n\nion-item-options .item-option-button-inner {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n\n.item-option-button-inner {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-flow: row nowrap;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n\n.item-option-button [slot=\"icon-only\"] {\n  padding: 0;\n  min-width: .9em;\n  font-size: 1.8em;\n}\n\n.item-option-expandable {\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -webkit-transition-duration: 0;\n  transition-duration: 0;\n  -webkit-transition-property: none;\n  transition-property: none;\n  -webkit-transition-timing-function: cubic-bezier(0.65, 0.05, 0.36, 1);\n  transition-timing-function: cubic-bezier(0.65, 0.05, 0.36, 1);\n}\n\n.item-sliding-active-swipe-right .item-options-right .item-option-expandable {\n  -webkit-transition-duration: .6s;\n  transition-duration: .6s;\n  -webkit-transition-property: padding-left;\n  transition-property: padding-left;\n  padding-left: 90%;\n  -webkit-box-ordinal-group: 2;\n  -webkit-order: 1;\n  -ms-flex-order: 1;\n  order: 1;\n}\n\n.item-sliding-active-swipe-left .item-options-left .item-option-expandable {\n  -webkit-transition-duration: .6s;\n  transition-duration: .6s;\n  -webkit-transition-property: padding-right;\n  transition-property: padding-right;\n  padding-right: 90%;\n  -webkit-box-ordinal-group: 0;\n  -webkit-order: -1;\n  -ms-flex-order: -1;\n  order: -1;\n}\n\n.item-option-ios {\n  font-size: 16px;\n  color: var(--ion-color-ios-primary-contrast, var(--ion-color-primary-contrast, #fff));\n  background-color: var(--ion-color-ios-primary, var(--ion-color-primary, #488aff));\n}\n\n.list-ios .item-options-right ion-item-option:last-child {\n  padding-right: calc(constant(safe-area-inset-right) + 0.7em);\n  padding-right: calc(env(safe-area-inset-right) + 0.7em);\n}\n\n.list-ios .item-options-left ion-item-option:first-child {\n  padding-left: calc(constant(safe-area-inset-left) + 0.7em);\n  padding-left: calc(env(safe-area-inset-left) + 0.7em);\n}\n\n.item-option-ios-primary {\n  color: var(--ion-color-ios-primary-contrast, var(--ion-color-primary-contrast, #fff));\n  background-color: var(--ion-color-ios-primary, var(--ion-color-primary, #488aff));\n}\n\n.item-option-ios-secondary {\n  color: var(--ion-color-ios-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n  background-color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.item-option-ios-tertiary {\n  color: var(--ion-color-ios-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n  background-color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.item-option-ios-success {\n  color: var(--ion-color-ios-success-contrast, var(--ion-color-success-contrast, #fff));\n  background-color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60));\n}\n\n.item-option-ios-warning {\n  color: var(--ion-color-ios-warning-contrast, var(--ion-color-warning-contrast, #000));\n  background-color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00));\n}\n\n.item-option-ios-danger {\n  color: var(--ion-color-ios-danger-contrast, var(--ion-color-danger-contrast, #fff));\n  background-color: var(--ion-color-ios-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.item-option-ios-light {\n  color: var(--ion-color-ios-light-contrast, var(--ion-color-light-contrast, #000));\n  background-color: var(--ion-color-ios-light, var(--ion-color-light, #f4f4f4));\n}\n\n.item-option-ios-medium {\n  color: var(--ion-color-ios-medium-contrast, var(--ion-color-medium-contrast, #000));\n  background-color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2));\n}\n\n.item-option-ios-dark {\n  color: var(--ion-color-ios-dark-contrast, var(--ion-color-dark-contrast, #fff));\n  background-color: var(--ion-color-ios-dark, var(--ion-color-dark, #222));\n}"; }
    static get styleMode() { return "ios"; }
}

class ItemOptions {
    constructor() {
        /**
         * The side the option button should be on. Defaults to `"right"`.
         * If you have multiple `ion-item-options`, a side must be provided for each.
         */
        this.side = 'right';
    }
    isRightSide() {
        return isRightSide(this.side, true);
    }
    width() {
        return this.el.offsetWidth;
    }
    fireSwipeEvent(value) {
        this.ionSwipe.emit(value);
    }
    hostData() {
        return {
            class: {
                'item-options-left': !this.isRightSide(),
                'item-options-right': this.isRightSide()
            }
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-item-options"; }
    static get properties() { return { "el": { "elementRef": true }, "fireSwipeEvent": { "method": true }, "isRightSide": { "method": true }, "side": { "type": "Any", "attr": "side" }, "width": { "method": true } }; }
    static get events() { return [{ "name": "ionSwipe", "method": "ionSwipe", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "ion-item-options {\n  position: absolute;\n  z-index: 1;\n  display: none;\n  height: 100%;\n  font-size: 14px;\n  top: 0;\n  right: 0;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n}\n\nion-item-options.hydrated {\n  visibility: hidden;\n}\n\n.item-options-left {\n  right: auto;\n  left: 0;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n}\n\n.item-sliding-active-slide ion-item-options {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.item-sliding-active-slide.item-sliding-active-options-left .item-options-left,\n.item-sliding-active-slide.item-sliding-active-options-right ion-item-options:not(.item-options-left) {\n  width: 100%;\n  visibility: visible;\n}\n\n.list-ios ion-item-options {\n  border-bottom: 0.55px solid var(--ion-item-ios-border-color, var(--ion-item-border-color, #c8c7cc));\n}\n\n.list-ios[no-lines] ion-item-options {\n  border-width: 0;\n}"; }
    static get styleMode() { return "ios"; }
}

const SWIPE_MARGIN = 30;
const ELASTIC_FACTOR = 0.55;
class ItemSliding {
    constructor() {
        this.openAmount = 0;
        this.initialOpenAmount = 0;
        this.optsWidthRightSide = 0;
        this.optsWidthLeftSide = 0;
        this.optsDirty = true;
        this.state = 2 /* Disabled */;
    }
    componentDidLoad() {
        this.item = this.el.querySelector('ion-item');
        this.list = this.el.closest('ion-list');
        this.updateOptions();
    }
    componentDidUnload() {
        this.item = this.list = this.leftOptions = this.rightOptions = null;
    }
    /**
     * Get the amount the item is open in pixels.
     */
    getOpenAmount() {
        return this.openAmount;
    }
    /**
     * Get the ratio of the open amount of the item compared to the width of the options.
     * If the number returned is positive, then the options on the right side are open.
     * If the number returned is negative, then the options on the left side are open.
     * If the absolute value of the number is greater than 1, the item is open more than
     * the width of the options.
     */
    getSlidingRatio() {
        if (this.openAmount > 0) {
            return this.openAmount / this.optsWidthRightSide;
        }
        else if (this.openAmount < 0) {
            return this.openAmount / this.optsWidthLeftSide;
        }
        else {
            return 0;
        }
    }
    /**
     * Close the sliding item. Items can also be closed from the [List](../../list/List).
     */
    close() {
        this.setOpenAmount(0, true);
    }
    /**
     * Close all of the sliding items in the list. Items can also be closed from the [List](../../list/List).
     */
    closeOpened() {
        return this.list && this.list.closeSlidingItems();
    }
    updateOptions() {
        const options = this.el.querySelectorAll('ion-item-options');
        let sides = 0;
        // Reset left and right options in case they were removed
        this.leftOptions = this.rightOptions = null;
        for (let i = 0; i < options.length; i++) {
            const option = options.item(i);
            if (option.isRightSide()) {
                this.rightOptions = option;
                sides |= 2 /* Right */;
            }
            else {
                this.leftOptions = option;
                sides |= 1 /* Left */;
            }
        }
        this.optsDirty = true;
        this.sides = sides;
    }
    canStart() {
        const selected = this.list && this.list.getOpenedItem();
        if (selected && selected !== this) {
            this.closeOpened();
            return false;
        }
        return true;
    }
    onDragStart() {
        this.list && this.list.setOpenedItem(this);
        if (this.tmr) {
            clearTimeout(this.tmr);
            this.tmr = null;
        }
        if (this.openAmount === 0) {
            this.optsDirty = true;
            this.state = 4 /* Enabled */;
        }
        this.initialOpenAmount = this.openAmount;
        this.item.style.transition = 'none';
    }
    onDragMove(gesture) {
        if (this.optsDirty) {
            this.calculateOptsWidth();
        }
        let openAmount = this.initialOpenAmount - gesture.deltaX;
        switch (this.sides) {
            case 2 /* Right */:
                openAmount = Math.max(0, openAmount);
                break;
            case 1 /* Left */:
                openAmount = Math.min(0, openAmount);
                break;
            case 3 /* Both */: break;
            case 0 /* None */: return;
            default:
                console.warn('invalid ItemSideFlags value', this.sides);
                break;
        }
        let optsWidth;
        if (openAmount > this.optsWidthRightSide) {
            optsWidth = this.optsWidthRightSide;
            openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
        }
        else if (openAmount < -this.optsWidthLeftSide) {
            optsWidth = -this.optsWidthLeftSide;
            openAmount = optsWidth + (openAmount - optsWidth) * ELASTIC_FACTOR;
        }
        this.setOpenAmount(openAmount, false);
    }
    onDragEnd(gesture) {
        const velocity = gesture.velocityX;
        let restingPoint = (this.openAmount > 0)
            ? this.optsWidthRightSide
            : -this.optsWidthLeftSide;
        // Check if the drag didn't clear the buttons mid-point
        // and we aren't moving fast enough to swipe open
        const isResetDirection = (this.openAmount > 0) === !(velocity < 0);
        const isMovingFast = Math.abs(velocity) > 0.3;
        const isOnCloseZone = Math.abs(this.openAmount) < Math.abs(restingPoint / 2);
        if (swipeShouldReset(isResetDirection, isMovingFast, isOnCloseZone)) {
            restingPoint = 0;
        }
        this.setOpenAmount(restingPoint, true);
        if (this.state & 32 /* SwipeRight */) {
            this.rightOptions.fireSwipeEvent(this);
        }
        else if (this.state & 64 /* SwipeLeft */) {
            this.leftOptions.fireSwipeEvent(this);
        }
    }
    calculateOptsWidth() {
        this.optsWidthRightSide = 0;
        if (this.rightOptions) {
            this.optsWidthRightSide = this.rightOptions.width();
        }
        this.optsWidthLeftSide = 0;
        if (this.leftOptions) {
            this.optsWidthLeftSide = this.leftOptions.width();
        }
        this.optsDirty = false;
    }
    setOpenAmount(openAmount, isFinal) {
        if (this.tmr) {
            clearTimeout(this.tmr);
            this.tmr = null;
        }
        const style = this.item.style;
        this.openAmount = openAmount;
        if (isFinal) {
            style.transition = '';
        }
        if (openAmount > 0) {
            this.state = (openAmount >= (this.optsWidthRightSide + SWIPE_MARGIN))
                ? 8 /* Right */ | 32 /* SwipeRight */
                : 8 /* Right */;
        }
        else if (openAmount < 0) {
            this.state = (openAmount <= (-this.optsWidthLeftSide - SWIPE_MARGIN))
                ? 16 /* Left */ | 64 /* SwipeLeft */
                : 16 /* Left */;
        }
        else {
            this.tmr = window.setTimeout(() => {
                this.state = 2 /* Disabled */;
                this.tmr = null;
            }, 600);
            this.list && this.list.setOpenedItem(null);
            style.transform = '';
            return;
        }
        style.transform = `translate3d(${-openAmount}px,0,0)`;
        this.ionDrag.emit(this);
    }
    hostData() {
        return {
            class: {
                'item-sliding': true,
                'item-sliding-active-slide': (this.state !== 2 /* Disabled */),
                'item-sliding-active-options-right': !!(this.state & 8 /* Right */),
                'item-sliding-active-options-left': !!(this.state & 16 /* Left */),
                'item-sliding-active-swipe-right': !!(this.state & 32 /* SwipeRight */),
                'item-sliding-active-swipe-left': !!(this.state & 64 /* SwipeLeft */)
            }
        };
    }
    render() {
        return (h("ion-gesture", Object.assign({}, {
            'canStart': this.canStart.bind(this),
            'onStart': this.onDragStart.bind(this),
            'onMove': this.onDragMove.bind(this),
            'onEnd': this.onDragEnd.bind(this),
            'gestureName': 'item-swipe',
            'gesturePriority': -10,
            'type': 'pan',
            'direction': 'x',
            'maxAngle': 20,
            'threshold': 5,
            'attachTo': 'parent'
        }),
            h("slot", null)));
    }
    static get is() { return "ion-item-sliding"; }
    static get properties() { return { "close": { "method": true }, "closeOpened": { "method": true }, "el": { "elementRef": true }, "getOpenAmount": { "method": true }, "getSlidingRatio": { "method": true }, "state": { "state": true } }; }
    static get events() { return [{ "name": "ionDrag", "method": "ionDrag", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "ion-item-sliding {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  width: 100%;\n}\n\n.item-sliding-active-slide ion-item,\n.item-sliding-active-slide ion-item.activated {\n  position: relative;\n  z-index: 2;\n  opacity: 1;\n  -webkit-transition: -webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: -webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1), -webkit-transform 500ms cubic-bezier(0.36, 0.66, 0.04, 1);\n  pointer-events: none;\n  will-change: transform;\n}\n\n.list-ios ion-item-sliding {\n  background-color: var(--ion-item-ios-background-color, var(--ion-background-ios-color, var(--ion-background-color, #fff)));\n}"; }
    static get styleMode() { return "ios"; }
}

export { ItemOption as IonItemOption, ItemOptions as IonItemOptions, ItemSliding as IonItemSliding };
