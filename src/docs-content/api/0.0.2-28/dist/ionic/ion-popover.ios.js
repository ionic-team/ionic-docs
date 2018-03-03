/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const { h, Context } = window.Ionic;

import { DomFrameworkDelegate } from './chunk4.js';
import { domControllerAsync, playAnimationAsync } from './chunk1.js';
import { createThemedClasses } from './chunk2.js';

/**
 * iOS Popover Enter Animation
 */
function iosEnterAnimation(Animation, baseEl, ev) {
    debugger;
    let originY = 'top';
    let originX = 'left';
    const contentEl = baseEl.querySelector('.popover-content');
    const contentDimentions = contentEl.getBoundingClientRect();
    const contentWidth = contentDimentions.width;
    const contentHeight = contentDimentions.height;
    const bodyWidth = window.innerWidth;
    const bodyHeight = window.innerHeight;
    // If ev was passed, use that for target element
    const targetDim = ev && ev.target && ev.target.getBoundingClientRect();
    const targetTop = targetDim && 'top' in targetDim
        ? targetDim.top
        : bodyHeight / 2 - contentHeight / 2;
    const targetLeft = targetDim && 'left' in targetDim ? targetDim.left : bodyWidth / 2;
    const targetWidth = (targetDim && targetDim.width) || 0;
    const targetHeight = (targetDim && targetDim.height) || 0;
    const arrowEl = baseEl.querySelector('.popover-arrow');
    const arrowDim = arrowEl.getBoundingClientRect();
    const arrowWidth = arrowDim.width;
    const arrowHeight = arrowDim.height;
    if (!targetDim) {
        arrowEl.style.display = 'none';
    }
    const arrowCSS = {
        top: targetTop + targetHeight,
        left: targetLeft + targetWidth / 2 - arrowWidth / 2
    };
    const popoverCSS = {
        top: targetTop + targetHeight + (arrowHeight - 1),
        left: targetLeft + targetWidth / 2 - contentWidth / 2
    };
    // If the popover left is less than the padding it is off screen
    // to the left so adjust it, else if the width of the popover
    // exceeds the body width it is off screen to the right so adjust
    //
    let checkSafeAreaLeft = false;
    let checkSafeAreaRight = false;
    // If the popover left is less than the padding it is off screen
    // to the left so adjust it, else if the width of the popover
    // exceeds the body width it is off screen to the right so adjust
    // 25 is a random/arbitrary number. It seems to work fine for ios11
    // and iPhoneX. Is it perfect? No. Does it work? Yes.
    if (popoverCSS.left < POPOVER_IOS_BODY_PADDING + 25) {
        checkSafeAreaLeft = true;
        popoverCSS.left = POPOVER_IOS_BODY_PADDING;
    }
    else if (contentWidth + POPOVER_IOS_BODY_PADDING + popoverCSS.left + 25 >
        bodyWidth) {
        // Ok, so we're on the right side of the screen,
        // but now we need to make sure we're still a bit further right
        // cus....notchurally... Again, 25 is random. It works tho
        checkSafeAreaRight = true;
        popoverCSS.left = bodyWidth - contentWidth - POPOVER_IOS_BODY_PADDING;
        originX = 'right';
    }
    // make it pop up if there's room above
    if ((targetTop + targetHeight + contentHeight) > bodyHeight &&
        (targetTop - contentHeight) > 0) {
        arrowCSS.top = targetTop - (arrowHeight + 1);
        console.log(arrowCSS);
        console.log(targetTop);
        console.log(contentHeight);
        popoverCSS.top = targetTop - contentHeight - (arrowHeight - 1);
        baseEl.className = baseEl.className + ' popover-bottom';
        originY = 'bottom';
        // If there isn't room for it to pop up above the target cut it off
    }
    else if (targetTop + targetHeight + contentHeight > bodyHeight) {
        contentEl.style.bottom = POPOVER_IOS_BODY_PADDING + '%';
    }
    arrowEl.style.top = arrowCSS.top + 'px';
    arrowEl.style.left = arrowCSS.left + 'px';
    contentEl.style.top = popoverCSS.top + 'px';
    contentEl.style.left = popoverCSS.left + 'px';
    if (checkSafeAreaLeft) {
        if (CSS.supports('left', 'constant(safe-area-inset-left)')) {
            contentEl.style.left = `calc(${popoverCSS.left}px + constant(safe-area-inset-left)`;
        }
        else if (CSS.supports('left', 'env(safe-area-inset-left)')) {
            contentEl.style.left = `calc(${popoverCSS.left}px + env(safe-area-inset-left)`;
        }
    }
    if (checkSafeAreaRight) {
        if (CSS.supports('right', 'constant(safe-area-inset-right)')) {
            contentEl.style.left = `calc(${popoverCSS.left}px - constant(safe-area-inset-right)`;
        }
        else if (CSS.supports('right', 'env(safe-area-inset-right)')) {
            contentEl.style.left = `calc(${popoverCSS.left}px - env(safe-area-inset-right)`;
        }
    }
    contentEl.style.transformOrigin = originY + ' ' + originX;
    const baseAnimation = new Animation();
    const backdropAnimation = new Animation();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    backdropAnimation.fromTo('opacity', 0.01, 0.08);
    const wrapperAnimation = new Animation();
    wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper'));
    wrapperAnimation.fromTo('opacity', 0.01, 1);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('ease')
        .duration(100)
        .add(backdropAnimation)
        .add(wrapperAnimation));
}
const POPOVER_IOS_BODY_PADDING = 5;

/**
 * iOS Popover Leave Animation
 */
function iosLeaveAnimation(Animation, baseEl) {
    const baseAnimation = new Animation();
    const backdropAnimation = new Animation();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    const wrapperAnimation = new Animation();
    wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper'));
    wrapperAnimation.fromTo('opacity', 0.99, 0);
    backdropAnimation.fromTo('opacity', 0.08, 0);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('ease')
        .duration(500)
        .add(backdropAnimation)
        .add(wrapperAnimation));
}

/**
 * Md Popover Enter Animation
 */
function mdEnterAnimation(Animation, baseEl, ev) {
    let originY = 'top';
    let originX = 'left';
    const contentEl = baseEl.querySelector('.popover-content');
    const contentDimentions = contentEl.getBoundingClientRect();
    const contentWidth = contentDimentions.width;
    const contentHeight = contentDimentions.height;
    const bodyWidth = window.innerWidth;
    const bodyHeight = window.innerHeight;
    // If ev was passed, use that for target element
    const targetDim = ev && ev.target && ev.target.getBoundingClientRect();
    const targetTop = targetDim && 'top' in targetDim
        ? targetDim.top
        : bodyHeight / 2 - contentHeight / 2;
    const targetLeft = targetDim && 'left' in targetDim
        ? targetDim.left
        : bodyWidth / 2 - contentWidth / 2;
    const targetHeight = (targetDim && targetDim.height) || 0;
    const popoverCSS = {
        top: targetTop,
        left: targetLeft
    };
    // If the popover left is less than the padding it is off screen
    // to the left so adjust it, else if the width of the popover
    // exceeds the body width it is off screen to the right so adjust
    if (popoverCSS.left < POPOVER_MD_BODY_PADDING) {
        popoverCSS.left = POPOVER_MD_BODY_PADDING;
    }
    else if (contentWidth + POPOVER_MD_BODY_PADDING + popoverCSS.left >
        bodyWidth) {
        popoverCSS.left = bodyWidth - contentWidth - POPOVER_MD_BODY_PADDING;
        originX = 'right';
    }
    // If the popover when popped down stretches past bottom of screen,
    // make it pop up if there's room above
    if (targetTop + targetHeight + contentHeight > bodyHeight &&
        targetTop - contentHeight > 0) {
        popoverCSS.top = targetTop - contentHeight;
        baseEl.className = baseEl.className + ' popover-bottom';
        originY = 'bottom';
        // If there isn't room for it to pop up above the target cut it off
    }
    else if (targetTop + targetHeight + contentHeight > bodyHeight) {
        contentEl.style.bottom = POPOVER_MD_BODY_PADDING + 'px';
    }
    contentEl.style.top = popoverCSS.top + 'px';
    contentEl.style.left = popoverCSS.left + 'px';
    contentEl.style.transformOrigin = originY + ' ' + originX;
    const baseAnimation = new Animation();
    const backdropAnimation = new Animation();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    backdropAnimation.fromTo('opacity', 0.01, 0.08);
    const wrapperAnimation = new Animation();
    wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper'));
    wrapperAnimation.fromTo('opacity', 0.01, 1);
    const contentAnimation = new Animation();
    contentAnimation.addElement(baseEl.querySelector('.popover-content'));
    contentAnimation.fromTo('scale', 0.001, 1);
    const viewportAnimation = new Animation();
    viewportAnimation.addElement(baseEl.querySelector('.popover-viewport'));
    viewportAnimation.fromTo('opacity', 0.01, 1);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(0.36,0.66,0.04,1)')
        .duration(300)
        .add(backdropAnimation)
        .add(wrapperAnimation)
        .add(contentAnimation)
        .add(viewportAnimation));
}
const POPOVER_MD_BODY_PADDING = 12;

/**
 * Md Popover Leave Animation
 */
function mdLeaveAnimation(Animation, baseEl) {
    const baseAnimation = new Animation();
    const backdropAnimation = new Animation();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    const wrapperAnimation = new Animation();
    wrapperAnimation.addElement(baseEl.querySelector('.popover-wrapper'));
    wrapperAnimation.fromTo('opacity', 0.99, 0);
    backdropAnimation.fromTo('opacity', 0.08, 0);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('ease')
        .duration(500)
        .add(backdropAnimation)
        .add(wrapperAnimation));
}

class Popover {
    constructor() {
        /**
         * The data to pass to the popover component.
         */
        this.data = {};
        /**
         * If true, the popover will be dismissed when the backdrop is clicked. Defaults to `true`.
         */
        this.enableBackdropDismiss = true;
        /**
         * If true, a backdrop will be displayed behind the popover. Defaults to `true`.
         */
        this.showBackdrop = true;
        /**
         * If true, the popover will be translucent. Defaults to `false`.
         */
        this.translucent = false;
        /**
         * If true, the popover will animate. Defaults to `true`.
         */
        this.willAnimate = true;
    }
    componentDidLoad() {
        this.ionPopoverDidLoad.emit();
    }
    componentDidEnter() {
        this.ionPopoverDidPresent.emit();
    }
    componentDidUnload() {
        this.ionPopoverDidUnload.emit();
    }
    onDismiss(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        this.dismiss();
    }
    onBackdropTap() {
        this.dismiss();
    }
    /**
     * Present the popover overlay after it has been created.
     */
    present() {
        if (this.animation) {
            this.animation.destroy();
            this.animation = null;
        }
        this.ionPopoverWillPresent.emit();
        this.el.style.zIndex = `${10000 + this.popoverId}`;
        // get the user's animation fn if one was provided
        const animationBuilder = this.enterAnimation || this.config.get('popoverEnter', this.mode === 'ios' ? iosEnterAnimation : mdEnterAnimation);
        const userComponentParent = this.el.querySelector(`.${USER_COMPONENT_POPOVER_CONTAINER_CLASS}`);
        if (!this.delegate) {
            this.delegate = new DomFrameworkDelegate();
        }
        const cssClasses = [];
        if (this.cssClass && this.cssClass.length) {
            cssClasses.push(this.cssClass);
        }
        // add the modal by default to the data being passed
        this.data = this.data || {};
        this.data.modal = this.el;
        return this.delegate.attachViewToDom(userComponentParent, this.component, this.data, cssClasses)
            .then((mountingData) => {
            this.usersComponentElement = mountingData.element;
            return domControllerAsync(this.dom.raf)
                .then(() => this.animationCtrl.create(animationBuilder, this.el, this.ev));
        })
            .then((animation) => {
            this.animation = animation;
            if (!this.willAnimate)
                this.animation = animation.duration(0);
            return playAnimationAsync(animation);
        })
            .then((animation) => {
            animation.destroy();
            this.componentDidEnter();
        });
    }
    /**
     * Dismiss the popover overlay after it has been presented.
     */
    dismiss(data, role) {
        if (this.animation) {
            this.animation.destroy();
            this.animation = null;
        }
        this.ionPopoverWillDismiss.emit({ data, role });
        if (!this.delegate) {
            this.delegate = new DomFrameworkDelegate();
        }
        const animationBuilder = this.leaveAnimation || this.config.get('popoverLeave', this.mode === 'ios' ? iosLeaveAnimation : mdLeaveAnimation);
        return this.animationCtrl.create(animationBuilder, this.el)
            .then(animation => {
            this.animation = animation;
            return playAnimationAsync(animation);
        })
            .then((animation) => {
            animation.destroy();
            this.ionPopoverDidDismiss.emit({ data, role });
        })
            .then(() => {
            return domControllerAsync(this.dom.write, () => {
                const userComponentParent = this.el.querySelector(`.${USER_COMPONENT_POPOVER_CONTAINER_CLASS}`);
                this.delegate.removeViewFromDom(userComponentParent, this.usersComponentElement);
                this.el.parentNode.removeChild(this.el);
            });
        });
    }
    hostData() {
        const themedClasses = this.translucent ? createThemedClasses(this.mode, this.color, 'popover-translucent') : {};
        return {
            class: Object.assign({}, themedClasses)
        };
    }
    render() {
        const wrapperClasses = createThemedClasses(this.mode, this.color, 'popover-wrapper');
        return [
            h("ion-backdrop", { tappable: this.enableBackdropDismiss }),
            h("div", { class: wrapperClasses },
                h("div", { class: 'popover-arrow' }),
                h("div", { class: 'popover-content' },
                    h("div", { class: USER_COMPONENT_POPOVER_CONTAINER_CLASS })))
        ];
    }
    static get is() { return "ion-popover"; }
    static get host() { return { "theme": "popover" }; }
    static get properties() { return { "animationCtrl": { "connect": "ion-animation-controller" }, "color": { "type": String, "attr": "color" }, "component": { "type": String, "attr": "component" }, "config": { "context": "config" }, "cssClass": { "type": String, "attr": "css-class" }, "data": { "type": "Any", "attr": "data" }, "delegate": { "type": "Any", "attr": "delegate", "mutable": true }, "dismiss": { "method": true }, "dom": { "context": "dom" }, "el": { "elementRef": true }, "enableBackdropDismiss": { "type": Boolean, "attr": "enable-backdrop-dismiss" }, "enterAnimation": { "type": "Any", "attr": "enter-animation" }, "ev": { "type": "Any", "attr": "ev" }, "leaveAnimation": { "type": "Any", "attr": "leave-animation" }, "mode": { "type": "Any", "attr": "mode" }, "present": { "method": true }, "showBackdrop": { "type": Boolean, "attr": "show-backdrop" }, "translucent": { "type": Boolean, "attr": "translucent" }, "willAnimate": { "type": Boolean, "attr": "will-animate" } }; }
    static get events() { return [{ "name": "ionPopoverDidLoad", "method": "ionPopoverDidLoad", "bubbles": true, "cancelable": true, "composed": true }, { "name": "ionPopoverDidPresent", "method": "ionPopoverDidPresent", "bubbles": true, "cancelable": true, "composed": true }, { "name": "ionPopoverWillPresent", "method": "ionPopoverWillPresent", "bubbles": true, "cancelable": true, "composed": true }, { "name": "ionPopoverWillDismiss", "method": "ionPopoverWillDismiss", "bubbles": true, "cancelable": true, "composed": true }, { "name": "ionPopoverDidDismiss", "method": "ionPopoverDidDismiss", "bubbles": true, "cancelable": true, "composed": true }, { "name": "ionPopoverDidUnload", "method": "ionPopoverDidUnload", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "ion-popover {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  z-index: 1000;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\n.popover-wrapper {\n  z-index: 10;\n  opacity: 0;\n}\n\n.popover-content {\n  position: absolute;\n  z-index: 10;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: auto;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n\n.popover-content ion-content,\n.popover-content ion-scroll {\n  contain: none;\n}\n\n.popover-content ion-scroll {\n  position: relative;\n}\n\nion-popover-controller {\n  display: none;\n}\n\n.popover-ios .popover-content {\n  border-radius: 10px;\n  width: 200px;\n  min-width: 0;\n  min-height: 0;\n  max-height: 90%;\n  color: var(--ion-text-ios-color, var(--ion-text-color, #000));\n  background-color: var(--ion-background-ios-color, var(--ion-background-color, #fff));\n}\n\n.popover-ios .popover-arrow {\n  position: absolute;\n  display: block;\n  overflow: hidden;\n  width: 20px;\n  height: 10px;\n}\n\n.popover-ios .popover-arrow::after {\n  left: 3px;\n  top: 3px;\n  border-radius: 3px;\n  position: absolute;\n  z-index: 10;\n  width: 14px;\n  height: 14px;\n  background-color: var(--ion-background-ios-color, var(--ion-background-color, #fff));\n  content: \"\";\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n.popover-ios.popover-bottom .popover-arrow {\n  top: auto;\n  bottom: -10px;\n}\n\n.popover-ios.popover-bottom .popover-arrow::after {\n  top: -6px;\n}\n\n.popover-translucent-ios .popover-content,\n.popover-translucent-ios .popover-arrow::after {\n  background: rgba(255, 255, 255, var(--ion-alpha-ios-high, var(--ion-alpha-high, 0.75)));\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  backdrop-filter: saturate(180%) blur(20px);\n}"; }
    static get styleMode() { return "ios"; }
}

const USER_COMPONENT_POPOVER_CONTAINER_CLASS = 'popover-viewport';

let ids = 0;
const popovers = new Map();
class PopoverController {
    popoverWillPresent(ev) {
        popovers.set(ev.target.popoverId, ev.target);
    }
    popoverWillDismiss(ev) {
        popovers.delete(ev.target.popoverId);
    }
    escapeKeyUp() {
        removeLastPopover();
    }
    /*
     * Create a popover overlay with popover options.
     */
    create(opts) {
        // create ionic's wrapping ion-popover component
        const popoverElement = document.createElement('ion-popover');
        // give this popover a unique id
        popoverElement.popoverId = ids++;
        // convert the passed in popover options into props
        // that get passed down into the new popover
        Object.assign(popoverElement, opts);
        // append the popover element to the document body
        const appRoot = document.querySelector('ion-app') || document.body;
        appRoot.appendChild(popoverElement);
        return popoverElement.componentOnReady();
    }
    /*
     * Dismiss the open popover overlay.
     */
    dismiss(data, role, popoverId = -1) {
        popoverId = popoverId >= 0 ? popoverId : getHighestId();
        const popover = popovers.get(popoverId);
        if (!popover) {
            return Promise.reject('popover does not exist');
        }
        return popover.dismiss(data, role);
    }
    /*
     * Get the most recently opened popover overlay.
     */
    getTop() {
        return popovers.get(getHighestId());
    }
    static get is() { return "ion-popover-controller"; }
    static get properties() { return { "create": { "method": true }, "dismiss": { "method": true }, "getTop": { "method": true } }; }
}
function getHighestId() {
    let minimum = -1;
    popovers.forEach((_popover, id) => {
        if (id > minimum) {
            minimum = id;
        }
    });
    return minimum;
}
function removeLastPopover() {
    const toRemove = popovers.get(getHighestId());
    return toRemove ? toRemove.dismiss() : Promise.resolve();
}

export { Popover as IonPopover, PopoverController as IonPopoverController };
