import clsx from 'clsx';
import React from 'react';
import releases from './release-notes.json';

import styles from './styles.module.css';

interface Release {
  body: string;
  element: string;
  name: string;
  published_at: string;
  symbol: string;
  tag_name: string;
  type: string;
  version: string;
}

export default function ReleaseNotes(props: { [key: string]: any }) {
  if (releases.length === 0) {
    return [
      <p>
        Unable to load Releases. Please see all releases{' '}
        <a href="https://github.com/ionic-team/ionic/releases" target="_blank">
          on GitHub
        </a>
        .
      </p>,
    ];
  }

  return (
    <article>
      <p className={styles.intro}>
        A complete release history for Ionic Framework is available{' '}
        <a href="https://github.com/ionic-team/ionic/releases" target="_blank">
          on GitHub
        </a>
        . Documentation for recent releases can also be found below.
      </p>

      <p>
        See versioning for information about our{' '}
        <a href="/docs/reference/versioning">policy and commitment to stability</a>.
      </p>
      <div className={styles['release-notes']}>
        {releases.map((release: Release, index) => (
          <section className={clsx(styles['release-note'], styles[`release-note-${release.type}`])}>
            <div className={styles['release-tag-wrapper']}>
              <h2 id={release.version}>
                <a href={`#${release.version}`} className={styles['release-tag']}>
                  <span className={styles['release-symbol']}>{release.symbol}</span>
                  <span className={styles['release-version']}>{release.version}</span>
                </a>
              </h2>
            </div>

            <div className={styles['release-info']}>
              <div className={styles['release-header']}>
                <h2>
                  <span className={styles['release-version']}>{release.version}</span>
                  {release.type !== 'patch' ? ' ' + release.element : null}
                </h2>
                <span className={styles['release-badge']}>{release.type}</span>
                {index === 0 ? (
                  <span className={clsx(styles['release-badge'], styles['release-badge-latest'])}>
                    Latest Production Version
                  </span>
                ) : null}
              </div>
              <div className={styles['release-published']}>
                <h3>{release.published_at}</h3>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: release.body,
                }}
              ></div>
            </div>
          </section>
        ))}
      </div>
      <blockquote>
        To see more releases, visit{' '}
        <a href="https://github.com/ionic-team/ionic/releases/" target="_blank">
          GitHub
        </a>
        .
      </blockquote>
    </article>
  );
}

const getReleaseClasses = (release: any) => {
  return {
    'release-note': true,
    [`release-note-${release.type}`]: true,
  };
};
