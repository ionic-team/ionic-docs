```html
<ion-header>
  <ion-toolbar>
    <ion-title>App</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-modal" expand="block">Open Sheet Modal</ion-button>

  <ion-modal
    trigger="open-modal"
    [initialBreakpoint]="0.25"
    [breakpoints]="[0, 0.25, 0.5, 0.75, 1]"
    [expandToScroll]="false"
  >
    <ng-template>
      <ion-content>
        <ion-list>
          <ion-item>
            <ion-avatar slot="start">
              <img src="https://i.pravatar.cc/300?u=b" alt="Portrait of Connor Smith" />
            </ion-avatar>
            <ion-label>
              <h2>Connor Smith</h2>
              <p>Sales Rep</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <img src="https://i.pravatar.cc/300?u=m" alt="Portrait of Jack Smith" />
            </ion-avatar>
            <ion-label>
              <h2>Jack Smith</h2>
              <p>Product Designer</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <img src="https://i.pravatar.cc/300?u=a" alt="Portrait of Daniel Smith" />
            </ion-avatar>
            <ion-label>
              <h2>Daniel Smith</h2>
              <p>Product Designer</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <img src="https://i.pravatar.cc/300?u=f" alt="Portrait of Claire Smith" />
            </ion-avatar>
            <ion-label>
              <h2>Claire Smith</h2>
              <p>Graphic Designer</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <img src="https://i.pravatar.cc/300?u=c" alt="Portrait of Kim Smith" />
            </ion-avatar>
            <ion-label>
              <h2>Kim Smith</h2>
              <p>Software Engineer</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <img src="https://i.pravatar.cc/300?u=e" alt="Portrait of Alex Smith" />
            </ion-avatar>
            <ion-label>
              <h2>Alex Smith</h2>
              <p>Software Engineer</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <img src="https://i.pravatar.cc/300?u=o" alt="Portrait of Eric Smith" />
            </ion-avatar>
            <ion-label>
              <h2>Eric Smith</h2>
              <p>Product Manager</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <img src="https://i.pravatar.cc/300?u=x" alt="Portrait of Grace Smith" />
            </ion-avatar>
            <ion-label>
              <h2>Grace Smith</h2>
              <p>Product Manager</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <img src="https://i.pravatar.cc/300?u=q" alt="Portrait of Henry Smith" />
            </ion-avatar>
            <ion-label>
              <h2>Henry Smith</h2>
              <p>Product Owner</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <img src="https://i.pravatar.cc/300?u=d" alt="Portrait of Greg Smith" />
            </ion-avatar>
            <ion-label>
              <h2>Greg Smith</h2>
              <p>Director of Operations</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <img src="https://i.pravatar.cc/300?u=l" alt="Portrait of Zoey Smith" />
            </ion-avatar>
            <ion-label>
              <h2>Zoey Smith</h2>
              <p>CEO</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <img src="https://i.pravatar.cc/300?u=p" alt="Portrait of Oliver Smith" />
            </ion-avatar>
            <ion-label>
              <h2>Oliver Smith</h2>
              <p>COO</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <img src="https://i.pravatar.cc/300?u=r" alt="Portrait of Emma Smith" />
            </ion-avatar>
            <ion-label>
              <h2>Emma Smith</h2>
              <p>CTO</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ng-template>
  </ion-modal>
</ion-content>
```
