```html
<ion-button id="popover-button">Open Menu</ion-button>
<ion-popover trigger="popover-button" [dismissOnSelect]="true">
  <ng-template>
    <ion-content>
      <ion-list>
        <ion-item [button]="true" [detail]="false">Option 1</ion-item>
        <ion-item [button]="true" [detail]="false">Option 2</ion-item>
        <ion-item [button]="true" id="nested-trigger">More options...</ion-item>

        <ion-popover trigger="nested-trigger" [dismissOnSelect]="true" side="end">
          <ng-template>
            <ion-content>
              <ion-list>
                <ion-item [button]="true" [detail]="false">Nested option</ion-item>
              </ion-list>
            </ion-content>
          </ng-template>
        </ion-popover>
      </ion-list>
    </ion-content>
  </ng-template>
</ion-popover>
```
