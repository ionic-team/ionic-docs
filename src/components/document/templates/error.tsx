import { sample } from '../../../utils';

export default (response: Response) => (
  <main class="Error full-screen">
    <div>{ sample(appropriateEmoji) }</div>
    <h1>{ response.statusText }</h1>
    <p>{ getHelpfulMessage(response) }</p>
  </main>
);

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
