window.addEventListener('message', (ev) => {
  const { data } = ev;

  if (data.darkMode) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
});
