import { h } from '@stencil/core';

import { sample } from '../../../utils';

export default (response: Response) => (
  <main class="Error full-screen">
    <div>{sample(appropriateEmoji)}</div>
    <h1>{getHelpfulTitle(response)}</h1>
    <p>{getHelpfulMessage(response)}</p>
  </main>
);

const getHelpfulTitle = (response: Response) => {
  switch (response.status) {
    case 404:
      return 'Not Found';
    default:
      return 'Uh Oh';
  }
};

const getHelpfulMessage = (response: Response) => {
  switch (response.status) {
    case 404:
      return 'Sorry, we couldn\'t find that page.';
    default:
      return 'Sorry, something went wrong.';
  }
};

const appropriateEmoji = [
  '🧐',
  '😕',
  '😟',
  '😑',
  '😧',
  '🤭',
  '😯',
  '😮',
  '🤨',
  '🙃',
  '🤕',
  '🤯',
  '😫'
];
