import { h } from '@stencil/core';
import { Angular, JavaScript, React, Vue } from '../../icons';
import { useLocalStorage } from '../../local-storage';

const frameworks = [
  'Angular',
  'JavaScript',
  'React',
  'Vue'
];

const [
  getFramework,
  setFramework
] = useLocalStorage('ionic-docs:framework', frameworks[0]);

const frameworkIcons = {
  Angular,
  JavaScript,
  React,
  Vue
};

const renderOption = (framework: string) => {
  const Icon = frameworkIcons[framework];
  return (
    <div class="FrameworkSelect-framework">
      <Icon class="FrameworkSelect-icon"/>
      <span>{framework}</span>
    </div>
  );
};

export const FrameworkSelect = () => (
  <docs-select
    class="FrameworkSelect"
    options={frameworks}
    optionRenderer={renderOption}
    initializer={getFramework}
    onSelection={(ev) => setFramework(ev.detail)}/>
);
