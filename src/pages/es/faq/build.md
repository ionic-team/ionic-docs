---
previousText: 'Glosario'
previousUrl: '/docs/faq/glosario'
nextText: 'Errores en tiempo de ejecución'
nextUrl: '/docs/faq/runtime'
disableHtmlPreviews: true
contributors:
  - brandyscarney
---

# Errores en el Build

## Errores comunes

### Olvidarse paréntesis en un Decorator

Los Decorators deben tener paréntesis `()` después de una anotación. Algunos ejemplos incluyen: `@Injectable()`, `@Optional()`, `@Input()`, etc.

```typescript
@Directive({
  selector: 'my-dir'
})
class MyDirective {
  // Mal, debería ser @Optional()
  // @Optional no hace nada aquí, entonces MyDirective arrojará error si parent es undefined
  constructor( @Optional parent: ParentComponent) { }
}
```

## Errores comunes

### "Cannot Resolve all Parameters"

```shell
Si te encuentras con el error "Cannot resolve all parameters for 'TuClase'(?).". Asegúrate de que todos los parámetros están decorados con Inject o tengan anotaciones de tipo válidas y que 'TuClase' está decorada con Injectable.
```

Esta excepción significa que Angular está confundido con uno o más de los parámetros para el constructor de `TuClase`. Para hacer una [inyección de dependencia](https://angular.io/docs/ts/latest/guide/dependency-injection.html) Angular necesita saber el tipo de parámetro a inyectar. La manera de hacerlo es especificando la clase del parámetro. Asegúrate de:

- Estás importando la clase del parámetro.
- Has anotado correctamente el parámetro o has especificado su tipo.

```typescript
import { MyService } from 'my-service'; // No te olvides de importarlo!

@Component({
  template: `Hello World`
})
export class MyClass {
  // service is of type MyService
  constructor(service: MyService) {

  }
}
```

Algunas veces las referencias circulares dentro de tu código pueden causar este error. Las referencias circulares significan que dos objetos dependen unos de otros, y por lo tanto no hay forma de declarar ambos antes que los otros. Para solucionar esto se puede hacer uso de la función [`forwardRef`](https://angular.io/docs/ts/latest/api/core/index/forwardRef-function.html) de Angular.

```ts
import { forwardRef } from '@angular/core';

@Component({
  selector: 'my-button',
  template: `<div>
               <icon></icon>
               <input type="button" />
             </div>`,
  directives: [forwardRef(() => MyIcon)] // MyIcon no ha sido definido aún
})                                       // forwardRef resuelve MyIcon cuando se requiera
class MyButton {
  constructor() { }
}

@Directive({
  selector: 'icon'
})
class MyIcon {
  constructor(containerButton: MyButton) { } // MyButton ha sido definido
}
```

### "No provider for ParamType"

```shell
Error "No provider for ParamType!" (MiClase -> ParamType)
```

Esto significa que Angular sabe el tipo de parámetro que se supone que inyecta, pero no sabe cómo inyectarlo.

Si el parámetro es un servicio, asegúrese de haber añadido la clase especificada a la lista de proveedores disponibles en su aplicación:

```typescript
importar { MiServicio } de 'mi-servicio';

@Component({
  templateUrl: 'app/app.html',
  proveedores: [MiServicio] // No te olvides!
})
clase MiApp { }
```

If the parameter is another component or directive (for example, a parent component), adding it to your list of providers will make the error go away, but this will have the same effect as the [Multiple instances of a provider](#multiple_instances) above. You'll be creating a new instance of the component class, and you won't get a reference to the component instance you want. Instead, make sure that the directive or component you expect to be injected is available to your component (e.g. that it is actually a parent if you are expecting it to be a parent). This is probably easiest understood with an example:

```typescript
@Component({
  selector: 'my-comp',
  template: '<p my-dir></p>',
  directives: [forwardRef(() => MyDir)]
})
class MyComp {
  constructor() {
    this.name = 'My Component';
  }
}

@Directive({
  selector: '[my-dir]'
})
class MyDir {
  constructor(c: MyComp) { // <-- This is the line of interest

    // Errors when directive is on regular div because there is no MyComp in the
    // component tree so there is no MyComp to inject
    console.log('Host component\'s name: ' + c.name);

  }
}

@Component({
  template: "<my-comp></my-comp>" + // No error in MyDir constructor, MyComp is parent of MyDir
  "<my-comp my-dir></my-comp>" + // No error in MyDir constructor, MyComp is host of MyDir
  "<div my-dir></div>", // Errors in MyDir constructor
  directives: [MyComp, MyDir]
})
class MyApp { }
```

Here's a diagram illustrating what injectors are available:

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
    

To expand on the previous example, you can use the Angular `@Optional` annotation if you don't always expect a component/directive reference:

```typescript
@Directive({
  selector: '[my-dir]'
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

### "Can't bind to 'propertyName' since it isn't a known property"

```shell
Can't bind to 'propertyName' since it isn't a known property of the 'elementName' element and there are no matching directives with a corresponding property
```

This happens when you try and bind a property on an element that doesn't have that property. If the element is a component or has one or more directives on it, neither the component nor the directives have that property either.

```html
<!-- div doesn't have a 'foo' property -->
<div [foo]="bar"></div>
```

### "No provider for ControlContainer"

```shell
No provider for ControlContainer! (NgControlName -> ControlContainer)
```

This error is a more specific version of the `No provider` error above. It happens when you use a form control like NgControlName without specifying a parent [NgForm](https://angular.io/docs/ts/latest/api/forms/index/NgForm-directive.html) or NgFormModel. In most cases, this can be resolved by making sure your form control is within an actual form element. NgForm uses `form` as a selector so this will instantiate a new NgForm:

```typescript
@Component({
  template:
  '<form>' +
  '<input ngControl="login">' +
  '</form>'
})
```

### "No Component Factory Found"

```shell
No component factory found for <component name>
```

This error happens when you are trying to use a component, provider pipe or directive that has not been imported and added to your ngModule. Whenever you add a new component, provider, pipe or directive to your app, you must add it to the `ngModule` in the `src/app/app.module.ts` file for Angular to be able to use it. To fix this error you can import the offending component, provider, pipe or directive into the app.module file and then if it is a provider add it to the `providers` array and for a component, pipe or directive add it to both the declarations array and `entryComponents` array.