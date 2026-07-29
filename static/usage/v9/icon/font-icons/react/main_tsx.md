```tsx
import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <h2>Font Awesome Icons</h2>
      <div className="row">
        <IonIcon color="primary">
          <i className="fas fa-home"></i>
        </IonIcon>
        <IonIcon color="secondary">
          <i className="fas fa-heart"></i>
        </IonIcon>
        <IonIcon color="tertiary">
          <i className="fas fa-star"></i>
        </IonIcon>
        <IonIcon color="success">
          <i className="fas fa-check-circle"></i>
        </IonIcon>
        <IonIcon color="warning">
          <i className="fas fa-exclamation-triangle"></i>
        </IonIcon>
        <IonIcon color="danger">
          <i className="fas fa-trash"></i>
        </IonIcon>
      </div>
      <div className="row">
        <IonButton size="small" fill="outline">
          <IonIcon slot="start">
            <i className="fas fa-home"></i>
          </IonIcon>
          Home
        </IonButton>
        <IonButton size="small" fill="outline" color="tertiary">
          <IonIcon slot="start">
            <i className="fas fa-star"></i>
          </IonIcon>
          Save
        </IonButton>
        <IonButton size="small" fill="outline" color="danger">
          <IonIcon slot="start">
            <i className="fas fa-trash"></i>
          </IonIcon>
          Trash
        </IonButton>
      </div>

      <h2>Bootstrap Icons</h2>
      <div className="row">
        <IonIcon color="primary">
          <i className="bi bi-house-fill"></i>
        </IonIcon>
        <IonIcon color="secondary">
          <i className="bi bi-heart-fill"></i>
        </IonIcon>
        <IonIcon color="tertiary">
          <i className="bi bi-star-fill"></i>
        </IonIcon>
        <IonIcon color="success">
          <i className="bi bi-check-circle-fill"></i>
        </IonIcon>
        <IonIcon color="warning">
          <i className="bi bi-exclamation-triangle-fill"></i>
        </IonIcon>
        <IonIcon color="danger">
          <i className="bi bi-trash-fill"></i>
        </IonIcon>
      </div>
      <div className="row">
        <IonButton size="small" fill="outline">
          <IonIcon slot="start">
            <i className="bi bi-house-fill"></i>
          </IonIcon>
          Home
        </IonButton>
        <IonButton size="small" fill="outline" color="tertiary">
          <IonIcon slot="start">
            <i className="bi bi-star-fill"></i>
          </IonIcon>
          Save
        </IonButton>
        <IonButton size="small" fill="outline" color="danger">
          <IonIcon slot="start">
            <i className="bi bi-trash-fill"></i>
          </IonIcon>
          Trash
        </IonButton>
      </div>

      <h2>Material Icons</h2>
      <div className="row">
        <IonIcon color="primary">
          <span className="material-icons">home</span>
        </IonIcon>
        <IonIcon color="secondary">
          <span className="material-icons">favorite</span>
        </IonIcon>
        <IonIcon color="tertiary">
          <span className="material-icons">star</span>
        </IonIcon>
        <IonIcon color="success">
          <span className="material-icons">check_circle</span>
        </IonIcon>
        <IonIcon color="warning">
          <span className="material-icons">warning</span>
        </IonIcon>
        <IonIcon color="danger">
          <span className="material-icons">delete</span>
        </IonIcon>
      </div>
      <div className="row">
        <IonButton size="small" fill="outline">
          <IonIcon slot="start">
            <span className="material-icons">home</span>
          </IonIcon>
          Home
        </IonButton>
        <IonButton size="small" fill="outline" color="tertiary">
          <IonIcon slot="start">
            <span className="material-icons">star</span>
          </IonIcon>
          Save
        </IonButton>
        <IonButton size="small" fill="outline" color="danger">
          <IonIcon slot="start">
            <span className="material-icons">delete</span>
          </IonIcon>
          Trash
        </IonButton>
      </div>

      <h2>Phosphor Icons</h2>
      <div className="row">
        <IonIcon color="primary">
          <i className="ph-fill ph-house"></i>
        </IonIcon>
        <IonIcon color="secondary">
          <i className="ph-fill ph-heart"></i>
        </IonIcon>
        <IonIcon color="tertiary">
          <i className="ph-fill ph-star"></i>
        </IonIcon>
        <IonIcon color="success">
          <i className="ph-fill ph-check-circle"></i>
        </IonIcon>
        <IonIcon color="warning">
          <i className="ph-fill ph-warning"></i>
        </IonIcon>
        <IonIcon color="danger">
          <i className="ph-fill ph-trash"></i>
        </IonIcon>
      </div>
      <div className="row">
        <IonButton size="small" fill="outline">
          <IonIcon slot="start">
            <i className="ph-fill ph-house"></i>
          </IonIcon>
          Home
        </IonButton>
        <IonButton size="small" fill="outline" color="tertiary">
          <IonIcon slot="start">
            <i className="ph-fill ph-star"></i>
          </IonIcon>
          Save
        </IonButton>
        <IonButton size="small" fill="outline" color="danger">
          <IonIcon slot="start">
            <i className="ph-fill ph-trash"></i>
          </IonIcon>
          Trash
        </IonButton>
      </div>
    </>
  );
}

export default Example;
```
