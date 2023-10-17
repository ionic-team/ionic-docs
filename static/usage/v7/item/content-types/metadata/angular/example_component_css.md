```css
.unread-indicator {
  background: var(--ion-color-primary);

  width: 10px;
  height: 10px;

  border-radius: 100%;

  position: absolute;

  inset-inline-start: 12px;
  top: 12px;
}

.metadata-end-wrapper {
  position: absolute;

  top: 10px;
  inset-inline-end: 10px;

  font-size: 0.8rem;

  display: flex;
  align-items: center;
}

ion-label strong {
  display: block;

  max-width: calc(100% - 60px);

  overflow: hidden;

  text-overflow: ellipsis;
}

ion-label ion-note {
  font-size: 0.9rem;
}
```
