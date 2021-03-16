---
nextText: 'iOS, Android, and the Camera'
nextUrl: '/docs/developer-resources/guides/first-app-v3/ios-android-camera'
---

# Sua Primeira Aplicação Ionic - Framework v3

O ótimo do Ionic é que com uma base de código, você pode criar para qualquer plataforma usando ferramentas web e linguagens familiares. Acompanhe enquanto criamos uma Galeria de Fotos funcional. Aqui está o antes e depois:

![Before and after going through this tutorial](/docs/assets/img/guides/first-app-v3/gallery-combined.png)

É fácil começar. O código de referência para esse guia pode ser [encontrado no GitHub](https://github.com/ionic-team/photo-gallery-tutorial-ionic3/).

## Instale Node.js

Se você ainda não tem Node.js instalado, [baixe a versão LTS](https://nodejs.org/en/).

## Instale Ionic

Execute o seguinte na linha de comando (você pode precisar adicionar "sudo" em um Mac):

```shell
$ npm install -g @ionic/cli
```

## Crie uma Aplicação

Next, create an Ionic app using our “Tabs” app template:

```shell
$ ionic start photo-gallery tabs
```

This starter project comes complete with three pre-built pages and best practices for Ionic development. With common building blocks already in place, we can add more features easily!

<strong>“Would you like to integrate your new app with Cordova to target native iOS and Android?”</strong>

Type “y” and press Enter. Project setup may take a few moments.

<strong>“Install the free Appflow SDK and connect your app?”</strong>

Type “y” and press Enter. [Appflow](https://ionicframework.com/pro) is a powerful set of services and features built on top of the flagship Ionic Framework. This includes updating your app instantly (skipping the app store review process!), packaging apps in the cloud, and error monitoring.

<strong>Log into your Ionic Account</strong>

Entre agora para acessar facilmente recursos incríveis como Live Deploys mais tarde neste tutorial.

<strong>O que gostaria de fazer?</strong>

Choose “Create a new app on Appflow.”

<strong>Qual conta você gostaria de usar?</strong>

Choose “Appflow.”

<strong>“How would you like to connect to Appflow?”</strong>

* Choose “Automatically setup a new SSH key pair for Appflow” if you haven’t used SSH before.
* Choose “Use an existing SSH key pair” if you’ve used SSH before.

Next, change into the app folder, then push your code to Appflow:

```shell
$ cd photo-gallery
$ git push ionic master
```

That’s it! Now for the fun part - let’s see it in action.

## Run the App

Run this command next:

```shell
ionic serve
```

E voilà! Seu aplicativo Iônico agora está rodando em um navegador web. Most of your app can be built right in the browser, greatly increasing development speed.

## Photo Gallery!!!

Há três abas: "Casa", "Sobre" e "Contato". Clique na guia Sobre a página. É um canvas em branco, como o ponto perfeito para adicionar a funcionalidade da câmera. Vamos começar a transformar a página Sobre em uma Galeria de Fotos. Iônico recursos LiveReload, então quando você fizer alterações e salvá-las, o aplicativo é atualizado imediatamente!

![Before and after going through this tutorial](/docs/assets/img/guides/first-app-v3/email-photogallery.gif)

Open the photo-gallery app folder in your favorite code editor of choice, then navigate to `/src/pages/about/about.html`. We see:

```html
<ion-header>
  <ion-toolbar>
    <ion-title>About</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding"></ion-content>
```

`ionheader` representa a barra de navegação superior e ferramentas, com "Sobre" como título. Nós colocamos nosso código do aplicativo em `ion-content`. Neste caso, é onde vamos adicionar um botão que abre a câmera do dispositivo e mostra a imagem capturada pela câmera. But first, let’s start with something obvious: renaming the About page:

```html
<ion-title>Photo Gallery</ion-title>
```

Em seguida, abra `src/pages/tabs/tabs/tabs.html`. Alterar o título da aba "Galeria" e o ícone de guia para "imagens":

```html
<ion-tabs>
  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>
  <ion-tab [root]="tab2Root" tabTitle="Gallery" tabIcon="images"></ion-tab>
  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>
</ion-tabs>
```

Now, back up your changes to Appflow:

```shell
$ git add .
$ git commit -m “converting about page to photo gallery”
$ git push ionic master
```

Isso é apenas o início de todas as coisas legais que podemos fazer com Ionic. Em seguida, vamos implantar o app para iOS e Android, e depois continuar a construir a galeria de fotos.
