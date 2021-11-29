---
disableHtmlPreviews: true
---

# Build Errors

## Common mistakes

### Forgetting Parentheses on a Decorator

Decorators should have parentheses `()` after an annotation. Some examples include: `@Injectable()`, `@Optional()`, `@Input()`, etc.

```tsx
@Directive({
  selector: 'my-dir',
})
class MyDirective {
  // Wrong, should be @Optional()
  // @Optional does nothing here, so MyDirective will error if parent is undefined
  constructor(@Optional parent: ParentComponent) {}
}
```

## Common Errors

### Cannot Resolve all Parameters

```shell
Cannot resolve all parameters for 'YourClass'(?). Make sure that all the parameters are decorated with Inject or have valid type annotations and that 'YourClass' is decorated with Injectable.
```

This exception means that Angular is confused about one or more of the parameters for `YourClass`'s constructor. In order to do [dependency injection](https://angular.io/docs/ts/latest/guide/dependency-injection.html) Angular needs to know the type of the parameter to inject. You let Angular know this by specifying the class of the parameter. Make sure:

- You are importing the parameter's class.
- You have properly annotated the parameter or specified its type.

```tsx
import { MyService } from 'my-service'; // Don't forget to import me!

@Component({
  template: `Hello World`,
})
export class MyClass {
  // service is of type MyService
  constructor(service: MyService) {}
}
```

Sometimes circular references within your code can cause this error. Circular references mean that two objects depend on each other, and so there is no way to declare both of them before each other. To get around this, we can use the [`forwardRef`](https://angular.io/docs/ts/latest/api/core/index/forwardRef-function.html) function built in to Angular.

```ts
import { forwardRef } from '@angular/core';

@Component({
  selector: 'my-button',
  template: `<div>
    <icon></icon>
    <input type="button" />
  </div>`,
  directives: [forwardRef(() => MyIcon)], // MyIcon has not been defined yet
}) // forwardRef resolves as MyIcon when MyIcon is needed
class MyButton {
  constructor() {}
}

@Directive({
  selector: 'icon',
})
class MyIcon {
  constructor(containerButton: MyButton) {} // MyButton has been defined
}
```

### No provider for ParamType

```shell
No provider for ParamType! (MyClass -> ParamType)
```

This means Angular knows the type of parameter it is supposed to inject, but it doesn't know how to inject it.

If the parameter is a service, make sure you have added the specified class to the list of providers available to your app:

```tsx
import { MyService } from 'my-service';

@Component({
  templateUrl: 'app/app.html',
  providers: [MyService], // Don't forget me!
})
class MyApp {}
```

If the parameter is another component or directive (for example, a parent component), adding it to your list of providers will make the error go away, but this will have the same effect as the [Multiple instances of a provider](#multiple_instances) above. You'll be creating a new instance of the component class, and you won't get a reference to the component instance you want. Instead, make sure that the directive or component you expect to be injected is available to your component (e.g. that it is actually a parent if you are expecting it to be a parent). This is probably easiest understood with an example:

```tsx
@Component({
  selector: 'my-comp',
  template: '<p my-dir></p>',
  directives: [forwardRef(() => MyDir)],
})
class MyComp {
  constructor() {
    this.name = 'My Component';
  }
}

@Directive({
  selector: '[my-dir]',
})
class MyDir {
  constructor(c: MyComp) {
    // <-- This is the line of interest

    // Errors when directive is on regular div because there is no MyComp in the
    // component tree so there is no MyComp to inject
    console.log("Host component's name: " + c.name);
  }
}

@Component({
  template:
    '<my-comp></my-comp>' + // No error in MyDir constructor, MyComp is parent of MyDir
    '<my-comp my-dir></my-comp>' + // No error in MyDir constructor, MyComp is host of MyDir
    '<div my-dir></div>', // Errors in MyDir constructor
  directives: [MyComp, MyDir],
})
class MyApp {}
```

Here's a diagram illustrating what injectors are available:

```
                 +-------+
                 |  App  |
                 +---+---+
                     |
       +-------------+------------+
       |                          |
+------+------+          +--------+--------+
| Div (MyDir) |          | MyComp (MyDir)  |  <- MyComp can be injected
+-------------+          +--------+--------+
       ^                          |
No MyComp to inject        +------+------+
                           | P (MyDir)   | <- MyComp can be injected from parent
                           +-------------+
```

To expand on the previous example, you can use the Angular `@Optional` annotation if you don't always expect a component/directive reference:

```tsx
@Directive({
  selector: '[my-dir]',
})
class MyDir {
  constructor(@Optional() c: MyComp) {
    // No longer errors if c is undefined
    if (c) {
      console.log(`Host component's name: ${c.name}`);
    }
  }
}
```

### Can't bind to 'propertyName' since it isn't a known property

```shell
Can't bind to 'propertyName' since it isn't a known property of the 'elementName' element and there are no matching directives with a corresponding property
```

This happens when you try and bind a property on an element that doesn't have that property. If the element is a component or has one or more directives on it, neither the component nor the directives have that property either.

```html
<!-- div doesn't have a 'foo' property -->
<div [foo]="bar"></div>
```

### No provider for ControlContainer

```shell
No provider for ControlContainer! (NgControlName -> ControlContainer)
```

This error is a more specific version of the `No provider` error above. It happens when you use a form control like NgControlName without specifying a parent [NgForm](https://angular.io/docs/ts/latest/api/forms/index/NgForm-directive.html) or NgFormModel. In most cases, this can be resolved by making sure your form control is within an actual form element. NgForm uses `form` as a selector so this will instantiate a new NgForm:

```tsx
@Component({
  template:
  '<form>' +
  '<input ngControl="login">' +
  '</form>'
})
```

### No Component Factory Found

```shell
No component factory found for <component name>
```

This error happens when you are trying to use a component, provider pipe or directive that has not been imported and added to your ngModule. Whenever you add a new component, provider, pipe or directive to your app, you must add it to the `ngModule` in the `src/app/app.module.ts` file for Angular to be able to use it. To fix this error you can import the offending component, provider, pipe or directive into the app.module file and then if it is a provider add it to the `providers` array and for a component, pipe or directive add it to both the declarations array and `entryComponents` array.
