---
title: Testing
---

<head>
  <title>Angular Unit and End-to-End Testing for Ionic App Components</title>
  <meta
    name="description"
    content="Angular apps created using Ionic are automatically set up for unit and end-to-end testing. Read to learn more about testing tools for Ionic components."
  />
</head>

When an `@ionic/angular` application is generated using the Ionic CLI, it is automatically set up for unit testing and end-to-end testing of the application. This is the same setup that is used by the Angular CLI. Refer to the <a href="https://angular.io/guide/testing" target="_blank">Angular Testing Guide</a> for detailed information on testing Angular applications.

## Testing Principles

When testing an application, it is best to keep in mind that testing can show if defects are present in a system. However, it is impossible to prove that any non-trivial system is completely free of defects. For this reason, the goal of testing is not to verify that the code is correct but to find problems within the code. This is a subtle but important distinction.

If we set out to prove that the code is correct, we are more likely to stick to the happy path through the code. If we set out to find problems, we are more likely to more fully exercise the code and find the bugs that are lurking there.

It is also best to begin testing an application from the very start. This allows defects to be found early in the process when they are easier to fix. This also allows code to be refactored with confidence as new features are added to the system.

## Unit Testing

Unit tests exercise a single unit of code (component, page, service, pipe, etc) in isolation from the rest of the system. Isolation is achieved through the injection of mock objects in place of the code's dependencies. The mock objects allow the test to have fine-grained control of the outputs of the dependencies. The mocks also allow the test to determine which dependencies have been called and what has been passed to them.

Well-written unit tests are structured such that the unit of code and the features it contains are described via `describe()` callbacks. The requirements for the unit of code and its features are tested via `it()` callbacks. When the descriptions for the `describe()` and `it()` callbacks are read, they make sense as a phrase. When the descriptions for nested `describe()`s and a final `it()` are concatenated together, they form a sentence that fully describes the test case.

Since unit tests exercise the code in isolation, they are fast, robust, and allow for a high degree of code coverage.

### Using Mocks

Unit tests exercise a code module in isolation. To facilitate this, we recommend using Jasmine (https://jasmine.github.io/). Jasmine creates mock objects (which Jasmine calls "spies") to take the place of dependencies while testing. When a mock object is used, the test can control the values returned by calls to that dependency, making the current test independent of changes made to the dependency. This also makes the test setup easier, allowing the test to only be concerned with the code within the module under test.

Using mocks also allows the test to query the mock to determine if it was called and how it was called via the `toHaveBeenCalled*` set of functions. Tests should be as specific as possible with these functions, favoring calls to `toHaveBeenCalledTimes` over calls to `toHaveBeenCalled` when testing that a method has been called. That is `expect(mock.foo).toHaveBeenCalledTimes(1)` is better than `expect(mock.foo).toHaveBeenCalled()`. The opposite advice should be followed when testing that something has not been called (`expect(mock.foo).not.toHaveBeenCalled()`).

There are two common ways to create mock objects in Jasmine. Mock objects can be constructed from scratch using `jasmine.createSpy` and `jasmine.createSpyObj` or spies can be installed onto existing objects using `spyOn()` and `spyOnProperty()`.

#### Using `jasmine.createSpy` and `jasmine.createSpyObj`

`jasmine.createSpyObj` creates a full mock object from scratch with a set of mock methods defined on creation. This is useful in that it is very simple. Nothing needs to be constructed or injected into the test. The disadvantage of using this function is that it allows the creation of objects that may not match the real objects.

`jasmine.createSpy` is similar but it creates a stand-alone mock function.

#### Using `spyOn()` and `spyOnProperty()`

`spyOn()` installs the spy on an existing object. The advantage of using this technique is that if an attempt is made to spy on a method that does not exist on the object, an exception is raised. This prevents the test from mocking methods that do not exist. The disadvantage is that the test needs a fully formed object to begin with, which may increase the amount of test setup required.

`spyOnProperty()` is similar with the difference being that it spies on a property and not a method.

### General Testing Structure

Unit tests are contained in `spec` files with one `spec` file per entity (component, page, service, pipe, etc.). The `spec` files live side-by-side with and are named after the source that they are testing. For example, if the project has a service called WeatherService, the code for it is in a file named `weather.service.ts` with the tests in a file named `weather.service.spec.ts`. Both of those files are in the same folder.

The `spec` files themselves contain a single `describe` call that defines that overall test. Nested within it are other `describe` calls that define major areas of functionality. Each `describe` call can contain setup and teardown code (generally handled via `beforeEach` and `afterEach` calls), more `describe` calls forming a hierarchical breakdown of functionality, and `it` calls which define individual test cases.

The `describe` and `it` calls also contain a descriptive text label. In well-formed tests, the `describe` and `it` calls combine with their labels to perform proper phrases and the full label for each test case, formed by combining the `describe` and `it` labels, creates a full sentence.

For example:

```tsx
describe('Calculation', () => {
  describe('divide', () => {
    it('calculates 4 / 2 properly' () => {});
    it('cowardly refuses to divide by zero' () => {});
    ...
  });

  describe('multiply', () => {
    ...
  });
});
```

The outer `describe` call states that the `Calculation` service is being tested, the inner `describe` calls state exactly what functionality is being tested, and the `it` calls state what the test cases are. When run the full label for each test case is a sentence that makes sense (Calculation divide cowardly refuses to divide by zero).

### Pages and Components

Pages are just Angular components. Thus, pages and components are both tested using <a href="https://angular.io/guide/testing#component-test-basics">Angular's Component Testing</a> guidelines.

Since pages and components contain both TypeScript code and HTML template markup it is possible to perform both component class testing and component DOM testing. When a page is created, the template test that is generated looks like this:

```tsx
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsPage } from './tabs.page';

describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TabsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

When doing component class testing, the component object is accessed using the component object defined via `component = fixture.componentInstance;`. This is an instance of the component class. When doing DOM testing, the `fixture.nativeElement` property is used. This is the actual `HTMLElement` for the component, which allows the test to use standard HTML API methods such as `HTMLElement.querySelector` in order to examine the DOM.

## Services

Services often fall into one of two broad categories: utility services that perform calculations and other operations, and data services that perform primarily HTTP operations and data manipulation.

### Basic Service Testing

The suggested way to test most services is to instantiate the service and manually inject mocks for any dependency the service has. This way, the code can be tested in isolation.

Let's say that there is a service with a method that takes an array of timecards and calculates net pay. Let's also assume that the tax calculations are handled via another service that the current service depends on. This payroll service could be tested as such:

```tsx
import { PayrollService } from './payroll.service';

describe('PayrollService', () => {
  let service: PayrollService;
  let taxServiceSpy;

   beforeEach(() => {
     taxServiceSpy = jasmine.createSpyObj('TaxService', {
       federalIncomeTax: 0,
       stateIncomeTax: 0,
       socialSecurity: 0,
       medicare: 0
     });
     service = new PayrollService(taxServiceSpy);
   });

   describe('net pay calculations', () => {
     ...
   });
});
```

This allows the test to control the values returned by the various tax calculations via mock setup such as `taxServiceSpy.federalIncomeTax.and.returnValue(73.24)`. This allows the "net pay" tests to be independent of the tax calculation logic. When the tax codes change, only the tax service related code and tests need to change. The tests for the net pay can continue to operate as they are since these tests do not care how the tax is calculated, just that the value is applied properly.

The scaffolding that is used when a service is generated via `ionic g service name` uses Angular's testing utilities and sets up a testing module. Doing so is not strictly necessary. That code may be left in, however, allowing the service to be built manually or injected as such:

```tsx
import { TestBed, inject } from '@angular/core/testing';

import { PayrollService } from './payroll.service';
import { TaxService } from './tax.service';

describe('PayrolService', () => {
  let taxServiceSpy;

  beforeEach(() => {
    taxServiceSpy = jasmine.createSpyObj('TaxService', {
      federalIncomeTax: 0,
      stateIncomeTax: 0,
      socialSecurity: 0,
      medicare: 0,
    });
    TestBed.configureTestingModule({
      providers: [PayrollService, { provide: TaxService, useValue: taxServiceSpy }],
    });
  });

  it('does some test where it is injected', inject([PayrollService], (service: PayrollService) => {
    expect(service).toBeTruthy();
  }));

  it('does some test where it is manually built', () => {
    const service = new PayrollService(taxServiceSpy);
    expect(service).toBeTruthy();
  });
});
```

#### Testing HTTP Data Services

Most services that perform HTTP operations will use Angular's HttpClient service in order to perform those operations. For such tests, it is suggested to use Angular's `HttpClientTestingModule`. For detailed documentation of this module, please see Angular's <a href="https://angular.io/guide/http#testing-http-requests" target="_blank">Angular's Testing HTTP requests</a> guide.

This basic setup for such a test looks like this:

```tsx
import { HttpBackend, HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

import { IssTrackingDataService } from './iss-tracking-data.service';

describe('IssTrackingDataService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let issTrackingDataService: IssTrackingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [IssTrackingDataService],
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    issTrackingDataService = new IssTrackingDataService(httpClient);
  });

  it('exists', inject([IssTrackingDataService], (service: IssTrackingDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('location', () => {
    it('gets the location of the ISS now', () => {
      issTrackingDataService.location().subscribe((x) => {
        expect(x).toEqual({ longitude: -138.1719, latitude: 44.4423 });
      });
      const req = httpTestingController.expectOne('http://api.open-notify.org/iss-now.json');
      expect(req.request.method).toEqual('GET');
      req.flush({
        iss_position: { longitude: '-138.1719', latitude: '44.4423' },
        timestamp: 1525950644,
        message: 'success',
      });
      httpTestingController.verify();
    });
  });
});
```

### Pipes

A pipe is like a service with a specifically defined interface. It is a class that contains one public method, `transform`, which manipulates the input value (and other optional arguments) in order to create the output that is rendered on the page. To test a pipe: instantiate the pipe, call the transform method, and verify the results.

As a simple example, let's look at a pipe that takes a `Person` object and formats the name. For the sake of simplicity, let's say a `Person` consists of an `id`, `firstName`, `lastName`, and `middleInitial`. The requirements for the pipe are to print the name as "Last, First M." handling situations where a first name, last name, or middle initial do not exist. Such a test might look like this:

```tsx
import { NamePipe } from './name.pipe';

import { Person } from '../../models/person';

describe('NamePipe', () => {
  let pipe: NamePipe;
  let testPerson: Person;

  beforeEach(() => {
    pipe = new NamePipe();
    testPerson = {
      id: 42,
      firstName: 'Douglas',
      lastName: 'Adams',
      middleInitial: 'N',
    };
  });

  it('exists', () => {
    expect(pipe).toBeTruthy();
  });

  it('formats a full name properly', () => {
    expect(pipe.transform(testPerson)).toBeEqual('Adams, Douglas N.');
  });

  it('handles having no middle initial', () => {
    delete testPerson.middleInitial;
    expect(pipe.transform(testPerson)).toBeEqual('Adams, Douglas');
  });

  it('handles having no first name', () => {
    delete testPerson.firstName;
    expect(pipe.transform(testPerson)).toBeEqual('Adams N.');
  });

  it('handles having no last name', () => {
    delete testPerson.lastName;
    expect(pipe.transform(testPerson)).toBeEqual('Douglas N.');
  });
});
```

It is also beneficial to exercise the pipe via DOM testing in the components and pages that utilize the pipe.

## End-to-end Testing

End-to-end testing is used to verify that an application works as a whole and often includes a connection to live data. Whereas unit tests focus on code units in isolation and thus allow for low-level testing of the application logic, end-to-end tests focus on various user stories or usage scenarios, providing high-level testing of the overall flow of data through the application. Whereas unit tests try to uncover problems with an application's logic, end-to-end tests try to uncover problems that occur when those individual units are used together. End-to-end tests uncover problems with the overall architecture of the application.

Since end-to-end tests exercise user stories and cover the application as a whole rather than individual code modules, end-to-end tests exist in their own application in the project apart from the code for the main application itself. Most end-to-end tests operate by automating common user interactions with the application and examining the DOM to determine the results of those interactions.

### Test Structure

When an `@ionic/angular` application is generated, a default end-to-end test application is generated in the `e2e` folder. This application uses <a href="">Protractor</a> to control the browser and <a href="">Jasmine</a> to structure and execute the tests. The application initially consists of four files:

- `protractor.conf.js` - the Protractor configuration file
- `tsconfig.e2e.json` - specific TypeScript configuration for the testing application
- `src/app.po.ts` - a page object containing methods that navigate the application, query elements in the DOM, and maninpulate elements on the page
- `src/app.e2e-spec.ts` - a testing script

#### Page Objects

End-to-end tests operate by automating common user interactions with the application, waiting for the application to respond, and examining the DOM to determine the results of the interaction. This involves a lot of DOM manipulation and examination. If this were all done manually, the tests would be very brittle and difficult to read and maintain.

Page objects encapsulate the HTML for a single page in a TypeScript class, providing an API that the test scripts use to interact with the application. The encapsulation of the DOM manipulation logic in page objects makes the tests more readable and far easier to reason about, lowering the maintenance costs of the test. Creating well-crafted page objects is the key to creating high quality and maintainable end-to-end tests.

##### Base Page Object

A lot of tests rely on actions such as waiting for a page to be visible, entering text into an input, and clicking a button. The methods used to do this remain consistent with only the CSS selectors used to get the appropriate DOM element changing. Therefore it makes sense to abstract this logic into a base class that can be used by the other page objects.

Here is an example that implements a few basic methods that all page objects will need to support.

```tsx
import { browser, by, element, ExpectedConditions } from 'protractor';

export class PageObjectBase {
  private path: string;
  protected tag: string;

  constructor(tag: string, path: string) {
    this.tag = tag;
    this.path = path;
  }

  load() {
    return browser.get(this.path);
  }

  rootElement() {
    return element(by.css(this.tag));
  }

  waitUntilInvisible() {
    browser.wait(ExpectedConditions.invisibilityOf(this.rootElement()), 3000);
  }

  waitUntilPresent() {
    browser.wait(ExpectedConditions.presenceOf(this.rootElement()), 3000);
  }

  waitUntilNotPresent() {
    browser.wait(ExpectedConditions.not(ExpectedConditions.presenceOf(this.rootElement())), 3000);
  }

  waitUntilVisible() {
    browser.wait(ExpectedConditions.visibilityOf(this.rootElement()), 3000);
  }

  getTitle() {
    return element(by.css(`${this.tag} ion-title`)).getText();
  }

  protected enterInputText(sel: string, text: string) {
    const el = element(by.css(`${this.tag} ${sel}`));
    const inp = el.element(by.css('input'));
    inp.sendKeys(text);
  }

  protected enterTextareaText(sel: string, text: string) {
    const el = element(by.css(`${this.tag} ${sel}`));
    const inp = el.element(by.css('textarea'));
    inp.sendKeys(text);
  }

  protected clickButton(sel: string) {
    const el = element(by.css(`${this.tag} ${sel}`));
    browser.wait(ExpectedConditions.elementToBeClickable(el));
    el.click();
  }
}
```

##### Per-Page Abstractions

Each page in the application will have its own page object class that abstracts the elements on that page. If a base page object class is used, creating the page object involves mostly creating custom methods for elements that are specific to that page. Often, these custom elements take advantage of methods in the base class in order to perform the work that is required.

Here is an example page object for a simple but typical login page. Notice that many of the methods, such as `enterEMail()`, call methods in the base class that perform the bulk of the work.

```tsx
import { browser, by, element, ExpectedConditions } from 'protractor';
import { PageObjectBase } from './base.po';

export class LoginPage extends PageObjectBase {
  constructor() {
    super('app-login', '/login');
  }

  waitForError() {
    browser.wait(ExpectedConditions.presenceOf(element(by.css('.error'))), 3000);
  }

  getErrorMessage() {
    return element(by.css('.error')).getText();
  }

  enterEMail(email: string) {
    this.enterInputText('#email-input', email);
  }

  enterPassword(password: string) {
    this.enterInputText('#password-input', password);
  }

  clickSignIn() {
    this.clickButton('#signin-button');
  }
}
```

#### Testing Scripts

Similar to unit tests, end-to-end test scripts consist of nested `describe()` and `it()` functions. In the case of end-to-end tests, the `describe()` functions generally denote specific scenarios with the `it()` functions denoting specific behaviors that should be exhibited by the application as actions are performed within that scenario.

Also similar to unit tests, the labels used in the `describe()` and `it()` functions should make sense both with the "describe" or "it" and when concatenated together to form the complete test case.

Here is a sample end-to-end test script that exercises some typical login scenarios.

```tsx
import { AppPage } from '../page-objects/pages/app.po';
import { AboutPage } from '../page-objects/pages/about.po';
import { CustomersPage } from '../page-objects/pages/customers.po';
import { LoginPage } from '../page-objects/pages/login.po';
import { MenuPage } from '../page-objects/pages/menu.po';
import { TasksPage } from '../page-objects/pages/tasks.po';

describe('Login', () => {
  const about = new AboutPage();
  const app = new AppPage();
  const customers = new CustomersPage();
  const login = new LoginPage();
  const menu = new MenuPage();
  const tasks = new TasksPage();

  beforeEach(() => {
    app.load();
  });

  describe('before logged in', () => {
    it('displays the login screen', () => {
      expect(login.rootElement().isDisplayed()).toEqual(true);
    });

    it('allows in-app navigation to about', () => {
      menu.clickAbout();
      about.waitUntilVisible();
      login.waitUntilInvisible();
    });

    it('does not allow in-app navigation to tasks', () => {
      menu.clickTasks();
      app.waitForPageNavigation();
      expect(login.rootElement().isDisplayed()).toEqual(true);
    });

    it('does not allow in-app navigation to customers', () => {
      menu.clickCustomers();
      app.waitForPageNavigation();
      expect(login.rootElement().isDisplayed()).toEqual(true);
    });

    it('displays an error message if the login fails', () => {
      login.enterEMail('test@test.com');
      login.enterPassword('bogus');
      login.clickSignIn();
      login.waitForError();
      expect(login.getErrorMessage()).toEqual('The password is invalid or the user does not have a password.');
    });

    it('navigates to the tasks page if the login succeeds', () => {
      login.enterEMail('test@test.com');
      login.enterPassword('testtest');
      login.clickSignIn();
      tasks.waitUntilVisible();
    });
  });

  describe('once logged in', () => {
    beforeEach(() => {
      tasks.waitUntilVisible();
    });

    it('allows navigation to the customers page', () => {
      menu.clickCustomers();
      customers.waitUntilVisible();
      tasks.waitUntilInvisible();
    });

    it('allows navigation to the about page', () => {
      menu.clickAbout();
      about.waitUntilVisible();
      tasks.waitUntilInvisible();
    });

    it('allows navigation back to the tasks page', () => {
      menu.clickAbout();
      tasks.waitUntilInvisible();
      menu.clickTasks();
      tasks.waitUntilVisible();
    });
  });
});
```

### Configuration

The default configuration uses the same `environment.ts` file that is used for development. In order to provide better control over the data used by the end-to-end tests, it is often useful to create a specific environment for testing and use that environment for the tests. This section shows one possible way to create this configuration.

#### Testing Environment

Setting up a testing environment involves creating a new environment file that uses a dedicated testing backend, updating the `angular.json` file to use that environment, and modifying the `e2e` script in the `package.json` to specify the `test` environment.

##### Create the `environment.e2e.ts` File

The Angular `environment.ts` and `environment.prod.ts` files are often used to store information such as the base URL for the application's backend data services. Create an `environment.e2e.ts` that provides the same information, only connecting to backend services that are dedicated to testing rather than the development or production backend services. Here is an example:

```tsx
export const environment = {
  production: false,
  databaseURL: 'https://e2e-test-api.my-great-app.com',
  projectId: 'my-great-app-e2e',
};
```

##### Modify the `angular.json` File

The `angular.json` file needs to be modified to use this file. This is a layered process. Follow the XPaths listed below to add the configuration that is required.

Add a configuration at `/projects/app/architect/build/configurations` called `test` that does the file replacement:

```json
"test": {
  "fileReplacements": [
    {
      "replace": "src/environments/environment.ts",
      "with": "src/environments/environment.e2e.ts"
    }
  ]
}
```

Add a configuration at `/projects/app/architect/serve/configurations` called `test` that points the browser target at the `test` build configuration that was defined above.

```json
"test": {
  "browserTarget": "app:build:test"
}
```

Add a configuration at `/projects/app-e2e/architect/e2e/configurations` called `test` that does points the dev server target at the `test` serve configuration defined above.

```json
"test": {
  "devServerTarget": "app:serve:test"
}
```

##### Modify the `package.json` File

Modify the `package.json` file so that `npm run e2e` uses the `test` configuration.

```json
"scripts": {
  "e2e": "ng e2e --configuration=test",
  "lint": "ng lint",
  "ng": "ng",
  "start": "ng serve",
  "test": "ng test",
  "test:dev": "ng test --browsers=ChromeHeadlessCI",
  "test:ci": "ng test --no-watch --browsers=ChromeHeadlessCI"
},
```

#### Test Cleanup

If the end-to-end tests modify data in any way it is helpful to reset the data to a known state once the test completes. One way to do that is to:

1. Create an endpoint that performs the cleanup.
1. Add a `onCleanUp()` function to the `config` object exported by the `protractor.conf.js` file.

Here is an example:

```javascript
onCleanUp() {
  const axios = require('axios');
  return axios
    .post(
      'https://e2e-test-api.my-great-app.com/purgeDatabase',
      {}
    )
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err));
}
```
