```css
.ion-content-scroll-host {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow-y: auto;
}

.ion-content-scroll-host::before,
.ion-content-scroll-host::after {
  position: absolute;

  width: 1px;
  height: 1px;

  content: '';
}

.ion-content-scroll-host::before {
  bottom: -1px;
}

.ion-content-scroll-host::after {
  top: -1px;
}
```
