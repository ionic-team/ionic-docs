exports.allow = [
  'disabled', // `disabled` is used as a technical term
  'invalid', // `invalid` is used as a technical term
  'host-hostess', // `host` is used as a technical term
  'hostesses-hosts', // `hosts` is used as a technical term
  'dad-mom', // `pop` is used as a technical term
  'white', // `white` is used as a technical term
  'whitespace', // `whitespace` is used as a technical term
];

// We don't expect the level 0 words to show up in this documentation as
// profanity, so we increase the sureness to avoid warnings for words such
// as 'hook', 'execute' or `color` as these are technical terms
// https://github.com/get-alex/alex#configuration
exports.profanitySureness = 1;
