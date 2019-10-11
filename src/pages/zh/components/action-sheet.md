# 动作面板

Action Sheet 是一个设置选项的对话框 他会出现在应用的内容的最顶层, 而且用户选择过后才会消失, 没选择前无法使用app其它内容. 关闭action sheet的方式也很多, 包括按手机上的返回键或者回到桌面键 Action Sheets不应用于导航

## 基本用法

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lacus eu purus viverra egestas. Nunc porta, elit ut finibus gravida, dui orci feugiat leo, tincidunt fermentum urna eros vel elit. Phasellus convallis, tellus eu volutpat facilisis, ipsum mauris luctus diam, sodales tincidunt quam turpis at leo.

```typescript
async function presentActionSheet() {
  const actionSheetController = document.querySelector('ion-action-sheet-controller');
  await actionSheetController.componentOnReady();

  const actionSheet = await actionSheetController.create({
    header: "Albums",
    buttons: [{
      text: 'Delete',
      role: 'destructive',
      icon: 'trash',
      handler: () => {
        console.log('Delete clicked');
      }
    }, {
      text: 'Share',
      icon: 'share',
      handler: () => {
        console.log('Share clicked');
      }
    }, {
      text: 'Play (open modal)',
      icon: 'arrow-dropright-circle',
      handler: () => {
        console.log('Play clicked');
      }
    }, {
      text: 'Favorite',
      icon: 'heart',
      handler: () => {
        console.log('Favorite clicked');
      }
    }, {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }]
  });
  await actionSheet.present();
}
```

### 取消按钮文本

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lacus eu purus viverra egestas. Nunc porta, elit ut finibus gravida, dui orci feugiat leo, tincidunt fermentum urna eros vel elit. Phasellus convallis, tellus eu volutpat facilisis, ipsum mauris luctus diam, sodales tincidunt quam turpis at leo.

* * *

## 破坏

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lacus eu purus viverra egestas. Nunc porta, elit ut finibus gravida, dui orci feugiat leo, tincidunt fermentum urna eros vel elit. Phasellus convallis, tellus eu volutpat facilisis, ipsum mauris luctus diam, sodales tincidunt quam turpis at leo.

* * *

## 信头

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lacus eu purus viverra egestas. Nunc porta, elit ut finibus gravida, dui orci feugiat leo, tincidunt fermentum urna eros vel elit. Phasellus convallis, tellus eu volutpat facilisis, ipsum mauris luctus diam, sodales tincidunt quam turpis at leo.

### Adding Subheaders

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lacus eu purus viverra egestas. Nunc porta, elit ut finibus gravida, dui orci feugiat leo, tincidunt fermentum urna eros vel elit. Phasellus convallis, tellus eu volutpat facilisis, ipsum mauris luctus diam, sodales tincidunt quam turpis at leo.

* * *

## 可滚动

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lacus eu purus viverra egestas. Nunc porta, elit ut finibus gravida, dui orci feugiat leo, tincidunt fermentum urna eros vel elit. Phasellus convallis, tellus eu volutpat facilisis, ipsum mauris luctus diam, sodales tincidunt quam turpis at leo.

* * *

## 透明

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lacus eu purus viverra egestas. Nunc porta, elit ut finibus gravida, dui orci feugiat leo, tincidunt fermentum urna eros vel elit. Phasellus convallis, tellus eu volutpat facilisis, ipsum mauris luctus diam, sodales tincidunt quam turpis at leo.

* * *

## 图标

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lacus eu purus viverra egestas. Nunc porta, elit ut finibus gravida, dui orci feugiat leo, tincidunt fermentum urna eros vel elit. Phasellus convallis, tellus eu volutpat facilisis, ipsum mauris luctus diam, sodales tincidunt quam turpis at leo.

* * *

## API

<docs-cards> <docs-card header="ion-action-sheet" href="/docs/api/action-sheet"> 

Display a set of options with the ability to confirm or cancel an action.</docs-card> <docs-card header="ion-action-sheet-controller" href="/docs/api/action-sheet-controller"> 

Used to manage the creation, dismissal, and destruction of action sheets.</docs-card> </docs-cards>