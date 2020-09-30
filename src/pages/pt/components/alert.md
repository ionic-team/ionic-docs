* * *

tableOfContent: falso

* * *

# Alerta

Alertas são uma ótima maneira de oferecer ao usuário a capacidade de escolher uma ação específica ou uma lista de ações. Alertas podem conter texto, entradas e botões. Eles podem fornecer informações importantes ao usuário, ou exigi-las para tomar uma decisão (ou várias decisões). Alertas só devem ser usados para ações rápidas, como verificação de senha, notificações pequenas do aplicativo ou opções rápidas.

## Criando

Alertas podem ser criados usando um [Controlador de Alerta](../../alert-controller/AlertController). Eles podem ser personalizados passando opções de alerta no método de criação do controlador de alerta.

## Botões

No array dos `botões`, cada botão inclui propriedades para seu `texto`, e, opcionalmente, um `manipulador`. Se um manipulador retorna `falso` então o alerta não será descartado automaticamente quando o botão for clicado. Todos os botões aparecerão na ordem em que foram adicionados ao array dos `botões` da esquerda para a direita. Nota: O botão mais direito (o último na matriz) é o botão principal.

Opcionalmente, uma propriedade de `papel` pode ser adicionada a um botão, como `cancelar`. Se uma função `cancelar` é sobre um dos botões, então se o alerta for descartado tocando em segundo plano, então irá disparar o manipulador a partir do botão com uma função de cancelamento.

## Entradas

Alertas também podem incluir várias entradas diferentes cujos dados podem ser repassados para o aplicativo. Entradas podem ser usadas como uma maneira simples de solicitar informações aos usuários. Rádios, caixas de seleção e entradas de texto são aceitas, mas não podem ser misturadas. Por exemplo, um alerta poderia ter todas as entradas do botão de rádio, ou todas as entradas na caixa de seleção, mas o mesmo alerta não pode misturar entradas de rádio e caixa de seleção. Note, no entanto, que diferentes tipos de entradas de "texto" podem ser misturadas, como `url`, `e-mail`, `texto`, etc. Se você precisar de uma forma complexa de interface do usuário, que não se encaixa nas diretrizes de um alerta, recomendamos então criar o formulário dentro de uma modal.

<!-- Auto Generated Below -->

## Utilização

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

### Javascript

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

Exibir um diálogo para apresentar ou coletar informações de um usuário.</docs-card> <docs-card header="ion-alert-controller" href="/docs/api/alert-controller"> 

Usado para gerenciar a criação, demissão e destruição de alertas.</docs-card> </docs-cards>