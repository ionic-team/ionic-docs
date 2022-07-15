import clsx from 'clsx';
import React from 'react';

import styles from './index.module.scss';

export default function AppWizard(props) {
  return (
    <div {...props} className={clsx(props.className, 'app-wizard', styles.appWizard)}>
      <div className="heading-group">
        <header>ウィザードではじめる</header>
        <p>
          App Wizard を使用して、Ionic プロジェクトをビジュアルに生成します。テンプレート、カスタムカラー、アプリアイコン、JavaScriptフレームワークを選択し
          JavaScript Framework を選択し、ビルドを迅速に開始します。
        </p>
      </div>
      <div>
        <a href="https://ionicframework.com/start" className="wizard-button">
          ウィザードを開く <ion-icon name="arrow-forward-outline" />
        </a>
      </div>
    </div>
  );
}
