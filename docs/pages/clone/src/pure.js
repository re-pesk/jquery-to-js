document.querySelector('p').prepend(
  ...Array.from(document.querySelectorAll('b')).map(element => element.cloneNode(true))
);
