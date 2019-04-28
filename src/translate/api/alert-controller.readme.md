# ion-alert-controller

Alert controllerはプログラムでAlertコンポーネントを制御します。Alert controllerを利用することで、Alertを作成し、破棄することができます。Alertを作成する時に利用できるオプションについての詳しくは [Alert](../alert) のドキュメントをご覧ください。


```javascript
async function presentAlert() {
  const alertController = document.querySelector('ion-alert-controller');
  await alertController.componentOnReady();

  const alert = await alertController.create({
    header: 'Alert',
    subHeader: 'Subtitle',
    message: 'This is an alert message.',
    buttons: ['OK']
  });
  return await alert.present();
}
```

