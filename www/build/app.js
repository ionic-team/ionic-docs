/*! Built with http://stenciljs.com */
(function(win, doc, appNamespace, urlNamespace, publicPath, appCore, appCoreSsr, appCorePolyfilled, hydratedCssClass, components) {

function init(win, doc, appNamespace, urlNamespace, publicPath, appCore, appCorePolyfilled, hydratedCssClass, components, x, y) {
    // create global namespace if it doesn't already exist
    (win[appNamespace] = win[appNamespace] || {}).components = components;
    y = components.filter(function (c) { return c[2]; }).map(function (c) { return c[0]; });
    if (y.length) {
        // auto hide components until they been fully hydrated
        // reusing the "x" and "i" variables from the args for funzies
        x = doc.createElement('style');
        x.innerHTML = y.join() + '{visibility:hidden}.' + hydratedCssClass + '{visibility:inherit}';
        x.setAttribute('data-styles', '');
        doc.head.insertBefore(x, doc.head.firstChild);
    }
    // get this current script
    // script tag cannot use "async" attribute
    x = doc.scripts[doc.scripts.length - 1];
    if (x && x.src) {
        y = x.src.split('/').slice(0, -1);
        publicPath = (y.join('/')) + (y.length ? '/' : '') + urlNamespace + '/';
    }
    // request the core this browser needs
    // test for native support of custom elements and fetch
    // if either of those are not supported, then use the core w/ polyfills
    // also check if the page was build with ssr or not
    x = doc.createElement('script');
    x.src = publicPath + ((!urlContainsFlag(win) && supportsCustomElements(win) && supportsEsModules(x) && supportsFetch(win) && supportsCssVariables(win)) ? appCore : appCorePolyfilled);
    x.setAttribute('data-path', publicPath);
    x.setAttribute('data-namespace', urlNamespace);
    doc.head.appendChild(x);
}
function urlContainsFlag(win) {
    return win.location.search.indexOf('core=es5') > -1;
}
function supportsEsModules(scriptElm) {
    // detect static ES module support
    const staticModule = 'noModule' in scriptElm;
    if (!staticModule) {
        return false;
    }
    // detect dynamic import support
    try {
        new Function('import("")');
        return true;
    }
    catch (err) {
        return false;
    }
}
function supportsCustomElements(win) {
    return win.customElements;
}
function supportsFetch(win) {
    return win.fetch;
}
function supportsCssVariables(win) {
    return (win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'));
}


init(win, doc, appNamespace, urlNamespace, publicPath, appCore, appCoreSsr, appCorePolyfilled, hydratedCssClass, components);

})(window, document, "App","app","/build/app/","app.core.js","es5-build-disabled.js","hydrated",[["app-marked","app-marked",0,[["content",5],["doc",1,1,2],["el",7],["isServer",3,0,0,"isServer"],["sections",5]]],["dropdown-ecosystem","dropdown-ecosystem",1,[["active",5]]],["dropdown-framework","app-marked",1,[["active",5]]],["ionic-docs","app-marked",1],["lazy-iframe","lazy-iframe",1,[["el",7],["realSrc",5],["src",1,1,2],["title",1,1,2]]],["menu-expander","menu-expander",1,[["el",7],["isExpanded",5],["service",1,1,2]]],["site-content","site-content",1],["site-header","app-marked",1],["site-menu","app-marked",1],["site-preview-app","site-preview-app",1],["site-search","site-search",1],["stencil-async-content","stencil-async-content",0,[["content",5],["documentLocation",1,1,2]]],["stencil-route","stencil-async-content",0,[["activeRouter",3,0,0,"activeRouter"],["component",1,1,2],["componentProps",1,1,1],["exact",1,1,3],["group",1,1,2],["location",3,0,0,"location"],["match",5],["routeRender",1,1,1],["url",1,1,1]]],["stencil-route-link","stencil-async-content",0,[["activeClass",1,1,2],["activeRouter",3,0,0,"activeRouter"],["custom",1,1,3],["exact",1,1,3],["location",3,0,0,"location"],["match",5],["url",1,1,2],["urlMatch",1,1,1]]],["stencil-route-title","stencil-async-content",0,[["activeRouter",3,0,0,"activeRouter"],["title",1,1,2]]],["stencil-router","stencil-async-content",0,[["activeRouter",3,0,0,"activeRouter"],["match",5],["root",1,1,2],["titleSuffix",1,1,2]]],["stencil-router-redirect","stencil-async-content",0,[["activeRouter",3,0,0,"activeRouter"],["url",1,1,2]]],["table-of-contents","table-of-contents",1,[["el",7],["headings",5]]],["test-app","test-app"],["test-demo-four","test-demo-four",0,[["history",1,1,1],["match",1,1,1],["pages",1,1,1]]],["test-demo-six","test-demo-six",0,[["history",1,1,1],["match",1,1,1],["pages",1,1,1]]],["test-demo-three","test-demo-three",0,[["history",1,1,1],["match",1,1,1],["pages",1,1,1]]],["wistia-embed","lazy-iframe",0,[["wid",1,1,2]]]]);