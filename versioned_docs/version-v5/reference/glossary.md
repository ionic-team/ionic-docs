# Glossary

<div id="what-is">

<section id="android-sdk">
  <a href="#android-sdk">
    <h3>Android SDK</h3>
  </a>
  <p>
    The{' '}
    <a href="http://developer.android.com/sdk/index.html" target="_blank">
      Android SDK
    </a>{' '}
    is a software development kit built for developers building for Google's Android Platform. It includes tools for
    building, testing, and debugging Android applications.
  </p>
</section>

<section id="android-studio">
  <a href="#android-studio">
    <h3>Android Studio</h3>
  </a>
  <p>
    <a href="https://developer.android.com/studio/" target="_blank">
      Android Studio
    </a>{' '}
    is the official Integrated Development Environment (IDE) for Native Android app development.
  </p>
</section>

<section id="autoprefixer">
  <a href="#autoprefixer">
    <h3>Autoprefixer</h3>
  </a>
  <p>
    <a href="https://github.com/postcss/autoprefixer" target="_blank">
      Autoprefixer
    </a>{' '}
    is a tool that adds vendor-specific-prefixes to hand-written Sass/CSS code. This ensures that standardized CSS rules
    you write will be applied across all supporting browsers. For example, instead of having to know every flexbox
    syntax used by various browsers, autoprefixer allows you to just write <code>display: flex;</code> and it'll
    automatically plug in the correct CSS.
  </p>
</section>

<section id="bundling">
  <a href="#bundling">
    <h3>Bundling</h3>
  </a>
  <p>
    Bundling is the process of taking an app's dependencies (code you've written plus any npm modules installed) and
    compiling/transpiling them down to one single file.
  </p>
</section>

<section id="capacitor">
  <a href="#capacitor">
    <h3>Capacitor</h3>
  </a>
  <p>
    <a href="https://capacitor.ionicframework.com/" target="_blank">
      Capacitor
    </a>{' '}
    is an open source cross-platform app runtime that allows web-based apps to run natively on iOS, Android, Electron,
    and the web. It's helpful to refer to these apps "Native Progressive Web Apps" and they represent the next evolution
    beyond the traditional Hybrid app mentality. Capacitor was created and is actively developed/supported by Ionic, the
    company.
  </p>
</section>

<section id="cli">
  <a href="#cli">
    <h3>CLI</h3>
  </a>
  <p>
    A CLI, or <strong>C</strong>ommand-<strong>L</strong>ine <strong>I</strong>nterface, is a text-based interface for
    interacting with a program. The common command-line app for a Mac user is the Terminal app, and Windows users often
    use Command Prompt. The Ionic community often uses this term to refer to{' '}
    <a href="https://ionicframework.com/docs/v1/cli/">Ionic's CLI</a>. Ionic's CLI can be used for a number of things,
    such as creating production builds of an app, running the development server, and accessing{' '}
    <a href="https://ionic.io/appflow" target="_blank">
      Ionic commercial services
    </a>
    .
  </p>
</section>

<section id="commonjs">
  <a href="#commonjs">
    <h3>CommonJS</h3>
  </a>
  <p>
    <a href="https://webpack.github.io/docs/commonjs.html" target="_blank">
      CommonJS
    </a>{' '}
    is a group that defines standard formats for JavaScript APIs. They have defined standards for JavaScript modules and
    packages.
  </p>
</section>

<section id="cordova">
  <a href="#cordova">
    <h3>Cordova</h3>
  </a>
  <p>
    <a href="https://cordova.apache.org" target="_blank">
      Apache Cordova
    </a>{' '}
    is an open source mobile application development framework that transforms standard HTML/CSS/JS into full-fledged
    native apps. It provides a JavaScript API for accessing native device functionality, such as the camera or
    accelerometer. Cordova contains the necessary build tools for packaging webapps for iOS, Android, and Windows Phone.
  </p>
</section>

<section id="cors">
  <a href="#cors">
    <h3>CORS</h3>
  </a>
  <p>
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" target="_blank">
      CORS
    </a>{' '}
    (Cross-Origin Resource Sharing) is a mechanism for servers to control client access to web assets. See the{' '}
    <a href="../troubleshooting/cors">CORS FAQs</a> for more information.
  </p>
</section>

<section id="css-variables">
  <a href="#css-variables">
    <h3>CSS Variables</h3>
  </a>
  <p>
    You may be familiar with variables from Sass.{' '}
    <a href="https://developers.google.com/web/updates/2016/02/css-variables-why-should-you-care" target="_blank">
      CSS Variables
    </a>{' '}
    enable the same functionality but are built into the browser. CSS Variables are available in all evergreen browsers.
  </p>
</section>

<section id="decorators">
  <a href="#decorators">
    <h3>Decorators</h3>
  </a>
  <p>
    Decorators are expressions that return a function. They allow you to take an existing function, and extend its
    behavior. With TypeScript, you can also decorate <i>classes</i> and <i>parameters</i>. When you decorate a{' '}
    <strong>class</strong>, you are wrapping and extending the behavior of its constructor. In other words, the
    decorator will add some functionality when the constructor is called, and will then return the original constructor.
    When you decorate a <strong>parameter</strong>, you are wrapping the argument that gets passed in for that
    parameter. The decorator will add functionality when an argument is passed to the method, and then return the
    original argument.
  </p>
</section>

<section id="es5">
  <a href="#es5">
    <h3>ES5</h3>
  </a>
  <p>
    ES5 refers to EcmaScript 5th Edition. A simple way to put it is that ES5 is the version of JavaScript which
    developers are most familiar with today.
  </p>
</section>

<section id="es2015-es6">
  <a href="#es2015-es6">
    <h3>ES2015/ES6</h3>
  </a>
  <p>
    A wide range of new features were introduced in this version of JavaScript, including classes, modules, iterators,
    and promises. Evergreen browsers (Chrome, Safari, Firefox and Edge) have full support for ES6, but to use ES6
    features in older browsers, tools such as <a href="#babel">Babel</a> and <a href="#typescript">TypeScript</a> have
    to <a href="#transpiler">transpile</a> ES6 code down to ES5.
  </p>
</section>

<section id="es2016-es7">
  <a href="#es2016-es7">
    <h3>ES2016/ES7</h3>
  </a>
  <p>
    This version of JavaScript added a number of new features to the language, including <code>Array.includes</code> and
    the exponentiation operator. This version of JavaScript is fully supported by all evergreen browsers (Chrome,
    Safari, Firefox and Edge)
  </p>
</section>

<section id="es2017-es8">
  <a href="#es2017-es8">
    <h3>ES2017/ES8</h3>
  </a>
  <p>
    This version of JavaScript is the latest standard. It is currently in the final stage before becoming the new
    official standard. This spec includes Async/Await (already in all evergreen browsers) and shared memory/atomics.
  </p>
</section>

<section id="genymotion">
  <a href="#genymotion">
    <h3>Genymotion</h3>
  </a>
  <p>
    Genymotion is a third-party Android emulator. It is extremely fast, and is useful for quickly testing your app on
    Android. Check out our <a href="../developing/tips#using-genymotion-android">resource section</a> on Genymotion for
    more info.
  </p>
</section>

<section id="git">
  <a href="#git">
    <h3>Git</h3>
  </a>
  <p>
    <a href="https://git-scm.com/" target="_blank">
      Git
    </a>{' '}
    is a distributed version control system for managing code. It allows development teams to contribute code to the
    same project without causing code conflicts.
  </p>
</section>

<section id="gulp">
  <a href="#gulp">
    <h3>Gulp</h3>
  </a>
  <p>
    <a href="http://gulpjs.com/" target="_blank">
      Gulp
    </a>{' '}
    is a tool for running tasks which can be used to build your app. Common build tasks include transpiling{' '}
    <a href="#es2015-es6">ES6</a> to <a href="#es5">ES5</a>, turning <a href="#sass">Sass</a> into CSS, minifying code,
    and concatenating files.
  </p>
</section>

<section id="es-modules">
  <a href="#es-modules">
    <h3>ES Modules</h3>
  </a>
  <p>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import" target="_blank">
      ES Modules
    </a>{' '}
    brings the concept of modules natively to JavaScript. With modules, classes and variables are no longer in the
    global scope and have to be explicitly imported into your project to be used. This makes it much easier to
    understand where your code is coming from and increases modularity and compartmentalization of functionality.
  </p>
</section>

<section id="ionicons">
  <a href="#ionicons">
    <h3>Ionicons</h3>
  </a>
  <p>
    <a href="https://ionic.io/ionicons/" target="_blank">
      Ionicons
    </a>{' '}
    is an open-source icon set used and created by Ionic. It includes 1:1 iOS and Material Design icons, as well as
    commonly used social/application icons. Ionicons is included by default in Ionic distributions, but they can also be
    used in any project.
  </p>
</section>

<section id="karma">
  <a href="#karma">
    <h3>Karma</h3>
  </a>
  <p>
    <a href="https://karma-runner.github.io/latest/index.html" target="_blank">
      Karma
    </a>{' '}
    is a test runner that will run an app's test inside a real browser. It executes test cases, written in any testing
    framework, in a real browser. Karma was originally written for use with Angular 1.
  </p>
</section>

<section id="module">
  <a href="#module">
    <h3>Module</h3>
  </a>
  <p>
    Modules in JavaScript are small, independent, and reusable pieces or code that are isolated from one another and the
    Global scope.
  </p>
</section>

<section id="monorepo">
  <a href="#monorepo">
    <h3>Monorepo</h3>
  </a>
  <p>
    A <strong>monorepo</strong> is a single git repository with multiple projects. Advantages include simpler
    organization, shared tooling and dependencies, and better collaboration with teammates.
  </p>
</section>

<section id="livereload">
  <a href="#livereload">
    <h3>Live Reload</h3>
  </a>
  <p>
    <strong>Live Reload</strong> (or <strong>live-reload</strong>) is a tool that automatically reloads the browser or{' '}
    <a href="../core-concepts/webview">Web View</a> when it detects changes in your app. In some cases, it can replace
    parts of your app without having to reload the entire window. See the{' '}
    <a href="../cli/livereload">Live Reload docs</a> for more information.
  </p>
</section>

<section id="node">
  <a href="#node">
    <h3>Node</h3>
  </a>
  <p>
    <a href="https://nodejs.org/" target="_blank">
      Node
    </a>{' '}
    is a runtime environment that allows JavaScript to be written on the server-side. In addition to being used for web
    services, node is often used to build developer tools, such as the <a href="#cli">Ionic CLI</a>.
  </p>
</section>

<section id="npm">
  <a href="#npm">
    <h3>npm</h3>
  </a>
  <p>
    <a href="https://www.npmjs.com/" target="_blank">
      npm
    </a>{' '}
    is the package manager for <a href="#node">node</a>. It allows developers to install, share, and package node
    modules. Ionic can be installed with npm, along with a number of its dependencies.
  </p>
</section>

<section id="observable">
  <a href="#observable">
    <h3>Observable</h3>
  </a>
  <p>
    An observable is an object that emits events (or notifications). An observer is an object that listens for these
    events, and does something when an event is received. Together, they create a pattern that can be used for
    programming asynchronously.
  </p>
</section>

<section id="package-id">
  <a href="#package-id">
    <h3>Package ID</h3>
  </a>
  <p>
    Referred to by Apple as <strong>Bundle ID</strong> and by Android as <strong>Application ID</strong>, the{' '}
    <strong>Package ID</strong> is used for identifying apps published to the App Store/Play Store. It is a string
    formatted in{' '}
    <a href="https://en.wikipedia.org/wiki/Reverse_domain_name_notation" target="_blank">
      reverse-DNS notation
    </a>
    .
  </p>
</section>

<section id="polyfill">
  <a href="#polyfill">
    <h3>Polyfill</h3>
  </a>
  <p>
    A{' '}
    <a href="https://remysharp.com/2010/10/08/what-is-a-polyfill" target="_blank">
      polyfill
    </a>{' '}
    is a bit of code that adds functionality to the browser and normalizes browser differences. This is similar to a{' '}
    <a href="#shim">shim</a>, but where a shim has it's own API, a polyfill let's the expect API of the browser be used.
  </p>
</section>

<section id="protractor">
  <a href="#protractor">
    <h3>Protractor</h3>
  </a>
  <p>
    <a href="https://angular.github.io/protractor/#/" target="_blank">
      Protractor
    </a>{' '}
    is a testing framework written for and by the Angular team. Protractor can be used with test runners, like Karma,
    for end-to-end testing. Test runners allow you to quickly and programmatically verify code quality.
  </p>
</section>

<section id="sass">
  <a href="#sass">
    <h3>Sass</h3>
  </a>
  <p>
    Sass is a stylesheet language that compiles to CSS and is used by Ionic. Sass is like CSS, but with extra features
    such as{' '}
    <a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variables_" target="_blank">
      variables
    </a>
    ,{' '}
    <a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixins" target="_blank">
      mixins
    </a>
    , and{' '}
    <a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_10" target="_blank">
      loops
    </a>
    .
  </p>
</section>

<section id="scoped">
  <a href="#scoped">
    <h3>Scoped Encapsulation</h3>
  </a>
  <p>
    A component that uses scoped encapsulation will automatically scope its CSS by appending each of the styles with a
    data attribute at run time. Overriding scoped selectors in CSS requires a{' '}
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity" target="_blank">
      higher specificity
    </a>{' '}
    selector. Scoped components can also be styled using{' '}
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank">
      CSS Custom Properties
    </a>
    .
  </p>
</section>

<section id="shadow">
  <a href="#shadow">
    <h3>Shadow DOM</h3>
  </a>
  <p>
    <a href="https://developers.google.com/web/fundamentals/web-components/shadowdom" target="_blank">
      Shadow DOM
    </a>{' '}
    is a native browser solution for DOM and style encapsulation of a component. It shields the component from its
    surrounding environment. To externally style internal elements of a Shadow DOM component you must use{' '}
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank">
      CSS Custom Properties
    </a>{' '}
    or{' '}
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part" target="_blank">
      CSS Shadow Parts
    </a>
    .
  </p>
</section>

<section id="shim">
  <a href="#shim">
    <h3>Shim</h3>
  </a>
  <p>
    A shim is a piece of code that normalizes an APIs across browsers. A shim can have it's own API that hides the
    browser specific implementation from the end user.
  </p>
</section>

<section id="transpiler">
  <a href="#transpiler">
    <h3>Transpiler</h3>
  </a>
  <p>
    Transpilation is the process of converting code from one language to another language prior to execution. Typically,
    a transpiler will convert a high-level language to another high-level language. The most common type of{' '}
    <em>transpilation</em> in Ionic Framework is converting <a href="#es2015-es6">ES2015/ES6</a> (
    <a href="#typescript">TypeScript</a>) to <a href="#es5">ES5</a> (traditional JavaScript).
  </p>
</section>

<section id="typescript">
  <a href="#typescript">
    <h3>TypeScript</h3>
  </a>
  <p>
    <a href="http://www.typescriptlang.org" target="_blank">
      TypeScript
    </a>{' '}
    is a superset of JavaScript, which means it gives you JavaScript, along with a number of extra features such as{' '}
    <a href="http://www.typescriptlang.org/Handbook#basic-types" target="_blank">
      type declarations
    </a>{' '}
    and{' '}
    <a href="http://www.typescriptlang.org/Handbook#interfaces" target="_blank">
      interfaces
    </a>
    . Although Ionic is built with TypeScript, using it to build an Ionic app is completely optional.
  </p>
</section>

<section id="unit-tests">
  <a href="#unit-tests">
    <h3>Unit Tests</h3>
  </a>
  <p>
    Unit Tests and unit testing are a way to test small pieces of code to see if they behave as expected. Unit testing
    frameworks include Jasmine, Mocha, QUnit, and many others.
  </p>
</section>

<section id="webpack">
  <a href="#webpack">
    <h3>Webpack</h3>
  </a>
  <p>
    <a href="https://webpack.github.io/" target="_blank">
      Webpack
    </a>{' '}
    bundles together JavaScript modules and other assets. It can be used to create single or multiple "chunks" that are
    only loaded when needed. Webpack can be used to take many files and dependencies and bundle them into one file, or
    other types.
  </p>
</section>

<section id="web-standards">
  <a href="#web-standards">
    <h3>Web Standards</h3>
  </a>
  <p>
    The{' '}
    <a href="https://www.w3.org/" target="_blank">
      World Wide Web Consortium
    </a>{' '}
    (W3C) is the standards organization for the Web. Together, industry leaders and the public work together to develop{' '}
    <a href="https://www.w3.org/standards/" target="_blank">
      web standards
    </a>
    , which are a set of protocols, specifications, and technologies that define the Web Platform.
  </p>
</section>

<section id="xcode">
  <a href="#xcode">
    <h3>Xcode</h3>
  </a>
  <p>
    <a href="https://developer.apple.com/xcode/" target="_blank">
      Xcode
    </a>{' '}
    is an Apple IDE (integrated development environment) for software development on Apple operating systems (macOS,
    iOS, watchOS and tvOS), with extensions available for other languages and platforms.
  </p>
</section>

</div>
