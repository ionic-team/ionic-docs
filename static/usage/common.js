/**
 * Wait for the initial HTML document to be
 * loaded and parsed before adding the message
 * listener. Otherwise, it is possible that the message
 * listener will fire before the body is ready.
 */
window.addEventListener('DOMContentLoaded', () => {
  /**
   * The parent Playground component will
   * dispatch messages whenever the theme on
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

  /**
   * The Playground needs to wait for the message listener
   * to be created before sending any messages, otherwise
   * they will be lost. Once the listener is done, fire
   * the demoReady event. In the event that the Playground's
   * useEffect hook fires before the message listener is created,
   * the Playground component will wait for the demoReady event
   * before proceeding.
   *
   * We also set window.demoReady in the event that the
   * useEffect hook fires after the message listener is
   * already created so that it does not wait on an event
   * that was already fired.
   */
  const ev = new CustomEvent('demoReady');
  window.dispatchEvent(ev);

  window.demoReady = true;
});
