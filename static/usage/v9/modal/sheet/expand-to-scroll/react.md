```tsx
import React from 'react';
import {
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
} from '@ionic/react';

function Example() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton id="open-modal" expand="block">
          Open Sheet Modal
        </IonButton>
        <IonModal
          trigger="open-modal"
          initialBreakpoint={0.25}
          breakpoints={[0, 0.25, 0.5, 0.75, 1]}
          expandToScroll={false}
        >
          <IonContent className="ion-padding">
            <IonList>
              <IonItem>
                <IonAvatar slot="start">
                  <img src="https://i.pravatar.cc/300?u=b" alt="Portrait of Connor Smith" />
                </IonAvatar>
                <IonLabel>
                  <h2>Connor Smith</h2>
                  <p>Sales Rep</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <img src="https://i.pravatar.cc/300?u=m" alt="Portrait of Jack Smith" />
                </IonAvatar>
                <IonLabel>
                  <h2>Jack Smith</h2>
                  <p>Product Designer</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <img src="https://i.pravatar.cc/300?u=a" alt="Portrait of Daniel Smith" />
                </IonAvatar>
                <IonLabel>
                  <h2>Daniel Smith</h2>
                  <p>Product Designer</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <img src="https://i.pravatar.cc/300?u=f" alt="Portrait of Claire Smith" />
                </IonAvatar>
                <IonLabel>
                  <h2>Claire Smith</h2>
                  <p>Graphic Designer</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <img src="https://i.pravatar.cc/300?u=c" alt="Portrait of Kim Smith" />
                </IonAvatar>
                <IonLabel>
                  <h2>Kim Smith</h2>
                  <p>Software Engineer</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <img src="https://i.pravatar.cc/300?u=e" alt="Portrait of Alex Smith" />
                </IonAvatar>
                <IonLabel>
                  <h2>Alex Smith</h2>
                  <p>Software Engineer</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <img src="https://i.pravatar.cc/300?u=o" alt="Portrait of Eric Smith" />
                </IonAvatar>
                <IonLabel>
                  <h2>Eric Smith</h2>
                  <p>Product Manager</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <img src="https://i.pravatar.cc/300?u=x" alt="Portrait of Grace Smith" />
                </IonAvatar>
                <IonLabel>
                  <h2>Grace Smith</h2>
                  <p>Product Manager</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <img src="https://i.pravatar.cc/300?u=q" alt="Portrait of Henry Smith" />
                </IonAvatar>
                <IonLabel>
                  <h2>Henry Smith</h2>
                  <p>Product Owner</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <img src="https://i.pravatar.cc/300?u=d" alt="Portrait of Greg Smith" />
                </IonAvatar>
                <IonLabel>
                  <h2>Greg Smith</h2>
                  <p>Director of Operations</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <img src="https://i.pravatar.cc/300?u=l" alt="Portrait of Zoey Smith" />
                </IonAvatar>
                <IonLabel>
                  <h2>Zoey Smith</h2>
                  <p>CEO</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <img src="https://i.pravatar.cc/300?u=p" alt="Portrait of Oliver Smith" />
                </IonAvatar>
                <IonLabel>
                  <h2>Oliver Smith</h2>
                  <p>COO</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonAvatar slot="start">
                  <img src="https://i.pravatar.cc/300?u=r" alt="Portrait of Emma Smith" />
                </IonAvatar>
                <IonLabel>
                  <h2>Emma Smith</h2>
                  <p>CTO</p>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
}

export default Example;
```
