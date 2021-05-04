import { h } from '@stencil/core';

import { toHypertext } from '../to-hypertext';

export default (props: { [key: string]: any }) => {
  const { page } = props;
  const headings = [...page.headings];
  const examples = renderExamples(page.exampleCommands);
  const inputs = renderInputs(page.inputs);
  const options = renderOptions(page.options);
  const advancedOptions = renderAdvancedOptions(page.options);

  if (examples) {
    headings.push({
      text: 'Examples',
      href: '#examples',
    });
  }

  if (inputs) {
    headings.push({
      text: 'Inputs',
      href: '#inputs',
    });
  }

  if (options) {
    headings.push({
      text: 'Options',
      href: '#options',
    });
  }

  if (advancedOptions) {
    headings.push({
      text: 'Advanced Options',
      href: '#advanced-options',
    });
  }

  return (
    <article>
      <h1>{page.title}</h1>
      <div class="page-meta">
        <docs-table-of-contents links={headings} basepath={page.path}/>
        <internal-ad></internal-ad>
      </div>
      <section class="summary intro">
        {toHypertext(h, page.summary)}
      </section>
      {renderUsage(page)}
      <section class="description">
        {toHypertext(h, page.body)}
      </section>
      {examples}
      {inputs}
      {options}
      {advancedOptions}
    </article>
  );
};

const renderUsage = (command: any) => {
  return (
    <command-line>
      <command-prompt>
        {command.title}
        { command.inputs.length > 0 ?
          ` ${command.inputs.map((input: any) => input.required ? `<${input.name}>` : `[<${input.name}>]`).join(' ')} ` :
          ' ' }
        [options]
      </command-prompt>
    </command-line>
  );
};

const renderInputs = (inputs: any[] = []) => {
  if (inputs.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 id="inputs">
        <a href="#inputs">Inputs</a>
      </h2>
      <docs-reference
        data={inputs}
        keys={{
          Head: input => input.name,
          Description: input => <div innerHTML={input.summary} />,
        }}
      />
    </section>
  );
};

const renderOptions = (options: any[] = []) => {
  options = options.filter(option => !option.groups.includes('advanced'));

  if (options.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 id="options">
        <a href="#options">Options</a>
      </h2>
      {renderOptionList(options)}
    </section>
  );
};

const renderAdvancedOptions = (options: any[] = []) => {
  options = options.filter(option => option.groups.includes('advanced'));

  if (options.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 id="advanced-options">
        <a href="#advanced-options">Advanced Options</a>
      </h2>
      {renderOptionList(options)}
    </section>
  );
};

const renderOptionList = (options: any[] = []) => {
  return (
    <docs-reference
      data={options}
      keys={{
        Head: option => renderOptionSpec(option),
        Description: option => <div innerHTML={option.summary} />,
        Aliases: option => option.aliases.length > 0 ? option.aliases.map((alias: any) => <code>-{alias}</code>) : null,
        Default: option => option.default && option.type === 'string' ? option.default : null
      }}
    />
  );
};

const renderOptionSpec = (option: any) => {
  return (
    <a href={`#option-${option.name}`} id={`option-${option.name}`}>
      --{option.type === 'boolean' && option.default === true ? `no-${option.name}` : option.name}
      { option.type === 'string' ?
        <span class="option-spec">
          {`=<${option.spec.value}>`}
        </span> :
        null }
    </a>
  );
};

const renderExamples = (examples = []) => {
  if (examples.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 id="examples">
        <a href="#examples">Examples</a>
      </h2>
      <command-line nobuttons>
      { examples.map(command => (
        <command-prompt>{command}</command-prompt>)
      )}
      </command-line>
    </section>
  );
};
