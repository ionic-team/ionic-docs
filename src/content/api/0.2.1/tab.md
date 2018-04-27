---
---
# ion-tab

The Tab component, written `<ion-tab>`, is styled based on the mode and should
be used in conjunction with the [Tabs](../Tabs/) component.

Each `ion-tab` is a declarative component for a [NavController](../../../navigation/NavController/).
Basically, each tab is a `NavController`. For more information on using
navigation controllers take a look at the [NavController API Docs](../../../navigation/NavController/).

See the [Tabs API Docs](../Tabs/) for more details on configuring Tabs.

To add a basic tab, you can use the following markup where the `root` property
is the page you want to load for that tab, `label` is the optional text to
display on the tab, and `icon` is the optional [icon](../../icon/Icon/).

```html
<ion-tabs>
 <ion-tab [root]="chatRoot" label="Chat" icon="chat"></ion-tab>
</ion-tabs>
```


Sometimes you may want to call a method instead of navigating to a new
page. You can use the `(ionSelect)` event to call a method on your class when
the tab is selected. Below is an example of presenting a modal from one of
the tabs.

```html
<ion-tabs>
  <ion-tab (ionSelect)="chat()" label="Show Modal"></ion-tab>
</ion-tabs>pop
```

```ts
export class Tabs {
  constructor(public modalCtrl: ModalController) {

  }

  chat() {
    let modal = this.modalCtrl.create(ChatPage);
    modal.present();
  }
}
```


<h2>Properties</h2> 

<dl>
<dt>
<h3>active</h3> 
<strong>Attribute:</strong>  <code>active</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd></dd>

<dt>
<h3>badge</h3> 
<strong>Attribute:</strong>  <code>badge</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The badge for the tab.</dd>

<dt>
<h3>badgeStyle</h3> 
<strong>Attribute:</strong>  <code>badge-style</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The badge color for the tab button.</dd>

<dt>
<h3>btnId</h3> 
<strong>Attribute:</strong>  <code>btn-id</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd></dd>

<dt>
<h3>component</h3> 
<strong>Attribute:</strong>  <code>component</code>
</dt>
<dd>The component to display inside of the tab.</dd>

<dt>
<h3>delegate</h3> 
<strong>Attribute:</strong>  <code>delegate</code>
</dt>
<dd></dd>

<dt>
<h3>disabled</h3> 
<strong>Attribute:</strong>  <code>disabled</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the user cannot interact with the tab. Defaults to `false`.</dd>

<dt>
<h3>href</h3> 
<strong>Attribute:</strong>  <code>href</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The URL which will be used as the `href` within this tab's `<ion-tab-button>` anchor.</dd>

<dt>
<h3>icon</h3> 
<strong>Attribute:</strong>  <code>icon</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The icon for the tab.</dd>

<dt>
<h3>label</h3> 
<strong>Attribute:</strong>  <code>label</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The title of the tab.</dd>

<dt>
<h3>name</h3> 
<strong>Attribute:</strong>  <code>name</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The name of the tab.</dd>

<dt>
<h3>selected</h3> 
<strong>Attribute:</strong>  <code>selected</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the tab will be selected. Defaults to `false`.</dd>

<dt>
<h3>show</h3> 
<strong>Attribute:</strong>  <code>show</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the tab button is visible within the tabbar. Defaults to `true`.</dd>

<dt>
<h3>tabsHideOnSubPages</h3> 
<strong>Attribute:</strong>  <code>tabs-hide-on-sub-pages</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, hide the tabs on child pages.</dd>

</dl>


<h2>Events</h2>

<dl><dt>
<h3>ionSelect</h3></dt>
<dd>Emitted when the current tab is selected.</dd>

</dl>


<h2>Methods</h2>
<dl>

<dt><h3>getTabId()</h3></dt>
<dd></dd>

<dt><h3>setActive()</h3></dt>
<dd></dd>

</dl>


