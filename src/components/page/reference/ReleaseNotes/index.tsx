import Link from '@docusaurus/Link';
import clsx from 'clsx';
import React from 'react';
import releases from './release-notes.json';

import styles from './styles.module.css';

interface Release {
  body: string;
  name: string;
  published_at: string;
  tag_name: string;
  type: string;
  version: string;
}

export default function ReleaseNotes(props: { [key: string]: any }) {
  if (releases.length === 0) {
    console.warn(
      `Could not load release notes data. Refer to https://github.com/ionic-team/ionic-docs/blob/main/CONTRIBUTING.md#github-token for setup instructions.`
    );

    return [
      <p key="empty-releases">
        Unable to load Releases. Please see all releases{' '}
        <Link to="https://github.com/ionic-team/ionic-framework/releases">on GitHub</Link>.
      </p>,
    ];
  }

  return (
    <article>
      <p className={styles.intro}>
        A complete release history for Ionic Framework is available{' '}
        <Link to="https://github.com/ionic-team/ionic-framework/releases">on GitHub</Link>. Documentation for recent
        releases can also be found below.
      </p>

      <p>
        See versioning for information about our{' '}
        <Link to="/reference/versioning">policy and commitment to stability</Link>.
      </p>
      <div className={styles['release-notes']}>
        {releases.map((release: Release, index) => (
          <section
            key={release.tag_name}
            className={clsx(styles['release-note'], styles[`release-note-${release.type}`])}
          >
            <div className={styles['release-info']}>
              <div className={styles['release-header']}>
                <Link to={`https://github.com/ionic-team/ionic-framework/releases/v${release.version}`}>
                  <h2>
                    <span className={styles['release-version']}>{release.version}</span>
                  </h2>
                </Link>
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
        To see more releases, visit <Link to="https://github.com/ionic-team/ionic-framework/releases/">GitHub</Link>.
      </blockquote>
    </article>
  );
}
