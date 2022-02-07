```ts
// app.js
const { Component, VERSION } = ng.core;

@Component({
  selector: "app-root",
  template: `{{ template }}`,
})
class AppComponent {}

// main.js
const { BrowserModule } = ng.platformBrowser;
const { NgModule } = ng.core;
const { CommonModule } = ng.common;

@NgModule({
  imports: [BrowserModule, CommonModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
class AppModule {}

const { platformBrowserDynamic } = ng.platformBrowserDynamic;

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
```
