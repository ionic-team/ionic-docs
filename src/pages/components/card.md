# Card

Cards are a great way to display important pieces of content, and are a common UI paradigm in apps. They contain and organize information, while also setting up predictable expectations for the user. With so much content to display at once, and often limited screen real estate, cards have fast become a design pattern of choice for many popular apps.

For mobile experiences, Cards make it easy to display the same information visually across many different screen sizes. They allow for more control, are flexible, and can even be animated.

## Basic Usage

The foundation of the card component is the card content. To create this card, use the following:

```html
<ion-card>
  <ion-card-content>
    <p>
      Here’s a small text description for the card component. Nothing more, nothing less.
    </p>
  </ion-card-content>
</ion-card>
```

This is the most basic example using text as the content. Now, let’s start taking it further by customizing the content with other Ionic components and layouts.

### Header

A card header can be added above the content with a title to describe what the card content contains. To create this card, use the following:

```html
<ion-card>
  <ion-card-header>
    <ion-card-title>Card Title</ion-card-title>
  </ion-card-header>
  <ion-card-content>
    <p>
      Here’s a small text description for the card component. Nothing more, nothing less.
    </p>
  </ion-card-content>
</ion-card>
```

We can add a subtitle above the title in order to further categorize the card using the following:

```html
<ion-card>
  <ion-card-header>
    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
    <ion-card-title>Card Title</ion-card-title>
  </ion-card-header>
  <ion-card-content>
    <p>
      Here’s a small text description for the card component. Nothing more, nothing less.
    </p>
  </ion-card-content>
</ion-card>
```

### Actions

Cards can also contain buttons and icons that contain actions. To create a card with a grid of actions, use the following:

```html
<ion-card>
  <ion-card-header>
    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
    <ion-card-title>Card Title</ion-card-title>
  </ion-card-header>
  <ion-card-content>
    <p>
      Here’s a small text description for the card component. Nothing more, nothing less.
    </p>
    <ion-grid no-padding>
      <ion-row>
        <ion-col size="6">
          <ion-button size="small">Action</ion-button>
        </ion-col>
        <ion-col size="6" text-right>
          <ion-button size="small" fill="clear" color="medium">
            <ion-icon slot="icon-only" name="heart"></ion-icon>
          </ion-button>
          <ion-button size="small" fill="clear" color="medium">
            <ion-icon slot="icon-only" name="share"></ion-icon>
          </ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-card-content>
</ion-card>
```

### Images

Adding an image to a card is a great way to make the card more appealing. Simply add an image at the top of the card, like the following:

```html
<ion-card>
  <img src="image.png"/>
  <ion-card-header>
    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
    <ion-card-title>Card Title</ion-card-title>
  </ion-card-header>
  <ion-card-content>
    <p>
      Here’s a small text description for the card component. Nothing more, nothing less.
    </p>
    <ion-grid no-padding>
      <ion-row>
        <ion-col size="6">
          <ion-button size="small">Action</ion-button>
        </ion-col>
        <ion-col size="6" text-right>
          <ion-button size="small" fill="clear" color="medium">
            <ion-icon slot="icon-only" name="heart"></ion-icon>
          </ion-button>
          <ion-button size="small" fill="clear" color="medium">
            <ion-icon slot="icon-only" name="share"></ion-icon>
          </ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-card-content>
</ion-card>
```


## Lists

### Applications Card

Cards can be used to showcase lists of content, such as apps. To create this list, use the following:

```html
<ion-card>
  <ion-card-header>
    <ion-card-subtitle>Your Daily List</ion-card-subtitle>
    <ion-card-title>Ionic Apps We Think You'll Love.</ion-card-title>
  </ion-card-header>
  <ion-card-content>
    <ion-list>
      <ion-item>
        <ion-thumbnail slot="start">
          <img src="sworkit.png"/>
        </ion-thumbnail>
        <ion-label>
          <h3>Sworkit</h3>
          <p>The number one fitness app</p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-thumbnail slot="start">
          <img src="untappd.png"/>
        </ion-thumbnail>
        <ion-label>
          <h3>Untappd</h3>
          <p>Discover and share beer</p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-thumbnail slot="start">
          <img src="shipt.png"/>
        </ion-thumbnail>
        <ion-label>
          <h3>Shipt</h3>
          <p>Bring the store to your door</p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-thumbnail slot="start">
          <img src="marketwatch.png"/>
        </ion-thumbnail>
        <ion-label>
          <h3>Market Watch</h3>
          <p>The latest financial news</p>
        </ion-label>
      </ion-item>
    </ion-list>
  </ion-card-content>
</ion-card>
```

### Contact Card

An image, button and a list can be combined to create a contact card. Use the following to make this neat card:

```html
<ion-card>
  <img src="image.png"/>
  <ion-card-content>
    <ion-fab horizontal="end" vertical="top" edge>
      <ion-fab-button>
        <ion-icon name="call"></ion-icon>
      </ion-fab-button>
    </ion-fab>
    <ion-list lines="none">
      <ion-item>
        <ion-avatar slot="start">
          <img src="avatar.png"/>
        </ion-avatar>
        <ion-label>
          <h3>John Parks</h3>
          <p>Coworker</p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-icon name="call" slot="start"></ion-icon>
        <ion-label>
          <h3>(555) 418-5602</h3>
          <p>Mobile phone</p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-icon name="mail" slot="start"></ion-icon>
        <ion-label>
          <h3>jparks@workmail.com</h3>
          <p>Work email</p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-icon name="mail" slot="start"></ion-icon>
        <ion-label>
          <h3>john.parks92@email.com</h3>
          <p>Personal email</p>
        </ion-label>
      </ion-item>
    </ion-list>
  </ion-card-content>
</ion-card>
```

## Media

### Music Card

Cards can be used to display currently playing music with controls. Use the following to add this card:

```html
<ion-card>
  <ion-card-header>
    <img src="image.png"/>
  </ion-card-header>
  <ion-card-content text-center>
    <h2>29 #Strafford APTS</h2>
    <p>Bon Iver — 22, A Million</p>
    <ion-range color="darK" value="65"></ion-range>

    <ion-button color="dark" fill="clear" size="small">
      <ion-icon slot="icon-only" name="shuffle"></ion-icon>
    </ion-button>
    <ion-button color="dark" fill="clear">
      <ion-icon slot="icon-only" name="rewind"></ion-icon>
    </ion-button>
    <ion-button color="dark" fill="clear">
      <ion-icon slot="icon-only" name="play"></ion-icon>
    </ion-button>
    <ion-button color="dark" fill="clear">
      <ion-icon slot="icon-only" name="fastforward"></ion-icon>
    </ion-button>
    <ion-button color="dark" fill="clear" size="small">
      <ion-icon slot="icon-only" name="repeat"></ion-icon>
    </ion-button>
  </ion-card-content>
</ion-card>
```

### Album Card

Cards can be useful for presenting lists of ratings, such as a list of albums. Use the following to achieve this:

```html
 <ion-card>
  <ion-card-header>
    <ion-item no-padding>
      <ion-thumbnail slot="start">
        <img src="album.png" />
      </ion-thumbnail>
      <ion-label>
        <h1>Hallucinogen</h1>
        <h2>Kelela, 2015</h2>
      </ion-label>
    </ion-item>
  </ion-card-header>
  </ion-card-header>
  <ion-card-content>
    <ion-grid no-padding>
      <ion-row align-items-center>
        <ion-col>
          <ion-label>Rate this album:</ion-label>
        </ion-col>
        <ion-col text-right>
          <ion-icon name="star-outline"></ion-icon>
          <ion-icon name="star-outline"></ion-icon>
          <ion-icon name="star-outline"></ion-icon>
          <ion-icon name="star-outline"></ion-icon>
          <ion-icon name="star-outline"></ion-icon>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-card-content>
</ion-card>
```

## Advanced

### Location Card

TODO

### Social Card

TODO


---

## API

<docs-cards>
  <docs-card header="card" href="/docs/api/card">
    <p>TODO</p>
  </docs-card>
  <docs-card header="card-content" href="/docs/api/card-content">
    <p>TODO</p>
  </docs-card>
  <docs-card header="card-header" href="/docs/api/card-header">
    <p>TODO</p>
  </docs-card>
  <docs-card header="card-title" href="/docs/api/card-title">
    <p>TODO</p>
  </docs-card>
  <docs-card header="card-subtitle" href="/docs/api/card-subtitle">
    <p>TODO</p>
  </docs-card>
</docs-cards>