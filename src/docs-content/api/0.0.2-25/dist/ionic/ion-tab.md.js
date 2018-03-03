/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const { h, Context } = window.Ionic;

import { asyncRaf, getIonApp, getNavAsChildIfExists } from './chunk1.js';
import { createThemedClasses } from './chunk2.js';

class Tab {
    constructor() {
        this.loaded = false;
        this.init = false;
        this.active = false;
        /**
         * The badge color for the tab button.
         */
        this.badgeStyle = 'default';
        /**
         * If true, the user cannot interact with the tab. Defaults to `false`.
         */
        this.disabled = false;
        /**
         * If true, the tab will be selected. Defaults to `false`.
         */
        this.selected = false;
        /**
         * If true, the tab button is visible within the tabbar. Defaults to `true`.
         */
        this.show = true;
        /**
         * If true, hide the tabs on child pages.
         */
        this.tabsHideOnSubPages = false;
    }
    selectedChanged(selected) {
        if (selected) {
            this.ionSelect.emit();
        }
    }
    getRouteId() {
        if (this.name) {
            return this.name;
        }
        if (typeof this.component === 'string') {
            return this.component;
        }
        return null;
    }
    setActive() {
        return this.prepareLazyLoaded().then(() => this.showTab());
    }
    prepareLazyLoaded() {
        if (!this.loaded && this.component) {
            this.loaded = true;
            const promise = (this.delegate)
                ? this.delegate.attachViewToDom(this.el, this.component)
                : attachViewToDom(this.el, this.component);
            return promise.then(() => asyncRaf());
        }
        return Promise.resolve();
    }
    showTab() {
        this.active = true;
        const nav = getNavAsChildIfExists(this.el);
        if (!nav) {
            return Promise.resolve();
        }
        // the tab's nav has been initialized externally
        return getIonApp().then((ionApp) => {
            const externalNavPromise = ionApp ? ionApp.getExternalNavPromise() : null;
            if (externalNavPromise) {
                return externalNavPromise.then(() => {
                    ionApp.setExternalNavPromise(null);
                });
            }
            // the tab's nav has not been initialized externally, so
            // check if we need to initiailize it
            return nav.componentOnReady()
                .then(() => nav.activateFromTab());
        });
    }
    hostData() {
        const hidden = !this.active || !this.selected;
        return {
            'aria-hidden': hidden,
            'aria-labelledby': this.btnId,
            'role': 'tabpanel',
            class: {
                'show-tab': this.active
            }
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-tab"; }
    static get properties() { return { "active": { "type": Boolean, "attr": "active", "mutable": true }, "badge": { "type": String, "attr": "badge" }, "badgeStyle": { "type": String, "attr": "badge-style" }, "btnId": { "type": String, "attr": "btn-id" }, "component": { "type": "Any", "attr": "component" }, "delegate": { "type": "Any", "attr": "delegate" }, "disabled": { "type": Boolean, "attr": "disabled" }, "el": { "elementRef": true }, "getRouteId": { "method": true }, "icon": { "type": String, "attr": "icon" }, "init": { "state": true }, "name": { "type": String, "attr": "name" }, "selected": { "type": Boolean, "attr": "selected", "mutable": true, "watchCallbacks": ["selectedChanged"] }, "setActive": { "method": true }, "show": { "type": Boolean, "attr": "show" }, "tabsHideOnSubPages": { "type": Boolean, "attr": "tabs-hide-on-sub-pages" }, "title": { "type": String, "attr": "title" } }; }
    static get events() { return [{ "name": "ionSelect", "method": "ionSelect", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "ion-tab {\n  left: 0;\n  top: 0;\n  position: absolute;\n  z-index: -1;\n  display: none;\n  width: 100%;\n  height: 100%;\n  contain: layout size style;\n}\n\nion-tab.show-tab {\n  z-index: 0;\n  display: block;\n}"; }
}
function attachViewToDom(container, cmp) {
    const el = document.createElement(cmp);
    container.appendChild(el);
    if (el.componentOnReady) {
        return el.componentOnReady();
    }
    return Promise.resolve();
}

class TabButton {
    constructor() {
        this.keyFocus = false;
        this.selected = false;
    }
    componentDidLoad() {
        this.ionTabButtonDidLoad.emit();
    }
    componentDidUnload() {
        this.ionTabButtonDidUnload.emit();
    }
    onClick(ev) {
        this.ionTabbarClick.emit(this.tab);
        ev.stopPropagation();
    }
    onKeyUp() {
        this.keyFocus = true;
    }
    onBlur() {
        this.keyFocus = false;
    }
    hostData() {
        const selected = this.selected;
        const tab = this.tab;
        const hasTitle = !!tab.title;
        const hasIcon = !!tab.icon;
        const hasTitleOnly = (hasTitle && !hasIcon);
        const hasIconOnly = (hasIcon && !hasTitle);
        const hasBadge = !!tab.badge;
        return {
            'role': 'tab',
            'id': tab.btnId,
            'aria-selected': selected,
            class: {
                'tab-selected': selected,
                'has-title': hasTitle,
                'has-icon': hasIcon,
                'has-title-only': hasTitleOnly,
                'has-icon-only': hasIconOnly,
                'has-badge': hasBadge,
                'tab-disabled': tab.disabled,
                'tab-hidden': tab.hidden,
                'focused': this.keyFocus
            }
        };
    }
    render() {
        const tab = this.tab;
        return [
            h("button", { type: 'button', class: 'tab-cover', onKeyUp: this.onKeyUp.bind(this), onBlur: this.onBlur.bind(this), disabled: tab.disabled },
                tab.icon && h("ion-icon", { class: 'tab-button-icon', name: tab.icon }),
                tab.title && h("span", { class: 'tab-button-text' }, tab.title),
                tab.badge && h("ion-badge", { class: 'tab-badge', color: tab.badgeStyle }, tab.badge),
                this.mode === 'md' && h("ion-ripple-effect", null))
        ];
    }
    static get is() { return "ion-tab-button"; }
    static get properties() { return { "el": { "elementRef": true }, "keyFocus": { "state": true }, "selected": { "type": Boolean, "attr": "selected" }, "tab": { "type": "Any", "attr": "tab" } }; }
    static get events() { return [{ "name": "ionTabbarClick", "method": "ionTabbarClick", "bubbles": true, "cancelable": true, "composed": true }, { "name": "ionTabButtonDidLoad", "method": "ionTabButtonDidLoad", "bubbles": true, "cancelable": true, "composed": true }, { "name": "ionTabButtonDidUnload", "method": "ionTabButtonDidUnload", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "ion-tab-button {\n  margin: 0;\n  text-align: center;\n  border-radius: 0;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  position: relative;\n  z-index: 0;\n  display: block;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  height: 100%;\n  border: 0;\n  text-decoration: none;\n  background: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.tab-cover {\n  margin: 0;\n  padding: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  color: inherit;\n  background: transparent;\n  cursor: pointer;\n}\n\n.tab-cover:active, .tab-cover:focus {\n  outline: none;\n}\n\n.tab-disabled {\n  pointer-events: none;\n}\n\n.tab-disabled > .tab-cover {\n  opacity: .4;\n}\n\n.tab-button-text,\n.tab-button-icon {\n  display: none;\n  overflow: hidden;\n  -webkit-align-self: center;\n  -ms-flex-item-align: center;\n  align-self: center;\n  min-width: 26px;\n  max-width: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.has-icon .tab-button-icon,\n.has-title .tab-button-text {\n  display: block;\n}\n\n.has-title-only .tab-button-text {\n  white-space: normal;\n}\n\n.layout-icon-start .tab-button {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n}\n\n.layout-icon-end .tab-button {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n  -webkit-flex-direction: row-reverse;\n  -ms-flex-direction: row-reverse;\n  flex-direction: row-reverse;\n}\n\n.layout-icon-bottom .tab-button {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n  -webkit-flex-direction: column-reverse;\n  -ms-flex-direction: column-reverse;\n  flex-direction: column-reverse;\n}\n\n.layout-icon-start .tab-button,\n.layout-icon-end .tab-button,\n.layout-icon-hide .tab-button,\n.layout-title-hide .tab-button {\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\n.tab-hidden,\n.layout-icon-hide .tab-button-icon,\n.layout-title-hide .tab-button-text {\n  display: none;\n}\n\n.tab-badge {\n  right: 4%;\n  top: 6%;\n  right: calc(50% - 50px);\n  padding: 1px 6px;\n  position: absolute;\n  height: auto;\n  font-size: 12px;\n  line-height: 16px;\n}\n\n.has-icon .tab-badge {\n  right: calc(50% - 30px);\n}\n\n.layout-icon-bottom .tab-badge,\n.layout-icon-start .tab-badge,\n.layout-icon-end .tab-badge {\n  right: calc(50% - 50px);\n}\n\n.tab-button-md {\n  max-width: 168px;\n  font-weight: normal;\n  color: var(--ion-tabbar-md-text-color, var(--ion-text-md-color-step-400, var(--ion-text-color-step-400, #666666)));\n  fill: var(--ion-tabbar-md-text-color, var(--ion-text-md-color-step-400, var(--ion-text-color-step-400, #666666)));\n}\n\n.tab-button-md.focused {\n  background: var(--ion-tabbar-ios-background-color-focused, var(--ion-tabbar-background-color-focused, #dadada));\n}\n\n.tab-button-md .tab-cover {\n  padding: 8px 12px 10px 12px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.scrollable .tab-button-md {\n  overflow: hidden;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 0 auto;\n  -ms-flex: 1 0 auto;\n  flex: 1 0 auto;\n}\n\n.tab-button-md.tab-selected {\n  color: var(--ion-tabbar-md-text-color-active, var(--ion-tabbar-text-color-active, #488aff));\n  fill: var(--ion-tabbar-md-text-color-active, var(--ion-tabbar-text-color-active, #488aff));\n}\n\n.placement-top .tab-button-md.tab-selected .tab-button-icon,\n.placement-top .tab-button-md.tab-selected .tab-button-text {\n  -webkit-transform: inherit;\n  transform: inherit;\n}\n\n.tab-button-md .tab-button-text {\n  margin: 0;\n  -webkit-transform-origin: center bottom;\n  transform-origin: center bottom;\n  font-size: 12px;\n  text-transform: none;\n  -webkit-transition: -webkit-transform 0.3s ease-in-out;\n  transition: -webkit-transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;\n}\n\n.tab-button-md.tab-selected .tab-button-text {\n  -webkit-transform: scale3d(1.16667, 1.16667, 1);\n  transform: scale3d(1.16667, 1.16667, 1);\n  -webkit-transition: -webkit-transform 0.3s ease-in-out;\n  transition: -webkit-transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;\n}\n\n.layout-icon-top .tab-button-md .has-icon .tab-button-text {\n  margin-bottom: -2px;\n}\n\n.layout-icon-bottom .tab-button-md .tab-button-text {\n  -webkit-transform-origin: center top;\n  transform-origin: center top;\n  margin-top: -2px;\n}\n\n.tab-button-md .tab-button-icon {\n  -webkit-transform-origin: center center;\n  transform-origin: center center;\n  width: 24px;\n  height: 24px;\n  font-size: 24px;\n  -webkit-transition: -webkit-transform 0.3s ease-in-out;\n  transition: -webkit-transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;\n}\n\n.tab-button-md.tab-selected .tab-button-icon {\n  -webkit-transform: translate3d(0,  -2px,  0);\n  transform: translate3d(0,  -2px,  0);\n}\n\n.layout-icon-end .tab-button-md.tab-selected .tab-button-icon {\n  -webkit-transform: translate3d(2px,  0,  0);\n  transform: translate3d(2px,  0,  0);\n}\n\n.layout-icon-bottom .tab-button-md.tab-selected .tab-button-icon {\n  -webkit-transform: translate3d(0,  2px,  0);\n  transform: translate3d(0,  2px,  0);\n}\n\n.layout-icon-start .tab-button-md.tab-selected .tab-button-icon {\n  -webkit-transform: translate3d(-2px,  0,  0);\n  transform: translate3d(-2px,  0,  0);\n}\n\n.layout-icon-hide .tab-button-md,\n.layout-title-hide .tab-button-md,\n.tab-button-md.icon-only,\n.tab-button-md.has-title-only {\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}"; }
    static get styleMode() { return "md"; }
}

class Tabbar {
    constructor() {
        this.canScrollLeft = false;
        this.canScrollRight = false;
        this.hidden = false;
        this.placement = 'bottom';
        this.layout = 'icon-top';
        this.highlight = false;
        /**
         * If true, the tabbar will be translucent. Defaults to `false`.
         */
        this.translucent = false;
    }
    selectedTabChanged() {
        this.scrollable && this.scrollToSelectedButton();
        this.highlight && this.updateHighlight();
    }
    onKeyboardWillHide() {
        setTimeout(() => this.hidden = false, 50);
    }
    onKeyboardWillShow() {
        if (this.placement === 'bottom') {
            this.hidden = true;
        }
    }
    onResize() {
        this.highlight && this.updateHighlight();
    }
    onTabButtonLoad() {
        this.scrollable && this.updateBoundaries();
        this.highlight && this.updateHighlight();
    }
    analyzeTabs() {
        const tabs = Array.from(document.querySelectorAll('ion-tab-button'));
        const scrollLeft = this.scrollEl.scrollLeft;
        const tabsWidth = this.scrollEl.clientWidth;
        let previous;
        let next;
        tabs.forEach((tab) => {
            const left = tab.offsetLeft;
            const right = left + tab.offsetWidth;
            if (left < scrollLeft) {
                previous = { tab, amount: left };
            }
            if (!next && right > (tabsWidth + scrollLeft)) {
                const amount = right - tabsWidth;
                next = { tab, amount };
            }
        });
        return { previous, next };
    }
    getSelectedButton() {
        return Array.from(this.el.querySelectorAll('ion-tab-button'))
            .find(btn => btn.selected);
    }
    scrollToSelectedButton() {
        this.dom.read(() => {
            const activeTabButton = this.getSelectedButton();
            if (activeTabButton) {
                const scrollLeft = this.scrollEl.scrollLeft, tabsWidth = this.scrollEl.clientWidth, left = activeTabButton.offsetLeft, right = left + activeTabButton.offsetWidth;
                let amount;
                if (right > (tabsWidth + scrollLeft)) {
                    amount = right - tabsWidth;
                }
                else if (left < scrollLeft) {
                    amount = left;
                }
                if (amount !== undefined) {
                    this.scrollEl.scrollToPoint(amount, 0, 250).then(() => {
                        this.updateBoundaries();
                    });
                }
            }
        });
    }
    scrollByTab(direction) {
        this.dom.read(() => {
            const { previous, next } = this.analyzeTabs(), info = direction === 'right' ? next : previous, amount = info && info.amount;
            if (info) {
                this.scrollEl.scrollToPoint(amount, 0, 250).then(() => {
                    this.updateBoundaries();
                });
            }
        });
    }
    updateBoundaries() {
        this.canScrollLeft = this.scrollEl.scrollLeft !== 0;
        this.canScrollRight = this.scrollEl.scrollLeft < (this.scrollEl.scrollWidth - this.scrollEl.offsetWidth);
    }
    updateHighlight() {
        if (!this.highlight) {
            return;
        }
        this.dom.read(() => {
            const btn = this.getSelectedButton();
            const highlight = this.el.querySelector('div.tabbar-highlight');
            if (btn && highlight) {
                highlight.style.transform = `translate3d(${btn.offsetLeft}px,0,0) scaleX(${btn.offsetWidth})`;
            }
        });
    }
    hostData() {
        const themedClasses = this.translucent ? createThemedClasses(this.mode, this.color, 'tabbar-translucent') : {};
        return {
            role: 'tablist',
            class: Object.assign({}, themedClasses, { [`layout-${this.layout}`]: true, [`placement-${this.placement}`]: true, 'tabbar-hidden': this.hidden, 'scrollable': this.scrollable })
        };
    }
    render() {
        const selectedTab = this.selectedTab;
        const ionTabbarHighlight = this.highlight ? h("div", { class: 'animated tabbar-highlight' }) : null;
        const buttonClasses = createThemedClasses(this.mode, this.color, 'tab-button');
        const tabButtons = this.tabs.map(tab => h("ion-tab-button", { class: buttonClasses, tab: tab, selected: selectedTab === tab }));
        if (this.scrollable) {
            return [
                h("ion-button", { onClick: () => this.scrollByTab('left'), fill: 'clear', class: { inactive: !this.canScrollLeft } },
                    h("ion-icon", { name: 'arrow-dropleft' })),
                h("ion-scroll", { forceOverscroll: false, ref: (scrollEl) => this.scrollEl = scrollEl },
                    tabButtons,
                    ionTabbarHighlight),
                h("ion-button", { onClick: () => this.scrollByTab('right'), fill: 'clear', class: { inactive: !this.canScrollRight } },
                    h("ion-icon", { name: 'arrow-dropright' }))
            ];
        }
        else {
            return [
                ...tabButtons,
                ionTabbarHighlight
            ];
        }
    }
    static get is() { return "ion-tabbar"; }
    static get host() { return { "theme": "tabbar" }; }
    static get properties() { return { "canScrollLeft": { "state": true }, "canScrollRight": { "state": true }, "dom": { "context": "dom" }, "el": { "elementRef": true }, "hidden": { "state": true }, "highlight": { "type": Boolean, "attr": "highlight" }, "layout": { "type": String, "attr": "layout" }, "placement": { "type": String, "attr": "placement" }, "scrollable": { "type": Boolean, "attr": "scrollable" }, "selectedTab": { "type": "Any", "attr": "selected-tab", "watchCallbacks": ["selectedTabChanged"] }, "tabs": { "type": "Any", "attr": "tabs" }, "translucent": { "type": Boolean, "attr": "translucent" } }; }
    static get style() { return "ion-tabbar {\n  position: relative;\n  z-index: 10;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-ordinal-group: 2;\n  -webkit-order: 1;\n  -ms-flex-order: 1;\n  order: 1;\n  width: 100%;\n}\n\nion-tabbar.tabbar-hidden {\n  display: none;\n}\n\nion-tabbar.placement-top {\n  -webkit-box-ordinal-group: 0;\n  -webkit-order: -1;\n  -ms-flex-order: -1;\n  order: -1;\n}\n\n.tabbar-highlight {\n  left: 0;\n  bottom: 0;\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  position: absolute;\n  display: block;\n  width: 1px;\n  height: 2px;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n\n.tabbar-highlight.animated {\n  -webkit-transition-duration: 300ms;\n  transition-duration: 300ms;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  will-change: transform;\n}\n\n.placement-top .tabbar-highlight {\n  bottom: 0;\n}\n\n.placement-bottom .tabbar-highlight {\n  top: 0;\n}\n\nion-tabbar.scrollable ion-scroll {\n  overflow: hidden;\n}\n\nion-tabbar.scrollable .scroll-inner {\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n}\n\nion-tabbar.scrollable ion-button.inactive {\n  visibility: hidden;\n}\n\n.tabbar-md {\n  height: 56px;\n  border-top: 1px solid var(--ion-tabbar-md-border-color, var(--ion-tabbar-border-color, rgba(0, 0, 0, 0.07)));\n  background: var(--ion-tabbar-md-background-color, var(--ion-tabbar-background-color, #f8f8f8));\n  contain: strict;\n}\n\n.tabbar-md .tabbar-highlight {\n  background: var(--ion-tabbar-md-text-color-active, var(--ion-tabbar-text-color-active, #488aff));\n}\n\n.tabbar-md.scrollable ion-scroll {\n  margin: 0 8px;\n  max-width: 650px;\n}\n\n.tabbar-md-primary {\n  color: var(--ion-color-md-primary-contrast, var(--ion-color-primary-contrast, #fff));\n  background-color: var(--ion-color-md-primary, var(--ion-color-primary, #488aff));\n  fill: var(--ion-color-md-primary-contrast, var(--ion-color-primary-contrast, #fff));\n}\n\n.tabbar-md-primary .tab-button.focused {\n  background: var(--ion-color-ios-primary-shade, var(--ion-color-primary-shade, #3f79e0));\n}\n\n.enable-hover .tabbar-md-primary .tab-button:hover,\n.tabbar-md-primary .tab-button.tab-selected {\n  color: var(--ion-color-md-primary-contrast, var(--ion-color-primary-contrast, #fff));\n  fill: var(--ion-color-md-primary-contrast, var(--ion-color-primary-contrast, #fff));\n}\n\n.tabbar-md-primary .tabbar-highlight {\n  background: var(--ion-color-md-primary-contrast, var(--ion-color-primary-contrast, #fff));\n}\n\n.tabbar-md-secondary {\n  color: var(--ion-color-md-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n  background-color: var(--ion-color-md-secondary, var(--ion-color-secondary, #32db64));\n  fill: var(--ion-color-md-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n}\n\n.tabbar-md-secondary .tab-button.focused {\n  background: var(--ion-color-ios-secondary-shade, var(--ion-color-secondary-shade, #2cc158));\n}\n\n.enable-hover .tabbar-md-secondary .tab-button:hover,\n.tabbar-md-secondary .tab-button.tab-selected {\n  color: var(--ion-color-md-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n  fill: var(--ion-color-md-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n}\n\n.tabbar-md-secondary .tabbar-highlight {\n  background: var(--ion-color-md-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n}\n\n.tabbar-md-tertiary {\n  color: var(--ion-color-md-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n  background-color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #f4a942));\n  fill: var(--ion-color-md-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n}\n\n.tabbar-md-tertiary .tab-button.focused {\n  background: var(--ion-color-ios-tertiary-shade, var(--ion-color-tertiary-shade, #d7953a));\n}\n\n.enable-hover .tabbar-md-tertiary .tab-button:hover,\n.tabbar-md-tertiary .tab-button.tab-selected {\n  color: var(--ion-color-md-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n  fill: var(--ion-color-md-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n}\n\n.tabbar-md-tertiary .tabbar-highlight {\n  background: var(--ion-color-md-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n}\n\n.tabbar-md-success {\n  color: var(--ion-color-md-success-contrast, var(--ion-color-success-contrast, #fff));\n  background-color: var(--ion-color-md-success, var(--ion-color-success, #10dc60));\n  fill: var(--ion-color-md-success-contrast, var(--ion-color-success-contrast, #fff));\n}\n\n.tabbar-md-success .tab-button.focused {\n  background: var(--ion-color-ios-success-shade, var(--ion-color-success-shade, #0ec254));\n}\n\n.enable-hover .tabbar-md-success .tab-button:hover,\n.tabbar-md-success .tab-button.tab-selected {\n  color: var(--ion-color-md-success-contrast, var(--ion-color-success-contrast, #fff));\n  fill: var(--ion-color-md-success-contrast, var(--ion-color-success-contrast, #fff));\n}\n\n.tabbar-md-success .tabbar-highlight {\n  background: var(--ion-color-md-success-contrast, var(--ion-color-success-contrast, #fff));\n}\n\n.tabbar-md-warning {\n  color: var(--ion-color-md-warning-contrast, var(--ion-color-warning-contrast, #000));\n  background-color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00));\n  fill: var(--ion-color-md-warning-contrast, var(--ion-color-warning-contrast, #000));\n}\n\n.tabbar-md-warning .tab-button.focused {\n  background: var(--ion-color-ios-warning-shade, var(--ion-color-warning-shade, #e0b500));\n}\n\n.enable-hover .tabbar-md-warning .tab-button:hover,\n.tabbar-md-warning .tab-button.tab-selected {\n  color: var(--ion-color-md-warning-contrast, var(--ion-color-warning-contrast, #000));\n  fill: var(--ion-color-md-warning-contrast, var(--ion-color-warning-contrast, #000));\n}\n\n.tabbar-md-warning .tabbar-highlight {\n  background: var(--ion-color-md-warning-contrast, var(--ion-color-warning-contrast, #000));\n}\n\n.tabbar-md-danger {\n  color: var(--ion-color-md-danger-contrast, var(--ion-color-danger-contrast, #fff));\n  background-color: var(--ion-color-md-danger, var(--ion-color-danger, #f53d3d));\n  fill: var(--ion-color-md-danger-contrast, var(--ion-color-danger-contrast, #fff));\n}\n\n.tabbar-md-danger .tab-button.focused {\n  background: var(--ion-color-ios-danger-shade, var(--ion-color-danger-shade, #d83636));\n}\n\n.enable-hover .tabbar-md-danger .tab-button:hover,\n.tabbar-md-danger .tab-button.tab-selected {\n  color: var(--ion-color-md-danger-contrast, var(--ion-color-danger-contrast, #fff));\n  fill: var(--ion-color-md-danger-contrast, var(--ion-color-danger-contrast, #fff));\n}\n\n.tabbar-md-danger .tabbar-highlight {\n  background: var(--ion-color-md-danger-contrast, var(--ion-color-danger-contrast, #fff));\n}\n\n.tabbar-md-light {\n  color: var(--ion-color-md-light-contrast, var(--ion-color-light-contrast, #000));\n  background-color: var(--ion-color-md-light, var(--ion-color-light, #f4f4f4));\n  fill: var(--ion-color-md-light-contrast, var(--ion-color-light-contrast, #000));\n}\n\n.tabbar-md-light .tab-button.focused {\n  background: var(--ion-color-ios-light-shade, var(--ion-color-light-shade, #d7d7d7));\n}\n\n.enable-hover .tabbar-md-light .tab-button:hover,\n.tabbar-md-light .tab-button.tab-selected {\n  color: var(--ion-color-md-light-contrast, var(--ion-color-light-contrast, #000));\n  fill: var(--ion-color-md-light-contrast, var(--ion-color-light-contrast, #000));\n}\n\n.tabbar-md-light .tabbar-highlight {\n  background: var(--ion-color-md-light-contrast, var(--ion-color-light-contrast, #000));\n}\n\n.tabbar-md-medium {\n  color: var(--ion-color-md-medium-contrast, var(--ion-color-medium-contrast, #000));\n  background-color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2));\n  fill: var(--ion-color-md-medium-contrast, var(--ion-color-medium-contrast, #000));\n}\n\n.tabbar-md-medium .tab-button.focused {\n  background: var(--ion-color-ios-medium-shade, var(--ion-color-medium-shade, #86888f));\n}\n\n.enable-hover .tabbar-md-medium .tab-button:hover,\n.tabbar-md-medium .tab-button.tab-selected {\n  color: var(--ion-color-md-medium-contrast, var(--ion-color-medium-contrast, #000));\n  fill: var(--ion-color-md-medium-contrast, var(--ion-color-medium-contrast, #000));\n}\n\n.tabbar-md-medium .tabbar-highlight {\n  background: var(--ion-color-md-medium-contrast, var(--ion-color-medium-contrast, #000));\n}\n\n.tabbar-md-dark {\n  color: var(--ion-color-md-dark-contrast, var(--ion-color-dark-contrast, #fff));\n  background-color: var(--ion-color-md-dark, var(--ion-color-dark, #222));\n  fill: var(--ion-color-md-dark-contrast, var(--ion-color-dark-contrast, #fff));\n}\n\n.tabbar-md-dark .tab-button.focused {\n  background: var(--ion-color-ios-dark-shade, var(--ion-color-dark-shade, #1e1e1e));\n}\n\n.enable-hover .tabbar-md-dark .tab-button:hover,\n.tabbar-md-dark .tab-button.tab-selected {\n  color: var(--ion-color-md-dark-contrast, var(--ion-color-dark-contrast, #fff));\n  fill: var(--ion-color-md-dark-contrast, var(--ion-color-dark-contrast, #fff));\n}\n\n.tabbar-md-dark .tabbar-highlight {\n  background: var(--ion-color-md-dark-contrast, var(--ion-color-dark-contrast, #fff));\n}"; }
    static get styleMode() { return "md"; }
}

class Tabs {
    constructor() {
        this.ids = -1;
        this.transitioning = false;
        this.tabsId = (++tabIds);
        this.initialized = false;
        this.tabs = [];
        /**
         * If true, the tabbar
         */
        this.tabbarHidden = false;
        /**
         * If true, the tabs will be translucent.
         * Note: In order to scroll content behind the tabs, the `fullscreen`
         * attribute needs to be set on the content.
         * Defaults to `false`.
         */
        this.translucent = false;
        this.scrollable = false;
    }
    componentDidLoad() {
        this.loadConfig('tabsPlacement', 'bottom');
        this.loadConfig('tabsLayout', 'icon-top');
        this.loadConfig('tabsHighlight', true);
        const promises = [];
        promises.push(this.initTabs());
        promises.push(getIonApp());
        return Promise.all(promises).then(([_, ionApp]) => {
            if (ionApp) {
                return ionApp.getExternalNavOccuring();
            }
            return false;
        }).then((externalNavOccuring) => {
            if (!externalNavOccuring) {
                return this.initSelect();
            }
            return null;
        }).then(() => {
            this.initialized = true;
        });
    }
    componentDidUnload() {
        this.tabs.length = 0;
        this.selectedTab = undefined;
    }
    tabChange(ev) {
        const selectedTab = ev.detail;
        this.select(selectedTab);
    }
    /**
     * @param {number|Tab} tabOrIndex Index, or the Tab instance, of the tab to select.
     */
    select(tabOrIndex) {
        if (this.transitioning) {
            return Promise.resolve(false);
        }
        const selectedTab = (typeof tabOrIndex === 'number' ? this.getByIndex(tabOrIndex) : tabOrIndex);
        if (!selectedTab) {
            return Promise.resolve(false);
        }
        // Reset rest of tabs
        for (const tab of this.tabs) {
            if (selectedTab !== tab) {
                tab.selected = false;
            }
        }
        const leavingTab = this.selectedTab;
        this.transitioning = true;
        return selectedTab.setActive().then(() => {
            this.transitioning = false;
            selectedTab.selected = true;
            if (leavingTab !== selectedTab) {
                if (leavingTab) {
                    leavingTab.active = false;
                }
                this.selectedTab = selectedTab;
                this.ionChange.emit(selectedTab);
                this.ionNavChanged.emit({ isPop: false });
                return true;
            }
            return false;
        });
    }
    /**
     * @param {number} index Index of the tab you want to get
     * @returns {HTMLIonTabElement} Returns the tab who's index matches the one passed
     */
    getByIndex(index) {
        return this.tabs[index];
    }
    /**
     * @return {HTMLIonTabElement} Returns the currently selected tab
     */
    getSelected() {
        return this.selectedTab;
    }
    getIndex(tab) {
        return this.tabs.indexOf(tab);
    }
    getTabs() {
        return this.tabs;
    }
    setRouteId(id) {
        if (this.selectedTab && this.selectedTab.getRouteId() === id) {
            return Promise.resolve(false);
        }
        const tab = this.tabs.find(t => id === t.getRouteId());
        return this.select(tab).then(() => true);
    }
    getRouteId() {
        if (this.selectedTab) {
            return this.selectedTab.getRouteId();
        }
        return null;
    }
    getContentElement() {
        return this.selectedTab;
    }
    initTabs() {
        const tabs = this.tabs = Array.from(this.el.querySelectorAll('ion-tab'));
        const tabPromises = tabs.map(tab => {
            const id = `t-${this.tabsId}-${++this.ids}`;
            tab.btnId = 'tab-' + id;
            tab.id = 'tabpanel-' + id;
            return tab.componentOnReady();
        });
        return Promise.all(tabPromises);
    }
    initSelect() {
        if (document.querySelector('ion-router')) {
            return Promise.resolve();
        }
        // find pre-selected tabs
        const selectedTab = this.tabs.find(t => t.selected) ||
            this.tabs.find(t => t.show && !t.disabled);
        // reset all tabs none is selected
        for (const tab of this.tabs) {
            if (tab !== selectedTab) {
                tab.selected = false;
            }
        }
        const promise = selectedTab ? selectedTab.setActive() : Promise.resolve();
        return promise.then(() => {
            this.selectedTab = selectedTab;
            if (selectedTab) {
                selectedTab.selected = true;
                selectedTab.active = true;
            }
        });
    }
    loadConfig(attrKey, fallback) {
        const val = this[attrKey];
        if (typeof val === 'undefined') {
            this[attrKey] = this.config.get(attrKey, fallback);
        }
    }
    render() {
        const dom = [
            h("div", { class: 'tabs-inner' },
                h("slot", null))
        ];
        if (!this.tabbarHidden) {
            dom.push(h("ion-tabbar", { tabs: this.tabs, color: this.color, selectedTab: this.selectedTab, highlight: this.tabbarHighlight, placement: this.tabbarPlacement, layout: this.tabbarLayout, translucent: this.translucent, scrollable: this.scrollable }));
        }
        return dom;
    }
    static get is() { return "ion-tabs"; }
    static get properties() { return { "color": { "type": String, "attr": "color" }, "config": { "context": "config" }, "el": { "elementRef": true }, "getByIndex": { "method": true }, "getContentElement": { "method": true }, "getIndex": { "method": true }, "getRouteId": { "method": true }, "getSelected": { "method": true }, "getTabs": { "method": true }, "name": { "type": String, "attr": "name" }, "scrollable": { "type": Boolean, "attr": "scrollable" }, "select": { "method": true }, "selectedTab": { "state": true }, "setRouteId": { "method": true }, "tabbarHidden": { "type": Boolean, "attr": "tabbar-hidden" }, "tabbarHighlight": { "type": Boolean, "attr": "tabbar-highlight", "mutable": true }, "tabbarLayout": { "type": String, "attr": "tabbar-layout", "mutable": true }, "tabbarPlacement": { "type": String, "attr": "tabbar-placement", "mutable": true }, "tabs": { "state": true }, "translucent": { "type": Boolean, "attr": "translucent" } }; }
    static get events() { return [{ "name": "ionChange", "method": "ionChange", "bubbles": true, "cancelable": true, "composed": true }, { "name": "ionNavChanged", "method": "ionNavChanged", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "ion-tabs {\n  top: 0;\n  position: absolute;\n  z-index: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  contain: layout size style;\n}\n\n.tabs-inner {\n  position: relative;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  contain: layout size style;\n}"; }
}
let tabIds = -1;

export { Tab as IonTab, TabButton as IonTabButton, Tabbar as IonTabbar, Tabs as IonTabs };
