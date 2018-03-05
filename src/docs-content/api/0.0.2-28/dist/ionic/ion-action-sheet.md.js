/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const { h, Context } = window.Ionic;

import { domControllerAsync, isDef, playAnimationAsync } from './chunk1.js';
import { createThemedClasses, getClassMap } from './chunk2.js';

/**
 * iOS Action Sheet Enter Animation
 */
function iosEnterAnimation(Animation, baseEl) {
    const baseAnimation = new Animation();
    const backdropAnimation = new Animation();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    const wrapperAnimation = new Animation();
    wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper'));
    backdropAnimation.fromTo('opacity', 0.01, 0.4);
    wrapperAnimation.fromTo('translateY', '100%', '0%');
    const ani = baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .add(backdropAnimation)
        .add(wrapperAnimation);
    return Promise.resolve(ani);
}

/**
 * iOS Action Sheet Leave Animation
 */
function iosLeaveAnimation(Animation, baseEl) {
    const baseAnimation = new Animation();
    const backdropAnimation = new Animation();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    const wrapperAnimation = new Animation();
    wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper'));
    backdropAnimation.fromTo('opacity', 0.4, 0);
    wrapperAnimation.fromTo('translateY', '0%', '100%');
    const ani = baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(450)
        .add(backdropAnimation)
        .add(wrapperAnimation);
    return Promise.resolve(ani);
}

/**
 * MD Action Sheet Enter Animation
 */
function mdEnterAnimation(Animation, baseEl) {
    const baseAnimation = new Animation();
    const backdropAnimation = new Animation();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    const wrapperAnimation = new Animation();
    wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper'));
    backdropAnimation.fromTo('opacity', 0.01, 0.26);
    wrapperAnimation.fromTo('translateY', '100%', '0%');
    const ani = baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .add(backdropAnimation)
        .add(wrapperAnimation);
    return Promise.resolve(ani);
}

/**
 * MD Action Sheet Leave Animation
 */
function mdLeaveAnimation(Animation, baseEl) {
    const baseAnimation = new Animation();
    const backdropAnimation = new Animation();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    const wrapperAnimation = new Animation();
    wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper'));
    backdropAnimation.fromTo('opacity', 0.26, 0);
    wrapperAnimation.fromTo('translateY', '0%', '100%');
    const ani = baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(450)
        .add(backdropAnimation)
        .add(wrapperAnimation);
    return Promise.resolve(ani);
}

class ActionSheet {
    constructor() {
        this.animation = null;
        /**
         * If true, the action sheet will be dismissed when the backdrop is clicked. Defaults to `true`.
         */
        this.enableBackdropDismiss = true;
        /**
         * If true, the action sheet will be translucent. Defaults to `false`.
         */
        this.translucent = false;
        /**
         * If true, the action sheet will animate. Defaults to `true`.
         */
        this.willAnimate = true;
    }
    componentDidLoad() {
        this.ionActionSheetDidLoad.emit();
    }
    componentDidUnload() {
        this.ionActionSheetDidUnload.emit();
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
     * Present the action sheet overlay after it has been created.
     */
    present() {
        this.ionActionSheetWillPresent.emit();
        this.el.style.zIndex = `${20000 + this.actionSheetId}`;
        // get the user's animation fn if one was provided
        const animationBuilder = this.enterAnimation || this.config.get('actionSheetEnter', this.mode === 'ios' ? iosEnterAnimation : mdEnterAnimation);
        // build the animation and kick it off
        return this.playAnimation(animationBuilder).then(() => {
            this.ionActionSheetDidPresent.emit();
        });
    }
    /**
     * Dismiss the action sheet overlay after it has been presented.
     */
    dismiss(data, role) {
        this.ionActionSheetWillDismiss.emit({ data, role });
        const animationBuilder = this.leaveAnimation || this.config.get('actionSheetLeave', this.mode === 'ios' ? iosLeaveAnimation : mdLeaveAnimation);
        return this.playAnimation(animationBuilder).then(() => {
            this.ionActionSheetDidDismiss.emit({ data, role });
            return domControllerAsync(this.dom.write, () => {
                this.el.parentNode.removeChild(this.el);
            });
        });
    }
    playAnimation(animationBuilder) {
        if (this.animation) {
            this.animation.destroy();
            this.animation = null;
        }
        return this.animationCtrl.create(animationBuilder, this.el).then(animation => {
            this.animation = animation;
            // Check if prop animate is false or if the config for animate is defined/false
            if (!this.willAnimate || (isDef(this.config.get('willAnimate')) && this.config.get('willAnimate') === false)) {
                // if the duration is 0, it won't actually animate I don't think
                // TODO - validate this
                this.animation = animation.duration(0);
            }
            return playAnimationAsync(animation);
        }).then((animation) => {
            animation.destroy();
            this.animation = null;
        });
    }
    buttonClick(button) {
        let shouldDismiss = true;
        if (button.handler) {
            if (button.handler() === false) {
                shouldDismiss = false;
            }
        }
        if (shouldDismiss) {
            this.dismiss();
        }
    }
    hostData() {
        const themedClasses = this.translucent ? createThemedClasses(this.mode, this.color, 'action-sheet-translucent') : {};
        return {
            class: Object.assign({}, themedClasses, getClassMap(this.cssClass))
        };
    }
    render() {
        const allButtons = this.buttons.map(b => {
            if (typeof b === 'string') {
                b = { text: b };
            }
            if (!b.cssClass) {
                b.cssClass = '';
            }
            return b;
        });
        const cancelButton = allButtons.find(b => b.role === 'cancel');
        const buttons = allButtons.filter(b => b.role !== 'cancel');
        return [
            h("ion-backdrop", { tappable: this.enableBackdropDismiss }),
            h("div", { class: 'action-sheet-wrapper', role: 'dialog' },
                h("div", { class: 'action-sheet-container' },
                    h("div", { class: 'action-sheet-group' },
                        this.title
                            ? h("div", { class: 'action-sheet-title' },
                                this.title,
                                this.subTitle
                                    ? h("div", { class: 'action-sheet-sub-title' }, this.subTitle)
                                    : null)
                            : null,
                        buttons.map(b => h("button", { class: buttonClass(b), onClick: () => this.buttonClick(b) },
                            h("span", { class: 'action-sheet-button-inner' },
                                b.icon
                                    ? h("ion-icon", { name: b.icon, class: 'action-sheet-icon' })
                                    : null,
                                b.text)))),
                    cancelButton
                        ? h("div", { class: 'action-sheet-group action-sheet-group-cancel' },
                            h("button", { class: buttonClass(cancelButton), onClick: () => this.buttonClick(cancelButton) },
                                h("span", { class: 'action-sheet-button-inner' },
                                    cancelButton.icon
                                        ? h("ion-icon", { name: cancelButton.icon, class: 'action-sheet-icon' })
                                        : null,
                                    cancelButton.text)))
                        : null))
        ];
    }
    static get is() { return "ion-action-sheet"; }
    static get host() { return { "theme": "action-sheet" }; }
    static get properties() { return { "animationCtrl": { "connect": "ion-animation-controller" }, "buttons": { "type": "Any", "attr": "buttons" }, "config": { "context": "config" }, "cssClass": { "type": String, "attr": "css-class" }, "dismiss": { "method": true }, "dom": { "context": "dom" }, "el": { "elementRef": true }, "enableBackdropDismiss": { "type": Boolean, "attr": "enable-backdrop-dismiss" }, "enterAnimation": { "type": "Any", "attr": "enter-animation" }, "leaveAnimation": { "type": "Any", "attr": "leave-animation" }, "present": { "method": true }, "subTitle": { "type": String, "attr": "sub-title" }, "title": { "type": String, "attr": "title" }, "translucent": { "type": Boolean, "attr": "translucent" }, "willAnimate": { "type": Boolean, "attr": "will-animate" } }; }
    static get events() { return [{ "name": "ionActionSheetDidLoad", "method": "ionActionSheetDidLoad", "bubbles": true, "cancelable": true, "composed": true }, { "name": "ionActionSheetDidPresent", "method": "ionActionSheetDidPresent", "bubbles": true, "cancelable": true, "composed": true }, { "name": "ionActionSheetWillPresent", "method": "ionActionSheetWillPresent", "bubbles": true, "cancelable": true, "composed": true }, { "name": "ionActionSheetWillDismiss", "method": "ionActionSheetWillDismiss", "bubbles": true, "cancelable": true, "composed": true }, { "name": "ionActionSheetDidDismiss", "method": "ionActionSheetDidDismiss", "bubbles": true, "cancelable": true, "composed": true }, { "name": "ionActionSheetDidUnload", "method": "ionActionSheetDidUnload", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "ion-action-sheet {\n  left: 0;\n  top: 0;\n  position: absolute;\n  z-index: 1000;\n  display: block;\n  width: 100%;\n  height: 100%;\n  -ms-touch-action: none;\n  touch-action: none;\n  font-smoothing: antialiased;\n  -webkit-font-smoothing: antialiased;\n}\n\n.action-sheet-wrapper {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  -webkit-transform: translate3d(0,  100%,  0);\n  transform: translate3d(0,  100%,  0);\n  position: absolute;\n  z-index: 10;\n  display: block;\n  width: 100%;\n  max-width: 500px;\n  pointer-events: none;\n}\n\n.action-sheet-button {\n  width: 100%;\n  border: 0;\n  font-family: inherit;\n}\n\n.action-sheet-button:active, .action-sheet-button:focus {\n  outline: none;\n}\n\n.action-sheet-button-inner {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-flow: row nowrap;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n\n.action-sheet-container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-flow: column;\n  -ms-flex-flow: column;\n  flex-flow: column;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  height: 100%;\n  max-height: 100%;\n}\n\n.action-sheet-group {\n  overflow: scroll;\n  -webkit-flex-shrink: 2;\n  -ms-flex-negative: 2;\n  flex-shrink: 2;\n  pointer-events: all;\n}\n\n.action-sheet-group-cancel {\n  overflow: hidden;\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n}\n\n.action-sheet-md {\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n}\n\n.action-sheet-md .action-sheet-title {\n  padding: 11px 16px 17px;\n  text-align: left;\n  text-align: start;\n  font-size: 16px;\n  color: var(--ion-text-md-color-step-400, var(--ion-text-color-step-400, #666666));\n}\n\n.action-sheet-md .action-sheet-sub-title {\n  padding: 16px 0 0;\n  font-size: 14px;\n}\n\n.action-sheet-md .action-sheet-group {\n  background-color: var(--ion-overlay-md-background-color, var(--ion-overlay-background-color, #fafafa));\n}\n\n.action-sheet-md .action-sheet-group:first-child {\n  padding-top: 8px;\n}\n\n.action-sheet-md .action-sheet-group:last-child {\n  padding-bottom: 8px;\n}\n\n.action-sheet-md .action-sheet-button {\n  padding: 0 16px;\n  text-align: left;\n  text-align: start;\n  position: relative;\n  overflow: hidden;\n  height: 48px;\n  font-size: 16px;\n  color: var(--ion-text-md-color-step-150, var(--ion-text-color-step-150, #262626));\n  background: transparent;\n  contain: strict;\n}\n\n.action-sheet-md .action-sheet-button.activated {\n  background: var(--ion-background-md-color-step-50, var(--ion-background-color-step-50, #f2f2f2));\n}\n\n.action-sheet-md .action-sheet-icon {\n  margin: 0 32px 0 0;\n  font-size: 24px;\n}\n\n.action-sheet-md .action-sheet-button-inner {\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n}\n\n.action-sheet-md .action-sheet-selected {\n  font-weight: bold;\n}"; }
    static get styleMode() { return "md"; }
}
function buttonClass(button) {
    const buttonClasses = Object.assign({ 'action-sheet-button': true }, getClassMap(button.cssClass));
    if (button.role) {
        buttonClasses[`action-sheet-${button.role}`] = true;
    }
    return buttonClasses;
}

let ids = 0;
const actionSheets = new Map();
class ActionSheetController {
    actionSheetWillPresent(ev) {
        actionSheets.set(ev.target.actionSheetId, ev.target);
    }
    actionSheetWillDismiss(ev) {
        actionSheets.delete(ev.target.actionSheetId);
    }
    escapeKeyUp() {
        removeLastActionSheet();
    }
    /*
     * Create an action sheet overlay with action sheet options.
     */
    create(opts) {
        // create ionic's wrapping ion-actionSheet component
        const actionSheetElement = document.createElement('ion-action-sheet');
        // give this actionSheet a unique id
        actionSheetElement.actionSheetId = ids++;
        // convert the passed in actionSheet options into props
        // that get passed down into the new actionSheet
        Object.assign(actionSheetElement, opts);
        // append the actionSheet element to the document body
        const appRoot = document.querySelector('ion-app') || document.body;
        appRoot.appendChild(actionSheetElement);
        return actionSheetElement.componentOnReady();
    }
    /*
     * Dismiss the open action sheet overlay.
     */
    dismiss(data, role, actionSheetId = -1) {
        actionSheetId = actionSheetId >= 0 ? actionSheetId : getHighestId();
        const actionSheet = actionSheets.get(actionSheetId);
        if (!actionSheet) {
            return Promise.reject('action-sheet does not exist');
        }
        return actionSheet.dismiss(data, role);
    }
    /*
     * Get the most recently opened action sheet overlay.
     */
    getTop() {
        return actionSheets.get(getHighestId());
    }
    static get is() { return "ion-action-sheet-controller"; }
    static get properties() { return { "create": { "method": true }, "dismiss": { "method": true }, "getTop": { "method": true } }; }
}
function getHighestId() {
    let minimum = -1;
    actionSheets.forEach((_actionSheet, id) => {
        if (id > minimum) {
            minimum = id;
        }
    });
    return minimum;
}
function removeLastActionSheet() {
    const toRemove = actionSheets.get(getHighestId());
    return toRemove ? toRemove.dismiss() : Promise.resolve();
}

export { ActionSheet as IonActionSheet, ActionSheetController as IonActionSheetController };
