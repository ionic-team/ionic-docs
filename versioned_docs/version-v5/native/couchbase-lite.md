---
sidebar_label: 'Couchbase Lite'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Couchbase Lite

Plugin to install Couchbase Lite in your PhoneGap app on iOS or Android <docs-card href="https://ionicframework.com/integrations/couchbase-lite" ionicon="alert">This Plugin is no longer supported by Couchbase. Please see our Couchbase Lite Integration</docs-card>

<p>
  <a
    href="https://github.com/couchbaselabs/Couchbase-Lite-PhoneGap-Plugin"
    target="_blank"
    rel="noopener"
    className="git-link"
  >
    <svg viewBox="0 0 512 512">
      <path d="M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"></path>
    </svg>{' '}
    https://github.com/couchbaselabs/Couchbase-Lite-PhoneGap-Plugin
  </a>
</p>

<h2>Stuck on a Cordova issue?</h2>
<DocsCard
  className="cordova-ee-card"
  header="Don't waste precious time on plugin issues."
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" class="cordova-ee-img" />
    <p>
      If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic’s experts offer
      premium advisory services for both community plugins and premier plugins.
    </p>
    <DocsButton className="native-ee-detail">Contact Us Today!</DocsButton>
  </div>
</DocsCard>

<h2 id="installation">
  <a href="#installation">Installation</a>
</h2>
<Tabs
  groupId="runtime"
  defaultValue="Capacitor"
  values={[
    { value: 'Capacitor', label: 'Capacitor' },
    { value: 'Cordova', label: 'Cordova' },
    { value: 'Enterprise', label: 'Enterprise' },
  ]}
>
  <TabItem value="Capacitor">
    <CodeBlock className="language-shell">
      $ npm install couchbase-lite-phonegap-plugin {'\n'}$ npm install @ionic-native/couchbase-lite {'\n'}$ ionic cap
      sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add couchbase-lite-phonegap-plugin {'\n'}$ npm install @ionic-native/couchbase-lite {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. &nbsp;
      <a class="btn" href="https://ionic.io/docs/premier-plugins">
        Learn More
      </a> or if you're interested in an enterprise version of this plugin <a
        class="btn"
        href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"
      >
        Contact Us
      </a>
    </blockquote>
  </TabItem>
</Tabs>

## Supported Platforms

- Android
- iOS

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

```tsx
import { CouchbaseLite } from '@ionic-native/couchbase-lite/ngx';
import { Http } from '@angular/http';
import { Observable } from 'rxjs'
constructor(private couchbase: CouchbaseLite, private platform:Platform,private _http:Http) {
   this.initMethod();
}
url:string;
initMethod() {
   this.couchbase.getURL().then((url)=> {
       this.url = url;
   })
}
getUrl() {
     return this.url;
}
// DATABASES //
createDatabase(database_name:string) {
     let url = this.getUrl();
     url = url+database_name;
     return this._http
       .put(url)
       .map(data => { this.results = data['results'] })
       .catch((error:any) => {
          return Observable.throw(error.json() || 'Couchbase Lite error');
        })
 }
deleteDatabase(database_name:string) {
     let url = this.getUrl();
     url = url+database_name;
     return this._http
       .delete(url)
       .map(data => { this.results = data['results'] })
       .catch((error:any) => {
          return Observable.throw(error.json() || 'Couchbase Lite error');
       })
}
getAllDbs() {
     let url = this.getUrl();
     url = url+'_all_dbs';
     return this._http
       .get(url)
       .map(data => { this.results = data['results'] })
       .catch((error:any) => {
          return Observable.throw(error.json() || 'Couchbase Lite error');
       })
}
// DOCUMENTS //
getAllDocuments(database_name:string){
     let url = this.getUrl();
     // include_docs=true will include a doc inside response, it is false by default
     url = url + database_name + '/_all_docs?include_docs=true';
     return this._http
       .get(url)
       .map(data => { this.results = data['results'] })
       .catch((error:any) => {
          return Observable.throw(error.json() || 'Couchbase Lite error');
       })        .
}
createDocument(database_name:string,document){
     let url = this.getUrl();
     url = url + database_name;
     return this._http
       .post(url,document)
       .map(data => { this.results = data['results'] })
       .catch((error:any) => {
          return Observable.throw(error.json() || 'Couchbase Lite error');
       })        .
}
let document = {
   _id:'You can either specify the document ID (must be string) else couchbase generates one for your doc',
   data:{name:'sandman',age:25,city:pune}
 }
createDocument('justbe', document);
// successful response
{ "id": "string","rev": "string","ok": true }
updateDocument(database_name:string,document){
     let url = this.getUrl();
     url = url + database_name + '/' + document._id;
     return this._http
       .put(url,document)
       .map(data => { this.results = data['results'] })
       .catch((error:any) => {
          return Observable.throw(error.json() || 'Couchbase Lite error');
       })        .
}
// for updation of document your document must contain most recent rev(revision) id.
// for each updation of document new rev id is get generated
// successful response
{ "id": "string","rev": "string(new revision id)","ok": true }
deleteDocument(database_name:string,document){
     let url = this.getUrl();
     url = url + database_name + '/' + document._id +'?rev='+doc._rev;
     return this._http
       .delete(url)
       .map(data => { this.results = data['results'] })
       .catch((error:any) => {
          return Observable.throw(error.json() || 'Couchbase Lite error');
       })        .
}


```
