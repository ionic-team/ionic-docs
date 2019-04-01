import { Angular, JavaScript, React, Vue } from '../../icons';
import { useLocalStorage } from '../../local-storage';

const [
  getFramework,
  setFramework
] = useLocalStorage('ionic-docs:framework', 'Angular');

const FrameworkIcons = {
  Angular,
  JavaScript,
  React,
  Vue
};

const renderOption = (framework: string) => {
  const Icon = FrameworkIcons[framework];
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
    options={['Angular', 'JavaScript', 'React', 'Vue']}
    optionRenderer={renderOption}
    initializer={getFramework}
    onSelect={setFramework}/>
);
