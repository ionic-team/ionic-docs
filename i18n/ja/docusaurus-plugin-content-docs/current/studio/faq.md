# Frequently Asked Questions

## Which versions of Ionic Framework are supported?

Ionic Studio currently supports apps using **Ionic 4** and **Angular**.

Ionic 3 is not supported. We encourage you to [migrate to Ionic 4](https://ionicframework.com/docs/reference/migration).

## Is Capacitor supported?

Ionic Studio currently does not support Capacitor. We plan to add support soon now that Capacitor has reached 1.0.

## Can I use a component in multiple pages?

Yes. In order to preserve speed, Angular only loads the components that it needs for any given page. This means that in order to use a custom component inside of a page, you must first make sure that components module is imported into your pages module.

Open up the page you'd like to use a component in, then navigate to the module tab. Take note of the `import` line as well as the `import` in `ngModule`. Both things are required in order to load your component on a page.

In this example, our component is called "MyCustomThing":

<figure>
  <img alt="My Custom Thing NgModule" src="/img/studio/ss-my-custom-thing-ngmodule.png" />
</figure>
