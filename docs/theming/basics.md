---
title: テーマの基本
sidebar_label: 基本的な考え方
---

import ColorAccordion from '@components/page/theming/ColorAccordion';

<head>
  <title>Theming | Ionic Apps: Color and Theming Basics Definition</title>
  <meta
    name="description"
    content="The definition of theming apps just got simplified. Ionic Framework is built with pre-baked styles and colors which are extremely easy to change and modify."
  />
</head>

Ionic Frameworkは、さまざまなプラットフォームの標準デザインに準拠しながら、白紙の状態からブランディングに合わせて簡単にカスタマイズおよび変更できるように構築されています。IonicアプリのThemingは今まで以上に簡単です。フレームワークはCSSで構築されているため、事前に用意されているデフォルトスタイルは簡単に変更や修正をすることができます。

## Colors

Ionic has nine default colors that can be used to change the color of many components. Each color is actually a collection of multiple properties, including a `shade` and `tint`, used throughout Ionic.

When changing a color, it is important to set all of the related properties. This can be done easily with the [Color Generator](color-generator.md) tool, but these can also be manually written if desired. For more information on Ionic colors, see [Colors](colors.md).

<ColorAccordion />

## Platform Standards

Ionic components adapt their look and behavior based on the platform the app is running on. We call this <strong>Adaptive Styling</strong>. This allows developers to build apps that use the same codebase for multiple platforms, while still looking "native" to those particular platforms.

Ionicは、2つの **modes** をもっており、これらはプラットフォーム: `ios` と `md` に基づいてコンポーネントの外観がカスタマイズされます。各プラットフォームにはデフォルトモードがありますが、簡単に変更できます。プラットフォームに基づいてアプリケーションをカスタマイズする方法の詳細については、[Platform Styles](platform-styles.md) をご覧ください。

## CSS Variables
Ionicコンポーネントは、 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank" rel="noopener noreferrer">CSS properties (variables)</a>を使ってテーマ化されています。CSS変数は、動的な値を静的なCSSで利用することができます。これは今まではSassのようなCSSプリプロセッサを必要としていたものです。アプリケーションの外観は、[Ionic Variables](/docs/theming/css-variables#ionic-variables)のいずれかの値を変更することで簡単に変更できます。

The Ionic Framework components are themed using <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank" rel="noopener noreferrer">CSS properties (variables)</a>. CSS variables add dynamic values to an otherwise static language. This is something that has traditionally required a CSS preprocessor like Sass. The look of an application can easily be changed by changing the value of any of the [CSS Variables](css-variables.md) Ionic Framework provides.

## CSS Shadow Parts

CSS Shadow Partsが追加され、Ionic Framework Shadowコンポーネントの完全なカスタマイズが容易になりました。これまで、 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM" target="_blank" rel="noopener noreferrer">Shadow DOM</a> を使用するコンポーネントは、シャドウ・ツリー内の要素を直接スタイル設定できませんでした。Shadow Partsが追加されたため、Shadowコンポーネントの内部要素のすべてのプロパティーにCSS変数を使用する必要がなくなりました。パーツを使用したIonic Frameworkコンポーネントのカスタマイズの詳細については、[CSS Shadow Parts](css-shadow-parts.md)ガイドを参照してください。

## Branding

Ionicは、ブランディングや配色にあったテーマとなるアプリケーションの配色を提供します。デフォルトのテーマは明るい背景を使用しますが、背景色からテキストの色まですべてカスタマイズ可能です。ブランディングの詳細については、[Themes](themes.md) をご覧ください。
