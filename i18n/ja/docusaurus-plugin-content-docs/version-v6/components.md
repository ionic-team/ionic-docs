---
title: UIコンポーネント
hide_table_of_contents: true
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>UIコンポーネント | User Interface Application Building Components</title>
  <meta
    name="description"
    content="Ionic Framework comes stock with a number of high-level UI components, including cards, lists, and tabs to quickly and easily build your app's user interface."
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}</style>
</head>

Ionicアプリは、コンポーネントと呼ばれる高レイヤーの構成要素で構成されています。コンポーネントを使用すると、アプリのインターフェイスをすばやく構築することができます。Ionicには、modals、popups、cardsなど、さまざまなコンポーネントが用意されています。以下の例を確認して、各コンポーネントの外観と各コンポーネントの使用方法を確認してください。基本に慣れたら、各コンポーネントをカスタマイズする方法についてのアイデアを得るために [API Index](api.md) をご覧ください。

<intro-end />

<DocsCards>
  <DocsCard header="Action Sheet" href="api/action-sheet" img="/icons/feature-component-actionsheet-icon.png">
    <p>Action Sheetは、一連のオプションを表示して、アクションを確認または取り消すことができます。</p>
  </DocsCard>

<DocsCard header="Alert" href="api/alert" icon="/icons/component-alert-icon.png">
  <p>Alertは、特定のアクションまたはアクションのリストを選択する機能を、ユーザーに提供するための優れた方法です。</p>
</DocsCard>

<DocsCard header="Badge" href="api/badge" icon="/icons/component-badge-icon.png">
  <p>Badgeコンポーネントは、通常は数値をユーザーに伝えるための小さなコンポーネントです。</p>
</DocsCard>

<DocsCard header="Button" href="api/button" icon="/icons/component-button-icon.png">
  <p>Buttonを使ってユーザが行動を起こすことができます。これはアプリと対話したり、移動したりするのに不可欠な方法です。</p>
</DocsCard>

<DocsCard header="Card" href="api/card" icon="/icons/component-card-icon.png">
  <p>
    Cardは重要なコンテンツを表示するのに最適な方法で、画像、ボタン、テキストなどを含めることができます。
  </p>
</DocsCard>

<DocsCard header="Checkbox" href="api/checkbox" icon="/icons/component-checkbox-icon.png">
  <p>Checkboxを使用して、択一の決定をする必要があることをユーザーに知らせることができます。</p>
</DocsCard>

<DocsCard header="Chip" href="api/chip" icon="/icons/component-chip-icon.png">
  <p>チップはデータやアクションを表示するためのコンパクトな方法です。</p>
</DocsCard>

<DocsCard header="Content" href="api/content" icon="/icons/component-content-icon.png">
  <p>コンテンツは、アプリと対話してアプリをナビゲートするための典型的な方法です。</p>
</DocsCard>

<DocsCard header="Date & Time Pickers" href="api/datetime" icon="/icons/component-datetimepicker-icon.png">
  <p>日付と時刻のピッカーは、ユーザーが日付と時刻を簡単に選択できるようにするためのインターフェースを提示することができます。</p>
</DocsCard>

<DocsCard header="Floating Action Button" href="api/fab" icon="/icons/component-fab-icon.png">
  <p>フローティングアクションボタン（FAB）は、画面上で主要な、または最も一般的なアクションを実行する円形のボタンです。</p>
</DocsCard>

<DocsCard header="Icons" href="api/icon" img="/icons/feature-component-icons-icon.png">
  <p>Beautifully designed icons for use in web, iOS, Android, and desktop apps.</p>
</DocsCard>

<DocsCard header="Grid" href="api/grid" icon="/icons/component-grid-icon.png">
  <p>Gridはカスタムレイアウトを構築するための強力なモバイルファーストシステムです。</p>
</DocsCard>

<DocsCard header="Infinite Scroll" href="api/infinite-scroll" icon="/icons/component-infinitescroll-icon.png">
  <p>Infinite scrollは、ユーザーがアプリをスクロールするときに新しいデータを読み込むことができます。</p>
</DocsCard>

<DocsCard header="Input" href="api/input" icon="/icons/component-input-icon.png">
  <p>Inputsはユーザーがアプリにデータを入力する方法を提供します。</p>
</DocsCard>

<DocsCard header="Item" href="api/item" icon="/icons/component-item-icon.png">
  <p>Itemsは、Listの一部として使用できる汎用のUIコンテナです。</p>
</DocsCard>

<DocsCard header="List" href="api/list" icon="/icons/component-lists-icon.png">
  <p>Listは、連絡先リスト、再生リスト、メニューなどの情報の行を表示できます。</p>
</DocsCard>

<DocsCard header="Navigation" href="api/nav" img="/icons/feature-component-navigation-icon.png">
  <p>Navigationは、ユーザーがアプリ内の異なるページ間を移動する方法です。</p>
</DocsCard>

<DocsCard header="Menu" href="api/menu" icon="/icons/component-menu-icon.png">
  <p>Menuは一般的なナビゲーションパターンです。それらは常時画面上に表示することも、必要に応じて表示することもできます。</p>
</DocsCard>

<DocsCard header="Modal" href="api/modal" icon="/icons/component-modal-icon.png">
  <p>Modalはは、一時的なUIを表示するために画面内および画面外にスライドするため、ログインページまたはサインアップページによく使用されます。</p>
</DocsCard>

<DocsCard header="Popover" href="api/popover" icon="/icons/component-popover-icon.png">
  <p>Popoverは、コンテキストを変えずに情報やオプションを提示する簡単な方法を提供します。</p>
</DocsCard>

<DocsCard header="Progress Indicators" href="api/progress-bar" icon="/icons/component-progress-icon.png">
  <p>Progress indicatorsは、操作またはアクティビティの進行状況を視覚化します。</p>
</DocsCard>

<DocsCard header="Radio" href="api/radio" icon="/icons/component-radio-icon.png">
  <p>Radio inputsはあなたが排他的なオプションのセットを提示することを可能にします。</p>
</DocsCard>

<DocsCard header="Refresher" href="api/refresher" icon="/icons/component-refresher-icon.png">
  <p>Refresherは、コンテンツコンポーネントの更新機能を提供します。</p>
</DocsCard>

<DocsCard header="Searchbar" href="api/searchbar" img="/icons/feature-component-search-icon.png">
  <p>Searchbarは、ールバーからアイテムを検索またはフィルタリングするために使用されます。</p>
</DocsCard>

<DocsCard header="Reorder" href="api/reorder" icon="/icons/component-reorder-icon.png">
  <p>Reorderを使用すると、ユーザーはドラッグアンドドロップでアイテムのリストを並べ替えることができます。</p>
</DocsCard>

<DocsCard header="Routing" href="api/router" icon="/icons/component-routing-icon.png">
  <p>Routingは現在のpathに基づいてナビゲーションを可能にします。</p>
</DocsCard>

<DocsCard header="Segment" href="api/segment" icon="/icons/component-segment-icon.png">
  <p>Segmentsは、フィルターまたはViewの切り替えとして使用できる一連の専用ボタンを提供します。</p>
</DocsCard>

<DocsCard header="Select" href="api/select" icon="/icons/component-select-icon.png">
  <p>SelectはネイティブのHTML選択に似ていますが、Sortと選択が少し改善されています。</p>
</DocsCard>

<DocsCard header="Tabs" href="api/tabs" img="/icons/feature-component-tabs-icon.png">
  <p>Tabsを使用すると、タブ付きナビゲーション、つまり現代のアプリケーションの標準的なナビゲーションパターンが有効になります。</p>
</DocsCard>

<DocsCard header="Toast" href="api/toast" icon="/icons/component-toast-icon.png">
  <p>Toastは、アプリのコンテンツの上に通知を表示するために使用されます。一時的なものでも却下可能なものでもあります。</p>
</DocsCard>

<DocsCard header="Toggle" href="api/toggle" icon="/icons/component-toggle-icon.png">
  <p>Togglesは択一のInputでありオプションやスイッチによく使われます。</p>
</DocsCard>

  <DocsCard header="Toolbar" href="api/toolbar" icon="/icons/component-toolbar-icon.png">
    <p>Toolbarsは、アプリに関連する情報や操作を格納するために使用されます。</p>
  </DocsCard>
</DocsCards>
