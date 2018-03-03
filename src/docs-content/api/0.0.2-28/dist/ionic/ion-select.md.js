/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const { h, Context } = window.Ionic;

class Select {
    constructor() {
        this.childOpts = [];
        this.isExpanded = false;
        /**
         * If true, the user cannot interact with the select. Defaults to `false`.
         */
        this.disabled = false;
        /**
         * The text to display on the cancel button. Default: `Cancel`.
         */
        this.cancelText = 'Cancel';
        /**
         * The text to display on the ok button. Default: `OK`.
         */
        this.okText = 'OK';
        /**
         * The interface the select should use: `action-sheet`, `popover` or `alert`. Default: `alert`.
         */
        this.interface = 'alert';
        /**
         * Any additional options that the `alert`, `action-sheet` or `popover` interface
         * can take. See the [AlertController API docs](../../alert/AlertController/#create), the
         * [ActionSheetController API docs](../../action-sheet/ActionSheetController/#create) and the
         * [PopoverController API docs](../../popover/PopoverController/#create) for the
         * create options for each interface.
         */
        this.interfaceOptions = {};
        this.selectId = 'ion-sel-' + (selectIds++);
    }
    disabledChanged() {
        this.emitStyle();
    }
    valueChanged() {
        // this select value just changed
        // double check the select option with this value is checked
        if (this.value === undefined) {
            // set to undefined
            // ensure all that are checked become unchecked
            this.childOpts.filter(o => o.selected).forEach(selectOption => {
                selectOption.selected = false;
            });
            this.text = '';
        }
        else {
            let hasChecked = false;
            const texts = [];
            this.childOpts.forEach(selectOption => {
                if ((Array.isArray(this.value) && this.value.indexOf(selectOption.value) > -1) || (selectOption.value === this.value)) {
                    if (!selectOption.selected && (this.multiple || !hasChecked)) {
                        // correct value for this select option
                        // but this select option isn't checked yet
                        // and we haven't found a checked yet
                        // so CHECK IT!
                        selectOption.selected = true;
                    }
                    else if (!this.multiple && hasChecked && selectOption.selected) {
                        // somehow we've got multiple select options
                        // with the same value, but only one can be checked
                        selectOption.selected = false;
                    }
                    // remember we've got a checked select option button now
                    hasChecked = true;
                }
                else if (selectOption.selected) {
                    // this select option doesn't have the correct value
                    // and it's also checked, so let's uncheck it
                    selectOption.selected = false;
                }
                if (selectOption.selected) {
                    texts.push(selectOption.textContent);
                }
            });
            this.text = texts.join(', ');
        }
        // emit the new value
        this.ionChange.emit({
            value: this.value,
            text: this.text
        });
        this.emitStyle();
    }
    optLoad(ev) {
        const selectOption = ev.target;
        this.childOpts.push(selectOption);
        if (this.value !== undefined && (Array.isArray(this.value) && this.value.indexOf(selectOption.value) > -1) || (selectOption.value === this.value)) {
            // this select has a value and this
            // option equals the correct select value
            // so let's check this select option
            selectOption.selected = true;
        }
        else if (Array.isArray(this.value) && this.multiple && selectOption.selected) {
            // if the value is an array we need to push the option on
            this.value.push(selectOption.value);
        }
        else if (this.value === undefined && selectOption.selected) {
            // this select does not have a value
            // but this select option is checked, so let's set the
            // select's value from the checked select option
            this.value = selectOption.value;
        }
        else if (selectOption.selected) {
            // if it doesn't match one of the above cases, but the
            // select option is still checked, then we need to uncheck it
            selectOption.selected = false;
        }
    }
    optUnload(ev) {
        const index = this.childOpts.indexOf(ev.target);
        if (index > -1) {
            this.childOpts.splice(index, 1);
        }
    }
    onSelect(ev) {
        // ionSelect only come from the checked select option
        this.childOpts.forEach(selectOption => {
            if (selectOption === ev.target) {
                this.value = selectOption.value;
            }
            else {
                selectOption.selected = false;
            }
        });
    }
    componentWillLoad() {
        if (!this.value) {
            this.value = this.multiple ? [] : undefined;
        }
        this.name = this.name || this.selectId;
    }
    componentDidLoad() {
        const label = this.getLabel();
        if (label) {
            this.labelId = label.id = this.name + '-lbl';
        }
        if (this.multiple) {
            // there are no values set at this point
            // so check to see who should be selected
            const checked = this.childOpts.filter(o => o.selected);
            this.value.length = 0;
            checked.forEach(o => {
                // doing this instead of map() so we don't
                // fire off an unecessary change event
                this.value.push(o.value);
            });
            this.text = checked.map(o => o.textContent).join(', ');
        }
        else {
            const checked = this.childOpts.find(o => o.selected);
            if (checked) {
                this.value = checked.value;
                this.text = checked.textContent;
            }
        }
        this.emitStyle();
    }
    getLabel() {
        const item = this.el.closest('ion-item');
        if (item) {
            return item.querySelector('ion-label');
        }
        return null;
    }
    open(ev) {
        let selectInterface = this.interface;
        if ((selectInterface === 'action-sheet' || selectInterface === 'popover') && this.multiple) {
            console.warn('Select interface cannot be "' + selectInterface + '" with a multi-value select. Using the "alert" interface instead.');
            selectInterface = 'alert';
        }
        if (selectInterface === 'popover' && !ev) {
            console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.');
            selectInterface = 'alert';
        }
        if (selectInterface === 'popover') {
            return this.openPopover(ev);
        }
        if (selectInterface === 'action-sheet') {
            return this.openActionSheet();
        }
        return this.openAlert();
    }
    openPopover(ev) {
        const interfaceOptions = Object.assign({}, this.interfaceOptions);
        const popoverOpts = Object.assign(interfaceOptions, {
            component: 'ion-select-popover',
            data: {
                title: interfaceOptions.title,
                subTitle: interfaceOptions.subTitle,
                message: interfaceOptions.message,
                value: this.value,
                options: this.childOpts.map(o => {
                    return {
                        text: o.textContent,
                        value: o.value,
                        checked: o.selected,
                        disabled: o.disabled,
                        handler: () => {
                            this.value = o.value;
                            this.close();
                        }
                    };
                })
            },
            cssClass: 'select-popover' + (interfaceOptions.cssClass ? ' ' + interfaceOptions.cssClass : ''),
            ev: ev
        });
        const popover = this.popoverCtrl.create(popoverOpts);
        return popover.then(overlay => {
            this.overlay = overlay;
            return overlay.present().then(() => {
                this.isExpanded = true;
                return overlay;
            });
        });
    }
    openActionSheet() {
        const interfaceOptions = Object.assign({}, this.interfaceOptions);
        const actionSheetButtons = this.childOpts.map(option => {
            return {
                role: (option.selected ? 'selected' : ''),
                text: option.textContent,
                handler: () => {
                    this.value = option.value;
                }
            };
        });
        actionSheetButtons.push({
            text: this.cancelText,
            role: 'cancel',
            handler: () => {
                this.ionCancel.emit(this);
            }
        });
        const actionSheetOpts = Object.assign(interfaceOptions, {
            buttons: actionSheetButtons,
            cssClass: 'select-action-sheet' + (interfaceOptions.cssClass ? ' ' + interfaceOptions.cssClass : '')
        });
        const actionSheet = this.actionSheetCtrl.create(actionSheetOpts);
        return actionSheet.then(overlay => {
            this.overlay = overlay;
            return overlay.present().then(() => {
                this.isExpanded = true;
                return overlay;
            });
        });
    }
    openAlert() {
        const interfaceOptions = Object.assign({}, this.interfaceOptions);
        const label = this.getLabel();
        const labelText = (label) ? label.textContent : null;
        const alertOpts = Object.assign(interfaceOptions, {
            title: interfaceOptions.title ? interfaceOptions.title : labelText,
            inputs: this.childOpts.map(o => {
                return {
                    type: (this.multiple ? 'checkbox' : 'radio'),
                    label: o.textContent,
                    value: o.value,
                    checked: o.selected,
                    disabled: o.disabled
                };
            }),
            buttons: [
                {
                    text: this.cancelText,
                    role: 'cancel',
                    handler: () => {
                        this.ionCancel.emit(this);
                    }
                },
                {
                    text: this.okText,
                    handler: (selectedValues) => {
                        this.value = selectedValues;
                    }
                }
            ],
            cssClass: 'select-alert ' +
                (this.multiple ? 'multiple-select-alert' : 'single-select-alert') +
                (interfaceOptions.cssClass ? ' ' + interfaceOptions.cssClass : '')
        });
        const alert = this.alertCtrl.create(alertOpts);
        return alert.then(overlay => {
            this.overlay = overlay;
            return overlay.present().then(() => {
                this.isExpanded = true;
                return overlay;
            });
        });
    }
    /**
     * Close the select interface.
     */
    close() {
        // TODO check !this.overlay || !this.isFocus()
        if (!this.overlay) {
            return Promise.resolve();
        }
        const overlay = this.overlay;
        this.overlay = null;
        this.isExpanded = false;
        return overlay.dismiss();
    }
    onKeyUp() {
        this.keyFocus = true;
    }
    onFocus() {
        this.ionFocus.emit();
    }
    onBlur() {
        this.keyFocus = false;
        this.ionBlur.emit();
    }
    hasValue() {
        if (Array.isArray(this.value)) {
            return this.value.length > 0;
        }
        return (this.value !== null && this.value !== undefined && this.value !== '');
    }
    emitStyle() {
        clearTimeout(this.styleTmr);
        this.styleTmr = setTimeout(() => {
            this.ionStyle.emit({
                'select': true,
                'select-disabled': this.disabled,
                'input-has-value': this.hasValue()
            });
        });
    }
    hostData() {
        return {
            class: {
                'select-disabled': this.disabled,
                'select-key': this.keyFocus
            }
        };
    }
    render() {
        let addPlaceholderClass = false;
        let selectText = this.selectedText || this.text;
        if (!selectText && this.placeholder) {
            selectText = this.placeholder;
            addPlaceholderClass = true;
        }
        const selectTextClasses = {
            'select-text': true,
            'select-placeholder': addPlaceholderClass
        };
        return [
            h("div", { role: 'textbox', "aria-multiline": 'false', class: selectTextClasses }, selectText),
            h("div", { class: 'select-icon', role: 'presentation' },
                h("div", { class: 'select-icon-inner' })),
            h("button", { type: 'button', role: 'combobox', "aria-haspopup": 'dialog', "aria-expanded": this.isExpanded, "aria-labelledby": this.labelId, "aria-disabled": this.disabled ? 'true' : false, onClick: this.open.bind(this), onKeyUp: this.onKeyUp.bind(this), onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), class: 'select-cover' },
                h("slot", null)),
            h("input", { type: 'hidden', name: this.name, value: this.value })
        ];
    }
    static get is() { return "ion-select"; }
    static get host() { return { "theme": "select" }; }
    static get properties() { return { "actionSheetCtrl": { "connect": "ion-action-sheet-controller" }, "alertCtrl": { "connect": "ion-alert-controller" }, "cancelText": { "type": String, "attr": "cancel-text" }, "disabled": { "type": Boolean, "attr": "disabled", "watchCallbacks": ["disabledChanged"] }, "el": { "elementRef": true }, "interface": { "type": String, "attr": "interface" }, "interfaceOptions": { "type": "Any", "attr": "interface-options" }, "isExpanded": { "state": true }, "keyFocus": { "state": true }, "multiple": { "type": Boolean, "attr": "multiple" }, "name": { "type": String, "attr": "name", "mutable": true }, "okText": { "type": String, "attr": "ok-text" }, "placeholder": { "type": String, "attr": "placeholder" }, "popoverCtrl": { "connect": "ion-popover-controller" }, "selectedText": { "type": String, "attr": "selected-text" }, "text": { "state": true }, "value": { "type": "Any", "attr": "value", "mutable": true, "watchCallbacks": ["valueChanged"] } }; }
    static get events() { return [{ "name": "ionChange", "method": "ionChange", "bubbles": true, "cancelable": true, "composed": true }, { "name": "ionCancel", "method": "ionCancel", "bubbles": true, "cancelable": true, "composed": true }, { "name": "ionFocus", "method": "ionFocus", "bubbles": true, "cancelable": true, "composed": true }, { "name": "ionBlur", "method": "ionBlur", "bubbles": true, "cancelable": true, "composed": true }, { "name": "ionStyle", "method": "ionStyle", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "ion-select {\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n}\n\n.item .select {\n  position: static;\n  max-width: 45%;\n}\n\n.select-cover {\n  left: 0;\n  top: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n}\n\n.select-text {\n  overflow: hidden;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  min-width: 16px;\n  font-size: inherit;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.item-multiple-inputs ion-select {\n  position: relative;\n}\n\n.select-disabled,\n.item-select-disabled ion-label {\n  opacity: .4;\n  pointer-events: none;\n}\n\n.select-popover ion-list {\n  margin: -1px 0;\n}\n\n.select-option {\n  display: none;\n}\n\n.select button:focus {\n  outline: none;\n}\n\n.select-key button {\n  border: 2px solid #5e9ed6;\n}\n\n.item-label-stacked .select,\n.item-label-floating .select {\n  max-width: 100%;\n}\n\n.select-md {\n  padding: 13px 8px 13px 16px;\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n  color: var(--ion-text-md-color, var(--ion-text-color, #000));\n}\n\n.select-md .select-placeholder {\n  color: var(--ion-text-md-color-step-600, var(--ion-text-color-step-600, #999999));\n}\n\n.select-md .item-select ion-label {\n  margin-left: 0;\n}\n\n.select-md .select-icon {\n  position: relative;\n  width: 12px;\n  height: 19px;\n}\n\n.select-md .select-icon .select-icon-inner {\n  left: 5px;\n  top: 50%;\n  margin-top: -3px;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-top: 5px solid;\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n  color: var(--ion-text-md-color-step-600, var(--ion-text-color-step-600, #999999));\n  pointer-events: none;\n}\n\n.item-label-stacked .select-md,\n.item-label-floating .select-md {\n  padding-left: 0;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.select-popover-md .radio-icon {\n  display: none;\n}\n\n.select-popover-md .item-radio-checked {\n  background-color: var(--ion-background-md-color-step-150, var(--ion-background-color-step-150, #d9d9d9));\n}\n\n.select-popover-md .item-radio-checked ion-label {\n  color: initial;\n}"; }
    static get styleMode() { return "md"; }
}
let selectIds = 0;

class SelectOption {
    constructor() {
        /**
         * If true, the user cannot interact with the select option. Defaults to `false`.
         */
        this.disabled = false;
        /**
         * If true, the element is selected.
         */
        this.selected = false;
        this.id = 'ion-selopt-' + (selectOptionIds++);
    }
    componentWillLoad() {
        this.value = this.value || this.el.textContent;
    }
    componentDidLoad() {
        this.ionSelectOptionDidLoad.emit();
    }
    componentDidUnload() {
        this.ionSelectOptionDidUnload.emit();
    }
    hostData() {
        return {
            'role': 'option',
            'id': this.id
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-select-option"; }
    static get host() { return { "theme": "select-option" }; }
    static get properties() { return { "disabled": { "type": Boolean, "attr": "disabled" }, "el": { "elementRef": true }, "selected": { "type": Boolean, "attr": "selected", "mutable": true }, "value": { "type": String, "attr": "value", "mutable": true } }; }
    static get events() { return [{ "name": "ionSelectOptionDidLoad", "method": "ionSelectOptionDidLoad", "bubbles": true, "cancelable": true, "composed": true }, { "name": "ionSelectOptionDidUnload", "method": "ionSelectOptionDidUnload", "bubbles": true, "cancelable": true, "composed": true }]; }
}
let selectOptionIds = 0;

class SelectPopover {
    constructor() {
        this.options = [];
    }
    onSelect(ev) {
        const option = this.options.find(o => o.value === ev.target.value);
        option && option.handler && option.handler();
    }
    render() {
        return (h("ion-list", { "no-lines": this.mode === 'md' },
            this.title ? h("ion-list-header", null, this.title) : null,
            this.subTitle || this.message
                ? h("ion-item", null,
                    h("ion-label", null,
                        this.subTitle ? h("h3", null, this.subTitle) : null,
                        this.message ? h("p", null, this.message) : null))
                : null,
            h("ion-radio-group", null, this.options.map(option => h("ion-item", null,
                h("ion-label", null, option.text),
                h("ion-radio", { checked: option.checked, value: option.value, disabled: option.disabled }))))));
    }
    static get is() { return "ion-select-popover"; }
    static get host() { return { "theme": "select-popover" }; }
    static get properties() { return { "message": { "type": String, "attr": "message" }, "options": { "type": "Any", "attr": "options" }, "subTitle": { "type": String, "attr": "sub-title" }, "title": { "type": String, "attr": "title" } }; }
}

export { Select as IonSelect, SelectOption as IonSelectOption, SelectPopover as IonSelectPopover };
