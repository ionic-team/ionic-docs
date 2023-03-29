```html
<ion-header>
  <ion-toolbar>
    <ion-title>Pull to Refresh</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-refresher id="refresher" slot="fixed">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>

  <ion-list id="list"></ion-list>
</ion-content>

<script>
  const refresher = document.getElementById('refresher');
  const names = ['Burt Bear', 'Charlie Cheetah', 'Donald Duck', 'Eva Eagle', 'Ellie Elephant', 'Gino Giraffe', 'Isabella Iguana', 'Karl Kitten', 'Lionel Lion', 'Molly Mouse', 'Paul Puppy', 'Rachel Rabbit', 'Ted Turtle'];

  refresher.addEventListener('ionRefresh', () => {
    setTimeout(() => {
      addItems(3, true);
      refresher.complete();
    }, 2000);
  });

  const list = document.querySelector('ion-list');
  addItems(5, false);

  function chooseRandomName() {
    return names[Math.floor(Math.random() * names.length)];
  }

  function addItems(count, unread) {
    for (let i = 0; i < count; i++) {
      list.insertBefore(createItem(unread), list.firstChild);
    }
  }

  function createItem(unread = false) {
    const name = chooseRandomName();
    let item = document.createElement('ion-item');
    item.button = true;

    item.innerHTML += `
      <ion-icon color="primary" name="${unread ? 'ellipse' : ''}" slot="start"></ion-icon>
      <ion-label>
        <h2>${name}</h2>
        <p>New message from ${name}</p>
      </ion-label>
    `;

    return item;
  }
</script>

<style>
  ion-item {
    --padding-start: 8px;
  }

  ion-icon {
    font-size: 12px;
    align-self: start;
    margin: 15px 8px;
  }
</style>
```
