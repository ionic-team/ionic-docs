/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import styles from './styles.module.css';

const limitDatetime = '2022-07-09 14:00:00';

function EventNavbar(): JSX.Element {
  return (
    new Date().getTime() < new Date(limitDatetime).getTime() &&
    (
      <section className={styles.eventNavbar}>
        <aside className={styles.eventNavbarContent}>
          <h1 className={styles.headerTitle}>Ionic Meetup<br />#22 Tokyo</h1>
          <p className={styles.headerCopy}>新宿駅徒歩圏内の好立地での開催。2022/07/09(土)、東京開催。</p>
          <a className={styles.headerLink} href="https://ionic-jp.connpass.com/event/251256/" target="_blank">参加登録</a>
        </aside>
      </section>
    )
  )
}

export default EventNavbar;
