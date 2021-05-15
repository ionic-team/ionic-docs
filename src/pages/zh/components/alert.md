* * *

tableOfContents: false

* * *

# 提示框

警告框是一种让用户能够选择特定行动或行动列表的好办法。 提示框可以包含文本、输入和按钮。 它们可以向用户提供重要信息，或要求用户作出决定(或多项决定)。 警告框只应用于快速操作，如密码验证、小型应用通知或快速选项。

## 创建

可以使用 [Alert Controller](../../alert-controller/AlertController) 来创建提示框 然后通过在 alert 的options中给定参数,来设置alert的内容

## 按钮

在 `按钮`的数组中，每个按钮都包含其 `文本`的属性，以及可选的 `处理器` 的属性。 如果处理程序返回 `false` ，那么当按下按钮时，警报将不会自动被撤销。 所有按钮都会显示在从左到右的 `按钮` 数组中的顺序。 注意：右大部分按钮(数组中的最后一个按钮)是主按钮。

Optionally, a `role` property can be added to a button, such as `cancel`. If a `cancel` role is on one of the buttons, then if the alert is dismissed by tapping the backdrop, then it will fire the handler from the button with a cancel role.

## 输入框

Alerts can also include several different inputs whose data can be passed back to the app. Inputs can be used as a simple way to prompt users for information. Radios, checkboxes and text inputs are all accepted, but they cannot be mixed. For example, an alert could have all radio button inputs, or all checkbox inputs, but the same alert cannot mix radio and checkbox inputs. Do note however, different types of "text" inputs can be mixed, such as `url`, `email`, `text`, etc. If you require a complex form UI which doesn't fit within the guidelines of an alert then we recommend building the form within a modal instead.

<!-- Auto Generated Below -->

## 使用方法

### Angular

```typescript
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'alert-example',
  templateUrl: 'alert-example.html',
  styleUrls: ['./alert-example.css'],
})
export class AlertExample {

  constructor(public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['Cancel', 'Open Modal', 'Delete']
    });

    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
        {
          name: 'name3',
          value: 'https://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertRadio() {
    const alert = await this.alertController.create({
      header: 'Radio',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Radio 1',
          value: 'value1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Radio 2',
          value: 'value2'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Radio 3',
          value: 'value3'
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Radio 4',
          value: 'value4'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Radio 5',
          value: 'value5'
        },
        {
          name: 'radio6',
          type: 'radio',
          label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertCheckbox() {
    const alert = await this.alertController.create({
      header: 'Checkbox',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Checkbox 1',
          value: 'value1',
          checked: true
        },

        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Checkbox 2',
          value: 'value2'
        },

        {
          name: 'checkbox3',
          type: 'checkbox',
          label: 'Checkbox 3',
          value: 'value3'
        },

        {
          name: 'checkbox4',
          type: 'checkbox',
          label: 'Checkbox 4',
          value: 'value4'
        },

        {
          name: 'checkbox5',
          type: 'checkbox',
          label: 'Checkbox 5',
          value: 'value5'
        },

        {
          name: 'checkbox6',
          type: 'checkbox',
          label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

}
```

### JavaScript

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

async function presentAlertMultipleButtons() {
  const alertController = document.querySelector('ion-alert-controller');
  await alertController.componentOnReady();

  const alert = await alertController.create({
    header: 'Alert',
    subHeader: 'Subtitle',
    message: 'This is an alert message.',
    buttons: ['Cancel', 'Open Modal', 'Delete']
  });
  return await alert.present();
}

async function presentAlertConfirm() {
  const alertController = document.querySelector('ion-alert-controller');
  await alertController.componentOnReady();

  const alert = await alertController.create({
    header: 'Confirm!',
    message: 'Message <strong>text</strong>!!!',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Okay',
        handler: () => {
          console.log('Confirm Okay')
        }
      }
    ]
  });
  return await alert.present();
}

async function presentAlertPrompt() {
  const alertController = document.querySelector('ion-alert-controller');
  await alertController.componentOnReady();

  const alert = await alertController.create({
    header: 'Prompt!',
    inputs: [
      {
        placeholder: 'Placeholder 1'
      },
      {
        name: 'name2',
        id: 'name2-id',
        value: 'hello',
        placeholder: 'Placeholder 2'
      },
      {
        name: 'name3',
        value: 'https://ionicframework.com',
        type: 'url',
        placeholder: 'Favorite site ever'
      },
      // input date with min & max
      {
        name: 'name4',
        type: 'date',
        min: '2017-03-01',
        max: '2018-01-12'
      },
      // input date without min nor max
      {
        name: 'name5',
        type: 'date'
      },
      {
        name: 'name6',
        type: 'number',
        min: -5,
        max: 10
      },
      {
        name: 'name7',
        type: 'number'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel')
        }
      }, {
        text: 'Ok',
        handler: () => {
          console.log('Confirm Ok')
        }
      }
    ]
  });
  return await alert.present();
}

async function presentAlertRadio() {
  const alertController = document.querySelector('ion-alert-controller');
  await alertController.componentOnReady();

  const alert = await alertController.create({
    header: 'Radio',
    inputs: [
      {
        type: 'radio',
        label: 'Radio 1',
        value: 'value1',
        checked: true
      },
      {
        type: 'radio',
        label: 'Radio 2',
        value: 'value2'
      },
      {
        type: 'radio',
        label: 'Radio 3',
        value: 'value3'
      },
      {
        type: 'radio',
        label: 'Radio 4',
        value: 'value4'
      },
      {
        type: 'radio',
        label: 'Radio 5',
        value: 'value5'
      },
      {
        type: 'radio',
        label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
        value: 'value6'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel')
        }
      }, {
        text: 'Ok',
        handler: () => {
          console.log('Confirm Ok')
        }
      }
    ]
  });
  return await alert.present();
}

async function presentAlertCheckbox() {
  const alertController = document.querySelector('ion-alert-controller');
  await alertController.componentOnReady();

  const alert = await alertController.create({
    header: 'Checkbox',
    inputs: [
      {
        type: 'checkbox',
        label: 'Checkbox 1',
        value: 'value1',
        checked: true
      },

      {
        type: 'checkbox',
        label: 'Checkbox 2',
        value: 'value2'
      },

      {
        type: 'checkbox',
        label: 'Checkbox 3',
        value: 'value3'
      },

      {
        type: 'checkbox',
        label: 'Checkbox 4',
        value: 'value4'
      },

      {
        type: 'checkbox',
        label: 'Checkbox 5',
        value: 'value5'
      },

      {
        type: 'checkbox',
        label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
        value: 'value6'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel')
        }
      }, {
        text: 'Ok',
        handler: () => {
          console.log('Confirm Ok')
        }
      }
    ]
  });
  return await alert.present();
}
```

## API

<docs-cards> <docs-card header="ion-alert" href="/docs/api/alert"> 

通过对话框来收集用户信息。</docs-card> <docs-card header="ion-alert-controller" href="/docs/api/alert-controller"> 

用于提示框的创建、隐藏和销毁。</docs-card> </docs-cards>