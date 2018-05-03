# CSS Variables

<p class="intro" markdown="1">
TODO - this should be https://ionicframework.com/docs/theming/overriding-ionic-variables/ but css variables
</p>


```css
:root {
  --ion-color-primary: #00ff00;
}
```

CSS properties can also be applied to any selector to theme a specific component.

```css
.my-button {
  --ion-color-primary: #00ff00;
}
```

CSS Properties can also be changed via javascript using setProperty.

```js
const el = document.querySelector('.my-fancy-button');
el.style.setProperty('--ion-color-primary', '#ff0000');
```