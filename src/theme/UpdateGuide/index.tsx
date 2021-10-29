import React, { useState } from 'react';
import styles from './styles.module.css';

interface JSFramework {
  displayName: string;
  value: string
}

interface IonicVersion {
  displayName: string;
  value: number;
}

const UpdateGuide: React.FC = () => {
  const JSFrameworks: JSFramework[] = [
    { displayName: 'Angular', value: 'angular' },
    { displayName: 'React', value: 'react' },
    { displayName: 'Vue', value: 'vue' },
    { displayName: 'None', value: 'none' }
  ];

  const FromIonicVersions: IonicVersion[] = [
    { displayName: '5.0', value: 5 },
    { displayName: '4.0', value: 4 },
    { displayName: '3.0', value: 3 }
  ]

  const ToIonicVersions: IonicVersion[] = [
    { displayName: '6.0', value: 6 },
    { displayName: '5.0', value: 5 },
    { displayName: '4.0', value: 4 }
  ]

  const [jsFramework, setJSFramework] = useState('angular');
  const [fromVersion, setFromVersion] = useState(5);
  const [toVersion, setToVersion] = useState(6);

  const getFramework = (value: string) => {
    return JSFrameworks.find(framework => framework.value === value);
  }

  const renderGuide = (fromVersion: number, toVersion: number) => {
    return (
      <div>
        <h3>Updating Ionic {getFramework(jsFramework).displayName} from version {fromVersion} to version {toVersion}</h3>
        Update body here
      </div>
    )
  }

  const renderGuides = () => {
    const updateArray = [];
    for (let i = fromVersion; i < toVersion; i++) {
      updateArray.push(
        [i, i + 1]
      )
    }
    return (
      <div>
        {updateArray.map(update => (
          renderGuide(update[0], update[1])
        ))}
      </div>
    )
  }

  return (
    <div>
      <div className={styles['guide-container']}>
      <h3>JavaScript Framework</h3>
      <div className="radio-group">
        {JSFrameworks.map(framework => (
          <div className="radio">
            <input
              type="radio"
              id={framework.value}
              name="js-framework"
              value={framework.value}
              onChange={(ev) => setJSFramework(ev.target.value)}
              checked={jsFramework === framework.value}
            />
            <label htmlFor={framework.value}>{framework.displayName}</label>
          </div>
        ))}
      </div>

      <h3>Ionic Versions</h3>

      <div className="version">
        <label htmlFor="from">From: </label>
        <select
          id="from"
          onChange={(ev) => setFromVersion(parseInt(ev.target.value))}
        >
          {FromIonicVersions.map(version => (
            <option value={version.value}>{version.displayName}</option>
          ))}
        </select>
      </div>

      <div className="version">
        <label htmlFor="to">To: </label>
        <select
          id="to"
          onChange={(ev) => setToVersion(parseInt(ev.target.value))}
        >
          {ToIonicVersions.map(version => (
            <option value={version.value}>{version.displayName}</option>
          ))}
        </select>
      </div>
    </div>
      <div className={styles['guide-details']}>
        {renderGuides()}
      </div>
    </div>
  )
}


export default UpdateGuide;
