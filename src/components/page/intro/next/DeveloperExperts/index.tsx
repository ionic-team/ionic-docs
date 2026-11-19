import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './index.module.scss';

export default function DeveloperExperts() {
  return (
    <div className={styles.developerExperts}>
      <header>
        <Heading as="h3" className={styles.developerExpertsTitle}>
          Featured Ionic Developer Expert Projects
        </Heading>
        <p className={styles.developerExpertsDescription}>
          Extend your knowledge of Ionic from premium educational materials made by community members.
        </p>
      </header>
      <div className={styles.developerExpertsLinks}>
        <Link to="https://ionicacademy.com">Ionic Academy →</Link>
        <Link to="https://ionicstart.com">Ionic Start →</Link>
        <Link to="https://ionicthemes.com">Ionic Themes →</Link>
        <Link to="https://ionicreacthub.com">Ionic React Hub →</Link>
      </div>
    </div>
  );
}
