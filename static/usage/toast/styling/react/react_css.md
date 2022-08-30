```css
ion-toast.custom-toast {
  --background: darkblue;
  --button-color: lightblue;
  --color: white;
}
    
ion-toast.custom-toast::part(message) {
  font-style: italic;
}

ion-toast.custom-toast::part(button) {
  border-left: 1px solid white;
}
```