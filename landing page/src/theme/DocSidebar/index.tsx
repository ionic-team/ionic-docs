import OriginalSidebar from '@theme-original/DocSidebar';
import React from 'react';

export default function DocSidebar(props) {
  return (
    <>
      <OriginalSidebar {...props} />
      <nav>
        <h3>Ionic Framework</h3>
        <ul>
          <li>Ionic Angular</li>
          <li>Ionic React</li>
          <li>Ionic Vue</li>
        </ul>
        <h3>Ionic Extensions</h3>
        <ul>
          <li>Native Plugins</li>
          <li>Ionic Auth</li>
          <li>Ionic Biometrics</li>
          <li>Ionic Storage</li>
          <li>Ionic Portals</li>
        </ul>
        <h3>Appflow</h3>
        <ul>
          <li>Overview</li>
          <li>Live Updates</li>
          <li>Native Builds</li>
          <li>App Publishing</li>
          <li>Automations</li>
          <li>Cloud CLI</li>
        </ul>
        <h3>Ionic CLI</h3>
        <ul>
          <li>Overview</li>
          <li>Configuration</li>
          <li>Live Reload</li>
          <li>Using a Proxy</li>
          <li>Changelog</li>
        </ul>
        <h3>Ionic CLI</h3>
        <ul>
          <li>Overview</li>
          <li>Configuration</li>
          <li>Live Reload</li>
          <li>Using a Proxy</li>
          <li>Changelog</li>
        </ul>
        <h3>Other Tools</h3>
        <ul>
          <li>Ionicons</li>
          <li>Capacitor.js</li>
          <li>Stencil.js</li>
        </ul>
      </nav>
    </>
  );
}
