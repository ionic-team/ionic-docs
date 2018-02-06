/*! Built with http://stenciljs.com */
(function(appNamespace,publicPath){"use strict";
(function(publicPath){
    /** @stencil/router global **/

    Context.activeRouter = (function () {
        let state = {};
        let groups = {};
        let matchedGroups = {};
        const nextListeners = [];
        function getDefaultState() {
            return {
                location: {
                    pathname: Context.window.location.pathname,
                    search: Context.window.location.search
                }
            };
        }
        function set(value) {
            state = Object.assign({}, state, value);
            clearGroups();
            dispatch();
        }
        function get(attrName) {
            if (Object.keys(state).length === 0) {
                return getDefaultState();
            }
            if (!attrName) {
                return state;
            }
            return state[attrName];
        }
        /**
         *  When we get a new location, clear matching groups
         *  so we give them a chance to re-match and re-render.
         */
        function clearGroups() {
            matchedGroups = {};
        }
        function dispatch() {
            const listeners = nextListeners;
            for (let i = 0; i < listeners.length; i++) {
                const listener = listeners[i];
                listener();
            }
        }
        function subscribe(listener) {
            if (typeof listener !== 'function') {
                throw new Error('Expected listener to be a function.');
            }
            let isSubscribed = true;
            nextListeners.push(listener);
            return function unsubscribe() {
                if (!isSubscribed) {
                    return;
                }
                isSubscribed = false;
                const index = nextListeners.indexOf(listener);
                nextListeners.splice(index, 1);
            };
        }
        /**
         * Remove a Route from all groups
         */
        function removeFromGroups(route) {
            for (let groupName in groups) {
                const group = groups[groupName];
                groups[groupName] = group.filter(r => r !== route);
            }
        }
        /**
         * Add a Route to the given group
         */
        function addToGroup(route, groupName) {
            if (!(groupName in groups)) {
                groups[groupName] = [];
            }
            groups[groupName].push(route);
        }
        /**
         * Check if a group already matched once
         */
        function didGroupAlreadyMatch(groupName) {
            if (!groupName) {
                return false;
            }
            return matchedGroups[groupName] === true;
        }
        /**
         * Set that a group has matched
         */
        function setGroupMatched(groupName) {
            matchedGroups[groupName] = true;
        }
        return {
            set,
            get,
            subscribe,
            addToGroup,
            removeFromGroups,
            didGroupAlreadyMatch,
            setGroupMatched
        };
    })();
})(publicPath);
})("App","/build/app/");