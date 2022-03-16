/**
 * The parent Playground component will
 * dispatch messages whenever the theme in
 * the Ionic Docs website has changed so that
 * the demos loaded in iframes can match the
 * docs website theme.
 */

window.addEventListener('message', (ev) => {
  const { data } = ev;

  if (data.darkMode) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
});
