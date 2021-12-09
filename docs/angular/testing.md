---
title: テスト
---

<head>
  <title>Angular Unit and End-to-End Testing for Ionic App Components</title>
  <meta
    name="description"
    content="Angular apps created using Ionic are automatically set up for unit and end-to-end testing. Read to learn more about testing tools for Ionic components."
  />
</head>

Ionic CLI を使用して `@ionic/angular` アプリケーションを生成すると、アプリケーションのユニットテストとエンドツーエンドのテスト用に自動的に準備されます。これは Angular CLI で使われる設定と同じものです。Angular で作られたアプリケーションのテストについての詳細は <a href="https://angular.jp/guide/testing" target="_blank">Angular Testing Guide</a> をご参照ください。

## テストの原則

アプリケーションをテストするときは、テストによってシステムに欠陥があるかどうかを確認できる、ということを覚えておくことが一番です。しかし、どんなささいなシステムも完全に欠陥のないことを証明することは不可能です。このため、テストの目的はコードが正しいことを確認することではなく、コードの中の問題を見つけることです。これは微妙ですが、重要な違いです。

もし私たちがコードが正しいことを証明しようとするのであれば、私たちはコードを通じて幸せな道を歩み続けようとするでしょう。もし私が問題の発見しようとするのであれば、コードをより完全に実行し、そこに潜むバグを発見する可能性が高くなります。

最初からアプリケーションのテストを開始することも最良です。これにより、修正が容易な段階で早期に欠陥を発見できます。またこれにより、システムに新しい機能が追加されたときに、コードを確実にリファクタリングすることもできます。

## ユニットテスト

ユニットテストでは、システムの他の部分から分離して、単一のコードユニット（Component、Page、Service、Pipeなど）を実行します。分離は、コードの依存関係の代わりにモックオブジェクトを注入することによって実現されます。モックオブジェクトによって、テストは依存関係の切り出しをきめ細かく制御することができます。モックによって、どの依存関係が呼び出され、何が渡されたかをテストで判断することもできます。

適切に記述されたユニットテストは、コードの単位とそれに含まれる機能が `describe()` コールバックによって記述されるように構成されています。コード単位とその機能の要件は、`it()` コールバックによってテストされます。`describe()` コールバックと `it()` コールバックの説明を読むと、フレーズとして意味がわかります。ネストされた `describe()` と最後の `it()` の記述をつなげると、テストケースを完全に記述する文が形成されます。

ユニットテストはコードを分離して実行するため、高速で堅牢であり、高度なコードカバレッジが可能です。

### モックの利用

ユニットテストでは、コードをコードをモジュールで分離して実行します。これを簡単にするには、Jasmine(https://jasmine.github.io/) を使用することをお勧めします。Jasmine は、テスト実行中に依存関係の代わりにモックオブジェクト(Jasmine は 「スパイ」 と呼んでいます)を作成します。モックオブジェクトを使用すると、テストはその依存関係への呼び出しによって返される値を制御できるため、依存関係に加えられた変更から現在のテストを独立させることができます。これにより、テストのセットアップも簡単になり、テスト対象のモジュール内のコードだけをテストすることができます。

モックを使用すると、モックが呼び出されたかどうか、および `toHaveBeenCalled*` セットの関数を介してどのように呼び出されたかを判断するために、テストでモックを確認することもできます。これらの関数では、メソッドが呼び出されたことをテストするときに、`toHaveBeenCalled` メソッドの呼び出しよりも `toHaveBeenCalledTimes` の呼び出しを優先して、テストをできるだけ具体的に行う必要があります。つまり、`expect(mock.foo).toHaveBeenCalledTimes(1)` は `expect(mock.foo).toHaveBeenCalled()` よりも優れています。何かが呼ばれていないこと（`expect(mock.foo).not.toHaveBeenCalled()`）をテストする際は、逆のアドバイスに従うべきです。

Jasmine でモックオブジェクトを作成する一般的な方法は2つあります。モックオブジェクトは、`jasmine.createSpy` と`jasmine.createSpyObj` を使ってスクラッチで作成することも、`spyOn()` と `spyOnProperty()` を使って既存のオブジェクトにスパイをインストールすることもできます。

### `jasmine.createSpy` と `jasmine.createSpyObj` の利用

`jasmine.createSpyObj` は、作成時に定義された一連のモックメソッドを使用して、完全なモックオブジェクトをスクラッチで作成します。これはとてもシンプルで便利です。テストのために何かを組み立てたり注入したりする必要はありません。この関数の使用する欠点は、実際のオブジェクトと一致しないオブジェクトを生成できることです。

`jasmine.createSpy` も似ていますが、スタンドアロンのモック関数を作成します。

#### `spyOn()` と `spyOnProperty()` の利用

`spyOn()` は、既存のオブジェクトにスパイをインストールします。この手法を使用する利点は、オブジェクト上に存在しないメソッドをスパイしようとすると、例外が発生することです。これにより、テストが存在しないメソッドをモックすることを防ぎます。欠点は、テストが最初から完全に整形されたオブジェクトを必要とすることであり、これはテストに必要なセットアップの量を増加させるかと思います。

`spyOnProperty()` は似ていますが、メソッドではなくプロパティに対してスパイするという点で異なります。

### 一般的なテストの構成

ユニットテストは、エンティティ（Component、Page、Service、Pipe など）ごとに1つの `spec` ファイルを持つ `spec` ファイルに含まれています。`spec` ファイルは、テスト中のソースと一緒に存在し、かつその名前が付けられます。たとえば、プロジェクトに WeatherService という Service がある場合、そのコードは`weather.service.ts` という名前のファイルにあり、テストは `weather.service.spec.ts` という名前のファイルにあります。これらのファイルは両方とも同じフォルダにあります。

`spec` ファイル自体には、そのテスト全体を定義するただ一つの `describe` コールが含まれています。その中には、主要な機能領域を定義する他の `describe` コールがネストされています。各 `describe` コールには、setup コードと teardown コード（一般的に `beforeEach` と `afterEach` コールによって処理される）、機能を階層的に分解した `describe` コール、また個々のテストケースを定義する `it` コールが含まれます。

`describe` と `it` コールには、説明のテキストラベルも含まれます。適切な形式のテストでは、`describe` と `it` をコールすると、ラベルと組み合わせた適切なフレーズが実行され、各テストケースのすべてのラベルが `describe` と `it` ラベルを組み合わせて構成され、完全な文が作成されます。

例:

```tsx
describe('Calculation', () => {
  describe('divide', () => {
    it('calculates 4 / 2 properly' () => {});
    it('cowardly refuses to divide by zero' () => {});
    ...
  });

  describe('multiply', () => {
    ...
  });
});
```

外側の `describe` コールは  `Calculation` Service がテストされていることを示し、内側の `describe` コールはテストされている機能を正確に示し、そして `it` コールはテストケースが何であるかを示しています。各テストケースの完全なラベルを実行すると、意味のある文になります(卑劣な 0 での除算という計算を拒否しました)。

### ページとコンポーネント

Pages は単なる Angular コンポーネントです。そのため、ページとコンポーネントは両方とも <a href="https://angular.jp/guide/testing#コンポーネントテストの基本">Angular のコンポーネントテストガイドライン</a> を使ってテストされます。

ページとコンポーネントには TypeScript コードと HTML テンプレートマークアップの両方が含まれているため、コンポーネントクラスのテストとコンポーネント DOM のテストの両方を実行できます。ページが作成されると、生成されるテンプレートテストは次のようになります:

```tsx
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsPage } from './tabs.page';

describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TabsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

コンポーネントクラスのテストを行う場合、コンポーネントオブジェクトは `component=fixture.componentInstance;` によって定義されたコンポーネントオブジェクトを使用してアクセスされます。これはコンポーネントクラスのインスタンスです。DOM テストを行う際には、`fixture.nativeElement` プロパティが使用されます。これはコンポーネントの実際の `HTMLElement`であり、テストで DOM を調べるために `HTMLElement.querySelector` などの標準の HTML API メソッドを使うことを可能にします。

## Service

Service は、多くの場合、計算やその他の操作を実行するユーティリティの service と、主にHTTP操作やデータ操作を実行するデータの service の2つの大まかなカテゴリーのいずれかに分類されます。

### 基本的な Service のテスト

ほとんどの service をテストするために推奨する方法は、service をインスタンス化し、service が持つ依存関係のモックを手動で注入することです。こうすることで、コードを分離してテストすることができます。

たとえば、タイムカードの配列を取得して差引支給額を計算するメソッドを持つ service があるとします。また税金計算は、現在の service が依存しているもう一つの service を介して処理されるとします。この給与計算の service は、このようにテストすることができます:

```tsx
import { PayrollService } from './payroll.service';

describe('PayrollService', () => {
  let service: PayrollService;
  let taxServiceSpy;

   beforeEach(() => {
     taxServiceSpy = jasmine.createSpyObj('TaxService', {
       federalIncomeTax: 0,
       stateIncomeTax: 0,
       socialSecurity: 0,
       medicare: 0
     });
     service = new PayrollService(taxServiceSpy);
   });

   describe('net pay calculations', () => {
     ...
   });
});
```

これにより、テストでは `taxServiceSpy.federalIncomeTax.and.returnValue(73.24)` などのモックの設定を介して様々な税金計算から戻される値を制御できます。これにより、「差引支給額」のテストを税金計算ロジックから独立させることができます。税金のコードが変更された場合、修正する必要があるのは税金 service 関連のコードとテストのみです。差引支給額のテストは、税金がどのように計算されるかを考慮せず、値が適切に適用されるのみであるため、そのまま機能し続けることができます。

`ionic g service name` で service を生成するときに使われる scaffold は Angular のテストユーティリティを使ってテストモジュールをセットアップします。必ずしもそうする必要はありません。ただし、このコードを残しておくことで、手動でサービスを構築したり、次のように注入したりすることができます:

```tsx
import { TestBed, inject } from '@angular/core/testing';

import { PayrollService } from './payroll.service';
import { TaxService } from './tax.service';

describe('PayrolService', () => {
  let taxServiceSpy;

  beforeEach(() => {
    taxServiceSpy = jasmine.createSpyObj('TaxService', {
      federalIncomeTax: 0,
      stateIncomeTax: 0,
      socialSecurity: 0,
      medicare: 0,
    });
    TestBed.configureTestingModule({
      providers: [PayrollService, { provide: TaxService, useValue: taxServiceSpy }],
    });
  });

  it('does some test where it is injected', inject([PayrollService], (service: PayrollService) => {
    expect(service).toBeTruthy();
  }));

  it('does some test where it is manually built', () => {
    const service = new PayrollService(taxServiceSpy);
    expect(service).toBeTruthy();
  });
});
```

#### HTTP データ Service のテスト

HTTP 操作を実行するほとんどの service は、それらの操作を実行するために Angular の HttpClient service を使用します。そのようなテストには、Angular の `HttpClientTestingModule` を使うことが推奨されています。このモジュールの詳細なドキュメントは <a href="https://angular.jp/guide/http#testing-http-requests" target="_blank">Angular の HTTPリクエストをテストする</a> のガイドを参照してください。

このようなテストの基本的な設定は次のようになります:

```tsx
import { HttpBackend, HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

import { IssTrackingDataService } from './iss-tracking-data.service';

describe('IssTrackingDataService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let issTrackingDataService: IssTrackingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [IssTrackingDataService],
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    issTrackingDataService = new IssTrackingDataService(httpClient);
  });

  it('exists', inject([IssTrackingDataService], (service: IssTrackingDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('location', () => {
    it('gets the location of the ISS now', () => {
      issTrackingDataService.location().subscribe((x) => {
        expect(x).toEqual({ longitude: -138.1719, latitude: 44.4423 });
      });
      const req = httpTestingController.expectOne('http://api.open-notify.org/iss-now.json');
      expect(req.request.method).toEqual('GET');
      req.flush({
        iss_position: { longitude: '-138.1719', latitude: '44.4423' },
        timestamp: 1525950644,
        message: 'success',
      });
      httpTestingController.verify();
    });
  });
});
```

### Pipe

pipe は、特別に定義されたインタフェースを持つ service のようなものです。このクラスには、入力値(およびその他のオプションの引数)を操作してページにレンダリングされる出力を作成するための public メソッド `transform` が含まれています。パイプをテストするには、パイプをインスタンス化し、transform メソッドを呼び出して結果を検証します。

簡単な例として、`Person` オブジェクトを受け取り、名前をフォーマットする pipe を見てみましょう。簡単にするために、`Person` は `id`、`firstName`、`lastName`、`middleInitial` で構成されるとします。パイプの要件は、名・姓・ミドルネームのいずれかが存在しない場合に、名前を「性、名 M(ミドルネーム)。」として出力することです。このようなテストは次のようになります:

```tsx
import { NamePipe } from './name.pipe';

import { Person } from '../../models/person';

describe('NamePipe', () => {
  let pipe: NamePipe;
  let testPerson: Person;

  beforeEach(() => {
    pipe = new NamePipe();
    testPerson = {
      id: 42,
      firstName: 'Douglas',
      lastName: 'Adams',
      middleInitial: 'N',
    };
  });

  it('exists', () => {
    expect(pipe).toBeTruthy();
  });

  it('formats a full name properly', () => {
    expect(pipe.transform(testPerson)).toBeEqual('Adams, Douglas N.');
  });

  it('handles having no middle initial', () => {
    delete testPerson.middleInitial;
    expect(pipe.transform(testPerson)).toBeEqual('Adams, Douglas');
  });

  it('handles having no first name', () => {
    delete testPerson.firstName;
    expect(pipe.transform(testPerson)).toBeEqual('Adams N.');
  });

  it('handles having no last name', () => {
    delete testPerson.lastName;
    expect(pipe.transform(testPerson)).toBeEqual('Douglas N.');
  });
});
```

また、pipe を利用するコンポーネントおよびページでの DOM テストを介して pipe を実行することも有益です。

## エンドツーエンドテスト

エンドツーエンドのテストは、アプリケーションが全体として機能し、多くの場合、ライブデータへの接続を含むことを検証するために使用されます。一方で、ユニットテストは分離されたコードユニットに重点を置いているため、アプリケーションロジックの低レベルのテストが可能ですが、エンドツーエンドテストはさまざまなユーザーストーリーや使用・シナリオに重点を置いており、アプリケーション全体を通したデータフローの総合的な高レベルのテストを提供します。また一方で、ユニットテストではアプリケーションのロジックの問題を明らかにしようとしますが、エンドツーエンドテストでは、個々のユニットが一緒に使用される場合に発生する問題を明らかにしようとします。エンドツーエンドのテストにより、アプリケーションの全体的なアーキテクチャに関する問題が明らかになります。

エンドツーエンドテストはユーザーストーリーを実行し、個々のコードモジュールではなくアプリケーション全体を対象とするため、エンドツーエンドテストは、メインアプリケーション自体のコードとは別に、プロジェクト内の独自のアプリケーションとして存在します。ほとんどのエンドツーエンドテストは、アプリケーションとの共通のユーザー対話を自動化し、それらの対話の結果を判別するために DOM を調査します。

### テストの構成

`@ionic/angular` アプリケーションが作成されると、 デフォルトのエンドツーエンドのテストアプリケーションが `e2e` フォルダに生成されます。このアプリケーションは <a href="https://www.protractortest.org/" target="_blank">Protractor</a> を使用してブラウザを制御し、<a href="https://jasmine.github.io/" target="_blank">Jasmine</a> を使用してテストを構築し、実行します。アプリケーションは、初期時は次の4つのファイルで構成されています:

- `protractor.conf.js` - Protractor の設定ファイル
- `tsconfig.e2e.json` - テストアプリケーション用の特定の TypeScript の設定
- `src/app.po.ts` - アプリケーションをナビゲートするメソッド、DOM 内の要素を照会するメソッド、ページ上の要素を操作するメソッドを含むページオブジェクト
- `src/app.e2e-spec.ts` - テスト用のスクリプト

#### ページオブジェクト

エンドツーエンドのテストは、アプリケーションとの共通のユーザー対話を自動化し、アプリケーションが応答するのを待ち、対話の結果を判別するために DOM を検査します。これには、多くの DOM 操作と試験が必要です。これらをすべて手作業で行うと、テストは非常に脆くなり、見て理解することや保守が困難になります。

ページオブジェクトは、TypeScript クラスの単一ページの HTML をカプセル化し、テスト用のスクリプトがアプリケーションと対話するために使用するAPIを提供します。DOM 操作ロジックをページオブジェクト内にカプセル化することで、テストが読みやすくなり、かつ判断することがはるかに簡単になり、テストの保守コストが大幅に削減されます。洗練されたページオブジェクトを作成することは、高品質で保守しやすいエンドツーエンドのテストを作成するための鍵です。

##### ベースページオブジェクト

多くのテストは、ページが表示されるのを待ったり、input にテキストを入力したり、ボタンをクリックするなどのアクションに依存しています。これを行うために使用されるメソッドは、適切な DOM 要素の変更を取得するために使用されるCSSセレクターのみと一貫性があります。したがって、このロジックを、他のページオブジェクトが使用できるベースクラスに抽象化することは理にかなっています。

すべてのページオブジェクトがサポートを必要とするいくつかのベースメソッドを実装する例を次に示します:

```tsx
import { browser, by, element, ExpectedConditions } from 'protractor';

export class PageObjectBase {
  private path: string;
  protected tag: string;

  constructor(tag: string, path: string) {
    this.tag = tag;
    this.path = path;
  }

  load() {
    return browser.get(this.path);
  }

  rootElement() {
    return element(by.css(this.tag));
  }

  waitUntilInvisible() {
    browser.wait(ExpectedConditions.invisibilityOf(this.rootElement()), 3000);
  }

  waitUntilPresent() {
    browser.wait(ExpectedConditions.presenceOf(this.rootElement()), 3000);
  }

  waitUntilNotPresent() {
    browser.wait(ExpectedConditions.not(ExpectedConditions.presenceOf(this.rootElement())), 3000);
  }

  waitUntilVisible() {
    browser.wait(ExpectedConditions.visibilityOf(this.rootElement()), 3000);
  }

  getTitle() {
    return element(by.css(`${this.tag} ion-title`)).getText();
  }

  protected enterInputText(sel: string, text: string) {
    const el = element(by.css(`${this.tag} ${sel}`));
    const inp = el.element(by.css('input'));
    inp.sendKeys(text);
  }

  protected enterTextareaText(sel: string, text: string) {
    const el = element(by.css(`${this.tag} ${sel}`));
    const inp = el.element(by.css('textarea'));
    inp.sendKeys(text);
  }

  protected clickButton(sel: string) {
    const el = element(by.css(`${this.tag} ${sel}`));
    browser.wait(ExpectedConditions.elementToBeClickable(el));
    el.click();
  }
}
```

##### ページ毎の要約

アプリケーションの各ページには、そのページの要素を抽象化する独自のページオブジェクトクラスがあります。ベースとなるページオブジェクトクラスを使用する場合、ページオブジェクトを作成するには、ほとんどの場合そのページに固有の要素のカスタムメソッドを作成する必要があります。多くの場合、これらのカスタム要素は、必要な作業を実行するためにベースクラスのメソッドの恩恵を受けます。

次に、単純ですが典型的なログインページのページオブジェクトの例を示します。`enterEMail()` のような多くのメソッドは、作業の大部分を行うベースクラスのメソッドを呼び出すことに注意してください。

```tsx
import { browser, by, element, ExpectedConditions } from 'protractor';
import { PageObjectBase } from './base.po';

export class LoginPage extends PageObjectBase {
  constructor() {
    super('app-login', '/login');
  }

  waitForError() {
    browser.wait(ExpectedConditions.presenceOf(element(by.css('.error'))), 3000);
  }

  getErrorMessage() {
    return element(by.css('.error')).getText();
  }

  enterEMail(email: string) {
    this.enterInputText('#email-input', email);
  }

  enterPassword(password: string) {
    this.enterInputText('#password-input', password);
  }

  clickSignIn() {
    this.clickButton('#signin-button');
  }
}
```

#### テストスクリプト

ユニットテストと同様に、エンドツーエンドのテストスクリプトはネストされた `describe()` と `it()` 関数で構成されています。エンドツーエンドのテストの場合、`describe()` 関数は一般に、特定のシナリオを、そのシナリオ内でアクションが実行されるときにアプリケーションによって表されるべき特定の振る舞いを示す `it()` 関数とともに示します。

また、ユニットテストと同様に、`describe()` および `it()` 関数で使用されるラベルは、"describe" または "it"と、完全なテストケースを形成するためにともに連結されるとき、両方とも意味をなします。

典型的なログインシナリオを実行するエンドツーエンドのテストスクリプトの簡単な例を次に示します。

```tsx
import { AppPage } from '../page-objects/pages/app.po';
import { AboutPage } from '../page-objects/pages/about.po';
import { CustomersPage } from '../page-objects/pages/customers.po';
import { LoginPage } from '../page-objects/pages/login.po';
import { MenuPage } from '../page-objects/pages/menu.po';
import { TasksPage } from '../page-objects/pages/tasks.po';

describe('Login', () => {
  const about = new AboutPage();
  const app = new AppPage();
  const customers = new CustomersPage();
  const login = new LoginPage();
  const menu = new MenuPage();
  const tasks = new TasksPage();

  beforeEach(() => {
    app.load();
  });

  describe('before logged in', () => {
    it('displays the login screen', () => {
      expect(login.rootElement().isDisplayed()).toEqual(true);
    });

    it('allows in-app navigation to about', () => {
      menu.clickAbout();
      about.waitUntilVisible();
      login.waitUntilInvisible();
    });

    it('does not allow in-app navigation to tasks', () => {
      menu.clickTasks();
      app.waitForPageNavigation();
      expect(login.rootElement().isDisplayed()).toEqual(true);
    });

    it('does not allow in-app navigation to customers', () => {
      menu.clickCustomers();
      app.waitForPageNavigation();
      expect(login.rootElement().isDisplayed()).toEqual(true);
    });

    it('displays an error message if the login fails', () => {
      login.enterEMail('test@test.com');
      login.enterPassword('bogus');
      login.clickSignIn();
      login.waitForError();
      expect(login.getErrorMessage()).toEqual('The password is invalid or the user does not have a password.');
    });

    it('navigates to the tasks page if the login succeeds', () => {
      login.enterEMail('test@test.com');
      login.enterPassword('testtest');
      login.clickSignIn();
      tasks.waitUntilVisible();
    });
  });

  describe('once logged in', () => {
    beforeEach(() => {
      tasks.waitUntilVisible();
    });

    it('allows navigation to the customers page', () => {
      menu.clickCustomers();
      customers.waitUntilVisible();
      tasks.waitUntilInvisible();
    });

    it('allows navigation to the about page', () => {
      menu.clickAbout();
      about.waitUntilVisible();
      tasks.waitUntilInvisible();
    });

    it('allows navigation back to the tasks page', () => {
      menu.clickAbout();
      tasks.waitUntilInvisible();
      menu.clickTasks();
      tasks.waitUntilVisible();
    });
  });
});
```

### 設定

デフォルトの設定では、開発に使用される同じ `environment.ts` ファイルを使います。エンドツーエンドのテストで使用するデータをより適切に制御するには、テスト用の特定の環境を用意し、テストにその環境を使用すると便利なことが多いです。このセクションでは、この設定を作成する1つの方法を示します。

#### テスト環境

テスト環境を設定するには、テスト専用のバックエンドを使用する新しい環境ファイルを作成し、その環境を使うために `angular.json` ファイルを更新し、`package.json` 中の `e2e` スクリプトを `test` 環境を指定するように修正します。

##### `environment.e2e.ts` ファイルを生成

Angular の `environment.ts` と `environment.prod.ts` ファイルは、アプリケーションのバックエンドのデータサービスのベース URL などの情報を格納するために度々使用されます。また、同じ情報を提供する `environment.e2e.ts` を作成してください。これは、開発または本番のバックエンドサービスではなく、テスト専用のバックエンドサービスにのみ接続します。以下に例を示します:

```tsx
export const environment = {
  production: false,
  databaseURL: 'https://e2e-test-api.my-great-app.com',
  projectId: 'my-great-app-e2e',
};
```

##### `angular.json` ファイルを修正

`angular.json` ファイルを使用するには、このファイルを修正する必要があります。これは階層化プロセスです。以下の XPath リストに従って、必要な設定を追加しましょう。

`/projects/app/architect/build/configurations` にファイルの置換を行う `test` という名前の設定を追加します:

```json
"test": {
  "fileReplacements": [
    {
      "replace": "src/environments/environment.ts",
      "with": "src/environments/environment.e2e.ts"
    }
  ]
}
```

`/projects/app/architect/serve/configurations` に、上記で定義した `test` というビルドの設定をブラウザターゲットに指定する `test` という名前の設定を追加します。

```json
"test": {
  "browserTarget": "app:build:test"
}
```

`/projects/app-e2e/architect/e2e/configurations` に、上記で定義した `test` という起動設定で開発サーバーターゲットを指定する `test` という名前の設定を追加します。

```json
"test": {
  "devServerTarget": "app:serve:test"
}
```

##### `package.json` ファイルを修正

`npm run e2e` が `test` の設定を使うように `package.json` ファイルを修正します。

```json
"scripts": {
  "e2e": "ng e2e --configuration=test",
  "lint": "ng lint",
  "ng": "ng",
  "start": "ng serve",
  "test": "ng test",
  "test:dev": "ng test --browsers=ChromeHeadlessCI",
  "test:ci": "ng test --no-watch --browsers=ChromeHeadlessCI"
},
```

#### テストクリーンアップ

エンドツーエンドテストが何らかの方法でデータを変更する場合は、テストが完了したらデータを既知の状態に一度リセットすると便利です。そのための1つの方法は:

1. クリーンアップを実行するエンドポイントを生成する。
1. `protractor.conf.js` ファイルによってエクスポートされる `config` オブジェクトに `onCleanUp()` 関数を追加する

次に例を示します:

```javascript
onCleanUp() {
  const axios = require('axios');
  return axios
    .post(
      'https://e2e-test-api.my-great-app.com/purgeDatabase',
      {}
    )
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err));
}
```
