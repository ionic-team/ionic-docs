/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const { h, Context } = window.Ionic;

function updateTestResults(displayWhen) {
    displayWhen.passesTest = getTestResult(displayWhen);
}
function isPlatformMatch(platforms, multiPlatformString) {
    const userProvidedPlatforms = multiPlatformString.replace(/\s/g, '').split(',');
    for (const userProvidedPlatform of userProvidedPlatforms) {
        for (const platform of platforms) {
            if (userProvidedPlatform === platform) {
                return true;
            }
        }
    }
    return false;
}
function isModeMatch(config, multiModeString) {
    // you can only ever be in one mode, so if an entry from the list matches, return true
    const modes = multiModeString.replace(/\s/g, '').split(',');
    for (const mode of modes) {
        if (config.get('mode') === mode) {
            return true;
        }
    }
    return false;
}
function isMediaQueryMatch(mediaQuery) {
    return window.matchMedia(mediaQuery).matches;
}
function isSizeMatch(multiSizeString) {
    const sizes = multiSizeString.replace(/\s/g, '').split(',');
    const booleans = sizes.map(size => {
        const mediaQuery = sizeToMediaQueryMap.get(size);
        if (!mediaQuery) {
            return false;
        }
        return window.matchMedia(mediaQuery).matches;
    });
    return booleans.reduce((prev, current) => prev || current);
}
function getTestResult(displayWhen) {
    const resultsToConsider = [];
    if (displayWhen.mediaQuery) {
        resultsToConsider.push(isMediaQueryMatch(displayWhen.mediaQuery));
    }
    if (displayWhen.size) {
        resultsToConsider.push(isSizeMatch(displayWhen.size));
    }
    if (displayWhen.mode) {
        resultsToConsider.push(isModeMatch(displayWhen.config, displayWhen.mode));
    }
    if (displayWhen.platform) {
        const platformNames = displayWhen.calculatedPlatforms.map(platformConfig => platformConfig.name);
        resultsToConsider.push(isPlatformMatch(platformNames, displayWhen.platform));
    }
    if (displayWhen.orientation) {
        resultsToConsider.push(isOrientationMatch(displayWhen.orientation));
    }
    if (!resultsToConsider.length) {
        return true;
    }
    if (resultsToConsider.length === 1) {
        return resultsToConsider[0];
    }
    return resultsToConsider.reduce((prev, current) => {
        if (displayWhen.or) {
            return prev || current;
        }
        return prev && current;
    });
}
function isOrientationMatch(orientation) {
    if (orientation === 'portrait') {
        return isPortrait();
    }
    else if (orientation === 'landscape') {
        return !isPortrait();
    }
    // it's an invalid orientation, so just return it
    return false;
}
function isPortrait() {
    return window.matchMedia('(orientation: portrait)').matches;
}
const sizeToMediaQueryMap = new Map();
sizeToMediaQueryMap.set('xs', '(min-width: 0px)');
sizeToMediaQueryMap.set('sm', '(min-width: 576px)');
sizeToMediaQueryMap.set('md', '(min-width: 768px)');
sizeToMediaQueryMap.set('lg', '(min-width: 992px)');
sizeToMediaQueryMap.set('xl', '(min-width: 1200px)');

class HideWhen {
    constructor() {
        this.orientation = null;
        this.mediaQuery = null;
        this.size = null;
        this.mode = null;
        this.platform = null;
        this.or = false;
        this.passesTest = false;
    }
    componentWillLoad() {
        return updateTestResults(this);
    }
    hostData() {
        return {
            class: {
                'show-content': !this.passesTest,
                'hide-content': this.passesTest
            }
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-hide-when"; }
    static get properties() { return { "calculatedPlatforms": { "context": "platforms" }, "config": { "context": "config" }, "element": { "elementRef": true }, "mediaQuery": { "type": String, "attr": "media-query" }, "mode": { "type": String, "attr": "mode" }, "or": { "type": Boolean, "attr": "or" }, "orientation": { "type": String, "attr": "orientation" }, "passesTest": { "state": true }, "platform": { "type": String, "attr": "platform" }, "size": { "type": String, "attr": "size" } }; }
    static get style() { return "ion-hide-when.show-content {\n  display: block;\n}\n\nion-hide-when.hide-content {\n  display: none !important;\n}"; }
}

class ShowWhen {
    constructor() {
        this.orientation = null;
        this.mediaQuery = null;
        this.size = null;
        this.mode = null;
        this.platform = null;
        this.or = false;
        this.passesTest = false;
    }
    componentWillLoad() {
        return updateTestResults(this);
    }
    hostData() {
        return {
            class: {
                'show-content': this.passesTest,
                'hide-content': !this.passesTest
            }
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-show-when"; }
    static get properties() { return { "calculatedPlatforms": { "context": "platforms" }, "config": { "context": "config" }, "element": { "elementRef": true }, "mediaQuery": { "type": String, "attr": "media-query" }, "mode": { "type": String, "attr": "mode" }, "or": { "type": Boolean, "attr": "or" }, "orientation": { "type": String, "attr": "orientation" }, "passesTest": { "state": true }, "platform": { "type": String, "attr": "platform" }, "size": { "type": String, "attr": "size" } }; }
    static get style() { return "ion-show-when.show-content {\n  display: block;\n}\n\nion-show-when.hide-content {\n  display: none !important;\n}"; }
}

export { HideWhen as IonHideWhen, ShowWhen as IonShowWhen };
