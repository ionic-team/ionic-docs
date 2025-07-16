---
title: テーマの基本
sidebar_label: 基本的な考え方
---

import ColorAccordion from '@components/page/theming/ColorAccordion';

<head>
  <title>テーマ | Ionic Apps: Color and Theming Basics Definition</title>
  <meta
    name="description"
    content="The definition of theming apps just got simplified. Ionic Framework is built with pre-baked styles and colors which are extremely easy to change and modify."
  />
</head>

Ionic Framework は、さまざまなプラットフォームの標準デザインに準拠しながら、白紙の状態からブランディングに合わせて簡単にカスタマイズおよび変更できるように構築されています。Ionic アプリの Theming は今まで以上に簡単です。フレームワークは CSS で構築されているため、事前に用意されているデフォルトスタイルは簡単に変更や修正をすることができます。

## 配色

Ionic には 9 つのデフォルトカラーがあり、多くのコンポーネントの色を変更するのに利用できます。各色は実際には `shade` や `tint` などの複数のプロパティの集まりで、Ionic 全体で使用されます。

色を変更する際には、関連するすべてのプロパティを設定することが重要です。これは[Color Generator](color-generator.md)ツールで簡単に行えますが、必要であればこれらは手動で記述することもできます。Ionic の色については、[Colors](colors.md)を参照してください。

<ColorAccordion />

## Platform Standards

Ionic コンポーネントは、アプリが動作しているプラットフォームに応じて、見た目や動作を調整します。私たちはこれを **Adaptive Styling** と呼んでいます。これにより、開発者は複数のプラットフォームで同じコードベースを使用しながら、特定のプラットフォームで「ネイティブ」な外観のアプリを構築することができます。

Ionic は、2 つの **modes** をもっており、これらはプラットフォーム: `ios` と `md` に基づいてコンポーネントの外観がカスタマイズされます。各プラットフォームにはデフォルトモードがありますが、簡単に変更できます。プラットフォームに基づいてアプリケーションをカスタマイズする方法の詳細については、[Platform Styles](platform-styles.md) をご覧ください。

## CSS Variables

Ionic Framework のコンポーネントは、 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank" rel="noopener noreferrer">CSS custom properties (variables)</a> を使ってテーマ化されています。CSS 変数は、静的な言語に動的な値を追加します。これは従来、Sass のような CSS プリプロセッサを必要とするものでした。Ionic Framework が提供する [CSS 変数](css-variables.md) の値を変更することで、アプリケーションの外観を簡単に変更できます。

## CSS Shadow Parts

CSS Shadow Parts が追加され、Ionic Framework Shadow コンポーネントの完全なカスタマイズが容易になりました。これまで、 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM" target="_blank" rel="noopener noreferrer">Shadow DOM</a> を使用するコンポーネントは、シャドウ・ツリー内の要素を直接スタイル設定できませんでした。Shadow Parts が追加されたため、Shadow コンポーネントの内部要素のすべてのプロパティーに CSS 変数を使用する必要がなくなりました。パーツを使用した Ionic Framework コンポーネントのカスタマイズの詳細については、[CSS Shadow Parts](css-shadow-parts.md)ガイドを参照してください。

## Branding

Ionic は、ブランディングや配色にあったテーマとなるアプリケーションの配色を提供します。デフォルトのテーマは明るい背景を使用しますが、背景色からテキストの色まですべてカスタマイズ可能です。ブランディングの詳細については、[Themes](themes.md) をご覧ください。
