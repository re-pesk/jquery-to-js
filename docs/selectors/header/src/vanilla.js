const qq = (selector, context) => (context || document).querySelectorAll(selector);

qq('h1, h2, h3, h4, h5, h6').forEach((element) => {
  element.style.backgroundColor = '#ccc';
  element.style.color = 'blue';
})
