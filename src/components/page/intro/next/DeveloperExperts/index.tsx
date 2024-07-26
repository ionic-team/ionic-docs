import React from 'react';
import styles from './index.module.scss';

export default function DeveloperExperts() {
  return (
    <div className={styles.developerExperts}>
      <header>
        <h3 className={styles.developerExpertsTitle}>Featured Ionic Developer Expert Projects</h3>
        <p className={styles.developerExpertsDescription}>
          Extend your knowledge of Ionic from premium educational materials made by community members.
        </p>
      </header>
      <div className={styles.developerExpertsLinks}>
        <a href="https://ionicacademy.com" target="_blank" rel="noopener noreferrer">
          Ionic Academy →
        </a>
        <a href="https://ionicstart.com" target="_blank" rel="noopener noreferrer">
          Ionic Start →
        </a>
        <a href="https://ionicthemes.com" target="_blank" rel="noopener noreferrer">
          Ionic Themes →
        </a>
        <a href="https://ionicreacthub.com" target="_blank" rel="noopener noreferrer">
          Ionic React Hub →
        </a>
      </div>
    </div>
  );
}
